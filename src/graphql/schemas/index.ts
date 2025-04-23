import { gql } from 'apollo-server-express';
import {
    types as productTypes,
    queries as productQueries,
    mutations as productMutations
} from './product';

export const types = `
  scalar JSON
  scalar Date
  ${productTypes}
`;

export const queries = `
  type Query {
    ${productQueries}
  }
`;

export const mutations = `
  type Mutation {
    ${productMutations}
  }
`;

const typeDefs = gql(`${types} ${queries} ${mutations}`);

export default typeDefs;