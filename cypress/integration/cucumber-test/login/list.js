import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('Url Opened', () => {
    cy.visit('https://the-internet.herokuapp.com/')
})


And('List all 5 elements', () => {
    cy.get('ul li').each((item, index, list) => {
        // Returns the elements from the cy.get command
        expect(list).to.have.length(44);

        // Returns the current element from the loop
        expect(Cypress.$(item)[0].innerText).to.eq(["A/B Testing"]);
        expect(Cypress.$(item)[1].innerText).to.eq(["Add/Remove Elements"]);
        expect(Cypress.$(item)[2].innerText).to.eq(["Basic Auth (user and pass: admin)"]);
        expect(Cypress.$(item)[3].innerText).to.eq(["Broken Images"]);
        expect(Cypress.$(item)[4].innerText).to.eq(["Challenging DOM"]);
        expect(Cypress.$(item)[5].innerText).to.eq(["Checkboxes"]);
    })
})

