# Apollo GraphQL Server for REST Countries
#### REST Countries API: https://restcountries.eu/#rest-countries
----
I made this following this tutorial: https://moonhighway.com/apollo-datasources.

I have been struggling to learn how to make an Apollo server from a REST source, and that tutorial helped me finally understand how to do it!

I am publishing my server from following that tutorial in case anyone else is also stuck and looking for a simple example of this kind of server.

This is not a simple copy-paste of the server from the tutorial above, though! 🙂

I added a number of features:
* The schema, API class, and resolvers are in their own files,
* The schema covers all fields the REST Countries API has to offer.
* `enum` fields for regions and regional blocs.
* There are get methods in the `CountriesAPI` class and corresponding resolvers for each of the endpoints listed.
* I have also added a resolver for a field that is *not* an API endpoint (subregion) for an example of that.
* Lodash because I love functional programming too much.

Environment Details:
* NodeJS version: 13.11.0
* npm version: 6.13.7

To build and run this server on your machine:
1. Clone or download this repository.
2. `cd` into the directory and run `yarn`.
3. Run `yarn start` to start the server.
4. If all went well, the server will be ready at http://localhost:4000/.
5. Enjoy!!

If you have any problems, questions, suggestions, or critiques, please open an issue on this repository!

My process for this project:
1. I started with the server from the tutorial.
2. Then, I added more features until it became difficult to easily scroll around in index.js
3. Then, I factored `CountriesApi`, `resolvers` and `schema` into their own files.
4. Then, I filled them out some more until they were at parity with the REST API.
5. Then, I tested them in GraphiQL.
6. Next, I started pulling in dependencies from my attempt at an Apollo Server in TypeScript.
7. I also added StandardJS for a consistent look and feel for the code.
8. Then, I switched the JavaScript code over to TypeScript and made some minor refactors, including switching over to ES6 module syntax and adding types to parameters.
9. Next, I ran ESLint and followed it until it did not produce any errors.
10. Then, I ran graphql-codegen and integrated its types into the server.
11. After that, I moved the schema into a separate GraphQL file, but I kept running into errors trying to use `loadSchemaSync` from `@graphql-tools`, so I just stuck to a simple `readFileSync` instead.
12. And then, I added reducers for my types.