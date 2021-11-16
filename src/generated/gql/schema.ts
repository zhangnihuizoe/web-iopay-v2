import { Observable } from 'graphql-typed-client'

export interface query_root {
  /** fetch data from the table: "Candidate" */
  Candidate: Candidate[]
  /** fetch aggregated fields from the table: "Candidate" */
  Candidate_aggregate: Candidate_aggregate
  /** fetch data from the table: "Candidate" using primary key columns */
  Candidate_by_pk: Candidate | null
  /** fetch data from the table: "KV" */
  KV: KV[]
  /** fetch aggregated fields from the table: "KV" */
  KV_aggregate: KV_aggregate
  /** fetch data from the table: "KV" using primary key columns */
  KV_by_pk: KV | null
  /** fetch data from the table: "RewardRecord" */
  RewardRecord: RewardRecord[]
  /** fetch aggregated fields from the table: "RewardRecord" */
  RewardRecord_aggregate: RewardRecord_aggregate
  /** fetch data from the table: "RewardRecord" using primary key columns */
  RewardRecord_by_pk: RewardRecord | null
  __typename: 'query_root'
}

/** select columns of table "Candidate" */
export enum Candidate_select_column {
  /** column name */
  banner_url = 'banner_url',
  /** column name */
  blurb = 'blurb',
  /** column name */
  community_plan = 'community_plan',
  /** column name */
  created_at = 'created_at',
  /** column name */
  discord_name = 'discord_name',
  /** column name */
  email = 'email',
  /** column name */
  id = 'id',
  /** column name */
  introduction = 'introduction',
  /** column name */
  location = 'location',
  /** column name */
  logo = 'logo',
  /** column name */
  name = 'name',
  /** column name */
  reward_plan = 'reward_plan',
  /** column name */
  server_endpoint = 'server_endpoint',
  /** column name */
  server_health_endpoint = 'server_health_endpoint',
  /** column name */
  share_card_image = 'share_card_image',
  /** column name */
  social_media = 'social_media',
  /** column name */
  team = 'team',
  /** column name */
  tech_setup = 'tech_setup',
  /** column name */
  temp_eth_address = 'temp_eth_address',
  /** column name */
  updated_at = 'updated_at',
  /** column name */
  website = 'website',
}

/** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
export type Int = number

/** column ordering options */
export enum order_by {
  /** in ascending order, nulls last */
  asc = 'asc',
  /** in ascending order, nulls first */
  asc_nulls_first = 'asc_nulls_first',
  /** in ascending order, nulls last */
  asc_nulls_last = 'asc_nulls_last',
  /** in descending order, nulls first */
  desc = 'desc',
  /** in descending order, nulls first */
  desc_nulls_first = 'desc_nulls_first',
  /** in descending order, nulls last */
  desc_nulls_last = 'desc_nulls_last',
}

/** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
export type String = string

/** The `Boolean` scalar type represents `true` or `false`. */
export type Boolean = boolean

export type timestamp = any

export type _text = any

/** columns and relationships of "Candidate" */
export interface Candidate {
  banner_url: String | null
  blurb: String | null
  community_plan: String | null
  created_at: timestamp
  discord_name: String | null
  email: String | null
  id: Int
  introduction: String | null
  location: String | null
  logo: String | null
  name: String | null
  reward_plan: String | null
  server_endpoint: String | null
  server_health_endpoint: String | null
  share_card_image: String | null
  social_media: _text | null
  team: String | null
  tech_setup: String | null
  temp_eth_address: String | null
  updated_at: timestamp
  website: String | null
  __typename: 'Candidate'
}

/** aggregated selection of "Candidate" */
export interface Candidate_aggregate {
  aggregate: Candidate_aggregate_fields | null
  nodes: Candidate[]
  __typename: 'Candidate_aggregate'
}

/** aggregate fields of "Candidate" */
export interface Candidate_aggregate_fields {
  avg: Candidate_avg_fields | null
  count: Int
  max: Candidate_max_fields | null
  min: Candidate_min_fields | null
  stddev: Candidate_stddev_fields | null
  stddev_pop: Candidate_stddev_pop_fields | null
  stddev_samp: Candidate_stddev_samp_fields | null
  sum: Candidate_sum_fields | null
  var_pop: Candidate_var_pop_fields | null
  var_samp: Candidate_var_samp_fields | null
  variance: Candidate_variance_fields | null
  __typename: 'Candidate_aggregate_fields'
}

/** aggregate avg on columns */
export interface Candidate_avg_fields {
  id: Float | null
  __typename: 'Candidate_avg_fields'
}

/** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
export type Float = number

/** aggregate max on columns */
export interface Candidate_max_fields {
  banner_url: String | null
  blurb: String | null
  community_plan: String | null
  created_at: timestamp | null
  discord_name: String | null
  email: String | null
  id: Int | null
  introduction: String | null
  location: String | null
  logo: String | null
  name: String | null
  reward_plan: String | null
  server_endpoint: String | null
  server_health_endpoint: String | null
  share_card_image: String | null
  team: String | null
  tech_setup: String | null
  temp_eth_address: String | null
  updated_at: timestamp | null
  website: String | null
  __typename: 'Candidate_max_fields'
}

/** aggregate min on columns */
export interface Candidate_min_fields {
  banner_url: String | null
  blurb: String | null
  community_plan: String | null
  created_at: timestamp | null
  discord_name: String | null
  email: String | null
  id: Int | null
  introduction: String | null
  location: String | null
  logo: String | null
  name: String | null
  reward_plan: String | null
  server_endpoint: String | null
  server_health_endpoint: String | null
  share_card_image: String | null
  team: String | null
  tech_setup: String | null
  temp_eth_address: String | null
  updated_at: timestamp | null
  website: String | null
  __typename: 'Candidate_min_fields'
}

/** aggregate stddev on columns */
export interface Candidate_stddev_fields {
  id: Float | null
  __typename: 'Candidate_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface Candidate_stddev_pop_fields {
  id: Float | null
  __typename: 'Candidate_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface Candidate_stddev_samp_fields {
  id: Float | null
  __typename: 'Candidate_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface Candidate_sum_fields {
  id: Int | null
  __typename: 'Candidate_sum_fields'
}

/** aggregate var_pop on columns */
export interface Candidate_var_pop_fields {
  id: Float | null
  __typename: 'Candidate_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface Candidate_var_samp_fields {
  id: Float | null
  __typename: 'Candidate_var_samp_fields'
}

/** aggregate variance on columns */
export interface Candidate_variance_fields {
  id: Float | null
  __typename: 'Candidate_variance_fields'
}

/** select columns of table "KV" */
export enum KV_select_column {
  /** column name */
  id = 'id',
  /** column name */
  key = 'key',
  /** column name */
  value = 'value',
}

/** columns and relationships of "KV" */
export interface KV {
  id: Int
  key: String
  value: String
  __typename: 'KV'
}

/** aggregated selection of "KV" */
export interface KV_aggregate {
  aggregate: KV_aggregate_fields | null
  nodes: KV[]
  __typename: 'KV_aggregate'
}

/** aggregate fields of "KV" */
export interface KV_aggregate_fields {
  avg: KV_avg_fields | null
  count: Int
  max: KV_max_fields | null
  min: KV_min_fields | null
  stddev: KV_stddev_fields | null
  stddev_pop: KV_stddev_pop_fields | null
  stddev_samp: KV_stddev_samp_fields | null
  sum: KV_sum_fields | null
  var_pop: KV_var_pop_fields | null
  var_samp: KV_var_samp_fields | null
  variance: KV_variance_fields | null
  __typename: 'KV_aggregate_fields'
}

/** aggregate avg on columns */
export interface KV_avg_fields {
  id: Float | null
  __typename: 'KV_avg_fields'
}

/** aggregate max on columns */
export interface KV_max_fields {
  id: Int | null
  key: String | null
  value: String | null
  __typename: 'KV_max_fields'
}

/** aggregate min on columns */
export interface KV_min_fields {
  id: Int | null
  key: String | null
  value: String | null
  __typename: 'KV_min_fields'
}

/** aggregate stddev on columns */
export interface KV_stddev_fields {
  id: Float | null
  __typename: 'KV_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface KV_stddev_pop_fields {
  id: Float | null
  __typename: 'KV_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface KV_stddev_samp_fields {
  id: Float | null
  __typename: 'KV_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface KV_sum_fields {
  id: Int | null
  __typename: 'KV_sum_fields'
}

/** aggregate var_pop on columns */
export interface KV_var_pop_fields {
  id: Float | null
  __typename: 'KV_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface KV_var_samp_fields {
  id: Float | null
  __typename: 'KV_var_samp_fields'
}

/** aggregate variance on columns */
export interface KV_variance_fields {
  id: Float | null
  __typename: 'KV_variance_fields'
}

/** select columns of table "RewardRecord" */
export enum RewardRecord_select_column {
  /** column name */
  address = 'address',
  /** column name */
  apy = 'apy',
  /** column name */
  burndrop_reward = 'burndrop_reward',
  /** column name */
  burndrop_reward_delta = 'burndrop_reward_delta',
  /** column name */
  date = 'date',
  /** column name */
  hermes_reward = 'hermes_reward',
  /** column name */
  hermes_reward_delta = 'hermes_reward_delta',
  /** column name */
  id = 'id',
  /** column name */
  staking = 'staking',
  /** column name */
  total_reward = 'total_reward',
  /** column name */
  total_reward_delta = 'total_reward_delta',
}

export type numeric = any

/** columns and relationships of "RewardRecord" */
export interface RewardRecord {
  address: String
  apy: numeric | null
  burndrop_reward: numeric | null
  burndrop_reward_delta: numeric | null
  date: timestamp
  hermes_reward: numeric | null
  hermes_reward_delta: numeric | null
  id: Int
  staking: numeric | null
  total_reward: numeric | null
  total_reward_delta: numeric | null
  __typename: 'RewardRecord'
}

/** aggregated selection of "RewardRecord" */
export interface RewardRecord_aggregate {
  aggregate: RewardRecord_aggregate_fields | null
  nodes: RewardRecord[]
  __typename: 'RewardRecord_aggregate'
}

/** aggregate fields of "RewardRecord" */
export interface RewardRecord_aggregate_fields {
  avg: RewardRecord_avg_fields | null
  count: Int
  max: RewardRecord_max_fields | null
  min: RewardRecord_min_fields | null
  stddev: RewardRecord_stddev_fields | null
  stddev_pop: RewardRecord_stddev_pop_fields | null
  stddev_samp: RewardRecord_stddev_samp_fields | null
  sum: RewardRecord_sum_fields | null
  var_pop: RewardRecord_var_pop_fields | null
  var_samp: RewardRecord_var_samp_fields | null
  variance: RewardRecord_variance_fields | null
  __typename: 'RewardRecord_aggregate_fields'
}

/** aggregate avg on columns */
export interface RewardRecord_avg_fields {
  apy: Float | null
  burndrop_reward: Float | null
  burndrop_reward_delta: Float | null
  hermes_reward: Float | null
  hermes_reward_delta: Float | null
  id: Float | null
  staking: Float | null
  total_reward: Float | null
  total_reward_delta: Float | null
  __typename: 'RewardRecord_avg_fields'
}

/** aggregate max on columns */
export interface RewardRecord_max_fields {
  address: String | null
  apy: numeric | null
  burndrop_reward: numeric | null
  burndrop_reward_delta: numeric | null
  date: timestamp | null
  hermes_reward: numeric | null
  hermes_reward_delta: numeric | null
  id: Int | null
  staking: numeric | null
  total_reward: numeric | null
  total_reward_delta: numeric | null
  __typename: 'RewardRecord_max_fields'
}

