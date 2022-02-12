import chalk from 'chalk';
import {commandMap} from './commandMap.js';

const args = process.argv.slice(2);
const command = args[0];
const params = args.slice(1);

if (!command) {
  console.log(chalk.green('No command passed'));
  commandMap['--help'].run();
  process.exit(1);
}

if (!commandMap[command]) {
  console.log(chalk.green(`Unknown command: ${command}`));
  commandMap['--help'].run();
  process.exit(1);
}

commandMap[command].run(params);
