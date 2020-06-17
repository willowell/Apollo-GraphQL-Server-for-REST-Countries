import { readFileSync } from 'fs'
import { ApolloServer } from 'apollo-server'
import CountriesAPI from './CountriesAPI'
import resolvers from './resolvers'
import path from 'path'
import { config } from './config'

const typeDefs = readFileSync(path.join(__dirname, config.schemaPath)).toString()

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
