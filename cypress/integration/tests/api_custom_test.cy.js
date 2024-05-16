import 'cypress-xpath';
import { garageStep } from '../steps/GarageStep';
import { generateRandomData, createUserAndCheckStatus } from '../../support/utilities';
import { basePage } from '../../pages/BasePage';

describe('Login, Add Car, and Expense Test', () => {
    let userData;

    before(() => {
        userData = generateRandomData();
        createUserAndCheckStatus(userData);
    });

    it('should add a car through API', () => {
        cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space');
    
        cy.intercept('POST', '/api/cars').as('createCar');
        garageStep.addRandomCarAPI();
    
        cy.wait('@createCar').then(interception => {
            expect(interception.response.statusCode).to.eq(201);
    
            const createdCar = interception.response.body.data;
            expect(createdCar.id).to.exist;
            expect(createdCar.carBrandId).to.be.oneOf([1, 2, 3, 4, 5]);
            expect(createdCar.carModelId).to.be.within(1, 29); 
            expect(createdCar.mileage).to.be.within(1000, 150000);

            cy.writeFile('cypress/fixtures/createdCarResponse.json', interception.response.body);
            
            cy.createExpenseAPI(createdCar.id, 100, 'Fuel').as('createExpense');
    
            cy.get('@createExpense').should('exist');
        });
    });
    
    it('should create an expense through API', () => {
    
        cy.get('@createExpense').then(interception => {
            expect(interception.response.statusCode).to.eq(201);
            expect(interception.response.body.status).to.eq('ok');
            expect(interception.response.body.data.id).to.exist;
        });
    });
    
    it('should find the created expense through UI', () => {
        cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/panel/expenses');
        cy.xpath(`//table[@class='table expenses_table']`).should('exist'); 

    });
});