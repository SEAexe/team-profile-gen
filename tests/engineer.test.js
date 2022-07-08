const Engineer = require('../lib/Engineer.js');


describe('Engineer', () => {
    describe('github', () => {
        it('should return the value given from the github', () => {
            const gitHub = 'SEAexe';
            const obj = new Engineer('Alex', 1, 'alex@gmail.com', gitHub)
            expect(obj.github).toBe(gitHub)
        })
    })

    describe('new Engineer', () => {
        it('should return engineer whenever you select engineer', ( ) => {
            const engineer = 'Engineer';
            const obj = new Engineer('Alex', 1, 'alex@gmail.com', 'SEAexe')
            expect(obj.getRole()).toBe(engineer)
        })
    })

    describe('getGithub()', () => {
        it('should return the github whenever you select ask for getGithub()', ( ) => {
            const github = 'SEAexe';
            const obj = new Engineer('Alex', 1, 'alex@gmail.com', github)
            expect(obj.getGithub()).toBe(github)
        })
    })
})