/* tslint:disable */
/* eslint-disable */

declare module 'graphql' {
  export type IQueryFilter<T extends keyof IGlobal> = Pick<IGlobal, T>;
  export type IMutationFilter<T extends keyof IMutation> = Pick<IMutation, T>;

  export type IGraphQLResponseRoot = {
    data?: IGlobal | IMutation;
    errors?: Array<IGraphQLResponseError>;
  };

  interface IGraphQLResponseError {
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    [propName: string]: any;
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  export interface IGlobal {
    listStudios: Array<IStudio>;
    studioById: IStudio;
    listSeries: Array<ISerie>;
    serieById: ISerie;
    episodeById: IEpisode;
  }

  export interface IStudioFilterInput {
    and?: Array<IStudioFilterInput>;
    or?: Array<IStudioFilterInput>;
    name?: IStringOperationFilterInput;
    description?: IStringOperationFilterInput;
    series?: IListFilterInputTypeOfSerieFilterInput;
    id?: IComparableGuidOperationFilterInput;
    createdAt?: IComparableDateTimeOperationFilterInput;
    updatedAt?: IComparableDateTimeOperationFilterInput;
  }

  export interface IStringOperationFilterInput {
    and?: Array<IStringOperationFilterInput>;
    or?: Array<IStringOperationFilterInput>;
    eq?: string;
    neq?: string;
    contains?: string;
    ncontains?: string;
    in?: Array<string | null>;
    nin?: Array<string | null>;
    startsWith?: string;
    nstartsWith?: string;
    endsWith?: string;
    nendsWith?: string;
  }

  export interface IListFilterInputTypeOfSerieFilterInput {
    all?: ISerieFilterInput;
    none?: ISerieFilterInput;
    some?: ISerieFilterInput;
    any?: boolean;
  }

  export interface ISerieFilterInput {
    and?: Array<ISerieFilterInput>;
    or?: Array<ISerieFilterInput>;
    studioId?: IComparableGuidOperationFilterInput;
    studio?: IStudioFilterInput;
    languageId?: IComparableGuidOperationFilterInput;
    language?: ILanguageFilterInput;
    title?: IStringOperationFilterInput;
    productionYear?: IComparableInt32OperationFilterInput;
    image?: IStringOperationFilterInput;
    background?: IStringOperationFilterInput;
    review?: IStringOperationFilterInput;
    valoration?: IComparableInt32OperationFilterInput;
    status?: ISerieStatusOperationFilterInput;
    seasons?: IListFilterInputTypeOfSeasonFilterInput;
    id?: IComparableGuidOperationFilterInput;
    createdAt?: IComparableDateTimeOperationFilterInput;
    updatedAt?: IComparableDateTimeOperationFilterInput;
  }

  export interface IComparableGuidOperationFilterInput {
    eq?: IUUID;
    neq?: IUUID;
    in?: Array<IUUID>;
    nin?: Array<IUUID>;
    gt?: IUUID;
    ngt?: IUUID;
    gte?: IUUID;
    ngte?: IUUID;
    lt?: IUUID;
    nlt?: IUUID;
    lte?: IUUID;
    nlte?: IUUID;
  }

  export type IUUID = any;

  export interface ILanguageFilterInput {
    and?: Array<ILanguageFilterInput>;
    or?: Array<ILanguageFilterInput>;
    name?: IStringOperationFilterInput;
    code?: IStringOperationFilterInput;
    id?: IComparableGuidOperationFilterInput;
    createdAt?: IComparableDateTimeOperationFilterInput;
    updatedAt?: IComparableDateTimeOperationFilterInput;
  }

  export interface IComparableDateTimeOperationFilterInput {
    eq?: IDateTime;
    neq?: IDateTime;
    in?: Array<IDateTime>;
    nin?: Array<IDateTime>;
    gt?: IDateTime;
    ngt?: IDateTime;
    gte?: IDateTime;
    ngte?: IDateTime;
    lt?: IDateTime;
    nlt?: IDateTime;
    lte?: IDateTime;
    nlte?: IDateTime;
  }

  /**
   * The `DateTime` scalar represents an ISO-8601 compliant date time type.
   */
  export type IDateTime = any;

  export interface IComparableInt32OperationFilterInput {
    eq?: number;
    neq?: number;
    in?: Array<number>;
    nin?: Array<number>;
    gt?: number;
    ngt?: number;
    gte?: number;
    ngte?: number;
    lt?: number;
    nlt?: number;
    lte?: number;
    nlte?: number;
  }

  export interface ISerieStatusOperationFilterInput {
    eq?: ISerieStatus;
    neq?: ISerieStatus;
    in?: Array<ISerieStatus>;
    nin?: Array<ISerieStatus>;
  }

  export const enum ISerieStatus {
    DRAFT = 'DRAFT',
    PUBLISHED = 'PUBLISHED'
  }