/** aggregate min on columns */
export interface RewardRecord_min_fields {
  address: String | null
  apy: numeric | null
  burndrop_reward: numeric | null
  burndrop_reward_delta: numeric | null
  date: timestamp | null
  hermes_reward: numeric | null
  hermes_reward_delta: numeric | null
  id: Int | null
  staking: numeric | null
  total_reward: numeric | null
  total_reward_delta: numeric | null
  __typename: 'RewardRecord_min_fields'
}

/** aggregate stddev on columns */
export interface RewardRecord_stddev_fields {
  apy: Float | null
  burndrop_reward: Float | null
  burndrop_reward_delta: Float | null
  hermes_reward: Float | null
  hermes_reward_delta: Float | null
  id: Float | null
  staking: Float | null
  total_reward: Float | null
  total_reward_delta: Float | null
  __typename: 'RewardRecord_stddev_fields'
}

/** aggregate stddev_pop on columns */
export interface RewardRecord_stddev_pop_fields {
  apy: Float | null
  burndrop_reward: Float | null
  burndrop_reward_delta: Float | null
  hermes_reward: Float | null
  hermes_reward_delta: Float | null
  id: Float | null
  staking: Float | null
  total_reward: Float | null
  total_reward_delta: Float | null
  __typename: 'RewardRecord_stddev_pop_fields'
}

/** aggregate stddev_samp on columns */
export interface RewardRecord_stddev_samp_fields {
  apy: Float | null
  burndrop_reward: Float | null
  burndrop_reward_delta: Float | null
  hermes_reward: Float | null
  hermes_reward_delta: Float | null
  id: Float | null
  staking: Float | null
  total_reward: Float | null
  total_reward_delta: Float | null
  __typename: 'RewardRecord_stddev_samp_fields'
}

/** aggregate sum on columns */
export interface RewardRecord_sum_fields {
  apy: numeric | null
  burndrop_reward: numeric | null
  burndrop_reward_delta: numeric | null
  hermes_reward: numeric | null
  hermes_reward_delta: numeric | null
  id: Int | null
  staking: numeric | null
  total_reward: numeric | null
  total_reward_delta: numeric | null
  __typename: 'RewardRecord_sum_fields'
}

/** aggregate var_pop on columns */
export interface RewardRecord_var_pop_fields {
  apy: Float | null
  burndrop_reward: Float | null
  burndrop_reward_delta: Float | null
  hermes_reward: Float | null
  hermes_reward_delta: Float | null
  id: Float | null
  staking: Float | null
  total_reward: Float | null
  total_reward_delta: Float | null
  __typename: 'RewardRecord_var_pop_fields'
}

/** aggregate var_samp on columns */
export interface RewardRecord_var_samp_fields {
  apy: Float | null
  burndrop_reward: Float | null
  burndrop_reward_delta: Float | null
  hermes_reward: Float | null
  hermes_reward_delta: Float | null
  id: Float | null
  staking: Float | null
  total_reward: Float | null
  total_reward_delta: Float | null
  __typename: 'RewardRecord_var_samp_fields'
}

/** aggregate variance on columns */
export interface RewardRecord_variance_fields {
  apy: Float | null
  burndrop_reward: Float | null
  burndrop_reward_delta: Float | null
  hermes_reward: Float | null
  hermes_reward_delta: Float | null
  id: Float | null
  staking: Float | null
  total_reward: Float | null
  total_reward_delta: Float | null
  __typename: 'RewardRecord_variance_fields'
}

export interface subscription_root {
  /** fetch data from the table: "Candidate" */
  Candidate: Candidate[]
  /** fetch aggregated fields from the table: "Candidate" */
  Candidate_aggregate: Candidate_aggregate
  /** fetch data from the table: "Candidate" using primary key columns */
  Candidate_by_pk: Candidate | null
  /** fetch data from the table: "KV" */
  KV: KV[]
  /** fetch aggregated fields from the table: "KV" */
  KV_aggregate: KV_aggregate
  /** fetch data from the table: "KV" using primary key columns */
  KV_by_pk: KV | null
  /** fetch data from the table: "RewardRecord" */
  RewardRecord: RewardRecord[]
  /** fetch aggregated fields from the table: "RewardRecord" */
  RewardRecord_aggregate: RewardRecord_aggregate
  /** fetch data from the table: "RewardRecord" using primary key columns */
  RewardRecord_by_pk: RewardRecord | null
  __typename: 'subscription_root'
}

export interface query_rootRequest {
  /** fetch data from the table: "Candidate" */
  Candidate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: Candidate_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: Candidate_order_by[] | null
          /** filter the rows returned */
          where?: Candidate_bool_exp | null
        },
        CandidateRequest,
      ]
    | CandidateRequest
  /** fetch aggregated fields from the table: "Candidate" */
  Candidate_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: Candidate_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: Candidate_order_by[] | null
          /** filter the rows returned */
          where?: Candidate_bool_exp | null
        },
        Candidate_aggregateRequest,
      ]
    | Candidate_aggregateRequest
  /** fetch data from the table: "Candidate" using primary key columns */
  Candidate_by_pk?: [{ id: Int }, CandidateRequest]
  /** fetch data from the table: "KV" */
  KV?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: KV_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: KV_order_by[] | null
          /** filter the rows returned */
          where?: KV_bool_exp | null
        },
        KVRequest,
      ]
    | KVRequest
  /** fetch aggregated fields from the table: "KV" */
  KV_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: KV_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: KV_order_by[] | null
          /** filter the rows returned */
          where?: KV_bool_exp | null
        },
        KV_aggregateRequest,
      ]
    | KV_aggregateRequest
  /** fetch data from the table: "KV" using primary key columns */
  KV_by_pk?: [{ id: Int }, KVRequest]
  /** fetch data from the table: "RewardRecord" */
  RewardRecord?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: RewardRecord_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: RewardRecord_order_by[] | null
          /** filter the rows returned */
          where?: RewardRecord_bool_exp | null
        },
        RewardRecordRequest,
      ]
    | RewardRecordRequest
  /** fetch aggregated fields from the table: "RewardRecord" */
  RewardRecord_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: RewardRecord_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: RewardRecord_order_by[] | null
          /** filter the rows returned */
          where?: RewardRecord_bool_exp | null
        },
        RewardRecord_aggregateRequest,
      ]
    | RewardRecord_aggregateRequest
  /** fetch data from the table: "RewardRecord" using primary key columns */
  RewardRecord_by_pk?: [{ id: Int }, RewardRecordRequest]
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Ordering options when selecting data from "Candidate". */
export interface Candidate_order_by {
  banner_url?: order_by | null
  blurb?: order_by | null
  community_plan?: order_by | null
  created_at?: order_by | null
  discord_name?: order_by | null
  email?: order_by | null
  id?: order_by | null
  introduction?: order_by | null
  location?: order_by | null
  logo?: order_by | null
  name?: order_by | null
  reward_plan?: order_by | null
  server_endpoint?: order_by | null
  server_health_endpoint?: order_by | null
  share_card_image?: order_by | null
  social_media?: order_by | null
  team?: order_by | null
  tech_setup?: order_by | null
  temp_eth_address?: order_by | null
  updated_at?: order_by | null
  website?: order_by | null
}

