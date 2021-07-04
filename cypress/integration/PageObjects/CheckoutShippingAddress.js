// <reference types="Cypress" />
import selectors from '../Selectors/Selectors_CheckoutShippingAddress'
class CheckoutShippingAddress {
AddressSection(){
    cy.xpath(selectors.addressSectionAddress)
    .should('be.visible')
    .click()
    }
ChoiceShippingAddress(){
    //cy.get(selectors.ChoiceShippinAdress).click()
    cy.xpath(selectors.ChoiceShippinAdress)
    .should('be.visible')
    .click()

    }
ChoiceBillingAddress(){
    //cy.get(selectors.ChoiceBillingAddress).click()
    cy.xpath(selectors.ChoiceBillingAddress)
    .should('be.visible')
    .click()
    }
SameAsShippingAddressCheckbox(){
    cy.get(selectors.SameAsShippingAddressCheckbox)
    .should('be.visible')
    .click({ multiple: true, force: true })
    }
ButtonContinueToShipping(){
    cy.get(selectors.ButtonContinueToShipping)
    .should('be.visible')
    .click({ multiple: true, force: true })
    }

}
export default CheckoutShippingAddress