///<reference types="Cypress" />
import selectors from '../Selectors/Selectors_ProductCard'

class ProductCard
{
sizeTabopen(){
    cy.get(selectors.tabsize)
    .should('be.visible')
    .click()
}

choiceSizeL(){
    cy.get(selectors.sizeL)
    .should('be.visible')
    .click()
}

addtobasket(){
    cy.get(selectors.addtobasketbutton)
    .should('be.visible')
    .click()
}

GotoShoppingBag(){
    cy.get(selectors.buttonshoppingBAG, { timeout: 2000 })
    .should('be.visible')
    .click()
}   
}
export default ProductCard