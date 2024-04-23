//BasePage contains elements for not logged user only
import 'cypress-xpath';
const { generateRandomData, fillSignUpForm, checkRegistrationSuccess, checkProfileData } = require('../../support/utilities');
export default class HomePage{


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
    return cy.xpath(`//button[@class="btn btn-outline-white header_signin"][text()='Sign In']`)
   }
//Sign Up 
signUpButton() {
    return cy.xpath(`//button[@class='hero-descriptor_btn btn btn-primary'][text()='Sign up']`).click();
 }
fillingSignUpForm() {
    const registrationData = generateRandomData();
    return fillSignUpForm(registrationData);
}
confirmSignUpForm() {
    return cy.xpath(`//button[@class='btn btn-primary'][text()='Register']`).should('be.enabled').click();
}

//Contacts
//*[@id="contactsSection"]

 //Footer's elements
   //footer logo
   logoFooter() {
    return cy.xpath(`//a[@class='footer_logo']/*[name()='svg'][@width='42' and @height='80']`).click();
 }

}