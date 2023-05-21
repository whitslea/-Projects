/// <reference types ="cypress" />

it('Google Search', () => {

    cy.visit('https://google.com')

    cy.get('#APjFqb').type('Early Nintendo{Enter}')

    // cy.contains('Google Search').click()

    cy.wait(8000)
    cy.contains('Images').click()
})