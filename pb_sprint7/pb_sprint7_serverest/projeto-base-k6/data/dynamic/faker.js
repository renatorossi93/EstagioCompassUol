import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js';


export const dynamicUser = () => ({
    'users': [
        {"email": `${faker.internet.email()}`, "password": `${faker.internet.password()}`},
        {"email": `${faker.internet.email()}`, "password": `${faker.internet.password()}`}
    ]
});