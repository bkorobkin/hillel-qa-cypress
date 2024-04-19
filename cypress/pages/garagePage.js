import 'cypress-xpath';

// Garage page
    //Add car button
    cy.xpath(`//button[@class='btn btn-primary'][text()='Add car']`).should('be.enabled').click();
    //Add car select form
    cy.xpath(`//select[@id="addCarBrand"]`).should('be.enabled').click();
        // random select carBrand
        selectRandomBrand();
        cy.xpath(`//select[@id="addCarBrand"]`).should('be.enabled').click();
        // random select carModel
        selectRandomModel();
        cy.xpath(`//select[@id="addCarModel"]`).should('be.enabled').click();
        // random input carMileage
        inputRandomNumber();
        cy.xpath(`//input[@id="addCarMileage"]`).should('be.enabled').click();
    //Add car form - Add button
    cy.xpath(`//button[@class='btn btn-primary'][text()='Add']`).click();
    // Car added success
    cy.contains('.alert.alert-success', 'Car added').should('be.visible');