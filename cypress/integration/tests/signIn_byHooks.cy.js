// /// <reference types="cypress" />
//Sign Up test based on POM
import 'cypress-xpath';
import { basePage } from '../pages/BasePage';
import { homePage } from '../pages/HomePage';
import { staticAccountData } from '../steps/GeneralStep';

describe('Sign In as new registered user', () => {  
    before(() => {
        loginStatic(staticAccountData);
    });
    
    it('Sign In ', () => {
        cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
        homePage.signInButton();
        homePage.fillingSignInForm(staticAccountData);
        homePage.confirmSignInForm();
        basePage.loggedInCheck();
    });

    after(() => {
        basePage.removeAccountButton();
        basePage.confirmRemoveAccount();
    });
});
