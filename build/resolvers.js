"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers = {
    Query: {
        allCountries: async (parent, args, ctx) => {
            return ctx.dataSources.countriesAPI.getAllCountries();
        },
        countryByName: async (parent, args, ctx) => {
            const countryData = ctx.dataSources.countriesAPI.getCountryByName(args.name);
            return countryData;
        },
        countryByFullName: async (parent, args, ctx) => {
            const countryData = ctx.dataSources.countriesAPI.getCountryByFullName(args.name);
            return countryData.then((data) => data[0]);
        },
        countryByISOCode: async (parent, args, ctx) => {
            const countryData = ctx.dataSources.countriesAPI.getCountryByISOCode(args.code);
            return countryData.then((data) => data[0]);
        },
        countriesByISOCodes: async (parent, args, ctx) => {
            const countryData = ctx.dataSources.countriesAPI.getCountriesByISOCodes(args.codes);
            return countryData;
        },
        countryByCurrency: async (parent, args, ctx) => {
            const countryData = ctx.dataSources.countriesAPI.getCountryByCurrency(args.currency);
            return countryData.then((data) => data[0]);
        },
        countriesByLanguage: async (parent, args, ctx) => {
            const countryData = ctx.dataSources.countriesAPI.getCountriesByLanguage(args.language);
            return countryData;
        },
        countryByCapitalCity: async (parent, args, ctx) => {
            const countryData = ctx.dataSources.countriesAPI.getCountryByCapitalCity(args.city);
            return countryData.then((data) => data[0]);
        },
        countryByCallingCode: async (parent, args, ctx) => {
            const countryData = ctx.dataSources.countriesAPI.getCountryByCallingCode(args.code);
            return countryData.then((data) => data[0]);
        },
        countriesByRegion: async (parent, args, ctx) => {
            const countryData = ctx.dataSources.countriesAPI.getCountriesByRegion(args.region);
            return countryData;
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
            const countryData = ctx.dataSources.countriesAPI.getCountriesBySubregion();
            return countryData;
        },
        countriesByRegionalBloc: async (parent, args, ctx) => {
            const countryData = ctx.dataSources.countriesAPI.getCountriesByRegionalBloc(args.bloc);
            return countryData;
        }
    },
    Country: {
        name: me => me.name,
        topLevelDomain: me => me.topLevelDomain,
        alpha2code: me => me.alpha2code,
        alpha3code: me => me.alpha3code,
        callingCodes: me => me.callingCodes,
        capital: me => me.capital,
        altSpellings: me => me.altSpellings,
        region: me => me.region,
        subregion: me => me.subregion,
        population: me => me.population,
        latlng: me => me.latlng,
        demonym: me => me.demonym,
        area: me => me.area,
        gini: me => me.gini,
        timezones: me => me.timezones,
        borders: me => me.borders,
        nativeName: me => me.nativeName,
        numericCode: me => me.numericCode,
        currencies: me => me.currencies,
        languages: me => me.languages,
        translations: me => me.translations,
        flag: me => me.flag,
        regionalBlocs: me => me.regionalBlocs,
        cioc: me => me.cioc
    },
    Currency: {
        code: me => me.code,
        name: me => me.name,
        symbol: me => me.symbol
    },
    Language: {
        iso639_1: me => me.iso639_1,
        iso639_2: me => me.iso639_2,
        name: me => me.name,
        nativeName: me => me.nativeName
    },
    Translations: {
        de: me => me.de,
        es: me => me.es,
        fr: me => me.fr,
        ja: me => me.ja,
        it: me => me.it,
        br: me => me.br,
        pt: me => me.pt
    },
    Bloc: {
        acronym: me => me.acronym,
        name: me => me.name,
        otherAcronyms: me => me.otherAcronyms,
        otherNames: me => me.otherNames
    }
};
exports.default = resolvers;
