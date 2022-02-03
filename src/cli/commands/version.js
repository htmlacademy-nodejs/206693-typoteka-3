import chalk from 'chalk';
import fs from 'fs';

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

export const versionCommand = {
  name: '--version',
  run() {
    console.info(chalk.blue(packageJson.version));
  }
};
