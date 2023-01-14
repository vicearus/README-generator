// Required packages for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter your project title.",
        name: "title"
    },
    {
        type: "input",
        message: "Write a description for your project.",
        name: "description"
    },
    {
        type: "input",
        message: "Describe the installation process for your project",
        name: "dependency",
        default: "npm i"
    },
    {
        type: "input",
        message: "What is the command for users to test your project?",
        name: "test",
        default: "npm test"
    },
    {
        type: "input",
        message: "Provide instructions for use.",
        name: "usage"
    },
    {
        type: "input",
        message: "List your contributors and collaborators.",
        name: "credits"
    },
    {
        type: "list",
        message: "Select your project license.",
        name: "license",
        choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "NONE"]
    },
    {
        type: "input",
        message: "Enter your email address.",
        name: "email"
    },
    {
        type: "input",
        message: "Enter your Github username",
        name: "username"
    }
];

// Function to initialize app and create README file with the responses
const init = () => {
    inquirer
        .prompt(questions)
        .then((response) => {
            fs.writeFile("README.md", generateMarkdown(response), (error) => 
                error ? console.log(error) : console.log("README file created!")
            )
        })
}

// Function call to initialize app
init();
