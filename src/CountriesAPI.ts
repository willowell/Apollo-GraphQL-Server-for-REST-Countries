import { RESTDataSource } from 'apollo-datasource-rest'
import _ from 'lodash'

export default class CountriesAPI extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'https://restcountries.eu/rest/v2'
  }

  // Get all countries
  async getAllCountries () {
    return this.get('/all')
  }

  // Search by country name. It can be the native name or partial name
  async getCountryByName (name: String) {
    return this.get(`/name/${name}`)
  }

  // Search by country full name
  async getCountryByFullName (name: String) {
    return this.get(`name/${name}?fullText=true`)
  }

  // Search by ISO 3166-1 2-letter or 3-letter country code
  async getCountryByISOCode (code: String) {
    return this.get(`alpha/${code}`)
  }

  // Search by list of ISO 3166-1 2-letter or 3-letter country codes
  async getCountriesByISOCodes (codes: Array<String>) {
    return this.get(`alpha?codes=${_.reduce(codes, (sum, n) => { return sum + n + ';' }, '')}`)
  }

  // Search by ISO 4217 currency code
  async getCountryByCurrency (currency: String) {
    return this.get(`currency/${currency}`)
  }

  // Search by ISO 639-1 language code.
  async getCountriesByLanguage (language: String) {
    return this.get(`lang/${language}`)
  }

  // Search by capital city
  async getCountryByCapitalCity (city: String) {
    return this.get(`capital/${city}`)
  }

  // Search by calling code
  async getCountryByCallingCode (code: String) {
    return this.get(`callingcode/${code}`)
  }

  // Search by region: Africa, Americas, Asia, Europe, Oceania
  async getCountriesByRegion (region: String) {
    return this.get(`region/${region}`)
  }

  // Notice that we have a resolver for `getCountriesBySubregion`
  // and a corresponding query, but no corresponding API call here!

  // Search by regional bloc:
  // EU, EFTA, CARICOM, PA, AU, USAN, EEU, AL, ASEAN, CAIS, CEFTA, NAFTA, SAARC
  async getCountriesByRegionalBloc (bloc: String) {
    return this.get(`regionalbloc/${bloc}`)
  }
}
