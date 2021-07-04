// <reference types="Cypress" />
import selectors from '../Selectors/Selectors_ReviewPage'

class ReviewPage {
    Continue_to_review(){
        cy.get(selectors.Order_Button)
        .contains('Continue to Review')
        .should('be.visible')
        .click()

    }
    OrderButton(){
        cy.get(selectors.Order_Button)
        .contains('Place order')
        .should('be.visible')
        .click()

    }
    OrderDetails(){
        cy.get(selectors.Order_details)
        .contains('ORDER DETAILS')
        .should('be.visible')
        .click()
    }
}
export default ReviewPage