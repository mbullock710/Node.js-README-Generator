// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please add a description of your project, which explains the what, why, and how of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide the steps required to install your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide the instructions for your project. Please also provide examples of use.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please enter the license you are using.',
        choices: ['Apache','Eclipse','MIT','none']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please list guidelines for others to contribute to this project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write tests for your application and provide examples on how to run them here.'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'questions2',
        message: 'Enter your email address.'
    },

]
// TODO: Create a function to write README file
function writeToFile(fileName, content) {
    fs.writeFile(fileName, content, (err) =>
        err ? console.log(err) : console.log('README created!')

    )
};

async function init() {
    const res = await inquirer.prompt(questions)
        const content = generateMarkdown(res)
   
    writeToFile('README.md', content)
}

// Function call to initialize app
init();
