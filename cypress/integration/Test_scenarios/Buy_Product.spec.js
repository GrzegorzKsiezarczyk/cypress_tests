/// <reference types="Cypress" />

import HomePage from '../PageObjects/HomePage'
import LoginAndRegisterCard from '../PageObjects/LoginAndRegisterCard'
import ProductCard from '../PageObjects/ProductCard'
import MyCartPage from '../PageObjects/MyCartPage'
import CheckoutShippingAddress from '../PageObjects/CheckoutShippingAddress'
import CheckoutShippingMethod from '../PageObjects/CheckoutShippingMethod'
import CheckoutPayment from '../PageObjects/CheckoutPayment'
import ReviewPage from '../PageObjects/ReviewPage'

describe('Shopping process on https://demo.saleor.io/', () => {
    const homepage = new HomePage
    const Login = new LoginAndRegisterCard
    const productcard = new ProductCard
    const mycarts = new MyCartPage
    const checkoutSTEP1 = new CheckoutShippingAddress
    const checkoutSTEP2 = new CheckoutShippingMethod
    const payment = new CheckoutPayment
    const review = new ReviewPage
    beforeEach(() => {
        cy.clearLocalStorage();
        homepage.visit()
        homepage.clickLogin()
        Login.fillLogin('admin@example.com')
        Login.fillPassword('admin')
        Login.submit()
      });

    it('Buy the product as a logged in user', () => {
        homepage.ProductSliderChoice()
        productcard.sizeTabopen()
        productcard.choiceSizeL()
        productcard.addtobasket()
        productcard.GotoShoppingBag()
    
        mycarts.increaseButton()
        mycarts.subtractButton()
        mycarts.ProceedtoCheckoutButton()

        checkoutSTEP1.AddressSection()
        checkoutSTEP1.ChoiceShippingAddress()
        checkoutSTEP1.SameAsShippingAddressCheckbox()
        //checkoutSTEP1.SameAsShippingAddressCheckbox()
        //checkoutSTEP1.ChoiceBillingAddress()
        checkoutSTEP1.ButtonContinueToShipping()

        checkoutSTEP2.DBSCH()
        checkoutSTEP2.REG()
        checkoutSTEP2.DHL()
        checkoutSTEP2.UPS()
        checkoutSTEP1.ButtonContinueToShipping()

        payment.voucher()
        payment.fillCode('VCO9KV98LC')
        payment.DUMMY()
        //payment.Charged()
        //payment.Fully_refunded()
        //payment.Not_Charged()
        checkoutSTEP1.ButtonContinueToShipping()
    
        review.Continue_to_review()
        review.OrderButton()
        review.OrderDetails()
    
    })
})
