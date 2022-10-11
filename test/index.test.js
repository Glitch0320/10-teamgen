const { describe } = require('yargs')
const index = require('../index')
// GIVEN a command-line application that accepts user input

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// I will need to test a team object containing multiple Employees

// I will need to test a class of Employee(name, id, email)
describe('Employee', () => {
    it('should return an object with name, id, and email properties', () => {
        // Arrange
        const Jon = {name:'Jon', id:1, email:'test@gmail.com'}

        // Assert
        const Me = new Employee('Jon', 1, 'test@gmail.com')

        // Act
        expect(Me).toEqual(Jon) 
    })
})
// I will need to test a subclass Manager(office#)
describe('Manager', () => {
    it('should return an object with name, id, email, and office properties', () => {
        // Arrange
        const Jon = {name:'Jon', id:1, email:'test@gmail.com', office:32}

        // Assert
        const Me = new Manager('Jon', 1, 'test@gmail.com', 32)

        // Act
        expect(Me).toEqual(Jon) 
    })
})
// I will need to test a subclass Engineer(github)
describe('Engineer', () => {
    it('should return an object with name, id, email, and github properties', () => {
        // Arrange
        const Jon = {name:'Jon', id:1, email:'test@gmail.com', github:'Glitch0320'}

        // Assert
        const Me = new Engineer('Jon', 1, 'test@gmail.com', 'Glitch0320')

        // Act
        expect(Me).toEqual(Jon) 
    })
})
// I will need to test a subclass Intern(school)
describe('Intern', () => {
    it('should return an object with name, id, email, and office properties', () => {
        // Arrange
        const Jon = {name:'Jon', id:1, email:'test@gmail.com', school:'Harvard'}

        // Assert
        const Me = new Intern('Jon', 1, 'test@gmail.com', 'Harvard')

        // Act
        expect(Me).toEqual(Jon) 
    })
})