/// <reference types="Cypress" />
import selectors from '../Selectors/Selectors_homepage'
class HomePage
{
visit()
{
    cy.visit("https://demo.saleor.io")
}

clickLogin()
{
    cy.get(selectors.clickLogin)
    .should('be.visible')
    .click()
}

ProductSliderChoice()
{
  cy.xpath(selectors.productSliderChoice)
  .should('be.visible')
  .click()
}
}
export default HomePage