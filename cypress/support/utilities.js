//utilities

//Sing up form data generator
const names = ['Liam', 'Olivia', 'Noah', 'Emma', 'Oliver', 'Ava', 'Elijah', 'Charlotte', 'William', 'Sophia', 'James', 'Amelia', 'Benjamin', 'Isabella', 'Lucas', 'Mia', 'Henry', 'Evelyn', 'Alexander', 'Harper'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'];

export function generateRandomData() {
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
};

// Filling SignUpForm
export const fillSignUpForm = (registrationData) => {
    cy.xpath(`//input[@id="signupName"]`).should('exist').type(registrationData.name);
    cy.xpath(`//input[@id="signupLastName"]`).should('exist').type(registrationData.lastName);
    cy.xpath(`//input[@id="signupEmail"]`).should('exist').type(registrationData.email);
    cy.xpath(`//input[@id="signupPassword"]`).should('exist').type(registrationData.password);
    cy.xpath(`//input[@id="signupRepeatPassword"]`).should('exist').type(registrationData.password);
}
// Checking Registration Success
export const checkRegistrationSuccess = () => {
    cy.url().should('include', 'https://qauto2.forstudy.space/panel/garage');
    cy.contains('.alert.alert-success', 'Registration complete').should('be.visible');
}
// Checking Profile Data
export const checkProfileData = (userData) => {
    cy.visit(`https://guest:welcome2qauto@qauto2.forstudy.space/panel/profile`); 
    cy.xpath(`//p[contains(@class, "profile_name display-4")]`).should('contain', userData.name);
    cy.xpath(`//p[contains(@class, "profile_name display-4")]`).should('contain', userData.lastName); 
    //cy.xpath(`//p[contains(@class, "profile_email display-4")]`).should('contain', userData.email);
};

//Filling Sign In Form
export const fillSignInForm = (registrationData) => {
    cy.xpath(`//input[@id="signinEmail"]`).should('exist').type(registrationData.email);
    cy.xpath(`//input[@id="signinPassword"]`).should('exist').type(registrationData.password);
};
// Checking logged in
export const checkLoggedIn = () => {
    cy.url().should('include', 'https://qauto2.forstudy.space/panel/garage');
    cy.contains('.alert.alert-success', 'You have been successfully logged in').should('be.visible');
};

//gneration random email
export function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2);
    return `user_${randomString}@example.com`;
}

const randomEmail = generateRandomEmail();
const randomPassword = Math.random().toString(36).substring(2);