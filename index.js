var inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

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

            const newHtml = generateReadme(response.name, response.location, response.bio, response.linkedIn, response.gitHub)
            console.log(newHtml);

            writeFileAsync("person.html", newHtml).then(function () {
                console.log("success")
            })
        })

