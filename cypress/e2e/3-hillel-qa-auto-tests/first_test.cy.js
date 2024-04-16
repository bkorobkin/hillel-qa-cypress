// /// <reference types="cypress" />
// //describition hw9 test logic
// // Тест-кейс: Реєстрація нового користувач для сервісу "Гараж"
// // Опис: Тест-кейс перевіряє процес реєстрації нового користувача, заповнення форми SignUp, 
// // і валідність даних користувача на сторінці "Гараж" після реєстрації.
// // Попередні вимоги: Cypress встановлено та налаштовано.
// // Тестові кроки:
// // 1. Відкрити вітальну сторінку.
// // 2. Натиснути кнопку "Sign Up".
// // 3. Заповнити форму реєстрації валідними даними.
// // 4. Натиснути кнопку "Registration".
// // 5. Переконатись, що реєстрація пройшла успішно і відкрилась сторінка "Гараж".
// // 6. Перевірити, що дані на сторінці Profile відповідають даним, введеним під час реєстрації.

// // Очікуваний результат:
// // Дані користувача на сторінці "Гараж" відповідають даним, введеним під час реєстрації.
import { BasePage } from "../pages/BasePage";

const basePage = new BasePage();

const names = ['Liam', 'Olivia', 'Noah', 'Emma', 'Oliver', 'Ava', 'Elijah', 'Charlotte', 'William', 'Sophia', 'James', 'Amelia', 'Benjamin', 'Isabella', 'Lucas', 'Mia', 'Henry', 'Evelyn', 'Alexander', 'Harper'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'];

function generateRandomData() {
    const randomIndexName = Math.floor(Math.random() * names.length);
    const randomIndexLastName = Math.floor(Math.random() * lastNames.length);

    const name = names[randomIndexName];
    const lastName = lastNames[randomIndexLastName];
    const email = `${name.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
    const password = generateRandomPassword(); 

    function generateRandomPassword() {
        const minLength = 8;
        const maxLength = 15;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
        let password = '';
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    }

    return {
        name,
        lastName,
        email,
        password,
        
    };
}
const registrationData = generateRandomData();


describe('New-user registration. Сompilation SignUp form and data validation after registration.', () => {  
    
    it('Test sign up in Garage +', () => {
       // 1. Відкрити вітальну сторінку.
        cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');

        //  // 2. Натиснути кнопку "Sign Up".
        // /*v.1*/ cy.get('button').contains('Sign up').click();
        // /*v.2*/cy.xpath(`//button[@class='hero-descriptor_btn btn btn-primary']`).should('exist');
        /*v.3*/ basePage.signUpButton.should('exist');
        // // 3. Заповнити форму реєстрації валідними даними.
        // /*v.1*/ cy.get('input#signupName').should('exist').type(registrationData.name);
        // /*v.1*/ cy.get('input#signupLastName').should('exist').type(registrationData.lastName);
        // /*v.1*/ cy.get('input#signupEmail').should('exist').type(registrationData.email);
        // /*v.1*/ cy.get('input#signupPassword').should('exist').type(registrationData.password);
        // /*v.1*/ cy.get('input#signupRepeatPassword').should('exist').type(registrationData.password);
        /*v.3*/ basePage.singUpName().type(name).should('have.value', name);
        /*v.3*/ basePage.singLastName().type(lastName).should('have.value', lastName);
        /*v.3*/ basePage.singEmail().type(email).should('have.value', email);
        /*v.3*/ basePage.singPassword().type(password).should('have.value', password);
        /*v.3*/ basePage.singRepeatPaswword().type(password).should('have.value', password);
        // // 4. Натиснути кнопку "Registration".
        // /*v.1*/ cy.get('button').contains('Register').should('be.enabled').click();
        // // 5. Переконатись, що реєстрація пройшла успішно і відкрилась сторінка "Гараж".
        // /*v.1*/ cy.url().should('include', 'https://qauto2.forstudy.space/panel/garage');
        // /*v.1*/ cy.contains('.alert.alert-success', 'Registration complete').should('be.visible');
        // // 6. Перевірити, що дані на сторінці Profile відповідають даним, введеним під час реєстрації.
        // /*v.1*/ cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/panel/profile'); 
        // /*v.1*/ cy.get('.profile_name.display-4').should('contain', registrationData.name);
        // /*v.1*/ cy.get('.profile_name.display-4').should('contain', registrationData.lastName);
        
    });
});
