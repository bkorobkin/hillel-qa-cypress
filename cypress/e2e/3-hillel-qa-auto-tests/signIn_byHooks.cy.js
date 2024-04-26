// /// <reference types="cypress" />
//Sign Up test based on POM
import 'cypress-xpath';
import  BasePage  from '../../pages/BasePage';
import   HomePage   from '../../pages/HomePage';
import { createAccountWrap } from '../../steps/GeneralStep.js';

const basePage = new BasePage();
const homePage = new HomePage();


describe('Sign In as new registered user', () => {  
    before(() => {
        createAccountWrap(userData);
    });
    
    it('Sign In ', () => {
        cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
        homePage.signInButton();
        homePage.fillingSignInForm();
        homePage.confirmSignInForm();
        basePage.loggedInCheck();
    });

    after(() => {
        basePage.removeAccountButton();
        basePage.confirmRemoveAccount();
        });
});