/// <reference types="cypress"/>

describe('Todo application', () => {
    beforeEach(() => {
        cy.visit('https://todomvc.com/examples/backbone_require/');
        cy.injectAxe();
    })

    it('it should log any accessibility failures', () => {
        cy.checkA11y();
    })

    it('should exclude specific element on the page', () => {
        cy.checkA11y({exclude: ['.learn'] })
    })

    it('should only test specific element on the page', () => {
        cy.checkA11y('.learn');
    })

    it('should only include rules with with serious and critical impact', () => {
        cy.checkA11y(null, {includedImpacts: ["critical", "serious"]})
    })

    it.only('should exclude specific accessibility rules', () => {
        cy.checkA11y(null, {
            rules: {
                'color-contrast': {enabled: false}
            }})
    })
})