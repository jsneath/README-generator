const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = ["If you have any questions about the repo, open an issue or contact me directly at", "You can find more of my work at"];


// // function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README successfully created!');
      }
    });
  }
  

  function generateBadge(license) {
    if (license !== 'None') {
      return `![License](https://img.shields.io/badge/license-${license.replace(' ', '_')}-blue.svg)`;
    } else {
      return '';
    }
  }



// function to initialize program
function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please write a description of the project',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Please provide detailed installation instructions for your project:',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Is there any useful information the user should be aware of?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'test',
      },
      {
        type: 'list',
        message: 'Choose a license for your project:',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None'],
      },
       
    ])
    .then((response) => {
        response.badge = generateBadge(response.license); // add badge to response object
        const markdown = generateMarkdown(response);
        writeToFile('README.md', markdown);
      });
  
}

// function call to initialize program
init();

