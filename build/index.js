"use strict";
/**
 * William Howell
 * 2020-June-15
 * Practice with Apollo, GraphQL, and a REST API
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Based on https://moonhighway.com/apollo-datasources
 */
const fs_1 = require("fs");
const apollo_server_1 = require("apollo-server");
const CountriesAPI_1 = __importDefault(require("./CountriesAPI"));
const resolvers_1 = __importDefault(require("./resolvers"));
const path_1 = __importDefault(require("path"));
const typeDefs = fs_1.readFileSync(path_1.default.join(__dirname, '/../schema.graphql')).toString();
async function main() {
    const dataSources = () => ({
        countriesAPI: new CountriesAPI_1.default()
    });
    const server = new apollo_server_1.ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers_1.default,
        dataSources: dataSources,
        introspection: true,
        playground: true
    });
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    server.listen().then(({ url }) => {
        console.log(`🤖 BEEP BOOP 🤖 I'm listening at ${url}`);
    });
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();
