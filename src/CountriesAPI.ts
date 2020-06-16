import { RESTDataSource } from 'apollo-datasource-rest'
import _ from 'lodash'
import { Country, Language, Translations, Bloc, Region, RegionalBloc, Currency } from './gen/graphql-types'

/**
 * Form of the JSON from the API;
 *
 * json = [{country1}, {country2}], etc.
 */
type CountryJSON = Array<Country>

export default class CountriesAPI extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'https://restcountries.eu/rest/v2'
  }

  countryReducer(incoming: Country): Country {
    return {
      name: incoming.name || null,
      topLevelDomain: incoming.topLevelDomain || null,
      alpha2code: incoming.alpha2code || null,
      alpha3code: incoming.alpha3code || null,
      callingCodes: incoming.callingCodes || null,
      capital: incoming.capital || null,
      altSpellings: incoming.altSpellings || null,
      region: incoming.region || null,
      subregion: incoming.subregion || null,
      population: incoming.population || 0,
      latlng: incoming.latlng || [0, 0],
      demonym: incoming.demonym || null,
      area: incoming.area || 0,
      gini: incoming.gini || null,
      timezones: incoming.timezones || null,
      borders: incoming.borders || null,
      nativeName: incoming.nativeName || null,
      numericCode: incoming.numericCode || null,
      currencies: incoming.currencies || null,
      languages: incoming.languages || null,
      translations: incoming.translations || null,
      flag: incoming.flag || null,
      regionalBlocs: incoming.regionalBlocs || null,
      cioc: incoming.cioc || null
    }
  }

  currencyReducer(incoming: Currency): Currency {
    return {
      code: incoming.code || null,
      name: incoming.name || null,
      symbol: incoming.symbol || null
    }
  }

  languageReducer(incoming: Language): Language {
    return {
      iso639_1: incoming.iso639_1 || null,
      iso639_2: incoming.iso639_2 || null,
      name: incoming.name || null,
      nativeName: incoming.nativeName || null
    }
  }

  translationsReducer(incoming: Translations): Translations {
    return {
      de: incoming.de || null,
      es: incoming.es || null,
      fr: incoming.fr || null,
      ja: incoming.ja || null,
      it: incoming.it || null,
      br: incoming.br || null,
      pt: incoming.pt || null
    }
  }

  blocReducer(incoming: Bloc): Bloc {
    return {
      acronym: incoming.acronym || null,
      name: incoming.name || null,
      otherAcronyms: incoming.otherAcronyms || null,
      otherNames: incoming.otherNames || null
    }
  }

  // Get all countries
  async getAllCountries (): Promise<CountryJSON> {
    const res: CountryJSON = await this.get('/all')
    return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : [];
  }

  // Search by country name. It can be the native name or partial name
  async getCountryByName (name: string): Promise<CountryJSON> {
    const res: CountryJSON = await this.get(`/name/${name}`)
    return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : [];
  }

  // Search by country full name
  async getCountryByFullName (name: string): Promise<CountryJSON> {
    const res: CountryJSON = await this.get(`name/${name}?fullText=true`)
    return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : [];
  }

  // Search by ISO 3166-1 2-letter or 3-letter country code
  async getCountryByISOCode (code: string): Promise<CountryJSON> {
    const res = await this.get(`alpha/${code}`)
    return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : [];
  }

  // Search by list of ISO 3166-1 2-letter or 3-letter country codes
  async getCountriesByISOCodes (codes: string[]): Promise<CountryJSON> {
    const res: CountryJSON = await this.get(`alpha?codes=${_.reduce(codes, (sum, n) => { return sum + n + ';' }, '')}`)
    return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : [];
  }

  // Search by ISO 4217 currency code
  async getCountryByCurrency (currency: string): Promise<CountryJSON> {
    const res: CountryJSON = await this.get(`currency/${currency}`)
    return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : [];
  }

  // Search by ISO 639-1 language code.
  async getCountriesByLanguage (language: string): Promise<CountryJSON> {
    const res: CountryJSON = await this.get(`lang/${language}`)
    return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : [];
  }

  // Search by capital city
  async getCountryByCapitalCity (city: string): Promise<CountryJSON> {
    const res: CountryJSON = await this.get(`capital/${city}`)
    return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : [];
  }

  // Search by calling code
  async getCountryByCallingCode (code: string): Promise<CountryJSON> {
    const res: CountryJSON = await this.get(`callingcode/${code}`)
    return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : [];
  }

  // Search by region: Africa, Americas, Asia, Europe, Oceania
  async getCountriesByRegion (region: Region): Promise<CountryJSON> {
    const res: CountryJSON = await this.get(`region/${region}`)
    return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : [];
  }

  // Notice that we have a resolver for `getCountriesBySubregion`
  // and a corresponding query, but no corresponding API call here!

  // Search by regional bloc:
  // EU, EFTA, CARICOM, PA, AU, USAN, EEU, AL, ASEAN, CAIS, CEFTA, NAFTA, SAARC
  async getCountriesByRegionalBloc (bloc: RegionalBloc): Promise<CountryJSON> {
    const res: CountryJSON = await this.get(`regionalbloc/${bloc}`)
    return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : [];
  }
}
