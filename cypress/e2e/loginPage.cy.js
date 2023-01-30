/// <reference types="cypress" />
describe('Login Page', () => {
    it('Login with empty feld', ()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        cy.get(':nth-child(2) > .input').type(' ')
        cy.get(':nth-child(4) > .input').type(' ')
        cy.get(':nth-child(5) > .button').click()
        cy.get('.error').should('contain.text', 'The username and password could not be verified.')

    })

    it('Login with the right ID but empty password', ()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        cy.get(':nth-child(2) > .input').type('demo23')
        cy.get(':nth-child(4) > .input').type(' ')
        cy.get(':nth-child(5) > .button').click()
        cy.get('.error').should('contain.text', 'The username and password could not be verified.')

    })

    it('Login with empty ID and right password', ()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        cy.get(':nth-child(2) > .input').type(' ')
        cy.get(':nth-child(4) > .input').type('123')
        cy.get(':nth-child(5) > .button').click()
        cy.get('.error').should('contain.text', 'The username and password could not be verified.')

    })
})