// //BasePage contains header & footer selectors (logged user only)
 import 'cypress-xpath';

 //header's panel elements
    //logo
    cy.xpath(`//a[@class="header_logo"]`).should('exist').click(); 
    // menu
    cy.xpath(`//a[contains(@class, 'btn header-link')][text()='Garage']`).click(); 
    cy.xpath(`//a[contains(@class, 'btn header-link')][text()='Fuel expenses']`).click(); 
    cy.xpath(`//a[contains(@class, 'btn header-link')][text()='Instructions']`).click();
    // button "My profile"
    cy.xpath(`//button[@id="userNavDropdown"]`)
    // My profile drop list
    cy.xpath(`//a[contains(@class, 'user-nav_link') and contains(text(), 'Garage')]`).click();
    cy.xpath(`//a[contains(@class, 'user-nav_link') and contains(text(), 'Fuel expenses')]`).click();
    cy.xpath(`//a[contains(@class, 'user-nav_link') and contains(text(), 'Instructions')]`).click();
    cy.xpath(`//a[contains(@class, 'user-nav_link') and contains(text(), 'Profile')]`).click();
    cy.xpath(`//a[contains(@class, 'user-nav_link') and contains(text(), 'Settings')]`).click();
    cy.xpath(`//a[contains(@class, 'user-nav_link') and contains(text(), 'Logout')]`).click();
 
 //Footer's elements
    //footer logo
    cy.xpath(`//a[@class='footer_logo']/*[name()='svg'][@width='42' and @height='80']`).click();



 // Garage page
    //Add car button
    cy.xpath(`//button[@class='btn btn-primary'][text()='Add car']`).should('be.enabled').click();
    //Add car select form
    cy.xpath(`//select[@id="addCarBrand"]`).should('be.enabled').click();
        selectRandomBrand();
        cy.xpath(`//select[@id="addCarBrand"]`).should('be.enabled').click();
        selectRandomModel();
        cy.xpath(`//select[@id="addCarModel"]`).should('be.enabled').click();
        inputRandomNumber();
        cy.xpath(`//input[@id="addCarMileage"]`).should('be.enabled').click();
    //Add car form - Add button
    cy.xpath(`//button[@class='btn btn-primary'][text()='Add']`).click();
    // Car added success
    cy.contains('.alert.alert-success', 'Car added').should('be.visible');

 //Fuel expenses page
    // Add an expense from
    cy.xpath(`//select[@id="addExpenseCar"]`).should('be.enabled').click();
    cy.selectRandomVehicle();
    cy.xpath(`//input[@id="addExpenseDate"]`).should('be.enabled').click();
    cy.fillExpenseDate();
    cy.fillExpenseMileage();
    cy.fillExpenseLiters();
    cy.calculateTotalCost();
    cy.xpath(`//button[@class='btn btn-primary'][text()='Add']`).click();
    //Fuel expense added - success check
    cy.contains('.alert.alert-success', 'Fuel expense added').should('be.visible');


