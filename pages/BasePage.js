export class BasePage {

    signUpButton() {
        //return cy.xpath(`//button[@class='hero-descriptor_btn btn btn-primary']`).should('exist'); 
        return cy.get('button').contains('Sign up').click();
    }

    signUpName() {
        return  cy.get('input#signupName');
    }

    signUpLastName() {
        return  cy.get('input#signupLastName');
    }

    signUpEmail() {
        return  cy.get('input#signupEmail')
    }

    signUpPassword() {
        return  cy.get('input#signupPassword')
    }

    signUpRepeatPassword() {
        return  cy.get('input#signupRepeatPassword')
    }

    registerButton() {
        return  cy.get('button').contains('Register')
    }

}

