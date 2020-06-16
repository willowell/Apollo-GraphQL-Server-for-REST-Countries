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

async function main (): Promise<void> {
  const dataSources = (): any => ({
    countriesAPI: new CountriesAPI()
  })

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    introspection: true,
    playground: true
  })

  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  server.listen().then(({ url }) => {
    console.log(`🤖 BEEP BOOP 🤖 I'm listening at ${url}`)
  })
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main()
