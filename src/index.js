import fs from "fs";
import inquirer from "inquirer";

// User input
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

// README content function
const generateREADME = (answers) => {

  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Questions
For additional questions, you may conact me here:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
`;
};

// App function
const init = async () => {
    const answers = await inquirer.prompt(questions);
    const readmeContent = generateREADME(answers);
    fs.writeFileSync("README-Sample.md", readmeContent);
    console.log("README-Sample.md has been generated!");
};

init();