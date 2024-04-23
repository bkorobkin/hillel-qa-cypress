// /// <reference types="cypress" />
//Sign Up test based on POM
import 'cypress-xpath';
import  BasePage  from '../../pages/BasePage';
import   HomePage   from '../../pages/HomePage';

const basePage = new BasePage();
const homePage = new HomePage();


describe('New-user registration. Сompilation SignUp form and data validation after registration.', () => {  
    
    it('all-in', () => {
        cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
        homePage.signUpButton().should('exist');
        homePage.fillingSignUpForm();
        homePage.confirmSignUpForm();
        basePage.registrationSuccessCheck();
        basePage.profileDataCheck();
    });

});