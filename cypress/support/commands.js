// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//verify if car is exist
Cypress.Commands.add('checkIfCarIsAdded', () => {
    return cy.get('div.car-select-dropdown', { timeout: 10000 }).then($dropdown => {
      if ($dropdown.find('button.dropdown-toggle').length) {
        cy.log('At least one car is added');
        return true;
      } else {
        throw new Error('No car is added in the garage');
      }
    });
  });

//verify and select random option(car) in 'Add an expense' form
  Cypress.Commands.add('selectRandomVehicle', () => {
    cy.xpath(`//select[@id="addExpenseCar"]`).should('be.enabled').click();
    cy.xpath(`//*[@id="addExpenseCar"]/option`).then(options => {
      const randomIndex = Math.floor(Math.random() * options.length);
      const randomOption = options[randomIndex].textContent.trim();
  
      cy.xpath(`//select[@id="addExpenseCar"]`).select(randomOption);
    });
  });
  

  // //Creation valid random date 
  Cypress.Commands.add('fillExpenseDate', (carCreationDate) => {
   
    const creationDate = new Date(carCreationDate);

    const minDate = creationDate.getTime(); 
    const maxDate = Date.now(); 
    const randomDate = new Date(Cypress._.random(minDate, maxDate));
    
    
    const day = randomDate.getDate().toString().padStart(2, '0');
    const month = (randomDate.getMonth() + 1).toString().padStart(2, '0');
    const year = randomDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
  
    cy.xpath(`//input[@id="addExpenseDate"]`).should('be.enabled').clear().type(formattedDate);
  });


  //Changing/adding new Mileage
  Cypress.Commands.add('fillExpenseMileage', () => {
    
    cy.xpath(`//*[@id="addExpenseMileage"]`).should('be.enabled').clear();
    
    cy.xpath(`//*[@id="addExpenseMileage"]`).invoke('val').then((previousMileage) => {
      
      const newMileage = parseInt(previousMileage, 10) + Cypress._.random(10, 500);
  
      // Вставляем новое значение в поле Mileage
      cy.xpath(`//*[@id="addExpenseMileage"]`).should('be.enabled').type(newMileage);
    });
  });


  //add random Number of liters
  Cypress.Commands.add('fillExpenseLiters', () => {
    const randomLiters = Math.floor(Math.random() * (40 - 5 + 1)) + 5;
    cy.xpath(`//*[@id="addExpenseLiters"]`).should('be.enabled').clear().type(randomLiters);
  });
  
  //add product into Total cost if 2$/litr
  Cypress.Commands.add('calculateTotalCost', () => {
    cy.xpath(`//*[@id="addExpenseLiters"]`).invoke('val').then((liters) => {
      const totalCost = parseInt(liters, 10) * 2;
      cy.xpath(`//*[@id="addExpenseTotalCost"]`).should('be.enabled').clear().type(totalCost);
    });
  });
  
// random email/pass
  Cypress.Commands.add('generateRandomEmail', () => {
    const randomString = Math.random().toString(36).substring(2);
    return `user_${randomString}@example.com`;
});

Cypress.Commands.add('generateRandomPassword', () => {
    return Math.random().toString(36).substring(2);
});

Cypress.Commands.add('createNewUser', () => {
    const email = cy.generateRandomEmail();
    const password = cy.generateRandomPassword();

    const newUser = {
        email: email,
        password: password,   
    }
});