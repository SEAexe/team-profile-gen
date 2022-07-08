
const Manager = require('../lib/Manager.js');

describe('Manager', () => {
    describe('officeNum', () => {
        it('should return the officenum whenever you enter the right officeNum', () => {
            const newofficeNum = 22;
            const obj = new Manager('Jon', 1, 'jon@gmail.com', newofficeNum);
            expect(obj.officeNum).toBe(newofficeNum)
        })
    }) 

    describe('New Manager', () => {
        it('Should return the Manager when you select a new Manager', () => {
            const newManager = 'Manager';
            const obj = new Manager('Jon', 1, 'jon@gmail.com', 22)
            expect(obj.getRole()).toBe(newManager)
        })
    })

    describe('getofficeNum()', () => {
        it('should return a officeNum whenever you ask for getofficeNum()', () => {
            const newOfficeNum = 22;
            const obj = new Manager('Jon', 1, 'jon@gmail.com', newOfficeNum);
            expect(obj.getOfficeNum()).toBe(newOfficeNum)
        })
    })
})