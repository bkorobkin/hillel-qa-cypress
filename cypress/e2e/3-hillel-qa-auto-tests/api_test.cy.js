import '../../support/commands'
import { generateRandomData, createUserAndCheckStatus, loginUI } from '../../support/utilities';
import { garageStep } from '../../steps/GarageStep';


let userData;
let selectedBrand;
let selectedModel;

describe('Test suit - Create User, Login, Add Car, GET all Cars', () => {
//1
    before(() => {
        userData = generateRandomData();
        createUserAndCheckStatus(userData);
    });
//2 
it('should log in using the user created by api', () => {
    
    expect(userData).to.not.be.undefined;
    expect(userData.email).to.exist;
    expect(userData.password).to.exist;
    // login
    if (typeof userData !== 'undefined') {
        cy.visit('/');
        loginUI(userData.email, userData.password);
        cy.screenshot('logged_in');
    } else {
        cy.log('User data is not available');
    }
});
//3
it('should add a car', () => {
    expect(userData).to.not.be.undefined;
    expect(userData.email).to.exist;
    expect(userData.password).to.exist;

    // add car
    if (typeof userData !== 'undefined') {
        garageStep.addRandomCar();
        cy.screenshot('car_added');
    } else {
        cy.log('User data is not available');
    }
});
//4     
it('should verify the added car', () => {
    expect(userData).to.not.be.undefined;
    expect(userData.email).to.exist;
    expect(userData.password).to.exist;

    if (typeof userData !== 'undefined') {
        // GET all cars
        cy.request('GET', '/api/cars').then(res => {
            expect(res.status).to.eq(200);
            expect(res.body).to.have.length.greaterThan(0);
            const addedCar = res.body.find(car => car.brand === selectedBrand && car.model === selectedModel);
            expect(addedCar).to.exist;
        });
    } else {
        cy.log('User data is not available');
    }
});
});