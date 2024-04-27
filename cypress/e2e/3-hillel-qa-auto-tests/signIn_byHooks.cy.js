// /// <reference types="cypress" />
//Sign Up test based on POM
import 'cypress-xpath';
import { basePage } from '../../pages/BasePage';
import { homePage } from '../../pages/HomePage';
import { createAccountWrap } from '../../steps/GeneralStep';

describe('Sign In as new registered user', () => {  
    before(() => {
        createAccountWrap(userData);
    });
    
    it('Sign In ', () => {
        cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
        homePage.signInButton();
        homePage.fillingSignInForm(userData);
        homePage.confirmSignInForm();
        basePage.loggedInCheck();
    });

    after(() => {
        basePage.removeAccountButton();
        basePage.confirmRemoveAccount();
        });
});