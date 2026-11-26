// Renders poster.html to entry.png (1024x1024) via headless Chromium over CDP.
// This build's --screenshot flag is a no-op, so we drive Page.captureScreenshot
// through the DevTools protocol with Node's built-in WebSocket client.
// Deterministic: same HTML + same viewport => same PNG bytes.
import { spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const dir = dirname(fileURLToPath(import.meta.url));
const html = join(dir, 'poster.html');
const out = join(dir, 'entry.png');

const candidates = [
  '/opt/meta-chromium/chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/usr/bin/google-chrome',
];
const chrome = candidates.find((c) => existsSync(c));
if (!chrome) {
  console.error('No Chromium binary found');
  process.exit(1);
}

// This Chromium build refuses to start without a WebGL domain policy file
// plus its SHA-256. The all-origins contract is the one it accepts.
const work = mkdtempSync(join(tmpdir(), 'news26-render-'));
const policyPath = join(work, 'webgl-policy.txt');
writeFileSync(policyPath, 'hatch-webgl-all-origins-v1\n');
const policySha = createHash('sha256')
  .update('hatch-webgl-all-origins-v1\n')
  .digest('hex');

const port = 9333;
const profile = join(work, 'profile');
const proc = spawn(chrome, [
  '--headless=new',
  '--no-sandbox',
  '--disable-dev-shm-usage',
  '--hide-scrollbars',
  `--hatch-webgl-allowed-domains-file=${policyPath}`,
  `--hatch-webgl-allowed-domains-sha256=${policySha}`,
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profile}`,
  'about:blank',
], { stdio: 'ignore' });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitForVersion() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (res.ok) return await res.json();
    } catch { /* not up yet */ }
    await sleep(500);
  }
  throw new Error('DevTools did not come up');
}

let ws;
try {
  await waitForVersion();
  // Create a fresh target for the poster page.
  const res = await fetch(
    `http://127.0.0.1:${port}/json/new?file://${html}`,
    { method: 'PUT' },
  );
  if (!res.ok) throw new Error(`json/new failed: ${res.status}`);
  const target = await res.json();

  ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });

  let id = 0;
  const pending = new Map();
  const events = [];
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id !== undefined && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(msg.error.message));
      else resolve(msg.result);
    } else if (msg.method) {
      events.push(msg);
    }
  };
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const mid = ++id;
    pending.set(mid, { resolve, reject });
    ws.send(JSON.stringify({ id: mid, method, params }));
  });

  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1024, height: 1024, deviceScaleFactor: 1, mobile: false,
  });
  await send('Page.navigate', { url: `file://${html}` });
  // Wait for the load event, then a beat for fonts/layout to settle.
  for (let i = 0; i < 60; i++) {
    if (events.some((e) => e.method === 'Page.loadEventFired')) break;
    await sleep(250);
  }
  await sleep(800);
  const shot = await send('Page.captureScreenshot', {
    format: 'png', fromSurface: true,
  });
  writeFileSync(out, Buffer.from(shot.data, 'base64'));
  console.log(`wrote ${out}`);
} finally {
  if (ws) ws.close();
  proc.kill('SIGKILL');
  rmSync(work, { recursive: true, force: true });
}
