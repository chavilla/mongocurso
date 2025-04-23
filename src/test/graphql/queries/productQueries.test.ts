import { ApolloServer } from '@apollo/server';
import { resolvers } from '../../../graphql';
import typeDefs from '../../../graphql/schemas/index';
import mongoose from 'mongoose';
import request from 'supertest';
import app from '../../../app';

let server: ApolloServer;

beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/testing');
    server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
});

afterAll(async () => {
    await mongoose.disconnect();
    await server.stop();
});

describe('Product queries Testing ', () => {

    it('Message' , ()=> {
        let sayHello = 'Hola'
        expect(sayHello).toBe('Hola');
    })

    /* it('should return a list of products', async () => {
        const query = `
              query {
                getProducts {
                  _id
                  description
                  price
                }
              }
            `;

        const response = await request(app)
            .post('/graphql')
            .send({ query });

        console.log("Result ", response?.body?.data?.getProducts);
        

        expect(response.statusCode).toBe(200);
        expect(response.body.data.getProducts).toBeInstanceOf(Array);
        if (response.body.data.getProducts.length > 0) {
            expect(response.body.data.getProducts[0]).toHaveProperty('_id');
        }
    }); */

})