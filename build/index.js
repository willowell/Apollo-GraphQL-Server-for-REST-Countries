'use strict'
/**
 * William Howell
 * 2020-June-15
 * Practice with Apollo, GraphQL, and a REST API
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
/**
 * Based on https://moonhighway.com/apollo-datasources
 */
const apollo_server_1 = require('apollo-server')
const schema_1 = __importDefault(require('./schema'))
const CountriesAPI_1 = __importDefault(require('./CountriesAPI'))
const resolvers_1 = __importDefault(require('./resolvers'))
async function main () {
  const dataSources = () => ({
    countriesAPI: new CountriesAPI_1.default()
  })
  const context = async ({ req }) => { }
  const server = new apollo_server_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default,
    dataSources,
    context,
    introspection: true,
    playground: true
  })
  server.listen().then(({ url }) => {
    console.log(`🤖 BEEP BOOP 🤖 I'm listening at ${url}`)
  })
}
main()
