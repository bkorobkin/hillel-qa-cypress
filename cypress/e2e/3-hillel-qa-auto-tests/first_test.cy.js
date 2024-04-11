/// <reference types="cypress" />
//describition hw9 test logic
// Тест-кейс: Реєстрація нового користувач для сервісу "Гараж"
// Опис: Тест-кейс перевіряє процес реєстрації нового користувача, заповнення форми SignUp, 
// і валідність даних користувача на сторінці "Гараж" після реєстрації.
// Попередні вимоги: Cypress встановлено та налаштовано.
// Тестові кроки:
// 1. Відкрити вітальну сторінку.
// 2. Натиснути кнопку "Sign Up".
// 3. Заповнити форму реєстрації валідними даними.
// 4. Натиснути кнопку "Registration".
// 5. Переконатись, що реєстрація пройшла успішно і відкрилась сторінка "Гараж".
// 6. Перевірити, що дані на сторінці Profile відповідають даним, введеним під час реєстрації.

// Очікуваний результат:
// Дані користувача на сторінці "Гараж" відповідають даним, введеним під час реєстрації.


const names = ['Alexander', 'Sophia', 'Luca', 'Max', 'Mateo', 'Sofia', 'Leo', 'Emma', 'Marco', 'Giulia'];
const lastNames = ['Rossi', 'Muller', 'García', 'Smith', 'Petrov', 'Johnson', 'Sirko', 'Schmidt', 'Ivanov', 'Andersen'];

function generateRandomData() {
    const randomIndexName = Math.floor(Math.random() * names.length);
    const randomIndexLastName = Math.floor(Math.random() * lastNames.length);

    const name = names[randomIndexName];
    const lastName = lastNames[randomIndexLastName];
    const email = `${name.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
    const password = generateRandomPassword(); 

    function generateRandomPassword() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const passwordLength = 8;
        let password = '';
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    }

    const reEnterPassword = password;

    return {
        name,
        lastName,
        email,
        password,
        reEnterPassword
    };
}

describe('New-user registration. Сompilation SignUp form and data validation after registration.', () => {  
    
    it('all-in', () => {
       // 1. Відкрити вітальну сторінку.
        cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
         // 2. Натиснути кнопку "Sign Up".
        cy.get('button').contains('Sign up').click();
        // 3. Заповнити форму реєстрації валідними даними.
        const registrationData = generateRandomData();
        cy.get('input#signupName').should('exist').type(generateRandomData().name);
        cy.get('input#signupLastName').should('exist').type(generateRandomData().lastName);
        cy.get('input#signupEmail').should('exist').type(generateRandomData().email);
        cy.get('input#signupPassword').should('exist').type(generateRandomData().password);
        cy.get('input#signupRepeatPassword').should('exist').type(generateRandomData().reEnterPassword);
        // 4. Натиснути кнопку "Registration".
        cy.get('button').contains('Register').click();
        // 5. Переконатись, що реєстрація пройшла успішно і відкрилась сторінка "Гараж".
        cy.url().should('include', 'https://guest:welcome2qauto@qauto2.forstudy.space/panel/garage');
        // 6. Перевірити, що дані на сторінці Profile відповідають даним, введеним під час реєстрації.
        cy.get('button').contains('Profile').click();
        cy.get('.profile_name.display-4').should('contain', registrationData.name);
        cy.get('.profile_name.display-4').should('contain', registrationData.lastName);
        
    });
});
