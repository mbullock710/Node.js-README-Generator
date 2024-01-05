// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        type: 'input',
        name: 'credits',
        message: 'Please list any collaborators, third-party assets, or tutorials you utilized in your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide the instructions for your project. Please also provide examples of use.'

    },
    {
        type: 'input',
        name: 'license',
        message: 'Please enter the license you are using.'

    },

]
// TODO: Create a function to write README file
function writeToFile(fileName, content) {
    fs.writeFile(fileName, content, (err) =>
        err ? console.log(err) : console.log('README created!')

    )
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        const content =
            `# ${responses.title}
    
    ## Description

    ${responses.description}

    ## Installation

    ${responses.installation}

    ## Usage

    ${responses.usage}

    ## Credits

    ${responses.credits}

    ## License
    
    ${responses.license}
    `

    writeToFile('README.md', content)
    })
}

// Function call to initialize app
init();
