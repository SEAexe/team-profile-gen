const Employee = require('../lib/Employee.js')

describe('Employee', () => {
    describe('Initialization', () => {
        it('should return true if it is an employee', () => {
            const obj = new Employee();
            expect(typeof(obj)).toBe('object')
        })

        it('should return name from the value passed through', () => {
            const newName = 'Scott'
            const obj = new Employee(newName);
            expect(obj.name).toBe(newName)
        })

        it('should return an id when you enter an id', () => {
            const newId = 1;
            const obj = new Employee('Scott', newId);
            expect(obj.id).toBe(newId)
        })

        it('should return an email when you provide an email', () => {
            const newEmail = 'scott@gmail.com';
            const obj = new Employee('Scott', 1, newEmail);
            expect(obj.email).toBe(newEmail)
        })

        describe('getName()', () => {
            it('should return a name when you call getName()', () => {
                const newName = 'Scott';
                const obj = new Employee(newName, 1, 'scott@gmail.com');
                expect(obj.getName()).toBe(newName)
            })
        })

        describe('getId()', () => {
            it('should return an id when you call the getId()', () => {
                const newId = 1;
                const obj = new Employee('Scott', newId, 'scott@gmail.com');
                expect(obj.getId()).toBe(newId)
            })
        })

        describe('getEmail()', () => {
            it('should return an email when you call the getEmail()', () => {
                const newEmail = 'scott@gmail.com';
                const obj = new Employee('Scott', 1, newEmail);
                expect(obj.getEmail()).toBe(newEmail)
            })
        })

        describe('getRole()', () => {
            it('should return an email when you call the getEmail()', () => {
                const newEmployee = 'Employee';
                const obj = new Employee('Scott', 1, 'scott@gmail.com');
                expect(obj.getRole()).toBe(newEmployee)
            })
        })
    })
})