# Apollo GraphQL Server for REST Countries

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
4. Enjoy!!

If you have any problems, questions, suggestions, or critiques, please open an issue on this repository!