/** Boolean expression to filter rows from the table "Candidate". All fields are combined with a logical 'AND'. */
export interface Candidate_bool_exp {
  _and?: Candidate_bool_exp[] | null
  _not?: Candidate_bool_exp | null
  _or?: Candidate_bool_exp[] | null
  banner_url?: String_comparison_exp | null
  blurb?: String_comparison_exp | null
  community_plan?: String_comparison_exp | null
  created_at?: timestamp_comparison_exp | null
  discord_name?: String_comparison_exp | null
  email?: String_comparison_exp | null
  id?: Int_comparison_exp | null
  introduction?: String_comparison_exp | null
  location?: String_comparison_exp | null
  logo?: String_comparison_exp | null
  name?: String_comparison_exp | null
  reward_plan?: String_comparison_exp | null
  server_endpoint?: String_comparison_exp | null
  server_health_endpoint?: String_comparison_exp | null
  share_card_image?: String_comparison_exp | null
  social_media?: _text_comparison_exp | null
  team?: String_comparison_exp | null
  tech_setup?: String_comparison_exp | null
  temp_eth_address?: String_comparison_exp | null
  updated_at?: timestamp_comparison_exp | null
  website?: String_comparison_exp | null
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {
  _eq?: String | null
  _gt?: String | null
  _gte?: String | null
  /** does the column match the given case-insensitive pattern */
  _ilike?: String | null
  _in?: String[] | null
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: String | null
  _is_null?: Boolean | null
  /** does the column match the given pattern */
  _like?: String | null
  _lt?: String | null
  _lte?: String | null
  _neq?: String | null
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: String | null
  _nin?: String[] | null
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: String | null
  /** does the column NOT match the given pattern */
  _nlike?: String | null
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: String | null
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: String | null
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: String | null
  /** does the column match the given SQL regular expression */
  _similar?: String | null
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export interface timestamp_comparison_exp {
  _eq?: timestamp | null
  _gt?: timestamp | null
  _gte?: timestamp | null
  _in?: timestamp[] | null
  _is_null?: Boolean | null
  _lt?: timestamp | null
  _lte?: timestamp | null
  _neq?: timestamp | null
  _nin?: timestamp[] | null
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {
  _eq?: Int | null
  _gt?: Int | null
  _gte?: Int | null
  _in?: Int[] | null
  _is_null?: Boolean | null
  _lt?: Int | null
  _lte?: Int | null
  _neq?: Int | null
  _nin?: Int[] | null
}

/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export interface _text_comparison_exp {
  _eq?: _text | null
  _gt?: _text | null
  _gte?: _text | null
  _in?: _text[] | null
  _is_null?: Boolean | null
  _lt?: _text | null
  _lte?: _text | null
  _neq?: _text | null
  _nin?: _text[] | null
}

/** columns and relationships of "Candidate" */
export interface CandidateRequest {
  banner_url?: boolean | number
  blurb?: boolean | number
  community_plan?: boolean | number
  created_at?: boolean | number
  discord_name?: boolean | number
  email?: boolean | number
  id?: boolean | number
  introduction?: boolean | number
  location?: boolean | number
  logo?: boolean | number
  name?: boolean | number
  reward_plan?: boolean | number
  server_endpoint?: boolean | number
  server_health_endpoint?: boolean | number
  share_card_image?: boolean | number
  social_media?: boolean | number
  team?: boolean | number
  tech_setup?: boolean | number
  temp_eth_address?: boolean | number
  updated_at?: boolean | number
  website?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "Candidate" */
export interface Candidate_aggregateRequest {
  aggregate?: Candidate_aggregate_fieldsRequest
  nodes?: CandidateRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "Candidate" */
export interface Candidate_aggregate_fieldsRequest {
  avg?: Candidate_avg_fieldsRequest
  count?: [{ columns?: Candidate_select_column[] | null; distinct?: Boolean | null }] | boolean | number
  max?: Candidate_max_fieldsRequest
  min?: Candidate_min_fieldsRequest
  stddev?: Candidate_stddev_fieldsRequest
  stddev_pop?: Candidate_stddev_pop_fieldsRequest
  stddev_samp?: Candidate_stddev_samp_fieldsRequest
  sum?: Candidate_sum_fieldsRequest
  var_pop?: Candidate_var_pop_fieldsRequest
  var_samp?: Candidate_var_samp_fieldsRequest
  variance?: Candidate_variance_fieldsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface Candidate_avg_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate max on columns */
export interface Candidate_max_fieldsRequest {
  banner_url?: boolean | number
  blurb?: boolean | number
  community_plan?: boolean | number
  created_at?: boolean | number
  discord_name?: boolean | number
  email?: boolean | number
  id?: boolean | number
  introduction?: boolean | number
  location?: boolean | number
  logo?: boolean | number
  name?: boolean | number
  reward_plan?: boolean | number
  server_endpoint?: boolean | number
  server_health_endpoint?: boolean | number
  share_card_image?: boolean | number
  team?: boolean | number
  tech_setup?: boolean | number
  temp_eth_address?: boolean | number
  updated_at?: boolean | number
  website?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface Candidate_min_fieldsRequest {
  banner_url?: boolean | number
  blurb?: boolean | number
  community_plan?: boolean | number
  created_at?: boolean | number
  discord_name?: boolean | number
  email?: boolean | number
  id?: boolean | number
  introduction?: boolean | number
  location?: boolean | number
  logo?: boolean | number
  name?: boolean | number
  reward_plan?: boolean | number
  server_endpoint?: boolean | number
  server_health_endpoint?: boolean | number
  share_card_image?: boolean | number
  team?: boolean | number
  tech_setup?: boolean | number
  temp_eth_address?: boolean | number
  updated_at?: boolean | number
  website?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev on columns */
export interface Candidate_stddev_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface Candidate_stddev_pop_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface Candidate_stddev_samp_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate sum on columns */
export interface Candidate_sum_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_pop on columns */
export interface Candidate_var_pop_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface Candidate_var_samp_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface Candidate_variance_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Ordering options when selecting data from "KV". */
export interface KV_order_by {
  id?: order_by | null
  key?: order_by | null
  value?: order_by | null
}

/** Boolean expression to filter rows from the table "KV". All fields are combined with a logical 'AND'. */
export interface KV_bool_exp {
  _and?: KV_bool_exp[] | null
  _not?: KV_bool_exp | null
  _or?: KV_bool_exp[] | null
  id?: Int_comparison_exp | null
  key?: String_comparison_exp | null
  value?: String_comparison_exp | null
}

/** columns and relationships of "KV" */
export interface KVRequest {
  id?: boolean | number
  key?: boolean | number
  value?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "KV" */
export interface KV_aggregateRequest {
  aggregate?: KV_aggregate_fieldsRequest
  nodes?: KVRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "KV" */
export interface KV_aggregate_fieldsRequest {
  avg?: KV_avg_fieldsRequest
  count?: [{ columns?: KV_select_column[] | null; distinct?: Boolean | null }] | boolean | number
  max?: KV_max_fieldsRequest
  min?: KV_min_fieldsRequest
  stddev?: KV_stddev_fieldsRequest
  stddev_pop?: KV_stddev_pop_fieldsRequest
  stddev_samp?: KV_stddev_samp_fieldsRequest
  sum?: KV_sum_fieldsRequest
  var_pop?: KV_var_pop_fieldsRequest
  var_samp?: KV_var_samp_fieldsRequest
  variance?: KV_variance_fieldsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface KV_avg_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate max on columns */
export interface KV_max_fieldsRequest {
  id?: boolean | number
  key?: boolean | number
  value?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface KV_min_fieldsRequest {
  id?: boolean | number
  key?: boolean | number
  value?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev on columns */
export interface KV_stddev_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface KV_stddev_pop_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface KV_stddev_samp_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate sum on columns */
export interface KV_sum_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_pop on columns */
export interface KV_var_pop_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface KV_var_samp_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface KV_variance_fieldsRequest {
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Ordering options when selecting data from "RewardRecord". */
export interface RewardRecord_order_by {
  address?: order_by | null
  apy?: order_by | null
  burndrop_reward?: order_by | null
  burndrop_reward_delta?: order_by | null
  date?: order_by | null
  hermes_reward?: order_by | null
  hermes_reward_delta?: order_by | null
  id?: order_by | null
  staking?: order_by | null
  total_reward?: order_by | null
  total_reward_delta?: order_by | null
}

/** Boolean expression to filter rows from the table "RewardRecord". All fields are combined with a logical 'AND'. */
export interface RewardRecord_bool_exp {
  _and?: RewardRecord_bool_exp[] | null
  _not?: RewardRecord_bool_exp | null
  _or?: RewardRecord_bool_exp[] | null
  address?: String_comparison_exp | null
  apy?: numeric_comparison_exp | null
  burndrop_reward?: numeric_comparison_exp | null
  burndrop_reward_delta?: numeric_comparison_exp | null
  date?: timestamp_comparison_exp | null
  hermes_reward?: numeric_comparison_exp | null
  hermes_reward_delta?: numeric_comparison_exp | null
  id?: Int_comparison_exp | null
  staking?: numeric_comparison_exp | null
  total_reward?: numeric_comparison_exp | null
  total_reward_delta?: numeric_comparison_exp | null
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export interface numeric_comparison_exp {
  _eq?: numeric | null
  _gt?: numeric | null
  _gte?: numeric | null
  _in?: numeric[] | null
  _is_null?: Boolean | null
  _lt?: numeric | null
  _lte?: numeric | null
  _neq?: numeric | null
  _nin?: numeric[] | null
}

/** columns and relationships of "RewardRecord" */
export interface RewardRecordRequest {
  address?: boolean | number
  apy?: boolean | number
  burndrop_reward?: boolean | number
  burndrop_reward_delta?: boolean | number
  date?: boolean | number
  hermes_reward?: boolean | number
  hermes_reward_delta?: boolean | number
  id?: boolean | number
  staking?: boolean | number
  total_reward?: boolean | number
  total_reward_delta?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregated selection of "RewardRecord" */
export interface RewardRecord_aggregateRequest {
  aggregate?: RewardRecord_aggregate_fieldsRequest
  nodes?: RewardRecordRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate fields of "RewardRecord" */
export interface RewardRecord_aggregate_fieldsRequest {
  avg?: RewardRecord_avg_fieldsRequest
  count?: [{ columns?: RewardRecord_select_column[] | null; distinct?: Boolean | null }] | boolean | number
  max?: RewardRecord_max_fieldsRequest
  min?: RewardRecord_min_fieldsRequest
  stddev?: RewardRecord_stddev_fieldsRequest
  stddev_pop?: RewardRecord_stddev_pop_fieldsRequest
  stddev_samp?: RewardRecord_stddev_samp_fieldsRequest
  sum?: RewardRecord_sum_fieldsRequest
  var_pop?: RewardRecord_var_pop_fieldsRequest
  var_samp?: RewardRecord_var_samp_fieldsRequest
  variance?: RewardRecord_variance_fieldsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate avg on columns */
export interface RewardRecord_avg_fieldsRequest {
  apy?: boolean | number
  burndrop_reward?: boolean | number
  burndrop_reward_delta?: boolean | number
  hermes_reward?: boolean | number
  hermes_reward_delta?: boolean | number
  id?: boolean | number
  staking?: boolean | number
  total_reward?: boolean | number
  total_reward_delta?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate max on columns */
export interface RewardRecord_max_fieldsRequest {
  address?: boolean | number
  apy?: boolean | number
  burndrop_reward?: boolean | number
  burndrop_reward_delta?: boolean | number
  date?: boolean | number
  hermes_reward?: boolean | number
  hermes_reward_delta?: boolean | number
  id?: boolean | number
  staking?: boolean | number
  total_reward?: boolean | number
  total_reward_delta?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate min on columns */
export interface RewardRecord_min_fieldsRequest {
  address?: boolean | number
  apy?: boolean | number
  burndrop_reward?: boolean | number
  burndrop_reward_delta?: boolean | number
  date?: boolean | number
  hermes_reward?: boolean | number
  hermes_reward_delta?: boolean | number
  id?: boolean | number
  staking?: boolean | number
  total_reward?: boolean | number
  total_reward_delta?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev on columns */
export interface RewardRecord_stddev_fieldsRequest {
  apy?: boolean | number
  burndrop_reward?: boolean | number
  burndrop_reward_delta?: boolean | number
  hermes_reward?: boolean | number
  hermes_reward_delta?: boolean | number
  id?: boolean | number
  staking?: boolean | number
  total_reward?: boolean | number
  total_reward_delta?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_pop on columns */
export interface RewardRecord_stddev_pop_fieldsRequest {
  apy?: boolean | number
  burndrop_reward?: boolean | number
  burndrop_reward_delta?: boolean | number
  hermes_reward?: boolean | number
  hermes_reward_delta?: boolean | number
  id?: boolean | number
  staking?: boolean | number
  total_reward?: boolean | number
  total_reward_delta?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate stddev_samp on columns */
export interface RewardRecord_stddev_samp_fieldsRequest {
  apy?: boolean | number
  burndrop_reward?: boolean | number
  burndrop_reward_delta?: boolean | number
  hermes_reward?: boolean | number
  hermes_reward_delta?: boolean | number
  id?: boolean | number
  staking?: boolean | number
  total_reward?: boolean | number
  total_reward_delta?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate sum on columns */
export interface RewardRecord_sum_fieldsRequest {
  apy?: boolean | number
  burndrop_reward?: boolean | number
  burndrop_reward_delta?: boolean | number
  hermes_reward?: boolean | number
  hermes_reward_delta?: boolean | number
  id?: boolean | number
  staking?: boolean | number
  total_reward?: boolean | number
  total_reward_delta?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_pop on columns */
export interface RewardRecord_var_pop_fieldsRequest {
  apy?: boolean | number
  burndrop_reward?: boolean | number
  burndrop_reward_delta?: boolean | number
  hermes_reward?: boolean | number
  hermes_reward_delta?: boolean | number
  id?: boolean | number
  staking?: boolean | number
  total_reward?: boolean | number
  total_reward_delta?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate var_samp on columns */
export interface RewardRecord_var_samp_fieldsRequest {
  apy?: boolean | number
  burndrop_reward?: boolean | number
  burndrop_reward_delta?: boolean | number
  hermes_reward?: boolean | number
  hermes_reward_delta?: boolean | number
  id?: boolean | number
  staking?: boolean | number
  total_reward?: boolean | number
  total_reward_delta?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** aggregate variance on columns */
export interface RewardRecord_variance_fieldsRequest {
  apy?: boolean | number
  burndrop_reward?: boolean | number
  burndrop_reward_delta?: boolean | number
  hermes_reward?: boolean | number
  hermes_reward_delta?: boolean | number
  id?: boolean | number
  staking?: boolean | number
  total_reward?: boolean | number
  total_reward_delta?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface subscription_rootRequest {
  /** fetch data from the table: "Candidate" */
  Candidate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: Candidate_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: Candidate_order_by[] | null
          /** filter the rows returned */
          where?: Candidate_bool_exp | null
        },
        CandidateRequest,
      ]
    | CandidateRequest
  /** fetch aggregated fields from the table: "Candidate" */
  Candidate_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: Candidate_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: Candidate_order_by[] | null
          /** filter the rows returned */
          where?: Candidate_bool_exp | null
        },
        Candidate_aggregateRequest,
      ]
    | Candidate_aggregateRequest
  /** fetch data from the table: "Candidate" using primary key columns */
  Candidate_by_pk?: [{ id: Int }, CandidateRequest]
  /** fetch data from the table: "KV" */
  KV?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: KV_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: KV_order_by[] | null
          /** filter the rows returned */
          where?: KV_bool_exp | null
        },
        KVRequest,
      ]
    | KVRequest
  /** fetch aggregated fields from the table: "KV" */
  KV_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: KV_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: KV_order_by[] | null
          /** filter the rows returned */
          where?: KV_bool_exp | null
        },
        KV_aggregateRequest,
      ]
    | KV_aggregateRequest
  /** fetch data from the table: "KV" using primary key columns */
  KV_by_pk?: [{ id: Int }, KVRequest]
  /** fetch data from the table: "RewardRecord" */
  RewardRecord?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: RewardRecord_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: RewardRecord_order_by[] | null
          /** filter the rows returned */
          where?: RewardRecord_bool_exp | null
        },
        RewardRecordRequest,
      ]
    | RewardRecordRequest
  /** fetch aggregated fields from the table: "RewardRecord" */
  RewardRecord_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: RewardRecord_select_column[] | null
          /** limit the number of rows returned */
          limit?: Int | null
          /** skip the first n rows. Use only with order_by */
          offset?: Int | null
          /** sort the rows by one or more columns */
          order_by?: RewardRecord_order_by[] | null
          /** filter the rows returned */
          where?: RewardRecord_bool_exp | null
        },
        RewardRecord_aggregateRequest,
      ]
    | RewardRecord_aggregateRequest
  /** fetch data from the table: "RewardRecord" using primary key columns */
  RewardRecord_by_pk?: [{ id: Int }, RewardRecordRequest]
  __typename?: boolean | number
  __scalar?: boolean | number
}

const query_root_possibleTypes = ['query_root']
export const isquery_root = (obj: { __typename: String }): obj is query_root => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return query_root_possibleTypes.includes(obj.__typename)
}

const Candidate_possibleTypes = ['Candidate']
export const isCandidate = (obj: { __typename: String }): obj is Candidate => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Candidate_possibleTypes.includes(obj.__typename)
}

const Candidate_aggregate_possibleTypes = ['Candidate_aggregate']
export const isCandidate_aggregate = (obj: { __typename: String }): obj is Candidate_aggregate => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Candidate_aggregate_possibleTypes.includes(obj.__typename)
}

const Candidate_aggregate_fields_possibleTypes = ['Candidate_aggregate_fields']
export const isCandidate_aggregate_fields = (obj: { __typename: String }): obj is Candidate_aggregate_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Candidate_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const Candidate_avg_fields_possibleTypes = ['Candidate_avg_fields']
export const isCandidate_avg_fields = (obj: { __typename: String }): obj is Candidate_avg_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Candidate_avg_fields_possibleTypes.includes(obj.__typename)
}

const Candidate_max_fields_possibleTypes = ['Candidate_max_fields']
export const isCandidate_max_fields = (obj: { __typename: String }): obj is Candidate_max_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Candidate_max_fields_possibleTypes.includes(obj.__typename)
}

const Candidate_min_fields_possibleTypes = ['Candidate_min_fields']
export const isCandidate_min_fields = (obj: { __typename: String }): obj is Candidate_min_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Candidate_min_fields_possibleTypes.includes(obj.__typename)
}

const Candidate_stddev_fields_possibleTypes = ['Candidate_stddev_fields']
export const isCandidate_stddev_fields = (obj: { __typename: String }): obj is Candidate_stddev_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Candidate_stddev_fields_possibleTypes.includes(obj.__typename)
}

const Candidate_stddev_pop_fields_possibleTypes = ['Candidate_stddev_pop_fields']
export const isCandidate_stddev_pop_fields = (obj: { __typename: String }): obj is Candidate_stddev_pop_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Candidate_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const Candidate_stddev_samp_fields_possibleTypes = ['Candidate_stddev_samp_fields']
export const isCandidate_stddev_samp_fields = (obj: { __typename: String }): obj is Candidate_stddev_samp_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Candidate_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const Candidate_sum_fields_possibleTypes = ['Candidate_sum_fields']
export const isCandidate_sum_fields = (obj: { __typename: String }): obj is Candidate_sum_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Candidate_sum_fields_possibleTypes.includes(obj.__typename)
}

const Candidate_var_pop_fields_possibleTypes = ['Candidate_var_pop_fields']
export const isCandidate_var_pop_fields = (obj: { __typename: String }): obj is Candidate_var_pop_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Candidate_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const Candidate_var_samp_fields_possibleTypes = ['Candidate_var_samp_fields']
export const isCandidate_var_samp_fields = (obj: { __typename: String }): obj is Candidate_var_samp_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Candidate_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const Candidate_variance_fields_possibleTypes = ['Candidate_variance_fields']
export const isCandidate_variance_fields = (obj: { __typename: String }): obj is Candidate_variance_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Candidate_variance_fields_possibleTypes.includes(obj.__typename)
}

const KV_possibleTypes = ['KV']
export const isKV = (obj: { __typename: String }): obj is KV => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_possibleTypes.includes(obj.__typename)
}

const KV_aggregate_possibleTypes = ['KV_aggregate']
export const isKV_aggregate = (obj: { __typename: String }): obj is KV_aggregate => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_aggregate_possibleTypes.includes(obj.__typename)
}

const KV_aggregate_fields_possibleTypes = ['KV_aggregate_fields']
export const isKV_aggregate_fields = (obj: { __typename: String }): obj is KV_aggregate_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const KV_avg_fields_possibleTypes = ['KV_avg_fields']
export const isKV_avg_fields = (obj: { __typename: String }): obj is KV_avg_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_avg_fields_possibleTypes.includes(obj.__typename)
}

const KV_max_fields_possibleTypes = ['KV_max_fields']
export const isKV_max_fields = (obj: { __typename: String }): obj is KV_max_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_max_fields_possibleTypes.includes(obj.__typename)
}

const KV_min_fields_possibleTypes = ['KV_min_fields']
export const isKV_min_fields = (obj: { __typename: String }): obj is KV_min_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_min_fields_possibleTypes.includes(obj.__typename)
}

const KV_stddev_fields_possibleTypes = ['KV_stddev_fields']
export const isKV_stddev_fields = (obj: { __typename: String }): obj is KV_stddev_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_stddev_fields_possibleTypes.includes(obj.__typename)
}

const KV_stddev_pop_fields_possibleTypes = ['KV_stddev_pop_fields']
export const isKV_stddev_pop_fields = (obj: { __typename: String }): obj is KV_stddev_pop_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const KV_stddev_samp_fields_possibleTypes = ['KV_stddev_samp_fields']
export const isKV_stddev_samp_fields = (obj: { __typename: String }): obj is KV_stddev_samp_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const KV_sum_fields_possibleTypes = ['KV_sum_fields']
export const isKV_sum_fields = (obj: { __typename: String }): obj is KV_sum_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_sum_fields_possibleTypes.includes(obj.__typename)
}

