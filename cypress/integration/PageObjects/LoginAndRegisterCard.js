/// <reference types="Cypress" />
import selectors from '../Selectors/Selectors_LoginAndRegisterCard'

class LoginAndRegisterCart{
    fillLogin(value){
    cy.get(selectors.loginfield)
    .should('be.visible')
    .clear()
    .type(value)
    }

    fillPassword(value){
    cy.get(selectors.passwordfield)
    .should('be.visible')
    .clear()
    .type(value)
    }

    submit(){
    cy.get(selectors.submitlogin, { timeout: 2000 })
    .should('be.visible')
    .contains('Sign in')
    .click()
    }
}
export default LoginAndRegisterCart