#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = cmd => {
  try {
    execSync(`${cmd}`, {stdio: 'inherit'});
  } catch (e) {
    console.error(`Failed to execute ${cmd}`, e);
    process.exit(-1);
  }
}

runCommand(`git clone --depth 1 https://github.com/sergiorivera50/ned-boilerplate.git`)
runCommand(`npm install`)

console.log('Congratulations! You are ready to use N.E.D.');
