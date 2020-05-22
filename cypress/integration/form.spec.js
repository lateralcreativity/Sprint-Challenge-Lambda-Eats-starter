describe('Form filler', () => {
    it('can navigate to the site', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include', 'localhost')
    })

    it('can select a pizza size', () => {
        cy.get('select[name="size"]')
            .select('medium')
    })

    it('can select a sauce', () => {
        cy.get('#spinachAlfredo')
        .click()
    })

    it('can select multiple toppings', () => {
        cy.get(':nth-child(5) > :nth-child(2) > input')
        .click()

        cy.get(':nth-child(5) > :nth-child(3) > input')
        .click()

        cy.get(':nth-child(5) > :nth-child(4) > input')
        .click()

        cy.get(':nth-child(5) > :nth-child(5) > input')
        .click()
    })

    it('can type a special order', () => {
        cy.get('input[name="special"]')
            .type('instructions')
    })

    it('can submit the order', () => {
        cy.get('button.submit').click()
    })
})