const KV_var_pop_fields_possibleTypes = ['KV_var_pop_fields']
export const isKV_var_pop_fields = (obj: { __typename: String }): obj is KV_var_pop_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const KV_var_samp_fields_possibleTypes = ['KV_var_samp_fields']
export const isKV_var_samp_fields = (obj: { __typename: String }): obj is KV_var_samp_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const KV_variance_fields_possibleTypes = ['KV_variance_fields']
export const isKV_variance_fields = (obj: { __typename: String }): obj is KV_variance_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return KV_variance_fields_possibleTypes.includes(obj.__typename)
}

const RewardRecord_possibleTypes = ['RewardRecord']
export const isRewardRecord = (obj: { __typename: String }): obj is RewardRecord => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_possibleTypes.includes(obj.__typename)
}

const RewardRecord_aggregate_possibleTypes = ['RewardRecord_aggregate']
export const isRewardRecord_aggregate = (obj: { __typename: String }): obj is RewardRecord_aggregate => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_aggregate_possibleTypes.includes(obj.__typename)
}

const RewardRecord_aggregate_fields_possibleTypes = ['RewardRecord_aggregate_fields']
export const isRewardRecord_aggregate_fields = (obj: { __typename: String }): obj is RewardRecord_aggregate_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_aggregate_fields_possibleTypes.includes(obj.__typename)
}

const RewardRecord_avg_fields_possibleTypes = ['RewardRecord_avg_fields']
export const isRewardRecord_avg_fields = (obj: { __typename: String }): obj is RewardRecord_avg_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_avg_fields_possibleTypes.includes(obj.__typename)
}

const RewardRecord_max_fields_possibleTypes = ['RewardRecord_max_fields']
export const isRewardRecord_max_fields = (obj: { __typename: String }): obj is RewardRecord_max_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_max_fields_possibleTypes.includes(obj.__typename)
}

const RewardRecord_min_fields_possibleTypes = ['RewardRecord_min_fields']
export const isRewardRecord_min_fields = (obj: { __typename: String }): obj is RewardRecord_min_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_min_fields_possibleTypes.includes(obj.__typename)
}

const RewardRecord_stddev_fields_possibleTypes = ['RewardRecord_stddev_fields']
export const isRewardRecord_stddev_fields = (obj: { __typename: String }): obj is RewardRecord_stddev_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_stddev_fields_possibleTypes.includes(obj.__typename)
}

const RewardRecord_stddev_pop_fields_possibleTypes = ['RewardRecord_stddev_pop_fields']
export const isRewardRecord_stddev_pop_fields = (obj: { __typename: String }): obj is RewardRecord_stddev_pop_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}

const RewardRecord_stddev_samp_fields_possibleTypes = ['RewardRecord_stddev_samp_fields']
export const isRewardRecord_stddev_samp_fields = (obj: { __typename: String }): obj is RewardRecord_stddev_samp_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}

const RewardRecord_sum_fields_possibleTypes = ['RewardRecord_sum_fields']
export const isRewardRecord_sum_fields = (obj: { __typename: String }): obj is RewardRecord_sum_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_sum_fields_possibleTypes.includes(obj.__typename)
}

const RewardRecord_var_pop_fields_possibleTypes = ['RewardRecord_var_pop_fields']
export const isRewardRecord_var_pop_fields = (obj: { __typename: String }): obj is RewardRecord_var_pop_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_var_pop_fields_possibleTypes.includes(obj.__typename)
}

const RewardRecord_var_samp_fields_possibleTypes = ['RewardRecord_var_samp_fields']
export const isRewardRecord_var_samp_fields = (obj: { __typename: String }): obj is RewardRecord_var_samp_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_var_samp_fields_possibleTypes.includes(obj.__typename)
}

const RewardRecord_variance_fields_possibleTypes = ['RewardRecord_variance_fields']
export const isRewardRecord_variance_fields = (obj: { __typename: String }): obj is RewardRecord_variance_fields => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RewardRecord_variance_fields_possibleTypes.includes(obj.__typename)
}

const subscription_root_possibleTypes = ['subscription_root']
export const issubscription_root = (obj: { __typename: String }): obj is subscription_root => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return subscription_root_possibleTypes.includes(obj.__typename)
}

