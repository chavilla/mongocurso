import ProductService from '../../services/ProductService';
import mongoose from 'mongoose';

beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/testing');
});

afterAll(async () => {
    await mongoose.disconnect();
});

describe('ProductService', () => {
    it('Message' , ()=> {
        let sayHello = 'Hola'
        expect(sayHello).toBe('Hola');
    })
    /* it('should create a new product', async () => {
      const newProduct = await ProductService.createProduct('Silla2', 10000);
      expect(newProduct).toBeDefined();
      expect(newProduct.message).toBe('¡Product was stored successfully!');
      expect(newProduct.status).toBe(true);
    }) */
    /* it('should get a product from the database ', async () => {
        const productsList = await ProductService.getAll();

        expect(productsList).toBeDefined();
        expect(Array.isArray(productsList)).toBe(true);
        expect(productsList.length).toBeGreaterThan(0);
        expect(typeof productsList[0].price).toBe('number')
    }); */

   /*  it('should get an element from the database by ID', async()=> {
        const response = await ProductService.getProduct('827a3cbd-a410-4cdc-9603-6c41302a0a49');

        expect(response).toBeDefined();
        expect(!Array.isArray(response)).toBe(true);
        expect(response.product?.description).toBe('Silla2')
    }) */
});