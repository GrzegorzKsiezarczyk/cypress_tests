// <reference types="Cypress" />
import selectors from '../Selectors/Selectors_MyCartPage'

class MyCartPage {
subtractButton(){
    cy.get(selectors.subtrbutton)
    .should('be.visible')
    .click({ multiple: true, force: true })
}
increaseButton(){
    cy.get(selectors.increbutton)
    .should('be.visible')
    .click({ multiple: true, force: true })
}
ProceedtoCheckoutButton(){
    cy.get(selectors.ProceedtoCheckoutButton)
    .should('be.visible')
    .click()
}
    
}
export default MyCartPage 