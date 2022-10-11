// The end goal is a team object populated by one manager and any number of engineers and interns
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