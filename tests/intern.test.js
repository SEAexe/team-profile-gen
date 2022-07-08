const Intern = require('../lib/Intern.js');


describe('Intern', () => {
    describe('school', () => {
        it('should return the school whenever you enter the right school', () => {
            const newSchool = 'uw';
            const obj = new Intern('Elaine', 1, 'elaine@gmail.com', newSchool);
            expect(obj.school).toBe(newSchool)
        })
    }) 

    describe('New Intern', () => {
        it('Should return the intern when you select a new intern', () => {
            const newIntern = 'Intern';
            const obj = new Intern('Elaine', 1, 'elaine@gmail.com', 'uw')
            expect(obj.getRole()).toBe(newIntern)
        })
    })

    describe('getSchool()', () => {
        it('should return a school whenever you ask for getSchool()', () => {
            const newSchool = 'uw';
            const obj = new Intern('Elaine', 1, 'elaine@gmail.com', newSchool);
            expect(obj.getSchool()).toBe(newSchool)
        })
    })
})