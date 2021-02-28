import { copyFileSync } from 'fs';

console.log('Copying README.ms & LICENSE into dist.');

const copyFiles = ['README.md', 'LICENSE'];
for (const file of copyFiles) {
  copyFileSync(`./${file}`, `./dist/${file}`);
}
