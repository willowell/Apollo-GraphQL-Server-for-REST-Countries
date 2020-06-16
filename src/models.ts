export type CountriesData = {
    data?: Country[]
}

export type Country = {
    name?: string
    topLevelDomain?: string[]
    alpha2code?: string
    alpha3code?: string
    callingCodes?: string[]
    capital?: string
    altSpellings?: string[]
    region?: string
    subregion?: string
    population?: number
    latlng?: number[]
    demonym?: string
    area?: number
    gini?: number
    timezones?: string[]
    borders?: string[]
    nativeName?: string
    numericCode?: string
    currencies?: Currency[]
    languages?: Language[]
    translations?: Translations
    flag?: string
    regionalBlocs?: Bloc[]
    cioc?: string
}

export type Currency = {
    code?: string
    name?: string
    symbol?: string
}

export type Language = {
    iso639_1?: string
    iso639_2?: string
    name?: string
    nativeName?: string
}

export type Translations = {
    de?: string
    es?: string
    fr?: string
    ja?: string
    it?: string
    br?: string
    pt?: string
}

export type Bloc = {
    acronym?: string
    name?: string
    otherAcronyms?: string[]
    otherNames?: string[]
}

export enum Region {
    AFRICA,
    AMERICAS,
    ASIA,
    EUROPE,
    OCEANIA,   
}

export enum RegionalBloc {
    EU,
    EFTA,
    CARICOM,
    PA,
    AU,
    USAN,
    EEU,
    AL,
    ASEAN,
    CAIS,
    CEFTA,
    NAFTA,
    SAARC
}