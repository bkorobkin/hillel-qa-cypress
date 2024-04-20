//utilities.js

//Sing up form data generator
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
};

// Filling SignUpForm
const fillSignUpForm = (registrationData) => {
    cy.xpath(`//input[@id="signupName"]`).should('exist').type(registrationData.name);
    cy.xpath(`//input[@id="signupLastName"]`).should('exist').type(registrationData.lastName);
    cy.xpath(`//input[@id="signupEmail"]`).should('exist').type(registrationData.email);
    cy.xpath(`//input[@id="signupPassword"]`).should('exist').type(registrationData.password);
    cy.xpath(`//input[@id="signupRepeatPassword"]`).should('exist').type(registrationData.password);
}

// Checking Registration Success
const checkRegistrationSuccess = () => {
    cy.url().should('include', 'https://guest:welcome2qauto@qauto2.forstudy.space/panel/garage');
    cy.contains('.alert.alert-success', 'Registration complete').should('be.visible');
}

// Checking Profile Data
const checkProfileData = (registrationData) => {
    cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/panel/profile'); 
    cy.xpath(`//app-profile/div/div[2]/div/p`).should('contain', registrationData.name);
    cy.xpath(`//app-profile/div/div[2]/div/p`).should('contain', registrationData.lastName);
}

// Sign in with static data 
function getStaticAccountData() {
    return {
        staticName: "Test",
        staticLastName: "UserAAA",
        staticEmail: "testuserAAA@gmail.com",
        staticPassword: "TestUser1!",
    };
}
function signInWithStaticData() {
    const staticAccountData = getStaticAccountData();
    cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
//Sign In click
    cy.xpath(`//button[@class='btn btn-outline-white header_signin']`).should('exist').click(); 
// Filling Log In Form
    cy.xpath(`//input[@id="signinEmail"]`).should('exist').type(staticAccountData.staticEmail);
    cy.xpath(`//input[@id="signinPassword"]`).should('exist').type(staticAccountData.staticPassword);
// Login click
    cy.xpath(`//button[@class='btn btn-primary']`).should('be.enabled').click();
// Login success
cy.contains('.alert.alert-success', 'You have been successfully logged in').should('be.visible');
}

// Add car form - brand randomizer
function selectRandomBrand() {
    cy.xpath(`//select[@id="addCarBrand"]`).should('be.enabled').click();
    const brands = ['Audi', 'BMW', 'Ford', 'Porsche', 'Fiat'];
    const randomBrandIndex = Math.floor(Math.random() * brands.length);
    const selectedBrand = brands[randomBrandIndex];

    cy.get('#addCarBrand').select(selectedBrand);
}
// Add car form - model randomizer
function selectRandomModel(brand) {
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
 function inputRandomMileage() {
    cy.xpath(`//input[@id="addCarMileage"]`).should('be.enabled').click();
    const randomNumber = Math.floor(Math.random() * (1000001));
    cy.xpath(`//input[@id="addCarMileage"]`).should('be.enabled').type(randomNumber);
}

module.exports = {
    generateRandomData,
    fillSignUpForm,
    checkRegistrationSuccess,
    checkProfileData,
    getStaticAccountData,
    getStaticAccountData,
    selectRandomBrand,
    selectRandomModel,
    inputRandomMileage,
    signInWithStaticData
};


