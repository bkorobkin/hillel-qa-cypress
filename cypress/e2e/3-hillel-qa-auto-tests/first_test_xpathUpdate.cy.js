// /// <reference types="cypress" />
import 'cypress-xpath';
const { generateRandomData } = require('./utilities');

// //describition hw9 test logic
// // Тест-кейс: Реєстрація нового користувач для сервісу "Гараж"
// // Опис: Тест-кейс перевіряє процес реєстрації нового користувача, заповнення форми SignUp, 
// // і валідність даних користувача на сторінці "Гараж" після реєстрації.

// // Очікуваний результат:
// // Дані користувача на сторінці "Гараж" відповідають даним, введеним під час реєстрації.

describe('New-user registration. Сompilation SignUp form and data validation after registration.', () => {  
    
    it('all-in', () => {
       // 1. Відкрити вітальну сторінку.
        cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
         // 2. Натиснути кнопку "Sign Up".
        cy.xpath(`//button[@class='hero-descriptor_btn btn btn-primary']`).should('exist').click(); 
        // 3. Заповнити форму реєстрації валідними даними.
        const registrationData = generateRandomData();
        cy.xpath(`//input[@id="signupName"]`).should('exist').type(registrationData.name);
        cy.xpath(`//input[@id="signupLastName"]`).should('exist').type(registrationData.lastName);
        cy.xpath(`//input[@id="signupEmail"]`).should('exist').type(registrationData.email);
        cy.xpath(`//input[@id="signupPassword"]`).should('exist').type(registrationData.password);
        cy.xpath(`//input[@id="signupRepeatPassword"]`).should('exist').type(registrationData.password);
        // 4. Натиснути кнопку "Registration".
        cy.xpath(`//button[@class='btn btn-primary']`).should('be.enabled').click();
        // 5. Переконатись, що реєстрація пройшла успішно і відкрилась сторінка "Гараж".
        cy.url().should('include', 'https://qauto2.forstudy.space/panel/garage');
        cy.contains('.alert.alert-success', 'Registration complete').should('be.visible');
        // 6. Перевірити, що дані на сторінці Profile відповідають даним, введеним під час реєстрації.
        cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/panel/profile'); 
        cy.xpath(`//app-profile/div/div[2]/div/p`).should('contain', registrationData.name);
        cy.xpath(`//app-profile/div/div[2]/div/p`).should('contain', registrationData.lastName);
        
    });
});
