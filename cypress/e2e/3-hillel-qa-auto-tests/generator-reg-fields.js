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

// console.log(generateRandomData()); 
