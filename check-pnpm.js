if (!process.env.npm_execpath?.includes('pnpm')) {
  console.error('\x1b[31mError:\x1b[0m Please use pnpm to install dependencies.');
  process.exit(1);
}