export interface query_rootPromiseChain {
  /** fetch data from the table: "Candidate" */
  Candidate: ((args?: {
    /** distinct select on columns */
    distinct_on?: Candidate_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: Candidate_order_by[] | null
    /** filter the rows returned */
    where?: Candidate_bool_exp | null
  }) => { execute: (request: CandidateRequest, defaultValue?: Candidate[]) => Promise<Candidate[]> }) & {
    execute: (request: CandidateRequest, defaultValue?: Candidate[]) => Promise<Candidate[]>
  }
  /** fetch aggregated fields from the table: "Candidate" */
  Candidate_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: Candidate_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: Candidate_order_by[] | null
    /** filter the rows returned */
    where?: Candidate_bool_exp | null
  }) => Candidate_aggregatePromiseChain & {
    execute: (request: Candidate_aggregateRequest, defaultValue?: Candidate_aggregate) => Promise<Candidate_aggregate>
  }) &
    (Candidate_aggregatePromiseChain & {
      execute: (request: Candidate_aggregateRequest, defaultValue?: Candidate_aggregate) => Promise<Candidate_aggregate>
    })
  /** fetch data from the table: "Candidate" using primary key columns */
  Candidate_by_pk: (args: {
    id: Int
  }) => CandidatePromiseChain & {
    execute: (request: CandidateRequest, defaultValue?: Candidate | null) => Promise<Candidate | null>
  }
  /** fetch data from the table: "KV" */
  KV: ((args?: {
    /** distinct select on columns */
    distinct_on?: KV_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: KV_order_by[] | null
    /** filter the rows returned */
    where?: KV_bool_exp | null
  }) => { execute: (request: KVRequest, defaultValue?: KV[]) => Promise<KV[]> }) & {
    execute: (request: KVRequest, defaultValue?: KV[]) => Promise<KV[]>
  }
  /** fetch aggregated fields from the table: "KV" */
  KV_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: KV_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: KV_order_by[] | null
    /** filter the rows returned */
    where?: KV_bool_exp | null
  }) => KV_aggregatePromiseChain & {
    execute: (request: KV_aggregateRequest, defaultValue?: KV_aggregate) => Promise<KV_aggregate>
  }) &
    (KV_aggregatePromiseChain & {
      execute: (request: KV_aggregateRequest, defaultValue?: KV_aggregate) => Promise<KV_aggregate>
    })
  /** fetch data from the table: "KV" using primary key columns */
  KV_by_pk: (args: {
    id: Int
  }) => KVPromiseChain & { execute: (request: KVRequest, defaultValue?: KV | null) => Promise<KV | null> }
  /** fetch data from the table: "RewardRecord" */
  RewardRecord: ((args?: {
    /** distinct select on columns */
    distinct_on?: RewardRecord_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: RewardRecord_order_by[] | null
    /** filter the rows returned */
    where?: RewardRecord_bool_exp | null
  }) => { execute: (request: RewardRecordRequest, defaultValue?: RewardRecord[]) => Promise<RewardRecord[]> }) & {
    execute: (request: RewardRecordRequest, defaultValue?: RewardRecord[]) => Promise<RewardRecord[]>
  }
  /** fetch aggregated fields from the table: "RewardRecord" */
  RewardRecord_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: RewardRecord_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: RewardRecord_order_by[] | null
    /** filter the rows returned */
    where?: RewardRecord_bool_exp | null
  }) => RewardRecord_aggregatePromiseChain & {
    execute: (
      request: RewardRecord_aggregateRequest,
      defaultValue?: RewardRecord_aggregate,
    ) => Promise<RewardRecord_aggregate>
  }) &
    (RewardRecord_aggregatePromiseChain & {
      execute: (
        request: RewardRecord_aggregateRequest,
        defaultValue?: RewardRecord_aggregate,
      ) => Promise<RewardRecord_aggregate>
    })
  /** fetch data from the table: "RewardRecord" using primary key columns */
  RewardRecord_by_pk: (args: {
    id: Int
  }) => RewardRecordPromiseChain & {
    execute: (request: RewardRecordRequest, defaultValue?: RewardRecord | null) => Promise<RewardRecord | null>
  }
}

export interface query_rootObservableChain {
  /** fetch data from the table: "Candidate" */
  Candidate: ((args?: {
    /** distinct select on columns */
    distinct_on?: Candidate_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: Candidate_order_by[] | null
    /** filter the rows returned */
    where?: Candidate_bool_exp | null
  }) => { execute: (request: CandidateRequest, defaultValue?: Candidate[]) => Observable<Candidate[]> }) & {
    execute: (request: CandidateRequest, defaultValue?: Candidate[]) => Observable<Candidate[]>
  }
  /** fetch aggregated fields from the table: "Candidate" */
  Candidate_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: Candidate_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: Candidate_order_by[] | null
    /** filter the rows returned */
    where?: Candidate_bool_exp | null
  }) => Candidate_aggregateObservableChain & {
    execute: (request: Candidate_aggregateRequest, defaultValue?: Candidate_aggregate) => Observable<Candidate_aggregate>
  }) &
    (Candidate_aggregateObservableChain & {
      execute: (request: Candidate_aggregateRequest, defaultValue?: Candidate_aggregate) => Observable<Candidate_aggregate>
    })
  /** fetch data from the table: "Candidate" using primary key columns */
  Candidate_by_pk: (args: {
    id: Int
  }) => CandidateObservableChain & {
    execute: (request: CandidateRequest, defaultValue?: Candidate | null) => Observable<Candidate | null>
  }
  /** fetch data from the table: "KV" */
  KV: ((args?: {
    /** distinct select on columns */
    distinct_on?: KV_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: KV_order_by[] | null
    /** filter the rows returned */
    where?: KV_bool_exp | null
  }) => { execute: (request: KVRequest, defaultValue?: KV[]) => Observable<KV[]> }) & {
    execute: (request: KVRequest, defaultValue?: KV[]) => Observable<KV[]>
  }
  /** fetch aggregated fields from the table: "KV" */
  KV_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: KV_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: KV_order_by[] | null
    /** filter the rows returned */
    where?: KV_bool_exp | null
  }) => KV_aggregateObservableChain & {
    execute: (request: KV_aggregateRequest, defaultValue?: KV_aggregate) => Observable<KV_aggregate>
  }) &
    (KV_aggregateObservableChain & {
      execute: (request: KV_aggregateRequest, defaultValue?: KV_aggregate) => Observable<KV_aggregate>
    })
  /** fetch data from the table: "KV" using primary key columns */
  KV_by_pk: (args: {
    id: Int
  }) => KVObservableChain & { execute: (request: KVRequest, defaultValue?: KV | null) => Observable<KV | null> }
  /** fetch data from the table: "RewardRecord" */
  RewardRecord: ((args?: {
    /** distinct select on columns */
    distinct_on?: RewardRecord_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: RewardRecord_order_by[] | null
    /** filter the rows returned */
    where?: RewardRecord_bool_exp | null
  }) => { execute: (request: RewardRecordRequest, defaultValue?: RewardRecord[]) => Observable<RewardRecord[]> }) & {
    execute: (request: RewardRecordRequest, defaultValue?: RewardRecord[]) => Observable<RewardRecord[]>
  }
  /** fetch aggregated fields from the table: "RewardRecord" */
  RewardRecord_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: RewardRecord_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: RewardRecord_order_by[] | null
    /** filter the rows returned */
    where?: RewardRecord_bool_exp | null
  }) => RewardRecord_aggregateObservableChain & {
    execute: (
      request: RewardRecord_aggregateRequest,
      defaultValue?: RewardRecord_aggregate,
    ) => Observable<RewardRecord_aggregate>
  }) &
    (RewardRecord_aggregateObservableChain & {
      execute: (
        request: RewardRecord_aggregateRequest,
        defaultValue?: RewardRecord_aggregate,
      ) => Observable<RewardRecord_aggregate>
    })
  /** fetch data from the table: "RewardRecord" using primary key columns */
  RewardRecord_by_pk: (args: {
    id: Int
  }) => RewardRecordObservableChain & {
    execute: (request: RewardRecordRequest, defaultValue?: RewardRecord | null) => Observable<RewardRecord | null>
  }
}

/** columns and relationships of "Candidate" */
export interface CandidatePromiseChain {
  banner_url: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  blurb: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  community_plan: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamp) => Promise<timestamp> }
  discord_name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  email: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  introduction: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  location: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  logo: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  reward_plan: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  server_endpoint: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  server_health_endpoint: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  share_card_image: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  social_media: { execute: (request?: boolean | number, defaultValue?: _text | null) => Promise<_text | null> }
  team: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  tech_setup: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  temp_eth_address: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  updated_at: { execute: (request?: boolean | number, defaultValue?: timestamp) => Promise<timestamp> }
  website: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** columns and relationships of "Candidate" */
export interface CandidateObservableChain {
  banner_url: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  blurb: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  community_plan: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamp) => Observable<timestamp> }
  discord_name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  email: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  introduction: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  location: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  logo: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  reward_plan: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  server_endpoint: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  server_health_endpoint: {
    execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null>
  }
  share_card_image: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  social_media: { execute: (request?: boolean | number, defaultValue?: _text | null) => Observable<_text | null> }
  team: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  tech_setup: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  temp_eth_address: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  updated_at: { execute: (request?: boolean | number, defaultValue?: timestamp) => Observable<timestamp> }
  website: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregated selection of "Candidate" */
export interface Candidate_aggregatePromiseChain {
  aggregate: Candidate_aggregate_fieldsPromiseChain & {
    execute: (
      request: Candidate_aggregate_fieldsRequest,
      defaultValue?: Candidate_aggregate_fields | null,
    ) => Promise<Candidate_aggregate_fields | null>
  }
  nodes: { execute: (request: CandidateRequest, defaultValue?: Candidate[]) => Promise<Candidate[]> }
}

/** aggregated selection of "Candidate" */
export interface Candidate_aggregateObservableChain {
  aggregate: Candidate_aggregate_fieldsObservableChain & {
    execute: (
      request: Candidate_aggregate_fieldsRequest,
      defaultValue?: Candidate_aggregate_fields | null,
    ) => Observable<Candidate_aggregate_fields | null>
  }
  nodes: { execute: (request: CandidateRequest, defaultValue?: Candidate[]) => Observable<Candidate[]> }
}

