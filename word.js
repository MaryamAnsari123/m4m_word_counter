#! /usr/bin/env node
//install chalk (command : npm i chalk)
import chalk from "chalk";
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.bold.green.bgCyan("Enter your sentence to count the word:")
    }
]);
const words = answers.sentence.trim().split(" ");
//print the array:
console.log(words);
//print the word count:
console.log(chalk.bold.greenBright(`your sentence word count is ${words.length}`));