  export interface IListFilterInputTypeOfSeasonFilterInput {
    all?: ISeasonFilterInput;
    none?: ISeasonFilterInput;
    some?: ISeasonFilterInput;
    any?: boolean;
  }

  export interface ISeasonFilterInput {
    and?: Array<ISeasonFilterInput>;
    or?: Array<ISeasonFilterInput>;
    title?: IStringOperationFilterInput;
    serieId?: IComparableGuidOperationFilterInput;
    serie?: ISerieFilterInput;
    position?: IComparableInt32OperationFilterInput;
    episodes?: IListFilterInputTypeOfEpisodeFilterInput;
    id?: IComparableGuidOperationFilterInput;
    createdAt?: IComparableDateTimeOperationFilterInput;
    updatedAt?: IComparableDateTimeOperationFilterInput;
  }

  export interface IListFilterInputTypeOfEpisodeFilterInput {
    all?: IEpisodeFilterInput;
    none?: IEpisodeFilterInput;
    some?: IEpisodeFilterInput;
    any?: boolean;
  }

  export interface IEpisodeFilterInput {
    and?: Array<IEpisodeFilterInput>;
    or?: Array<IEpisodeFilterInput>;
    seasonId?: IComparableGuidOperationFilterInput;
    season?: ISeasonFilterInput;
    title?: IStringOperationFilterInput;
    numberEpisode?: IComparableInt32OperationFilterInput;
    summary?: IStringOperationFilterInput;
    image?: IStringOperationFilterInput;
    valoration?: IComparableInt32OperationFilterInput;
    video?: IStringOperationFilterInput;
    position?: IComparableInt32OperationFilterInput;
    id?: IComparableGuidOperationFilterInput;
    createdAt?: IComparableDateTimeOperationFilterInput;
    updatedAt?: IComparableDateTimeOperationFilterInput;
  }

  export interface IStudio {
    name: string;
    description?: string;
    series?: Array<ISerie>;
    id: IUUID;
    createdAt: IDateTime;
    updatedAt: IDateTime;
  }

  export interface ISerie {
    studioId: IUUID;
    studio: IStudio;
    languageId: IUUID;
    language?: ILanguage;
    title: string;
    productionYear: number;
    image?: string;
    background?: string;
    review?: string;
    valoration: number;
    status: ISerieStatus;
    seasons?: Array<ISeason>;
    id: IUUID;
    createdAt: IDateTime;
    updatedAt: IDateTime;
  }

  export interface ILanguage {
    name: string;
    code?: string;
    id: IUUID;
    createdAt: IDateTime;
    updatedAt: IDateTime;
  }

  export interface ISeason {
    title: string;
    serieId: IUUID;
    serie: ISerie;
    position: number;
    episodes?: Array<IEpisode>;
    id: IUUID;
    createdAt: IDateTime;
    updatedAt: IDateTime;
  }

  export interface IEpisode {
    seasonId: IUUID;
    season?: ISeason;
    title: string;
    numberEpisode: number;
    summary?: string;
    image?: string;
    valoration: number;
    video?: string;
    position: number;
    id: IUUID;
    createdAt: IDateTime;
    updatedAt: IDateTime;
  }

  /*********************************
   *                               *
   *         TYPE RESOLVERS        *
   *                               *
   *********************************/
  /**
   * This interface define the shape of your resolver
   * Note that this type is designed to be compatible with graphql-tools resolvers
   * However, you can still use other generated interfaces to make your resolver type-safed
   */
  export interface IResolver {
    Global?: IGlobalTypeResolver;
    UUID?: GraphQLScalarType;
    DateTime?: GraphQLScalarType;
    Studio?: IStudioTypeResolver;
    Serie?: ISerieTypeResolver;
    Language?: ILanguageTypeResolver;
    Season?: ISeasonTypeResolver;
    Episode?: IEpisodeTypeResolver;
  }
  export interface IGlobalTypeResolver<TParent = any> {
    listStudios?: GlobalToListStudiosResolver<TParent>;
    studioById?: GlobalToStudioByIdResolver<TParent>;
    listSeries?: GlobalToListSeriesResolver<TParent>;
    serieById?: GlobalToSerieByIdResolver<TParent>;
    episodeById?: GlobalToEpisodeByIdResolver<TParent>;
  }

