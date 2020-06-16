/**
 * William Howell
 * 2020-June-15
 * Practice with Apollo, GraphQL, and a REST API
 */

/**
 * Based on https://moonhighway.com/apollo-datasources
 */

import { readFileSync } from 'fs'
import { ApolloServer } from 'apollo-server'
import CountriesAPI from './CountriesAPI'
import resolvers from './resolvers'
import path from 'path'

const typeDefs = readFileSync(path.join(__dirname, '/../schema.graphql')).toString()

async function main (): Promise<void> {
  const dataSources = (): any => ({
    countriesAPI: new CountriesAPI()
  })

  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    dataSources: dataSources,
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
