// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
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
  7. [GitHub](#GitHub)
  8. [E-mail](#E-mail)
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
## GitHub
${data.github}
## E-mail
${data.email}
`;
}

module.exports = generateMarkdown;
// ${licenseBadge(data)}