  export interface GlobalToListStudiosArgs {
    filter?: IStudioFilterInput;
  }
  export interface GlobalToListStudiosResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: GlobalToListStudiosArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface GlobalToStudioByIdArgs {
    studioId: IUUID;
  }
  export interface GlobalToStudioByIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: GlobalToStudioByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface GlobalToListSeriesArgs {
    filter?: ISerieFilterInput;
  }
  export interface GlobalToListSeriesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: GlobalToListSeriesArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface GlobalToSerieByIdArgs {
    serieId: IUUID;
  }
  export interface GlobalToSerieByIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: GlobalToSerieByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface GlobalToEpisodeByIdArgs {
    episodeId: IUUID;
  }
  export interface GlobalToEpisodeByIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: GlobalToEpisodeByIdArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IStudioTypeResolver<TParent = any> {
    name?: StudioToNameResolver<TParent>;
    description?: StudioToDescriptionResolver<TParent>;
    series?: StudioToSeriesResolver<TParent>;
    id?: StudioToIdResolver<TParent>;
    createdAt?: StudioToCreatedAtResolver<TParent>;
    updatedAt?: StudioToUpdatedAtResolver<TParent>;
  }

  export interface StudioToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StudioToDescriptionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StudioToSeriesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StudioToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StudioToCreatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface StudioToUpdatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ISerieTypeResolver<TParent = any> {
    studioId?: SerieToStudioIdResolver<TParent>;
    studio?: SerieToStudioResolver<TParent>;
    languageId?: SerieToLanguageIdResolver<TParent>;
    language?: SerieToLanguageResolver<TParent>;
    title?: SerieToTitleResolver<TParent>;
    productionYear?: SerieToProductionYearResolver<TParent>;
    image?: SerieToImageResolver<TParent>;
    background?: SerieToBackgroundResolver<TParent>;
    review?: SerieToReviewResolver<TParent>;
    valoration?: SerieToValorationResolver<TParent>;
    status?: SerieToStatusResolver<TParent>;
    seasons?: SerieToSeasonsResolver<TParent>;
    id?: SerieToIdResolver<TParent>;
    createdAt?: SerieToCreatedAtResolver<TParent>;
    updatedAt?: SerieToUpdatedAtResolver<TParent>;
  }

  export interface SerieToStudioIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SerieToStudioResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SerieToLanguageIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SerieToLanguageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SerieToTitleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SerieToProductionYearResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SerieToImageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SerieToBackgroundResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SerieToReviewResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SerieToValorationResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SerieToStatusResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SerieToSeasonsResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SerieToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SerieToCreatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SerieToUpdatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ILanguageTypeResolver<TParent = any> {
    name?: LanguageToNameResolver<TParent>;
    code?: LanguageToCodeResolver<TParent>;
    id?: LanguageToIdResolver<TParent>;
    createdAt?: LanguageToCreatedAtResolver<TParent>;
    updatedAt?: LanguageToUpdatedAtResolver<TParent>;
  }

  export interface LanguageToNameResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LanguageToCodeResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LanguageToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LanguageToCreatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface LanguageToUpdatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface ISeasonTypeResolver<TParent = any> {
    title?: SeasonToTitleResolver<TParent>;
    serieId?: SeasonToSerieIdResolver<TParent>;
    serie?: SeasonToSerieResolver<TParent>;
    position?: SeasonToPositionResolver<TParent>;
    episodes?: SeasonToEpisodesResolver<TParent>;
    id?: SeasonToIdResolver<TParent>;
    createdAt?: SeasonToCreatedAtResolver<TParent>;
    updatedAt?: SeasonToUpdatedAtResolver<TParent>;
  }

  export interface SeasonToTitleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SeasonToSerieIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SeasonToSerieResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SeasonToPositionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SeasonToEpisodesResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SeasonToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SeasonToCreatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface SeasonToUpdatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface IEpisodeTypeResolver<TParent = any> {
    seasonId?: EpisodeToSeasonIdResolver<TParent>;
    season?: EpisodeToSeasonResolver<TParent>;
    title?: EpisodeToTitleResolver<TParent>;
    numberEpisode?: EpisodeToNumberEpisodeResolver<TParent>;
    summary?: EpisodeToSummaryResolver<TParent>;
    image?: EpisodeToImageResolver<TParent>;
    valoration?: EpisodeToValorationResolver<TParent>;
    video?: EpisodeToVideoResolver<TParent>;
    position?: EpisodeToPositionResolver<TParent>;
    id?: EpisodeToIdResolver<TParent>;
    createdAt?: EpisodeToCreatedAtResolver<TParent>;
    updatedAt?: EpisodeToUpdatedAtResolver<TParent>;
  }

  export interface EpisodeToSeasonIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EpisodeToSeasonResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EpisodeToTitleResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EpisodeToNumberEpisodeResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EpisodeToSummaryResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EpisodeToImageResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EpisodeToValorationResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EpisodeToVideoResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EpisodeToPositionResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EpisodeToIdResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EpisodeToCreatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }

  export interface EpisodeToUpdatedAtResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: {},
      context: any,
      info: GraphQLResolveInfo
    ): TResult;
  }
}
