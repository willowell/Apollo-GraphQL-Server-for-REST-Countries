import { RESTDataSource } from 'apollo-datasource-rest'
import _ from 'lodash'
import { Maybe, Just, Nothing } from 'purify-ts/Maybe'
import { Country, Language, Translations, Bloc, Region, RegionalBloc, Currency } from './gen/graphql-types'

/**
 * Form of the JSON from the API;
 *
 * json = [{country1}, {country2}], etc.
 */
export type CountryJSON = Array<Country>

export default class CountriesAPI extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'https://restcountries.eu/rest/v2'
  }

  countryReducer(incoming: Country): Country {
    return {
      name: incoming.name,
      topLevelDomain: incoming.topLevelDomain,
      alpha2code: incoming.alpha2code,
      alpha3code: incoming.alpha3code,
      callingCodes: incoming.callingCodes,
      capital: incoming.capital,
      altSpellings: incoming.altSpellings,
      region: incoming.region,
      subregion: incoming.subregion,
      population: incoming.population,
      latlng: incoming.latlng,
      demonym: incoming.demonym,
      area: incoming.area,
      gini: incoming.gini,
      timezones: incoming.timezones,
      borders: incoming.borders,
      nativeName: incoming.nativeName,
      numericCode: incoming.numericCode,
      currencies: incoming.currencies,
      languages: incoming.languages,
      translations: incoming.translations,
      flag: incoming.flag,
      regionalBlocs: incoming.regionalBlocs,
      cioc: incoming.cioc
    }
  }

  currencyReducer(incoming: Currency): Currency {
    return {
      code: incoming.code,
      name: incoming.name,
      symbol: incoming.symbol
    }
  }

  languageReducer(incoming: Language): Language {
    return {
      iso639_1: incoming.iso639_1,
      iso639_2: incoming.iso639_2,
      name: incoming.name,
      nativeName: incoming.nativeName
    }
  }

  translationsReducer(incoming: Translations): Translations {
    return {
      de: incoming.de,
      es: incoming.es,
      fr: incoming.fr,
      ja: incoming.ja,
      it: incoming.it,
      br: incoming.br,
      pt: incoming.pt
    }
  }

  blocReducer(incoming: Bloc): Bloc {
    return {
      acronym: incoming.acronym,
      name: incoming.name,
      otherAcronyms: incoming.otherAcronyms,
      otherNames: incoming.otherNames
    }
  }

  // Get all countries
  async getAllCountries (): Promise<CountryJSON> {
    const res: CountryJSON = await this.get('/all')
    return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : []
  }

  // Search by country name. It can be the native name or partial name
  async getCountryByName (name: string): Promise<CountryJSON> {
    const res: CountryJSON = await this.get(`/name/${name}`)
    return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : []
  }

  // Search by country full name
  async getCountryByFullName (name: string): Promise<CountryJSON> {
    const res: CountryJSON = await this.get(`name/${name}?fullText=true`)
    return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : []
  }

  // Search by ISO 3166-1 2-letter or 3-letter country code
  async getCountryByISOCode (code: string): Promise<CountryJSON> {
    const res = await this.get(`alpha/${code}`)
    return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : []
  }

  // Search by list of ISO 3166-1 2-letter or 3-letter country codes
  async getCountriesByISOCodes (codes: string[]): Promise<CountryJSON> {
    const res: CountryJSON = await this.get(`alpha?codes=${_.reduce(codes, (sum, n) => { return sum + n + ';' }, '')}`)
    return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : []
  }

  // Search by ISO 4217 currency code
  async getCountryByCurrency (currency: string): Promise<CountryJSON> {
    const res: CountryJSON = await this.get(`currency/${currency}`)
    return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : []
  }

  // Search by ISO 639-1 language code.
  async getCountriesByLanguage (language: string): Promise<CountryJSON> {
    const res: CountryJSON = await this.get(`lang/${language}`)
    return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : []
  }

  // Search by capital city
  async getCountryByCapitalCity (city: string): Promise<CountryJSON> {
    const res: CountryJSON = await this.get(`capital/${city}`)
    return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : []
  }

  // Search by calling code
  async getCountryByCallingCode (code: string): Promise<CountryJSON> {
    const res: CountryJSON = await this.get(`callingcode/${code}`)
    return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : []
  }

  // Search by region: Africa, Americas, Asia, Europe, Oceania
  async getCountriesByRegion (region: Region): Promise<CountryJSON> {
    const res: CountryJSON = await this.get(`region/${region}`)
    return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : []
  }

  // Notice that the Countries API does not explicitly support subregions as an endpoint.
  // However, using GraphQL with a filter on getAllCountries, I can add this query and use it
  // as if it were part of the Countries API.
  // `getAllCountries()` is appropriate here because I am not assuming I can narrow
  // the query down to a region. I could do this, but I would have to know which subregions
  // are in which regions. Or, I could ask the caller to provide the region and use the
  // `getCountriesByRegion` function above, but I will still have to filter on the subregion.
  async getCountriesBySubregion (subregion: string): Promise<CountryJSON> {
    const res: CountryJSON = await this.get('/all')
    return Array.isArray(res) ? _.filter(res, _.matchesProperty('subregion', subregion)): []
  }

  // Search by regional bloc:
  // EU, EFTA, CARICOM, PA, AU, USAN, EEU, AL, ASEAN, CAIS, CEFTA, NAFTA, SAARC
  async getCountriesByRegionalBloc (bloc: RegionalBloc): Promise<CountryJSON> {
    const res: CountryJSON = await this.get(`regionalbloc/${bloc}`)
    return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : []
  }
}
