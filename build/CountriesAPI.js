"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
const lodash_1 = __importDefault(require("lodash"));
class CountriesAPI extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://restcountries.eu/rest/v2';
    }
    countryReducer(incoming) {
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
        };
    }
    currencyReducer(incoming) {
        return {
            code: incoming.code || null,
            name: incoming.name || null,
            symbol: incoming.symbol || null
        };
    }
    languageReducer(incoming) {
        return {
            iso639_1: incoming.iso639_1 || null,
            iso639_2: incoming.iso639_2 || null,
            name: incoming.name || null,
            nativeName: incoming.nativeName || null
        };
    }
    translationsReducer(incoming) {
        return {
            de: incoming.de || null,
            es: incoming.es || null,
            fr: incoming.fr || null,
            ja: incoming.ja || null,
            it: incoming.it || null,
            br: incoming.br || null,
            pt: incoming.pt || null
        };
    }
    blocReducer(incoming) {
        return {
            acronym: incoming.acronym || null,
            name: incoming.name || null,
            otherAcronyms: incoming.otherAcronyms || null,
            otherNames: incoming.otherNames || null
        };
    }
    // Get all countries
    async getAllCountries() {
        const res = await this.get('/all');
        return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : [];
    }
    // Search by country name. It can be the native name or partial name
    async getCountryByName(name) {
        const res = await this.get(`/name/${name}`);
        return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : [];
    }
    // Search by country full name
    async getCountryByFullName(name) {
        const res = await this.get(`name/${name}?fullText=true`);
        return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : [];
    }
    // Search by ISO 3166-1 2-letter or 3-letter country code
    async getCountryByISOCode(code) {
        const res = await this.get(`alpha/${code}`);
        return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : [];
    }
    // Search by list of ISO 3166-1 2-letter or 3-letter country codes
    async getCountriesByISOCodes(codes) {
        const res = await this.get(`alpha?codes=${lodash_1.default.reduce(codes, (sum, n) => { return sum + n + ';'; }, '')}`);
        return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : [];
    }
    // Search by ISO 4217 currency code
    async getCountryByCurrency(currency) {
        const res = await this.get(`currency/${currency}`);
        return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : [];
    }
    // Search by ISO 639-1 language code.
    async getCountriesByLanguage(language) {
        const res = await this.get(`lang/${language}`);
        return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : [];
    }
    // Search by capital city
    async getCountryByCapitalCity(city) {
        const res = await this.get(`capital/${city}`);
        return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : [];
    }
    // Search by calling code
    async getCountryByCallingCode(code) {
        const res = await this.get(`callingcode/${code}`);
        return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : [];
    }
    // Search by region: Africa, Americas, Asia, Europe, Oceania
    async getCountriesByRegion(region) {
        const res = await this.get(`region/${region}`);
        return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : [];
    }
    // Notice that we have a resolver for `getCountriesBySubregion`
    // and a corresponding query, but no corresponding API call here!
    // Never mind, I decided to add one anyway ;-)
    async getCountriesBySubregion(subregion) {
        const res = await this.get('/all');
        return Array.isArray(res) ? lodash_1.default.filter(res, lodash_1.default.matchesProperty('subregion', subregion)) : [];
    }
    // Search by regional bloc:
    // EU, EFTA, CARICOM, PA, AU, USAN, EEU, AL, ASEAN, CAIS, CEFTA, NAFTA, SAARC
    async getCountriesByRegionalBloc(bloc) {
        const res = await this.get(`regionalbloc/${bloc}`);
        return Array.isArray(res) ? res.map(country => this.countryReducer(country)) : [];
    }
}
exports.default = CountriesAPI;
