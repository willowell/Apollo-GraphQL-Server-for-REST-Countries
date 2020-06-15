import _ from 'lodash'

const resolvers = {
  Query: {
    allCountries: async (parent: any, args: any, ctx: any) => {
      return ctx.dataSources.countriesAPI.getAllCountries()
    },

    countryByName: async (parent: any, args: any, ctx: any) => {
      const countryData = ctx.dataSources.countriesAPI.getCountryByName(args.name)
      return countryData
    },

    countryByFullName: async (parent: any, args: any, ctx: any) => {
      const countryData = ctx.dataSources.countriesAPI.getCountryByFullName(args.name)
      return countryData.then((data: any) => data[0])
    },

    countryByISOCode: async (parent: any, args: any, ctx: any) => {
      const countryData = ctx.dataSources.countriesAPI.getCountryByISOCode(args.code)
      return countryData.then((data: any) => data[0])
    },

    countriesByISOCodes: async (parent: any, args: any, ctx: any) => {
      const countryData = ctx.dataSources.countriesAPI.getCountriesByISOCodes(args.codes)
      return countryData
    },

    countryByCurrency: async (parent: any, args: any, ctx: any) => {
      const countryData = ctx.dataSources.countriesAPI.getCountryByCurrency(args.currency)
      return countryData.then((data: any) => data[0])
    },

    countriesByLanguage: async (parent: any, args: any, ctx: any) => {
      const countryData = ctx.dataSources.countriesAPI.getCountriesByLanguage(args.language)
      return countryData
    },

    countryByCapitalCity: async (parent: any, args: any, ctx: any) => {
      const countryData = ctx.dataSources.countriesAPI.getCountryByCapitalCity(args.city)
      return countryData.then((data: any) => data[0])
    },

    countryByCallingCode: async (parent: any, args: any, ctx: any) => {
      const countryData = ctx.dataSources.countriesAPI.getCountryByCallingCode(args.code)
      return countryData.then((data: any) => data[0])
    },

    countriesByRegion: async (parent: any, args: any, ctx: any) => {
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
    countriesBySubregion: async (parent: any, args: any, ctx: any) => {
      const countryData = ctx.dataSources.countriesAPI.getAllCountries()
      return countryData.then((data: any) => _.find(data, _.matchesProperty('subregion', args.subregion)))
    },

    countriesByRegionalBloc: async (parent: any, args: any, ctx: any) => {
      const countryData = ctx.dataSources.countriesAPI.getCountriesByRegionalBloc(args.bloc)
      return countryData
    }
  }
}

export default resolvers
