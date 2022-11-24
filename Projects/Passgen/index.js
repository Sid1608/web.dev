#!/usr/bin/env node  
//shebang
const program=require('commander');
const chalk=require('chalk');
const clipboardy=require('clipboardy');
// import chalk from 'chalk';
const createPassword=require('./utils/createPassword');
const savePassword=require('./utils/savePassword');

const log=console.log;
// console.log(process.argv);
program.version('1.0.0').description('Simple Password Generator')
// program
//     .command('generate')
//     .action(()=>{
//          console.log('Generated')
//      })
//     .parse();

program
    .option('-l, --length <length>','length of password',8)
    .option('-s, --save','save password to passwords.txt')
    .option('-nn, --no-numbers','remove numbers')
    .option('-ns, --no-symbols','remove symbols')
    .parse();
const {length,save,numbers,symbols}=program.opts();
console.log(numbers,symbols)
// if(process.argv[2]==='generate'){
//     console.log('Generated');
// }


//get generated passwords
const generatedPassword=createPassword(length,numbers,symbols)

//save to file
if(save){
    savePassword(generatedPassword)
}

//copy to clipboard
clipboardy.writySync(generatedPassword);



//ouput generated passwords

log(chalk.blue('Generated Password: ')+chalk.bold(generatedPassword));
log(chalk.yello('Password copied to clipboard'));

