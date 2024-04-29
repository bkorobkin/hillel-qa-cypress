import 'cypress-xpath';
import { basePage } from '../../pages/BasePage';
import { homePage } from '../../pages/HomePage';
import { generalStep } from '../steps/GeneralStep.js';

// const basePage = new BasePage();
// const homePage = new HomePage();



// Add car form - brand randomizer
export function selectRandomBrand() {
    cy.xpath(`//select[@id="addCarBrand"]`).should('be.enabled').click();
    const brands = ['Audi', 'BMW', 'Ford', 'Porsche', 'Fiat'];
    const randomBrandIndex = Math.floor(Math.random() * brands.length);
    const selectedBrand = brands[randomBrandIndex];

    cy.get('#addCarBrand').select(selectedBrand);
}
// Add car form - model randomizer
export function selectRandomModel(brand) {
    cy.xpath(`//select[@id="addCarModel"]`).should('be.enabled').click();
    let models;
    switch (brand) {
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

    cy.get('#addCarModel').select(selectedModel);
}
 // Add car form - Mileage randomizer
export function inputRandomMileage() {
    cy.xpath(`//input[@id="addCarMileage"]`).should('be.enabled').click();
    const randomNumber = Math.floor(Math.random() * (1000001));
    cy.xpath(`//input[@id="addCarMileage"]`).should('be.enabled').type(randomNumber);
}