const { Employee, Manager, Engineer, Intern, generateTeam } = require('../index')

/* CLASSES */

describe('Employee', () => {
    it('should return an object with name, id, and email properties', () => {
        // Arrange
        const Jon = { name: 'Jon', id: 1, email: 'test@gmail.com' }

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
        const Jon = { name: 'Jon', id: 1, email: 'test@gmail.com', office: 32 }

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
        const Jon = { name: 'Jon', id: 1, email: 'test@gmail.com', github: 'Glitch0320' }

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
        const Jon = { name: 'Jon', id: 1, email: 'test@gmail.com', school: 'Harvard' }

        // Assert
        const Me = new Intern('Jon', 1, 'test@gmail.com', 'Harvard')

        // Act
        expect(Me).toEqual(Jon)
    })
})

/* FUNCTIONS */

// I will need to test a function generateHTML(team)
describe('generateHTML', () => {
    it('should create an html file given a team array', () => {
        // Arrange
        const team = [
            new Manager('Jon', 1, 'test@gmail.com', 132),
            new Engineer('Jon', 2, 'test@gmail.com', 'Glitch0320'),
            new Intern('Jon', 3, 'test@gmail.com', 'Harvard, UofMN')
        ]

        const html = ``

    })
})