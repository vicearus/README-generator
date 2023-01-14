// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
