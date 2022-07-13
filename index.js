const fs = require('fs');
const inquirer = require("inquirer");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const employees = []

function startWrite() {
    writeHtml();
    addingMember()
}


function addingMember() {
inquirer 
    .prompt([
        {
            name: 'name',
            message: 'Enter team members name.',
        },
        {
            name: 'role',
            type: 'list',
            message: 'Enter a team members role',
            choices: [
                'Engineer',
                'Manager',
                'Intern'
            ],
        },
        {
            name: 'id',
            message: 'Please enter team members id',
            type: 'input'
        },
        {
            name: 'email',
            message: 'Please enter team members email'
        }])
    .then(function(data){

        if (data.role === 'Engineer') {
            moreRole = 'Github username.'
        }else if(data.role === 'Intern') {
             moreRole = 'school name.'
        }else {
             moreRole = 'office number.'
        }
    
         inquirer
        .prompt([
            {
                message: `Enter team members ${moreRole}`,
                name: 'moreRole'
            },
            {
                type: 'list',
                message: 'Would you like to add another team member?',
                choices: [
                    'Yes',
                    'No'
                ],
                name: 'anotherMember'
            }])
        .then(function(moreRole) {
            var newMember;
        
            if (data.role === 'Engineer') {
                newMember = new Engineer(data.name, data.id, data.email, moreRole.moreRole)
            }else if(data.role === 'Intern') {
                newMember = new Intern(data.name, data.id, data.email, moreRole.moreRole)
            }else {
                newMember = new Manager(data.name, data.id, data.email, moreRole.moreRole)
            } 
            employees.push(newMember)
            newHtml(newMember)
            start()

            function start() {
                
                if (moreRole.anotherMember === 'Yes') {
                    addingMember()
                }else {
                    finishHtml()
                    console.log('File created!')
                }
            }
        })
        
    })}


    function writeHtml() {
        const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team profile builder</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        </head>
        <body>
            <nav class="jumbotron bg-danger text-center py-5 bg-opacity-75">
                <h1 class="text-light">My Team</h1>
            </nav>
        
            <div class="container-fluid mt-5 mb-5">
                <div class="container">
                    <div class="row">`


        fs.writeFile('Index.html', html, (err) => {if (err) throw err})
    }
   
    function newHtml(newMember) {
        return new Promise(function() {
            const name = newMember.getName()
            const role = newMember.getRole();
            const id = newMember.getId();
            const email = newMember.getEmail()
            let newData;
            
            if(role === 'Engineer') {
                const github = newMember.getGithub();
                newData = `<div class="col-lg-4">
                     <div class="card" style="width: 18rem;">
                         <div class="card-body bg-primary">
                           <h5 class="card-title text-light">${name}</h5>
                           <p class="card-text text-light">${role}</p>
                         </div>
                         <div class="w-100 d-flex justify-content-center py-3 bg-light shadow">
                            <ul class="list-group list-group-flush border">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: <a href="mailto: ${email}">${email}</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/${github}" target="_blank">${github}</li>
                            </ul>
                        </div>
                    </div>
                </div>`
            }else if(role === 'Intern') {
                const school = newMember.getSchool();
                newData = `<div class="col-lg-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-body bg-primary">
                      <h5 class="card-title text-light">${name}</h5>
                      <p class="card-text text-light">${role}</p>
                    </div>
                    <div class="w-100 d-flex justify-content-center py-3 bg-light shadow">
                    <ul class="list-group list-group-flush border">
                      <li class="list-group-item">ID: ${id}</li>
                      <li class="list-group-item">Email: <a href="mailto: ${email}">${email}</a></li>
                      <li class="list-group-item">School: ${school}</li>
                    </ul>
                  </div>
                </div>
            </div>`
            }else {
                const officeNum = newMember.getOfficeNum();
                newData = `<div class="col-lg-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-body bg-primary">
                      <h5 class="card-title text-light">${name}</h5>
                      <p class="card-text text-light">${role}</p>
                    </div>
                    <div class="w-100 d-flex justify-content-center py-3 bg-light shadow">
                    <ul class="list-group list-group-flush border">
                      <li class="list-group-item">ID: ${id}</li>
                      <li class="list-group-item">Email: <a href="mailto: ${email}">${email}</a></li>
                      <li class="list-group-item">Office Number: ${officeNum}</li>
                    </ul>
                  </div>
                </div>
            </div>`
            }

            fs.appendFile('Index.html', newData, (err) => {if(err) throw err})

        })

    }

    function finishHtml() {
        const finish = `</div>
                    </div> 
                </div>
            </body>
            </html>`

         fs.appendFile('Index.html', finish, (err) => {if(err) throw err})
    }



    startWrite()