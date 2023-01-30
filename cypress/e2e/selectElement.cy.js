/// <reference types="cypress" />

describe('Select Element with Playground', () => {
    it('My first Selector', () =>{
        cy.visit('https://www.google.com/search?q=calcul+20+%2B1&rlz=1C1CHBF_enDE1022DE1022&oq=calcul+20+%2B1&aqs=chrome..69i57.6880j0j7&sourceid=chrome&ie=UTF-8')
        cy.get('.jw8mI')
        cy.get('#L2AGLb > .QS5gu')
    })
})