// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache': 
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'Eclipse': 
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    case 'MIT': 
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    default:
      return ``  
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Notes from user: I complete the license link in the function above

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// Notes from user: I complete the license section in the function above and below

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.title}

## Table of Contents  
[Description](#Description)  
[Installation](#Installation)  
[Usage](#Usage)  
[License](#License)  
[Contributing](#Contributing)  
[Tests](#Tests)  
[Questions](#Questions)  

  ## Description

  ${responses.description}

  ## Installation

  ${responses.installation}

  ## Usage

  ${responses.usage}

  ## License
  
  ${renderLicenseBadge(responses.license)}

  ## Contributing
  
  ${responses.contributing}

  ## Tests
  
  ${responses.tests}

  ## Questions

  Please reach me with any addition questions below:<br>
  https://github.com/${responses.questions}<br>
  ${responses.questions2}
  `;
}

module.exports = generateMarkdown;
