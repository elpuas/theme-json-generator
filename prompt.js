const inquirer = require('inquirer');
const chalk = require('chalk');

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

function promptUser() {
    return inquirer.prompt(questions);
}

module.exports = promptUser;
