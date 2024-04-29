//BasePage contains elements for logged user only
import 'cypress-xpath';
import { checkLoggedIn, checkRegistrationSuccess } from '../support/utilities.js';
import { checkProfileData } from '../support/utilities.js';
import { generateRandomData } from '../support/utilities.js';
export class BasePage {


 //header's panel elements
   //logo
   logoHeader() { 
      return cy.xpath(`//a[@class="header_logo"]`).should('exist').click()
   }
   // menu
   garageHeader() {
      return cy.xpath(`//a[contains(@class, 'btn header-link')][text()='Garage']`).click(); 
   }
   fuelExpensesHeader() {
      return  cy.xpath(`//a[contains(@class, 'btn header-link')][text()='Fuel expenses']`).click(); 
   }
   instructionsHeader() {
      return cy.xpath(`//a[contains(@class, 'btn header-link')][text()='Instructions']`).click();
   }
   // button "My profile"
   myProfileDropdown() {
      return  cy.xpath(`//button[@id="userNavDropdown"]`).click();
   }
   // My profile drop list
   garageDropdown() {
      return cy.xpath(`//a[contains(@class, 'user-nav_link') and contains(text(), 'Garage')]`).click();
   }
   fuelExpensesDropdown() {
      return cy.xpath(`//a[contains(@class, 'user-nav_link') and contains(text(), 'Fuel expenses')]`).click();
   }
    
   instructionsDropdown() {
      return cy.xpath(`//a[contains(@class, 'user-nav_link') and contains(text(), 'Instructions')]`).click();
   }
    
   myProfileDropdown() {
      return cy.xpath(`//a[contains(@class, 'user-nav_link') and contains(text(), 'Profile')]`).click();
   }
    
   settingsDropdown() {
      return cy.xpath(`//a[contains(@class, 'user-nav_link') and contains(text(), 'Settings')]`).click();
   }
    
   LogoutDropdown() {
      return cy.xpath(`//a[contains(@class, 'user-nav_link') and contains(text(), 'Logout')]`).click();
   }
 

///./panel/garage
   //Add car button
   addCarButtonGaragePage() {
      return cy.xpath(`//button[@class='btn btn-primary'][text()='Add car']`).should('be.enabled').click();
   }
    //Add NEW car select form
   addNewCarButton() {
      return cy.xpath(`//select[@id="addCarBrand"]`).should('be.enabled').click();
   }
   selectNewCarBrand() {
      return selectRandomBrand();
   }   
   selectNewCarModel() {
      return selectRandomModel();
   }
   inputNewMileage() {
      return inputRandomMileage();
   }
   addNewCarConfim() {
      return cy.xpath(`//button[@class='btn btn-primary'][text()='Add']`).click();
   }
   addNewCarSuccessCheck() {
      return cy.contains('.alert.alert-success', 'Car added').should('be.visible');
   }
 ///delete car
   editButton() {
   return cy.xpath('//button[contains(@class, "car_edit") and contains(@class, "btn-edit")]').should('be.visible').click();
   }
   removeCarButton() {
      return cy.xpath('//button[@type="button" and contains(@class, "btn-outline-danger")]').should('be.visible').click();
   }
   confirmRemoveButton() {
      return cy.xpath('//button[@type="button" and contains(@class, "btn-danger") and text()="Remove"]').should('be.visible').click();
   }
   removedCarSuccessCheck() {
      return cy.contains('.alert.alert-success', 'Car removed').should('be.visible');
   }
 ///.panel/expenses
    // Add an expense from
   selectExistVehicle() {
      return cy.selectRandomVehicle();
   }
   selectExpenseDate() {
      return cy.fillExpenseDate();
   }
   selectExpenseMileage() {
      return cy.fillExpenseMileage();
   }
   selectExpenseLiters() {
      return cy.fillExpenseLiters();
   }
   selectExpenseTotalCost() {
      return cy.calculateTotalCost();
   }
   confirmAddAnExpenseForm() {
      return cy.xpath(`//button[@class='btn btn-primary'][text()='Add']`).click();
   }
   addFuelExpenseSuccessCheck() {
      return cy.contains('.alert.alert-success', 'Fuel expense added').should('be.visible');
   }

///./panel/settings
   //Currency

   //Units of distance

   //Change email

   //Change password

   //Remove account
   removeAccountButton() {
      cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/panel/settings')
      return cy.xpath(`//button[@class="btn btn-danger-bg"]`).should('exist').click();
   }
   confirmRemoveAccount() {
      cy.xpath("//h4[contains(text(), 'Remove account')]").should('exist');
      cy.xpath(`//button[@class='btn btn-danger']`).should('exist').click();
   }
   cancelRemoveAccountBybtn() {
      cy.xpath("//h4[contains(text(), 'Remove account')]").should('exist');
      cy.xpath(`//button[@class='btn btn-secondary']`).should('exist').click();
   }
   cancelRemoveAccountByX() {
      cy.xpath("//h4[contains(text(), 'Remove account')]").should('exist');
      cy.xpath(`//button[@class='close']`).should('exist').click();
   }





 //Footer's elements
   //footer logo
   logoFooter() {
      return cy.xpath(`//a[@class='footer_logo']/*[name()='svg'][@width='42' and @height='80']`).should('exist').click();
   }

// Other (e.g.: alerts check, profile data check)
   registrationSuccessCheck() {
      return checkRegistrationSuccess();
   }
   profileDataCheck() {
      const userData = generateRandomData();
      return checkProfileData(userData);
  }
   loggedInCheck() {
      return checkLoggedIn();
   }

}
export const basePage = new BasePage();