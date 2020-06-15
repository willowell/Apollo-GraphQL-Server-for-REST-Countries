/**
 * William Howell
 * 2020-June-15
 * Practice with Apollo, GraphQL, and a REST API
 */

/**
 * Based on https://moonhighway.com/apollo-datasources
 */

import { ApolloServer } from 'apollo-server'

import typeDefs from './schema'
import CountriesAPI from './CountriesAPI'
import resolvers from './resolvers'

async function main () {
  const dataSources = () => ({
    countriesAPI: new CountriesAPI()
  })

  const context = async ({ req }: any) => {}

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
}

main()
