/// <reference types="cypress" />

describe('Hook function', () => {

    before(function() {
        //is executed once before all tests
        cy.log('Hook Befor')
    })
    beforeEach(function() {
        //is executed before each test block
        cy.log('Hook BeforeEaach')
    })
    afterEach(function() {
        //is executed after each test block
        cy.log('Hook afterEach')
    })
    after(function() {
        //is executed at the end of all test blocks
        cy.log('Hook After')
    })
    it('My first test block', () => {
        cy.log("First test")
    })

    it.skip('My second test block', () => {
        cy.log("Second test")
    })

})
