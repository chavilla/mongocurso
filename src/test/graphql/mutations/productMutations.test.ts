import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import typeDefs from '../../../graphql/schemas/index';
import { resolvers } from '../../../graphql/index';
import app from "../../../app";
import request from 'supertest';
import { ICreateProduct } from "../../../graphql/resolvers/types/ProductTypes";

let server: ApolloServer;

beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/testing');
    // Create apollo server
    server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
});

describe('Product mutation testing', () => {
    it('Should create a product', async () => {
        const query = `
            mutation createProduct($description: String!, $price: Int!){
                createProduct(description: $description, price: $price){
                    message
                    status
                    productAffected {
                    description
                    }
                }
            }
        `

        const variables: ICreateProduct = {
            description: "Testing mutation",
            price: 23500
        }

        const response = await request(app)
            .post('/graphql').send({ query, variables });

        expect(response?.body?.data?.createProduct).toBeDefined();
        expect(response?.body?.data?.createProduct?.message).toBe('¡Product was stored successfully!');
    })
})

afterAll(async () => {
    await mongoose.disconnect();
    await server.stop()
});