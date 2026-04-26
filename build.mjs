import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';

const babelPath = path.join(os.tmpdir(), 'fluxion-babel-standalone-7.29.0.js');
if (!fs.existsSync(babelPath)) {
  const response = await fetch('https://unpkg.com/@babel/standalone@7.29.0/babel.min.js');
  if (!response.ok) throw new Error(`Failed to download Babel standalone: ${response.status}`);
  fs.writeFileSync(babelPath, await response.text());
}

const context = {};
vm.createContext(context);
vm.runInContext(fs.readFileSync(babelPath, 'utf8'), context);

const source = [
  fs.readFileSync('ios-frame.jsx', 'utf8'),
  fs.readFileSync('home.jsx', 'utf8'),
  fs.readFileSync('app-entry.jsx', 'utf8'),
].join('\n\n');

const output = context.Babel.transform(source, {
  presets: ['react'],
  compact: false,
  comments: false,
}).code;

fs.writeFileSync('app.bundle.js', `${output}\n`);
console.log('Built app.bundle.js');