/** aggregate fields of "Candidate" */
export interface Candidate_aggregate_fieldsPromiseChain {
  avg: Candidate_avg_fieldsPromiseChain & {
    execute: (
      request: Candidate_avg_fieldsRequest,
      defaultValue?: Candidate_avg_fields | null,
    ) => Promise<Candidate_avg_fields | null>
  }
  count: ((args?: {
    columns?: Candidate_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int>
  }
  max: Candidate_max_fieldsPromiseChain & {
    execute: (
      request: Candidate_max_fieldsRequest,
      defaultValue?: Candidate_max_fields | null,
    ) => Promise<Candidate_max_fields | null>
  }
  min: Candidate_min_fieldsPromiseChain & {
    execute: (
      request: Candidate_min_fieldsRequest,
      defaultValue?: Candidate_min_fields | null,
    ) => Promise<Candidate_min_fields | null>
  }
  stddev: Candidate_stddev_fieldsPromiseChain & {
    execute: (
      request: Candidate_stddev_fieldsRequest,
      defaultValue?: Candidate_stddev_fields | null,
    ) => Promise<Candidate_stddev_fields | null>
  }
  stddev_pop: Candidate_stddev_pop_fieldsPromiseChain & {
    execute: (
      request: Candidate_stddev_pop_fieldsRequest,
      defaultValue?: Candidate_stddev_pop_fields | null,
    ) => Promise<Candidate_stddev_pop_fields | null>
  }
  stddev_samp: Candidate_stddev_samp_fieldsPromiseChain & {
    execute: (
      request: Candidate_stddev_samp_fieldsRequest,
      defaultValue?: Candidate_stddev_samp_fields | null,
    ) => Promise<Candidate_stddev_samp_fields | null>
  }
  sum: Candidate_sum_fieldsPromiseChain & {
    execute: (
      request: Candidate_sum_fieldsRequest,
      defaultValue?: Candidate_sum_fields | null,
    ) => Promise<Candidate_sum_fields | null>
  }
  var_pop: Candidate_var_pop_fieldsPromiseChain & {
    execute: (
      request: Candidate_var_pop_fieldsRequest,
      defaultValue?: Candidate_var_pop_fields | null,
    ) => Promise<Candidate_var_pop_fields | null>
  }
  var_samp: Candidate_var_samp_fieldsPromiseChain & {
    execute: (
      request: Candidate_var_samp_fieldsRequest,
      defaultValue?: Candidate_var_samp_fields | null,
    ) => Promise<Candidate_var_samp_fields | null>
  }
  variance: Candidate_variance_fieldsPromiseChain & {
    execute: (
      request: Candidate_variance_fieldsRequest,
      defaultValue?: Candidate_variance_fields | null,
    ) => Promise<Candidate_variance_fields | null>
  }
}

/** aggregate fields of "Candidate" */
export interface Candidate_aggregate_fieldsObservableChain {
  avg: Candidate_avg_fieldsObservableChain & {
    execute: (
      request: Candidate_avg_fieldsRequest,
      defaultValue?: Candidate_avg_fields | null,
    ) => Observable<Candidate_avg_fields | null>
  }
  count: ((args?: {
    columns?: Candidate_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int>
  }
  max: Candidate_max_fieldsObservableChain & {
    execute: (
      request: Candidate_max_fieldsRequest,
      defaultValue?: Candidate_max_fields | null,
    ) => Observable<Candidate_max_fields | null>
  }
  min: Candidate_min_fieldsObservableChain & {
    execute: (
      request: Candidate_min_fieldsRequest,
      defaultValue?: Candidate_min_fields | null,
    ) => Observable<Candidate_min_fields | null>
  }
  stddev: Candidate_stddev_fieldsObservableChain & {
    execute: (
      request: Candidate_stddev_fieldsRequest,
      defaultValue?: Candidate_stddev_fields | null,
    ) => Observable<Candidate_stddev_fields | null>
  }
  stddev_pop: Candidate_stddev_pop_fieldsObservableChain & {
    execute: (
      request: Candidate_stddev_pop_fieldsRequest,
      defaultValue?: Candidate_stddev_pop_fields | null,
    ) => Observable<Candidate_stddev_pop_fields | null>
  }
  stddev_samp: Candidate_stddev_samp_fieldsObservableChain & {
    execute: (
      request: Candidate_stddev_samp_fieldsRequest,
      defaultValue?: Candidate_stddev_samp_fields | null,
    ) => Observable<Candidate_stddev_samp_fields | null>
  }
  sum: Candidate_sum_fieldsObservableChain & {
    execute: (
      request: Candidate_sum_fieldsRequest,
      defaultValue?: Candidate_sum_fields | null,
    ) => Observable<Candidate_sum_fields | null>
  }
  var_pop: Candidate_var_pop_fieldsObservableChain & {
    execute: (
      request: Candidate_var_pop_fieldsRequest,
      defaultValue?: Candidate_var_pop_fields | null,
    ) => Observable<Candidate_var_pop_fields | null>
  }
  var_samp: Candidate_var_samp_fieldsObservableChain & {
    execute: (
      request: Candidate_var_samp_fieldsRequest,
      defaultValue?: Candidate_var_samp_fields | null,
    ) => Observable<Candidate_var_samp_fields | null>
  }
  variance: Candidate_variance_fieldsObservableChain & {
    execute: (
      request: Candidate_variance_fieldsRequest,
      defaultValue?: Candidate_variance_fields | null,
    ) => Observable<Candidate_variance_fields | null>
  }
}

/** aggregate avg on columns */
export interface Candidate_avg_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate avg on columns */
export interface Candidate_avg_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate max on columns */
export interface Candidate_max_fieldsPromiseChain {
  banner_url: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  blurb: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  community_plan: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamp | null) => Promise<timestamp | null> }
  discord_name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  email: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  introduction: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  location: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  logo: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  reward_plan: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  server_endpoint: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  server_health_endpoint: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  share_card_image: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  team: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  tech_setup: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  temp_eth_address: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  updated_at: { execute: (request?: boolean | number, defaultValue?: timestamp | null) => Promise<timestamp | null> }
  website: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate max on columns */
export interface Candidate_max_fieldsObservableChain {
  banner_url: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  blurb: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  community_plan: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamp | null) => Observable<timestamp | null> }
  discord_name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  email: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  introduction: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  location: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  logo: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  reward_plan: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  server_endpoint: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  server_health_endpoint: {
    execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null>
  }
  share_card_image: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  team: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  tech_setup: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  temp_eth_address: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  updated_at: { execute: (request?: boolean | number, defaultValue?: timestamp | null) => Observable<timestamp | null> }
  website: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregate min on columns */
export interface Candidate_min_fieldsPromiseChain {
  banner_url: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  blurb: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  community_plan: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamp | null) => Promise<timestamp | null> }
  discord_name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  email: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  introduction: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  location: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  logo: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  reward_plan: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  server_endpoint: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  server_health_endpoint: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  share_card_image: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  team: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  tech_setup: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  temp_eth_address: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  updated_at: { execute: (request?: boolean | number, defaultValue?: timestamp | null) => Promise<timestamp | null> }
  website: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate min on columns */
export interface Candidate_min_fieldsObservableChain {
  banner_url: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  blurb: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  community_plan: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  created_at: { execute: (request?: boolean | number, defaultValue?: timestamp | null) => Observable<timestamp | null> }
  discord_name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  email: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  introduction: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  location: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  logo: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  reward_plan: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  server_endpoint: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  server_health_endpoint: {
    execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null>
  }
  share_card_image: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  team: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  tech_setup: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  temp_eth_address: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  updated_at: { execute: (request?: boolean | number, defaultValue?: timestamp | null) => Observable<timestamp | null> }
  website: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregate stddev on columns */
export interface Candidate_stddev_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev on columns */
export interface Candidate_stddev_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate stddev_pop on columns */
export interface Candidate_stddev_pop_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev_pop on columns */
export interface Candidate_stddev_pop_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate stddev_samp on columns */
export interface Candidate_stddev_samp_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev_samp on columns */
export interface Candidate_stddev_samp_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate sum on columns */
export interface Candidate_sum_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
}

/** aggregate sum on columns */
export interface Candidate_sum_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
}

/** aggregate var_pop on columns */
export interface Candidate_var_pop_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate var_pop on columns */
export interface Candidate_var_pop_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate var_samp on columns */
export interface Candidate_var_samp_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate var_samp on columns */
export interface Candidate_var_samp_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate variance on columns */
export interface Candidate_variance_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate variance on columns */
export interface Candidate_variance_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** columns and relationships of "KV" */
export interface KVPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  key: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  value: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

/** columns and relationships of "KV" */
export interface KVObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  key: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  value: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}

/** aggregated selection of "KV" */
export interface KV_aggregatePromiseChain {
  aggregate: KV_aggregate_fieldsPromiseChain & {
    execute: (
      request: KV_aggregate_fieldsRequest,
      defaultValue?: KV_aggregate_fields | null,
    ) => Promise<KV_aggregate_fields | null>
  }
  nodes: { execute: (request: KVRequest, defaultValue?: KV[]) => Promise<KV[]> }
}

/** aggregated selection of "KV" */
export interface KV_aggregateObservableChain {
  aggregate: KV_aggregate_fieldsObservableChain & {
    execute: (
      request: KV_aggregate_fieldsRequest,
      defaultValue?: KV_aggregate_fields | null,
    ) => Observable<KV_aggregate_fields | null>
  }
  nodes: { execute: (request: KVRequest, defaultValue?: KV[]) => Observable<KV[]> }
}

