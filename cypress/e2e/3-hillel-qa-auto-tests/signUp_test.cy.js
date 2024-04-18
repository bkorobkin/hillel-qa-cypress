// /// <reference types="cypress" />
//Sign Up test based on POM
import 'cypress-xpath';
import { generateRandomData, fillSignUpForm, checkRegistrationSuccess, checkProfileData } from './utilities';

describe('New-user registration. Сompilation SignUp form and data validation after registration.', () => {  
    
    it('all-in', () => {
       // 1. Відкрити вітальну сторінку.
        cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
         // 2. Натиснути кнопку "Sign Up".
        cy.xpath(`//button[@class='hero-descriptor_btn btn btn-primary']`).should('exist').click(); 
        // 3. Заповнити форму реєстрації валідними даними.
        const registrationData = generateRandomData();
        fillSignUpForm(registrationData);
        // 4. Натиснути кнопку "Registration".
        cy.xpath(`//button[@class='btn btn-primary']`).should('be.enabled').click();
        // 5. Переконатись, що реєстрація пройшла успішно і відкрилась сторінка "Гараж".
        checkRegistrationSuccess('https://qauto2.forstudy.space/panel/garage');
        // 6. Перевірити, що дані на сторінці Profile відповідають даним, введеним під час реєстрації.
        checkProfileData(registrationData);
    });
});
