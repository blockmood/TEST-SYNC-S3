#!/usr/bin/env node

const commander = require('commander');
const program = new commander.Command();

async function main() {
  program
    .version(require('../package.json').version)
    .usage('<command> [options] ');

  program
    .command('serve')
    .description('开发时 watch')
    .action(async (...args) => {
      await require('../commands/serve')(...args);
    });

  program
    .command('build')
    .description('构建')
    .action(async (...args) => {
      await require('../commands/build')(...args);
    });

  program
    .command('unit-test')
    .description('单元测试')
    .action((...args) => require('../commands/unit-test')(...args));

  await program.parseAsync(process.argv);
}

main().catch((e) => {
  error(e);
  process.exit(1);
});
