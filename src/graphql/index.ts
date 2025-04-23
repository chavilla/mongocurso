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

export const resolvers = {
    Mutation:Mutations,
    Query: Queries,
    ...scalarResolvers,
}