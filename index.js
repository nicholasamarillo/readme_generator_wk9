const inquirer = require("inquirer");
const fs = require("fs");
const generate_markdown = require('./utils/generate_markdown.js')


const questions = [
    {
        name : "title",
        type : 'input',
        message : 'What is the title of your project?:'
    },
    
    {
        name : 'description',
        type : 'input',
        message : 'What is the description of your project?:'
    },

    {
        name : 'license',
        type : 'list',
        message : 'What licence were you using?',
        choices: [
            'Public', 
            'Permissive', 
            'LGPL', 
            'Copyleft', 
            'Proprietary', 
            'MIT'
        ]
    },
    
    {
        name: 'installation',
        type: 'input',
        message: "How do you install this project?",
    },

    {
       name : 'contributions',
       type: 'input',
       message: 'How can I contribute to the project?' 
    },

    {
        name : 'username',
        type : 'input',
        message : 'Please enter your Github Username:'
    },

    {
        name: 'email',
        type: 'input',
        message: 'Please enter your email.'
    },

    {
        name: 'usage',
        type: 'input',
        message: 'How do you use this program?'
    },

    {
        name: 'test',
        type: 'input',
        message: 'How do you test this program?'
    }
];

function writeFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return
        }
        console.log("Wrote to the file successfully!")
    })
};

function init(){
    return inquirer
    .prompt(questions)
    .then(answers => {
        writeFile('./README.md', generate_markdown(answers))
    })
    .catch(error => {
        if(error.isTtyError) {
            console.log('errorType')
          } else {
            console.log(error)
          }
    });
}

init();
            
 
