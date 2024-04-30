import 'cypress-xpath';
import { basePage } from '../pages/BasePage';
import { homePage } from '../pages/HomePage';

export default class GeneralStep {
    loginStatic(staticAccountData) {
        homePage.signInWithStaticData().should('exist').type(staticAccountData.staticEmail);
        homePage.signInWithStaticData().should('exist').type(staticAccountData.staticPassword);
    }
    // loginGenerated() {
    //     homePage.signInWithStaticData().should('exist').type(staticAccountData.staticEmail);
    //     homePage.signInWithStaticData().should('exist').type(staticAccountData.staticPassword);
    // }
    // //create account (saved userData)
    // createAccountWrap() {
    //     cy.wrap(generateRandomData()).as('userData');
    //     cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
    //     homePage.signUpButton().should('exist');
    //     cy.get('@userData').then(userData => {
    //         homePage.fillingSignUpForm(userData); 
    //     });
    //     homePage.confirmSignUpForm();
    //     basePage.registrationSuccessCheck();
    //     cy.contains('Log out').should('exist').click();
    // };
    
    // //create account (unsaved userData)
    // createAccountNoWrap() {
    //     const userData = generateRandomData(); 
    //     cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
    //     homePage.signUpButton().should('exist');
    //     homePage.fillingSignUpForm(userData); 
    //     homePage.confirmSignUpForm();
    //     basePage.registrationSuccessCheck();
    //     cy.contains('Log out').should('exist').click();
    // };

    // Remove Account
    removeAccount() {
        basePage.removeAccountButton();
        basePage.confirmRemoveAccount();
    }
}
//already created user
export function getStaticAccountData() {
    return {
        staticName: "Test",
        staticLastName: "UserAAA",
        staticEmail: "testuserAAA@gmail.com",
        staticPassword: "TestUser1!",
    };
}

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
    const userData = generateRandomData();
    cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
    cy.xpath(`//button[@class='btn btn-outline-white header_signin']`).should('exist').click(); 
    cy.xpath(`//input[@id="signinEmail"]`).should('exist').type(userData.email);
    cy.xpath(`//input[@id="signinPassword"]`).should('exist').type(userData.password);
    cy.xpath(`//button[@class='btn btn-primary']`).should('be.enabled').click();
    cy.contains('.alert.alert-success', 'You have been successfully logged in').should('be.visible');
}


export function addNewCar() {
    basePage.addCarButtonGaragePage(); 
    basePage.addNewCarButton(); 
    basePage.selectNewCarBrand(); 
    basePage.selectNewCarModel(); 
    basePage.inputNewMileage(); 
    basePage.addNewCarConfim(); 

    basePage.addNewCarSuccessCheck();
}

export function deleteCar() {
    basePage.editButton();
    basePage.removeCarButton();
    basePage.confirmRemoveButton();
}

export const generalStep = new GeneralStep();
//export const userData = generateRandomData();