// The end goal is an html string populated by one manager and any number of engineers and interns
const inq = require('inquirer')
const fs = require('fs')

// Get manager info
const que1 = [
    {
        name: 'title',
        type: 'input',
        message: 'Team name'
    },
    {
        name: 'name',
        type: 'input',
        message: 'Manager name'
    },
    {
        name: 'id',
        type: 'input',
        message: 'Manager id'
    },
    {
        name: 'email',
        type: 'input',
        message: 'Manager email'
    },
    {
        name: 'office',
        type: 'input',
        message: 'Manager office'
    }
]

const que2 = [
    {
        name: 'd2',
        type: 'confirm',
        message: 'Add another employee?'
    }
]

const que3 = [
    {
        name: 'type',
        type: 'list',
        choices: ['Engineer', 'Intern'],
        message: 'Employee type'
    }
]

const queEng = [
    {
        name: 'name',
        type: 'input',
        message: 'Engineer name'
    },
    {
        name: 'id',
        type: 'input',
        message: 'Engineer id'
    },
    {
        name: 'email',
        type: 'input',
        message: 'Engineer email'
    },
    {
        name: 'github',
        type: 'input',
        message: 'Engineer github'
    }
]

const queInt = [
    {
        name: 'name',
        type: 'input',
        message: 'Intern name'
    },
    {
        name: 'id',
        type: 'input',
        message: 'Intern id'
    },
    {
        name: 'email',
        type: 'input',
        message: 'Intern email'
    },
    {
        name: 'education',
        type: 'input',
        message: 'Intern education'
    }
]

class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }
}

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        this.office = office
    }
}

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
}

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
}

const team = {
    name: '',
    members: []
}
let add = false
let r2

const generateHTML = async () => {
    const r1 = await inq.prompt(que1)
    team.name = r1.title
    team.members.push(new Manager(r1.name, r1.id, r1.email, r1.office))
    do {
        // Ask to add new employee at least once
        if (!add) {
            r2 = await inq.prompt(que2)
        }
        // If yes add another
        if (r2.d2) {
            // Ask for type
            let r3 = await inq.prompt(que3)
            if (r3.type === 'Engineer') {
                let eng = await inq.prompt(queEng)
                engineer = new Engineer(eng.name, eng.id, eng.email, eng.github)
                team.members.push(engineer)
            } else {
                let int = await inq.prompt(queInt)
                intern = new Intern(int.name, int.id, int.email, int.education)
                team.members.push(intern)
            }
        }
        r2 = await inq.prompt(que2)
        add = r2.d2 ? true : false
    } while (add);
    html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
        <title>${team.name}</title>
    </head>
    <body>
        <div class="container-fluid text-center bg-secondary">
            <header class="row p-4 bg-primary">
                <h1 class="text-white text-uppercase">${team.name}</h1>
            </header>
            <main class="row justify-content-around">`
    team.members.forEach(employee => {
        switch (employee.constructor.name) {
            case 'Manager':
                html += `<div class="col m-2 border border-3 border-info rounded bg-success p-2 text-info">
                <h2 class="text-primary">${employee.name}</h2>
                <h3 class="text-dark">Manager</h3>
                <p>Email: ${employee.email}</p>
                <p>Office Number: ${employee.office}</p>
            </div>`
                break
            case 'Engineer':
                html += `<div class="col m-2 border border-3 border-info rounded bg-success p-2 text-info" text-info>
                <h2 class="text-primary">${employee.name}</h2>
                <h3 class="text-dark">Engineer</h3>
                <p>Email: ${employee.email}</p>
                <p>Github: <a href='https://github.com/${employee.github}'>${employee.github}</a></p>
            </div>`
                break
            default:
                html += `<div class="col m-2 border border-3 border-info rounded bg-success p-2 text-info">
                <h2 class="text-primary">${employee.name}</h2>
                <h3 class="text-dark">Intern</h3>
                <p>Email: ${employee.email}</p>
                <p>Education: ${employee.education}</p>
            </div>`
        }
    })
    html += `</main>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
    return html
}

const write = async () => {
    await generateHTML()
    fs.writeFile('index.html', html, (err) => err ? console.log(err) : console.log('Success!'))
}

write()

module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern
}