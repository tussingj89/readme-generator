// import needed mondules 
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const questions = [
      {
          type: "input",
          name: "Title",
          message: "What is the project title?",
      },
      {
          type: "input",
          name: "description",
          message: "Write a brief description of your project: "
      },
      {
          type: "input",
          name: "installation",
          message: "Describe the installation process if any: ",
          default: "to use simple clone the repo, Run npm i -y Run node index.js. Answers the questions and The README.md file will be created.",
      },
      {
          type: "input",
          name: "usage",
          message: "What is this project usage for?",
          default: "this project will be used to cread a README.md file using node.js"
      },
      {
        type: "input",
        name: "sampleInfo",
        message: "explain the sample code?",
    },
      {
        type: "input",
        message: "What is the path for this project's sample code?",
        default: "./assets/sampleCode.png",
        name: "sampleCode",
      },
      {
        type: "input",
        message: "What is the path for this project's screenshot?",
        default: "./assets/screenshot.mp4",
        name: "projectImgSRC",
      },
      {
          type: "list",
          name: "license",
          message: "Chose the appropriate license for this project: ",
          choices: [
              "Apache",
              "Academic",
              "GNU",
              "ISC",
              "MIT",
              "Mozilla",
              "Open"
          ],
          default: "MIT"
      },
      {
          type: "input",
          name: "contributing",
          message: "How to contribute?",
          default: "When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change."
      },
      {
        type: "input",
        name: "testing",
        message: "how to test this project? "
      },
      {
        type: "input",
        name: "technologies",
        message: "What technologies did you use? "
      },
      {
          type: "input",
          name: "username",
          message: "Please enter your GitHub username: "
      },
      {
          type: "input",
          name: "email",
          message: "Please enter your email: "
      }
]; 
    // function calling for the readme file to be written

    inquirer.prompt(questions).then(answers => {
      console.log(answers);
      fs.writeFile("README.md", generateMarkdown(answers), (err) =>
      err ? console.log(err) : console.log('success! Your README.md file was created.')
      )});
