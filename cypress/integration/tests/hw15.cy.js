import {
    logAfterDelay,
    fetchTodo,
    fetchUser,
    fetchAsync,
    TodoClient,
    UserClient
} from '../../support/fetchFunctions.js';

// Выполнение задания 1
logAfterDelay('Hello after 2 seconds', 2000);

// Выполнение задания 2
fetchTodo().then(todo => console.log('Todo:', todo));
fetchUser().then(user => console.log('User:', user));

// Выполнение задания 3
fetchAsync().then(result => console.log('Fetch Async Result:', result));

// Выполнение задания 4
const todoClient = new TodoClient();
const userClient = new UserClient();

Promise.all([todoClient.fetchTodo(), userClient.fetchUser()])
    .then(([todo, user]) => {
        console.log('Todo:', todo);
        console.log('User:', user);
    })
    .catch(error => console.error('Error:', error));

Promise.race([todoClient.fetchTodo(), userClient.fetchUser()])
    .then(result => console.log('Race Result:', result))
    .catch(error => console.error('Error:', error));
