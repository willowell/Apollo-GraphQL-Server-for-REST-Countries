'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const apollo_server_1 = require('apollo-server')
const typeDefs = apollo_server_1.gql`
  type Country {
    name: String
    topLevelDomain: [String]
    alpha2code: String
    alpha3code: String
    callingCodes: [String]
    capital: String
    altSpellings: [String]
    region: String
    subregion: String
    population: Int
    latlng: [Float]
    demonym: String
    area: Float
    gini: Float
    timezones: [String]
    borders: [String]
    nativeName: String
    numericCode: String
    currencies: [Currency]
    languages: [Language]
    translations: Translations
    flag: String
    regionalBlocs: [Bloc]
    cioc: String
  }

  type Currency {
    code: String
    name: String
    symbol: String
  }

  type Language {
    iso639_1: String
    iso639_2: String
    name: String
    nativeName: String
  }

  type Translations {
    de: String
    es: String
    fr: String
    ja: String
    it: String
    br: String
    pt: String
  }

  type Bloc {
    acronym: String
    name: String
    otherAcronyms: [String]
    otherNames: [String]
  }

  enum Region {
    AFRICA
    AMERICAS
    ASIA
    EUROPE
    OCEANIA
  }

  enum RegionalBloc {
    EU
    EFTA
    CARICOM
    PA
    AU
    USAN
    EEU
    AL
    ASEAN
    CAIS
    CEFTA
    NAFTA
    SAARC
  }

  type Query {
    allCountries: [Country!]!
    countryByName(name: String!): [Country]
    countryByFullName(name: String!): Country!
    countryByISOCode(code: String!): Country!
    countriesByISOCodes(codes: [String!]): [Country]
    countryByCurrency(currency: String!): Country!
    countriesByLanguage(language: String!): [Country]
    countryByCapitalCity(city: String!): Country!
    countryByCallingCode(code: String!): Country!
    countriesByRegion(region: Region!): [Country]
    countriesBySubregion(subregion: String!): [Country]
    countriesByRegionalBloc(bloc: RegionalBloc!): [Country]
  }
`
exports.default = typeDefs
