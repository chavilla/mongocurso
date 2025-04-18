import { gql } from 'apollo-server-express'
import { readFileSync } from 'fs'
import path from 'path'
import Mutations from './resolvers/mutations';
import Queries from './resolvers/queries';
import { GraphQLDateTime } from 'graphql-iso-date'
import { GraphQLScalarType, Kind } from 'graphql'

// Scalar Date config
export const scalarResolvers = {
  Date: GraphQLDateTime,
}

export const DateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Custom Date scalar',
  serialize(value: any) {
    return new Date(value).toISOString()
  },
  parseValue(value: any) {
    return new Date(value)
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value)
    }
    return null
  },
});

// Load all SDL files and merge them
const loadSchema = (filename: string) =>
    readFileSync(path.join(__dirname, 'schemas', filename), 'utf8')

export const typeDefs = gql(
    loadSchema('product.graphql') //+
    //loadSchema('query.graphql') +
    //loadSchema('mutation.graphql')
);

export const resolvers = {
    Mutation:Mutations,
    Query: Queries,
    ...scalarResolvers,
}