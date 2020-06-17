import { GraphQLResolveInfo } from 'graphql';
import { Maybe } from 'purify-ts/Maybe';
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Country = {
  __typename?: 'Country';
  name: Maybe<Scalars['String']>;
  topLevelDomain: Maybe<Array<Maybe<Scalars['String']>>>;
  alpha2code: Maybe<Scalars['String']>;
  alpha3code: Maybe<Scalars['String']>;
  callingCodes: Maybe<Array<Maybe<Scalars['String']>>>;
  capital: Maybe<Scalars['String']>;
  altSpellings: Maybe<Array<Maybe<Scalars['String']>>>;
  region: Maybe<Scalars['String']>;
  subregion: Maybe<Scalars['String']>;
  population: Maybe<Scalars['Int']>;
  latlng: Maybe<Array<Maybe<Scalars['Float']>>>;
  demonym: Maybe<Scalars['String']>;
  area: Maybe<Scalars['Float']>;
  gini: Maybe<Scalars['Float']>;
  timezones: Maybe<Array<Maybe<Scalars['String']>>>;
  borders: Maybe<Array<Maybe<Scalars['String']>>>;
  nativeName: Maybe<Scalars['String']>;
  numericCode: Maybe<Scalars['String']>;
  currencies: Maybe<Array<Maybe<Currency>>>;
  languages: Maybe<Array<Maybe<Language>>>;
  translations: Maybe<Translations>;
  flag: Maybe<Scalars['String']>;
  regionalBlocs: Maybe<Array<Maybe<Bloc>>>;
  cioc: Maybe<Scalars['String']>;
};

export type Currency = {
  __typename?: 'Currency';
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  symbol: Maybe<Scalars['String']>;
};

export type Language = {
  __typename?: 'Language';
  iso639_1: Maybe<Scalars['String']>;
  iso639_2: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  nativeName: Maybe<Scalars['String']>;
};

export type Translations = {
  __typename?: 'Translations';
  de: Maybe<Scalars['String']>;
  es: Maybe<Scalars['String']>;
  fr: Maybe<Scalars['String']>;
  ja: Maybe<Scalars['String']>;
  it: Maybe<Scalars['String']>;
  br: Maybe<Scalars['String']>;
  pt: Maybe<Scalars['String']>;
};

