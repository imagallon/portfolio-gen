const inquirer = require("inquirer");
const fs = require("fs").promises;

function userProfile() { 
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "location",
            message: "Where are you located?"
        },
        {
            type: "input",
            name: "bio",
            message: "Please provide a sentence or two about yourself:"
        },
        {
            type: "input",
            name: "linkedin",
            message: "Please provide your linkedin link:"
        },
        {
            type: "input",
            name: "github",
            message: "Please provide your github url:",
           
        },
    ]);
}


// userProfile()
//   .then((answers) => fs.writeFile("answers.html", JSON.stringify(answers)))
//   .then(() => console.log("all done"))
//   .catch((err) => console.log(err));



userProfile()
.then((answers) => {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" type="text/css" href="./style.css">
    </head>
    <body>
    <h1 class="userProfile">${answers.name}</h1>
    <div class="userProfile">${answers.location}</div>
    <div class="userProfile">${answers.bio}</div>
    <div class="userProfile">${answers.linkedin}</div>
    <div class="userProfile">${answers.github}</div>
    <script type="text/javascript" src="01-Activities/28-Stu_Mini-project/index.js"></script>
    </body>
    </html>  
`;
    fs.writeFile('index.html', html, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('Application has run successfully.');
    });
})