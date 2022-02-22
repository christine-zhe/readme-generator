// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs")
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to enter a project description!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter some information about installation',

    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter some usage information?',

    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please enter some contribution guidelines.',

    },
    {
      type: 'input',
      name: 'username',
      message: 'Please enter your Github username.',

    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your Github link.',

    },
    {
      type: 'input',
      name: 'Email',
      message: 'Please enter email.',

    },
    {
      type: 'list',
      name: 'licenses',
      message: 'What did you this project with? (Check all that apply)',
      choices: ['Apache', 'Boost', 'BSD 3-Clause']
    },
    {
      type: 'input',
      name: 'testInstructions',
      message: 'Please enter testing instructions',

    }
  ]);
};
// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile('./output/README.md', data, err => {
    if (err) {
      return console.log(err);
    }

    console.log("Success! Your README.md file has been generated")
  });
}

questions()
  .then(portfolioData => {
    console.log(portfolioData);

    


    writeToFile(generateMarkdown(portfolioData));
  });