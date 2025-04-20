#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const maxIters = 5;
for (let iter = 0; iter < maxIters; iter++) {
  let stderr = '';
  try {
    execSync('npx tsc -p . --noEmit', { stdio: ['ignore', 'ignore', 'pipe'] });
  } catch (e) {
    stderr = e.stderr.toString();
  }
  const lines = stderr.split(/\r?\n/);
  const errors = [];
  const regex = /^(.+\.[jt]sx?):\d+:\d+ - error TS2307: Cannot find module ['"]([^'"]+)['"]/;
  for (const line of lines) {
    const m = line.match(regex);
    if (m) {
      const importer = m[1];
      const spec = m[2];
      if (spec.startsWith('.')) {
        errors.push({ importer, spec });
      }
    }
  }
  if (errors.length === 0) {
    console.log('No more missing module errors.');
    process.exit(0);
  }
  const seen = new Set();
  for (const { importer, spec } of errors) {
    const key = importer + '|' + spec;
    if (seen.has(key)) continue;
    seen.add(key);

    const importerDir = path.dirname(path.resolve(importer));
    const extFromSpec = path.extname(spec);
    let target;
    if (extFromSpec) {
      target = path.resolve(importerDir, spec);
    } else {
      target = path.resolve(importerDir, spec + '.ts');
    }
    const dir = path.dirname(target);
    fs.mkdirSync(dir, { recursive: true });
    if (fs.existsSync(target)) continue;
    if (!extFromSpec || ['.ts', '.tsx', '.js', '.jsx'].includes(extFromSpec)) {
      const content = `/**
 * TODO: Flesh out this module
 */
export const TODO: any = null;
`;
      fs.writeFileSync(target, content, 'utf8');
      console.log('Created stub:', path.relative(process.cwd(), target));
    } else {
      fs.writeFileSync(target, '', 'utf8');
      console.log('Created asset placeholder:', path.relative(process.cwd(), target));
    }
  }
}
console.error('Reached max iterations (' + maxIters + '). Some modules may still be missing.');
process.exit(1);