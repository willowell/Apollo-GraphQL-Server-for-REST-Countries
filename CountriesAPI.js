const { RESTDataSource } = require('apollo-datasource-rest')
const _ = require('lodash')

class CountriesAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://restcountries.eu/rest/v2'
    }

    // Get all countries
    async getAllCountries() {
        return this.get('/all')
    }

    // Search by country name. It can be the native name or partial name
    async getCountryByName(name) {
        return this.get(`/name/${name}`)
    }

    // Search by country full name
    async getCountryByFullName(name) {
        return this.get(`name/${name}?fullText=true`)
    }

    // Search by ISO 3166-1 2-letter or 3-letter country code
    async getCountryByISOCode(code) {
        return this.get(`alpha/${code}`)
    }

    // Search by list of ISO 3166-1 2-letter or 3-letter country codes
    async getCountriesByISOCodes(codes) {
        return this.get(`alpha?codes=${_.reduce(codes, (sum, n) => {return sum + n + ';'}, "")}`)
    }

    // Search by ISO 4217 currency code
    async getCountryByCurrency(currency) {
        return this.get(`currency/${currency}`)
    }

    // Search by ISO 639-1 language code.
    async getCountriesByLanguage(language) {
        return this.get(`lang/${language}`)
    }

    // Search by capital city
    async getCountryByCapitalCity(city) {
        return this.get(`capital/${city}`)
    }

    // Search by calling code
    async getCountryByCallingCode(code) {
        return this.get(`callingcode/${code}`)
    }

    // Search by region: Africa, Americas, Asia, Europe, Oceania
    async getCountriesByRegion(region) {
        return this.get(`region/${region}`)
    }

    // Notice that we have a resolver for `getCountriesBySubregion`
    // and a corresponding query, but no corresponding API call here!

    // Search by regional bloc:
    // EU, EFTA, CARICOM, PA, AU, USAN, EEU, AL, ASEAN, CAIS, CEFTA, NAFTA, SAARC
    async getCountriesByRegionalBloc(bloc) {
        return this.get(`regionalbloc/${bloc}`)
    }
}

module.exports = CountriesAPI