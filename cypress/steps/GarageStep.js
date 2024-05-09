import 'cypress-xpath';
import { basePage } from '../pages/BasePage';
import { homePage } from '../pages/HomePage';
import { generalStep } from '../steps/GeneralStep';

export default class GarageStep {
    constructor() {
        this.selectedBrand = null;
        this.selectedModel = null;
        this.selectedMileage = null;
    }
    // Add car form - brand randomizer
    selectRandomBrand() {
        cy.xpath(`//select[@id='addCarBrand']`).should('be.enabled').click();
        const brands = ['Audi', 'BMW', 'Ford', 'Porsche', 'Fiat'];
        const randomBrandIndex = Math.floor(Math.random() * brands.length);
        const selectedBrand = brands[randomBrandIndex];
    
        cy.get('#addCarBrand').select(selectedBrand);
        return selectedBrand; 
    }
    
    // Add car form - model randomizer
        selectRandomModel() {
            const selectedBrand = this.selectRandomBrand();
            let models;
            switch (selectedBrand) {
                case 'Audi':
                    models = ['TT', 'R8', 'Q7', 'A6', 'A8'];
                    break;
                case 'BMW':
                    models = ['3', '5', 'X5', 'X6', 'Z3'];
                    break;
                case 'Ford':
                    models = ['Fiesta', 'Focus', 'Fusion', 'Mondeo', 'Sierra'];
                    break;
                case 'Porsche':
                    models = ['911', 'Cayenne', 'Panamera'];
                    break;
                case 'Fiat':
                    models = ['Palio', 'Ducato', 'Panda', 'Punto', 'Scudo'];
                    break;
                default:
                    throw new Error('Invalid brand');
            }
            const randomModelIndex = Math.floor(Math.random() * models.length);
            const selectedModel = models[randomModelIndex];
            return selectedModel;
        }
    // Add car form - Mileage randomizer
    inputRandomMileage() {
        const min = 1000;
        const max = 150000;
        const mileage = cy.generateRandomNumber(min, max);
        return mileage;
    }
    
    addRandomCar() {

        const selectedBrand = this.selectRandomBrand();
        const selectedModel = this.selectRandomModel(selectedBrand);
        let selectedMileage = this.inputRandomMileage();
    
        basePage.addNewCarConfim();
        cy.intercept('POST', '/api/cars').as('createCar');

        cy.wait('@createCar').then(interception => {
        expect(interception.response.statusCode).to.eq(200);
            
        const createdCar = interception.response.body.data;

        expect(createdCar.id).to.exist;
        expect(createdCar.carBrandId).to.equal(selectedBrand);
        expect(createdCar.carModelId).to.equal(selectedModel);
        expect(createdCar.mileage).to.equal(selectedMileage);
});
    }
    
    addRandomCarAPI() {
        const brands = ['Audi', 'BMW', 'Ford', 'Porsche', 'Fiat'];
        const models = [
            ['TT', 'R8', 'Q7', 'A6', 'A8'],
            ['3', '5', 'X5', 'X6', 'Z3'],
            ['Fiesta', 'Focus', 'Fusion', 'Mondeo', 'Sierra'],
            ['911', 'Cayenne', 'Panamera'],
            ['Palio', 'Ducato', 'Panda', 'Punto', 'Scudo']
        ];
    
        const selectedBrandIndex = Cypress._.random(0, brands.length - 1);
        const selectedBrand = brands[selectedBrandIndex];
    
        let selectedModelIndex;
        switch (selectedBrand) {
            case 'Audi':
                selectedModelIndex = Cypress._.random(1, 5); 
                break;
            case 'BMW':
                selectedModelIndex = Cypress._.random(6, 10); 
                break;
            case 'Ford':
                selectedModelIndex = Cypress._.random(11, 15); 
                break;
            case 'Porsche':
                selectedModelIndex = Cypress._.random(16, 18); 
                break;
            case 'Fiat':
                selectedModelIndex = Cypress._.random(19, 23); 
                break;
            default:
                throw new Error('Invalid brand');
        }
    
        const selectedBrandId = selectedBrandIndex + 1;
        const selectedMileage = Cypress._.random(1000, 150000);
    
        cy.request({
            method: 'POST',
            url: '/api/cars',
            body: {
                carBrandId: selectedBrandId,
                carModelId: selectedModelIndex,
                mileage: selectedMileage
            }
        }).then(response => {
            expect(response.status).to.eq(201);
            expect(response.body.status).to.eq('ok');
            expect(response.body.data.id).to.exist;
            this.createdCarId = response.body.data.id;
        });
    }
    
    
    
    }
    
export const garageStep = new GarageStep();