// Task 1: Function to log a message after a specified delay
export function logAfterDelay(text, delay) {
    setTimeout(() => {
        console.log(text);
    }, delay);
}

// Task 2: Fetch functions
export function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching todo:', error);
            throw error; 
        });
}

export function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching user:', error);
            throw error; 
        });
}

// Task 3: Fetch using async/await
export async function fetchAsync() {
    const results = await Promise.all([fetchTodo(), fetchUser()]);
    const [todo, user] = results;
    console.log('Async/Await Promise.all results:', { todo, user });

    const raceResult = await Promise.race([fetchTodo(), fetchUser()]);
    console.log('Async/Await Promise.race result:', raceResult);

    return { todo, user, raceResult };
}

// Task 4: Classes for API clients
export class TodoClient {
    async fetchTodo() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error('Failed to fetch todo');
        }
        return response.json();
    }
}

export class UserClient {
    async fetchUser() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return response.json();
    }
}
