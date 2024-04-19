import 'cypress-xpath';

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

//