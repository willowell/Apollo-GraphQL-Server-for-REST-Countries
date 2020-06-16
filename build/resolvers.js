'use strict'
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
const lodash_1 = __importDefault(require('lodash'))
const resolvers = {
  Query: {
    allCountries: async (parent, args, ctx) => {
      return ctx.dataSources.countriesAPI.getAllCountries()
    },
    countryByName: async (parent, args, ctx) => {
      const countryData = ctx.dataSources.countriesAPI.getCountryByName(args.name)
      return countryData
    },
    countryByFullName: async (parent, args, ctx) => {
      const countryData = ctx.dataSources.countriesAPI.getCountryByFullName(args.name)
      return countryData.then((data) => data[0])
    },
    countryByISOCode: async (parent, args, ctx) => {
      const countryData = ctx.dataSources.countriesAPI.getCountryByISOCode(args.code)
      return countryData.then((data) => data[0])
    },
    countriesByISOCodes: async (parent, args, ctx) => {
      const countryData = ctx.dataSources.countriesAPI.getCountriesByISOCodes(args.codes)
      return countryData
    },
    countryByCurrency: async (parent, args, ctx) => {
      const countryData = ctx.dataSources.countriesAPI.getCountryByCurrency(args.currency)
      return countryData.then((data) => data[0])
    },
    countriesByLanguage: async (parent, args, ctx) => {
      const countryData = ctx.dataSources.countriesAPI.getCountriesByLanguage(args.language)
      return countryData
    },
    countryByCapitalCity: async (parent, args, ctx) => {
      const countryData = ctx.dataSources.countriesAPI.getCountryByCapitalCity(args.city)
      return countryData.then((data) => data[0])
    },
    countryByCallingCode: async (parent, args, ctx) => {
      const countryData = ctx.dataSources.countriesAPI.getCountryByCallingCode(args.code)
      return countryData.then((data) => data[0])
    },
    countriesByRegion: async (parent, args, ctx) => {
      const countryData = ctx.dataSources.countriesAPI.getCountriesByRegion(args.region)
      return countryData
    },
    // Notice that the Countries API does not explicitly support subregions as an endpoint.
    // As a result, we do not have a `getCountriesBySubregion` function in my CountryAPI class.
    // However, using GraphQL with a filter on getAllCountries, I can add this query and use it
    // as if it were part of the Countries API.
    // `getAllCountries()` is appropriate here because I am not assuming I can narrow
    // the query down to a region. I could do this, but I would have to know which subregions
    // are in which regions. Or, I could ask the caller to provide the region and use the
    // `getCountriesByRegion` function above, but I will still have to filter on the subregion.
    countriesBySubregion: async (parent, args, ctx) => {
      const countryData = ctx.dataSources.countriesAPI.getAllCountries()
      return countryData.then((data) => lodash_1.default.filter(data, (country) => country.subregion === args.subregion))
    },
    countriesByRegionalBloc: async (parent, args, ctx) => {
      const countryData = ctx.dataSources.countriesAPI.getCountriesByRegionalBloc(args.bloc)
      return countryData
    }
  }
}
exports.default = resolvers
