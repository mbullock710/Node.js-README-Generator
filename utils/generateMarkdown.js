// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache': 
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'MIT': 
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)`
    default:
      return ``  
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.title}

##### Table of Contents  
[Description](#Description)  
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
  
  ${responses.questions}
  `;
}

module.exports = generateMarkdown;
