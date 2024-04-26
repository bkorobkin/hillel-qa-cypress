import 'cypress-xpath';
import  BasePage  from '../../pages/BasePage';
import   HomePage   from '../../pages/HomePage';


const basePage = new BasePage();
const homePage = new HomePage();

//create account (saved userData)
export const createAccountWrap = () => {
    cy.wrap(generateRandomData()).as('userData');
    cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
    homePage.signUpButton().should('exist');
    cy.get('@userData').then(userData => {
        homePage.fillingSignUpForm(userData); 
    });
    homePage.confirmSignUpForm();
    basePage.registrationSuccessCheck();
    cy.contains('Log out').should('exist').click();
};

//create account (unsaved userData)
export const createAccountNoWrap = () => {
    const userData = generateRandomData(); 
    cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
    homePage.signUpButton().should('exist');
    homePage.fillingSignUpForm(userData); 
    homePage.confirmSignUpForm();
    basePage.registrationSuccessCheck();
    cy.contains('Log out').should('exist').click();
};

//login 
// Sign in with static data 
export function getStaticAccountData() {
    return {
        staticName: "Test",
        staticLastName: "UserAAA",
        staticEmail: "testuserAAA@gmail.com",
        staticPassword: "TestUser1!",
    };
}
//sign in with static/wrapped data
export function signInWithStaticData() {
    const staticAccountData = getStaticAccountData();
    cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
    cy.xpath(`//button[@class='btn btn-outline-white header_signin']`).should('exist').click(); 
    cy.xpath(`//input[@id="signinEmail"]`).should('exist').type(staticAccountData.staticEmail);
    cy.xpath(`//input[@id="signinPassword"]`).should('exist').type(staticAccountData.staticPassword);
    cy.xpath(`//button[@class='btn btn-primary']`).should('be.enabled').click();
    cy.contains('.alert.alert-success', 'You have been successfully logged in').should('be.visible');
}
export function signInWithGeneratedData() {
    cy.wrap(generateRandomData()).as('userData');
    cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
    cy.xpath(`//button[@class='btn btn-outline-white header_signin']`).should('exist').click(); 
    cy.xpath(`//input[@id="signinEmail"]`).should('exist').type(userData.email);
    cy.xpath(`//input[@id="signinPassword"]`).should('exist').type(userData.password);
    cy.xpath(`//button[@class='btn btn-primary']`).should('be.enabled').click();
    cy.contains('.alert.alert-success', 'You have been successfully logged in').should('be.visible');
}