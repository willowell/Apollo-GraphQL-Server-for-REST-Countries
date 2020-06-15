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

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        countriesAPI: new CountriesAPI(),
      }
    },
})

server.listen().then(({ url }) => {
    console.log(`🤖 BEEP BOOP 🤖 I'm listening at ${url}`)
})