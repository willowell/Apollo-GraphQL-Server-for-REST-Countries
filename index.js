/**
 * William Howell
 * 2020-June-15
 * Practice with Apollo, GraphQL, and a REST API
 */

/**
 * Based on https://moonhighway.com/apollo-datasources
 */

const { ApolloServer } = require('apollo-server')

const typeDefs = require('./schema')
const CountriesAPI = require('./CountriesAPI')
const resolvers = require('./resolvers')

const dataSources = () => ({
  countriesAPI: new CountriesAPI()
})

const context = async ({ req }) => {}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context,
  introspection: true,
  playground: true
})

server.listen().then(({ url }) => {
  console.log(`🤖 BEEP BOOP 🤖 I'm listening at ${url}`)
})