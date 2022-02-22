// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
    case "Boost":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
      break;
    case "BSD 3-Clause":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      break;
    default:
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#Installation)
  3. [Usage](#Usage)  
  4. [Contribution](#Contribution)
  5. [Tests](#Tests)
  6. [License](#License)
  7. [Questions](#Questions)
 
## Description
${data.description} 
## Installation
${data.installation}
## Usage
${data.usage}
## Contribution
${data.contribution}
## Tests
${data.testInstructions}
## License
${renderLicenseBadge(data.licenses)}

## Questions
If you have questions, please email me at ${data.Email}.
### GitHub
The github link is ${data.github} and the user name is
${data.username}.
`;
}

module.exports = generateMarkdown;
// ${licenseBadge(data)}
