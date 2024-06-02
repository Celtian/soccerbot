import { writeFileSync } from 'fs-extra';
import { join } from 'path';
import packageJson from '../dist/package.json';

// Modify package.json in dist folder
const pkg: Record<string, any> = packageJson;

pkg.scripts = {};
pkg.devDependencies = {};
pkg.main = 'es5/index.js';
pkg.module = 'es6/index.js';
pkg.sideEffects = false;
pkg.engines.npm = undefined;

writeFileSync(join(__dirname, '..', 'dist', 'package.json'), JSON.stringify(pkg, null, 2));
console.log('File package.json modified:', pkg);