/** aggregate fields of "KV" */
export interface KV_aggregate_fieldsPromiseChain {
  avg: KV_avg_fieldsPromiseChain & {
    execute: (request: KV_avg_fieldsRequest, defaultValue?: KV_avg_fields | null) => Promise<KV_avg_fields | null>
  }
  count: ((args?: {
    columns?: KV_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int>
  }
  max: KV_max_fieldsPromiseChain & {
    execute: (request: KV_max_fieldsRequest, defaultValue?: KV_max_fields | null) => Promise<KV_max_fields | null>
  }
  min: KV_min_fieldsPromiseChain & {
    execute: (request: KV_min_fieldsRequest, defaultValue?: KV_min_fields | null) => Promise<KV_min_fields | null>
  }
  stddev: KV_stddev_fieldsPromiseChain & {
    execute: (request: KV_stddev_fieldsRequest, defaultValue?: KV_stddev_fields | null) => Promise<KV_stddev_fields | null>
  }
  stddev_pop: KV_stddev_pop_fieldsPromiseChain & {
    execute: (
      request: KV_stddev_pop_fieldsRequest,
      defaultValue?: KV_stddev_pop_fields | null,
    ) => Promise<KV_stddev_pop_fields | null>
  }
  stddev_samp: KV_stddev_samp_fieldsPromiseChain & {
    execute: (
      request: KV_stddev_samp_fieldsRequest,
      defaultValue?: KV_stddev_samp_fields | null,
    ) => Promise<KV_stddev_samp_fields | null>
  }
  sum: KV_sum_fieldsPromiseChain & {
    execute: (request: KV_sum_fieldsRequest, defaultValue?: KV_sum_fields | null) => Promise<KV_sum_fields | null>
  }
  var_pop: KV_var_pop_fieldsPromiseChain & {
    execute: (
      request: KV_var_pop_fieldsRequest,
      defaultValue?: KV_var_pop_fields | null,
    ) => Promise<KV_var_pop_fields | null>
  }
  var_samp: KV_var_samp_fieldsPromiseChain & {
    execute: (
      request: KV_var_samp_fieldsRequest,
      defaultValue?: KV_var_samp_fields | null,
    ) => Promise<KV_var_samp_fields | null>
  }
  variance: KV_variance_fieldsPromiseChain & {
    execute: (
      request: KV_variance_fieldsRequest,
      defaultValue?: KV_variance_fields | null,
    ) => Promise<KV_variance_fields | null>
  }
}

/** aggregate fields of "KV" */
export interface KV_aggregate_fieldsObservableChain {
  avg: KV_avg_fieldsObservableChain & {
    execute: (request: KV_avg_fieldsRequest, defaultValue?: KV_avg_fields | null) => Observable<KV_avg_fields | null>
  }
  count: ((args?: {
    columns?: KV_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int>
  }
  max: KV_max_fieldsObservableChain & {
    execute: (request: KV_max_fieldsRequest, defaultValue?: KV_max_fields | null) => Observable<KV_max_fields | null>
  }
  min: KV_min_fieldsObservableChain & {
    execute: (request: KV_min_fieldsRequest, defaultValue?: KV_min_fields | null) => Observable<KV_min_fields | null>
  }
  stddev: KV_stddev_fieldsObservableChain & {
    execute: (
      request: KV_stddev_fieldsRequest,
      defaultValue?: KV_stddev_fields | null,
    ) => Observable<KV_stddev_fields | null>
  }
  stddev_pop: KV_stddev_pop_fieldsObservableChain & {
    execute: (
      request: KV_stddev_pop_fieldsRequest,
      defaultValue?: KV_stddev_pop_fields | null,
    ) => Observable<KV_stddev_pop_fields | null>
  }
  stddev_samp: KV_stddev_samp_fieldsObservableChain & {
    execute: (
      request: KV_stddev_samp_fieldsRequest,
      defaultValue?: KV_stddev_samp_fields | null,
    ) => Observable<KV_stddev_samp_fields | null>
  }
  sum: KV_sum_fieldsObservableChain & {
    execute: (request: KV_sum_fieldsRequest, defaultValue?: KV_sum_fields | null) => Observable<KV_sum_fields | null>
  }
  var_pop: KV_var_pop_fieldsObservableChain & {
    execute: (
      request: KV_var_pop_fieldsRequest,
      defaultValue?: KV_var_pop_fields | null,
    ) => Observable<KV_var_pop_fields | null>
  }
  var_samp: KV_var_samp_fieldsObservableChain & {
    execute: (
      request: KV_var_samp_fieldsRequest,
      defaultValue?: KV_var_samp_fields | null,
    ) => Observable<KV_var_samp_fields | null>
  }
  variance: KV_variance_fieldsObservableChain & {
    execute: (
      request: KV_variance_fieldsRequest,
      defaultValue?: KV_variance_fields | null,
    ) => Observable<KV_variance_fields | null>
  }
}

/** aggregate avg on columns */
export interface KV_avg_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate avg on columns */
export interface KV_avg_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate max on columns */
export interface KV_max_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  value: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate max on columns */
export interface KV_max_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  value: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregate min on columns */
export interface KV_min_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  value: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** aggregate min on columns */
export interface KV_min_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  value: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** aggregate stddev on columns */
export interface KV_stddev_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev on columns */
export interface KV_stddev_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate stddev_pop on columns */
export interface KV_stddev_pop_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev_pop on columns */
export interface KV_stddev_pop_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate stddev_samp on columns */
export interface KV_stddev_samp_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev_samp on columns */
export interface KV_stddev_samp_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate sum on columns */
export interface KV_sum_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
}

/** aggregate sum on columns */
export interface KV_sum_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
}

/** aggregate var_pop on columns */
export interface KV_var_pop_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate var_pop on columns */
export interface KV_var_pop_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate var_samp on columns */
export interface KV_var_samp_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate var_samp on columns */
export interface KV_var_samp_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate variance on columns */
export interface KV_variance_fieldsPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate variance on columns */
export interface KV_variance_fieldsObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** columns and relationships of "RewardRecord" */
export interface RewardRecordPromiseChain {
  address: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  apy: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  burndrop_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  burndrop_reward_delta: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  date: { execute: (request?: boolean | number, defaultValue?: timestamp) => Promise<timestamp> }
  hermes_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  hermes_reward_delta: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  staking: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  total_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  total_reward_delta: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
}

/** columns and relationships of "RewardRecord" */
export interface RewardRecordObservableChain {
  address: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  apy: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  burndrop_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  burndrop_reward_delta: {
    execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null>
  }
  date: { execute: (request?: boolean | number, defaultValue?: timestamp) => Observable<timestamp> }
  hermes_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  hermes_reward_delta: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  staking: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  total_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  total_reward_delta: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
}

/** aggregated selection of "RewardRecord" */
export interface RewardRecord_aggregatePromiseChain {
  aggregate: RewardRecord_aggregate_fieldsPromiseChain & {
    execute: (
      request: RewardRecord_aggregate_fieldsRequest,
      defaultValue?: RewardRecord_aggregate_fields | null,
    ) => Promise<RewardRecord_aggregate_fields | null>
  }
  nodes: { execute: (request: RewardRecordRequest, defaultValue?: RewardRecord[]) => Promise<RewardRecord[]> }
}

/** aggregated selection of "RewardRecord" */
export interface RewardRecord_aggregateObservableChain {
  aggregate: RewardRecord_aggregate_fieldsObservableChain & {
    execute: (
      request: RewardRecord_aggregate_fieldsRequest,
      defaultValue?: RewardRecord_aggregate_fields | null,
    ) => Observable<RewardRecord_aggregate_fields | null>
  }
  nodes: { execute: (request: RewardRecordRequest, defaultValue?: RewardRecord[]) => Observable<RewardRecord[]> }
}

/** aggregate fields of "RewardRecord" */
export interface RewardRecord_aggregate_fieldsPromiseChain {
  avg: RewardRecord_avg_fieldsPromiseChain & {
    execute: (
      request: RewardRecord_avg_fieldsRequest,
      defaultValue?: RewardRecord_avg_fields | null,
    ) => Promise<RewardRecord_avg_fields | null>
  }
  count: ((args?: {
    columns?: RewardRecord_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int>
  }
  max: RewardRecord_max_fieldsPromiseChain & {
    execute: (
      request: RewardRecord_max_fieldsRequest,
      defaultValue?: RewardRecord_max_fields | null,
    ) => Promise<RewardRecord_max_fields | null>
  }
  min: RewardRecord_min_fieldsPromiseChain & {
    execute: (
      request: RewardRecord_min_fieldsRequest,
      defaultValue?: RewardRecord_min_fields | null,
    ) => Promise<RewardRecord_min_fields | null>
  }
  stddev: RewardRecord_stddev_fieldsPromiseChain & {
    execute: (
      request: RewardRecord_stddev_fieldsRequest,
      defaultValue?: RewardRecord_stddev_fields | null,
    ) => Promise<RewardRecord_stddev_fields | null>
  }
  stddev_pop: RewardRecord_stddev_pop_fieldsPromiseChain & {
    execute: (
      request: RewardRecord_stddev_pop_fieldsRequest,
      defaultValue?: RewardRecord_stddev_pop_fields | null,
    ) => Promise<RewardRecord_stddev_pop_fields | null>
  }
  stddev_samp: RewardRecord_stddev_samp_fieldsPromiseChain & {
    execute: (
      request: RewardRecord_stddev_samp_fieldsRequest,
      defaultValue?: RewardRecord_stddev_samp_fields | null,
    ) => Promise<RewardRecord_stddev_samp_fields | null>
  }
  sum: RewardRecord_sum_fieldsPromiseChain & {
    execute: (
      request: RewardRecord_sum_fieldsRequest,
      defaultValue?: RewardRecord_sum_fields | null,
    ) => Promise<RewardRecord_sum_fields | null>
  }
  var_pop: RewardRecord_var_pop_fieldsPromiseChain & {
    execute: (
      request: RewardRecord_var_pop_fieldsRequest,
      defaultValue?: RewardRecord_var_pop_fields | null,
    ) => Promise<RewardRecord_var_pop_fields | null>
  }
  var_samp: RewardRecord_var_samp_fieldsPromiseChain & {
    execute: (
      request: RewardRecord_var_samp_fieldsRequest,
      defaultValue?: RewardRecord_var_samp_fields | null,
    ) => Promise<RewardRecord_var_samp_fields | null>
  }
  variance: RewardRecord_variance_fieldsPromiseChain & {
    execute: (
      request: RewardRecord_variance_fieldsRequest,
      defaultValue?: RewardRecord_variance_fields | null,
    ) => Promise<RewardRecord_variance_fields | null>
  }
}

/** aggregate fields of "RewardRecord" */
export interface RewardRecord_aggregate_fieldsObservableChain {
  avg: RewardRecord_avg_fieldsObservableChain & {
    execute: (
      request: RewardRecord_avg_fieldsRequest,
      defaultValue?: RewardRecord_avg_fields | null,
    ) => Observable<RewardRecord_avg_fields | null>
  }
  count: ((args?: {
    columns?: RewardRecord_select_column[] | null
    distinct?: Boolean | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int>
  }
  max: RewardRecord_max_fieldsObservableChain & {
    execute: (
      request: RewardRecord_max_fieldsRequest,
      defaultValue?: RewardRecord_max_fields | null,
    ) => Observable<RewardRecord_max_fields | null>
  }
  min: RewardRecord_min_fieldsObservableChain & {
    execute: (
      request: RewardRecord_min_fieldsRequest,
      defaultValue?: RewardRecord_min_fields | null,
    ) => Observable<RewardRecord_min_fields | null>
  }
  stddev: RewardRecord_stddev_fieldsObservableChain & {
    execute: (
      request: RewardRecord_stddev_fieldsRequest,
      defaultValue?: RewardRecord_stddev_fields | null,
    ) => Observable<RewardRecord_stddev_fields | null>
  }
  stddev_pop: RewardRecord_stddev_pop_fieldsObservableChain & {
    execute: (
      request: RewardRecord_stddev_pop_fieldsRequest,
      defaultValue?: RewardRecord_stddev_pop_fields | null,
    ) => Observable<RewardRecord_stddev_pop_fields | null>
  }
  stddev_samp: RewardRecord_stddev_samp_fieldsObservableChain & {
    execute: (
      request: RewardRecord_stddev_samp_fieldsRequest,
      defaultValue?: RewardRecord_stddev_samp_fields | null,
    ) => Observable<RewardRecord_stddev_samp_fields | null>
  }
  sum: RewardRecord_sum_fieldsObservableChain & {
    execute: (
      request: RewardRecord_sum_fieldsRequest,
      defaultValue?: RewardRecord_sum_fields | null,
    ) => Observable<RewardRecord_sum_fields | null>
  }
  var_pop: RewardRecord_var_pop_fieldsObservableChain & {
    execute: (
      request: RewardRecord_var_pop_fieldsRequest,
      defaultValue?: RewardRecord_var_pop_fields | null,
    ) => Observable<RewardRecord_var_pop_fields | null>
  }
  var_samp: RewardRecord_var_samp_fieldsObservableChain & {
    execute: (
      request: RewardRecord_var_samp_fieldsRequest,
      defaultValue?: RewardRecord_var_samp_fields | null,
    ) => Observable<RewardRecord_var_samp_fields | null>
  }
  variance: RewardRecord_variance_fieldsObservableChain & {
    execute: (
      request: RewardRecord_variance_fieldsRequest,
      defaultValue?: RewardRecord_variance_fields | null,
    ) => Observable<RewardRecord_variance_fields | null>
  }
}

/** aggregate avg on columns */
export interface RewardRecord_avg_fieldsPromiseChain {
  apy: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  burndrop_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  burndrop_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  hermes_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  hermes_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  staking: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  total_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  total_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate avg on columns */
export interface RewardRecord_avg_fieldsObservableChain {
  apy: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  burndrop_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  burndrop_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  hermes_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  hermes_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  staking: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  total_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  total_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate max on columns */
export interface RewardRecord_max_fieldsPromiseChain {
  address: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  apy: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  burndrop_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  burndrop_reward_delta: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  date: { execute: (request?: boolean | number, defaultValue?: timestamp | null) => Promise<timestamp | null> }
  hermes_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  hermes_reward_delta: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  staking: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  total_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  total_reward_delta: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
}

/** aggregate max on columns */
export interface RewardRecord_max_fieldsObservableChain {
  address: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  apy: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  burndrop_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  burndrop_reward_delta: {
    execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null>
  }
  date: { execute: (request?: boolean | number, defaultValue?: timestamp | null) => Observable<timestamp | null> }
  hermes_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  hermes_reward_delta: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  staking: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  total_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  total_reward_delta: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
}

/** aggregate min on columns */
export interface RewardRecord_min_fieldsPromiseChain {
  address: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  apy: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  burndrop_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  burndrop_reward_delta: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  date: { execute: (request?: boolean | number, defaultValue?: timestamp | null) => Promise<timestamp | null> }
  hermes_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  hermes_reward_delta: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  staking: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  total_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  total_reward_delta: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
}

/** aggregate min on columns */
export interface RewardRecord_min_fieldsObservableChain {
  address: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  apy: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  burndrop_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  burndrop_reward_delta: {
    execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null>
  }
  date: { execute: (request?: boolean | number, defaultValue?: timestamp | null) => Observable<timestamp | null> }
  hermes_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  hermes_reward_delta: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  staking: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  total_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  total_reward_delta: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
}

/** aggregate stddev on columns */
export interface RewardRecord_stddev_fieldsPromiseChain {
  apy: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  burndrop_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  burndrop_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  hermes_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  hermes_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  staking: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  total_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  total_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev on columns */
export interface RewardRecord_stddev_fieldsObservableChain {
  apy: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  burndrop_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  burndrop_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  hermes_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  hermes_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  staking: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  total_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  total_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate stddev_pop on columns */
export interface RewardRecord_stddev_pop_fieldsPromiseChain {
  apy: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  burndrop_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  burndrop_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  hermes_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  hermes_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  staking: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  total_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  total_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev_pop on columns */
export interface RewardRecord_stddev_pop_fieldsObservableChain {
  apy: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  burndrop_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  burndrop_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  hermes_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  hermes_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  staking: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  total_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  total_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate stddev_samp on columns */
export interface RewardRecord_stddev_samp_fieldsPromiseChain {
  apy: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  burndrop_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  burndrop_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  hermes_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  hermes_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  staking: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  total_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  total_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate stddev_samp on columns */
export interface RewardRecord_stddev_samp_fieldsObservableChain {
  apy: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  burndrop_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  burndrop_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  hermes_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  hermes_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  staking: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  total_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  total_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate sum on columns */
export interface RewardRecord_sum_fieldsPromiseChain {
  apy: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  burndrop_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  burndrop_reward_delta: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  hermes_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  hermes_reward_delta: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  staking: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  total_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
  total_reward_delta: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Promise<numeric | null> }
}

/** aggregate sum on columns */
export interface RewardRecord_sum_fieldsObservableChain {
  apy: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  burndrop_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  burndrop_reward_delta: {
    execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null>
  }
  hermes_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  hermes_reward_delta: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  staking: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  total_reward: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
  total_reward_delta: { execute: (request?: boolean | number, defaultValue?: numeric | null) => Observable<numeric | null> }
}

/** aggregate var_pop on columns */
export interface RewardRecord_var_pop_fieldsPromiseChain {
  apy: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  burndrop_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  burndrop_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  hermes_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  hermes_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  staking: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  total_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  total_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate var_pop on columns */
export interface RewardRecord_var_pop_fieldsObservableChain {
  apy: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  burndrop_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  burndrop_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  hermes_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  hermes_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  staking: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  total_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  total_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate var_samp on columns */
export interface RewardRecord_var_samp_fieldsPromiseChain {
  apy: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  burndrop_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  burndrop_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  hermes_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  hermes_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  staking: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  total_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  total_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate var_samp on columns */
export interface RewardRecord_var_samp_fieldsObservableChain {
  apy: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  burndrop_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  burndrop_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  hermes_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  hermes_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  staking: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  total_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  total_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

/** aggregate variance on columns */
export interface RewardRecord_variance_fieldsPromiseChain {
  apy: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  burndrop_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  burndrop_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  hermes_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  hermes_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  staking: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  total_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  total_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

/** aggregate variance on columns */
export interface RewardRecord_variance_fieldsObservableChain {
  apy: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  burndrop_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  burndrop_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  hermes_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  hermes_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  id: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  staking: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  total_reward: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  total_reward_delta: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

export interface subscription_rootPromiseChain {
  /** fetch data from the table: "Candidate" */
  Candidate: ((args?: {
    /** distinct select on columns */
    distinct_on?: Candidate_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: Candidate_order_by[] | null
    /** filter the rows returned */
    where?: Candidate_bool_exp | null
  }) => { execute: (request: CandidateRequest, defaultValue?: Candidate[]) => Promise<Candidate[]> }) & {
    execute: (request: CandidateRequest, defaultValue?: Candidate[]) => Promise<Candidate[]>
  }
  /** fetch aggregated fields from the table: "Candidate" */
  Candidate_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: Candidate_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: Candidate_order_by[] | null
    /** filter the rows returned */
    where?: Candidate_bool_exp | null
  }) => Candidate_aggregatePromiseChain & {
    execute: (request: Candidate_aggregateRequest, defaultValue?: Candidate_aggregate) => Promise<Candidate_aggregate>
  }) &
    (Candidate_aggregatePromiseChain & {
      execute: (request: Candidate_aggregateRequest, defaultValue?: Candidate_aggregate) => Promise<Candidate_aggregate>
    })
  /** fetch data from the table: "Candidate" using primary key columns */
  Candidate_by_pk: (args: {
    id: Int
  }) => CandidatePromiseChain & {
    execute: (request: CandidateRequest, defaultValue?: Candidate | null) => Promise<Candidate | null>
  }
  /** fetch data from the table: "KV" */
  KV: ((args?: {
    /** distinct select on columns */
    distinct_on?: KV_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: KV_order_by[] | null
    /** filter the rows returned */
    where?: KV_bool_exp | null
  }) => { execute: (request: KVRequest, defaultValue?: KV[]) => Promise<KV[]> }) & {
    execute: (request: KVRequest, defaultValue?: KV[]) => Promise<KV[]>
  }
  /** fetch aggregated fields from the table: "KV" */
  KV_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: KV_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: KV_order_by[] | null
    /** filter the rows returned */
    where?: KV_bool_exp | null
  }) => KV_aggregatePromiseChain & {
    execute: (request: KV_aggregateRequest, defaultValue?: KV_aggregate) => Promise<KV_aggregate>
  }) &
    (KV_aggregatePromiseChain & {
      execute: (request: KV_aggregateRequest, defaultValue?: KV_aggregate) => Promise<KV_aggregate>
    })
  /** fetch data from the table: "KV" using primary key columns */
  KV_by_pk: (args: {
    id: Int
  }) => KVPromiseChain & { execute: (request: KVRequest, defaultValue?: KV | null) => Promise<KV | null> }
  /** fetch data from the table: "RewardRecord" */
  RewardRecord: ((args?: {
    /** distinct select on columns */
    distinct_on?: RewardRecord_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: RewardRecord_order_by[] | null
    /** filter the rows returned */
    where?: RewardRecord_bool_exp | null
  }) => { execute: (request: RewardRecordRequest, defaultValue?: RewardRecord[]) => Promise<RewardRecord[]> }) & {
    execute: (request: RewardRecordRequest, defaultValue?: RewardRecord[]) => Promise<RewardRecord[]>
  }
  /** fetch aggregated fields from the table: "RewardRecord" */
  RewardRecord_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: RewardRecord_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: RewardRecord_order_by[] | null
    /** filter the rows returned */
    where?: RewardRecord_bool_exp | null
  }) => RewardRecord_aggregatePromiseChain & {
    execute: (
      request: RewardRecord_aggregateRequest,
      defaultValue?: RewardRecord_aggregate,
    ) => Promise<RewardRecord_aggregate>
  }) &
    (RewardRecord_aggregatePromiseChain & {
      execute: (
        request: RewardRecord_aggregateRequest,
        defaultValue?: RewardRecord_aggregate,
      ) => Promise<RewardRecord_aggregate>
    })
  /** fetch data from the table: "RewardRecord" using primary key columns */
  RewardRecord_by_pk: (args: {
    id: Int
  }) => RewardRecordPromiseChain & {
    execute: (request: RewardRecordRequest, defaultValue?: RewardRecord | null) => Promise<RewardRecord | null>
  }
}

export interface subscription_rootObservableChain {
  /** fetch data from the table: "Candidate" */
  Candidate: ((args?: {
    /** distinct select on columns */
    distinct_on?: Candidate_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: Candidate_order_by[] | null
    /** filter the rows returned */
    where?: Candidate_bool_exp | null
  }) => { execute: (request: CandidateRequest, defaultValue?: Candidate[]) => Observable<Candidate[]> }) & {
    execute: (request: CandidateRequest, defaultValue?: Candidate[]) => Observable<Candidate[]>
  }
  /** fetch aggregated fields from the table: "Candidate" */
  Candidate_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: Candidate_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: Candidate_order_by[] | null
    /** filter the rows returned */
    where?: Candidate_bool_exp | null
  }) => Candidate_aggregateObservableChain & {
    execute: (request: Candidate_aggregateRequest, defaultValue?: Candidate_aggregate) => Observable<Candidate_aggregate>
  }) &
    (Candidate_aggregateObservableChain & {
      execute: (request: Candidate_aggregateRequest, defaultValue?: Candidate_aggregate) => Observable<Candidate_aggregate>
    })
  /** fetch data from the table: "Candidate" using primary key columns */
  Candidate_by_pk: (args: {
    id: Int
  }) => CandidateObservableChain & {
    execute: (request: CandidateRequest, defaultValue?: Candidate | null) => Observable<Candidate | null>
  }
  /** fetch data from the table: "KV" */
  KV: ((args?: {
    /** distinct select on columns */
    distinct_on?: KV_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: KV_order_by[] | null
    /** filter the rows returned */
    where?: KV_bool_exp | null
  }) => { execute: (request: KVRequest, defaultValue?: KV[]) => Observable<KV[]> }) & {
    execute: (request: KVRequest, defaultValue?: KV[]) => Observable<KV[]>
  }
  /** fetch aggregated fields from the table: "KV" */
  KV_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: KV_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: KV_order_by[] | null
    /** filter the rows returned */
    where?: KV_bool_exp | null
  }) => KV_aggregateObservableChain & {
    execute: (request: KV_aggregateRequest, defaultValue?: KV_aggregate) => Observable<KV_aggregate>
  }) &
    (KV_aggregateObservableChain & {
      execute: (request: KV_aggregateRequest, defaultValue?: KV_aggregate) => Observable<KV_aggregate>
    })
  /** fetch data from the table: "KV" using primary key columns */
  KV_by_pk: (args: {
    id: Int
  }) => KVObservableChain & { execute: (request: KVRequest, defaultValue?: KV | null) => Observable<KV | null> }
  /** fetch data from the table: "RewardRecord" */
  RewardRecord: ((args?: {
    /** distinct select on columns */
    distinct_on?: RewardRecord_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: RewardRecord_order_by[] | null
    /** filter the rows returned */
    where?: RewardRecord_bool_exp | null
  }) => { execute: (request: RewardRecordRequest, defaultValue?: RewardRecord[]) => Observable<RewardRecord[]> }) & {
    execute: (request: RewardRecordRequest, defaultValue?: RewardRecord[]) => Observable<RewardRecord[]>
  }
  /** fetch aggregated fields from the table: "RewardRecord" */
  RewardRecord_aggregate: ((args?: {
    /** distinct select on columns */
    distinct_on?: RewardRecord_select_column[] | null
    /** limit the number of rows returned */
    limit?: Int | null
    /** skip the first n rows. Use only with order_by */
    offset?: Int | null
    /** sort the rows by one or more columns */
    order_by?: RewardRecord_order_by[] | null
    /** filter the rows returned */
    where?: RewardRecord_bool_exp | null
  }) => RewardRecord_aggregateObservableChain & {
    execute: (
      request: RewardRecord_aggregateRequest,
      defaultValue?: RewardRecord_aggregate,
    ) => Observable<RewardRecord_aggregate>
  }) &
    (RewardRecord_aggregateObservableChain & {
      execute: (
        request: RewardRecord_aggregateRequest,
        defaultValue?: RewardRecord_aggregate,
      ) => Observable<RewardRecord_aggregate>
    })
  /** fetch data from the table: "RewardRecord" using primary key columns */
  RewardRecord_by_pk: (args: {
    id: Int
  }) => RewardRecordObservableChain & {
    execute: (request: RewardRecordRequest, defaultValue?: RewardRecord | null) => Observable<RewardRecord | null>
  }
}
