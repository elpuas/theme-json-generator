import inquirer from 'inquirer';
import chalk from 'chalk';

let questions = [
    {
        type: 'input',
        name: 'theme_name',
        message: chalk.green("What's the name of the theme?"),
    },
    {
        type: 'input',
        name: 'theme_description',
        message: chalk.yellow("Write a short description of the theme:"),
    },
  // Add more questions here
];

async function promptUser() {
    return inquirer.prompt(questions);
}

export default promptUser;
