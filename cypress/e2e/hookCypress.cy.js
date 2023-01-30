/// <reference types="cypress" />

describe('Fonction Hook', () => {

    before(function() {
        //est execute une seule fois avnt tous les tetsts
        cy.log('Hook Befor')
    })
    beforeEach(function() {
        //est execute avant chaque bloc de test
        cy.log('Hook BeforeEaach')
    })
    afterEach(function() {
        //est execute apres chaque bloc de test
        cy.log('Hook afterEach')
    })
    after(function() {
        //est execute a la fin de tous les blocs de test
        cy.log('Hook After')
    })
    it('Mon premier bloc de test', () => {
        cy.log("Premier test")
    })

    it.skip('Mon deuxieme bloc de test', () => {
        cy.log("Deuxieme test")
    })

})
