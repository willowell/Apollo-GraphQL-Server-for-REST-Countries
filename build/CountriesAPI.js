'use strict'
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
const apollo_datasource_rest_1 = require('apollo-datasource-rest')
const lodash_1 = __importDefault(require('lodash'))
class CountriesAPI extends apollo_datasource_rest_1.RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'https://restcountries.eu/rest/v2'
  }

  // Get all countries
  async getAllCountries () {
    return await this.get('/all')
  }

  // Search by country name. It can be the native name or partial name
  async getCountryByName (name) {
    return await this.get(`/name/${name}`)
  }

  // Search by country full name
  async getCountryByFullName (name) {
    return await this.get(`name/${name}?fullText=true`)
  }

  // Search by ISO 3166-1 2-letter or 3-letter country code
  async getCountryByISOCode (code) {
    return await this.get(`alpha/${code}`)
  }

  // Search by list of ISO 3166-1 2-letter or 3-letter country codes
  async getCountriesByISOCodes (codes) {
    return await this.get(`alpha?codes=${lodash_1.default.reduce(codes, (sum, n) => { return sum + n + ';' }, '')}`)
  }

  // Search by ISO 4217 currency code
  async getCountryByCurrency (currency) {
    return await this.get(`currency/${currency}`)
  }

  // Search by ISO 639-1 language code.
  async getCountriesByLanguage (language) {
    return await this.get(`lang/${language}`)
  }

  // Search by capital city
  async getCountryByCapitalCity (city) {
    return await this.get(`capital/${city}`)
  }

  // Search by calling code
  async getCountryByCallingCode (code) {
    return await this.get(`callingcode/${code}`)
  }

  // Search by region: Africa, Americas, Asia, Europe, Oceania
  async getCountriesByRegion (region) {
    return await this.get(`region/${region}`)
  }

  // Notice that we have a resolver for `getCountriesBySubregion`
  // and a corresponding query, but no corresponding API call here!
  // Search by regional bloc:
  // EU, EFTA, CARICOM, PA, AU, USAN, EEU, AL, ASEAN, CAIS, CEFTA, NAFTA, SAARC
  async getCountriesByRegionalBloc (bloc) {
    return await this.get(`regionalbloc/${bloc}`)
  }
}
exports.default = CountriesAPI
