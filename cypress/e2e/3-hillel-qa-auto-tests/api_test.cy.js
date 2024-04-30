import '../../support/commands'
import { garageStep } from '../steps/GarageStep';
import { generateRandomData } from '../support/utils';


describe('Signup Test', () => {
    it('should create a new user and verify the response status is 201', () => {
        const userData = generateRandomData();

        cy.request({
            method: 'POST',
            url: '/api/auth/signup',
            body: {
                name: userData.name,
                lastName: userData.lastName,
                email: userData.email,
                password: userData.password,
                repeatPassword: userData.password
            }
        }).then(response => {
            expect(response.status).to.eq(201);
        });
    });
});