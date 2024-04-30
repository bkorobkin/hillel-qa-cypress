//HomePage contains elements for not logged user only
import 'cypress-xpath';
import { fillSignUpForm } from '../support/utilities';
import { generateRandomData } from '../support/utilities.js';

export class HomePage {


 //header's panel elements
   //logo
   logoHeader() { 
    return cy.xpath(`//a[@class="header_logo"]`).should('exist').click()
 }
// menu
   garageHeader() {
      return cy.xpath(`//a[contains(@class, 'btn header-link')][text()='Home']`).click(); 
   }
   aboutHeader() {
      return  cy.xpath(`//a[contains(@class, 'btn header-link')][text()='About']`).click(); 
   }
   contactsHeader() {
      return cy.xpath(`//a[contains(@class, 'btn header-link')][text()='Contacts']`).click();
   }
// right side menu buttons
   guestLogInHeader() {
    return cy.xpath(`//button[@class="header-link -guest"][text()='Guest log in']`)
   }
   signInHeader() {
    return cy.xpath(`//button[@class="btn btn-outline-white header_signin"][text()='Sign In']`).should('exist').click();
   }
//Sign Up 
signUpButton() {
    return cy.xpath(`//button[@class='hero-descriptor_btn btn btn-primary'][text()='Sign up']`).should('exist').click();
 }
fillingSignUpForm() {
    const registrationData = generateRandomData();
    return fillSignUpForm(registrationData);
}
confirmSignUpForm() {
    return cy.xpath(`//button[@class='btn btn-primary'][text()='Register']`).should('be.enabled').click();
}
//Sign In
signInButton() {
   //return cy.xpath(`//button[@class='btn btn-outline-white header_signin']`).should('exist').click(); 
   return cy.get('button.btn.btn-outline-white.header_signin');
}
fillingSignInForm() {
   const registrationData = generateRandomData();
   return fillSignInForm(registrationData);
}
fillingSignInFormStatic() {
   const staticAccountData = getStaticAccountData();
   return cy.xpath(`//input[@id="signinEmail"]`).should('exist').type(staticAccountData.staticEmail),
         cy.xpath(`//input[@id="signinPassword"]`).should('exist').type(staticAccountData.staticPassword);
}
fillingSignInFormAPI() {
   const userData = generateRandomData();
   return cy.xpath(`//input[@id="signinEmail"]`).should('exist').type(userData.email),
         cy.xpath(`//input[@id="signinPassword"]`).should('exist').type(userData.password);
}
confirmSignInForm() {
   return cy.xpath(`//button[@class='btn btn-primary'][text()='Login']`).should('be.enabled').click();
} 


//Contacts
//*[@id="contactsSection"]

 //Footer's elements
   //footer logo
   logoFooter() {
    return cy.xpath(`//a[@class='footer_logo']/*[name()='svg'][@width='42' and @height='80']`).click();
 }

}
export const homePage = new HomePage();