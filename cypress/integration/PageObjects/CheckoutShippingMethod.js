// <reference types="Cypress" />
import selectors from '../Selectors/Selectors_CheckoutShippingMethod'

class CheckoutShippingMethod {
DBSCH(){
        cy.get(selectors.DBSCH)
        .should('be.visible')
        .click()

    }
REG(){
        cy.get(selectors.REGPIO)
        .should('be.visible')
        .click()

    }
DHL(){
        cy.get(selectors.DHL)
        .should('be.visible')
        .click()

    }
UPS(){
        cy.get(selectors.UPS)
        .should('be.visible')
        .click()

    }
}
export default CheckoutShippingMethod