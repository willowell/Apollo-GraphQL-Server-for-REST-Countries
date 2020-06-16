import { RESTDataSource } from 'apollo-datasource-rest'
import _ from 'lodash'
import { Maybe, Country, Region, RegionalBloc } from './gen/graphql-types'

/**
 * Form of the JSON from the API;
 *
 * json = [{country1}, {country2}], etc.
 */
type CountryJSON = Array<Maybe<Country>>

export default class CountriesAPI extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'https://restcountries.eu/rest/v2'
  }

  // Get all countries
  async getAllCountries (): Promise<CountryJSON> {
    return await this.get('/all')
  }

  // Search by country name. It can be the native name or partial name
  async getCountryByName (name: string): Promise<CountryJSON> {
    return await this.get(`/name/${name}`)
  }

  // Search by country full name
  async getCountryByFullName (name: string): Promise<CountryJSON> {
    return await this.get(`name/${name}?fullText=true`)
  }

  // Search by ISO 3166-1 2-letter or 3-letter country code
  async getCountryByISOCode (code: string): Promise<CountryJSON> {
    return await this.get(`alpha/${code}`)
  }

  // Search by list of ISO 3166-1 2-letter or 3-letter country codes
  async getCountriesByISOCodes (codes: string[]): Promise<CountryJSON> {
    return await this.get(`alpha?codes=${_.reduce(codes, (sum, n) => { return sum + n + ';' }, '')}`)
  }

  // Search by ISO 4217 currency code
  async getCountryByCurrency (currency: string): Promise<CountryJSON> {
    return await this.get(`currency/${currency}`)
  }

  // Search by ISO 639-1 language code.
  async getCountriesByLanguage (language: string): Promise<CountryJSON> {
    return await this.get(`lang/${language}`)
  }

  // Search by capital city
  async getCountryByCapitalCity (city: string): Promise<CountryJSON> {
    return await this.get(`capital/${city}`)
  }

  // Search by calling code
  async getCountryByCallingCode (code: string): Promise<CountryJSON> {
    return await this.get(`callingcode/${code}`)
  }

  // Search by region: Africa, Americas, Asia, Europe, Oceania
  async getCountriesByRegion (region: Region): Promise<CountryJSON> {
    return await this.get(`region/${region}`)
  }

  // Notice that we have a resolver for `getCountriesBySubregion`
  // and a corresponding query, but no corresponding API call here!

  // Search by regional bloc:
  // EU, EFTA, CARICOM, PA, AU, USAN, EEU, AL, ASEAN, CAIS, CEFTA, NAFTA, SAARC
  async getCountriesByRegionalBloc (bloc: RegionalBloc): Promise<CountryJSON> {
    return await this.get(`regionalbloc/${bloc}`)
  }
}
