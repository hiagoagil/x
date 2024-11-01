import { faker } from '@faker-js/faker';

export function generateProductData() {
    return {
        productName: faker.commerce.product(),
        code: faker.string.numeric(6).toString(), 
        price: '100,00',
        netWeight: '30',
        grossWeight: '20',
        stacking: '20',
        manufacturerName: faker.company.name(),
    };
}

export function generateGroupName() {
    const produto = faker.commerce.product()
    const string = faker.string.alpha() 
    return `${produto} ${string} `
}

export function generateFamily() {
    const name = faker.commerce.department();
    const string = faker.string.alpha();
    return `${name} ${string}`; 
}