import HomePage from '../PageObjects/HomePage'
import LoginAndRegisterCard from '../PageObjects/LoginAndRegisterCard'
import faker from "faker";

describe("Successfull and unsuccessfull login", () => {
    const homepage = new HomePage
    const Login = new LoginAndRegisterCard
    const random = faker.random.words(2).replace(" ", "-");
    const fakeEmail = `${random}@example.com`;
    const fakePassword = faker.internet.password();
    beforeEach(() => {
        cy.clearLocalStorage();
        homepage.visit()
    });
    it("Unsuccessfull login", () => {
        homepage.clickLogin()
        Login.fillLogin(fakeEmail)
        Login.fillPassword(fakePassword)
        Login.submit()
        cy.get(".input__error").should('be.visible').contains( "Please, enter valid credentials");
        })

    it("Successfull login", () => {
    homepage.clickLogin()
    Login.fillLogin('admin@example.com')
    Login.fillPassword('admin')
    Login.submit()
    cy.get("[data-test=alert]").should('be.visible').contains( "You are now logged in");
        })
    });