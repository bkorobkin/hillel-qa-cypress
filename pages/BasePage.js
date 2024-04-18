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



 // Garage - Add car
    