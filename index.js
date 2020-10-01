var inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
// TODO: Whats this for?
];

// function to write README file
function writeToFile(fileName, data) {
    console.log("success");
}

// function to initialize program
function init() {
    // TODO: Whats this for?
}

// function call to initialize program
init();

    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the title of your project?",
                name: "title"
            },
            {
                type: "input",
                message: "Please describe your project:",
                name: "description"
            },
            {
                type: "input",
                message: "Please provide info about necessary installations",
                name: "installations"
            },
            {
                type: "input",
                message: "Please provide instructions for how to use your program",
                name: "usage"
            },
            // {
            //     type: "",
            //     message: "Please choose a license for your application",
            //     name: "license"
            // },
            {
                type: "input",
                message: "Please provide contribution guidelines:",
                name: "contributing"
            },
            {
                type: "input",
                message: "Please provide results from testing your application:",
                name: "tests"
            },
            // Questions
            {
                type: "input",
                message: "What is your GitHub username?",
                name: "username"
            },
            {
                type: "input",
                message: "What is your email address?:",
                name: "email"
            },
            {
                type: "input",
                message: "Please provide instructions on how a user would reach you with additional questions",
                name: "reachout"
            }
        ])
        .then(function (response) {
            const newReadme = generateMarkdown(response);
            writeToFile("RADME.md", newReadme);
        })