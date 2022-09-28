#!/usr/bin/env node

import clipboardy from 'clipboardy';
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

const inputs = [];

console.log('use Ctrl + D to finish');
const rl = readline.createInterface({ input, output });

rl.prompt();

rl.on('line', (cmd) => {
  const t = cmd.trim();
  if (t) {
    inputs.push(t);
  }
});

rl.on('close', () => {
  const result = inputs.map((text) => `'${text}'`).join(', ');
  if (result.length) {
    clipboardy.writeSync(result);
    console.log(result);
    console.log('↑↑↑ copied! ↑↑↑');
  }
  console.log('done.');
  process.exit(0);
});
