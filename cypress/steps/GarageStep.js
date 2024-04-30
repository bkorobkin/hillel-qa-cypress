import 'cypress-xpath';
import { basePage } from '../pages/BasePage';
import { homePage } from '../pages/HomePage';
import { generalStep } from '../steps/GeneralStep';

export default class GarageStep {

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
            const randomNumber = Math.floor(Math.random() * (1000001));
            return randomNumber;
        }
    }
    
export const garageStep = new GarageStep();