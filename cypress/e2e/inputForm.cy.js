/// <reference types="cypress" />

describe('Input Form Cypress', () => {
    beforeEach("I load my application", () => {
        cy.visit("https://practice.automationbro.com/support-form/")
    })
    it('Check the information of the form', () =>{
        cy.get('[class="evf-field-label"]').should('contain.text','Name')
        cy.get('#evf-680-field_lVizlNhYus-1').should('be.visible')

        cy.get('[class="evf-label"]').should('contain.text', 'Email')
        cy.get('#evf-680-field_XYnMdkQDKM-3').should('be.visible')

        cy.get('[class="evf-label"]').should('contain.text', 'Subject')
        cy.get('#evf-680-field_xJivsqAS2c-2').should('be.visible')

        cy.get('[class="evf-label"]').should('contain.text', 'Get in touch with')
        cy.get('#evf-680-field_82kaAPhrnW-6').should('be.visible')

        cy.get('[class="evf-label"]').should('contain.text', 'Availability Date')
        cy.get('#evf-680-field_s1KysSbUW6-8').should('be.visible')

        cy.get('[class="evf-label"]').should('contain.text', 'Message')
        cy.get('#evf-680-field_YalaPcQ0DO-4').should('be.visible')

        cy.get('#evf-submit-680').should('be.visible')
        cy.get('#evf-submit-680').should('contain.text', "Submit")

    })
    it('check the required fields', () =>{
        cy.get('#evf-submit-680').click()
        cy.get('#evf-680-field_lVizlNhYus-1-error').should('contain.text', "This field is required.")
        cy.get('#evf-680-field_XYnMdkQDKM-3-error').should('contain.text', "Please enter a valid email address.")
        cy.get('#evf-680-field_xJivsqAS2c-2-error').should('contain.text', "This field is required.")
    })

    it('Fill in the contact form', () =>{
        cy.get('#evf-680-field_lVizlNhYus-1').type("My Name")
        cy.get('#evf-680-field_XYnMdkQDKM-3').type("email@gmail.com")
        cy.get('#evf-680-field_xJivsqAS2c-2').type("My Subject")
        cy.get('#evf-submit-680').click()
        cy.get('.everest-forms-notice').should('be.visible')
    })
})