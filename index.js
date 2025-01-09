import fs from "fs";
import inquirer from "inquirer";

// Questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Project description:",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage information:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Contribution guidelines:",
  },
  {
    type: "list",
    name: "license",
    message: "Project license:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Email address?",
  },
];