export type Bloc = {
  __typename?: 'Bloc';
  acronym: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  otherAcronyms: Maybe<Array<Maybe<Scalars['String']>>>;
  otherNames: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum Region {
  Africa = 'AFRICA',
  Americas = 'AMERICAS',
  Asia = 'ASIA',
  Europe = 'EUROPE',
  Oceania = 'OCEANIA'
}

export enum RegionalBloc {
  Eu = 'EU',
  Efta = 'EFTA',
  Caricom = 'CARICOM',
  Pa = 'PA',
  Au = 'AU',
  Usan = 'USAN',
  Eeu = 'EEU',
  Al = 'AL',
  Asean = 'ASEAN',
  Cais = 'CAIS',
  Cefta = 'CEFTA',
  Nafta = 'NAFTA',
  Saarc = 'SAARC'
}

export type Query = {
  __typename?: 'Query';
  allCountries: Array<Country>;
  countryByName: Maybe<Array<Maybe<Country>>>;
  countryByFullName: Country;
  countryByISOCode: Country;
  countriesByISOCodes: Maybe<Array<Maybe<Country>>>;
  countryByCurrency: Country;
  countriesByLanguage: Maybe<Array<Maybe<Country>>>;
  countryByCapitalCity: Country;
  countryByCallingCode: Country;
  countriesByRegion: Maybe<Array<Maybe<Country>>>;
  countriesBySubregion: Maybe<Array<Maybe<Country>>>;
  countriesByRegionalBloc: Maybe<Array<Maybe<Country>>>;
};


export type QueryCountryByNameArgs = {
  name: Scalars['String'];
};


export type QueryCountryByFullNameArgs = {
  name: Scalars['String'];
};


export type QueryCountryByIsoCodeArgs = {
  code: Scalars['String'];
};


export type QueryCountriesByIsoCodesArgs = {
  codes: Maybe<Array<Scalars['String']>>;
};


export type QueryCountryByCurrencyArgs = {
  currency: Scalars['String'];
};


export type QueryCountriesByLanguageArgs = {
  language: Scalars['String'];
};


export type QueryCountryByCapitalCityArgs = {
  city: Scalars['String'];
};


export type QueryCountryByCallingCodeArgs = {
  code: Scalars['String'];
};


export type QueryCountriesByRegionArgs = {
  region: Region;
};


export type QueryCountriesBySubregionArgs = {
  subregion: Scalars['String'];
};


export type QueryCountriesByRegionalBlocArgs = {
  bloc: RegionalBloc;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Country: ResolverTypeWrapper<Country>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Currency: ResolverTypeWrapper<Currency>;
  Language: ResolverTypeWrapper<Language>;
  Translations: ResolverTypeWrapper<Translations>;
  Bloc: ResolverTypeWrapper<Bloc>;
  Region: Region;
  RegionalBloc: RegionalBloc;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Country: Country;
  String: Scalars['String'];
  Int: Scalars['Int'];
  Float: Scalars['Float'];
  Currency: Currency;
  Language: Language;
  Translations: Translations;
  Bloc: Bloc;
  Query: {};
  Boolean: Scalars['Boolean'];
};

export type CountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = {
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  topLevelDomain: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  alpha2code: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  alpha3code: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  callingCodes: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  capital: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  altSpellings: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  region: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subregion: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  population: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latlng: Resolver<Maybe<Array<Maybe<ResolversTypes['Float']>>>, ParentType, ContextType>;
  demonym: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  area: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  gini: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  timezones: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  borders: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  nativeName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numericCode: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currencies: Resolver<Maybe<Array<Maybe<ResolversTypes['Currency']>>>, ParentType, ContextType>;
  languages: Resolver<Maybe<Array<Maybe<ResolversTypes['Language']>>>, ParentType, ContextType>;
  translations: Resolver<Maybe<ResolversTypes['Translations']>, ParentType, ContextType>;
  flag: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regionalBlocs: Resolver<Maybe<Array<Maybe<ResolversTypes['Bloc']>>>, ParentType, ContextType>;
  cioc: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CurrencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']> = {
  code: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type LanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = {
  iso639_1: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iso639_2: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nativeName: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type TranslationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Translations'] = ResolversParentTypes['Translations']> = {
  de: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  es: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fr: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ja: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  it: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  br: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pt: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type BlocResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bloc'] = ResolversParentTypes['Bloc']> = {
  acronym: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  otherAcronyms: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  otherNames: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allCountries: Resolver<Array<ResolversTypes['Country']>, ParentType, ContextType>;
  countryByName: Resolver<Maybe<Array<Maybe<ResolversTypes['Country']>>>, ParentType, ContextType, RequireFields<QueryCountryByNameArgs, 'name'>>;
  countryByFullName: Resolver<ResolversTypes['Country'], ParentType, ContextType, RequireFields<QueryCountryByFullNameArgs, 'name'>>;
  countryByISOCode: Resolver<ResolversTypes['Country'], ParentType, ContextType, RequireFields<QueryCountryByIsoCodeArgs, 'code'>>;
  countriesByISOCodes: Resolver<Maybe<Array<Maybe<ResolversTypes['Country']>>>, ParentType, ContextType, RequireFields<QueryCountriesByIsoCodesArgs, never>>;
  countryByCurrency: Resolver<ResolversTypes['Country'], ParentType, ContextType, RequireFields<QueryCountryByCurrencyArgs, 'currency'>>;
  countriesByLanguage: Resolver<Maybe<Array<Maybe<ResolversTypes['Country']>>>, ParentType, ContextType, RequireFields<QueryCountriesByLanguageArgs, 'language'>>;
  countryByCapitalCity: Resolver<ResolversTypes['Country'], ParentType, ContextType, RequireFields<QueryCountryByCapitalCityArgs, 'city'>>;
  countryByCallingCode: Resolver<ResolversTypes['Country'], ParentType, ContextType, RequireFields<QueryCountryByCallingCodeArgs, 'code'>>;
  countriesByRegion: Resolver<Maybe<Array<Maybe<ResolversTypes['Country']>>>, ParentType, ContextType, RequireFields<QueryCountriesByRegionArgs, 'region'>>;
  countriesBySubregion: Resolver<Maybe<Array<Maybe<ResolversTypes['Country']>>>, ParentType, ContextType, RequireFields<QueryCountriesBySubregionArgs, 'subregion'>>;
  countriesByRegionalBloc: Resolver<Maybe<Array<Maybe<ResolversTypes['Country']>>>, ParentType, ContextType, RequireFields<QueryCountriesByRegionalBlocArgs, 'bloc'>>;
};

export type Resolvers<ContextType = any> = {
  Country: CountryResolvers<ContextType>;
  Currency: CurrencyResolvers<ContextType>;
  Language: LanguageResolvers<ContextType>;
  Translations: TranslationsResolvers<ContextType>;
  Bloc: BlocResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
