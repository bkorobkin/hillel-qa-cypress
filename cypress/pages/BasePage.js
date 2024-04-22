//BasePage contains elements for logged user only
import 'cypress-xpath';
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
 
 //Footer's elements
   //footer logo
   logoFooter() {
      return cy.xpath(`//a[@class='footer_logo']/*[name()='svg'][@width='42' and @height='80']`).click();
   }

// Garage part
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
    

 //Fuel expenses part
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


// Other (e.g.: alerts check, profile data check)
   //Registration success check
   registrationSuccessCheck() {
      return checkRegistrationSuccess();
   }
   profileDataCheck() {
      return checkProfileData(registrationData);
   }

}
