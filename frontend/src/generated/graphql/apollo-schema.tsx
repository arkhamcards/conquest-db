import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  jsonb: any;
  timestamp: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "all_card" */
export type All_Card = {
  __typename?: 'all_card';
  alt_art_investigator?: Maybe<Scalars['Boolean']>;
  alternate_of_code?: Maybe<Scalars['String']>;
  alternate_required_code?: Maybe<Scalars['String']>;
  back_illustrator?: Maybe<Scalars['String']>;
  back_link_id?: Maybe<Scalars['String']>;
  backimagesrc?: Maybe<Scalars['String']>;
  backimageurl?: Maybe<Scalars['String']>;
  clues?: Maybe<Scalars['Int']>;
  clues_fixed?: Maybe<Scalars['Boolean']>;
  code: Scalars['String'];
  cost?: Maybe<Scalars['Int']>;
  customization_options?: Maybe<Scalars['jsonb']>;
  deck_limit?: Maybe<Scalars['Int']>;
  deck_options?: Maybe<Scalars['jsonb']>;
  deck_requirements?: Maybe<Scalars['jsonb']>;
  doom?: Maybe<Scalars['Int']>;
  double_sided?: Maybe<Scalars['Boolean']>;
  duplicate_of_code?: Maybe<Scalars['String']>;
  encounter_code?: Maybe<Scalars['String']>;
  encounter_position?: Maybe<Scalars['Int']>;
  /** An array relationship */
  encounter_sets: Array<Card_Encounter_Set>;
  /** An aggregate relationship */
  encounter_sets_aggregate: Card_Encounter_Set_Aggregate;
  enemy_damage?: Maybe<Scalars['Int']>;
  enemy_evade?: Maybe<Scalars['Int']>;
  enemy_fight?: Maybe<Scalars['Int']>;
  enemy_horror?: Maybe<Scalars['Int']>;
  errata_date?: Maybe<Scalars['String']>;
  exceptional?: Maybe<Scalars['Boolean']>;
  exile?: Maybe<Scalars['Boolean']>;
  faction2_code?: Maybe<Scalars['String']>;
  faction3_code?: Maybe<Scalars['String']>;
  faction_code: Scalars['String'];
  gender?: Maybe<Gender_Enum>;
  heals_damage?: Maybe<Scalars['Boolean']>;
  heals_horror?: Maybe<Scalars['Boolean']>;
  health?: Maybe<Scalars['Int']>;
  health_per_investigator?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  illustrator?: Maybe<Scalars['String']>;
  imagesrc?: Maybe<Scalars['String']>;
  imageurl?: Maybe<Scalars['String']>;
  is_unique?: Maybe<Scalars['Boolean']>;
  linked?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  linked_card?: Maybe<All_Card>;
  myriad?: Maybe<Scalars['Boolean']>;
  official: Scalars['Boolean'];
  /** An object relationship */
  pack: Pack;
  pack_code: Scalars['String'];
  pack_position: Scalars['Int'];
  /** An array relationship */
  packs: Array<Card_Pack>;
  /** An aggregate relationship */
  packs_aggregate: Card_Pack_Aggregate;
  permanent?: Maybe<Scalars['Boolean']>;
  position: Scalars['Int'];
  preview?: Maybe<Scalars['Boolean']>;
  quantity: Scalars['Int'];
  real_back_flavor?: Maybe<Scalars['String']>;
  real_back_name?: Maybe<Scalars['String']>;
  real_back_text?: Maybe<Scalars['String']>;
  real_back_traits?: Maybe<Scalars['String']>;
  real_customization_change?: Maybe<Scalars['String']>;
  real_customization_text?: Maybe<Scalars['String']>;
  real_encounter_set_name?: Maybe<Scalars['String']>;
  real_flavor?: Maybe<Scalars['String']>;
  real_name: Scalars['String'];
  real_pack_name: Scalars['String'];
  real_slot?: Maybe<Scalars['String']>;
  real_subname?: Maybe<Scalars['String']>;
  real_taboo_text_change?: Maybe<Scalars['String']>;
  real_text?: Maybe<Scalars['String']>;
  real_traits?: Maybe<Scalars['String']>;
  restrictions?: Maybe<Scalars['jsonb']>;
  sanity?: Maybe<Scalars['Int']>;
  shroud?: Maybe<Scalars['Int']>;
  skill_agility?: Maybe<Scalars['Int']>;
  skill_combat?: Maybe<Scalars['Int']>;
  skill_intellect?: Maybe<Scalars['Int']>;
  skill_wild?: Maybe<Scalars['Int']>;
  skill_willpower?: Maybe<Scalars['Int']>;
  spoiler?: Maybe<Scalars['Boolean']>;
  stage?: Maybe<Scalars['Int']>;
  subtype_code?: Maybe<Scalars['String']>;
  taboo_placeholder?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  taboo_set?: Maybe<Taboo_Set>;
  taboo_set_id?: Maybe<Scalars['Int']>;
  taboo_xp?: Maybe<Scalars['Int']>;
  tags?: Maybe<Scalars['jsonb']>;
  /** An array relationship */
  translations: Array<All_Card_Text>;
  /** An aggregate relationship */
  translations_aggregate: All_Card_Text_Aggregate;
  /** An object relationship */
  type: Card_Type_Code;
  type_code: Card_Type_Code_Enum;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vengeance?: Maybe<Scalars['Int']>;
  version: Scalars['Int'];
  victory?: Maybe<Scalars['Int']>;
  xp?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "all_card" */
export type All_CardCustomization_OptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "all_card" */
export type All_CardDeck_OptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "all_card" */
export type All_CardDeck_RequirementsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "all_card" */
export type All_CardEncounter_SetsArgs = {
  distinct_on?: InputMaybe<Array<Card_Encounter_Set_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Encounter_Set_Order_By>>;
  where?: InputMaybe<Card_Encounter_Set_Bool_Exp>;
};


/** columns and relationships of "all_card" */
export type All_CardEncounter_Sets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Card_Encounter_Set_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Encounter_Set_Order_By>>;
  where?: InputMaybe<Card_Encounter_Set_Bool_Exp>;
};


/** columns and relationships of "all_card" */
export type All_CardPacksArgs = {
  distinct_on?: InputMaybe<Array<Card_Pack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Pack_Order_By>>;
  where?: InputMaybe<Card_Pack_Bool_Exp>;
};


/** columns and relationships of "all_card" */
export type All_CardPacks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Card_Pack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Pack_Order_By>>;
  where?: InputMaybe<Card_Pack_Bool_Exp>;
};


/** columns and relationships of "all_card" */
export type All_CardRestrictionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "all_card" */
export type All_CardTagsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "all_card" */
export type All_CardTranslationsArgs = {
  distinct_on?: InputMaybe<Array<All_Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<All_Card_Text_Order_By>>;
  where?: InputMaybe<All_Card_Text_Bool_Exp>;
};


/** columns and relationships of "all_card" */
export type All_CardTranslations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<All_Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<All_Card_Text_Order_By>>;
  where?: InputMaybe<All_Card_Text_Bool_Exp>;
};

/** aggregated selection of "all_card" */
export type All_Card_Aggregate = {
  __typename?: 'all_card_aggregate';
  aggregate?: Maybe<All_Card_Aggregate_Fields>;
  nodes: Array<All_Card>;
};

export type All_Card_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<All_Card_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<All_Card_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<All_Card_Aggregate_Bool_Exp_Count>;
};

export type All_Card_Aggregate_Bool_Exp_Bool_And = {
  arguments: All_Card_Select_Column_All_Card_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<All_Card_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type All_Card_Aggregate_Bool_Exp_Bool_Or = {
  arguments: All_Card_Select_Column_All_Card_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<All_Card_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type All_Card_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<All_Card_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<All_Card_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "all_card" */
export type All_Card_Aggregate_Fields = {
  __typename?: 'all_card_aggregate_fields';
  avg?: Maybe<All_Card_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<All_Card_Max_Fields>;
  min?: Maybe<All_Card_Min_Fields>;
  stddev?: Maybe<All_Card_Stddev_Fields>;
  stddev_pop?: Maybe<All_Card_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<All_Card_Stddev_Samp_Fields>;
  sum?: Maybe<All_Card_Sum_Fields>;
  var_pop?: Maybe<All_Card_Var_Pop_Fields>;
  var_samp?: Maybe<All_Card_Var_Samp_Fields>;
  variance?: Maybe<All_Card_Variance_Fields>;
};


/** aggregate fields of "all_card" */
export type All_Card_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<All_Card_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "all_card" */
export type All_Card_Aggregate_Order_By = {
  avg?: InputMaybe<All_Card_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<All_Card_Max_Order_By>;
  min?: InputMaybe<All_Card_Min_Order_By>;
  stddev?: InputMaybe<All_Card_Stddev_Order_By>;
  stddev_pop?: InputMaybe<All_Card_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<All_Card_Stddev_Samp_Order_By>;
  sum?: InputMaybe<All_Card_Sum_Order_By>;
  var_pop?: InputMaybe<All_Card_Var_Pop_Order_By>;
  var_samp?: InputMaybe<All_Card_Var_Samp_Order_By>;
  variance?: InputMaybe<All_Card_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type All_Card_Append_Input = {
  customization_options?: InputMaybe<Scalars['jsonb']>;
  deck_options?: InputMaybe<Scalars['jsonb']>;
  deck_requirements?: InputMaybe<Scalars['jsonb']>;
  restrictions?: InputMaybe<Scalars['jsonb']>;
  tags?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "all_card" */
export type All_Card_Arr_Rel_Insert_Input = {
  data: Array<All_Card_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<All_Card_On_Conflict>;
};

/** aggregate avg on columns */
export type All_Card_Avg_Fields = {
  __typename?: 'all_card_avg_fields';
  clues?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  deck_limit?: Maybe<Scalars['Float']>;
  doom?: Maybe<Scalars['Float']>;
  encounter_position?: Maybe<Scalars['Float']>;
  enemy_damage?: Maybe<Scalars['Float']>;
  enemy_evade?: Maybe<Scalars['Float']>;
  enemy_fight?: Maybe<Scalars['Float']>;
  enemy_horror?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  pack_position?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sanity?: Maybe<Scalars['Float']>;
  shroud?: Maybe<Scalars['Float']>;
  skill_agility?: Maybe<Scalars['Float']>;
  skill_combat?: Maybe<Scalars['Float']>;
  skill_intellect?: Maybe<Scalars['Float']>;
  skill_wild?: Maybe<Scalars['Float']>;
  skill_willpower?: Maybe<Scalars['Float']>;
  stage?: Maybe<Scalars['Float']>;
  taboo_set_id?: Maybe<Scalars['Float']>;
  taboo_xp?: Maybe<Scalars['Float']>;
  vengeance?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
  victory?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "all_card" */
export type All_Card_Avg_Order_By = {
  clues?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  deck_limit?: InputMaybe<Order_By>;
  doom?: InputMaybe<Order_By>;
  encounter_position?: InputMaybe<Order_By>;
  enemy_damage?: InputMaybe<Order_By>;
  enemy_evade?: InputMaybe<Order_By>;
  enemy_fight?: InputMaybe<Order_By>;
  enemy_horror?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  pack_position?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  sanity?: InputMaybe<Order_By>;
  shroud?: InputMaybe<Order_By>;
  skill_agility?: InputMaybe<Order_By>;
  skill_combat?: InputMaybe<Order_By>;
  skill_intellect?: InputMaybe<Order_By>;
  skill_wild?: InputMaybe<Order_By>;
  skill_willpower?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
  taboo_set_id?: InputMaybe<Order_By>;
  taboo_xp?: InputMaybe<Order_By>;
  vengeance?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  victory?: InputMaybe<Order_By>;
  xp?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "all_card". All fields are combined with a logical 'AND'. */
export type All_Card_Bool_Exp = {
  _and?: InputMaybe<Array<All_Card_Bool_Exp>>;
  _not?: InputMaybe<All_Card_Bool_Exp>;
  _or?: InputMaybe<Array<All_Card_Bool_Exp>>;
  alt_art_investigator?: InputMaybe<Boolean_Comparison_Exp>;
  alternate_of_code?: InputMaybe<String_Comparison_Exp>;
  alternate_required_code?: InputMaybe<String_Comparison_Exp>;
  back_illustrator?: InputMaybe<String_Comparison_Exp>;
  back_link_id?: InputMaybe<String_Comparison_Exp>;
  backimagesrc?: InputMaybe<String_Comparison_Exp>;
  backimageurl?: InputMaybe<String_Comparison_Exp>;
  clues?: InputMaybe<Int_Comparison_Exp>;
  clues_fixed?: InputMaybe<Boolean_Comparison_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  cost?: InputMaybe<Int_Comparison_Exp>;
  customization_options?: InputMaybe<Jsonb_Comparison_Exp>;
  deck_limit?: InputMaybe<Int_Comparison_Exp>;
  deck_options?: InputMaybe<Jsonb_Comparison_Exp>;
  deck_requirements?: InputMaybe<Jsonb_Comparison_Exp>;
  doom?: InputMaybe<Int_Comparison_Exp>;
  double_sided?: InputMaybe<Boolean_Comparison_Exp>;
  duplicate_of_code?: InputMaybe<String_Comparison_Exp>;
  encounter_code?: InputMaybe<String_Comparison_Exp>;
  encounter_position?: InputMaybe<Int_Comparison_Exp>;
  encounter_sets?: InputMaybe<Card_Encounter_Set_Bool_Exp>;
  encounter_sets_aggregate?: InputMaybe<Card_Encounter_Set_Aggregate_Bool_Exp>;
  enemy_damage?: InputMaybe<Int_Comparison_Exp>;
  enemy_evade?: InputMaybe<Int_Comparison_Exp>;
  enemy_fight?: InputMaybe<Int_Comparison_Exp>;
  enemy_horror?: InputMaybe<Int_Comparison_Exp>;
  errata_date?: InputMaybe<String_Comparison_Exp>;
  exceptional?: InputMaybe<Boolean_Comparison_Exp>;
  exile?: InputMaybe<Boolean_Comparison_Exp>;
  faction2_code?: InputMaybe<String_Comparison_Exp>;
  faction3_code?: InputMaybe<String_Comparison_Exp>;
  faction_code?: InputMaybe<String_Comparison_Exp>;
  gender?: InputMaybe<Gender_Enum_Comparison_Exp>;
  heals_damage?: InputMaybe<Boolean_Comparison_Exp>;
  heals_horror?: InputMaybe<Boolean_Comparison_Exp>;
  health?: InputMaybe<Int_Comparison_Exp>;
  health_per_investigator?: InputMaybe<Boolean_Comparison_Exp>;
  hidden?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  illustrator?: InputMaybe<String_Comparison_Exp>;
  imagesrc?: InputMaybe<String_Comparison_Exp>;
  imageurl?: InputMaybe<String_Comparison_Exp>;
  is_unique?: InputMaybe<Boolean_Comparison_Exp>;
  linked?: InputMaybe<Boolean_Comparison_Exp>;
  linked_card?: InputMaybe<All_Card_Bool_Exp>;
  myriad?: InputMaybe<Boolean_Comparison_Exp>;
  official?: InputMaybe<Boolean_Comparison_Exp>;
  pack?: InputMaybe<Pack_Bool_Exp>;
  pack_code?: InputMaybe<String_Comparison_Exp>;
  pack_position?: InputMaybe<Int_Comparison_Exp>;
  packs?: InputMaybe<Card_Pack_Bool_Exp>;
  packs_aggregate?: InputMaybe<Card_Pack_Aggregate_Bool_Exp>;
  permanent?: InputMaybe<Boolean_Comparison_Exp>;
  position?: InputMaybe<Int_Comparison_Exp>;
  preview?: InputMaybe<Boolean_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  real_back_flavor?: InputMaybe<String_Comparison_Exp>;
  real_back_name?: InputMaybe<String_Comparison_Exp>;
  real_back_text?: InputMaybe<String_Comparison_Exp>;
  real_back_traits?: InputMaybe<String_Comparison_Exp>;
  real_customization_change?: InputMaybe<String_Comparison_Exp>;
  real_customization_text?: InputMaybe<String_Comparison_Exp>;
  real_encounter_set_name?: InputMaybe<String_Comparison_Exp>;
  real_flavor?: InputMaybe<String_Comparison_Exp>;
  real_name?: InputMaybe<String_Comparison_Exp>;
  real_pack_name?: InputMaybe<String_Comparison_Exp>;
  real_slot?: InputMaybe<String_Comparison_Exp>;
  real_subname?: InputMaybe<String_Comparison_Exp>;
  real_taboo_text_change?: InputMaybe<String_Comparison_Exp>;
  real_text?: InputMaybe<String_Comparison_Exp>;
  real_traits?: InputMaybe<String_Comparison_Exp>;
  restrictions?: InputMaybe<Jsonb_Comparison_Exp>;
  sanity?: InputMaybe<Int_Comparison_Exp>;
  shroud?: InputMaybe<Int_Comparison_Exp>;
  skill_agility?: InputMaybe<Int_Comparison_Exp>;
  skill_combat?: InputMaybe<Int_Comparison_Exp>;
  skill_intellect?: InputMaybe<Int_Comparison_Exp>;
  skill_wild?: InputMaybe<Int_Comparison_Exp>;
  skill_willpower?: InputMaybe<Int_Comparison_Exp>;
  spoiler?: InputMaybe<Boolean_Comparison_Exp>;
  stage?: InputMaybe<Int_Comparison_Exp>;
  subtype_code?: InputMaybe<String_Comparison_Exp>;
  taboo_placeholder?: InputMaybe<Boolean_Comparison_Exp>;
  taboo_set?: InputMaybe<Taboo_Set_Bool_Exp>;
  taboo_set_id?: InputMaybe<Int_Comparison_Exp>;
  taboo_xp?: InputMaybe<Int_Comparison_Exp>;
  tags?: InputMaybe<Jsonb_Comparison_Exp>;
  translations?: InputMaybe<All_Card_Text_Bool_Exp>;
  translations_aggregate?: InputMaybe<All_Card_Text_Aggregate_Bool_Exp>;
  type?: InputMaybe<Card_Type_Code_Bool_Exp>;
  type_code?: InputMaybe<Card_Type_Code_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vengeance?: InputMaybe<Int_Comparison_Exp>;
  version?: InputMaybe<Int_Comparison_Exp>;
  victory?: InputMaybe<Int_Comparison_Exp>;
  xp?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "all_card" */
export enum All_Card_Constraint {
  /** unique or primary key constraint on columns "id" */
  AllCardIdKey = 'all_card_id_key',
  /** unique or primary key constraint on columns "id" */
  AllCardPkey = 'all_card_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type All_Card_Delete_At_Path_Input = {
  customization_options?: InputMaybe<Array<Scalars['String']>>;
  deck_options?: InputMaybe<Array<Scalars['String']>>;
  deck_requirements?: InputMaybe<Array<Scalars['String']>>;
  restrictions?: InputMaybe<Array<Scalars['String']>>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type All_Card_Delete_Elem_Input = {
  customization_options?: InputMaybe<Scalars['Int']>;
  deck_options?: InputMaybe<Scalars['Int']>;
  deck_requirements?: InputMaybe<Scalars['Int']>;
  restrictions?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type All_Card_Delete_Key_Input = {
  customization_options?: InputMaybe<Scalars['String']>;
  deck_options?: InputMaybe<Scalars['String']>;
  deck_requirements?: InputMaybe<Scalars['String']>;
  restrictions?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "all_card" */
export type All_Card_Inc_Input = {
  clues?: InputMaybe<Scalars['Int']>;
  cost?: InputMaybe<Scalars['Int']>;
  deck_limit?: InputMaybe<Scalars['Int']>;
  doom?: InputMaybe<Scalars['Int']>;
  encounter_position?: InputMaybe<Scalars['Int']>;
  enemy_damage?: InputMaybe<Scalars['Int']>;
  enemy_evade?: InputMaybe<Scalars['Int']>;
  enemy_fight?: InputMaybe<Scalars['Int']>;
  enemy_horror?: InputMaybe<Scalars['Int']>;
  health?: InputMaybe<Scalars['Int']>;
  pack_position?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  sanity?: InputMaybe<Scalars['Int']>;
  shroud?: InputMaybe<Scalars['Int']>;
  skill_agility?: InputMaybe<Scalars['Int']>;
  skill_combat?: InputMaybe<Scalars['Int']>;
  skill_intellect?: InputMaybe<Scalars['Int']>;
  skill_wild?: InputMaybe<Scalars['Int']>;
  skill_willpower?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Scalars['Int']>;
  taboo_set_id?: InputMaybe<Scalars['Int']>;
  taboo_xp?: InputMaybe<Scalars['Int']>;
  vengeance?: InputMaybe<Scalars['Int']>;
  version?: InputMaybe<Scalars['Int']>;
  victory?: InputMaybe<Scalars['Int']>;
  xp?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "all_card" */
export type All_Card_Insert_Input = {
  alt_art_investigator?: InputMaybe<Scalars['Boolean']>;
  alternate_of_code?: InputMaybe<Scalars['String']>;
  alternate_required_code?: InputMaybe<Scalars['String']>;
  back_illustrator?: InputMaybe<Scalars['String']>;
  back_link_id?: InputMaybe<Scalars['String']>;
  backimagesrc?: InputMaybe<Scalars['String']>;
  backimageurl?: InputMaybe<Scalars['String']>;
  clues?: InputMaybe<Scalars['Int']>;
  clues_fixed?: InputMaybe<Scalars['Boolean']>;
  code?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<Scalars['Int']>;
  customization_options?: InputMaybe<Scalars['jsonb']>;
  deck_limit?: InputMaybe<Scalars['Int']>;
  deck_options?: InputMaybe<Scalars['jsonb']>;
  deck_requirements?: InputMaybe<Scalars['jsonb']>;
  doom?: InputMaybe<Scalars['Int']>;
  double_sided?: InputMaybe<Scalars['Boolean']>;
  duplicate_of_code?: InputMaybe<Scalars['String']>;
  encounter_code?: InputMaybe<Scalars['String']>;
  encounter_position?: InputMaybe<Scalars['Int']>;
  encounter_sets?: InputMaybe<Card_Encounter_Set_Arr_Rel_Insert_Input>;
  enemy_damage?: InputMaybe<Scalars['Int']>;
  enemy_evade?: InputMaybe<Scalars['Int']>;
  enemy_fight?: InputMaybe<Scalars['Int']>;
  enemy_horror?: InputMaybe<Scalars['Int']>;
  errata_date?: InputMaybe<Scalars['String']>;
  exceptional?: InputMaybe<Scalars['Boolean']>;
  exile?: InputMaybe<Scalars['Boolean']>;
  faction2_code?: InputMaybe<Scalars['String']>;
  faction3_code?: InputMaybe<Scalars['String']>;
  faction_code?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender_Enum>;
  heals_damage?: InputMaybe<Scalars['Boolean']>;
  heals_horror?: InputMaybe<Scalars['Boolean']>;
  health?: InputMaybe<Scalars['Int']>;
  health_per_investigator?: InputMaybe<Scalars['Boolean']>;
  hidden?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  illustrator?: InputMaybe<Scalars['String']>;
  imagesrc?: InputMaybe<Scalars['String']>;
  imageurl?: InputMaybe<Scalars['String']>;
  is_unique?: InputMaybe<Scalars['Boolean']>;
  linked?: InputMaybe<Scalars['Boolean']>;
  linked_card?: InputMaybe<All_Card_Obj_Rel_Insert_Input>;
  myriad?: InputMaybe<Scalars['Boolean']>;
  official?: InputMaybe<Scalars['Boolean']>;
  pack?: InputMaybe<Pack_Obj_Rel_Insert_Input>;
  pack_code?: InputMaybe<Scalars['String']>;
  pack_position?: InputMaybe<Scalars['Int']>;
  packs?: InputMaybe<Card_Pack_Arr_Rel_Insert_Input>;
  permanent?: InputMaybe<Scalars['Boolean']>;
  position?: InputMaybe<Scalars['Int']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  quantity?: InputMaybe<Scalars['Int']>;
  real_back_flavor?: InputMaybe<Scalars['String']>;
  real_back_name?: InputMaybe<Scalars['String']>;
  real_back_text?: InputMaybe<Scalars['String']>;
  real_back_traits?: InputMaybe<Scalars['String']>;
  real_customization_change?: InputMaybe<Scalars['String']>;
  real_customization_text?: InputMaybe<Scalars['String']>;
  real_encounter_set_name?: InputMaybe<Scalars['String']>;
  real_flavor?: InputMaybe<Scalars['String']>;
  real_name?: InputMaybe<Scalars['String']>;
  real_pack_name?: InputMaybe<Scalars['String']>;
  real_slot?: InputMaybe<Scalars['String']>;
  real_subname?: InputMaybe<Scalars['String']>;
  real_taboo_text_change?: InputMaybe<Scalars['String']>;
  real_text?: InputMaybe<Scalars['String']>;
  real_traits?: InputMaybe<Scalars['String']>;
  restrictions?: InputMaybe<Scalars['jsonb']>;
  sanity?: InputMaybe<Scalars['Int']>;
  shroud?: InputMaybe<Scalars['Int']>;
  skill_agility?: InputMaybe<Scalars['Int']>;
  skill_combat?: InputMaybe<Scalars['Int']>;
  skill_intellect?: InputMaybe<Scalars['Int']>;
  skill_wild?: InputMaybe<Scalars['Int']>;
  skill_willpower?: InputMaybe<Scalars['Int']>;
  spoiler?: InputMaybe<Scalars['Boolean']>;
  stage?: InputMaybe<Scalars['Int']>;
  subtype_code?: InputMaybe<Scalars['String']>;
  taboo_placeholder?: InputMaybe<Scalars['Boolean']>;
  taboo_set?: InputMaybe<Taboo_Set_Obj_Rel_Insert_Input>;
  taboo_set_id?: InputMaybe<Scalars['Int']>;
  taboo_xp?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Scalars['jsonb']>;
  translations?: InputMaybe<All_Card_Text_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Card_Type_Code_Obj_Rel_Insert_Input>;
  type_code?: InputMaybe<Card_Type_Code_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  vengeance?: InputMaybe<Scalars['Int']>;
  version?: InputMaybe<Scalars['Int']>;
  victory?: InputMaybe<Scalars['Int']>;
  xp?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type All_Card_Max_Fields = {
  __typename?: 'all_card_max_fields';
  alternate_of_code?: Maybe<Scalars['String']>;
  alternate_required_code?: Maybe<Scalars['String']>;
  back_illustrator?: Maybe<Scalars['String']>;
  back_link_id?: Maybe<Scalars['String']>;
  backimagesrc?: Maybe<Scalars['String']>;
  backimageurl?: Maybe<Scalars['String']>;
  clues?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Int']>;
  deck_limit?: Maybe<Scalars['Int']>;
  doom?: Maybe<Scalars['Int']>;
  duplicate_of_code?: Maybe<Scalars['String']>;
  encounter_code?: Maybe<Scalars['String']>;
  encounter_position?: Maybe<Scalars['Int']>;
  enemy_damage?: Maybe<Scalars['Int']>;
  enemy_evade?: Maybe<Scalars['Int']>;
  enemy_fight?: Maybe<Scalars['Int']>;
  enemy_horror?: Maybe<Scalars['Int']>;
  errata_date?: Maybe<Scalars['String']>;
  faction2_code?: Maybe<Scalars['String']>;
  faction3_code?: Maybe<Scalars['String']>;
  faction_code?: Maybe<Scalars['String']>;
  health?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  illustrator?: Maybe<Scalars['String']>;
  imagesrc?: Maybe<Scalars['String']>;
  imageurl?: Maybe<Scalars['String']>;
  pack_code?: Maybe<Scalars['String']>;
  pack_position?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  real_back_flavor?: Maybe<Scalars['String']>;
  real_back_name?: Maybe<Scalars['String']>;
  real_back_text?: Maybe<Scalars['String']>;
  real_back_traits?: Maybe<Scalars['String']>;
  real_customization_change?: Maybe<Scalars['String']>;
  real_customization_text?: Maybe<Scalars['String']>;
  real_encounter_set_name?: Maybe<Scalars['String']>;
  real_flavor?: Maybe<Scalars['String']>;
  real_name?: Maybe<Scalars['String']>;
  real_pack_name?: Maybe<Scalars['String']>;
  real_slot?: Maybe<Scalars['String']>;
  real_subname?: Maybe<Scalars['String']>;
  real_taboo_text_change?: Maybe<Scalars['String']>;
  real_text?: Maybe<Scalars['String']>;
  real_traits?: Maybe<Scalars['String']>;
  sanity?: Maybe<Scalars['Int']>;
  shroud?: Maybe<Scalars['Int']>;
  skill_agility?: Maybe<Scalars['Int']>;
  skill_combat?: Maybe<Scalars['Int']>;
  skill_intellect?: Maybe<Scalars['Int']>;
  skill_wild?: Maybe<Scalars['Int']>;
  skill_willpower?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['Int']>;
  subtype_code?: Maybe<Scalars['String']>;
  taboo_set_id?: Maybe<Scalars['Int']>;
  taboo_xp?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vengeance?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['Int']>;
  victory?: Maybe<Scalars['Int']>;
  xp?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "all_card" */
export type All_Card_Max_Order_By = {
  alternate_of_code?: InputMaybe<Order_By>;
  alternate_required_code?: InputMaybe<Order_By>;
  back_illustrator?: InputMaybe<Order_By>;
  back_link_id?: InputMaybe<Order_By>;
  backimagesrc?: InputMaybe<Order_By>;
  backimageurl?: InputMaybe<Order_By>;
  clues?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  deck_limit?: InputMaybe<Order_By>;
  doom?: InputMaybe<Order_By>;
  duplicate_of_code?: InputMaybe<Order_By>;
  encounter_code?: InputMaybe<Order_By>;
  encounter_position?: InputMaybe<Order_By>;
  enemy_damage?: InputMaybe<Order_By>;
  enemy_evade?: InputMaybe<Order_By>;
  enemy_fight?: InputMaybe<Order_By>;
  enemy_horror?: InputMaybe<Order_By>;
  errata_date?: InputMaybe<Order_By>;
  faction2_code?: InputMaybe<Order_By>;
  faction3_code?: InputMaybe<Order_By>;
  faction_code?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  illustrator?: InputMaybe<Order_By>;
  imagesrc?: InputMaybe<Order_By>;
  imageurl?: InputMaybe<Order_By>;
  pack_code?: InputMaybe<Order_By>;
  pack_position?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  real_back_flavor?: InputMaybe<Order_By>;
  real_back_name?: InputMaybe<Order_By>;
  real_back_text?: InputMaybe<Order_By>;
  real_back_traits?: InputMaybe<Order_By>;
  real_customization_change?: InputMaybe<Order_By>;
  real_customization_text?: InputMaybe<Order_By>;
  real_encounter_set_name?: InputMaybe<Order_By>;
  real_flavor?: InputMaybe<Order_By>;
  real_name?: InputMaybe<Order_By>;
  real_pack_name?: InputMaybe<Order_By>;
  real_slot?: InputMaybe<Order_By>;
  real_subname?: InputMaybe<Order_By>;
  real_taboo_text_change?: InputMaybe<Order_By>;
  real_text?: InputMaybe<Order_By>;
  real_traits?: InputMaybe<Order_By>;
  sanity?: InputMaybe<Order_By>;
  shroud?: InputMaybe<Order_By>;
  skill_agility?: InputMaybe<Order_By>;
  skill_combat?: InputMaybe<Order_By>;
  skill_intellect?: InputMaybe<Order_By>;
  skill_wild?: InputMaybe<Order_By>;
  skill_willpower?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
  subtype_code?: InputMaybe<Order_By>;
  taboo_set_id?: InputMaybe<Order_By>;
  taboo_xp?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vengeance?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  victory?: InputMaybe<Order_By>;
  xp?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type All_Card_Min_Fields = {
  __typename?: 'all_card_min_fields';
  alternate_of_code?: Maybe<Scalars['String']>;
  alternate_required_code?: Maybe<Scalars['String']>;
  back_illustrator?: Maybe<Scalars['String']>;
  back_link_id?: Maybe<Scalars['String']>;
  backimagesrc?: Maybe<Scalars['String']>;
  backimageurl?: Maybe<Scalars['String']>;
  clues?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Int']>;
  deck_limit?: Maybe<Scalars['Int']>;
  doom?: Maybe<Scalars['Int']>;
  duplicate_of_code?: Maybe<Scalars['String']>;
  encounter_code?: Maybe<Scalars['String']>;
  encounter_position?: Maybe<Scalars['Int']>;
  enemy_damage?: Maybe<Scalars['Int']>;
  enemy_evade?: Maybe<Scalars['Int']>;
  enemy_fight?: Maybe<Scalars['Int']>;
  enemy_horror?: Maybe<Scalars['Int']>;
  errata_date?: Maybe<Scalars['String']>;
  faction2_code?: Maybe<Scalars['String']>;
  faction3_code?: Maybe<Scalars['String']>;
  faction_code?: Maybe<Scalars['String']>;
  health?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  illustrator?: Maybe<Scalars['String']>;
  imagesrc?: Maybe<Scalars['String']>;
  imageurl?: Maybe<Scalars['String']>;
  pack_code?: Maybe<Scalars['String']>;
  pack_position?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  real_back_flavor?: Maybe<Scalars['String']>;
  real_back_name?: Maybe<Scalars['String']>;
  real_back_text?: Maybe<Scalars['String']>;
  real_back_traits?: Maybe<Scalars['String']>;
  real_customization_change?: Maybe<Scalars['String']>;
  real_customization_text?: Maybe<Scalars['String']>;
  real_encounter_set_name?: Maybe<Scalars['String']>;
  real_flavor?: Maybe<Scalars['String']>;
  real_name?: Maybe<Scalars['String']>;
  real_pack_name?: Maybe<Scalars['String']>;
  real_slot?: Maybe<Scalars['String']>;
  real_subname?: Maybe<Scalars['String']>;
  real_taboo_text_change?: Maybe<Scalars['String']>;
  real_text?: Maybe<Scalars['String']>;
  real_traits?: Maybe<Scalars['String']>;
  sanity?: Maybe<Scalars['Int']>;
  shroud?: Maybe<Scalars['Int']>;
  skill_agility?: Maybe<Scalars['Int']>;
  skill_combat?: Maybe<Scalars['Int']>;
  skill_intellect?: Maybe<Scalars['Int']>;
  skill_wild?: Maybe<Scalars['Int']>;
  skill_willpower?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['Int']>;
  subtype_code?: Maybe<Scalars['String']>;
  taboo_set_id?: Maybe<Scalars['Int']>;
  taboo_xp?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vengeance?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['Int']>;
  victory?: Maybe<Scalars['Int']>;
  xp?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "all_card" */
export type All_Card_Min_Order_By = {
  alternate_of_code?: InputMaybe<Order_By>;
  alternate_required_code?: InputMaybe<Order_By>;
  back_illustrator?: InputMaybe<Order_By>;
  back_link_id?: InputMaybe<Order_By>;
  backimagesrc?: InputMaybe<Order_By>;
  backimageurl?: InputMaybe<Order_By>;
  clues?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  deck_limit?: InputMaybe<Order_By>;
  doom?: InputMaybe<Order_By>;
  duplicate_of_code?: InputMaybe<Order_By>;
  encounter_code?: InputMaybe<Order_By>;
  encounter_position?: InputMaybe<Order_By>;
  enemy_damage?: InputMaybe<Order_By>;
  enemy_evade?: InputMaybe<Order_By>;
  enemy_fight?: InputMaybe<Order_By>;
  enemy_horror?: InputMaybe<Order_By>;
  errata_date?: InputMaybe<Order_By>;
  faction2_code?: InputMaybe<Order_By>;
  faction3_code?: InputMaybe<Order_By>;
  faction_code?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  illustrator?: InputMaybe<Order_By>;
  imagesrc?: InputMaybe<Order_By>;
  imageurl?: InputMaybe<Order_By>;
  pack_code?: InputMaybe<Order_By>;
  pack_position?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  real_back_flavor?: InputMaybe<Order_By>;
  real_back_name?: InputMaybe<Order_By>;
  real_back_text?: InputMaybe<Order_By>;
  real_back_traits?: InputMaybe<Order_By>;
  real_customization_change?: InputMaybe<Order_By>;
  real_customization_text?: InputMaybe<Order_By>;
  real_encounter_set_name?: InputMaybe<Order_By>;
  real_flavor?: InputMaybe<Order_By>;
  real_name?: InputMaybe<Order_By>;
  real_pack_name?: InputMaybe<Order_By>;
  real_slot?: InputMaybe<Order_By>;
  real_subname?: InputMaybe<Order_By>;
  real_taboo_text_change?: InputMaybe<Order_By>;
  real_text?: InputMaybe<Order_By>;
  real_traits?: InputMaybe<Order_By>;
  sanity?: InputMaybe<Order_By>;
  shroud?: InputMaybe<Order_By>;
  skill_agility?: InputMaybe<Order_By>;
  skill_combat?: InputMaybe<Order_By>;
  skill_intellect?: InputMaybe<Order_By>;
  skill_wild?: InputMaybe<Order_By>;
  skill_willpower?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
  subtype_code?: InputMaybe<Order_By>;
  taboo_set_id?: InputMaybe<Order_By>;
  taboo_xp?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vengeance?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  victory?: InputMaybe<Order_By>;
  xp?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "all_card" */
export type All_Card_Mutation_Response = {
  __typename?: 'all_card_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<All_Card>;
};

/** input type for inserting object relation for remote table "all_card" */
export type All_Card_Obj_Rel_Insert_Input = {
  data: All_Card_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<All_Card_On_Conflict>;
};

/** on_conflict condition type for table "all_card" */
export type All_Card_On_Conflict = {
  constraint: All_Card_Constraint;
  update_columns?: Array<All_Card_Update_Column>;
  where?: InputMaybe<All_Card_Bool_Exp>;
};

/** Ordering options when selecting data from "all_card". */
export type All_Card_Order_By = {
  alt_art_investigator?: InputMaybe<Order_By>;
  alternate_of_code?: InputMaybe<Order_By>;
  alternate_required_code?: InputMaybe<Order_By>;
  back_illustrator?: InputMaybe<Order_By>;
  back_link_id?: InputMaybe<Order_By>;
  backimagesrc?: InputMaybe<Order_By>;
  backimageurl?: InputMaybe<Order_By>;
  clues?: InputMaybe<Order_By>;
  clues_fixed?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  customization_options?: InputMaybe<Order_By>;
  deck_limit?: InputMaybe<Order_By>;
  deck_options?: InputMaybe<Order_By>;
  deck_requirements?: InputMaybe<Order_By>;
  doom?: InputMaybe<Order_By>;
  double_sided?: InputMaybe<Order_By>;
  duplicate_of_code?: InputMaybe<Order_By>;
  encounter_code?: InputMaybe<Order_By>;
  encounter_position?: InputMaybe<Order_By>;
  encounter_sets_aggregate?: InputMaybe<Card_Encounter_Set_Aggregate_Order_By>;
  enemy_damage?: InputMaybe<Order_By>;
  enemy_evade?: InputMaybe<Order_By>;
  enemy_fight?: InputMaybe<Order_By>;
  enemy_horror?: InputMaybe<Order_By>;
  errata_date?: InputMaybe<Order_By>;
  exceptional?: InputMaybe<Order_By>;
  exile?: InputMaybe<Order_By>;
  faction2_code?: InputMaybe<Order_By>;
  faction3_code?: InputMaybe<Order_By>;
  faction_code?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  heals_damage?: InputMaybe<Order_By>;
  heals_horror?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  health_per_investigator?: InputMaybe<Order_By>;
  hidden?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  illustrator?: InputMaybe<Order_By>;
  imagesrc?: InputMaybe<Order_By>;
  imageurl?: InputMaybe<Order_By>;
  is_unique?: InputMaybe<Order_By>;
  linked?: InputMaybe<Order_By>;
  linked_card?: InputMaybe<All_Card_Order_By>;
  myriad?: InputMaybe<Order_By>;
  official?: InputMaybe<Order_By>;
  pack?: InputMaybe<Pack_Order_By>;
  pack_code?: InputMaybe<Order_By>;
  pack_position?: InputMaybe<Order_By>;
  packs_aggregate?: InputMaybe<Card_Pack_Aggregate_Order_By>;
  permanent?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  preview?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  real_back_flavor?: InputMaybe<Order_By>;
  real_back_name?: InputMaybe<Order_By>;
  real_back_text?: InputMaybe<Order_By>;
  real_back_traits?: InputMaybe<Order_By>;
  real_customization_change?: InputMaybe<Order_By>;
  real_customization_text?: InputMaybe<Order_By>;
  real_encounter_set_name?: InputMaybe<Order_By>;
  real_flavor?: InputMaybe<Order_By>;
  real_name?: InputMaybe<Order_By>;
  real_pack_name?: InputMaybe<Order_By>;
  real_slot?: InputMaybe<Order_By>;
  real_subname?: InputMaybe<Order_By>;
  real_taboo_text_change?: InputMaybe<Order_By>;
  real_text?: InputMaybe<Order_By>;
  real_traits?: InputMaybe<Order_By>;
  restrictions?: InputMaybe<Order_By>;
  sanity?: InputMaybe<Order_By>;
  shroud?: InputMaybe<Order_By>;
  skill_agility?: InputMaybe<Order_By>;
  skill_combat?: InputMaybe<Order_By>;
  skill_intellect?: InputMaybe<Order_By>;
  skill_wild?: InputMaybe<Order_By>;
  skill_willpower?: InputMaybe<Order_By>;
  spoiler?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
  subtype_code?: InputMaybe<Order_By>;
  taboo_placeholder?: InputMaybe<Order_By>;
  taboo_set?: InputMaybe<Taboo_Set_Order_By>;
  taboo_set_id?: InputMaybe<Order_By>;
  taboo_xp?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  translations_aggregate?: InputMaybe<All_Card_Text_Aggregate_Order_By>;
  type?: InputMaybe<Card_Type_Code_Order_By>;
  type_code?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vengeance?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  victory?: InputMaybe<Order_By>;
  xp?: InputMaybe<Order_By>;
};

/** primary key columns input for table: all_card */
export type All_Card_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type All_Card_Prepend_Input = {
  customization_options?: InputMaybe<Scalars['jsonb']>;
  deck_options?: InputMaybe<Scalars['jsonb']>;
  deck_requirements?: InputMaybe<Scalars['jsonb']>;
  restrictions?: InputMaybe<Scalars['jsonb']>;
  tags?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "all_card" */
export enum All_Card_Select_Column {
  /** column name */
  AltArtInvestigator = 'alt_art_investigator',
  /** column name */
  AlternateOfCode = 'alternate_of_code',
  /** column name */
  AlternateRequiredCode = 'alternate_required_code',
  /** column name */
  BackIllustrator = 'back_illustrator',
  /** column name */
  BackLinkId = 'back_link_id',
  /** column name */
  Backimagesrc = 'backimagesrc',
  /** column name */
  Backimageurl = 'backimageurl',
  /** column name */
  Clues = 'clues',
  /** column name */
  CluesFixed = 'clues_fixed',
  /** column name */
  Code = 'code',
  /** column name */
  Cost = 'cost',
  /** column name */
  CustomizationOptions = 'customization_options',
  /** column name */
  DeckLimit = 'deck_limit',
  /** column name */
  DeckOptions = 'deck_options',
  /** column name */
  DeckRequirements = 'deck_requirements',
  /** column name */
  Doom = 'doom',
  /** column name */
  DoubleSided = 'double_sided',
  /** column name */
  DuplicateOfCode = 'duplicate_of_code',
  /** column name */
  EncounterCode = 'encounter_code',
  /** column name */
  EncounterPosition = 'encounter_position',
  /** column name */
  EnemyDamage = 'enemy_damage',
  /** column name */
  EnemyEvade = 'enemy_evade',
  /** column name */
  EnemyFight = 'enemy_fight',
  /** column name */
  EnemyHorror = 'enemy_horror',
  /** column name */
  ErrataDate = 'errata_date',
  /** column name */
  Exceptional = 'exceptional',
  /** column name */
  Exile = 'exile',
  /** column name */
  Faction2Code = 'faction2_code',
  /** column name */
  Faction3Code = 'faction3_code',
  /** column name */
  FactionCode = 'faction_code',
  /** column name */
  Gender = 'gender',
  /** column name */
  HealsDamage = 'heals_damage',
  /** column name */
  HealsHorror = 'heals_horror',
  /** column name */
  Health = 'health',
  /** column name */
  HealthPerInvestigator = 'health_per_investigator',
  /** column name */
  Hidden = 'hidden',
  /** column name */
  Id = 'id',
  /** column name */
  Illustrator = 'illustrator',
  /** column name */
  Imagesrc = 'imagesrc',
  /** column name */
  Imageurl = 'imageurl',
  /** column name */
  IsUnique = 'is_unique',
  /** column name */
  Linked = 'linked',
  /** column name */
  Myriad = 'myriad',
  /** column name */
  Official = 'official',
  /** column name */
  PackCode = 'pack_code',
  /** column name */
  PackPosition = 'pack_position',
  /** column name */
  Permanent = 'permanent',
  /** column name */
  Position = 'position',
  /** column name */
  Preview = 'preview',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  RealBackFlavor = 'real_back_flavor',
  /** column name */
  RealBackName = 'real_back_name',
  /** column name */
  RealBackText = 'real_back_text',
  /** column name */
  RealBackTraits = 'real_back_traits',
  /** column name */
  RealCustomizationChange = 'real_customization_change',
  /** column name */
  RealCustomizationText = 'real_customization_text',
  /** column name */
  RealEncounterSetName = 'real_encounter_set_name',
  /** column name */
  RealFlavor = 'real_flavor',
  /** column name */
  RealName = 'real_name',
  /** column name */
  RealPackName = 'real_pack_name',
  /** column name */
  RealSlot = 'real_slot',
  /** column name */
  RealSubname = 'real_subname',
  /** column name */
  RealTabooTextChange = 'real_taboo_text_change',
  /** column name */
  RealText = 'real_text',
  /** column name */
  RealTraits = 'real_traits',
  /** column name */
  Restrictions = 'restrictions',
  /** column name */
  Sanity = 'sanity',
  /** column name */
  Shroud = 'shroud',
  /** column name */
  SkillAgility = 'skill_agility',
  /** column name */
  SkillCombat = 'skill_combat',
  /** column name */
  SkillIntellect = 'skill_intellect',
  /** column name */
  SkillWild = 'skill_wild',
  /** column name */
  SkillWillpower = 'skill_willpower',
  /** column name */
  Spoiler = 'spoiler',
  /** column name */
  Stage = 'stage',
  /** column name */
  SubtypeCode = 'subtype_code',
  /** column name */
  TabooPlaceholder = 'taboo_placeholder',
  /** column name */
  TabooSetId = 'taboo_set_id',
  /** column name */
  TabooXp = 'taboo_xp',
  /** column name */
  Tags = 'tags',
  /** column name */
  TypeCode = 'type_code',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Vengeance = 'vengeance',
  /** column name */
  Version = 'version',
  /** column name */
  Victory = 'victory',
  /** column name */
  Xp = 'xp'
}

/** select "all_card_aggregate_bool_exp_bool_and_arguments_columns" columns of table "all_card" */
export enum All_Card_Select_Column_All_Card_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  AltArtInvestigator = 'alt_art_investigator',
  /** column name */
  CluesFixed = 'clues_fixed',
  /** column name */
  DoubleSided = 'double_sided',
  /** column name */
  Exceptional = 'exceptional',
  /** column name */
  Exile = 'exile',
  /** column name */
  HealsDamage = 'heals_damage',
  /** column name */
  HealsHorror = 'heals_horror',
  /** column name */
  HealthPerInvestigator = 'health_per_investigator',
  /** column name */
  Hidden = 'hidden',
  /** column name */
  IsUnique = 'is_unique',
  /** column name */
  Linked = 'linked',
  /** column name */
  Myriad = 'myriad',
  /** column name */
  Official = 'official',
  /** column name */
  Permanent = 'permanent',
  /** column name */
  Preview = 'preview',
  /** column name */
  Spoiler = 'spoiler',
  /** column name */
  TabooPlaceholder = 'taboo_placeholder'
}

/** select "all_card_aggregate_bool_exp_bool_or_arguments_columns" columns of table "all_card" */
export enum All_Card_Select_Column_All_Card_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  AltArtInvestigator = 'alt_art_investigator',
  /** column name */
  CluesFixed = 'clues_fixed',
  /** column name */
  DoubleSided = 'double_sided',
  /** column name */
  Exceptional = 'exceptional',
  /** column name */
  Exile = 'exile',
  /** column name */
  HealsDamage = 'heals_damage',
  /** column name */
  HealsHorror = 'heals_horror',
  /** column name */
  HealthPerInvestigator = 'health_per_investigator',
  /** column name */
  Hidden = 'hidden',
  /** column name */
  IsUnique = 'is_unique',
  /** column name */
  Linked = 'linked',
  /** column name */
  Myriad = 'myriad',
  /** column name */
  Official = 'official',
  /** column name */
  Permanent = 'permanent',
  /** column name */
  Preview = 'preview',
  /** column name */
  Spoiler = 'spoiler',
  /** column name */
  TabooPlaceholder = 'taboo_placeholder'
}

/** input type for updating data in table "all_card" */
export type All_Card_Set_Input = {
  alt_art_investigator?: InputMaybe<Scalars['Boolean']>;
  alternate_of_code?: InputMaybe<Scalars['String']>;
  alternate_required_code?: InputMaybe<Scalars['String']>;
  back_illustrator?: InputMaybe<Scalars['String']>;
  back_link_id?: InputMaybe<Scalars['String']>;
  backimagesrc?: InputMaybe<Scalars['String']>;
  backimageurl?: InputMaybe<Scalars['String']>;
  clues?: InputMaybe<Scalars['Int']>;
  clues_fixed?: InputMaybe<Scalars['Boolean']>;
  code?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<Scalars['Int']>;
  customization_options?: InputMaybe<Scalars['jsonb']>;
  deck_limit?: InputMaybe<Scalars['Int']>;
  deck_options?: InputMaybe<Scalars['jsonb']>;
  deck_requirements?: InputMaybe<Scalars['jsonb']>;
  doom?: InputMaybe<Scalars['Int']>;
  double_sided?: InputMaybe<Scalars['Boolean']>;
  duplicate_of_code?: InputMaybe<Scalars['String']>;
  encounter_code?: InputMaybe<Scalars['String']>;
  encounter_position?: InputMaybe<Scalars['Int']>;
  enemy_damage?: InputMaybe<Scalars['Int']>;
  enemy_evade?: InputMaybe<Scalars['Int']>;
  enemy_fight?: InputMaybe<Scalars['Int']>;
  enemy_horror?: InputMaybe<Scalars['Int']>;
  errata_date?: InputMaybe<Scalars['String']>;
  exceptional?: InputMaybe<Scalars['Boolean']>;
  exile?: InputMaybe<Scalars['Boolean']>;
  faction2_code?: InputMaybe<Scalars['String']>;
  faction3_code?: InputMaybe<Scalars['String']>;
  faction_code?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender_Enum>;
  heals_damage?: InputMaybe<Scalars['Boolean']>;
  heals_horror?: InputMaybe<Scalars['Boolean']>;
  health?: InputMaybe<Scalars['Int']>;
  health_per_investigator?: InputMaybe<Scalars['Boolean']>;
  hidden?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  illustrator?: InputMaybe<Scalars['String']>;
  imagesrc?: InputMaybe<Scalars['String']>;
  imageurl?: InputMaybe<Scalars['String']>;
  is_unique?: InputMaybe<Scalars['Boolean']>;
  linked?: InputMaybe<Scalars['Boolean']>;
  myriad?: InputMaybe<Scalars['Boolean']>;
  official?: InputMaybe<Scalars['Boolean']>;
  pack_code?: InputMaybe<Scalars['String']>;
  pack_position?: InputMaybe<Scalars['Int']>;
  permanent?: InputMaybe<Scalars['Boolean']>;
  position?: InputMaybe<Scalars['Int']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  quantity?: InputMaybe<Scalars['Int']>;
  real_back_flavor?: InputMaybe<Scalars['String']>;
  real_back_name?: InputMaybe<Scalars['String']>;
  real_back_text?: InputMaybe<Scalars['String']>;
  real_back_traits?: InputMaybe<Scalars['String']>;
  real_customization_change?: InputMaybe<Scalars['String']>;
  real_customization_text?: InputMaybe<Scalars['String']>;
  real_encounter_set_name?: InputMaybe<Scalars['String']>;
  real_flavor?: InputMaybe<Scalars['String']>;
  real_name?: InputMaybe<Scalars['String']>;
  real_pack_name?: InputMaybe<Scalars['String']>;
  real_slot?: InputMaybe<Scalars['String']>;
  real_subname?: InputMaybe<Scalars['String']>;
  real_taboo_text_change?: InputMaybe<Scalars['String']>;
  real_text?: InputMaybe<Scalars['String']>;
  real_traits?: InputMaybe<Scalars['String']>;
  restrictions?: InputMaybe<Scalars['jsonb']>;
  sanity?: InputMaybe<Scalars['Int']>;
  shroud?: InputMaybe<Scalars['Int']>;
  skill_agility?: InputMaybe<Scalars['Int']>;
  skill_combat?: InputMaybe<Scalars['Int']>;
  skill_intellect?: InputMaybe<Scalars['Int']>;
  skill_wild?: InputMaybe<Scalars['Int']>;
  skill_willpower?: InputMaybe<Scalars['Int']>;
  spoiler?: InputMaybe<Scalars['Boolean']>;
  stage?: InputMaybe<Scalars['Int']>;
  subtype_code?: InputMaybe<Scalars['String']>;
  taboo_placeholder?: InputMaybe<Scalars['Boolean']>;
  taboo_set_id?: InputMaybe<Scalars['Int']>;
  taboo_xp?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Scalars['jsonb']>;
  type_code?: InputMaybe<Card_Type_Code_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  vengeance?: InputMaybe<Scalars['Int']>;
  version?: InputMaybe<Scalars['Int']>;
  victory?: InputMaybe<Scalars['Int']>;
  xp?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type All_Card_Stddev_Fields = {
  __typename?: 'all_card_stddev_fields';
  clues?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  deck_limit?: Maybe<Scalars['Float']>;
  doom?: Maybe<Scalars['Float']>;
  encounter_position?: Maybe<Scalars['Float']>;
  enemy_damage?: Maybe<Scalars['Float']>;
  enemy_evade?: Maybe<Scalars['Float']>;
  enemy_fight?: Maybe<Scalars['Float']>;
  enemy_horror?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  pack_position?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sanity?: Maybe<Scalars['Float']>;
  shroud?: Maybe<Scalars['Float']>;
  skill_agility?: Maybe<Scalars['Float']>;
  skill_combat?: Maybe<Scalars['Float']>;
  skill_intellect?: Maybe<Scalars['Float']>;
  skill_wild?: Maybe<Scalars['Float']>;
  skill_willpower?: Maybe<Scalars['Float']>;
  stage?: Maybe<Scalars['Float']>;
  taboo_set_id?: Maybe<Scalars['Float']>;
  taboo_xp?: Maybe<Scalars['Float']>;
  vengeance?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
  victory?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "all_card" */
export type All_Card_Stddev_Order_By = {
  clues?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  deck_limit?: InputMaybe<Order_By>;
  doom?: InputMaybe<Order_By>;
  encounter_position?: InputMaybe<Order_By>;
  enemy_damage?: InputMaybe<Order_By>;
  enemy_evade?: InputMaybe<Order_By>;
  enemy_fight?: InputMaybe<Order_By>;
  enemy_horror?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  pack_position?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  sanity?: InputMaybe<Order_By>;
  shroud?: InputMaybe<Order_By>;
  skill_agility?: InputMaybe<Order_By>;
  skill_combat?: InputMaybe<Order_By>;
  skill_intellect?: InputMaybe<Order_By>;
  skill_wild?: InputMaybe<Order_By>;
  skill_willpower?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
  taboo_set_id?: InputMaybe<Order_By>;
  taboo_xp?: InputMaybe<Order_By>;
  vengeance?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  victory?: InputMaybe<Order_By>;
  xp?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type All_Card_Stddev_Pop_Fields = {
  __typename?: 'all_card_stddev_pop_fields';
  clues?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  deck_limit?: Maybe<Scalars['Float']>;
  doom?: Maybe<Scalars['Float']>;
  encounter_position?: Maybe<Scalars['Float']>;
  enemy_damage?: Maybe<Scalars['Float']>;
  enemy_evade?: Maybe<Scalars['Float']>;
  enemy_fight?: Maybe<Scalars['Float']>;
  enemy_horror?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  pack_position?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sanity?: Maybe<Scalars['Float']>;
  shroud?: Maybe<Scalars['Float']>;
  skill_agility?: Maybe<Scalars['Float']>;
  skill_combat?: Maybe<Scalars['Float']>;
  skill_intellect?: Maybe<Scalars['Float']>;
  skill_wild?: Maybe<Scalars['Float']>;
  skill_willpower?: Maybe<Scalars['Float']>;
  stage?: Maybe<Scalars['Float']>;
  taboo_set_id?: Maybe<Scalars['Float']>;
  taboo_xp?: Maybe<Scalars['Float']>;
  vengeance?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
  victory?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "all_card" */
export type All_Card_Stddev_Pop_Order_By = {
  clues?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  deck_limit?: InputMaybe<Order_By>;
  doom?: InputMaybe<Order_By>;
  encounter_position?: InputMaybe<Order_By>;
  enemy_damage?: InputMaybe<Order_By>;
  enemy_evade?: InputMaybe<Order_By>;
  enemy_fight?: InputMaybe<Order_By>;
  enemy_horror?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  pack_position?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  sanity?: InputMaybe<Order_By>;
  shroud?: InputMaybe<Order_By>;
  skill_agility?: InputMaybe<Order_By>;
  skill_combat?: InputMaybe<Order_By>;
  skill_intellect?: InputMaybe<Order_By>;
  skill_wild?: InputMaybe<Order_By>;
  skill_willpower?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
  taboo_set_id?: InputMaybe<Order_By>;
  taboo_xp?: InputMaybe<Order_By>;
  vengeance?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  victory?: InputMaybe<Order_By>;
  xp?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type All_Card_Stddev_Samp_Fields = {
  __typename?: 'all_card_stddev_samp_fields';
  clues?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  deck_limit?: Maybe<Scalars['Float']>;
  doom?: Maybe<Scalars['Float']>;
  encounter_position?: Maybe<Scalars['Float']>;
  enemy_damage?: Maybe<Scalars['Float']>;
  enemy_evade?: Maybe<Scalars['Float']>;
  enemy_fight?: Maybe<Scalars['Float']>;
  enemy_horror?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  pack_position?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sanity?: Maybe<Scalars['Float']>;
  shroud?: Maybe<Scalars['Float']>;
  skill_agility?: Maybe<Scalars['Float']>;
  skill_combat?: Maybe<Scalars['Float']>;
  skill_intellect?: Maybe<Scalars['Float']>;
  skill_wild?: Maybe<Scalars['Float']>;
  skill_willpower?: Maybe<Scalars['Float']>;
  stage?: Maybe<Scalars['Float']>;
  taboo_set_id?: Maybe<Scalars['Float']>;
  taboo_xp?: Maybe<Scalars['Float']>;
  vengeance?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
  victory?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "all_card" */
export type All_Card_Stddev_Samp_Order_By = {
  clues?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  deck_limit?: InputMaybe<Order_By>;
  doom?: InputMaybe<Order_By>;
  encounter_position?: InputMaybe<Order_By>;
  enemy_damage?: InputMaybe<Order_By>;
  enemy_evade?: InputMaybe<Order_By>;
  enemy_fight?: InputMaybe<Order_By>;
  enemy_horror?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  pack_position?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  sanity?: InputMaybe<Order_By>;
  shroud?: InputMaybe<Order_By>;
  skill_agility?: InputMaybe<Order_By>;
  skill_combat?: InputMaybe<Order_By>;
  skill_intellect?: InputMaybe<Order_By>;
  skill_wild?: InputMaybe<Order_By>;
  skill_willpower?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
  taboo_set_id?: InputMaybe<Order_By>;
  taboo_xp?: InputMaybe<Order_By>;
  vengeance?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  victory?: InputMaybe<Order_By>;
  xp?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "all_card" */
export type All_Card_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: All_Card_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type All_Card_Stream_Cursor_Value_Input = {
  alt_art_investigator?: InputMaybe<Scalars['Boolean']>;
  alternate_of_code?: InputMaybe<Scalars['String']>;
  alternate_required_code?: InputMaybe<Scalars['String']>;
  back_illustrator?: InputMaybe<Scalars['String']>;
  back_link_id?: InputMaybe<Scalars['String']>;
  backimagesrc?: InputMaybe<Scalars['String']>;
  backimageurl?: InputMaybe<Scalars['String']>;
  clues?: InputMaybe<Scalars['Int']>;
  clues_fixed?: InputMaybe<Scalars['Boolean']>;
  code?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<Scalars['Int']>;
  customization_options?: InputMaybe<Scalars['jsonb']>;
  deck_limit?: InputMaybe<Scalars['Int']>;
  deck_options?: InputMaybe<Scalars['jsonb']>;
  deck_requirements?: InputMaybe<Scalars['jsonb']>;
  doom?: InputMaybe<Scalars['Int']>;
  double_sided?: InputMaybe<Scalars['Boolean']>;
  duplicate_of_code?: InputMaybe<Scalars['String']>;
  encounter_code?: InputMaybe<Scalars['String']>;
  encounter_position?: InputMaybe<Scalars['Int']>;
  enemy_damage?: InputMaybe<Scalars['Int']>;
  enemy_evade?: InputMaybe<Scalars['Int']>;
  enemy_fight?: InputMaybe<Scalars['Int']>;
  enemy_horror?: InputMaybe<Scalars['Int']>;
  errata_date?: InputMaybe<Scalars['String']>;
  exceptional?: InputMaybe<Scalars['Boolean']>;
  exile?: InputMaybe<Scalars['Boolean']>;
  faction2_code?: InputMaybe<Scalars['String']>;
  faction3_code?: InputMaybe<Scalars['String']>;
  faction_code?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender_Enum>;
  heals_damage?: InputMaybe<Scalars['Boolean']>;
  heals_horror?: InputMaybe<Scalars['Boolean']>;
  health?: InputMaybe<Scalars['Int']>;
  health_per_investigator?: InputMaybe<Scalars['Boolean']>;
  hidden?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  illustrator?: InputMaybe<Scalars['String']>;
  imagesrc?: InputMaybe<Scalars['String']>;
  imageurl?: InputMaybe<Scalars['String']>;
  is_unique?: InputMaybe<Scalars['Boolean']>;
  linked?: InputMaybe<Scalars['Boolean']>;
  myriad?: InputMaybe<Scalars['Boolean']>;
  official?: InputMaybe<Scalars['Boolean']>;
  pack_code?: InputMaybe<Scalars['String']>;
  pack_position?: InputMaybe<Scalars['Int']>;
  permanent?: InputMaybe<Scalars['Boolean']>;
  position?: InputMaybe<Scalars['Int']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  quantity?: InputMaybe<Scalars['Int']>;
  real_back_flavor?: InputMaybe<Scalars['String']>;
  real_back_name?: InputMaybe<Scalars['String']>;
  real_back_text?: InputMaybe<Scalars['String']>;
  real_back_traits?: InputMaybe<Scalars['String']>;
  real_customization_change?: InputMaybe<Scalars['String']>;
  real_customization_text?: InputMaybe<Scalars['String']>;
  real_encounter_set_name?: InputMaybe<Scalars['String']>;
  real_flavor?: InputMaybe<Scalars['String']>;
  real_name?: InputMaybe<Scalars['String']>;
  real_pack_name?: InputMaybe<Scalars['String']>;
  real_slot?: InputMaybe<Scalars['String']>;
  real_subname?: InputMaybe<Scalars['String']>;
  real_taboo_text_change?: InputMaybe<Scalars['String']>;
  real_text?: InputMaybe<Scalars['String']>;
  real_traits?: InputMaybe<Scalars['String']>;
  restrictions?: InputMaybe<Scalars['jsonb']>;
  sanity?: InputMaybe<Scalars['Int']>;
  shroud?: InputMaybe<Scalars['Int']>;
  skill_agility?: InputMaybe<Scalars['Int']>;
  skill_combat?: InputMaybe<Scalars['Int']>;
  skill_intellect?: InputMaybe<Scalars['Int']>;
  skill_wild?: InputMaybe<Scalars['Int']>;
  skill_willpower?: InputMaybe<Scalars['Int']>;
  spoiler?: InputMaybe<Scalars['Boolean']>;
  stage?: InputMaybe<Scalars['Int']>;
  subtype_code?: InputMaybe<Scalars['String']>;
  taboo_placeholder?: InputMaybe<Scalars['Boolean']>;
  taboo_set_id?: InputMaybe<Scalars['Int']>;
  taboo_xp?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Scalars['jsonb']>;
  type_code?: InputMaybe<Card_Type_Code_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  vengeance?: InputMaybe<Scalars['Int']>;
  version?: InputMaybe<Scalars['Int']>;
  victory?: InputMaybe<Scalars['Int']>;
  xp?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type All_Card_Sum_Fields = {
  __typename?: 'all_card_sum_fields';
  clues?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  deck_limit?: Maybe<Scalars['Int']>;
  doom?: Maybe<Scalars['Int']>;
  encounter_position?: Maybe<Scalars['Int']>;
  enemy_damage?: Maybe<Scalars['Int']>;
  enemy_evade?: Maybe<Scalars['Int']>;
  enemy_fight?: Maybe<Scalars['Int']>;
  enemy_horror?: Maybe<Scalars['Int']>;
  health?: Maybe<Scalars['Int']>;
  pack_position?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  sanity?: Maybe<Scalars['Int']>;
  shroud?: Maybe<Scalars['Int']>;
  skill_agility?: Maybe<Scalars['Int']>;
  skill_combat?: Maybe<Scalars['Int']>;
  skill_intellect?: Maybe<Scalars['Int']>;
  skill_wild?: Maybe<Scalars['Int']>;
  skill_willpower?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['Int']>;
  taboo_set_id?: Maybe<Scalars['Int']>;
  taboo_xp?: Maybe<Scalars['Int']>;
  vengeance?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['Int']>;
  victory?: Maybe<Scalars['Int']>;
  xp?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "all_card" */
export type All_Card_Sum_Order_By = {
  clues?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  deck_limit?: InputMaybe<Order_By>;
  doom?: InputMaybe<Order_By>;
  encounter_position?: InputMaybe<Order_By>;
  enemy_damage?: InputMaybe<Order_By>;
  enemy_evade?: InputMaybe<Order_By>;
  enemy_fight?: InputMaybe<Order_By>;
  enemy_horror?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  pack_position?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  sanity?: InputMaybe<Order_By>;
  shroud?: InputMaybe<Order_By>;
  skill_agility?: InputMaybe<Order_By>;
  skill_combat?: InputMaybe<Order_By>;
  skill_intellect?: InputMaybe<Order_By>;
  skill_wild?: InputMaybe<Order_By>;
  skill_willpower?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
  taboo_set_id?: InputMaybe<Order_By>;
  taboo_xp?: InputMaybe<Order_By>;
  vengeance?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  victory?: InputMaybe<Order_By>;
  xp?: InputMaybe<Order_By>;
};

/** columns and relationships of "all_card_text" */
export type All_Card_Text = {
  __typename?: 'all_card_text';
  back_flavor?: Maybe<Scalars['String']>;
  back_name?: Maybe<Scalars['String']>;
  back_text?: Maybe<Scalars['String']>;
  back_traits?: Maybe<Scalars['String']>;
  customization_change?: Maybe<Scalars['String']>;
  customization_text?: Maybe<Scalars['String']>;
  encounter_name?: Maybe<Scalars['String']>;
  flavor?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  locale: Scalars['String'];
  name: Scalars['String'];
  slot?: Maybe<Scalars['String']>;
  subname?: Maybe<Scalars['String']>;
  taboo_text_change?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  traits?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "all_card_text" */
export type All_Card_Text_Aggregate = {
  __typename?: 'all_card_text_aggregate';
  aggregate?: Maybe<All_Card_Text_Aggregate_Fields>;
  nodes: Array<All_Card_Text>;
};

export type All_Card_Text_Aggregate_Bool_Exp = {
  count?: InputMaybe<All_Card_Text_Aggregate_Bool_Exp_Count>;
};

export type All_Card_Text_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<All_Card_Text_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<All_Card_Text_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "all_card_text" */
export type All_Card_Text_Aggregate_Fields = {
  __typename?: 'all_card_text_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<All_Card_Text_Max_Fields>;
  min?: Maybe<All_Card_Text_Min_Fields>;
};


/** aggregate fields of "all_card_text" */
export type All_Card_Text_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<All_Card_Text_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "all_card_text" */
export type All_Card_Text_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<All_Card_Text_Max_Order_By>;
  min?: InputMaybe<All_Card_Text_Min_Order_By>;
};

/** input type for inserting array relation for remote table "all_card_text" */
export type All_Card_Text_Arr_Rel_Insert_Input = {
  data: Array<All_Card_Text_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<All_Card_Text_On_Conflict>;
};

/** Boolean expression to filter rows from the table "all_card_text". All fields are combined with a logical 'AND'. */
export type All_Card_Text_Bool_Exp = {
  _and?: InputMaybe<Array<All_Card_Text_Bool_Exp>>;
  _not?: InputMaybe<All_Card_Text_Bool_Exp>;
  _or?: InputMaybe<Array<All_Card_Text_Bool_Exp>>;
  back_flavor?: InputMaybe<String_Comparison_Exp>;
  back_name?: InputMaybe<String_Comparison_Exp>;
  back_text?: InputMaybe<String_Comparison_Exp>;
  back_traits?: InputMaybe<String_Comparison_Exp>;
  customization_change?: InputMaybe<String_Comparison_Exp>;
  customization_text?: InputMaybe<String_Comparison_Exp>;
  encounter_name?: InputMaybe<String_Comparison_Exp>;
  flavor?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  slot?: InputMaybe<String_Comparison_Exp>;
  subname?: InputMaybe<String_Comparison_Exp>;
  taboo_text_change?: InputMaybe<String_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  traits?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "all_card_text" */
export enum All_Card_Text_Constraint {
  /** unique or primary key constraint on columns "locale", "id" */
  AllCardTextPkey = 'all_card_text_pkey'
}

/** input type for inserting data into table "all_card_text" */
export type All_Card_Text_Insert_Input = {
  back_flavor?: InputMaybe<Scalars['String']>;
  back_name?: InputMaybe<Scalars['String']>;
  back_text?: InputMaybe<Scalars['String']>;
  back_traits?: InputMaybe<Scalars['String']>;
  customization_change?: InputMaybe<Scalars['String']>;
  customization_text?: InputMaybe<Scalars['String']>;
  encounter_name?: InputMaybe<Scalars['String']>;
  flavor?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['String']>;
  subname?: InputMaybe<Scalars['String']>;
  taboo_text_change?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  traits?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type All_Card_Text_Max_Fields = {
  __typename?: 'all_card_text_max_fields';
  back_flavor?: Maybe<Scalars['String']>;
  back_name?: Maybe<Scalars['String']>;
  back_text?: Maybe<Scalars['String']>;
  back_traits?: Maybe<Scalars['String']>;
  customization_change?: Maybe<Scalars['String']>;
  customization_text?: Maybe<Scalars['String']>;
  encounter_name?: Maybe<Scalars['String']>;
  flavor?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slot?: Maybe<Scalars['String']>;
  subname?: Maybe<Scalars['String']>;
  taboo_text_change?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  traits?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "all_card_text" */
export type All_Card_Text_Max_Order_By = {
  back_flavor?: InputMaybe<Order_By>;
  back_name?: InputMaybe<Order_By>;
  back_text?: InputMaybe<Order_By>;
  back_traits?: InputMaybe<Order_By>;
  customization_change?: InputMaybe<Order_By>;
  customization_text?: InputMaybe<Order_By>;
  encounter_name?: InputMaybe<Order_By>;
  flavor?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
  subname?: InputMaybe<Order_By>;
  taboo_text_change?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  traits?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type All_Card_Text_Min_Fields = {
  __typename?: 'all_card_text_min_fields';
  back_flavor?: Maybe<Scalars['String']>;
  back_name?: Maybe<Scalars['String']>;
  back_text?: Maybe<Scalars['String']>;
  back_traits?: Maybe<Scalars['String']>;
  customization_change?: Maybe<Scalars['String']>;
  customization_text?: Maybe<Scalars['String']>;
  encounter_name?: Maybe<Scalars['String']>;
  flavor?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slot?: Maybe<Scalars['String']>;
  subname?: Maybe<Scalars['String']>;
  taboo_text_change?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  traits?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "all_card_text" */
export type All_Card_Text_Min_Order_By = {
  back_flavor?: InputMaybe<Order_By>;
  back_name?: InputMaybe<Order_By>;
  back_text?: InputMaybe<Order_By>;
  back_traits?: InputMaybe<Order_By>;
  customization_change?: InputMaybe<Order_By>;
  customization_text?: InputMaybe<Order_By>;
  encounter_name?: InputMaybe<Order_By>;
  flavor?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
  subname?: InputMaybe<Order_By>;
  taboo_text_change?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  traits?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "all_card_text" */
export type All_Card_Text_Mutation_Response = {
  __typename?: 'all_card_text_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<All_Card_Text>;
};

/** on_conflict condition type for table "all_card_text" */
export type All_Card_Text_On_Conflict = {
  constraint: All_Card_Text_Constraint;
  update_columns?: Array<All_Card_Text_Update_Column>;
  where?: InputMaybe<All_Card_Text_Bool_Exp>;
};

/** Ordering options when selecting data from "all_card_text". */
export type All_Card_Text_Order_By = {
  back_flavor?: InputMaybe<Order_By>;
  back_name?: InputMaybe<Order_By>;
  back_text?: InputMaybe<Order_By>;
  back_traits?: InputMaybe<Order_By>;
  customization_change?: InputMaybe<Order_By>;
  customization_text?: InputMaybe<Order_By>;
  encounter_name?: InputMaybe<Order_By>;
  flavor?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
  subname?: InputMaybe<Order_By>;
  taboo_text_change?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  traits?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: all_card_text */
export type All_Card_Text_Pk_Columns_Input = {
  id: Scalars['String'];
  locale: Scalars['String'];
};

/** select columns of table "all_card_text" */
export enum All_Card_Text_Select_Column {
  /** column name */
  BackFlavor = 'back_flavor',
  /** column name */
  BackName = 'back_name',
  /** column name */
  BackText = 'back_text',
  /** column name */
  BackTraits = 'back_traits',
  /** column name */
  CustomizationChange = 'customization_change',
  /** column name */
  CustomizationText = 'customization_text',
  /** column name */
  EncounterName = 'encounter_name',
  /** column name */
  Flavor = 'flavor',
  /** column name */
  Id = 'id',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  Slot = 'slot',
  /** column name */
  Subname = 'subname',
  /** column name */
  TabooTextChange = 'taboo_text_change',
  /** column name */
  Text = 'text',
  /** column name */
  Traits = 'traits',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "all_card_text" */
export type All_Card_Text_Set_Input = {
  back_flavor?: InputMaybe<Scalars['String']>;
  back_name?: InputMaybe<Scalars['String']>;
  back_text?: InputMaybe<Scalars['String']>;
  back_traits?: InputMaybe<Scalars['String']>;
  customization_change?: InputMaybe<Scalars['String']>;
  customization_text?: InputMaybe<Scalars['String']>;
  encounter_name?: InputMaybe<Scalars['String']>;
  flavor?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['String']>;
  subname?: InputMaybe<Scalars['String']>;
  taboo_text_change?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  traits?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "all_card_text" */
export type All_Card_Text_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: All_Card_Text_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type All_Card_Text_Stream_Cursor_Value_Input = {
  back_flavor?: InputMaybe<Scalars['String']>;
  back_name?: InputMaybe<Scalars['String']>;
  back_text?: InputMaybe<Scalars['String']>;
  back_traits?: InputMaybe<Scalars['String']>;
  customization_change?: InputMaybe<Scalars['String']>;
  customization_text?: InputMaybe<Scalars['String']>;
  encounter_name?: InputMaybe<Scalars['String']>;
  flavor?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['String']>;
  subname?: InputMaybe<Scalars['String']>;
  taboo_text_change?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  traits?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "all_card_text" */
export enum All_Card_Text_Update_Column {
  /** column name */
  BackFlavor = 'back_flavor',
  /** column name */
  BackName = 'back_name',
  /** column name */
  BackText = 'back_text',
  /** column name */
  BackTraits = 'back_traits',
  /** column name */
  CustomizationChange = 'customization_change',
  /** column name */
  CustomizationText = 'customization_text',
  /** column name */
  EncounterName = 'encounter_name',
  /** column name */
  Flavor = 'flavor',
  /** column name */
  Id = 'id',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  Slot = 'slot',
  /** column name */
  Subname = 'subname',
  /** column name */
  TabooTextChange = 'taboo_text_change',
  /** column name */
  Text = 'text',
  /** column name */
  Traits = 'traits',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type All_Card_Text_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<All_Card_Text_Set_Input>;
  where: All_Card_Text_Bool_Exp;
};

/** update columns of table "all_card" */
export enum All_Card_Update_Column {
  /** column name */
  AltArtInvestigator = 'alt_art_investigator',
  /** column name */
  AlternateOfCode = 'alternate_of_code',
  /** column name */
  AlternateRequiredCode = 'alternate_required_code',
  /** column name */
  BackIllustrator = 'back_illustrator',
  /** column name */
  BackLinkId = 'back_link_id',
  /** column name */
  Backimagesrc = 'backimagesrc',
  /** column name */
  Backimageurl = 'backimageurl',
  /** column name */
  Clues = 'clues',
  /** column name */
  CluesFixed = 'clues_fixed',
  /** column name */
  Code = 'code',
  /** column name */
  Cost = 'cost',
  /** column name */
  CustomizationOptions = 'customization_options',
  /** column name */
  DeckLimit = 'deck_limit',
  /** column name */
  DeckOptions = 'deck_options',
  /** column name */
  DeckRequirements = 'deck_requirements',
  /** column name */
  Doom = 'doom',
  /** column name */
  DoubleSided = 'double_sided',
  /** column name */
  DuplicateOfCode = 'duplicate_of_code',
  /** column name */
  EncounterCode = 'encounter_code',
  /** column name */
  EncounterPosition = 'encounter_position',
  /** column name */
  EnemyDamage = 'enemy_damage',
  /** column name */
  EnemyEvade = 'enemy_evade',
  /** column name */
  EnemyFight = 'enemy_fight',
  /** column name */
  EnemyHorror = 'enemy_horror',
  /** column name */
  ErrataDate = 'errata_date',
  /** column name */
  Exceptional = 'exceptional',
  /** column name */
  Exile = 'exile',
  /** column name */
  Faction2Code = 'faction2_code',
  /** column name */
  Faction3Code = 'faction3_code',
  /** column name */
  FactionCode = 'faction_code',
  /** column name */
  Gender = 'gender',
  /** column name */
  HealsDamage = 'heals_damage',
  /** column name */
  HealsHorror = 'heals_horror',
  /** column name */
  Health = 'health',
  /** column name */
  HealthPerInvestigator = 'health_per_investigator',
  /** column name */
  Hidden = 'hidden',
  /** column name */
  Id = 'id',
  /** column name */
  Illustrator = 'illustrator',
  /** column name */
  Imagesrc = 'imagesrc',
  /** column name */
  Imageurl = 'imageurl',
  /** column name */
  IsUnique = 'is_unique',
  /** column name */
  Linked = 'linked',
  /** column name */
  Myriad = 'myriad',
  /** column name */
  Official = 'official',
  /** column name */
  PackCode = 'pack_code',
  /** column name */
  PackPosition = 'pack_position',
  /** column name */
  Permanent = 'permanent',
  /** column name */
  Position = 'position',
  /** column name */
  Preview = 'preview',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  RealBackFlavor = 'real_back_flavor',
  /** column name */
  RealBackName = 'real_back_name',
  /** column name */
  RealBackText = 'real_back_text',
  /** column name */
  RealBackTraits = 'real_back_traits',
  /** column name */
  RealCustomizationChange = 'real_customization_change',
  /** column name */
  RealCustomizationText = 'real_customization_text',
  /** column name */
  RealEncounterSetName = 'real_encounter_set_name',
  /** column name */
  RealFlavor = 'real_flavor',
  /** column name */
  RealName = 'real_name',
  /** column name */
  RealPackName = 'real_pack_name',
  /** column name */
  RealSlot = 'real_slot',
  /** column name */
  RealSubname = 'real_subname',
  /** column name */
  RealTabooTextChange = 'real_taboo_text_change',
  /** column name */
  RealText = 'real_text',
  /** column name */
  RealTraits = 'real_traits',
  /** column name */
  Restrictions = 'restrictions',
  /** column name */
  Sanity = 'sanity',
  /** column name */
  Shroud = 'shroud',
  /** column name */
  SkillAgility = 'skill_agility',
  /** column name */
  SkillCombat = 'skill_combat',
  /** column name */
  SkillIntellect = 'skill_intellect',
  /** column name */
  SkillWild = 'skill_wild',
  /** column name */
  SkillWillpower = 'skill_willpower',
  /** column name */
  Spoiler = 'spoiler',
  /** column name */
  Stage = 'stage',
  /** column name */
  SubtypeCode = 'subtype_code',
  /** column name */
  TabooPlaceholder = 'taboo_placeholder',
  /** column name */
  TabooSetId = 'taboo_set_id',
  /** column name */
  TabooXp = 'taboo_xp',
  /** column name */
  Tags = 'tags',
  /** column name */
  TypeCode = 'type_code',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Vengeance = 'vengeance',
  /** column name */
  Version = 'version',
  /** column name */
  Victory = 'victory',
  /** column name */
  Xp = 'xp'
}

/** columns and relationships of "all_card_updated" */
export type All_Card_Updated = {
  __typename?: 'all_card_updated';
  card_count?: Maybe<Scalars['Int']>;
  cards_updated_at: Scalars['timestamp'];
  locale: Scalars['String'];
  translation_updated_at: Scalars['timestamp'];
};

/** aggregated selection of "all_card_updated" */
export type All_Card_Updated_Aggregate = {
  __typename?: 'all_card_updated_aggregate';
  aggregate?: Maybe<All_Card_Updated_Aggregate_Fields>;
  nodes: Array<All_Card_Updated>;
};

/** aggregate fields of "all_card_updated" */
export type All_Card_Updated_Aggregate_Fields = {
  __typename?: 'all_card_updated_aggregate_fields';
  avg?: Maybe<All_Card_Updated_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<All_Card_Updated_Max_Fields>;
  min?: Maybe<All_Card_Updated_Min_Fields>;
  stddev?: Maybe<All_Card_Updated_Stddev_Fields>;
  stddev_pop?: Maybe<All_Card_Updated_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<All_Card_Updated_Stddev_Samp_Fields>;
  sum?: Maybe<All_Card_Updated_Sum_Fields>;
  var_pop?: Maybe<All_Card_Updated_Var_Pop_Fields>;
  var_samp?: Maybe<All_Card_Updated_Var_Samp_Fields>;
  variance?: Maybe<All_Card_Updated_Variance_Fields>;
};


/** aggregate fields of "all_card_updated" */
export type All_Card_Updated_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<All_Card_Updated_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type All_Card_Updated_Avg_Fields = {
  __typename?: 'all_card_updated_avg_fields';
  card_count?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "all_card_updated". All fields are combined with a logical 'AND'. */
export type All_Card_Updated_Bool_Exp = {
  _and?: InputMaybe<Array<All_Card_Updated_Bool_Exp>>;
  _not?: InputMaybe<All_Card_Updated_Bool_Exp>;
  _or?: InputMaybe<Array<All_Card_Updated_Bool_Exp>>;
  card_count?: InputMaybe<Int_Comparison_Exp>;
  cards_updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  translation_updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "all_card_updated" */
export enum All_Card_Updated_Constraint {
  /** unique or primary key constraint on columns "locale" */
  AllCardUpdatedPkey = 'all_card_updated_pkey'
}

/** input type for incrementing numeric columns in table "all_card_updated" */
export type All_Card_Updated_Inc_Input = {
  card_count?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "all_card_updated" */
export type All_Card_Updated_Insert_Input = {
  card_count?: InputMaybe<Scalars['Int']>;
  cards_updated_at?: InputMaybe<Scalars['timestamp']>;
  locale?: InputMaybe<Scalars['String']>;
  translation_updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type All_Card_Updated_Max_Fields = {
  __typename?: 'all_card_updated_max_fields';
  card_count?: Maybe<Scalars['Int']>;
  cards_updated_at?: Maybe<Scalars['timestamp']>;
  locale?: Maybe<Scalars['String']>;
  translation_updated_at?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type All_Card_Updated_Min_Fields = {
  __typename?: 'all_card_updated_min_fields';
  card_count?: Maybe<Scalars['Int']>;
  cards_updated_at?: Maybe<Scalars['timestamp']>;
  locale?: Maybe<Scalars['String']>;
  translation_updated_at?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "all_card_updated" */
export type All_Card_Updated_Mutation_Response = {
  __typename?: 'all_card_updated_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<All_Card_Updated>;
};

/** on_conflict condition type for table "all_card_updated" */
export type All_Card_Updated_On_Conflict = {
  constraint: All_Card_Updated_Constraint;
  update_columns?: Array<All_Card_Updated_Update_Column>;
  where?: InputMaybe<All_Card_Updated_Bool_Exp>;
};

/** Ordering options when selecting data from "all_card_updated". */
export type All_Card_Updated_Order_By = {
  card_count?: InputMaybe<Order_By>;
  cards_updated_at?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  translation_updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: all_card_updated */
export type All_Card_Updated_Pk_Columns_Input = {
  locale: Scalars['String'];
};

/** select columns of table "all_card_updated" */
export enum All_Card_Updated_Select_Column {
  /** column name */
  CardCount = 'card_count',
  /** column name */
  CardsUpdatedAt = 'cards_updated_at',
  /** column name */
  Locale = 'locale',
  /** column name */
  TranslationUpdatedAt = 'translation_updated_at'
}

/** input type for updating data in table "all_card_updated" */
export type All_Card_Updated_Set_Input = {
  card_count?: InputMaybe<Scalars['Int']>;
  cards_updated_at?: InputMaybe<Scalars['timestamp']>;
  locale?: InputMaybe<Scalars['String']>;
  translation_updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type All_Card_Updated_Stddev_Fields = {
  __typename?: 'all_card_updated_stddev_fields';
  card_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type All_Card_Updated_Stddev_Pop_Fields = {
  __typename?: 'all_card_updated_stddev_pop_fields';
  card_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type All_Card_Updated_Stddev_Samp_Fields = {
  __typename?: 'all_card_updated_stddev_samp_fields';
  card_count?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "all_card_updated" */
export type All_Card_Updated_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: All_Card_Updated_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type All_Card_Updated_Stream_Cursor_Value_Input = {
  card_count?: InputMaybe<Scalars['Int']>;
  cards_updated_at?: InputMaybe<Scalars['timestamp']>;
  locale?: InputMaybe<Scalars['String']>;
  translation_updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type All_Card_Updated_Sum_Fields = {
  __typename?: 'all_card_updated_sum_fields';
  card_count?: Maybe<Scalars['Int']>;
};

/** update columns of table "all_card_updated" */
export enum All_Card_Updated_Update_Column {
  /** column name */
  CardCount = 'card_count',
  /** column name */
  CardsUpdatedAt = 'cards_updated_at',
  /** column name */
  Locale = 'locale',
  /** column name */
  TranslationUpdatedAt = 'translation_updated_at'
}

export type All_Card_Updated_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<All_Card_Updated_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<All_Card_Updated_Set_Input>;
  where: All_Card_Updated_Bool_Exp;
};

/** aggregate var_pop on columns */
export type All_Card_Updated_Var_Pop_Fields = {
  __typename?: 'all_card_updated_var_pop_fields';
  card_count?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type All_Card_Updated_Var_Samp_Fields = {
  __typename?: 'all_card_updated_var_samp_fields';
  card_count?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type All_Card_Updated_Variance_Fields = {
  __typename?: 'all_card_updated_variance_fields';
  card_count?: Maybe<Scalars['Float']>;
};

export type All_Card_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<All_Card_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<All_Card_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<All_Card_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<All_Card_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<All_Card_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<All_Card_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<All_Card_Set_Input>;
  where: All_Card_Bool_Exp;
};

/** aggregate var_pop on columns */
export type All_Card_Var_Pop_Fields = {
  __typename?: 'all_card_var_pop_fields';
  clues?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  deck_limit?: Maybe<Scalars['Float']>;
  doom?: Maybe<Scalars['Float']>;
  encounter_position?: Maybe<Scalars['Float']>;
  enemy_damage?: Maybe<Scalars['Float']>;
  enemy_evade?: Maybe<Scalars['Float']>;
  enemy_fight?: Maybe<Scalars['Float']>;
  enemy_horror?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  pack_position?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sanity?: Maybe<Scalars['Float']>;
  shroud?: Maybe<Scalars['Float']>;
  skill_agility?: Maybe<Scalars['Float']>;
  skill_combat?: Maybe<Scalars['Float']>;
  skill_intellect?: Maybe<Scalars['Float']>;
  skill_wild?: Maybe<Scalars['Float']>;
  skill_willpower?: Maybe<Scalars['Float']>;
  stage?: Maybe<Scalars['Float']>;
  taboo_set_id?: Maybe<Scalars['Float']>;
  taboo_xp?: Maybe<Scalars['Float']>;
  vengeance?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
  victory?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "all_card" */
export type All_Card_Var_Pop_Order_By = {
  clues?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  deck_limit?: InputMaybe<Order_By>;
  doom?: InputMaybe<Order_By>;
  encounter_position?: InputMaybe<Order_By>;
  enemy_damage?: InputMaybe<Order_By>;
  enemy_evade?: InputMaybe<Order_By>;
  enemy_fight?: InputMaybe<Order_By>;
  enemy_horror?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  pack_position?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  sanity?: InputMaybe<Order_By>;
  shroud?: InputMaybe<Order_By>;
  skill_agility?: InputMaybe<Order_By>;
  skill_combat?: InputMaybe<Order_By>;
  skill_intellect?: InputMaybe<Order_By>;
  skill_wild?: InputMaybe<Order_By>;
  skill_willpower?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
  taboo_set_id?: InputMaybe<Order_By>;
  taboo_xp?: InputMaybe<Order_By>;
  vengeance?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  victory?: InputMaybe<Order_By>;
  xp?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type All_Card_Var_Samp_Fields = {
  __typename?: 'all_card_var_samp_fields';
  clues?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  deck_limit?: Maybe<Scalars['Float']>;
  doom?: Maybe<Scalars['Float']>;
  encounter_position?: Maybe<Scalars['Float']>;
  enemy_damage?: Maybe<Scalars['Float']>;
  enemy_evade?: Maybe<Scalars['Float']>;
  enemy_fight?: Maybe<Scalars['Float']>;
  enemy_horror?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  pack_position?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sanity?: Maybe<Scalars['Float']>;
  shroud?: Maybe<Scalars['Float']>;
  skill_agility?: Maybe<Scalars['Float']>;
  skill_combat?: Maybe<Scalars['Float']>;
  skill_intellect?: Maybe<Scalars['Float']>;
  skill_wild?: Maybe<Scalars['Float']>;
  skill_willpower?: Maybe<Scalars['Float']>;
  stage?: Maybe<Scalars['Float']>;
  taboo_set_id?: Maybe<Scalars['Float']>;
  taboo_xp?: Maybe<Scalars['Float']>;
  vengeance?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
  victory?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "all_card" */
export type All_Card_Var_Samp_Order_By = {
  clues?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  deck_limit?: InputMaybe<Order_By>;
  doom?: InputMaybe<Order_By>;
  encounter_position?: InputMaybe<Order_By>;
  enemy_damage?: InputMaybe<Order_By>;
  enemy_evade?: InputMaybe<Order_By>;
  enemy_fight?: InputMaybe<Order_By>;
  enemy_horror?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  pack_position?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  sanity?: InputMaybe<Order_By>;
  shroud?: InputMaybe<Order_By>;
  skill_agility?: InputMaybe<Order_By>;
  skill_combat?: InputMaybe<Order_By>;
  skill_intellect?: InputMaybe<Order_By>;
  skill_wild?: InputMaybe<Order_By>;
  skill_willpower?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
  taboo_set_id?: InputMaybe<Order_By>;
  taboo_xp?: InputMaybe<Order_By>;
  vengeance?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  victory?: InputMaybe<Order_By>;
  xp?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type All_Card_Variance_Fields = {
  __typename?: 'all_card_variance_fields';
  clues?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  deck_limit?: Maybe<Scalars['Float']>;
  doom?: Maybe<Scalars['Float']>;
  encounter_position?: Maybe<Scalars['Float']>;
  enemy_damage?: Maybe<Scalars['Float']>;
  enemy_evade?: Maybe<Scalars['Float']>;
  enemy_fight?: Maybe<Scalars['Float']>;
  enemy_horror?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  pack_position?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sanity?: Maybe<Scalars['Float']>;
  shroud?: Maybe<Scalars['Float']>;
  skill_agility?: Maybe<Scalars['Float']>;
  skill_combat?: Maybe<Scalars['Float']>;
  skill_intellect?: Maybe<Scalars['Float']>;
  skill_wild?: Maybe<Scalars['Float']>;
  skill_willpower?: Maybe<Scalars['Float']>;
  stage?: Maybe<Scalars['Float']>;
  taboo_set_id?: Maybe<Scalars['Float']>;
  taboo_xp?: Maybe<Scalars['Float']>;
  vengeance?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
  victory?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "all_card" */
export type All_Card_Variance_Order_By = {
  clues?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  deck_limit?: InputMaybe<Order_By>;
  doom?: InputMaybe<Order_By>;
  encounter_position?: InputMaybe<Order_By>;
  enemy_damage?: InputMaybe<Order_By>;
  enemy_evade?: InputMaybe<Order_By>;
  enemy_fight?: InputMaybe<Order_By>;
  enemy_horror?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  pack_position?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  sanity?: InputMaybe<Order_By>;
  shroud?: InputMaybe<Order_By>;
  skill_agility?: InputMaybe<Order_By>;
  skill_combat?: InputMaybe<Order_By>;
  skill_intellect?: InputMaybe<Order_By>;
  skill_wild?: InputMaybe<Order_By>;
  skill_willpower?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
  taboo_set_id?: InputMaybe<Order_By>;
  taboo_xp?: InputMaybe<Order_By>;
  vengeance?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  victory?: InputMaybe<Order_By>;
  xp?: InputMaybe<Order_By>;
};

/** columns and relationships of "base_decks" */
export type Base_Decks = {
  __typename?: 'base_decks';
  /** An object relationship */
  campaign?: Maybe<Campaign>;
  campaign_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  deck?: Maybe<Campaign_Deck>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "base_decks" */
export type Base_Decks_Aggregate = {
  __typename?: 'base_decks_aggregate';
  aggregate?: Maybe<Base_Decks_Aggregate_Fields>;
  nodes: Array<Base_Decks>;
};

export type Base_Decks_Aggregate_Bool_Exp = {
  count?: InputMaybe<Base_Decks_Aggregate_Bool_Exp_Count>;
};

export type Base_Decks_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Base_Decks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Base_Decks_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "base_decks" */
export type Base_Decks_Aggregate_Fields = {
  __typename?: 'base_decks_aggregate_fields';
  avg?: Maybe<Base_Decks_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Base_Decks_Max_Fields>;
  min?: Maybe<Base_Decks_Min_Fields>;
  stddev?: Maybe<Base_Decks_Stddev_Fields>;
  stddev_pop?: Maybe<Base_Decks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Base_Decks_Stddev_Samp_Fields>;
  sum?: Maybe<Base_Decks_Sum_Fields>;
  var_pop?: Maybe<Base_Decks_Var_Pop_Fields>;
  var_samp?: Maybe<Base_Decks_Var_Samp_Fields>;
  variance?: Maybe<Base_Decks_Variance_Fields>;
};


/** aggregate fields of "base_decks" */
export type Base_Decks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Base_Decks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "base_decks" */
export type Base_Decks_Aggregate_Order_By = {
  avg?: InputMaybe<Base_Decks_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Base_Decks_Max_Order_By>;
  min?: InputMaybe<Base_Decks_Min_Order_By>;
  stddev?: InputMaybe<Base_Decks_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Base_Decks_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Base_Decks_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Base_Decks_Sum_Order_By>;
  var_pop?: InputMaybe<Base_Decks_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Base_Decks_Var_Samp_Order_By>;
  variance?: InputMaybe<Base_Decks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "base_decks" */
export type Base_Decks_Arr_Rel_Insert_Input = {
  data: Array<Base_Decks_Insert_Input>;
};

/** aggregate avg on columns */
export type Base_Decks_Avg_Fields = {
  __typename?: 'base_decks_avg_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "base_decks" */
export type Base_Decks_Avg_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "base_decks". All fields are combined with a logical 'AND'. */
export type Base_Decks_Bool_Exp = {
  _and?: InputMaybe<Array<Base_Decks_Bool_Exp>>;
  _not?: InputMaybe<Base_Decks_Bool_Exp>;
  _or?: InputMaybe<Array<Base_Decks_Bool_Exp>>;
  campaign?: InputMaybe<Campaign_Bool_Exp>;
  campaign_id?: InputMaybe<Int_Comparison_Exp>;
  deck?: InputMaybe<Campaign_Deck_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "base_decks" */
export type Base_Decks_Inc_Input = {
  campaign_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "base_decks" */
export type Base_Decks_Insert_Input = {
  campaign?: InputMaybe<Campaign_Obj_Rel_Insert_Input>;
  campaign_id?: InputMaybe<Scalars['Int']>;
  deck?: InputMaybe<Campaign_Deck_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Base_Decks_Max_Fields = {
  __typename?: 'base_decks_max_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "base_decks" */
export type Base_Decks_Max_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Base_Decks_Min_Fields = {
  __typename?: 'base_decks_min_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "base_decks" */
export type Base_Decks_Min_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "base_decks" */
export type Base_Decks_Mutation_Response = {
  __typename?: 'base_decks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Base_Decks>;
};

/** Ordering options when selecting data from "base_decks". */
export type Base_Decks_Order_By = {
  campaign?: InputMaybe<Campaign_Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  deck?: InputMaybe<Campaign_Deck_Order_By>;
  id?: InputMaybe<Order_By>;
};

/** select columns of table "base_decks" */
export enum Base_Decks_Select_Column {
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "base_decks" */
export type Base_Decks_Set_Input = {
  campaign_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Base_Decks_Stddev_Fields = {
  __typename?: 'base_decks_stddev_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "base_decks" */
export type Base_Decks_Stddev_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Base_Decks_Stddev_Pop_Fields = {
  __typename?: 'base_decks_stddev_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "base_decks" */
export type Base_Decks_Stddev_Pop_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Base_Decks_Stddev_Samp_Fields = {
  __typename?: 'base_decks_stddev_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "base_decks" */
export type Base_Decks_Stddev_Samp_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "base_decks" */
export type Base_Decks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Base_Decks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Base_Decks_Stream_Cursor_Value_Input = {
  campaign_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Base_Decks_Sum_Fields = {
  __typename?: 'base_decks_sum_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "base_decks" */
export type Base_Decks_Sum_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

export type Base_Decks_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Base_Decks_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Base_Decks_Set_Input>;
  where: Base_Decks_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Base_Decks_Var_Pop_Fields = {
  __typename?: 'base_decks_var_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "base_decks" */
export type Base_Decks_Var_Pop_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Base_Decks_Var_Samp_Fields = {
  __typename?: 'base_decks_var_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "base_decks" */
export type Base_Decks_Var_Samp_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Base_Decks_Variance_Fields = {
  __typename?: 'base_decks_variance_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "base_decks" */
export type Base_Decks_Variance_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "campaign" */
export type Campaign = {
  __typename?: 'campaign';
  /** An array relationship */
  access: Array<Campaign_Access>;
  /** An aggregate relationship */
  access_aggregate: Campaign_Access_Aggregate;
  archived?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  base_decks: Array<Base_Decks>;
  /** An aggregate relationship */
  base_decks_aggregate: Base_Decks_Aggregate;
  campaignNotes?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  campaign_guide?: Maybe<Campaign_Guide>;
  chaosBag?: Maybe<Scalars['jsonb']>;
  /** An array relationship */
  chaos_bag_result: Array<Chaos_Bag_Result>;
  /** An aggregate relationship */
  chaos_bag_result_aggregate: Chaos_Bag_Result_Aggregate;
  created_at: Scalars['timestamptz'];
  cycleCode?: Maybe<Scalars['String']>;
  deleted?: Maybe<Scalars['Boolean']>;
  difficulty?: Maybe<Scalars['String']>;
  guide_version?: Maybe<Scalars['Int']>;
  guided?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  /** An array relationship */
  investigator_data: Array<Investigator_Data>;
  /** An aggregate relationship */
  investigator_data_aggregate: Investigator_Data_Aggregate;
  /** An array relationship */
  investigators: Array<Campaign_Investigator>;
  /** An aggregate relationship */
  investigators_aggregate: Campaign_Investigator_Aggregate;
  /** An array relationship */
  latest_decks: Array<Latest_Decks>;
  /** An aggregate relationship */
  latest_decks_aggregate: Latest_Decks_Aggregate;
  /** An object relationship */
  link_a_campaign?: Maybe<Campaign>;
  link_a_campaign_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  link_b_campaign?: Maybe<Campaign>;
  link_b_campaign_id?: Maybe<Scalars['Int']>;
  link_campaign_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  linked_campaign?: Maybe<Campaign>;
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  owner: Users;
  owner_id: Scalars['String'];
  scenarioResults?: Maybe<Scalars['jsonb']>;
  showInterludes?: Maybe<Scalars['Boolean']>;
  standaloneId?: Maybe<Scalars['jsonb']>;
  tarot_reading?: Maybe<Scalars['jsonb']>;
  updated_at: Scalars['timestamptz'];
  uuid: Scalars['String'];
  weaknessSet?: Maybe<Scalars['jsonb']>;
};


/** columns and relationships of "campaign" */
export type CampaignAccessArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Access_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Access_Order_By>>;
  where?: InputMaybe<Campaign_Access_Bool_Exp>;
};


/** columns and relationships of "campaign" */
export type CampaignAccess_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Access_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Access_Order_By>>;
  where?: InputMaybe<Campaign_Access_Bool_Exp>;
};


/** columns and relationships of "campaign" */
export type CampaignBase_DecksArgs = {
  distinct_on?: InputMaybe<Array<Base_Decks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Base_Decks_Order_By>>;
  where?: InputMaybe<Base_Decks_Bool_Exp>;
};


/** columns and relationships of "campaign" */
export type CampaignBase_Decks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Base_Decks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Base_Decks_Order_By>>;
  where?: InputMaybe<Base_Decks_Bool_Exp>;
};


/** columns and relationships of "campaign" */
export type CampaignCampaignNotesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "campaign" */
export type CampaignChaosBagArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "campaign" */
export type CampaignChaos_Bag_ResultArgs = {
  distinct_on?: InputMaybe<Array<Chaos_Bag_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chaos_Bag_Result_Order_By>>;
  where?: InputMaybe<Chaos_Bag_Result_Bool_Exp>;
};


/** columns and relationships of "campaign" */
export type CampaignChaos_Bag_Result_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chaos_Bag_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chaos_Bag_Result_Order_By>>;
  where?: InputMaybe<Chaos_Bag_Result_Bool_Exp>;
};


/** columns and relationships of "campaign" */
export type CampaignInvestigator_DataArgs = {
  distinct_on?: InputMaybe<Array<Investigator_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investigator_Data_Order_By>>;
  where?: InputMaybe<Investigator_Data_Bool_Exp>;
};


/** columns and relationships of "campaign" */
export type CampaignInvestigator_Data_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Investigator_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investigator_Data_Order_By>>;
  where?: InputMaybe<Investigator_Data_Bool_Exp>;
};


/** columns and relationships of "campaign" */
export type CampaignInvestigatorsArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Investigator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Investigator_Order_By>>;
  where?: InputMaybe<Campaign_Investigator_Bool_Exp>;
};


/** columns and relationships of "campaign" */
export type CampaignInvestigators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Investigator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Investigator_Order_By>>;
  where?: InputMaybe<Campaign_Investigator_Bool_Exp>;
};


/** columns and relationships of "campaign" */
export type CampaignLatest_DecksArgs = {
  distinct_on?: InputMaybe<Array<Latest_Decks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Latest_Decks_Order_By>>;
  where?: InputMaybe<Latest_Decks_Bool_Exp>;
};


/** columns and relationships of "campaign" */
export type CampaignLatest_Decks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Latest_Decks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Latest_Decks_Order_By>>;
  where?: InputMaybe<Latest_Decks_Bool_Exp>;
};


/** columns and relationships of "campaign" */
export type CampaignScenarioResultsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "campaign" */
export type CampaignStandaloneIdArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "campaign" */
export type CampaignTarot_ReadingArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "campaign" */
export type CampaignWeaknessSetArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "campaign_access" */
export type Campaign_Access = {
  __typename?: 'campaign_access';
  campaign_id: Scalars['Int'];
  hidden?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "campaign_access" */
export type Campaign_Access_Aggregate = {
  __typename?: 'campaign_access_aggregate';
  aggregate?: Maybe<Campaign_Access_Aggregate_Fields>;
  nodes: Array<Campaign_Access>;
};

export type Campaign_Access_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Campaign_Access_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Campaign_Access_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Campaign_Access_Aggregate_Bool_Exp_Count>;
};

export type Campaign_Access_Aggregate_Bool_Exp_Bool_And = {
  arguments: Campaign_Access_Select_Column_Campaign_Access_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Campaign_Access_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Campaign_Access_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Campaign_Access_Select_Column_Campaign_Access_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Campaign_Access_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Campaign_Access_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Campaign_Access_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Campaign_Access_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "campaign_access" */
export type Campaign_Access_Aggregate_Fields = {
  __typename?: 'campaign_access_aggregate_fields';
  avg?: Maybe<Campaign_Access_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Campaign_Access_Max_Fields>;
  min?: Maybe<Campaign_Access_Min_Fields>;
  stddev?: Maybe<Campaign_Access_Stddev_Fields>;
  stddev_pop?: Maybe<Campaign_Access_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Campaign_Access_Stddev_Samp_Fields>;
  sum?: Maybe<Campaign_Access_Sum_Fields>;
  var_pop?: Maybe<Campaign_Access_Var_Pop_Fields>;
  var_samp?: Maybe<Campaign_Access_Var_Samp_Fields>;
  variance?: Maybe<Campaign_Access_Variance_Fields>;
};


/** aggregate fields of "campaign_access" */
export type Campaign_Access_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Campaign_Access_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "campaign_access" */
export type Campaign_Access_Aggregate_Order_By = {
  avg?: InputMaybe<Campaign_Access_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Campaign_Access_Max_Order_By>;
  min?: InputMaybe<Campaign_Access_Min_Order_By>;
  stddev?: InputMaybe<Campaign_Access_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Campaign_Access_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Campaign_Access_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Campaign_Access_Sum_Order_By>;
  var_pop?: InputMaybe<Campaign_Access_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Campaign_Access_Var_Samp_Order_By>;
  variance?: InputMaybe<Campaign_Access_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "campaign_access" */
export type Campaign_Access_Arr_Rel_Insert_Input = {
  data: Array<Campaign_Access_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Campaign_Access_On_Conflict>;
};

/** aggregate avg on columns */
export type Campaign_Access_Avg_Fields = {
  __typename?: 'campaign_access_avg_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "campaign_access" */
export type Campaign_Access_Avg_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "campaign_access". All fields are combined with a logical 'AND'. */
export type Campaign_Access_Bool_Exp = {
  _and?: InputMaybe<Array<Campaign_Access_Bool_Exp>>;
  _not?: InputMaybe<Campaign_Access_Bool_Exp>;
  _or?: InputMaybe<Array<Campaign_Access_Bool_Exp>>;
  campaign_id?: InputMaybe<Int_Comparison_Exp>;
  hidden?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "campaign_access" */
export enum Campaign_Access_Constraint {
  /** unique or primary key constraint on columns "id" */
  CampaignAccessPkey = 'campaign_access_pkey',
  /** unique or primary key constraint on columns "campaign_id", "user_id" */
  CampaignAccessUserIdCampaignIdKey = 'campaign_access_user_id_campaign_id_key'
}

/** input type for incrementing numeric columns in table "campaign_access" */
export type Campaign_Access_Inc_Input = {
  campaign_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "campaign_access" */
export type Campaign_Access_Insert_Input = {
  campaign_id?: InputMaybe<Scalars['Int']>;
  hidden?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Campaign_Access_Max_Fields = {
  __typename?: 'campaign_access_max_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "campaign_access" */
export type Campaign_Access_Max_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Campaign_Access_Min_Fields = {
  __typename?: 'campaign_access_min_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "campaign_access" */
export type Campaign_Access_Min_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "campaign_access" */
export type Campaign_Access_Mutation_Response = {
  __typename?: 'campaign_access_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Campaign_Access>;
};

/** on_conflict condition type for table "campaign_access" */
export type Campaign_Access_On_Conflict = {
  constraint: Campaign_Access_Constraint;
  update_columns?: Array<Campaign_Access_Update_Column>;
  where?: InputMaybe<Campaign_Access_Bool_Exp>;
};

/** Ordering options when selecting data from "campaign_access". */
export type Campaign_Access_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  hidden?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: campaign_access */
export type Campaign_Access_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "campaign_access" */
export enum Campaign_Access_Select_Column {
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  Hidden = 'hidden',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** select "campaign_access_aggregate_bool_exp_bool_and_arguments_columns" columns of table "campaign_access" */
export enum Campaign_Access_Select_Column_Campaign_Access_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Hidden = 'hidden'
}

/** select "campaign_access_aggregate_bool_exp_bool_or_arguments_columns" columns of table "campaign_access" */
export enum Campaign_Access_Select_Column_Campaign_Access_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Hidden = 'hidden'
}

/** input type for updating data in table "campaign_access" */
export type Campaign_Access_Set_Input = {
  campaign_id?: InputMaybe<Scalars['Int']>;
  hidden?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Campaign_Access_Stddev_Fields = {
  __typename?: 'campaign_access_stddev_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "campaign_access" */
export type Campaign_Access_Stddev_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Campaign_Access_Stddev_Pop_Fields = {
  __typename?: 'campaign_access_stddev_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "campaign_access" */
export type Campaign_Access_Stddev_Pop_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Campaign_Access_Stddev_Samp_Fields = {
  __typename?: 'campaign_access_stddev_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "campaign_access" */
export type Campaign_Access_Stddev_Samp_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "campaign_access" */
export type Campaign_Access_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Campaign_Access_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Campaign_Access_Stream_Cursor_Value_Input = {
  campaign_id?: InputMaybe<Scalars['Int']>;
  hidden?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Campaign_Access_Sum_Fields = {
  __typename?: 'campaign_access_sum_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "campaign_access" */
export type Campaign_Access_Sum_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "campaign_access" */
export enum Campaign_Access_Update_Column {
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  Hidden = 'hidden',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

export type Campaign_Access_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Campaign_Access_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Campaign_Access_Set_Input>;
  where: Campaign_Access_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Campaign_Access_Var_Pop_Fields = {
  __typename?: 'campaign_access_var_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "campaign_access" */
export type Campaign_Access_Var_Pop_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Campaign_Access_Var_Samp_Fields = {
  __typename?: 'campaign_access_var_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "campaign_access" */
export type Campaign_Access_Var_Samp_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Campaign_Access_Variance_Fields = {
  __typename?: 'campaign_access_variance_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "campaign_access" */
export type Campaign_Access_Variance_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregated selection of "campaign" */
export type Campaign_Aggregate = {
  __typename?: 'campaign_aggregate';
  aggregate?: Maybe<Campaign_Aggregate_Fields>;
  nodes: Array<Campaign>;
};

/** aggregate fields of "campaign" */
export type Campaign_Aggregate_Fields = {
  __typename?: 'campaign_aggregate_fields';
  avg?: Maybe<Campaign_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Campaign_Max_Fields>;
  min?: Maybe<Campaign_Min_Fields>;
  stddev?: Maybe<Campaign_Stddev_Fields>;
  stddev_pop?: Maybe<Campaign_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Campaign_Stddev_Samp_Fields>;
  sum?: Maybe<Campaign_Sum_Fields>;
  var_pop?: Maybe<Campaign_Var_Pop_Fields>;
  var_samp?: Maybe<Campaign_Var_Samp_Fields>;
  variance?: Maybe<Campaign_Variance_Fields>;
};


/** aggregate fields of "campaign" */
export type Campaign_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Campaign_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Campaign_Append_Input = {
  campaignNotes?: InputMaybe<Scalars['jsonb']>;
  chaosBag?: InputMaybe<Scalars['jsonb']>;
  scenarioResults?: InputMaybe<Scalars['jsonb']>;
  standaloneId?: InputMaybe<Scalars['jsonb']>;
  tarot_reading?: InputMaybe<Scalars['jsonb']>;
  weaknessSet?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Campaign_Avg_Fields = {
  __typename?: 'campaign_avg_fields';
  guide_version?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  link_a_campaign_id?: Maybe<Scalars['Float']>;
  link_b_campaign_id?: Maybe<Scalars['Float']>;
  link_campaign_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "campaign". All fields are combined with a logical 'AND'. */
export type Campaign_Bool_Exp = {
  _and?: InputMaybe<Array<Campaign_Bool_Exp>>;
  _not?: InputMaybe<Campaign_Bool_Exp>;
  _or?: InputMaybe<Array<Campaign_Bool_Exp>>;
  access?: InputMaybe<Campaign_Access_Bool_Exp>;
  access_aggregate?: InputMaybe<Campaign_Access_Aggregate_Bool_Exp>;
  archived?: InputMaybe<Boolean_Comparison_Exp>;
  base_decks?: InputMaybe<Base_Decks_Bool_Exp>;
  base_decks_aggregate?: InputMaybe<Base_Decks_Aggregate_Bool_Exp>;
  campaignNotes?: InputMaybe<Jsonb_Comparison_Exp>;
  campaign_guide?: InputMaybe<Campaign_Guide_Bool_Exp>;
  chaosBag?: InputMaybe<Jsonb_Comparison_Exp>;
  chaos_bag_result?: InputMaybe<Chaos_Bag_Result_Bool_Exp>;
  chaos_bag_result_aggregate?: InputMaybe<Chaos_Bag_Result_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  cycleCode?: InputMaybe<String_Comparison_Exp>;
  deleted?: InputMaybe<Boolean_Comparison_Exp>;
  difficulty?: InputMaybe<String_Comparison_Exp>;
  guide_version?: InputMaybe<Int_Comparison_Exp>;
  guided?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  investigator_data?: InputMaybe<Investigator_Data_Bool_Exp>;
  investigator_data_aggregate?: InputMaybe<Investigator_Data_Aggregate_Bool_Exp>;
  investigators?: InputMaybe<Campaign_Investigator_Bool_Exp>;
  investigators_aggregate?: InputMaybe<Campaign_Investigator_Aggregate_Bool_Exp>;
  latest_decks?: InputMaybe<Latest_Decks_Bool_Exp>;
  latest_decks_aggregate?: InputMaybe<Latest_Decks_Aggregate_Bool_Exp>;
  link_a_campaign?: InputMaybe<Campaign_Bool_Exp>;
  link_a_campaign_id?: InputMaybe<Int_Comparison_Exp>;
  link_b_campaign?: InputMaybe<Campaign_Bool_Exp>;
  link_b_campaign_id?: InputMaybe<Int_Comparison_Exp>;
  link_campaign_id?: InputMaybe<Int_Comparison_Exp>;
  linked_campaign?: InputMaybe<Campaign_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<Users_Bool_Exp>;
  owner_id?: InputMaybe<String_Comparison_Exp>;
  scenarioResults?: InputMaybe<Jsonb_Comparison_Exp>;
  showInterludes?: InputMaybe<Boolean_Comparison_Exp>;
  standaloneId?: InputMaybe<Jsonb_Comparison_Exp>;
  tarot_reading?: InputMaybe<Jsonb_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  uuid?: InputMaybe<String_Comparison_Exp>;
  weaknessSet?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "campaign" */
export enum Campaign_Constraint {
  /** unique or primary key constraint on columns "id" */
  CampaignDataPkey = 'campaign_data_pkey'
}

/** columns and relationships of "campaign_deck" */
export type Campaign_Deck = {
  __typename?: 'campaign_deck';
  archived?: Maybe<Scalars['Boolean']>;
  arkhamdb_id?: Maybe<Scalars['Int']>;
  arkhamdb_user?: Maybe<Scalars['Int']>;
  base?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  campaign: Campaign;
  campaign_id: Scalars['Int'];
  content?: Maybe<Scalars['jsonb']>;
  content_hash?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  investigator: Scalars['String'];
  /** An object relationship */
  investigator_data?: Maybe<Investigator_Data>;
  local_uuid?: Maybe<Scalars['String']>;
  /** An object relationship */
  next_deck?: Maybe<Campaign_Deck>;
  next_deck_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  other_decks: Array<Campaign_Deck>;
  /** An aggregate relationship */
  other_decks_aggregate: Campaign_Deck_Aggregate;
  /** An object relationship */
  owner: Users;
  owner_id: Scalars['String'];
  /** An object relationship */
  previous_deck?: Maybe<Campaign_Deck>;
  /** An array relationship */
  previous_decks: Array<Campaign_Deck>;
  /** An aggregate relationship */
  previous_decks_aggregate: Campaign_Deck_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "campaign_deck" */
export type Campaign_DeckContentArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "campaign_deck" */
export type Campaign_DeckOther_DecksArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Deck_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Deck_Order_By>>;
  where?: InputMaybe<Campaign_Deck_Bool_Exp>;
};


/** columns and relationships of "campaign_deck" */
export type Campaign_DeckOther_Decks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Deck_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Deck_Order_By>>;
  where?: InputMaybe<Campaign_Deck_Bool_Exp>;
};


/** columns and relationships of "campaign_deck" */
export type Campaign_DeckPrevious_DecksArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Deck_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Deck_Order_By>>;
  where?: InputMaybe<Campaign_Deck_Bool_Exp>;
};


/** columns and relationships of "campaign_deck" */
export type Campaign_DeckPrevious_Decks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Deck_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Deck_Order_By>>;
  where?: InputMaybe<Campaign_Deck_Bool_Exp>;
};

/** aggregated selection of "campaign_deck" */
export type Campaign_Deck_Aggregate = {
  __typename?: 'campaign_deck_aggregate';
  aggregate?: Maybe<Campaign_Deck_Aggregate_Fields>;
  nodes: Array<Campaign_Deck>;
};

export type Campaign_Deck_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Campaign_Deck_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Campaign_Deck_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Campaign_Deck_Aggregate_Bool_Exp_Count>;
};

export type Campaign_Deck_Aggregate_Bool_Exp_Bool_And = {
  arguments: Campaign_Deck_Select_Column_Campaign_Deck_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Campaign_Deck_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Campaign_Deck_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Campaign_Deck_Select_Column_Campaign_Deck_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Campaign_Deck_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Campaign_Deck_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Campaign_Deck_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Campaign_Deck_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "campaign_deck" */
export type Campaign_Deck_Aggregate_Fields = {
  __typename?: 'campaign_deck_aggregate_fields';
  avg?: Maybe<Campaign_Deck_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Campaign_Deck_Max_Fields>;
  min?: Maybe<Campaign_Deck_Min_Fields>;
  stddev?: Maybe<Campaign_Deck_Stddev_Fields>;
  stddev_pop?: Maybe<Campaign_Deck_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Campaign_Deck_Stddev_Samp_Fields>;
  sum?: Maybe<Campaign_Deck_Sum_Fields>;
  var_pop?: Maybe<Campaign_Deck_Var_Pop_Fields>;
  var_samp?: Maybe<Campaign_Deck_Var_Samp_Fields>;
  variance?: Maybe<Campaign_Deck_Variance_Fields>;
};


/** aggregate fields of "campaign_deck" */
export type Campaign_Deck_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Campaign_Deck_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "campaign_deck" */
export type Campaign_Deck_Aggregate_Order_By = {
  avg?: InputMaybe<Campaign_Deck_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Campaign_Deck_Max_Order_By>;
  min?: InputMaybe<Campaign_Deck_Min_Order_By>;
  stddev?: InputMaybe<Campaign_Deck_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Campaign_Deck_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Campaign_Deck_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Campaign_Deck_Sum_Order_By>;
  var_pop?: InputMaybe<Campaign_Deck_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Campaign_Deck_Var_Samp_Order_By>;
  variance?: InputMaybe<Campaign_Deck_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Campaign_Deck_Append_Input = {
  content?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "campaign_deck" */
export type Campaign_Deck_Arr_Rel_Insert_Input = {
  data: Array<Campaign_Deck_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Campaign_Deck_On_Conflict>;
};

/** aggregate avg on columns */
export type Campaign_Deck_Avg_Fields = {
  __typename?: 'campaign_deck_avg_fields';
  arkhamdb_id?: Maybe<Scalars['Float']>;
  arkhamdb_user?: Maybe<Scalars['Float']>;
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  next_deck_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "campaign_deck" */
export type Campaign_Deck_Avg_Order_By = {
  arkhamdb_id?: InputMaybe<Order_By>;
  arkhamdb_user?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  next_deck_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "campaign_deck". All fields are combined with a logical 'AND'. */
export type Campaign_Deck_Bool_Exp = {
  _and?: InputMaybe<Array<Campaign_Deck_Bool_Exp>>;
  _not?: InputMaybe<Campaign_Deck_Bool_Exp>;
  _or?: InputMaybe<Array<Campaign_Deck_Bool_Exp>>;
  archived?: InputMaybe<Boolean_Comparison_Exp>;
  arkhamdb_id?: InputMaybe<Int_Comparison_Exp>;
  arkhamdb_user?: InputMaybe<Int_Comparison_Exp>;
  base?: InputMaybe<Boolean_Comparison_Exp>;
  campaign?: InputMaybe<Campaign_Bool_Exp>;
  campaign_id?: InputMaybe<Int_Comparison_Exp>;
  content?: InputMaybe<Jsonb_Comparison_Exp>;
  content_hash?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  investigator?: InputMaybe<String_Comparison_Exp>;
  investigator_data?: InputMaybe<Investigator_Data_Bool_Exp>;
  local_uuid?: InputMaybe<String_Comparison_Exp>;
  next_deck?: InputMaybe<Campaign_Deck_Bool_Exp>;
  next_deck_id?: InputMaybe<Int_Comparison_Exp>;
  other_decks?: InputMaybe<Campaign_Deck_Bool_Exp>;
  other_decks_aggregate?: InputMaybe<Campaign_Deck_Aggregate_Bool_Exp>;
  owner?: InputMaybe<Users_Bool_Exp>;
  owner_id?: InputMaybe<String_Comparison_Exp>;
  previous_deck?: InputMaybe<Campaign_Deck_Bool_Exp>;
  previous_decks?: InputMaybe<Campaign_Deck_Bool_Exp>;
  previous_decks_aggregate?: InputMaybe<Campaign_Deck_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "campaign_deck" */
export enum Campaign_Deck_Constraint {
  /** unique or primary key constraint on columns "campaign_id", "arkhamdb_id" */
  DeckArkhamdbIdCampaignIdKey = 'deck_arkhamdb_id_campaign_id_key',
  /** unique or primary key constraint on columns "local_uuid", "campaign_id" */
  DeckLocalUuidCampaignIdKey = 'deck_local_uuid_campaign_id_key',
  /** unique or primary key constraint on columns "id" */
  DeckPkey = 'deck_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Campaign_Deck_Delete_At_Path_Input = {
  content?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Campaign_Deck_Delete_Elem_Input = {
  content?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Campaign_Deck_Delete_Key_Input = {
  content?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "campaign_deck" */
export type Campaign_Deck_Inc_Input = {
  arkhamdb_id?: InputMaybe<Scalars['Int']>;
  arkhamdb_user?: InputMaybe<Scalars['Int']>;
  campaign_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  next_deck_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "campaign_deck" */
export type Campaign_Deck_Insert_Input = {
  archived?: InputMaybe<Scalars['Boolean']>;
  arkhamdb_id?: InputMaybe<Scalars['Int']>;
  arkhamdb_user?: InputMaybe<Scalars['Int']>;
  base?: InputMaybe<Scalars['Boolean']>;
  campaign?: InputMaybe<Campaign_Obj_Rel_Insert_Input>;
  campaign_id?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['jsonb']>;
  content_hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  investigator?: InputMaybe<Scalars['String']>;
  investigator_data?: InputMaybe<Investigator_Data_Obj_Rel_Insert_Input>;
  local_uuid?: InputMaybe<Scalars['String']>;
  next_deck?: InputMaybe<Campaign_Deck_Obj_Rel_Insert_Input>;
  next_deck_id?: InputMaybe<Scalars['Int']>;
  other_decks?: InputMaybe<Campaign_Deck_Arr_Rel_Insert_Input>;
  owner?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  owner_id?: InputMaybe<Scalars['String']>;
  previous_deck?: InputMaybe<Campaign_Deck_Obj_Rel_Insert_Input>;
  previous_decks?: InputMaybe<Campaign_Deck_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Campaign_Deck_Max_Fields = {
  __typename?: 'campaign_deck_max_fields';
  arkhamdb_id?: Maybe<Scalars['Int']>;
  arkhamdb_user?: Maybe<Scalars['Int']>;
  campaign_id?: Maybe<Scalars['Int']>;
  content_hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  investigator?: Maybe<Scalars['String']>;
  local_uuid?: Maybe<Scalars['String']>;
  next_deck_id?: Maybe<Scalars['Int']>;
  owner_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "campaign_deck" */
export type Campaign_Deck_Max_Order_By = {
  arkhamdb_id?: InputMaybe<Order_By>;
  arkhamdb_user?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  content_hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investigator?: InputMaybe<Order_By>;
  local_uuid?: InputMaybe<Order_By>;
  next_deck_id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Campaign_Deck_Min_Fields = {
  __typename?: 'campaign_deck_min_fields';
  arkhamdb_id?: Maybe<Scalars['Int']>;
  arkhamdb_user?: Maybe<Scalars['Int']>;
  campaign_id?: Maybe<Scalars['Int']>;
  content_hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  investigator?: Maybe<Scalars['String']>;
  local_uuid?: Maybe<Scalars['String']>;
  next_deck_id?: Maybe<Scalars['Int']>;
  owner_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "campaign_deck" */
export type Campaign_Deck_Min_Order_By = {
  arkhamdb_id?: InputMaybe<Order_By>;
  arkhamdb_user?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  content_hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investigator?: InputMaybe<Order_By>;
  local_uuid?: InputMaybe<Order_By>;
  next_deck_id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "campaign_deck" */
export type Campaign_Deck_Mutation_Response = {
  __typename?: 'campaign_deck_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Campaign_Deck>;
};

/** input type for inserting object relation for remote table "campaign_deck" */
export type Campaign_Deck_Obj_Rel_Insert_Input = {
  data: Campaign_Deck_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Campaign_Deck_On_Conflict>;
};

/** on_conflict condition type for table "campaign_deck" */
export type Campaign_Deck_On_Conflict = {
  constraint: Campaign_Deck_Constraint;
  update_columns?: Array<Campaign_Deck_Update_Column>;
  where?: InputMaybe<Campaign_Deck_Bool_Exp>;
};

/** Ordering options when selecting data from "campaign_deck". */
export type Campaign_Deck_Order_By = {
  archived?: InputMaybe<Order_By>;
  arkhamdb_id?: InputMaybe<Order_By>;
  arkhamdb_user?: InputMaybe<Order_By>;
  base?: InputMaybe<Order_By>;
  campaign?: InputMaybe<Campaign_Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  content_hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investigator?: InputMaybe<Order_By>;
  investigator_data?: InputMaybe<Investigator_Data_Order_By>;
  local_uuid?: InputMaybe<Order_By>;
  next_deck?: InputMaybe<Campaign_Deck_Order_By>;
  next_deck_id?: InputMaybe<Order_By>;
  other_decks_aggregate?: InputMaybe<Campaign_Deck_Aggregate_Order_By>;
  owner?: InputMaybe<Users_Order_By>;
  owner_id?: InputMaybe<Order_By>;
  previous_deck?: InputMaybe<Campaign_Deck_Order_By>;
  previous_decks_aggregate?: InputMaybe<Campaign_Deck_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: campaign_deck */
export type Campaign_Deck_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Campaign_Deck_Prepend_Input = {
  content?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "campaign_deck" */
export enum Campaign_Deck_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  ArkhamdbId = 'arkhamdb_id',
  /** column name */
  ArkhamdbUser = 'arkhamdb_user',
  /** column name */
  Base = 'base',
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  Content = 'content',
  /** column name */
  ContentHash = 'content_hash',
  /** column name */
  Id = 'id',
  /** column name */
  Investigator = 'investigator',
  /** column name */
  LocalUuid = 'local_uuid',
  /** column name */
  NextDeckId = 'next_deck_id',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "campaign_deck_aggregate_bool_exp_bool_and_arguments_columns" columns of table "campaign_deck" */
export enum Campaign_Deck_Select_Column_Campaign_Deck_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Archived = 'archived',
  /** column name */
  Base = 'base'
}

/** select "campaign_deck_aggregate_bool_exp_bool_or_arguments_columns" columns of table "campaign_deck" */
export enum Campaign_Deck_Select_Column_Campaign_Deck_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Archived = 'archived',
  /** column name */
  Base = 'base'
}

/** input type for updating data in table "campaign_deck" */
export type Campaign_Deck_Set_Input = {
  archived?: InputMaybe<Scalars['Boolean']>;
  arkhamdb_id?: InputMaybe<Scalars['Int']>;
  arkhamdb_user?: InputMaybe<Scalars['Int']>;
  base?: InputMaybe<Scalars['Boolean']>;
  campaign_id?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['jsonb']>;
  content_hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  investigator?: InputMaybe<Scalars['String']>;
  local_uuid?: InputMaybe<Scalars['String']>;
  next_deck_id?: InputMaybe<Scalars['Int']>;
  owner_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Campaign_Deck_Stddev_Fields = {
  __typename?: 'campaign_deck_stddev_fields';
  arkhamdb_id?: Maybe<Scalars['Float']>;
  arkhamdb_user?: Maybe<Scalars['Float']>;
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  next_deck_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "campaign_deck" */
export type Campaign_Deck_Stddev_Order_By = {
  arkhamdb_id?: InputMaybe<Order_By>;
  arkhamdb_user?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  next_deck_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Campaign_Deck_Stddev_Pop_Fields = {
  __typename?: 'campaign_deck_stddev_pop_fields';
  arkhamdb_id?: Maybe<Scalars['Float']>;
  arkhamdb_user?: Maybe<Scalars['Float']>;
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  next_deck_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "campaign_deck" */
export type Campaign_Deck_Stddev_Pop_Order_By = {
  arkhamdb_id?: InputMaybe<Order_By>;
  arkhamdb_user?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  next_deck_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Campaign_Deck_Stddev_Samp_Fields = {
  __typename?: 'campaign_deck_stddev_samp_fields';
  arkhamdb_id?: Maybe<Scalars['Float']>;
  arkhamdb_user?: Maybe<Scalars['Float']>;
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  next_deck_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "campaign_deck" */
export type Campaign_Deck_Stddev_Samp_Order_By = {
  arkhamdb_id?: InputMaybe<Order_By>;
  arkhamdb_user?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  next_deck_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "campaign_deck" */
export type Campaign_Deck_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Campaign_Deck_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Campaign_Deck_Stream_Cursor_Value_Input = {
  archived?: InputMaybe<Scalars['Boolean']>;
  arkhamdb_id?: InputMaybe<Scalars['Int']>;
  arkhamdb_user?: InputMaybe<Scalars['Int']>;
  base?: InputMaybe<Scalars['Boolean']>;
  campaign_id?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['jsonb']>;
  content_hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  investigator?: InputMaybe<Scalars['String']>;
  local_uuid?: InputMaybe<Scalars['String']>;
  next_deck_id?: InputMaybe<Scalars['Int']>;
  owner_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Campaign_Deck_Sum_Fields = {
  __typename?: 'campaign_deck_sum_fields';
  arkhamdb_id?: Maybe<Scalars['Int']>;
  arkhamdb_user?: Maybe<Scalars['Int']>;
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  next_deck_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "campaign_deck" */
export type Campaign_Deck_Sum_Order_By = {
  arkhamdb_id?: InputMaybe<Order_By>;
  arkhamdb_user?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  next_deck_id?: InputMaybe<Order_By>;
};

/** update columns of table "campaign_deck" */
export enum Campaign_Deck_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  ArkhamdbId = 'arkhamdb_id',
  /** column name */
  ArkhamdbUser = 'arkhamdb_user',
  /** column name */
  Base = 'base',
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  Content = 'content',
  /** column name */
  ContentHash = 'content_hash',
  /** column name */
  Id = 'id',
  /** column name */
  Investigator = 'investigator',
  /** column name */
  LocalUuid = 'local_uuid',
  /** column name */
  NextDeckId = 'next_deck_id',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Campaign_Deck_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Campaign_Deck_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Campaign_Deck_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Campaign_Deck_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Campaign_Deck_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Campaign_Deck_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Campaign_Deck_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Campaign_Deck_Set_Input>;
  where: Campaign_Deck_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Campaign_Deck_Var_Pop_Fields = {
  __typename?: 'campaign_deck_var_pop_fields';
  arkhamdb_id?: Maybe<Scalars['Float']>;
  arkhamdb_user?: Maybe<Scalars['Float']>;
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  next_deck_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "campaign_deck" */
export type Campaign_Deck_Var_Pop_Order_By = {
  arkhamdb_id?: InputMaybe<Order_By>;
  arkhamdb_user?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  next_deck_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Campaign_Deck_Var_Samp_Fields = {
  __typename?: 'campaign_deck_var_samp_fields';
  arkhamdb_id?: Maybe<Scalars['Float']>;
  arkhamdb_user?: Maybe<Scalars['Float']>;
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  next_deck_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "campaign_deck" */
export type Campaign_Deck_Var_Samp_Order_By = {
  arkhamdb_id?: InputMaybe<Order_By>;
  arkhamdb_user?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  next_deck_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Campaign_Deck_Variance_Fields = {
  __typename?: 'campaign_deck_variance_fields';
  arkhamdb_id?: Maybe<Scalars['Float']>;
  arkhamdb_user?: Maybe<Scalars['Float']>;
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  next_deck_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "campaign_deck" */
export type Campaign_Deck_Variance_Order_By = {
  arkhamdb_id?: InputMaybe<Order_By>;
  arkhamdb_user?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  next_deck_id?: InputMaybe<Order_By>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Campaign_Delete_At_Path_Input = {
  campaignNotes?: InputMaybe<Array<Scalars['String']>>;
  chaosBag?: InputMaybe<Array<Scalars['String']>>;
  scenarioResults?: InputMaybe<Array<Scalars['String']>>;
  standaloneId?: InputMaybe<Array<Scalars['String']>>;
  tarot_reading?: InputMaybe<Array<Scalars['String']>>;
  weaknessSet?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Campaign_Delete_Elem_Input = {
  campaignNotes?: InputMaybe<Scalars['Int']>;
  chaosBag?: InputMaybe<Scalars['Int']>;
  scenarioResults?: InputMaybe<Scalars['Int']>;
  standaloneId?: InputMaybe<Scalars['Int']>;
  tarot_reading?: InputMaybe<Scalars['Int']>;
  weaknessSet?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Campaign_Delete_Key_Input = {
  campaignNotes?: InputMaybe<Scalars['String']>;
  chaosBag?: InputMaybe<Scalars['String']>;
  scenarioResults?: InputMaybe<Scalars['String']>;
  standaloneId?: InputMaybe<Scalars['String']>;
  tarot_reading?: InputMaybe<Scalars['String']>;
  weaknessSet?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "campaign_difficulty" */
export type Campaign_Difficulty = {
  __typename?: 'campaign_difficulty';
  value: Scalars['String'];
};

/** aggregated selection of "campaign_difficulty" */
export type Campaign_Difficulty_Aggregate = {
  __typename?: 'campaign_difficulty_aggregate';
  aggregate?: Maybe<Campaign_Difficulty_Aggregate_Fields>;
  nodes: Array<Campaign_Difficulty>;
};

/** aggregate fields of "campaign_difficulty" */
export type Campaign_Difficulty_Aggregate_Fields = {
  __typename?: 'campaign_difficulty_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Campaign_Difficulty_Max_Fields>;
  min?: Maybe<Campaign_Difficulty_Min_Fields>;
};


/** aggregate fields of "campaign_difficulty" */
export type Campaign_Difficulty_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Campaign_Difficulty_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "campaign_difficulty". All fields are combined with a logical 'AND'. */
export type Campaign_Difficulty_Bool_Exp = {
  _and?: InputMaybe<Array<Campaign_Difficulty_Bool_Exp>>;
  _not?: InputMaybe<Campaign_Difficulty_Bool_Exp>;
  _or?: InputMaybe<Array<Campaign_Difficulty_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "campaign_difficulty" */
export enum Campaign_Difficulty_Constraint {
  /** unique or primary key constraint on columns "value" */
  CampaignDifficultyPkey = 'campaign_difficulty_pkey'
}

export enum Campaign_Difficulty_Enum {
  Easy = 'easy',
  Expert = 'expert',
  Hard = 'hard',
  Standard = 'standard'
}

/** Boolean expression to compare columns of type "campaign_difficulty_enum". All fields are combined with logical 'AND'. */
export type Campaign_Difficulty_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Campaign_Difficulty_Enum>;
  _in?: InputMaybe<Array<Campaign_Difficulty_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Campaign_Difficulty_Enum>;
  _nin?: InputMaybe<Array<Campaign_Difficulty_Enum>>;
};

/** input type for inserting data into table "campaign_difficulty" */
export type Campaign_Difficulty_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Campaign_Difficulty_Max_Fields = {
  __typename?: 'campaign_difficulty_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Campaign_Difficulty_Min_Fields = {
  __typename?: 'campaign_difficulty_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "campaign_difficulty" */
export type Campaign_Difficulty_Mutation_Response = {
  __typename?: 'campaign_difficulty_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Campaign_Difficulty>;
};

/** on_conflict condition type for table "campaign_difficulty" */
export type Campaign_Difficulty_On_Conflict = {
  constraint: Campaign_Difficulty_Constraint;
  update_columns?: Array<Campaign_Difficulty_Update_Column>;
  where?: InputMaybe<Campaign_Difficulty_Bool_Exp>;
};

/** Ordering options when selecting data from "campaign_difficulty". */
export type Campaign_Difficulty_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: campaign_difficulty */
export type Campaign_Difficulty_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "campaign_difficulty" */
export enum Campaign_Difficulty_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "campaign_difficulty" */
export type Campaign_Difficulty_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "campaign_difficulty" */
export type Campaign_Difficulty_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Campaign_Difficulty_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Campaign_Difficulty_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "campaign_difficulty" */
export enum Campaign_Difficulty_Update_Column {
  /** column name */
  Value = 'value'
}

export type Campaign_Difficulty_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Campaign_Difficulty_Set_Input>;
  where: Campaign_Difficulty_Bool_Exp;
};

/** columns and relationships of "campaign_guide" */
export type Campaign_Guide = {
  __typename?: 'campaign_guide';
  /** An array relationship */
  access: Array<Campaign_Access>;
  /** An aggregate relationship */
  access_aggregate: Campaign_Access_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  guide_achievements: Array<Guide_Achievement>;
  /** An aggregate relationship */
  guide_achievements_aggregate: Guide_Achievement_Aggregate;
  /** An array relationship */
  guide_inputs: Array<Guide_Input>;
  /** An aggregate relationship */
  guide_inputs_aggregate: Guide_Input_Aggregate;
  id?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['String']>;
};


/** columns and relationships of "campaign_guide" */
export type Campaign_GuideAccessArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Access_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Access_Order_By>>;
  where?: InputMaybe<Campaign_Access_Bool_Exp>;
};


/** columns and relationships of "campaign_guide" */
export type Campaign_GuideAccess_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Access_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Access_Order_By>>;
  where?: InputMaybe<Campaign_Access_Bool_Exp>;
};


/** columns and relationships of "campaign_guide" */
export type Campaign_GuideGuide_AchievementsArgs = {
  distinct_on?: InputMaybe<Array<Guide_Achievement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Guide_Achievement_Order_By>>;
  where?: InputMaybe<Guide_Achievement_Bool_Exp>;
};


/** columns and relationships of "campaign_guide" */
export type Campaign_GuideGuide_Achievements_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Guide_Achievement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Guide_Achievement_Order_By>>;
  where?: InputMaybe<Guide_Achievement_Bool_Exp>;
};


/** columns and relationships of "campaign_guide" */
export type Campaign_GuideGuide_InputsArgs = {
  distinct_on?: InputMaybe<Array<Guide_Input_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Guide_Input_Order_By>>;
  where?: InputMaybe<Guide_Input_Bool_Exp>;
};


/** columns and relationships of "campaign_guide" */
export type Campaign_GuideGuide_Inputs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Guide_Input_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Guide_Input_Order_By>>;
  where?: InputMaybe<Guide_Input_Bool_Exp>;
};

/** aggregated selection of "campaign_guide" */
export type Campaign_Guide_Aggregate = {
  __typename?: 'campaign_guide_aggregate';
  aggregate?: Maybe<Campaign_Guide_Aggregate_Fields>;
  nodes: Array<Campaign_Guide>;
};

/** aggregate fields of "campaign_guide" */
export type Campaign_Guide_Aggregate_Fields = {
  __typename?: 'campaign_guide_aggregate_fields';
  avg?: Maybe<Campaign_Guide_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Campaign_Guide_Max_Fields>;
  min?: Maybe<Campaign_Guide_Min_Fields>;
  stddev?: Maybe<Campaign_Guide_Stddev_Fields>;
  stddev_pop?: Maybe<Campaign_Guide_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Campaign_Guide_Stddev_Samp_Fields>;
  sum?: Maybe<Campaign_Guide_Sum_Fields>;
  var_pop?: Maybe<Campaign_Guide_Var_Pop_Fields>;
  var_samp?: Maybe<Campaign_Guide_Var_Samp_Fields>;
  variance?: Maybe<Campaign_Guide_Variance_Fields>;
};


/** aggregate fields of "campaign_guide" */
export type Campaign_Guide_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Campaign_Guide_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Campaign_Guide_Avg_Fields = {
  __typename?: 'campaign_guide_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "campaign_guide". All fields are combined with a logical 'AND'. */
export type Campaign_Guide_Bool_Exp = {
  _and?: InputMaybe<Array<Campaign_Guide_Bool_Exp>>;
  _not?: InputMaybe<Campaign_Guide_Bool_Exp>;
  _or?: InputMaybe<Array<Campaign_Guide_Bool_Exp>>;
  access?: InputMaybe<Campaign_Access_Bool_Exp>;
  access_aggregate?: InputMaybe<Campaign_Access_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  guide_achievements?: InputMaybe<Guide_Achievement_Bool_Exp>;
  guide_achievements_aggregate?: InputMaybe<Guide_Achievement_Aggregate_Bool_Exp>;
  guide_inputs?: InputMaybe<Guide_Input_Bool_Exp>;
  guide_inputs_aggregate?: InputMaybe<Guide_Input_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  uuid?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "campaign_guide" */
export type Campaign_Guide_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "campaign_guide" */
export type Campaign_Guide_Insert_Input = {
  access?: InputMaybe<Campaign_Access_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  guide_achievements?: InputMaybe<Guide_Achievement_Arr_Rel_Insert_Input>;
  guide_inputs?: InputMaybe<Guide_Input_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  owner?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  uuid?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Campaign_Guide_Max_Fields = {
  __typename?: 'campaign_guide_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Campaign_Guide_Min_Fields = {
  __typename?: 'campaign_guide_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "campaign_guide" */
export type Campaign_Guide_Mutation_Response = {
  __typename?: 'campaign_guide_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Campaign_Guide>;
};

/** input type for inserting object relation for remote table "campaign_guide" */
export type Campaign_Guide_Obj_Rel_Insert_Input = {
  data: Campaign_Guide_Insert_Input;
};

/** Ordering options when selecting data from "campaign_guide". */
export type Campaign_Guide_Order_By = {
  access_aggregate?: InputMaybe<Campaign_Access_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  guide_achievements_aggregate?: InputMaybe<Guide_Achievement_Aggregate_Order_By>;
  guide_inputs_aggregate?: InputMaybe<Guide_Input_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** select columns of table "campaign_guide" */
export enum Campaign_Guide_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Owner = 'owner',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "campaign_guide" */
export type Campaign_Guide_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  owner?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  uuid?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Campaign_Guide_Stddev_Fields = {
  __typename?: 'campaign_guide_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Campaign_Guide_Stddev_Pop_Fields = {
  __typename?: 'campaign_guide_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Campaign_Guide_Stddev_Samp_Fields = {
  __typename?: 'campaign_guide_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "campaign_guide" */
export type Campaign_Guide_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Campaign_Guide_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Campaign_Guide_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  owner?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  uuid?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Campaign_Guide_Sum_Fields = {
  __typename?: 'campaign_guide_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

export type Campaign_Guide_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Campaign_Guide_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Campaign_Guide_Set_Input>;
  where: Campaign_Guide_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Campaign_Guide_Var_Pop_Fields = {
  __typename?: 'campaign_guide_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Campaign_Guide_Var_Samp_Fields = {
  __typename?: 'campaign_guide_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Campaign_Guide_Variance_Fields = {
  __typename?: 'campaign_guide_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** input type for incrementing numeric columns in table "campaign" */
export type Campaign_Inc_Input = {
  guide_version?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  link_a_campaign_id?: InputMaybe<Scalars['Int']>;
  link_b_campaign_id?: InputMaybe<Scalars['Int']>;
  link_campaign_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "campaign" */
export type Campaign_Insert_Input = {
  access?: InputMaybe<Campaign_Access_Arr_Rel_Insert_Input>;
  archived?: InputMaybe<Scalars['Boolean']>;
  base_decks?: InputMaybe<Base_Decks_Arr_Rel_Insert_Input>;
  campaignNotes?: InputMaybe<Scalars['jsonb']>;
  campaign_guide?: InputMaybe<Campaign_Guide_Obj_Rel_Insert_Input>;
  chaosBag?: InputMaybe<Scalars['jsonb']>;
  chaos_bag_result?: InputMaybe<Chaos_Bag_Result_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  cycleCode?: InputMaybe<Scalars['String']>;
  deleted?: InputMaybe<Scalars['Boolean']>;
  difficulty?: InputMaybe<Scalars['String']>;
  guide_version?: InputMaybe<Scalars['Int']>;
  guided?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  investigator_data?: InputMaybe<Investigator_Data_Arr_Rel_Insert_Input>;
  investigators?: InputMaybe<Campaign_Investigator_Arr_Rel_Insert_Input>;
  latest_decks?: InputMaybe<Latest_Decks_Arr_Rel_Insert_Input>;
  link_a_campaign?: InputMaybe<Campaign_Obj_Rel_Insert_Input>;
  link_a_campaign_id?: InputMaybe<Scalars['Int']>;
  link_b_campaign?: InputMaybe<Campaign_Obj_Rel_Insert_Input>;
  link_b_campaign_id?: InputMaybe<Scalars['Int']>;
  link_campaign_id?: InputMaybe<Scalars['Int']>;
  linked_campaign?: InputMaybe<Campaign_Obj_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  owner_id?: InputMaybe<Scalars['String']>;
  scenarioResults?: InputMaybe<Scalars['jsonb']>;
  showInterludes?: InputMaybe<Scalars['Boolean']>;
  standaloneId?: InputMaybe<Scalars['jsonb']>;
  tarot_reading?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  uuid?: InputMaybe<Scalars['String']>;
  weaknessSet?: InputMaybe<Scalars['jsonb']>;
};

/** columns and relationships of "campaign_investigator" */
export type Campaign_Investigator = {
  __typename?: 'campaign_investigator';
  /** An object relationship */
  campaign: Campaign;
  campaign_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  /** A computed field, executes function "campaign_investigator_id" */
  id?: Maybe<Scalars['String']>;
  investigator: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "campaign_investigator" */
export type Campaign_Investigator_Aggregate = {
  __typename?: 'campaign_investigator_aggregate';
  aggregate?: Maybe<Campaign_Investigator_Aggregate_Fields>;
  nodes: Array<Campaign_Investigator>;
};

export type Campaign_Investigator_Aggregate_Bool_Exp = {
  count?: InputMaybe<Campaign_Investigator_Aggregate_Bool_Exp_Count>;
};

export type Campaign_Investigator_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Campaign_Investigator_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Campaign_Investigator_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "campaign_investigator" */
export type Campaign_Investigator_Aggregate_Fields = {
  __typename?: 'campaign_investigator_aggregate_fields';
  avg?: Maybe<Campaign_Investigator_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Campaign_Investigator_Max_Fields>;
  min?: Maybe<Campaign_Investigator_Min_Fields>;
  stddev?: Maybe<Campaign_Investigator_Stddev_Fields>;
  stddev_pop?: Maybe<Campaign_Investigator_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Campaign_Investigator_Stddev_Samp_Fields>;
  sum?: Maybe<Campaign_Investigator_Sum_Fields>;
  var_pop?: Maybe<Campaign_Investigator_Var_Pop_Fields>;
  var_samp?: Maybe<Campaign_Investigator_Var_Samp_Fields>;
  variance?: Maybe<Campaign_Investigator_Variance_Fields>;
};


/** aggregate fields of "campaign_investigator" */
export type Campaign_Investigator_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Campaign_Investigator_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "campaign_investigator" */
export type Campaign_Investigator_Aggregate_Order_By = {
  avg?: InputMaybe<Campaign_Investigator_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Campaign_Investigator_Max_Order_By>;
  min?: InputMaybe<Campaign_Investigator_Min_Order_By>;
  stddev?: InputMaybe<Campaign_Investigator_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Campaign_Investigator_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Campaign_Investigator_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Campaign_Investigator_Sum_Order_By>;
  var_pop?: InputMaybe<Campaign_Investigator_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Campaign_Investigator_Var_Samp_Order_By>;
  variance?: InputMaybe<Campaign_Investigator_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "campaign_investigator" */
export type Campaign_Investigator_Arr_Rel_Insert_Input = {
  data: Array<Campaign_Investigator_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Campaign_Investigator_On_Conflict>;
};

/** aggregate avg on columns */
export type Campaign_Investigator_Avg_Fields = {
  __typename?: 'campaign_investigator_avg_fields';
  campaign_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "campaign_investigator" */
export type Campaign_Investigator_Avg_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "campaign_investigator". All fields are combined with a logical 'AND'. */
export type Campaign_Investigator_Bool_Exp = {
  _and?: InputMaybe<Array<Campaign_Investigator_Bool_Exp>>;
  _not?: InputMaybe<Campaign_Investigator_Bool_Exp>;
  _or?: InputMaybe<Array<Campaign_Investigator_Bool_Exp>>;
  campaign?: InputMaybe<Campaign_Bool_Exp>;
  campaign_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  investigator?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "campaign_investigator" */
export enum Campaign_Investigator_Constraint {
  /** unique or primary key constraint on columns "campaign_id", "investigator" */
  CampaignInvestigatorCampaignIdInvestigatorKey = 'campaign_investigator_campaign_id_investigator_key',
  /** unique or primary key constraint on columns "campaign_id", "investigator" */
  CampaignInvestigatorPkey = 'campaign_investigator_pkey'
}

/** input type for incrementing numeric columns in table "campaign_investigator" */
export type Campaign_Investigator_Inc_Input = {
  campaign_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "campaign_investigator" */
export type Campaign_Investigator_Insert_Input = {
  campaign?: InputMaybe<Campaign_Obj_Rel_Insert_Input>;
  campaign_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  investigator?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Campaign_Investigator_Max_Fields = {
  __typename?: 'campaign_investigator_max_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  investigator?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "campaign_investigator" */
export type Campaign_Investigator_Max_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  investigator?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Campaign_Investigator_Min_Fields = {
  __typename?: 'campaign_investigator_min_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  investigator?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "campaign_investigator" */
export type Campaign_Investigator_Min_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  investigator?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "campaign_investigator" */
export type Campaign_Investigator_Mutation_Response = {
  __typename?: 'campaign_investigator_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Campaign_Investigator>;
};

/** on_conflict condition type for table "campaign_investigator" */
export type Campaign_Investigator_On_Conflict = {
  constraint: Campaign_Investigator_Constraint;
  update_columns?: Array<Campaign_Investigator_Update_Column>;
  where?: InputMaybe<Campaign_Investigator_Bool_Exp>;
};

/** Ordering options when selecting data from "campaign_investigator". */
export type Campaign_Investigator_Order_By = {
  campaign?: InputMaybe<Campaign_Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investigator?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: campaign_investigator */
export type Campaign_Investigator_Pk_Columns_Input = {
  campaign_id: Scalars['Int'];
  investigator: Scalars['String'];
};

/** select columns of table "campaign_investigator" */
export enum Campaign_Investigator_Select_Column {
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Investigator = 'investigator',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "campaign_investigator" */
export type Campaign_Investigator_Set_Input = {
  campaign_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  investigator?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Campaign_Investigator_Stddev_Fields = {
  __typename?: 'campaign_investigator_stddev_fields';
  campaign_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "campaign_investigator" */
export type Campaign_Investigator_Stddev_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Campaign_Investigator_Stddev_Pop_Fields = {
  __typename?: 'campaign_investigator_stddev_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "campaign_investigator" */
export type Campaign_Investigator_Stddev_Pop_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Campaign_Investigator_Stddev_Samp_Fields = {
  __typename?: 'campaign_investigator_stddev_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "campaign_investigator" */
export type Campaign_Investigator_Stddev_Samp_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "campaign_investigator" */
export type Campaign_Investigator_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Campaign_Investigator_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Campaign_Investigator_Stream_Cursor_Value_Input = {
  campaign_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  investigator?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Campaign_Investigator_Sum_Fields = {
  __typename?: 'campaign_investigator_sum_fields';
  campaign_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "campaign_investigator" */
export type Campaign_Investigator_Sum_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
};

/** update columns of table "campaign_investigator" */
export enum Campaign_Investigator_Update_Column {
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Investigator = 'investigator',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Campaign_Investigator_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Campaign_Investigator_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Campaign_Investigator_Set_Input>;
  where: Campaign_Investigator_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Campaign_Investigator_Var_Pop_Fields = {
  __typename?: 'campaign_investigator_var_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "campaign_investigator" */
export type Campaign_Investigator_Var_Pop_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Campaign_Investigator_Var_Samp_Fields = {
  __typename?: 'campaign_investigator_var_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "campaign_investigator" */
export type Campaign_Investigator_Var_Samp_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Campaign_Investigator_Variance_Fields = {
  __typename?: 'campaign_investigator_variance_fields';
  campaign_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "campaign_investigator" */
export type Campaign_Investigator_Variance_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Campaign_Max_Fields = {
  __typename?: 'campaign_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  cycleCode?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Scalars['String']>;
  guide_version?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  link_a_campaign_id?: Maybe<Scalars['Int']>;
  link_b_campaign_id?: Maybe<Scalars['Int']>;
  link_campaign_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Campaign_Min_Fields = {
  __typename?: 'campaign_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  cycleCode?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Scalars['String']>;
  guide_version?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  link_a_campaign_id?: Maybe<Scalars['Int']>;
  link_b_campaign_id?: Maybe<Scalars['Int']>;
  link_campaign_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "campaign" */
export type Campaign_Mutation_Response = {
  __typename?: 'campaign_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Campaign>;
};

/** input type for inserting object relation for remote table "campaign" */
export type Campaign_Obj_Rel_Insert_Input = {
  data: Campaign_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Campaign_On_Conflict>;
};

/** on_conflict condition type for table "campaign" */
export type Campaign_On_Conflict = {
  constraint: Campaign_Constraint;
  update_columns?: Array<Campaign_Update_Column>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};

/** Ordering options when selecting data from "campaign". */
export type Campaign_Order_By = {
  access_aggregate?: InputMaybe<Campaign_Access_Aggregate_Order_By>;
  archived?: InputMaybe<Order_By>;
  base_decks_aggregate?: InputMaybe<Base_Decks_Aggregate_Order_By>;
  campaignNotes?: InputMaybe<Order_By>;
  campaign_guide?: InputMaybe<Campaign_Guide_Order_By>;
  chaosBag?: InputMaybe<Order_By>;
  chaos_bag_result_aggregate?: InputMaybe<Chaos_Bag_Result_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  cycleCode?: InputMaybe<Order_By>;
  deleted?: InputMaybe<Order_By>;
  difficulty?: InputMaybe<Order_By>;
  guide_version?: InputMaybe<Order_By>;
  guided?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investigator_data_aggregate?: InputMaybe<Investigator_Data_Aggregate_Order_By>;
  investigators_aggregate?: InputMaybe<Campaign_Investigator_Aggregate_Order_By>;
  latest_decks_aggregate?: InputMaybe<Latest_Decks_Aggregate_Order_By>;
  link_a_campaign?: InputMaybe<Campaign_Order_By>;
  link_a_campaign_id?: InputMaybe<Order_By>;
  link_b_campaign?: InputMaybe<Campaign_Order_By>;
  link_b_campaign_id?: InputMaybe<Order_By>;
  link_campaign_id?: InputMaybe<Order_By>;
  linked_campaign?: InputMaybe<Campaign_Order_By>;
  name?: InputMaybe<Order_By>;
  owner?: InputMaybe<Users_Order_By>;
  owner_id?: InputMaybe<Order_By>;
  scenarioResults?: InputMaybe<Order_By>;
  showInterludes?: InputMaybe<Order_By>;
  standaloneId?: InputMaybe<Order_By>;
  tarot_reading?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
  weaknessSet?: InputMaybe<Order_By>;
};

/** primary key columns input for table: campaign */
export type Campaign_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Campaign_Prepend_Input = {
  campaignNotes?: InputMaybe<Scalars['jsonb']>;
  chaosBag?: InputMaybe<Scalars['jsonb']>;
  scenarioResults?: InputMaybe<Scalars['jsonb']>;
  standaloneId?: InputMaybe<Scalars['jsonb']>;
  tarot_reading?: InputMaybe<Scalars['jsonb']>;
  weaknessSet?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "campaign" */
export enum Campaign_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CampaignNotes = 'campaignNotes',
  /** column name */
  ChaosBag = 'chaosBag',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CycleCode = 'cycleCode',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  GuideVersion = 'guide_version',
  /** column name */
  Guided = 'guided',
  /** column name */
  Id = 'id',
  /** column name */
  LinkACampaignId = 'link_a_campaign_id',
  /** column name */
  LinkBCampaignId = 'link_b_campaign_id',
  /** column name */
  LinkCampaignId = 'link_campaign_id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  ScenarioResults = 'scenarioResults',
  /** column name */
  ShowInterludes = 'showInterludes',
  /** column name */
  StandaloneId = 'standaloneId',
  /** column name */
  TarotReading = 'tarot_reading',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
  /** column name */
  WeaknessSet = 'weaknessSet'
}

/** input type for updating data in table "campaign" */
export type Campaign_Set_Input = {
  archived?: InputMaybe<Scalars['Boolean']>;
  campaignNotes?: InputMaybe<Scalars['jsonb']>;
  chaosBag?: InputMaybe<Scalars['jsonb']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  cycleCode?: InputMaybe<Scalars['String']>;
  deleted?: InputMaybe<Scalars['Boolean']>;
  difficulty?: InputMaybe<Scalars['String']>;
  guide_version?: InputMaybe<Scalars['Int']>;
  guided?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  link_a_campaign_id?: InputMaybe<Scalars['Int']>;
  link_b_campaign_id?: InputMaybe<Scalars['Int']>;
  link_campaign_id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['String']>;
  scenarioResults?: InputMaybe<Scalars['jsonb']>;
  showInterludes?: InputMaybe<Scalars['Boolean']>;
  standaloneId?: InputMaybe<Scalars['jsonb']>;
  tarot_reading?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  uuid?: InputMaybe<Scalars['String']>;
  weaknessSet?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type Campaign_Stddev_Fields = {
  __typename?: 'campaign_stddev_fields';
  guide_version?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  link_a_campaign_id?: Maybe<Scalars['Float']>;
  link_b_campaign_id?: Maybe<Scalars['Float']>;
  link_campaign_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Campaign_Stddev_Pop_Fields = {
  __typename?: 'campaign_stddev_pop_fields';
  guide_version?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  link_a_campaign_id?: Maybe<Scalars['Float']>;
  link_b_campaign_id?: Maybe<Scalars['Float']>;
  link_campaign_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Campaign_Stddev_Samp_Fields = {
  __typename?: 'campaign_stddev_samp_fields';
  guide_version?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  link_a_campaign_id?: Maybe<Scalars['Float']>;
  link_b_campaign_id?: Maybe<Scalars['Float']>;
  link_campaign_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "campaign" */
export type Campaign_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Campaign_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Campaign_Stream_Cursor_Value_Input = {
  archived?: InputMaybe<Scalars['Boolean']>;
  campaignNotes?: InputMaybe<Scalars['jsonb']>;
  chaosBag?: InputMaybe<Scalars['jsonb']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  cycleCode?: InputMaybe<Scalars['String']>;
  deleted?: InputMaybe<Scalars['Boolean']>;
  difficulty?: InputMaybe<Scalars['String']>;
  guide_version?: InputMaybe<Scalars['Int']>;
  guided?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  link_a_campaign_id?: InputMaybe<Scalars['Int']>;
  link_b_campaign_id?: InputMaybe<Scalars['Int']>;
  link_campaign_id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['String']>;
  scenarioResults?: InputMaybe<Scalars['jsonb']>;
  showInterludes?: InputMaybe<Scalars['Boolean']>;
  standaloneId?: InputMaybe<Scalars['jsonb']>;
  tarot_reading?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  uuid?: InputMaybe<Scalars['String']>;
  weaknessSet?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate sum on columns */
export type Campaign_Sum_Fields = {
  __typename?: 'campaign_sum_fields';
  guide_version?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  link_a_campaign_id?: Maybe<Scalars['Int']>;
  link_b_campaign_id?: Maybe<Scalars['Int']>;
  link_campaign_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "campaign" */
export enum Campaign_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CampaignNotes = 'campaignNotes',
  /** column name */
  ChaosBag = 'chaosBag',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CycleCode = 'cycleCode',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  GuideVersion = 'guide_version',
  /** column name */
  Guided = 'guided',
  /** column name */
  Id = 'id',
  /** column name */
  LinkACampaignId = 'link_a_campaign_id',
  /** column name */
  LinkBCampaignId = 'link_b_campaign_id',
  /** column name */
  LinkCampaignId = 'link_campaign_id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  ScenarioResults = 'scenarioResults',
  /** column name */
  ShowInterludes = 'showInterludes',
  /** column name */
  StandaloneId = 'standaloneId',
  /** column name */
  TarotReading = 'tarot_reading',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid',
  /** column name */
  WeaknessSet = 'weaknessSet'
}

export type Campaign_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Campaign_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Campaign_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Campaign_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Campaign_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Campaign_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Campaign_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Campaign_Set_Input>;
  where: Campaign_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Campaign_Var_Pop_Fields = {
  __typename?: 'campaign_var_pop_fields';
  guide_version?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  link_a_campaign_id?: Maybe<Scalars['Float']>;
  link_b_campaign_id?: Maybe<Scalars['Float']>;
  link_campaign_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Campaign_Var_Samp_Fields = {
  __typename?: 'campaign_var_samp_fields';
  guide_version?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  link_a_campaign_id?: Maybe<Scalars['Float']>;
  link_b_campaign_id?: Maybe<Scalars['Float']>;
  link_campaign_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Campaign_Variance_Fields = {
  __typename?: 'campaign_variance_fields';
  guide_version?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  link_a_campaign_id?: Maybe<Scalars['Float']>;
  link_b_campaign_id?: Maybe<Scalars['Float']>;
  link_campaign_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "campaigns_by_cycle" */
export type Campaigns_By_Cycle = {
  __typename?: 'campaigns_by_cycle';
  count?: Maybe<Scalars['bigint']>;
  cyclecode?: Maybe<Scalars['String']>;
};

/** aggregated selection of "campaigns_by_cycle" */
export type Campaigns_By_Cycle_Aggregate = {
  __typename?: 'campaigns_by_cycle_aggregate';
  aggregate?: Maybe<Campaigns_By_Cycle_Aggregate_Fields>;
  nodes: Array<Campaigns_By_Cycle>;
};

/** aggregate fields of "campaigns_by_cycle" */
export type Campaigns_By_Cycle_Aggregate_Fields = {
  __typename?: 'campaigns_by_cycle_aggregate_fields';
  avg?: Maybe<Campaigns_By_Cycle_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Campaigns_By_Cycle_Max_Fields>;
  min?: Maybe<Campaigns_By_Cycle_Min_Fields>;
  stddev?: Maybe<Campaigns_By_Cycle_Stddev_Fields>;
  stddev_pop?: Maybe<Campaigns_By_Cycle_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Campaigns_By_Cycle_Stddev_Samp_Fields>;
  sum?: Maybe<Campaigns_By_Cycle_Sum_Fields>;
  var_pop?: Maybe<Campaigns_By_Cycle_Var_Pop_Fields>;
  var_samp?: Maybe<Campaigns_By_Cycle_Var_Samp_Fields>;
  variance?: Maybe<Campaigns_By_Cycle_Variance_Fields>;
};


/** aggregate fields of "campaigns_by_cycle" */
export type Campaigns_By_Cycle_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Campaigns_By_Cycle_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Campaigns_By_Cycle_Avg_Fields = {
  __typename?: 'campaigns_by_cycle_avg_fields';
  count?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "campaigns_by_cycle". All fields are combined with a logical 'AND'. */
export type Campaigns_By_Cycle_Bool_Exp = {
  _and?: InputMaybe<Array<Campaigns_By_Cycle_Bool_Exp>>;
  _not?: InputMaybe<Campaigns_By_Cycle_Bool_Exp>;
  _or?: InputMaybe<Array<Campaigns_By_Cycle_Bool_Exp>>;
  count?: InputMaybe<Bigint_Comparison_Exp>;
  cyclecode?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Campaigns_By_Cycle_Max_Fields = {
  __typename?: 'campaigns_by_cycle_max_fields';
  count?: Maybe<Scalars['bigint']>;
  cyclecode?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Campaigns_By_Cycle_Min_Fields = {
  __typename?: 'campaigns_by_cycle_min_fields';
  count?: Maybe<Scalars['bigint']>;
  cyclecode?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "campaigns_by_cycle". */
export type Campaigns_By_Cycle_Order_By = {
  count?: InputMaybe<Order_By>;
  cyclecode?: InputMaybe<Order_By>;
};

/** select columns of table "campaigns_by_cycle" */
export enum Campaigns_By_Cycle_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  Cyclecode = 'cyclecode'
}

/** aggregate stddev on columns */
export type Campaigns_By_Cycle_Stddev_Fields = {
  __typename?: 'campaigns_by_cycle_stddev_fields';
  count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Campaigns_By_Cycle_Stddev_Pop_Fields = {
  __typename?: 'campaigns_by_cycle_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Campaigns_By_Cycle_Stddev_Samp_Fields = {
  __typename?: 'campaigns_by_cycle_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "campaigns_by_cycle" */
export type Campaigns_By_Cycle_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Campaigns_By_Cycle_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Campaigns_By_Cycle_Stream_Cursor_Value_Input = {
  count?: InputMaybe<Scalars['bigint']>;
  cyclecode?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Campaigns_By_Cycle_Sum_Fields = {
  __typename?: 'campaigns_by_cycle_sum_fields';
  count?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Campaigns_By_Cycle_Var_Pop_Fields = {
  __typename?: 'campaigns_by_cycle_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Campaigns_By_Cycle_Var_Samp_Fields = {
  __typename?: 'campaigns_by_cycle_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Campaigns_By_Cycle_Variance_Fields = {
  __typename?: 'campaigns_by_cycle_variance_fields';
  count?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "card" */
export type Card = {
  __typename?: 'card';
  back_link?: Maybe<Scalars['String']>;
  clues?: Maybe<Scalars['Int']>;
  code: Scalars['String'];
  cost?: Maybe<Scalars['Int']>;
  deck_limit?: Maybe<Scalars['Int']>;
  deck_options?: Maybe<Scalars['jsonb']>;
  deck_requirements?: Maybe<Scalars['jsonb']>;
  doom?: Maybe<Scalars['Int']>;
  double_sided?: Maybe<Scalars['Boolean']>;
  encounter_code?: Maybe<Scalars['String']>;
  encounter_position?: Maybe<Scalars['Int']>;
  enemy_damage?: Maybe<Scalars['Int']>;
  enemy_evade?: Maybe<Scalars['Int']>;
  enemy_fight?: Maybe<Scalars['Int']>;
  enemy_horror?: Maybe<Scalars['Int']>;
  exceptional?: Maybe<Scalars['Boolean']>;
  exile?: Maybe<Scalars['Boolean']>;
  faction_code: Scalars['String'];
  health?: Maybe<Scalars['Int']>;
  hidden?: Maybe<Scalars['Boolean']>;
  illustrator?: Maybe<Scalars['String']>;
  is_unique?: Maybe<Scalars['Boolean']>;
  myriad?: Maybe<Scalars['Boolean']>;
  pack_code: Scalars['String'];
  pack_position: Scalars['Int'];
  /** An array relationship */
  packs: Array<Card_Pack>;
  /** An aggregate relationship */
  packs_aggregate: Card_Pack_Aggregate;
  permanent?: Maybe<Scalars['Boolean']>;
  position: Scalars['Int'];
  quantity: Scalars['Int'];
  real_back_flavor?: Maybe<Scalars['String']>;
  real_back_name?: Maybe<Scalars['String']>;
  real_back_text?: Maybe<Scalars['String']>;
  real_flavor?: Maybe<Scalars['String']>;
  real_name: Scalars['String'];
  real_pack_name: Scalars['String'];
  real_slot?: Maybe<Scalars['String']>;
  real_subname?: Maybe<Scalars['String']>;
  real_text?: Maybe<Scalars['String']>;
  real_traits?: Maybe<Scalars['String']>;
  restrictions?: Maybe<Scalars['jsonb']>;
  sanity?: Maybe<Scalars['Int']>;
  shroud?: Maybe<Scalars['Int']>;
  skill_agility?: Maybe<Scalars['Int']>;
  skill_combat?: Maybe<Scalars['Int']>;
  skill_intellect?: Maybe<Scalars['Int']>;
  skill_wild?: Maybe<Scalars['Int']>;
  skill_willpower?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['Int']>;
  subtype_code?: Maybe<Scalars['String']>;
  /** An array relationship */
  translations: Array<Card_Text>;
  /** An aggregate relationship */
  translations_aggregate: Card_Text_Aggregate;
  type_code: Scalars['String'];
  victory?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "card" */
export type CardDeck_OptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "card" */
export type CardDeck_RequirementsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "card" */
export type CardPacksArgs = {
  distinct_on?: InputMaybe<Array<Card_Pack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Pack_Order_By>>;
  where?: InputMaybe<Card_Pack_Bool_Exp>;
};


/** columns and relationships of "card" */
export type CardPacks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Card_Pack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Pack_Order_By>>;
  where?: InputMaybe<Card_Pack_Bool_Exp>;
};


/** columns and relationships of "card" */
export type CardRestrictionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "card" */
export type CardTranslationsArgs = {
  distinct_on?: InputMaybe<Array<Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Text_Order_By>>;
  where?: InputMaybe<Card_Text_Bool_Exp>;
};


/** columns and relationships of "card" */
export type CardTranslations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Text_Order_By>>;
  where?: InputMaybe<Card_Text_Bool_Exp>;
};

/** aggregated selection of "card" */
export type Card_Aggregate = {
  __typename?: 'card_aggregate';
  aggregate?: Maybe<Card_Aggregate_Fields>;
  nodes: Array<Card>;
};

/** aggregate fields of "card" */
export type Card_Aggregate_Fields = {
  __typename?: 'card_aggregate_fields';
  avg?: Maybe<Card_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Card_Max_Fields>;
  min?: Maybe<Card_Min_Fields>;
  stddev?: Maybe<Card_Stddev_Fields>;
  stddev_pop?: Maybe<Card_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Card_Stddev_Samp_Fields>;
  sum?: Maybe<Card_Sum_Fields>;
  var_pop?: Maybe<Card_Var_Pop_Fields>;
  var_samp?: Maybe<Card_Var_Samp_Fields>;
  variance?: Maybe<Card_Variance_Fields>;
};


/** aggregate fields of "card" */
export type Card_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Card_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Card_Append_Input = {
  deck_options?: InputMaybe<Scalars['jsonb']>;
  deck_requirements?: InputMaybe<Scalars['jsonb']>;
  restrictions?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Card_Avg_Fields = {
  __typename?: 'card_avg_fields';
  clues?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  deck_limit?: Maybe<Scalars['Float']>;
  doom?: Maybe<Scalars['Float']>;
  encounter_position?: Maybe<Scalars['Float']>;
  enemy_damage?: Maybe<Scalars['Float']>;
  enemy_evade?: Maybe<Scalars['Float']>;
  enemy_fight?: Maybe<Scalars['Float']>;
  enemy_horror?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  pack_position?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sanity?: Maybe<Scalars['Float']>;
  shroud?: Maybe<Scalars['Float']>;
  skill_agility?: Maybe<Scalars['Float']>;
  skill_combat?: Maybe<Scalars['Float']>;
  skill_intellect?: Maybe<Scalars['Float']>;
  skill_wild?: Maybe<Scalars['Float']>;
  skill_willpower?: Maybe<Scalars['Float']>;
  stage?: Maybe<Scalars['Float']>;
  victory?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "card". All fields are combined with a logical 'AND'. */
export type Card_Bool_Exp = {
  _and?: InputMaybe<Array<Card_Bool_Exp>>;
  _not?: InputMaybe<Card_Bool_Exp>;
  _or?: InputMaybe<Array<Card_Bool_Exp>>;
  back_link?: InputMaybe<String_Comparison_Exp>;
  clues?: InputMaybe<Int_Comparison_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  cost?: InputMaybe<Int_Comparison_Exp>;
  deck_limit?: InputMaybe<Int_Comparison_Exp>;
  deck_options?: InputMaybe<Jsonb_Comparison_Exp>;
  deck_requirements?: InputMaybe<Jsonb_Comparison_Exp>;
  doom?: InputMaybe<Int_Comparison_Exp>;
  double_sided?: InputMaybe<Boolean_Comparison_Exp>;
  encounter_code?: InputMaybe<String_Comparison_Exp>;
  encounter_position?: InputMaybe<Int_Comparison_Exp>;
  enemy_damage?: InputMaybe<Int_Comparison_Exp>;
  enemy_evade?: InputMaybe<Int_Comparison_Exp>;
  enemy_fight?: InputMaybe<Int_Comparison_Exp>;
  enemy_horror?: InputMaybe<Int_Comparison_Exp>;
  exceptional?: InputMaybe<Boolean_Comparison_Exp>;
  exile?: InputMaybe<Boolean_Comparison_Exp>;
  faction_code?: InputMaybe<String_Comparison_Exp>;
  health?: InputMaybe<Int_Comparison_Exp>;
  hidden?: InputMaybe<Boolean_Comparison_Exp>;
  illustrator?: InputMaybe<String_Comparison_Exp>;
  is_unique?: InputMaybe<Boolean_Comparison_Exp>;
  myriad?: InputMaybe<Boolean_Comparison_Exp>;
  pack_code?: InputMaybe<String_Comparison_Exp>;
  pack_position?: InputMaybe<Int_Comparison_Exp>;
  packs?: InputMaybe<Card_Pack_Bool_Exp>;
  packs_aggregate?: InputMaybe<Card_Pack_Aggregate_Bool_Exp>;
  permanent?: InputMaybe<Boolean_Comparison_Exp>;
  position?: InputMaybe<Int_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  real_back_flavor?: InputMaybe<String_Comparison_Exp>;
  real_back_name?: InputMaybe<String_Comparison_Exp>;
  real_back_text?: InputMaybe<String_Comparison_Exp>;
  real_flavor?: InputMaybe<String_Comparison_Exp>;
  real_name?: InputMaybe<String_Comparison_Exp>;
  real_pack_name?: InputMaybe<String_Comparison_Exp>;
  real_slot?: InputMaybe<String_Comparison_Exp>;
  real_subname?: InputMaybe<String_Comparison_Exp>;
  real_text?: InputMaybe<String_Comparison_Exp>;
  real_traits?: InputMaybe<String_Comparison_Exp>;
  restrictions?: InputMaybe<Jsonb_Comparison_Exp>;
  sanity?: InputMaybe<Int_Comparison_Exp>;
  shroud?: InputMaybe<Int_Comparison_Exp>;
  skill_agility?: InputMaybe<Int_Comparison_Exp>;
  skill_combat?: InputMaybe<Int_Comparison_Exp>;
  skill_intellect?: InputMaybe<Int_Comparison_Exp>;
  skill_wild?: InputMaybe<Int_Comparison_Exp>;
  skill_willpower?: InputMaybe<Int_Comparison_Exp>;
  stage?: InputMaybe<Int_Comparison_Exp>;
  subtype_code?: InputMaybe<String_Comparison_Exp>;
  translations?: InputMaybe<Card_Text_Bool_Exp>;
  translations_aggregate?: InputMaybe<Card_Text_Aggregate_Bool_Exp>;
  type_code?: InputMaybe<String_Comparison_Exp>;
  victory?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "card" */
export enum Card_Constraint {
  /** unique or primary key constraint on columns "code" */
  CardPkey = 'card_pkey'
}

/** columns and relationships of "card_cycle" */
export type Card_Cycle = {
  __typename?: 'card_cycle';
  code: Scalars['String'];
  locale: Scalars['String'];
  name: Scalars['String'];
  official: Scalars['Boolean'];
  /** An array relationship */
  packs: Array<Card_Pack>;
  /** An aggregate relationship */
  packs_aggregate: Card_Pack_Aggregate;
  position: Scalars['Int'];
};


/** columns and relationships of "card_cycle" */
export type Card_CyclePacksArgs = {
  distinct_on?: InputMaybe<Array<Card_Pack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Pack_Order_By>>;
  where?: InputMaybe<Card_Pack_Bool_Exp>;
};


/** columns and relationships of "card_cycle" */
export type Card_CyclePacks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Card_Pack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Pack_Order_By>>;
  where?: InputMaybe<Card_Pack_Bool_Exp>;
};

/** aggregated selection of "card_cycle" */
export type Card_Cycle_Aggregate = {
  __typename?: 'card_cycle_aggregate';
  aggregate?: Maybe<Card_Cycle_Aggregate_Fields>;
  nodes: Array<Card_Cycle>;
};

/** aggregate fields of "card_cycle" */
export type Card_Cycle_Aggregate_Fields = {
  __typename?: 'card_cycle_aggregate_fields';
  avg?: Maybe<Card_Cycle_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Card_Cycle_Max_Fields>;
  min?: Maybe<Card_Cycle_Min_Fields>;
  stddev?: Maybe<Card_Cycle_Stddev_Fields>;
  stddev_pop?: Maybe<Card_Cycle_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Card_Cycle_Stddev_Samp_Fields>;
  sum?: Maybe<Card_Cycle_Sum_Fields>;
  var_pop?: Maybe<Card_Cycle_Var_Pop_Fields>;
  var_samp?: Maybe<Card_Cycle_Var_Samp_Fields>;
  variance?: Maybe<Card_Cycle_Variance_Fields>;
};


/** aggregate fields of "card_cycle" */
export type Card_Cycle_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Card_Cycle_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Card_Cycle_Avg_Fields = {
  __typename?: 'card_cycle_avg_fields';
  position?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "card_cycle". All fields are combined with a logical 'AND'. */
export type Card_Cycle_Bool_Exp = {
  _and?: InputMaybe<Array<Card_Cycle_Bool_Exp>>;
  _not?: InputMaybe<Card_Cycle_Bool_Exp>;
  _or?: InputMaybe<Array<Card_Cycle_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  official?: InputMaybe<Boolean_Comparison_Exp>;
  packs?: InputMaybe<Card_Pack_Bool_Exp>;
  packs_aggregate?: InputMaybe<Card_Pack_Aggregate_Bool_Exp>;
  position?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "card_cycle" */
export enum Card_Cycle_Constraint {
  /** unique or primary key constraint on columns "code", "locale" */
  CardCyclePkey = 'card_cycle_pkey'
}

/** input type for incrementing numeric columns in table "card_cycle" */
export type Card_Cycle_Inc_Input = {
  position?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "card_cycle" */
export type Card_Cycle_Insert_Input = {
  code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  official?: InputMaybe<Scalars['Boolean']>;
  packs?: InputMaybe<Card_Pack_Arr_Rel_Insert_Input>;
  position?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Card_Cycle_Max_Fields = {
  __typename?: 'card_cycle_max_fields';
  code?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Card_Cycle_Min_Fields = {
  __typename?: 'card_cycle_min_fields';
  code?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "card_cycle" */
export type Card_Cycle_Mutation_Response = {
  __typename?: 'card_cycle_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Card_Cycle>;
};

/** input type for inserting object relation for remote table "card_cycle" */
export type Card_Cycle_Obj_Rel_Insert_Input = {
  data: Card_Cycle_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Card_Cycle_On_Conflict>;
};

/** on_conflict condition type for table "card_cycle" */
export type Card_Cycle_On_Conflict = {
  constraint: Card_Cycle_Constraint;
  update_columns?: Array<Card_Cycle_Update_Column>;
  where?: InputMaybe<Card_Cycle_Bool_Exp>;
};

/** Ordering options when selecting data from "card_cycle". */
export type Card_Cycle_Order_By = {
  code?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  official?: InputMaybe<Order_By>;
  packs_aggregate?: InputMaybe<Card_Pack_Aggregate_Order_By>;
  position?: InputMaybe<Order_By>;
};

/** primary key columns input for table: card_cycle */
export type Card_Cycle_Pk_Columns_Input = {
  code: Scalars['String'];
  locale: Scalars['String'];
};

/** select columns of table "card_cycle" */
export enum Card_Cycle_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  Official = 'official',
  /** column name */
  Position = 'position'
}

/** input type for updating data in table "card_cycle" */
export type Card_Cycle_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  official?: InputMaybe<Scalars['Boolean']>;
  position?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Card_Cycle_Stddev_Fields = {
  __typename?: 'card_cycle_stddev_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Card_Cycle_Stddev_Pop_Fields = {
  __typename?: 'card_cycle_stddev_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Card_Cycle_Stddev_Samp_Fields = {
  __typename?: 'card_cycle_stddev_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "card_cycle" */
export type Card_Cycle_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Card_Cycle_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Card_Cycle_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  official?: InputMaybe<Scalars['Boolean']>;
  position?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Card_Cycle_Sum_Fields = {
  __typename?: 'card_cycle_sum_fields';
  position?: Maybe<Scalars['Int']>;
};

/** update columns of table "card_cycle" */
export enum Card_Cycle_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  Official = 'official',
  /** column name */
  Position = 'position'
}

export type Card_Cycle_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Card_Cycle_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Card_Cycle_Set_Input>;
  where: Card_Cycle_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Card_Cycle_Var_Pop_Fields = {
  __typename?: 'card_cycle_var_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Card_Cycle_Var_Samp_Fields = {
  __typename?: 'card_cycle_var_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Card_Cycle_Variance_Fields = {
  __typename?: 'card_cycle_variance_fields';
  position?: Maybe<Scalars['Float']>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Card_Delete_At_Path_Input = {
  deck_options?: InputMaybe<Array<Scalars['String']>>;
  deck_requirements?: InputMaybe<Array<Scalars['String']>>;
  restrictions?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Card_Delete_Elem_Input = {
  deck_options?: InputMaybe<Scalars['Int']>;
  deck_requirements?: InputMaybe<Scalars['Int']>;
  restrictions?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Card_Delete_Key_Input = {
  deck_options?: InputMaybe<Scalars['String']>;
  deck_requirements?: InputMaybe<Scalars['String']>;
  restrictions?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "card_encounter_set" */
export type Card_Encounter_Set = {
  __typename?: 'card_encounter_set';
  code: Scalars['String'];
  locale: Scalars['String'];
  name: Scalars['String'];
  official: Scalars['Boolean'];
};

/** aggregated selection of "card_encounter_set" */
export type Card_Encounter_Set_Aggregate = {
  __typename?: 'card_encounter_set_aggregate';
  aggregate?: Maybe<Card_Encounter_Set_Aggregate_Fields>;
  nodes: Array<Card_Encounter_Set>;
};

export type Card_Encounter_Set_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Card_Encounter_Set_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Card_Encounter_Set_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Card_Encounter_Set_Aggregate_Bool_Exp_Count>;
};

export type Card_Encounter_Set_Aggregate_Bool_Exp_Bool_And = {
  arguments: Card_Encounter_Set_Select_Column_Card_Encounter_Set_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Card_Encounter_Set_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Card_Encounter_Set_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Card_Encounter_Set_Select_Column_Card_Encounter_Set_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Card_Encounter_Set_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Card_Encounter_Set_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Card_Encounter_Set_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Card_Encounter_Set_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "card_encounter_set" */
export type Card_Encounter_Set_Aggregate_Fields = {
  __typename?: 'card_encounter_set_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Card_Encounter_Set_Max_Fields>;
  min?: Maybe<Card_Encounter_Set_Min_Fields>;
};


/** aggregate fields of "card_encounter_set" */
export type Card_Encounter_Set_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Card_Encounter_Set_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "card_encounter_set" */
export type Card_Encounter_Set_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Card_Encounter_Set_Max_Order_By>;
  min?: InputMaybe<Card_Encounter_Set_Min_Order_By>;
};

/** input type for inserting array relation for remote table "card_encounter_set" */
export type Card_Encounter_Set_Arr_Rel_Insert_Input = {
  data: Array<Card_Encounter_Set_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Card_Encounter_Set_On_Conflict>;
};

/** Boolean expression to filter rows from the table "card_encounter_set". All fields are combined with a logical 'AND'. */
export type Card_Encounter_Set_Bool_Exp = {
  _and?: InputMaybe<Array<Card_Encounter_Set_Bool_Exp>>;
  _not?: InputMaybe<Card_Encounter_Set_Bool_Exp>;
  _or?: InputMaybe<Array<Card_Encounter_Set_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  official?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "card_encounter_set" */
export enum Card_Encounter_Set_Constraint {
  /** unique or primary key constraint on columns "code", "locale" */
  CardEncounterSetPkey = 'card_encounter_set_pkey'
}

/** input type for inserting data into table "card_encounter_set" */
export type Card_Encounter_Set_Insert_Input = {
  code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  official?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Card_Encounter_Set_Max_Fields = {
  __typename?: 'card_encounter_set_max_fields';
  code?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "card_encounter_set" */
export type Card_Encounter_Set_Max_Order_By = {
  code?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Card_Encounter_Set_Min_Fields = {
  __typename?: 'card_encounter_set_min_fields';
  code?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "card_encounter_set" */
export type Card_Encounter_Set_Min_Order_By = {
  code?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "card_encounter_set" */
export type Card_Encounter_Set_Mutation_Response = {
  __typename?: 'card_encounter_set_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Card_Encounter_Set>;
};

/** on_conflict condition type for table "card_encounter_set" */
export type Card_Encounter_Set_On_Conflict = {
  constraint: Card_Encounter_Set_Constraint;
  update_columns?: Array<Card_Encounter_Set_Update_Column>;
  where?: InputMaybe<Card_Encounter_Set_Bool_Exp>;
};

/** Ordering options when selecting data from "card_encounter_set". */
export type Card_Encounter_Set_Order_By = {
  code?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  official?: InputMaybe<Order_By>;
};

/** primary key columns input for table: card_encounter_set */
export type Card_Encounter_Set_Pk_Columns_Input = {
  code: Scalars['String'];
  locale: Scalars['String'];
};

/** select columns of table "card_encounter_set" */
export enum Card_Encounter_Set_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  Official = 'official'
}

/** select "card_encounter_set_aggregate_bool_exp_bool_and_arguments_columns" columns of table "card_encounter_set" */
export enum Card_Encounter_Set_Select_Column_Card_Encounter_Set_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Official = 'official'
}

/** select "card_encounter_set_aggregate_bool_exp_bool_or_arguments_columns" columns of table "card_encounter_set" */
export enum Card_Encounter_Set_Select_Column_Card_Encounter_Set_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Official = 'official'
}

/** input type for updating data in table "card_encounter_set" */
export type Card_Encounter_Set_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  official?: InputMaybe<Scalars['Boolean']>;
};

/** Streaming cursor of the table "card_encounter_set" */
export type Card_Encounter_Set_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Card_Encounter_Set_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Card_Encounter_Set_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  official?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "card_encounter_set" */
export enum Card_Encounter_Set_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  Official = 'official'
}

export type Card_Encounter_Set_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Card_Encounter_Set_Set_Input>;
  where: Card_Encounter_Set_Bool_Exp;
};

/** input type for incrementing numeric columns in table "card" */
export type Card_Inc_Input = {
  clues?: InputMaybe<Scalars['Int']>;
  cost?: InputMaybe<Scalars['Int']>;
  deck_limit?: InputMaybe<Scalars['Int']>;
  doom?: InputMaybe<Scalars['Int']>;
  encounter_position?: InputMaybe<Scalars['Int']>;
  enemy_damage?: InputMaybe<Scalars['Int']>;
  enemy_evade?: InputMaybe<Scalars['Int']>;
  enemy_fight?: InputMaybe<Scalars['Int']>;
  enemy_horror?: InputMaybe<Scalars['Int']>;
  health?: InputMaybe<Scalars['Int']>;
  pack_position?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  sanity?: InputMaybe<Scalars['Int']>;
  shroud?: InputMaybe<Scalars['Int']>;
  skill_agility?: InputMaybe<Scalars['Int']>;
  skill_combat?: InputMaybe<Scalars['Int']>;
  skill_intellect?: InputMaybe<Scalars['Int']>;
  skill_wild?: InputMaybe<Scalars['Int']>;
  skill_willpower?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Scalars['Int']>;
  victory?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "card" */
export type Card_Insert_Input = {
  back_link?: InputMaybe<Scalars['String']>;
  clues?: InputMaybe<Scalars['Int']>;
  code?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<Scalars['Int']>;
  deck_limit?: InputMaybe<Scalars['Int']>;
  deck_options?: InputMaybe<Scalars['jsonb']>;
  deck_requirements?: InputMaybe<Scalars['jsonb']>;
  doom?: InputMaybe<Scalars['Int']>;
  double_sided?: InputMaybe<Scalars['Boolean']>;
  encounter_code?: InputMaybe<Scalars['String']>;
  encounter_position?: InputMaybe<Scalars['Int']>;
  enemy_damage?: InputMaybe<Scalars['Int']>;
  enemy_evade?: InputMaybe<Scalars['Int']>;
  enemy_fight?: InputMaybe<Scalars['Int']>;
  enemy_horror?: InputMaybe<Scalars['Int']>;
  exceptional?: InputMaybe<Scalars['Boolean']>;
  exile?: InputMaybe<Scalars['Boolean']>;
  faction_code?: InputMaybe<Scalars['String']>;
  health?: InputMaybe<Scalars['Int']>;
  hidden?: InputMaybe<Scalars['Boolean']>;
  illustrator?: InputMaybe<Scalars['String']>;
  is_unique?: InputMaybe<Scalars['Boolean']>;
  myriad?: InputMaybe<Scalars['Boolean']>;
  pack_code?: InputMaybe<Scalars['String']>;
  pack_position?: InputMaybe<Scalars['Int']>;
  packs?: InputMaybe<Card_Pack_Arr_Rel_Insert_Input>;
  permanent?: InputMaybe<Scalars['Boolean']>;
  position?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  real_back_flavor?: InputMaybe<Scalars['String']>;
  real_back_name?: InputMaybe<Scalars['String']>;
  real_back_text?: InputMaybe<Scalars['String']>;
  real_flavor?: InputMaybe<Scalars['String']>;
  real_name?: InputMaybe<Scalars['String']>;
  real_pack_name?: InputMaybe<Scalars['String']>;
  real_slot?: InputMaybe<Scalars['String']>;
  real_subname?: InputMaybe<Scalars['String']>;
  real_text?: InputMaybe<Scalars['String']>;
  real_traits?: InputMaybe<Scalars['String']>;
  restrictions?: InputMaybe<Scalars['jsonb']>;
  sanity?: InputMaybe<Scalars['Int']>;
  shroud?: InputMaybe<Scalars['Int']>;
  skill_agility?: InputMaybe<Scalars['Int']>;
  skill_combat?: InputMaybe<Scalars['Int']>;
  skill_intellect?: InputMaybe<Scalars['Int']>;
  skill_wild?: InputMaybe<Scalars['Int']>;
  skill_willpower?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Scalars['Int']>;
  subtype_code?: InputMaybe<Scalars['String']>;
  translations?: InputMaybe<Card_Text_Arr_Rel_Insert_Input>;
  type_code?: InputMaybe<Scalars['String']>;
  victory?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Card_Max_Fields = {
  __typename?: 'card_max_fields';
  back_link?: Maybe<Scalars['String']>;
  clues?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Int']>;
  deck_limit?: Maybe<Scalars['Int']>;
  doom?: Maybe<Scalars['Int']>;
  encounter_code?: Maybe<Scalars['String']>;
  encounter_position?: Maybe<Scalars['Int']>;
  enemy_damage?: Maybe<Scalars['Int']>;
  enemy_evade?: Maybe<Scalars['Int']>;
  enemy_fight?: Maybe<Scalars['Int']>;
  enemy_horror?: Maybe<Scalars['Int']>;
  faction_code?: Maybe<Scalars['String']>;
  health?: Maybe<Scalars['Int']>;
  illustrator?: Maybe<Scalars['String']>;
  pack_code?: Maybe<Scalars['String']>;
  pack_position?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  real_back_flavor?: Maybe<Scalars['String']>;
  real_back_name?: Maybe<Scalars['String']>;
  real_back_text?: Maybe<Scalars['String']>;
  real_flavor?: Maybe<Scalars['String']>;
  real_name?: Maybe<Scalars['String']>;
  real_pack_name?: Maybe<Scalars['String']>;
  real_slot?: Maybe<Scalars['String']>;
  real_subname?: Maybe<Scalars['String']>;
  real_text?: Maybe<Scalars['String']>;
  real_traits?: Maybe<Scalars['String']>;
  sanity?: Maybe<Scalars['Int']>;
  shroud?: Maybe<Scalars['Int']>;
  skill_agility?: Maybe<Scalars['Int']>;
  skill_combat?: Maybe<Scalars['Int']>;
  skill_intellect?: Maybe<Scalars['Int']>;
  skill_wild?: Maybe<Scalars['Int']>;
  skill_willpower?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['Int']>;
  subtype_code?: Maybe<Scalars['String']>;
  type_code?: Maybe<Scalars['String']>;
  victory?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Card_Min_Fields = {
  __typename?: 'card_min_fields';
  back_link?: Maybe<Scalars['String']>;
  clues?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Int']>;
  deck_limit?: Maybe<Scalars['Int']>;
  doom?: Maybe<Scalars['Int']>;
  encounter_code?: Maybe<Scalars['String']>;
  encounter_position?: Maybe<Scalars['Int']>;
  enemy_damage?: Maybe<Scalars['Int']>;
  enemy_evade?: Maybe<Scalars['Int']>;
  enemy_fight?: Maybe<Scalars['Int']>;
  enemy_horror?: Maybe<Scalars['Int']>;
  faction_code?: Maybe<Scalars['String']>;
  health?: Maybe<Scalars['Int']>;
  illustrator?: Maybe<Scalars['String']>;
  pack_code?: Maybe<Scalars['String']>;
  pack_position?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  real_back_flavor?: Maybe<Scalars['String']>;
  real_back_name?: Maybe<Scalars['String']>;
  real_back_text?: Maybe<Scalars['String']>;
  real_flavor?: Maybe<Scalars['String']>;
  real_name?: Maybe<Scalars['String']>;
  real_pack_name?: Maybe<Scalars['String']>;
  real_slot?: Maybe<Scalars['String']>;
  real_subname?: Maybe<Scalars['String']>;
  real_text?: Maybe<Scalars['String']>;
  real_traits?: Maybe<Scalars['String']>;
  sanity?: Maybe<Scalars['Int']>;
  shroud?: Maybe<Scalars['Int']>;
  skill_agility?: Maybe<Scalars['Int']>;
  skill_combat?: Maybe<Scalars['Int']>;
  skill_intellect?: Maybe<Scalars['Int']>;
  skill_wild?: Maybe<Scalars['Int']>;
  skill_willpower?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['Int']>;
  subtype_code?: Maybe<Scalars['String']>;
  type_code?: Maybe<Scalars['String']>;
  victory?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "card" */
export type Card_Mutation_Response = {
  __typename?: 'card_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Card>;
};

/** on_conflict condition type for table "card" */
export type Card_On_Conflict = {
  constraint: Card_Constraint;
  update_columns?: Array<Card_Update_Column>;
  where?: InputMaybe<Card_Bool_Exp>;
};

/** Ordering options when selecting data from "card". */
export type Card_Order_By = {
  back_link?: InputMaybe<Order_By>;
  clues?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  deck_limit?: InputMaybe<Order_By>;
  deck_options?: InputMaybe<Order_By>;
  deck_requirements?: InputMaybe<Order_By>;
  doom?: InputMaybe<Order_By>;
  double_sided?: InputMaybe<Order_By>;
  encounter_code?: InputMaybe<Order_By>;
  encounter_position?: InputMaybe<Order_By>;
  enemy_damage?: InputMaybe<Order_By>;
  enemy_evade?: InputMaybe<Order_By>;
  enemy_fight?: InputMaybe<Order_By>;
  enemy_horror?: InputMaybe<Order_By>;
  exceptional?: InputMaybe<Order_By>;
  exile?: InputMaybe<Order_By>;
  faction_code?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  hidden?: InputMaybe<Order_By>;
  illustrator?: InputMaybe<Order_By>;
  is_unique?: InputMaybe<Order_By>;
  myriad?: InputMaybe<Order_By>;
  pack_code?: InputMaybe<Order_By>;
  pack_position?: InputMaybe<Order_By>;
  packs_aggregate?: InputMaybe<Card_Pack_Aggregate_Order_By>;
  permanent?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  real_back_flavor?: InputMaybe<Order_By>;
  real_back_name?: InputMaybe<Order_By>;
  real_back_text?: InputMaybe<Order_By>;
  real_flavor?: InputMaybe<Order_By>;
  real_name?: InputMaybe<Order_By>;
  real_pack_name?: InputMaybe<Order_By>;
  real_slot?: InputMaybe<Order_By>;
  real_subname?: InputMaybe<Order_By>;
  real_text?: InputMaybe<Order_By>;
  real_traits?: InputMaybe<Order_By>;
  restrictions?: InputMaybe<Order_By>;
  sanity?: InputMaybe<Order_By>;
  shroud?: InputMaybe<Order_By>;
  skill_agility?: InputMaybe<Order_By>;
  skill_combat?: InputMaybe<Order_By>;
  skill_intellect?: InputMaybe<Order_By>;
  skill_wild?: InputMaybe<Order_By>;
  skill_willpower?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
  subtype_code?: InputMaybe<Order_By>;
  translations_aggregate?: InputMaybe<Card_Text_Aggregate_Order_By>;
  type_code?: InputMaybe<Order_By>;
  victory?: InputMaybe<Order_By>;
};

/** columns and relationships of "card_pack" */
export type Card_Pack = {
  __typename?: 'card_pack';
  code: Scalars['String'];
  /** An object relationship */
  cycle?: Maybe<Card_Cycle>;
  cycle_code?: Maybe<Scalars['String']>;
  locale: Scalars['String'];
  name: Scalars['String'];
  official: Scalars['Boolean'];
  position?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "card_pack" */
export type Card_Pack_Aggregate = {
  __typename?: 'card_pack_aggregate';
  aggregate?: Maybe<Card_Pack_Aggregate_Fields>;
  nodes: Array<Card_Pack>;
};

export type Card_Pack_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Card_Pack_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Card_Pack_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Card_Pack_Aggregate_Bool_Exp_Count>;
};

export type Card_Pack_Aggregate_Bool_Exp_Bool_And = {
  arguments: Card_Pack_Select_Column_Card_Pack_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Card_Pack_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Card_Pack_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Card_Pack_Select_Column_Card_Pack_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Card_Pack_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Card_Pack_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Card_Pack_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Card_Pack_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "card_pack" */
export type Card_Pack_Aggregate_Fields = {
  __typename?: 'card_pack_aggregate_fields';
  avg?: Maybe<Card_Pack_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Card_Pack_Max_Fields>;
  min?: Maybe<Card_Pack_Min_Fields>;
  stddev?: Maybe<Card_Pack_Stddev_Fields>;
  stddev_pop?: Maybe<Card_Pack_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Card_Pack_Stddev_Samp_Fields>;
  sum?: Maybe<Card_Pack_Sum_Fields>;
  var_pop?: Maybe<Card_Pack_Var_Pop_Fields>;
  var_samp?: Maybe<Card_Pack_Var_Samp_Fields>;
  variance?: Maybe<Card_Pack_Variance_Fields>;
};


/** aggregate fields of "card_pack" */
export type Card_Pack_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Card_Pack_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "card_pack" */
export type Card_Pack_Aggregate_Order_By = {
  avg?: InputMaybe<Card_Pack_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Card_Pack_Max_Order_By>;
  min?: InputMaybe<Card_Pack_Min_Order_By>;
  stddev?: InputMaybe<Card_Pack_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Card_Pack_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Card_Pack_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Card_Pack_Sum_Order_By>;
  var_pop?: InputMaybe<Card_Pack_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Card_Pack_Var_Samp_Order_By>;
  variance?: InputMaybe<Card_Pack_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "card_pack" */
export type Card_Pack_Arr_Rel_Insert_Input = {
  data: Array<Card_Pack_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Card_Pack_On_Conflict>;
};

/** aggregate avg on columns */
export type Card_Pack_Avg_Fields = {
  __typename?: 'card_pack_avg_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "card_pack" */
export type Card_Pack_Avg_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "card_pack". All fields are combined with a logical 'AND'. */
export type Card_Pack_Bool_Exp = {
  _and?: InputMaybe<Array<Card_Pack_Bool_Exp>>;
  _not?: InputMaybe<Card_Pack_Bool_Exp>;
  _or?: InputMaybe<Array<Card_Pack_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  cycle?: InputMaybe<Card_Cycle_Bool_Exp>;
  cycle_code?: InputMaybe<String_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  official?: InputMaybe<Boolean_Comparison_Exp>;
  position?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "card_pack" */
export enum Card_Pack_Constraint {
  /** unique or primary key constraint on columns "code", "locale" */
  CardPackPkey = 'card_pack_pkey'
}

/** input type for incrementing numeric columns in table "card_pack" */
export type Card_Pack_Inc_Input = {
  position?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "card_pack" */
export type Card_Pack_Insert_Input = {
  code?: InputMaybe<Scalars['String']>;
  cycle?: InputMaybe<Card_Cycle_Obj_Rel_Insert_Input>;
  cycle_code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  official?: InputMaybe<Scalars['Boolean']>;
  position?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Card_Pack_Max_Fields = {
  __typename?: 'card_pack_max_fields';
  code?: Maybe<Scalars['String']>;
  cycle_code?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "card_pack" */
export type Card_Pack_Max_Order_By = {
  code?: InputMaybe<Order_By>;
  cycle_code?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Card_Pack_Min_Fields = {
  __typename?: 'card_pack_min_fields';
  code?: Maybe<Scalars['String']>;
  cycle_code?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "card_pack" */
export type Card_Pack_Min_Order_By = {
  code?: InputMaybe<Order_By>;
  cycle_code?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "card_pack" */
export type Card_Pack_Mutation_Response = {
  __typename?: 'card_pack_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Card_Pack>;
};

/** on_conflict condition type for table "card_pack" */
export type Card_Pack_On_Conflict = {
  constraint: Card_Pack_Constraint;
  update_columns?: Array<Card_Pack_Update_Column>;
  where?: InputMaybe<Card_Pack_Bool_Exp>;
};

/** Ordering options when selecting data from "card_pack". */
export type Card_Pack_Order_By = {
  code?: InputMaybe<Order_By>;
  cycle?: InputMaybe<Card_Cycle_Order_By>;
  cycle_code?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  official?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** primary key columns input for table: card_pack */
export type Card_Pack_Pk_Columns_Input = {
  code: Scalars['String'];
  locale: Scalars['String'];
};

/** select columns of table "card_pack" */
export enum Card_Pack_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CycleCode = 'cycle_code',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  Official = 'official',
  /** column name */
  Position = 'position'
}

/** select "card_pack_aggregate_bool_exp_bool_and_arguments_columns" columns of table "card_pack" */
export enum Card_Pack_Select_Column_Card_Pack_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Official = 'official'
}

/** select "card_pack_aggregate_bool_exp_bool_or_arguments_columns" columns of table "card_pack" */
export enum Card_Pack_Select_Column_Card_Pack_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Official = 'official'
}

/** input type for updating data in table "card_pack" */
export type Card_Pack_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  cycle_code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  official?: InputMaybe<Scalars['Boolean']>;
  position?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Card_Pack_Stddev_Fields = {
  __typename?: 'card_pack_stddev_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "card_pack" */
export type Card_Pack_Stddev_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Card_Pack_Stddev_Pop_Fields = {
  __typename?: 'card_pack_stddev_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "card_pack" */
export type Card_Pack_Stddev_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Card_Pack_Stddev_Samp_Fields = {
  __typename?: 'card_pack_stddev_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "card_pack" */
export type Card_Pack_Stddev_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "card_pack" */
export type Card_Pack_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Card_Pack_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Card_Pack_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']>;
  cycle_code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  official?: InputMaybe<Scalars['Boolean']>;
  position?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Card_Pack_Sum_Fields = {
  __typename?: 'card_pack_sum_fields';
  position?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "card_pack" */
export type Card_Pack_Sum_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** update columns of table "card_pack" */
export enum Card_Pack_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CycleCode = 'cycle_code',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  Official = 'official',
  /** column name */
  Position = 'position'
}

export type Card_Pack_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Card_Pack_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Card_Pack_Set_Input>;
  where: Card_Pack_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Card_Pack_Var_Pop_Fields = {
  __typename?: 'card_pack_var_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "card_pack" */
export type Card_Pack_Var_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Card_Pack_Var_Samp_Fields = {
  __typename?: 'card_pack_var_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "card_pack" */
export type Card_Pack_Var_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Card_Pack_Variance_Fields = {
  __typename?: 'card_pack_variance_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "card_pack" */
export type Card_Pack_Variance_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** primary key columns input for table: card */
export type Card_Pk_Columns_Input = {
  code: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Card_Prepend_Input = {
  deck_options?: InputMaybe<Scalars['jsonb']>;
  deck_requirements?: InputMaybe<Scalars['jsonb']>;
  restrictions?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "card" */
export enum Card_Select_Column {
  /** column name */
  BackLink = 'back_link',
  /** column name */
  Clues = 'clues',
  /** column name */
  Code = 'code',
  /** column name */
  Cost = 'cost',
  /** column name */
  DeckLimit = 'deck_limit',
  /** column name */
  DeckOptions = 'deck_options',
  /** column name */
  DeckRequirements = 'deck_requirements',
  /** column name */
  Doom = 'doom',
  /** column name */
  DoubleSided = 'double_sided',
  /** column name */
  EncounterCode = 'encounter_code',
  /** column name */
  EncounterPosition = 'encounter_position',
  /** column name */
  EnemyDamage = 'enemy_damage',
  /** column name */
  EnemyEvade = 'enemy_evade',
  /** column name */
  EnemyFight = 'enemy_fight',
  /** column name */
  EnemyHorror = 'enemy_horror',
  /** column name */
  Exceptional = 'exceptional',
  /** column name */
  Exile = 'exile',
  /** column name */
  FactionCode = 'faction_code',
  /** column name */
  Health = 'health',
  /** column name */
  Hidden = 'hidden',
  /** column name */
  Illustrator = 'illustrator',
  /** column name */
  IsUnique = 'is_unique',
  /** column name */
  Myriad = 'myriad',
  /** column name */
  PackCode = 'pack_code',
  /** column name */
  PackPosition = 'pack_position',
  /** column name */
  Permanent = 'permanent',
  /** column name */
  Position = 'position',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  RealBackFlavor = 'real_back_flavor',
  /** column name */
  RealBackName = 'real_back_name',
  /** column name */
  RealBackText = 'real_back_text',
  /** column name */
  RealFlavor = 'real_flavor',
  /** column name */
  RealName = 'real_name',
  /** column name */
  RealPackName = 'real_pack_name',
  /** column name */
  RealSlot = 'real_slot',
  /** column name */
  RealSubname = 'real_subname',
  /** column name */
  RealText = 'real_text',
  /** column name */
  RealTraits = 'real_traits',
  /** column name */
  Restrictions = 'restrictions',
  /** column name */
  Sanity = 'sanity',
  /** column name */
  Shroud = 'shroud',
  /** column name */
  SkillAgility = 'skill_agility',
  /** column name */
  SkillCombat = 'skill_combat',
  /** column name */
  SkillIntellect = 'skill_intellect',
  /** column name */
  SkillWild = 'skill_wild',
  /** column name */
  SkillWillpower = 'skill_willpower',
  /** column name */
  Stage = 'stage',
  /** column name */
  SubtypeCode = 'subtype_code',
  /** column name */
  TypeCode = 'type_code',
  /** column name */
  Victory = 'victory'
}

/** input type for updating data in table "card" */
export type Card_Set_Input = {
  back_link?: InputMaybe<Scalars['String']>;
  clues?: InputMaybe<Scalars['Int']>;
  code?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<Scalars['Int']>;
  deck_limit?: InputMaybe<Scalars['Int']>;
  deck_options?: InputMaybe<Scalars['jsonb']>;
  deck_requirements?: InputMaybe<Scalars['jsonb']>;
  doom?: InputMaybe<Scalars['Int']>;
  double_sided?: InputMaybe<Scalars['Boolean']>;
  encounter_code?: InputMaybe<Scalars['String']>;
  encounter_position?: InputMaybe<Scalars['Int']>;
  enemy_damage?: InputMaybe<Scalars['Int']>;
  enemy_evade?: InputMaybe<Scalars['Int']>;
  enemy_fight?: InputMaybe<Scalars['Int']>;
  enemy_horror?: InputMaybe<Scalars['Int']>;
  exceptional?: InputMaybe<Scalars['Boolean']>;
  exile?: InputMaybe<Scalars['Boolean']>;
  faction_code?: InputMaybe<Scalars['String']>;
  health?: InputMaybe<Scalars['Int']>;
  hidden?: InputMaybe<Scalars['Boolean']>;
  illustrator?: InputMaybe<Scalars['String']>;
  is_unique?: InputMaybe<Scalars['Boolean']>;
  myriad?: InputMaybe<Scalars['Boolean']>;
  pack_code?: InputMaybe<Scalars['String']>;
  pack_position?: InputMaybe<Scalars['Int']>;
  permanent?: InputMaybe<Scalars['Boolean']>;
  position?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  real_back_flavor?: InputMaybe<Scalars['String']>;
  real_back_name?: InputMaybe<Scalars['String']>;
  real_back_text?: InputMaybe<Scalars['String']>;
  real_flavor?: InputMaybe<Scalars['String']>;
  real_name?: InputMaybe<Scalars['String']>;
  real_pack_name?: InputMaybe<Scalars['String']>;
  real_slot?: InputMaybe<Scalars['String']>;
  real_subname?: InputMaybe<Scalars['String']>;
  real_text?: InputMaybe<Scalars['String']>;
  real_traits?: InputMaybe<Scalars['String']>;
  restrictions?: InputMaybe<Scalars['jsonb']>;
  sanity?: InputMaybe<Scalars['Int']>;
  shroud?: InputMaybe<Scalars['Int']>;
  skill_agility?: InputMaybe<Scalars['Int']>;
  skill_combat?: InputMaybe<Scalars['Int']>;
  skill_intellect?: InputMaybe<Scalars['Int']>;
  skill_wild?: InputMaybe<Scalars['Int']>;
  skill_willpower?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Scalars['Int']>;
  subtype_code?: InputMaybe<Scalars['String']>;
  type_code?: InputMaybe<Scalars['String']>;
  victory?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Card_Stddev_Fields = {
  __typename?: 'card_stddev_fields';
  clues?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  deck_limit?: Maybe<Scalars['Float']>;
  doom?: Maybe<Scalars['Float']>;
  encounter_position?: Maybe<Scalars['Float']>;
  enemy_damage?: Maybe<Scalars['Float']>;
  enemy_evade?: Maybe<Scalars['Float']>;
  enemy_fight?: Maybe<Scalars['Float']>;
  enemy_horror?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  pack_position?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sanity?: Maybe<Scalars['Float']>;
  shroud?: Maybe<Scalars['Float']>;
  skill_agility?: Maybe<Scalars['Float']>;
  skill_combat?: Maybe<Scalars['Float']>;
  skill_intellect?: Maybe<Scalars['Float']>;
  skill_wild?: Maybe<Scalars['Float']>;
  skill_willpower?: Maybe<Scalars['Float']>;
  stage?: Maybe<Scalars['Float']>;
  victory?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Card_Stddev_Pop_Fields = {
  __typename?: 'card_stddev_pop_fields';
  clues?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  deck_limit?: Maybe<Scalars['Float']>;
  doom?: Maybe<Scalars['Float']>;
  encounter_position?: Maybe<Scalars['Float']>;
  enemy_damage?: Maybe<Scalars['Float']>;
  enemy_evade?: Maybe<Scalars['Float']>;
  enemy_fight?: Maybe<Scalars['Float']>;
  enemy_horror?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  pack_position?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sanity?: Maybe<Scalars['Float']>;
  shroud?: Maybe<Scalars['Float']>;
  skill_agility?: Maybe<Scalars['Float']>;
  skill_combat?: Maybe<Scalars['Float']>;
  skill_intellect?: Maybe<Scalars['Float']>;
  skill_wild?: Maybe<Scalars['Float']>;
  skill_willpower?: Maybe<Scalars['Float']>;
  stage?: Maybe<Scalars['Float']>;
  victory?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Card_Stddev_Samp_Fields = {
  __typename?: 'card_stddev_samp_fields';
  clues?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  deck_limit?: Maybe<Scalars['Float']>;
  doom?: Maybe<Scalars['Float']>;
  encounter_position?: Maybe<Scalars['Float']>;
  enemy_damage?: Maybe<Scalars['Float']>;
  enemy_evade?: Maybe<Scalars['Float']>;
  enemy_fight?: Maybe<Scalars['Float']>;
  enemy_horror?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  pack_position?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sanity?: Maybe<Scalars['Float']>;
  shroud?: Maybe<Scalars['Float']>;
  skill_agility?: Maybe<Scalars['Float']>;
  skill_combat?: Maybe<Scalars['Float']>;
  skill_intellect?: Maybe<Scalars['Float']>;
  skill_wild?: Maybe<Scalars['Float']>;
  skill_willpower?: Maybe<Scalars['Float']>;
  stage?: Maybe<Scalars['Float']>;
  victory?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "card" */
export type Card_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Card_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Card_Stream_Cursor_Value_Input = {
  back_link?: InputMaybe<Scalars['String']>;
  clues?: InputMaybe<Scalars['Int']>;
  code?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<Scalars['Int']>;
  deck_limit?: InputMaybe<Scalars['Int']>;
  deck_options?: InputMaybe<Scalars['jsonb']>;
  deck_requirements?: InputMaybe<Scalars['jsonb']>;
  doom?: InputMaybe<Scalars['Int']>;
  double_sided?: InputMaybe<Scalars['Boolean']>;
  encounter_code?: InputMaybe<Scalars['String']>;
  encounter_position?: InputMaybe<Scalars['Int']>;
  enemy_damage?: InputMaybe<Scalars['Int']>;
  enemy_evade?: InputMaybe<Scalars['Int']>;
  enemy_fight?: InputMaybe<Scalars['Int']>;
  enemy_horror?: InputMaybe<Scalars['Int']>;
  exceptional?: InputMaybe<Scalars['Boolean']>;
  exile?: InputMaybe<Scalars['Boolean']>;
  faction_code?: InputMaybe<Scalars['String']>;
  health?: InputMaybe<Scalars['Int']>;
  hidden?: InputMaybe<Scalars['Boolean']>;
  illustrator?: InputMaybe<Scalars['String']>;
  is_unique?: InputMaybe<Scalars['Boolean']>;
  myriad?: InputMaybe<Scalars['Boolean']>;
  pack_code?: InputMaybe<Scalars['String']>;
  pack_position?: InputMaybe<Scalars['Int']>;
  permanent?: InputMaybe<Scalars['Boolean']>;
  position?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  real_back_flavor?: InputMaybe<Scalars['String']>;
  real_back_name?: InputMaybe<Scalars['String']>;
  real_back_text?: InputMaybe<Scalars['String']>;
  real_flavor?: InputMaybe<Scalars['String']>;
  real_name?: InputMaybe<Scalars['String']>;
  real_pack_name?: InputMaybe<Scalars['String']>;
  real_slot?: InputMaybe<Scalars['String']>;
  real_subname?: InputMaybe<Scalars['String']>;
  real_text?: InputMaybe<Scalars['String']>;
  real_traits?: InputMaybe<Scalars['String']>;
  restrictions?: InputMaybe<Scalars['jsonb']>;
  sanity?: InputMaybe<Scalars['Int']>;
  shroud?: InputMaybe<Scalars['Int']>;
  skill_agility?: InputMaybe<Scalars['Int']>;
  skill_combat?: InputMaybe<Scalars['Int']>;
  skill_intellect?: InputMaybe<Scalars['Int']>;
  skill_wild?: InputMaybe<Scalars['Int']>;
  skill_willpower?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Scalars['Int']>;
  subtype_code?: InputMaybe<Scalars['String']>;
  type_code?: InputMaybe<Scalars['String']>;
  victory?: InputMaybe<Scalars['Int']>;
};

/** columns and relationships of "card_subtype_name" */
export type Card_Subtype_Name = {
  __typename?: 'card_subtype_name';
  code: Scalars['String'];
  locale: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "card_subtype_name" */
export type Card_Subtype_Name_Aggregate = {
  __typename?: 'card_subtype_name_aggregate';
  aggregate?: Maybe<Card_Subtype_Name_Aggregate_Fields>;
  nodes: Array<Card_Subtype_Name>;
};

/** aggregate fields of "card_subtype_name" */
export type Card_Subtype_Name_Aggregate_Fields = {
  __typename?: 'card_subtype_name_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Card_Subtype_Name_Max_Fields>;
  min?: Maybe<Card_Subtype_Name_Min_Fields>;
};


/** aggregate fields of "card_subtype_name" */
export type Card_Subtype_Name_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Card_Subtype_Name_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "card_subtype_name". All fields are combined with a logical 'AND'. */
export type Card_Subtype_Name_Bool_Exp = {
  _and?: InputMaybe<Array<Card_Subtype_Name_Bool_Exp>>;
  _not?: InputMaybe<Card_Subtype_Name_Bool_Exp>;
  _or?: InputMaybe<Array<Card_Subtype_Name_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "card_subtype_name" */
export enum Card_Subtype_Name_Constraint {
  /** unique or primary key constraint on columns "code", "locale" */
  CardSubtypeNamePkey = 'card_subtype_name_pkey'
}

/** input type for inserting data into table "card_subtype_name" */
export type Card_Subtype_Name_Insert_Input = {
  code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Card_Subtype_Name_Max_Fields = {
  __typename?: 'card_subtype_name_max_fields';
  code?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Card_Subtype_Name_Min_Fields = {
  __typename?: 'card_subtype_name_min_fields';
  code?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "card_subtype_name" */
export type Card_Subtype_Name_Mutation_Response = {
  __typename?: 'card_subtype_name_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Card_Subtype_Name>;
};

/** on_conflict condition type for table "card_subtype_name" */
export type Card_Subtype_Name_On_Conflict = {
  constraint: Card_Subtype_Name_Constraint;
  update_columns?: Array<Card_Subtype_Name_Update_Column>;
  where?: InputMaybe<Card_Subtype_Name_Bool_Exp>;
};

/** Ordering options when selecting data from "card_subtype_name". */
export type Card_Subtype_Name_Order_By = {
  code?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: card_subtype_name */
export type Card_Subtype_Name_Pk_Columns_Input = {
  code: Scalars['String'];
  locale: Scalars['String'];
};

/** select columns of table "card_subtype_name" */
export enum Card_Subtype_Name_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "card_subtype_name" */
export type Card_Subtype_Name_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "card_subtype_name" */
export type Card_Subtype_Name_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Card_Subtype_Name_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Card_Subtype_Name_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "card_subtype_name" */
export enum Card_Subtype_Name_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name'
}

export type Card_Subtype_Name_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Card_Subtype_Name_Set_Input>;
  where: Card_Subtype_Name_Bool_Exp;
};

/** aggregate sum on columns */
export type Card_Sum_Fields = {
  __typename?: 'card_sum_fields';
  clues?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  deck_limit?: Maybe<Scalars['Int']>;
  doom?: Maybe<Scalars['Int']>;
  encounter_position?: Maybe<Scalars['Int']>;
  enemy_damage?: Maybe<Scalars['Int']>;
  enemy_evade?: Maybe<Scalars['Int']>;
  enemy_fight?: Maybe<Scalars['Int']>;
  enemy_horror?: Maybe<Scalars['Int']>;
  health?: Maybe<Scalars['Int']>;
  pack_position?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  sanity?: Maybe<Scalars['Int']>;
  shroud?: Maybe<Scalars['Int']>;
  skill_agility?: Maybe<Scalars['Int']>;
  skill_combat?: Maybe<Scalars['Int']>;
  skill_intellect?: Maybe<Scalars['Int']>;
  skill_wild?: Maybe<Scalars['Int']>;
  skill_willpower?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['Int']>;
  victory?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "card_text" */
export type Card_Text = {
  __typename?: 'card_text';
  back_flavor?: Maybe<Scalars['String']>;
  back_name?: Maybe<Scalars['String']>;
  back_text?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  encounter_name?: Maybe<Scalars['String']>;
  flavor?: Maybe<Scalars['String']>;
  locale: Scalars['String'];
  name: Scalars['String'];
  slot?: Maybe<Scalars['String']>;
  subname?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  traits?: Maybe<Scalars['String']>;
};

/** aggregated selection of "card_text" */
export type Card_Text_Aggregate = {
  __typename?: 'card_text_aggregate';
  aggregate?: Maybe<Card_Text_Aggregate_Fields>;
  nodes: Array<Card_Text>;
};

export type Card_Text_Aggregate_Bool_Exp = {
  count?: InputMaybe<Card_Text_Aggregate_Bool_Exp_Count>;
};

export type Card_Text_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Card_Text_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Card_Text_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "card_text" */
export type Card_Text_Aggregate_Fields = {
  __typename?: 'card_text_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Card_Text_Max_Fields>;
  min?: Maybe<Card_Text_Min_Fields>;
};


/** aggregate fields of "card_text" */
export type Card_Text_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Card_Text_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "card_text" */
export type Card_Text_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Card_Text_Max_Order_By>;
  min?: InputMaybe<Card_Text_Min_Order_By>;
};

/** input type for inserting array relation for remote table "card_text" */
export type Card_Text_Arr_Rel_Insert_Input = {
  data: Array<Card_Text_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Card_Text_On_Conflict>;
};

/** Boolean expression to filter rows from the table "card_text". All fields are combined with a logical 'AND'. */
export type Card_Text_Bool_Exp = {
  _and?: InputMaybe<Array<Card_Text_Bool_Exp>>;
  _not?: InputMaybe<Card_Text_Bool_Exp>;
  _or?: InputMaybe<Array<Card_Text_Bool_Exp>>;
  back_flavor?: InputMaybe<String_Comparison_Exp>;
  back_name?: InputMaybe<String_Comparison_Exp>;
  back_text?: InputMaybe<String_Comparison_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  encounter_name?: InputMaybe<String_Comparison_Exp>;
  flavor?: InputMaybe<String_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  slot?: InputMaybe<String_Comparison_Exp>;
  subname?: InputMaybe<String_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  traits?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "card_text" */
export enum Card_Text_Constraint {
  /** unique or primary key constraint on columns "code", "locale" */
  CardTextCodeLocaleKey = 'card_text_code_locale_key',
  /** unique or primary key constraint on columns "code", "locale" */
  CardTextPkey = 'card_text_pkey'
}

/** input type for inserting data into table "card_text" */
export type Card_Text_Insert_Input = {
  back_flavor?: InputMaybe<Scalars['String']>;
  back_name?: InputMaybe<Scalars['String']>;
  back_text?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  encounter_name?: InputMaybe<Scalars['String']>;
  flavor?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['String']>;
  subname?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  traits?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Card_Text_Max_Fields = {
  __typename?: 'card_text_max_fields';
  back_flavor?: Maybe<Scalars['String']>;
  back_name?: Maybe<Scalars['String']>;
  back_text?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  encounter_name?: Maybe<Scalars['String']>;
  flavor?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slot?: Maybe<Scalars['String']>;
  subname?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  traits?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "card_text" */
export type Card_Text_Max_Order_By = {
  back_flavor?: InputMaybe<Order_By>;
  back_name?: InputMaybe<Order_By>;
  back_text?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  encounter_name?: InputMaybe<Order_By>;
  flavor?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
  subname?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  traits?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Card_Text_Min_Fields = {
  __typename?: 'card_text_min_fields';
  back_flavor?: Maybe<Scalars['String']>;
  back_name?: Maybe<Scalars['String']>;
  back_text?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  encounter_name?: Maybe<Scalars['String']>;
  flavor?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slot?: Maybe<Scalars['String']>;
  subname?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  traits?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "card_text" */
export type Card_Text_Min_Order_By = {
  back_flavor?: InputMaybe<Order_By>;
  back_name?: InputMaybe<Order_By>;
  back_text?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  encounter_name?: InputMaybe<Order_By>;
  flavor?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
  subname?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  traits?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "card_text" */
export type Card_Text_Mutation_Response = {
  __typename?: 'card_text_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Card_Text>;
};

/** on_conflict condition type for table "card_text" */
export type Card_Text_On_Conflict = {
  constraint: Card_Text_Constraint;
  update_columns?: Array<Card_Text_Update_Column>;
  where?: InputMaybe<Card_Text_Bool_Exp>;
};

/** Ordering options when selecting data from "card_text". */
export type Card_Text_Order_By = {
  back_flavor?: InputMaybe<Order_By>;
  back_name?: InputMaybe<Order_By>;
  back_text?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  encounter_name?: InputMaybe<Order_By>;
  flavor?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
  subname?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  traits?: InputMaybe<Order_By>;
};

/** primary key columns input for table: card_text */
export type Card_Text_Pk_Columns_Input = {
  code: Scalars['String'];
  locale: Scalars['String'];
};

/** select columns of table "card_text" */
export enum Card_Text_Select_Column {
  /** column name */
  BackFlavor = 'back_flavor',
  /** column name */
  BackName = 'back_name',
  /** column name */
  BackText = 'back_text',
  /** column name */
  Code = 'code',
  /** column name */
  EncounterName = 'encounter_name',
  /** column name */
  Flavor = 'flavor',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  Slot = 'slot',
  /** column name */
  Subname = 'subname',
  /** column name */
  Text = 'text',
  /** column name */
  Traits = 'traits'
}

/** input type for updating data in table "card_text" */
export type Card_Text_Set_Input = {
  back_flavor?: InputMaybe<Scalars['String']>;
  back_name?: InputMaybe<Scalars['String']>;
  back_text?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  encounter_name?: InputMaybe<Scalars['String']>;
  flavor?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['String']>;
  subname?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  traits?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "card_text" */
export type Card_Text_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Card_Text_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Card_Text_Stream_Cursor_Value_Input = {
  back_flavor?: InputMaybe<Scalars['String']>;
  back_name?: InputMaybe<Scalars['String']>;
  back_text?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  encounter_name?: InputMaybe<Scalars['String']>;
  flavor?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['String']>;
  subname?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  traits?: InputMaybe<Scalars['String']>;
};

/** update columns of table "card_text" */
export enum Card_Text_Update_Column {
  /** column name */
  BackFlavor = 'back_flavor',
  /** column name */
  BackName = 'back_name',
  /** column name */
  BackText = 'back_text',
  /** column name */
  Code = 'code',
  /** column name */
  EncounterName = 'encounter_name',
  /** column name */
  Flavor = 'flavor',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  Slot = 'slot',
  /** column name */
  Subname = 'subname',
  /** column name */
  Text = 'text',
  /** column name */
  Traits = 'traits'
}

export type Card_Text_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Card_Text_Set_Input>;
  where: Card_Text_Bool_Exp;
};

/** columns and relationships of "card_type_code" */
export type Card_Type_Code = {
  __typename?: 'card_type_code';
  code: Scalars['String'];
};

/** aggregated selection of "card_type_code" */
export type Card_Type_Code_Aggregate = {
  __typename?: 'card_type_code_aggregate';
  aggregate?: Maybe<Card_Type_Code_Aggregate_Fields>;
  nodes: Array<Card_Type_Code>;
};

/** aggregate fields of "card_type_code" */
export type Card_Type_Code_Aggregate_Fields = {
  __typename?: 'card_type_code_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Card_Type_Code_Max_Fields>;
  min?: Maybe<Card_Type_Code_Min_Fields>;
};


/** aggregate fields of "card_type_code" */
export type Card_Type_Code_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Card_Type_Code_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "card_type_code". All fields are combined with a logical 'AND'. */
export type Card_Type_Code_Bool_Exp = {
  _and?: InputMaybe<Array<Card_Type_Code_Bool_Exp>>;
  _not?: InputMaybe<Card_Type_Code_Bool_Exp>;
  _or?: InputMaybe<Array<Card_Type_Code_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "card_type_code" */
export enum Card_Type_Code_Constraint {
  /** unique or primary key constraint on columns "code" */
  CardTypeCodePkey = 'card_type_code_pkey'
}

export enum Card_Type_Code_Enum {
  Act = 'act',
  Agenda = 'agenda',
  Asset = 'asset',
  Enemy = 'enemy',
  Event = 'event',
  Investigator = 'investigator',
  Key = 'key',
  Location = 'location',
  Scenario = 'scenario',
  Skill = 'skill',
  Story = 'story',
  Treachery = 'treachery'
}

/** Boolean expression to compare columns of type "card_type_code_enum". All fields are combined with logical 'AND'. */
export type Card_Type_Code_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Card_Type_Code_Enum>;
  _in?: InputMaybe<Array<Card_Type_Code_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Card_Type_Code_Enum>;
  _nin?: InputMaybe<Array<Card_Type_Code_Enum>>;
};

/** input type for inserting data into table "card_type_code" */
export type Card_Type_Code_Insert_Input = {
  code?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Card_Type_Code_Max_Fields = {
  __typename?: 'card_type_code_max_fields';
  code?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Card_Type_Code_Min_Fields = {
  __typename?: 'card_type_code_min_fields';
  code?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "card_type_code" */
export type Card_Type_Code_Mutation_Response = {
  __typename?: 'card_type_code_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Card_Type_Code>;
};

/** input type for inserting object relation for remote table "card_type_code" */
export type Card_Type_Code_Obj_Rel_Insert_Input = {
  data: Card_Type_Code_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Card_Type_Code_On_Conflict>;
};

/** on_conflict condition type for table "card_type_code" */
export type Card_Type_Code_On_Conflict = {
  constraint: Card_Type_Code_Constraint;
  update_columns?: Array<Card_Type_Code_Update_Column>;
  where?: InputMaybe<Card_Type_Code_Bool_Exp>;
};

/** Ordering options when selecting data from "card_type_code". */
export type Card_Type_Code_Order_By = {
  code?: InputMaybe<Order_By>;
};

/** primary key columns input for table: card_type_code */
export type Card_Type_Code_Pk_Columns_Input = {
  code: Scalars['String'];
};

/** select columns of table "card_type_code" */
export enum Card_Type_Code_Select_Column {
  /** column name */
  Code = 'code'
}

/** input type for updating data in table "card_type_code" */
export type Card_Type_Code_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "card_type_code" */
export type Card_Type_Code_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Card_Type_Code_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Card_Type_Code_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']>;
};

/** update columns of table "card_type_code" */
export enum Card_Type_Code_Update_Column {
  /** column name */
  Code = 'code'
}

export type Card_Type_Code_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Card_Type_Code_Set_Input>;
  where: Card_Type_Code_Bool_Exp;
};

/** columns and relationships of "card_type_name" */
export type Card_Type_Name = {
  __typename?: 'card_type_name';
  code: Card_Type_Code_Enum;
  locale: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "card_type_name" */
export type Card_Type_Name_Aggregate = {
  __typename?: 'card_type_name_aggregate';
  aggregate?: Maybe<Card_Type_Name_Aggregate_Fields>;
  nodes: Array<Card_Type_Name>;
};

/** aggregate fields of "card_type_name" */
export type Card_Type_Name_Aggregate_Fields = {
  __typename?: 'card_type_name_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Card_Type_Name_Max_Fields>;
  min?: Maybe<Card_Type_Name_Min_Fields>;
};


/** aggregate fields of "card_type_name" */
export type Card_Type_Name_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Card_Type_Name_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "card_type_name". All fields are combined with a logical 'AND'. */
export type Card_Type_Name_Bool_Exp = {
  _and?: InputMaybe<Array<Card_Type_Name_Bool_Exp>>;
  _not?: InputMaybe<Card_Type_Name_Bool_Exp>;
  _or?: InputMaybe<Array<Card_Type_Name_Bool_Exp>>;
  code?: InputMaybe<Card_Type_Code_Enum_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "card_type_name" */
export enum Card_Type_Name_Constraint {
  /** unique or primary key constraint on columns "code", "locale" */
  TypeNamePkey = 'type_name_pkey'
}

/** input type for inserting data into table "card_type_name" */
export type Card_Type_Name_Insert_Input = {
  code?: InputMaybe<Card_Type_Code_Enum>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Card_Type_Name_Max_Fields = {
  __typename?: 'card_type_name_max_fields';
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Card_Type_Name_Min_Fields = {
  __typename?: 'card_type_name_min_fields';
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "card_type_name" */
export type Card_Type_Name_Mutation_Response = {
  __typename?: 'card_type_name_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Card_Type_Name>;
};

/** on_conflict condition type for table "card_type_name" */
export type Card_Type_Name_On_Conflict = {
  constraint: Card_Type_Name_Constraint;
  update_columns?: Array<Card_Type_Name_Update_Column>;
  where?: InputMaybe<Card_Type_Name_Bool_Exp>;
};

/** Ordering options when selecting data from "card_type_name". */
export type Card_Type_Name_Order_By = {
  code?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: card_type_name */
export type Card_Type_Name_Pk_Columns_Input = {
  code: Card_Type_Code_Enum;
  locale: Scalars['String'];
};

/** select columns of table "card_type_name" */
export enum Card_Type_Name_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "card_type_name" */
export type Card_Type_Name_Set_Input = {
  code?: InputMaybe<Card_Type_Code_Enum>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "card_type_name" */
export type Card_Type_Name_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Card_Type_Name_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Card_Type_Name_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Card_Type_Code_Enum>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "card_type_name" */
export enum Card_Type_Name_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name'
}

export type Card_Type_Name_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Card_Type_Name_Set_Input>;
  where: Card_Type_Name_Bool_Exp;
};

/** update columns of table "card" */
export enum Card_Update_Column {
  /** column name */
  BackLink = 'back_link',
  /** column name */
  Clues = 'clues',
  /** column name */
  Code = 'code',
  /** column name */
  Cost = 'cost',
  /** column name */
  DeckLimit = 'deck_limit',
  /** column name */
  DeckOptions = 'deck_options',
  /** column name */
  DeckRequirements = 'deck_requirements',
  /** column name */
  Doom = 'doom',
  /** column name */
  DoubleSided = 'double_sided',
  /** column name */
  EncounterCode = 'encounter_code',
  /** column name */
  EncounterPosition = 'encounter_position',
  /** column name */
  EnemyDamage = 'enemy_damage',
  /** column name */
  EnemyEvade = 'enemy_evade',
  /** column name */
  EnemyFight = 'enemy_fight',
  /** column name */
  EnemyHorror = 'enemy_horror',
  /** column name */
  Exceptional = 'exceptional',
  /** column name */
  Exile = 'exile',
  /** column name */
  FactionCode = 'faction_code',
  /** column name */
  Health = 'health',
  /** column name */
  Hidden = 'hidden',
  /** column name */
  Illustrator = 'illustrator',
  /** column name */
  IsUnique = 'is_unique',
  /** column name */
  Myriad = 'myriad',
  /** column name */
  PackCode = 'pack_code',
  /** column name */
  PackPosition = 'pack_position',
  /** column name */
  Permanent = 'permanent',
  /** column name */
  Position = 'position',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  RealBackFlavor = 'real_back_flavor',
  /** column name */
  RealBackName = 'real_back_name',
  /** column name */
  RealBackText = 'real_back_text',
  /** column name */
  RealFlavor = 'real_flavor',
  /** column name */
  RealName = 'real_name',
  /** column name */
  RealPackName = 'real_pack_name',
  /** column name */
  RealSlot = 'real_slot',
  /** column name */
  RealSubname = 'real_subname',
  /** column name */
  RealText = 'real_text',
  /** column name */
  RealTraits = 'real_traits',
  /** column name */
  Restrictions = 'restrictions',
  /** column name */
  Sanity = 'sanity',
  /** column name */
  Shroud = 'shroud',
  /** column name */
  SkillAgility = 'skill_agility',
  /** column name */
  SkillCombat = 'skill_combat',
  /** column name */
  SkillIntellect = 'skill_intellect',
  /** column name */
  SkillWild = 'skill_wild',
  /** column name */
  SkillWillpower = 'skill_willpower',
  /** column name */
  Stage = 'stage',
  /** column name */
  SubtypeCode = 'subtype_code',
  /** column name */
  TypeCode = 'type_code',
  /** column name */
  Victory = 'victory'
}

export type Card_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Card_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Card_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Card_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Card_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Card_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Card_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Card_Set_Input>;
  where: Card_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Card_Var_Pop_Fields = {
  __typename?: 'card_var_pop_fields';
  clues?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  deck_limit?: Maybe<Scalars['Float']>;
  doom?: Maybe<Scalars['Float']>;
  encounter_position?: Maybe<Scalars['Float']>;
  enemy_damage?: Maybe<Scalars['Float']>;
  enemy_evade?: Maybe<Scalars['Float']>;
  enemy_fight?: Maybe<Scalars['Float']>;
  enemy_horror?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  pack_position?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sanity?: Maybe<Scalars['Float']>;
  shroud?: Maybe<Scalars['Float']>;
  skill_agility?: Maybe<Scalars['Float']>;
  skill_combat?: Maybe<Scalars['Float']>;
  skill_intellect?: Maybe<Scalars['Float']>;
  skill_wild?: Maybe<Scalars['Float']>;
  skill_willpower?: Maybe<Scalars['Float']>;
  stage?: Maybe<Scalars['Float']>;
  victory?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Card_Var_Samp_Fields = {
  __typename?: 'card_var_samp_fields';
  clues?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  deck_limit?: Maybe<Scalars['Float']>;
  doom?: Maybe<Scalars['Float']>;
  encounter_position?: Maybe<Scalars['Float']>;
  enemy_damage?: Maybe<Scalars['Float']>;
  enemy_evade?: Maybe<Scalars['Float']>;
  enemy_fight?: Maybe<Scalars['Float']>;
  enemy_horror?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  pack_position?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sanity?: Maybe<Scalars['Float']>;
  shroud?: Maybe<Scalars['Float']>;
  skill_agility?: Maybe<Scalars['Float']>;
  skill_combat?: Maybe<Scalars['Float']>;
  skill_intellect?: Maybe<Scalars['Float']>;
  skill_wild?: Maybe<Scalars['Float']>;
  skill_willpower?: Maybe<Scalars['Float']>;
  stage?: Maybe<Scalars['Float']>;
  victory?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Card_Variance_Fields = {
  __typename?: 'card_variance_fields';
  clues?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  deck_limit?: Maybe<Scalars['Float']>;
  doom?: Maybe<Scalars['Float']>;
  encounter_position?: Maybe<Scalars['Float']>;
  enemy_damage?: Maybe<Scalars['Float']>;
  enemy_evade?: Maybe<Scalars['Float']>;
  enemy_fight?: Maybe<Scalars['Float']>;
  enemy_horror?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  pack_position?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sanity?: Maybe<Scalars['Float']>;
  shroud?: Maybe<Scalars['Float']>;
  skill_agility?: Maybe<Scalars['Float']>;
  skill_combat?: Maybe<Scalars['Float']>;
  skill_intellect?: Maybe<Scalars['Float']>;
  skill_wild?: Maybe<Scalars['Float']>;
  skill_willpower?: Maybe<Scalars['Float']>;
  stage?: Maybe<Scalars['Float']>;
  victory?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "chaos_bag_result" */
export type Chaos_Bag_Result = {
  __typename?: 'chaos_bag_result';
  bless: Scalars['Int'];
  /** An object relationship */
  campaign: Campaign;
  created_at: Scalars['timestamptz'];
  curse: Scalars['Int'];
  difficulty?: Maybe<Campaign_Difficulty_Enum>;
  drawn: Scalars['jsonb'];
  id: Scalars['Int'];
  sealed: Scalars['jsonb'];
  tarot?: Maybe<Chaos_Bag_Tarot_Mode_Enum>;
  /** An object relationship */
  tarot_mode?: Maybe<Chaos_Bag_Tarot_Mode>;
  totalDrawn?: Maybe<Scalars['Int']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "chaos_bag_result" */
export type Chaos_Bag_ResultDrawnArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "chaos_bag_result" */
export type Chaos_Bag_ResultSealedArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "chaos_bag_result" */
export type Chaos_Bag_Result_Aggregate = {
  __typename?: 'chaos_bag_result_aggregate';
  aggregate?: Maybe<Chaos_Bag_Result_Aggregate_Fields>;
  nodes: Array<Chaos_Bag_Result>;
};

export type Chaos_Bag_Result_Aggregate_Bool_Exp = {
  count?: InputMaybe<Chaos_Bag_Result_Aggregate_Bool_Exp_Count>;
};

export type Chaos_Bag_Result_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Chaos_Bag_Result_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Chaos_Bag_Result_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "chaos_bag_result" */
export type Chaos_Bag_Result_Aggregate_Fields = {
  __typename?: 'chaos_bag_result_aggregate_fields';
  avg?: Maybe<Chaos_Bag_Result_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Chaos_Bag_Result_Max_Fields>;
  min?: Maybe<Chaos_Bag_Result_Min_Fields>;
  stddev?: Maybe<Chaos_Bag_Result_Stddev_Fields>;
  stddev_pop?: Maybe<Chaos_Bag_Result_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Chaos_Bag_Result_Stddev_Samp_Fields>;
  sum?: Maybe<Chaos_Bag_Result_Sum_Fields>;
  var_pop?: Maybe<Chaos_Bag_Result_Var_Pop_Fields>;
  var_samp?: Maybe<Chaos_Bag_Result_Var_Samp_Fields>;
  variance?: Maybe<Chaos_Bag_Result_Variance_Fields>;
};


/** aggregate fields of "chaos_bag_result" */
export type Chaos_Bag_Result_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Chaos_Bag_Result_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "chaos_bag_result" */
export type Chaos_Bag_Result_Aggregate_Order_By = {
  avg?: InputMaybe<Chaos_Bag_Result_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Chaos_Bag_Result_Max_Order_By>;
  min?: InputMaybe<Chaos_Bag_Result_Min_Order_By>;
  stddev?: InputMaybe<Chaos_Bag_Result_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Chaos_Bag_Result_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Chaos_Bag_Result_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Chaos_Bag_Result_Sum_Order_By>;
  var_pop?: InputMaybe<Chaos_Bag_Result_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Chaos_Bag_Result_Var_Samp_Order_By>;
  variance?: InputMaybe<Chaos_Bag_Result_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Chaos_Bag_Result_Append_Input = {
  drawn?: InputMaybe<Scalars['jsonb']>;
  sealed?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "chaos_bag_result" */
export type Chaos_Bag_Result_Arr_Rel_Insert_Input = {
  data: Array<Chaos_Bag_Result_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Chaos_Bag_Result_On_Conflict>;
};

/** aggregate avg on columns */
export type Chaos_Bag_Result_Avg_Fields = {
  __typename?: 'chaos_bag_result_avg_fields';
  bless?: Maybe<Scalars['Float']>;
  curse?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  totalDrawn?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "chaos_bag_result" */
export type Chaos_Bag_Result_Avg_Order_By = {
  bless?: InputMaybe<Order_By>;
  curse?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  totalDrawn?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "chaos_bag_result". All fields are combined with a logical 'AND'. */
export type Chaos_Bag_Result_Bool_Exp = {
  _and?: InputMaybe<Array<Chaos_Bag_Result_Bool_Exp>>;
  _not?: InputMaybe<Chaos_Bag_Result_Bool_Exp>;
  _or?: InputMaybe<Array<Chaos_Bag_Result_Bool_Exp>>;
  bless?: InputMaybe<Int_Comparison_Exp>;
  campaign?: InputMaybe<Campaign_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  curse?: InputMaybe<Int_Comparison_Exp>;
  difficulty?: InputMaybe<Campaign_Difficulty_Enum_Comparison_Exp>;
  drawn?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  sealed?: InputMaybe<Jsonb_Comparison_Exp>;
  tarot?: InputMaybe<Chaos_Bag_Tarot_Mode_Enum_Comparison_Exp>;
  tarot_mode?: InputMaybe<Chaos_Bag_Tarot_Mode_Bool_Exp>;
  totalDrawn?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "chaos_bag_result" */
export enum Chaos_Bag_Result_Constraint {
  /** unique or primary key constraint on columns "id" */
  ChaosBagPkey = 'chaos_bag_pkey',
  /** unique or primary key constraint on columns "id" */
  ChaosBagResultsCampaignIdKey = 'chaos_bag_results_campaign_id_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Chaos_Bag_Result_Delete_At_Path_Input = {
  drawn?: InputMaybe<Array<Scalars['String']>>;
  sealed?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Chaos_Bag_Result_Delete_Elem_Input = {
  drawn?: InputMaybe<Scalars['Int']>;
  sealed?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Chaos_Bag_Result_Delete_Key_Input = {
  drawn?: InputMaybe<Scalars['String']>;
  sealed?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "chaos_bag_result" */
export type Chaos_Bag_Result_Inc_Input = {
  bless?: InputMaybe<Scalars['Int']>;
  curse?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  totalDrawn?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "chaos_bag_result" */
export type Chaos_Bag_Result_Insert_Input = {
  bless?: InputMaybe<Scalars['Int']>;
  campaign?: InputMaybe<Campaign_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  curse?: InputMaybe<Scalars['Int']>;
  difficulty?: InputMaybe<Campaign_Difficulty_Enum>;
  drawn?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['Int']>;
  sealed?: InputMaybe<Scalars['jsonb']>;
  tarot?: InputMaybe<Chaos_Bag_Tarot_Mode_Enum>;
  tarot_mode?: InputMaybe<Chaos_Bag_Tarot_Mode_Obj_Rel_Insert_Input>;
  totalDrawn?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Chaos_Bag_Result_Max_Fields = {
  __typename?: 'chaos_bag_result_max_fields';
  bless?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  curse?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  totalDrawn?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "chaos_bag_result" */
export type Chaos_Bag_Result_Max_Order_By = {
  bless?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  curse?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  totalDrawn?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Chaos_Bag_Result_Min_Fields = {
  __typename?: 'chaos_bag_result_min_fields';
  bless?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  curse?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  totalDrawn?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "chaos_bag_result" */
export type Chaos_Bag_Result_Min_Order_By = {
  bless?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  curse?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  totalDrawn?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "chaos_bag_result" */
export type Chaos_Bag_Result_Mutation_Response = {
  __typename?: 'chaos_bag_result_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Chaos_Bag_Result>;
};

/** on_conflict condition type for table "chaos_bag_result" */
export type Chaos_Bag_Result_On_Conflict = {
  constraint: Chaos_Bag_Result_Constraint;
  update_columns?: Array<Chaos_Bag_Result_Update_Column>;
  where?: InputMaybe<Chaos_Bag_Result_Bool_Exp>;
};

/** Ordering options when selecting data from "chaos_bag_result". */
export type Chaos_Bag_Result_Order_By = {
  bless?: InputMaybe<Order_By>;
  campaign?: InputMaybe<Campaign_Order_By>;
  created_at?: InputMaybe<Order_By>;
  curse?: InputMaybe<Order_By>;
  difficulty?: InputMaybe<Order_By>;
  drawn?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sealed?: InputMaybe<Order_By>;
  tarot?: InputMaybe<Order_By>;
  tarot_mode?: InputMaybe<Chaos_Bag_Tarot_Mode_Order_By>;
  totalDrawn?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: chaos_bag_result */
export type Chaos_Bag_Result_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Chaos_Bag_Result_Prepend_Input = {
  drawn?: InputMaybe<Scalars['jsonb']>;
  sealed?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "chaos_bag_result" */
export enum Chaos_Bag_Result_Select_Column {
  /** column name */
  Bless = 'bless',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Curse = 'curse',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  Drawn = 'drawn',
  /** column name */
  Id = 'id',
  /** column name */
  Sealed = 'sealed',
  /** column name */
  Tarot = 'tarot',
  /** column name */
  TotalDrawn = 'totalDrawn',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "chaos_bag_result" */
export type Chaos_Bag_Result_Set_Input = {
  bless?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  curse?: InputMaybe<Scalars['Int']>;
  difficulty?: InputMaybe<Campaign_Difficulty_Enum>;
  drawn?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['Int']>;
  sealed?: InputMaybe<Scalars['jsonb']>;
  tarot?: InputMaybe<Chaos_Bag_Tarot_Mode_Enum>;
  totalDrawn?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Chaos_Bag_Result_Stddev_Fields = {
  __typename?: 'chaos_bag_result_stddev_fields';
  bless?: Maybe<Scalars['Float']>;
  curse?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  totalDrawn?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "chaos_bag_result" */
export type Chaos_Bag_Result_Stddev_Order_By = {
  bless?: InputMaybe<Order_By>;
  curse?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  totalDrawn?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Chaos_Bag_Result_Stddev_Pop_Fields = {
  __typename?: 'chaos_bag_result_stddev_pop_fields';
  bless?: Maybe<Scalars['Float']>;
  curse?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  totalDrawn?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "chaos_bag_result" */
export type Chaos_Bag_Result_Stddev_Pop_Order_By = {
  bless?: InputMaybe<Order_By>;
  curse?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  totalDrawn?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Chaos_Bag_Result_Stddev_Samp_Fields = {
  __typename?: 'chaos_bag_result_stddev_samp_fields';
  bless?: Maybe<Scalars['Float']>;
  curse?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  totalDrawn?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "chaos_bag_result" */
export type Chaos_Bag_Result_Stddev_Samp_Order_By = {
  bless?: InputMaybe<Order_By>;
  curse?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  totalDrawn?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "chaos_bag_result" */
export type Chaos_Bag_Result_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Chaos_Bag_Result_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Chaos_Bag_Result_Stream_Cursor_Value_Input = {
  bless?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  curse?: InputMaybe<Scalars['Int']>;
  difficulty?: InputMaybe<Campaign_Difficulty_Enum>;
  drawn?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['Int']>;
  sealed?: InputMaybe<Scalars['jsonb']>;
  tarot?: InputMaybe<Chaos_Bag_Tarot_Mode_Enum>;
  totalDrawn?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Chaos_Bag_Result_Sum_Fields = {
  __typename?: 'chaos_bag_result_sum_fields';
  bless?: Maybe<Scalars['Int']>;
  curse?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  totalDrawn?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "chaos_bag_result" */
export type Chaos_Bag_Result_Sum_Order_By = {
  bless?: InputMaybe<Order_By>;
  curse?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  totalDrawn?: InputMaybe<Order_By>;
};

/** update columns of table "chaos_bag_result" */
export enum Chaos_Bag_Result_Update_Column {
  /** column name */
  Bless = 'bless',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Curse = 'curse',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  Drawn = 'drawn',
  /** column name */
  Id = 'id',
  /** column name */
  Sealed = 'sealed',
  /** column name */
  Tarot = 'tarot',
  /** column name */
  TotalDrawn = 'totalDrawn',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Chaos_Bag_Result_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Chaos_Bag_Result_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Chaos_Bag_Result_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Chaos_Bag_Result_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Chaos_Bag_Result_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Chaos_Bag_Result_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Chaos_Bag_Result_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Chaos_Bag_Result_Set_Input>;
  where: Chaos_Bag_Result_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Chaos_Bag_Result_Var_Pop_Fields = {
  __typename?: 'chaos_bag_result_var_pop_fields';
  bless?: Maybe<Scalars['Float']>;
  curse?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  totalDrawn?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "chaos_bag_result" */
export type Chaos_Bag_Result_Var_Pop_Order_By = {
  bless?: InputMaybe<Order_By>;
  curse?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  totalDrawn?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Chaos_Bag_Result_Var_Samp_Fields = {
  __typename?: 'chaos_bag_result_var_samp_fields';
  bless?: Maybe<Scalars['Float']>;
  curse?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  totalDrawn?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "chaos_bag_result" */
export type Chaos_Bag_Result_Var_Samp_Order_By = {
  bless?: InputMaybe<Order_By>;
  curse?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  totalDrawn?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Chaos_Bag_Result_Variance_Fields = {
  __typename?: 'chaos_bag_result_variance_fields';
  bless?: Maybe<Scalars['Float']>;
  curse?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  totalDrawn?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "chaos_bag_result" */
export type Chaos_Bag_Result_Variance_Order_By = {
  bless?: InputMaybe<Order_By>;
  curse?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  totalDrawn?: InputMaybe<Order_By>;
};

/** columns and relationships of "chaos_bag_tarot_mode" */
export type Chaos_Bag_Tarot_Mode = {
  __typename?: 'chaos_bag_tarot_mode';
  value: Scalars['String'];
};

/** aggregated selection of "chaos_bag_tarot_mode" */
export type Chaos_Bag_Tarot_Mode_Aggregate = {
  __typename?: 'chaos_bag_tarot_mode_aggregate';
  aggregate?: Maybe<Chaos_Bag_Tarot_Mode_Aggregate_Fields>;
  nodes: Array<Chaos_Bag_Tarot_Mode>;
};

/** aggregate fields of "chaos_bag_tarot_mode" */
export type Chaos_Bag_Tarot_Mode_Aggregate_Fields = {
  __typename?: 'chaos_bag_tarot_mode_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Chaos_Bag_Tarot_Mode_Max_Fields>;
  min?: Maybe<Chaos_Bag_Tarot_Mode_Min_Fields>;
};


/** aggregate fields of "chaos_bag_tarot_mode" */
export type Chaos_Bag_Tarot_Mode_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Chaos_Bag_Tarot_Mode_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "chaos_bag_tarot_mode". All fields are combined with a logical 'AND'. */
export type Chaos_Bag_Tarot_Mode_Bool_Exp = {
  _and?: InputMaybe<Array<Chaos_Bag_Tarot_Mode_Bool_Exp>>;
  _not?: InputMaybe<Chaos_Bag_Tarot_Mode_Bool_Exp>;
  _or?: InputMaybe<Array<Chaos_Bag_Tarot_Mode_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "chaos_bag_tarot_mode" */
export enum Chaos_Bag_Tarot_Mode_Constraint {
  /** unique or primary key constraint on columns "value" */
  ChaosBagTarotModePkey = 'chaos_bag_tarot_mode_pkey'
}

export enum Chaos_Bag_Tarot_Mode_Enum {
  Judgement = 'judgement',
  JudgementInverted = 'judgement_inverted'
}

/** Boolean expression to compare columns of type "chaos_bag_tarot_mode_enum". All fields are combined with logical 'AND'. */
export type Chaos_Bag_Tarot_Mode_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Chaos_Bag_Tarot_Mode_Enum>;
  _in?: InputMaybe<Array<Chaos_Bag_Tarot_Mode_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Chaos_Bag_Tarot_Mode_Enum>;
  _nin?: InputMaybe<Array<Chaos_Bag_Tarot_Mode_Enum>>;
};

/** input type for inserting data into table "chaos_bag_tarot_mode" */
export type Chaos_Bag_Tarot_Mode_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Chaos_Bag_Tarot_Mode_Max_Fields = {
  __typename?: 'chaos_bag_tarot_mode_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Chaos_Bag_Tarot_Mode_Min_Fields = {
  __typename?: 'chaos_bag_tarot_mode_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "chaos_bag_tarot_mode" */
export type Chaos_Bag_Tarot_Mode_Mutation_Response = {
  __typename?: 'chaos_bag_tarot_mode_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Chaos_Bag_Tarot_Mode>;
};

/** input type for inserting object relation for remote table "chaos_bag_tarot_mode" */
export type Chaos_Bag_Tarot_Mode_Obj_Rel_Insert_Input = {
  data: Chaos_Bag_Tarot_Mode_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Chaos_Bag_Tarot_Mode_On_Conflict>;
};

/** on_conflict condition type for table "chaos_bag_tarot_mode" */
export type Chaos_Bag_Tarot_Mode_On_Conflict = {
  constraint: Chaos_Bag_Tarot_Mode_Constraint;
  update_columns?: Array<Chaos_Bag_Tarot_Mode_Update_Column>;
  where?: InputMaybe<Chaos_Bag_Tarot_Mode_Bool_Exp>;
};

/** Ordering options when selecting data from "chaos_bag_tarot_mode". */
export type Chaos_Bag_Tarot_Mode_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: chaos_bag_tarot_mode */
export type Chaos_Bag_Tarot_Mode_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "chaos_bag_tarot_mode" */
export enum Chaos_Bag_Tarot_Mode_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "chaos_bag_tarot_mode" */
export type Chaos_Bag_Tarot_Mode_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "chaos_bag_tarot_mode" */
export type Chaos_Bag_Tarot_Mode_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Chaos_Bag_Tarot_Mode_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Chaos_Bag_Tarot_Mode_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "chaos_bag_tarot_mode" */
export enum Chaos_Bag_Tarot_Mode_Update_Column {
  /** column name */
  Value = 'value'
}

export type Chaos_Bag_Tarot_Mode_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Chaos_Bag_Tarot_Mode_Set_Input>;
  where: Chaos_Bag_Tarot_Mode_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "cycle" */
export type Cycle = {
  __typename?: 'cycle';
  code: Scalars['String'];
  official: Scalars['Boolean'];
  /** An array relationship */
  packs: Array<Pack>;
  /** An aggregate relationship */
  packs_aggregate: Pack_Aggregate;
  position: Scalars['Int'];
  real_name: Scalars['String'];
  /** An array relationship */
  translations: Array<Cycle_Name>;
  /** An aggregate relationship */
  translations_aggregate: Cycle_Name_Aggregate;
};


/** columns and relationships of "cycle" */
export type CyclePacksArgs = {
  distinct_on?: InputMaybe<Array<Pack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pack_Order_By>>;
  where?: InputMaybe<Pack_Bool_Exp>;
};


/** columns and relationships of "cycle" */
export type CyclePacks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pack_Order_By>>;
  where?: InputMaybe<Pack_Bool_Exp>;
};


/** columns and relationships of "cycle" */
export type CycleTranslationsArgs = {
  distinct_on?: InputMaybe<Array<Cycle_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cycle_Name_Order_By>>;
  where?: InputMaybe<Cycle_Name_Bool_Exp>;
};


/** columns and relationships of "cycle" */
export type CycleTranslations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cycle_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cycle_Name_Order_By>>;
  where?: InputMaybe<Cycle_Name_Bool_Exp>;
};

/** aggregated selection of "cycle" */
export type Cycle_Aggregate = {
  __typename?: 'cycle_aggregate';
  aggregate?: Maybe<Cycle_Aggregate_Fields>;
  nodes: Array<Cycle>;
};

/** aggregate fields of "cycle" */
export type Cycle_Aggregate_Fields = {
  __typename?: 'cycle_aggregate_fields';
  avg?: Maybe<Cycle_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Cycle_Max_Fields>;
  min?: Maybe<Cycle_Min_Fields>;
  stddev?: Maybe<Cycle_Stddev_Fields>;
  stddev_pop?: Maybe<Cycle_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cycle_Stddev_Samp_Fields>;
  sum?: Maybe<Cycle_Sum_Fields>;
  var_pop?: Maybe<Cycle_Var_Pop_Fields>;
  var_samp?: Maybe<Cycle_Var_Samp_Fields>;
  variance?: Maybe<Cycle_Variance_Fields>;
};


/** aggregate fields of "cycle" */
export type Cycle_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cycle_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Cycle_Avg_Fields = {
  __typename?: 'cycle_avg_fields';
  position?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "cycle". All fields are combined with a logical 'AND'. */
export type Cycle_Bool_Exp = {
  _and?: InputMaybe<Array<Cycle_Bool_Exp>>;
  _not?: InputMaybe<Cycle_Bool_Exp>;
  _or?: InputMaybe<Array<Cycle_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  official?: InputMaybe<Boolean_Comparison_Exp>;
  packs?: InputMaybe<Pack_Bool_Exp>;
  packs_aggregate?: InputMaybe<Pack_Aggregate_Bool_Exp>;
  position?: InputMaybe<Int_Comparison_Exp>;
  real_name?: InputMaybe<String_Comparison_Exp>;
  translations?: InputMaybe<Cycle_Name_Bool_Exp>;
  translations_aggregate?: InputMaybe<Cycle_Name_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "cycle" */
export enum Cycle_Constraint {
  /** unique or primary key constraint on columns "code" */
  CyclePkey = 'cycle_pkey'
}

/** input type for incrementing numeric columns in table "cycle" */
export type Cycle_Inc_Input = {
  position?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "cycle" */
export type Cycle_Insert_Input = {
  code?: InputMaybe<Scalars['String']>;
  official?: InputMaybe<Scalars['Boolean']>;
  packs?: InputMaybe<Pack_Arr_Rel_Insert_Input>;
  position?: InputMaybe<Scalars['Int']>;
  real_name?: InputMaybe<Scalars['String']>;
  translations?: InputMaybe<Cycle_Name_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Cycle_Max_Fields = {
  __typename?: 'cycle_max_fields';
  code?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  real_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Cycle_Min_Fields = {
  __typename?: 'cycle_min_fields';
  code?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  real_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "cycle" */
export type Cycle_Mutation_Response = {
  __typename?: 'cycle_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cycle>;
};

/** columns and relationships of "cycle_name" */
export type Cycle_Name = {
  __typename?: 'cycle_name';
  code: Scalars['String'];
  locale: Scalars['String'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "cycle_name" */
export type Cycle_Name_Aggregate = {
  __typename?: 'cycle_name_aggregate';
  aggregate?: Maybe<Cycle_Name_Aggregate_Fields>;
  nodes: Array<Cycle_Name>;
};

export type Cycle_Name_Aggregate_Bool_Exp = {
  count?: InputMaybe<Cycle_Name_Aggregate_Bool_Exp_Count>;
};

export type Cycle_Name_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Cycle_Name_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Cycle_Name_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "cycle_name" */
export type Cycle_Name_Aggregate_Fields = {
  __typename?: 'cycle_name_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Cycle_Name_Max_Fields>;
  min?: Maybe<Cycle_Name_Min_Fields>;
};


/** aggregate fields of "cycle_name" */
export type Cycle_Name_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cycle_Name_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "cycle_name" */
export type Cycle_Name_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Cycle_Name_Max_Order_By>;
  min?: InputMaybe<Cycle_Name_Min_Order_By>;
};

/** input type for inserting array relation for remote table "cycle_name" */
export type Cycle_Name_Arr_Rel_Insert_Input = {
  data: Array<Cycle_Name_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Cycle_Name_On_Conflict>;
};

/** Boolean expression to filter rows from the table "cycle_name". All fields are combined with a logical 'AND'. */
export type Cycle_Name_Bool_Exp = {
  _and?: InputMaybe<Array<Cycle_Name_Bool_Exp>>;
  _not?: InputMaybe<Cycle_Name_Bool_Exp>;
  _or?: InputMaybe<Array<Cycle_Name_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "cycle_name" */
export enum Cycle_Name_Constraint {
  /** unique or primary key constraint on columns "code", "locale" */
  CycleNamePkey = 'cycle_name_pkey'
}

/** input type for inserting data into table "cycle_name" */
export type Cycle_Name_Insert_Input = {
  code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Cycle_Name_Max_Fields = {
  __typename?: 'cycle_name_max_fields';
  code?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "cycle_name" */
export type Cycle_Name_Max_Order_By = {
  code?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Cycle_Name_Min_Fields = {
  __typename?: 'cycle_name_min_fields';
  code?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "cycle_name" */
export type Cycle_Name_Min_Order_By = {
  code?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "cycle_name" */
export type Cycle_Name_Mutation_Response = {
  __typename?: 'cycle_name_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cycle_Name>;
};

/** on_conflict condition type for table "cycle_name" */
export type Cycle_Name_On_Conflict = {
  constraint: Cycle_Name_Constraint;
  update_columns?: Array<Cycle_Name_Update_Column>;
  where?: InputMaybe<Cycle_Name_Bool_Exp>;
};

/** Ordering options when selecting data from "cycle_name". */
export type Cycle_Name_Order_By = {
  code?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cycle_name */
export type Cycle_Name_Pk_Columns_Input = {
  code: Scalars['String'];
  locale: Scalars['String'];
};

/** select columns of table "cycle_name" */
export enum Cycle_Name_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "cycle_name" */
export type Cycle_Name_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "cycle_name" */
export type Cycle_Name_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cycle_Name_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cycle_Name_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "cycle_name" */
export enum Cycle_Name_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Cycle_Name_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cycle_Name_Set_Input>;
  where: Cycle_Name_Bool_Exp;
};

/** input type for inserting object relation for remote table "cycle" */
export type Cycle_Obj_Rel_Insert_Input = {
  data: Cycle_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Cycle_On_Conflict>;
};

/** on_conflict condition type for table "cycle" */
export type Cycle_On_Conflict = {
  constraint: Cycle_Constraint;
  update_columns?: Array<Cycle_Update_Column>;
  where?: InputMaybe<Cycle_Bool_Exp>;
};

/** Ordering options when selecting data from "cycle". */
export type Cycle_Order_By = {
  code?: InputMaybe<Order_By>;
  official?: InputMaybe<Order_By>;
  packs_aggregate?: InputMaybe<Pack_Aggregate_Order_By>;
  position?: InputMaybe<Order_By>;
  real_name?: InputMaybe<Order_By>;
  translations_aggregate?: InputMaybe<Cycle_Name_Aggregate_Order_By>;
};

/** primary key columns input for table: cycle */
export type Cycle_Pk_Columns_Input = {
  code: Scalars['String'];
};

/** select columns of table "cycle" */
export enum Cycle_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Official = 'official',
  /** column name */
  Position = 'position',
  /** column name */
  RealName = 'real_name'
}

/** input type for updating data in table "cycle" */
export type Cycle_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  official?: InputMaybe<Scalars['Boolean']>;
  position?: InputMaybe<Scalars['Int']>;
  real_name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Cycle_Stddev_Fields = {
  __typename?: 'cycle_stddev_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Cycle_Stddev_Pop_Fields = {
  __typename?: 'cycle_stddev_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Cycle_Stddev_Samp_Fields = {
  __typename?: 'cycle_stddev_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "cycle" */
export type Cycle_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cycle_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cycle_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']>;
  official?: InputMaybe<Scalars['Boolean']>;
  position?: InputMaybe<Scalars['Int']>;
  real_name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Cycle_Sum_Fields = {
  __typename?: 'cycle_sum_fields';
  position?: Maybe<Scalars['Int']>;
};

/** update columns of table "cycle" */
export enum Cycle_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Official = 'official',
  /** column name */
  Position = 'position',
  /** column name */
  RealName = 'real_name'
}

export type Cycle_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Cycle_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cycle_Set_Input>;
  where: Cycle_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Cycle_Var_Pop_Fields = {
  __typename?: 'cycle_var_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Cycle_Var_Samp_Fields = {
  __typename?: 'cycle_var_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Cycle_Variance_Fields = {
  __typename?: 'cycle_variance_fields';
  position?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "faction_name" */
export type Faction_Name = {
  __typename?: 'faction_name';
  code: Scalars['String'];
  locale: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "faction_name" */
export type Faction_Name_Aggregate = {
  __typename?: 'faction_name_aggregate';
  aggregate?: Maybe<Faction_Name_Aggregate_Fields>;
  nodes: Array<Faction_Name>;
};

/** aggregate fields of "faction_name" */
export type Faction_Name_Aggregate_Fields = {
  __typename?: 'faction_name_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Faction_Name_Max_Fields>;
  min?: Maybe<Faction_Name_Min_Fields>;
};


/** aggregate fields of "faction_name" */
export type Faction_Name_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Faction_Name_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "faction_name". All fields are combined with a logical 'AND'. */
export type Faction_Name_Bool_Exp = {
  _and?: InputMaybe<Array<Faction_Name_Bool_Exp>>;
  _not?: InputMaybe<Faction_Name_Bool_Exp>;
  _or?: InputMaybe<Array<Faction_Name_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "faction_name" */
export enum Faction_Name_Constraint {
  /** unique or primary key constraint on columns "code", "locale" */
  FactionNamePkey = 'faction_name_pkey'
}

/** input type for inserting data into table "faction_name" */
export type Faction_Name_Insert_Input = {
  code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Faction_Name_Max_Fields = {
  __typename?: 'faction_name_max_fields';
  code?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Faction_Name_Min_Fields = {
  __typename?: 'faction_name_min_fields';
  code?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "faction_name" */
export type Faction_Name_Mutation_Response = {
  __typename?: 'faction_name_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Faction_Name>;
};

/** on_conflict condition type for table "faction_name" */
export type Faction_Name_On_Conflict = {
  constraint: Faction_Name_Constraint;
  update_columns?: Array<Faction_Name_Update_Column>;
  where?: InputMaybe<Faction_Name_Bool_Exp>;
};

/** Ordering options when selecting data from "faction_name". */
export type Faction_Name_Order_By = {
  code?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: faction_name */
export type Faction_Name_Pk_Columns_Input = {
  code: Scalars['String'];
  locale: Scalars['String'];
};

/** select columns of table "faction_name" */
export enum Faction_Name_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "faction_name" */
export type Faction_Name_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "faction_name" */
export type Faction_Name_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Faction_Name_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Faction_Name_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "faction_name" */
export enum Faction_Name_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name'
}

export type Faction_Name_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Faction_Name_Set_Input>;
  where: Faction_Name_Bool_Exp;
};

/** columns and relationships of "faq" */
export type Faq = {
  __typename?: 'faq';
  code: Scalars['String'];
  /** An array relationship */
  faq_texts: Array<Faq_Text>;
  /** An aggregate relationship */
  faq_texts_aggregate: Faq_Text_Aggregate;
  text: Scalars['String'];
};


/** columns and relationships of "faq" */
export type FaqFaq_TextsArgs = {
  distinct_on?: InputMaybe<Array<Faq_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Faq_Text_Order_By>>;
  where?: InputMaybe<Faq_Text_Bool_Exp>;
};


/** columns and relationships of "faq" */
export type FaqFaq_Texts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Faq_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Faq_Text_Order_By>>;
  where?: InputMaybe<Faq_Text_Bool_Exp>;
};

/** aggregated selection of "faq" */
export type Faq_Aggregate = {
  __typename?: 'faq_aggregate';
  aggregate?: Maybe<Faq_Aggregate_Fields>;
  nodes: Array<Faq>;
};

/** aggregate fields of "faq" */
export type Faq_Aggregate_Fields = {
  __typename?: 'faq_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Faq_Max_Fields>;
  min?: Maybe<Faq_Min_Fields>;
};


/** aggregate fields of "faq" */
export type Faq_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Faq_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "faq". All fields are combined with a logical 'AND'. */
export type Faq_Bool_Exp = {
  _and?: InputMaybe<Array<Faq_Bool_Exp>>;
  _not?: InputMaybe<Faq_Bool_Exp>;
  _or?: InputMaybe<Array<Faq_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  faq_texts?: InputMaybe<Faq_Text_Bool_Exp>;
  faq_texts_aggregate?: InputMaybe<Faq_Text_Aggregate_Bool_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "faq" */
export enum Faq_Constraint {
  /** unique or primary key constraint on columns "code" */
  FaqPkey = 'faq_pkey'
}

/** input type for inserting data into table "faq" */
export type Faq_Insert_Input = {
  code?: InputMaybe<Scalars['String']>;
  faq_texts?: InputMaybe<Faq_Text_Arr_Rel_Insert_Input>;
  text?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Faq_Max_Fields = {
  __typename?: 'faq_max_fields';
  code?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Faq_Min_Fields = {
  __typename?: 'faq_min_fields';
  code?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "faq" */
export type Faq_Mutation_Response = {
  __typename?: 'faq_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Faq>;
};

/** on_conflict condition type for table "faq" */
export type Faq_On_Conflict = {
  constraint: Faq_Constraint;
  update_columns?: Array<Faq_Update_Column>;
  where?: InputMaybe<Faq_Bool_Exp>;
};

/** Ordering options when selecting data from "faq". */
export type Faq_Order_By = {
  code?: InputMaybe<Order_By>;
  faq_texts_aggregate?: InputMaybe<Faq_Text_Aggregate_Order_By>;
  text?: InputMaybe<Order_By>;
};

/** primary key columns input for table: faq */
export type Faq_Pk_Columns_Input = {
  code: Scalars['String'];
};

/** select columns of table "faq" */
export enum Faq_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Text = 'text'
}

/** input type for updating data in table "faq" */
export type Faq_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "faq" */
export type Faq_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Faq_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Faq_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "faq_text" */
export type Faq_Text = {
  __typename?: 'faq_text';
  code: Scalars['String'];
  locale: Scalars['String'];
  text: Scalars['String'];
};

/** aggregated selection of "faq_text" */
export type Faq_Text_Aggregate = {
  __typename?: 'faq_text_aggregate';
  aggregate?: Maybe<Faq_Text_Aggregate_Fields>;
  nodes: Array<Faq_Text>;
};

export type Faq_Text_Aggregate_Bool_Exp = {
  count?: InputMaybe<Faq_Text_Aggregate_Bool_Exp_Count>;
};

export type Faq_Text_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Faq_Text_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Faq_Text_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "faq_text" */
export type Faq_Text_Aggregate_Fields = {
  __typename?: 'faq_text_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Faq_Text_Max_Fields>;
  min?: Maybe<Faq_Text_Min_Fields>;
};


/** aggregate fields of "faq_text" */
export type Faq_Text_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Faq_Text_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "faq_text" */
export type Faq_Text_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Faq_Text_Max_Order_By>;
  min?: InputMaybe<Faq_Text_Min_Order_By>;
};

/** input type for inserting array relation for remote table "faq_text" */
export type Faq_Text_Arr_Rel_Insert_Input = {
  data: Array<Faq_Text_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Faq_Text_On_Conflict>;
};

/** Boolean expression to filter rows from the table "faq_text". All fields are combined with a logical 'AND'. */
export type Faq_Text_Bool_Exp = {
  _and?: InputMaybe<Array<Faq_Text_Bool_Exp>>;
  _not?: InputMaybe<Faq_Text_Bool_Exp>;
  _or?: InputMaybe<Array<Faq_Text_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "faq_text" */
export enum Faq_Text_Constraint {
  /** unique or primary key constraint on columns "code", "locale" */
  FaqTextPkey = 'faq_text_pkey'
}

/** input type for inserting data into table "faq_text" */
export type Faq_Text_Insert_Input = {
  code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Faq_Text_Max_Fields = {
  __typename?: 'faq_text_max_fields';
  code?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "faq_text" */
export type Faq_Text_Max_Order_By = {
  code?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Faq_Text_Min_Fields = {
  __typename?: 'faq_text_min_fields';
  code?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "faq_text" */
export type Faq_Text_Min_Order_By = {
  code?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "faq_text" */
export type Faq_Text_Mutation_Response = {
  __typename?: 'faq_text_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Faq_Text>;
};

/** on_conflict condition type for table "faq_text" */
export type Faq_Text_On_Conflict = {
  constraint: Faq_Text_Constraint;
  update_columns?: Array<Faq_Text_Update_Column>;
  where?: InputMaybe<Faq_Text_Bool_Exp>;
};

/** Ordering options when selecting data from "faq_text". */
export type Faq_Text_Order_By = {
  code?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** primary key columns input for table: faq_text */
export type Faq_Text_Pk_Columns_Input = {
  code: Scalars['String'];
  locale: Scalars['String'];
};

/** select columns of table "faq_text" */
export enum Faq_Text_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Locale = 'locale',
  /** column name */
  Text = 'text'
}

/** input type for updating data in table "faq_text" */
export type Faq_Text_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "faq_text" */
export type Faq_Text_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Faq_Text_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Faq_Text_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

/** update columns of table "faq_text" */
export enum Faq_Text_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Locale = 'locale',
  /** column name */
  Text = 'text'
}

export type Faq_Text_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Faq_Text_Set_Input>;
  where: Faq_Text_Bool_Exp;
};

/** update columns of table "faq" */
export enum Faq_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Text = 'text'
}

export type Faq_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Faq_Set_Input>;
  where: Faq_Bool_Exp;
};

/** columns and relationships of "friend_status" */
export type Friend_Status = {
  __typename?: 'friend_status';
  /** A computed field, executes function "friend_status_id" */
  id?: Maybe<Scalars['String']>;
  status: Friend_Status_Type_Enum;
  user_id_a: Scalars['String'];
  user_id_b: Scalars['String'];
};

/** aggregated selection of "friend_status" */
export type Friend_Status_Aggregate = {
  __typename?: 'friend_status_aggregate';
  aggregate?: Maybe<Friend_Status_Aggregate_Fields>;
  nodes: Array<Friend_Status>;
};

/** aggregate fields of "friend_status" */
export type Friend_Status_Aggregate_Fields = {
  __typename?: 'friend_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Friend_Status_Max_Fields>;
  min?: Maybe<Friend_Status_Min_Fields>;
};


/** aggregate fields of "friend_status" */
export type Friend_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Friend_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "friend_status". All fields are combined with a logical 'AND'. */
export type Friend_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Friend_Status_Bool_Exp>>;
  _not?: InputMaybe<Friend_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Friend_Status_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Friend_Status_Type_Enum_Comparison_Exp>;
  user_id_a?: InputMaybe<String_Comparison_Exp>;
  user_id_b?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "friend_status" */
export enum Friend_Status_Constraint {
  /** unique or primary key constraint on columns "user_id_a", "user_id_b" */
  FriendStatusPkey = 'friend_status_pkey'
}

/** input type for inserting data into table "friend_status" */
export type Friend_Status_Insert_Input = {
  status?: InputMaybe<Friend_Status_Type_Enum>;
  user_id_a?: InputMaybe<Scalars['String']>;
  user_id_b?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Friend_Status_Max_Fields = {
  __typename?: 'friend_status_max_fields';
  user_id_a?: Maybe<Scalars['String']>;
  user_id_b?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Friend_Status_Min_Fields = {
  __typename?: 'friend_status_min_fields';
  user_id_a?: Maybe<Scalars['String']>;
  user_id_b?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "friend_status" */
export type Friend_Status_Mutation_Response = {
  __typename?: 'friend_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Friend_Status>;
};

/** on_conflict condition type for table "friend_status" */
export type Friend_Status_On_Conflict = {
  constraint: Friend_Status_Constraint;
  update_columns?: Array<Friend_Status_Update_Column>;
  where?: InputMaybe<Friend_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "friend_status". */
export type Friend_Status_Order_By = {
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  user_id_a?: InputMaybe<Order_By>;
  user_id_b?: InputMaybe<Order_By>;
};

/** primary key columns input for table: friend_status */
export type Friend_Status_Pk_Columns_Input = {
  user_id_a: Scalars['String'];
  user_id_b: Scalars['String'];
};

/** select columns of table "friend_status" */
export enum Friend_Status_Select_Column {
  /** column name */
  Status = 'status',
  /** column name */
  UserIdA = 'user_id_a',
  /** column name */
  UserIdB = 'user_id_b'
}

/** input type for updating data in table "friend_status" */
export type Friend_Status_Set_Input = {
  status?: InputMaybe<Friend_Status_Type_Enum>;
  user_id_a?: InputMaybe<Scalars['String']>;
  user_id_b?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "friend_status" */
export type Friend_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Friend_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Friend_Status_Stream_Cursor_Value_Input = {
  status?: InputMaybe<Friend_Status_Type_Enum>;
  user_id_a?: InputMaybe<Scalars['String']>;
  user_id_b?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "friend_status_type" */
export type Friend_Status_Type = {
  __typename?: 'friend_status_type';
  value: Scalars['String'];
};

/** aggregated selection of "friend_status_type" */
export type Friend_Status_Type_Aggregate = {
  __typename?: 'friend_status_type_aggregate';
  aggregate?: Maybe<Friend_Status_Type_Aggregate_Fields>;
  nodes: Array<Friend_Status_Type>;
};

/** aggregate fields of "friend_status_type" */
export type Friend_Status_Type_Aggregate_Fields = {
  __typename?: 'friend_status_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Friend_Status_Type_Max_Fields>;
  min?: Maybe<Friend_Status_Type_Min_Fields>;
};


/** aggregate fields of "friend_status_type" */
export type Friend_Status_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Friend_Status_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "friend_status_type". All fields are combined with a logical 'AND'. */
export type Friend_Status_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Friend_Status_Type_Bool_Exp>>;
  _not?: InputMaybe<Friend_Status_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Friend_Status_Type_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "friend_status_type" */
export enum Friend_Status_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  FriendStatusTypePkey = 'friend_status_type_pkey'
}

export enum Friend_Status_Type_Enum {
  Friend = 'friend',
  None = 'none',
  Received = 'received',
  Sent = 'sent'
}

/** Boolean expression to compare columns of type "friend_status_type_enum". All fields are combined with logical 'AND'. */
export type Friend_Status_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Friend_Status_Type_Enum>;
  _in?: InputMaybe<Array<Friend_Status_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Friend_Status_Type_Enum>;
  _nin?: InputMaybe<Array<Friend_Status_Type_Enum>>;
};

/** input type for inserting data into table "friend_status_type" */
export type Friend_Status_Type_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Friend_Status_Type_Max_Fields = {
  __typename?: 'friend_status_type_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Friend_Status_Type_Min_Fields = {
  __typename?: 'friend_status_type_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "friend_status_type" */
export type Friend_Status_Type_Mutation_Response = {
  __typename?: 'friend_status_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Friend_Status_Type>;
};

/** on_conflict condition type for table "friend_status_type" */
export type Friend_Status_Type_On_Conflict = {
  constraint: Friend_Status_Type_Constraint;
  update_columns?: Array<Friend_Status_Type_Update_Column>;
  where?: InputMaybe<Friend_Status_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "friend_status_type". */
export type Friend_Status_Type_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: friend_status_type */
export type Friend_Status_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "friend_status_type" */
export enum Friend_Status_Type_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "friend_status_type" */
export type Friend_Status_Type_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "friend_status_type" */
export type Friend_Status_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Friend_Status_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Friend_Status_Type_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "friend_status_type" */
export enum Friend_Status_Type_Update_Column {
  /** column name */
  Value = 'value'
}

export type Friend_Status_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Friend_Status_Type_Set_Input>;
  where: Friend_Status_Type_Bool_Exp;
};

/** update columns of table "friend_status" */
export enum Friend_Status_Update_Column {
  /** column name */
  Status = 'status',
  /** column name */
  UserIdA = 'user_id_a',
  /** column name */
  UserIdB = 'user_id_b'
}

export type Friend_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Friend_Status_Set_Input>;
  where: Friend_Status_Bool_Exp;
};

/** columns and relationships of "full_card" */
export type Full_Card = {
  __typename?: 'full_card';
  alternate_required_code?: Maybe<Scalars['String']>;
  back_link?: Maybe<Scalars['String']>;
  backimagesrc?: Maybe<Scalars['String']>;
  clues?: Maybe<Scalars['Int']>;
  clues_fixed?: Maybe<Scalars['Boolean']>;
  code: Scalars['String'];
  cost?: Maybe<Scalars['Int']>;
  deck_limit?: Maybe<Scalars['Int']>;
  deck_options?: Maybe<Scalars['jsonb']>;
  deck_requirements?: Maybe<Scalars['jsonb']>;
  doom?: Maybe<Scalars['Int']>;
  double_sided?: Maybe<Scalars['Boolean']>;
  encounter_code?: Maybe<Scalars['String']>;
  encounter_position?: Maybe<Scalars['Int']>;
  /** An array relationship */
  encounter_sets: Array<Card_Encounter_Set>;
  /** An aggregate relationship */
  encounter_sets_aggregate: Card_Encounter_Set_Aggregate;
  enemy_damage?: Maybe<Scalars['Int']>;
  enemy_evade?: Maybe<Scalars['Int']>;
  enemy_fight?: Maybe<Scalars['Int']>;
  enemy_horror?: Maybe<Scalars['Int']>;
  exceptional?: Maybe<Scalars['Boolean']>;
  exile?: Maybe<Scalars['Boolean']>;
  faction2_code?: Maybe<Scalars['String']>;
  faction3_code?: Maybe<Scalars['String']>;
  faction_code: Scalars['String'];
  health?: Maybe<Scalars['Int']>;
  health_per_investigator?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  illustrator?: Maybe<Scalars['String']>;
  imagesrc?: Maybe<Scalars['String']>;
  is_unique?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  linked_card?: Maybe<Full_Card>;
  myriad?: Maybe<Scalars['Boolean']>;
  pack_code: Scalars['String'];
  pack_position: Scalars['Int'];
  /** An array relationship */
  packs: Array<Card_Pack>;
  /** An aggregate relationship */
  packs_aggregate: Card_Pack_Aggregate;
  permanent?: Maybe<Scalars['Boolean']>;
  position: Scalars['Int'];
  quantity: Scalars['Int'];
  real_back_flavor?: Maybe<Scalars['String']>;
  real_back_name?: Maybe<Scalars['String']>;
  real_back_text?: Maybe<Scalars['String']>;
  real_encounter_set_name?: Maybe<Scalars['String']>;
  real_flavor?: Maybe<Scalars['String']>;
  real_name: Scalars['String'];
  real_pack_name: Scalars['String'];
  real_slot?: Maybe<Scalars['String']>;
  real_subname?: Maybe<Scalars['String']>;
  real_text?: Maybe<Scalars['String']>;
  real_traits?: Maybe<Scalars['String']>;
  restrictions?: Maybe<Scalars['jsonb']>;
  sanity?: Maybe<Scalars['Int']>;
  shroud?: Maybe<Scalars['Int']>;
  skill_agility?: Maybe<Scalars['Int']>;
  skill_combat?: Maybe<Scalars['Int']>;
  skill_intellect?: Maybe<Scalars['Int']>;
  skill_wild?: Maybe<Scalars['Int']>;
  skill_willpower?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['Int']>;
  subtype_code?: Maybe<Scalars['String']>;
  /** An array relationship */
  translations: Array<Full_Card_Text>;
  /** An aggregate relationship */
  translations_aggregate: Full_Card_Text_Aggregate;
  type_code: Card_Type_Code_Enum;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vengeance?: Maybe<Scalars['Int']>;
  version: Scalars['Int'];
  victory?: Maybe<Scalars['Int']>;
  xp?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "full_card" */
export type Full_CardDeck_OptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "full_card" */
export type Full_CardDeck_RequirementsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "full_card" */
export type Full_CardEncounter_SetsArgs = {
  distinct_on?: InputMaybe<Array<Card_Encounter_Set_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Encounter_Set_Order_By>>;
  where?: InputMaybe<Card_Encounter_Set_Bool_Exp>;
};


/** columns and relationships of "full_card" */
export type Full_CardEncounter_Sets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Card_Encounter_Set_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Encounter_Set_Order_By>>;
  where?: InputMaybe<Card_Encounter_Set_Bool_Exp>;
};


/** columns and relationships of "full_card" */
export type Full_CardPacksArgs = {
  distinct_on?: InputMaybe<Array<Card_Pack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Pack_Order_By>>;
  where?: InputMaybe<Card_Pack_Bool_Exp>;
};


/** columns and relationships of "full_card" */
export type Full_CardPacks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Card_Pack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Pack_Order_By>>;
  where?: InputMaybe<Card_Pack_Bool_Exp>;
};


/** columns and relationships of "full_card" */
export type Full_CardRestrictionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "full_card" */
export type Full_CardTranslationsArgs = {
  distinct_on?: InputMaybe<Array<Full_Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Card_Text_Order_By>>;
  where?: InputMaybe<Full_Card_Text_Bool_Exp>;
};


/** columns and relationships of "full_card" */
export type Full_CardTranslations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Full_Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Card_Text_Order_By>>;
  where?: InputMaybe<Full_Card_Text_Bool_Exp>;
};

/** aggregated selection of "full_card" */
export type Full_Card_Aggregate = {
  __typename?: 'full_card_aggregate';
  aggregate?: Maybe<Full_Card_Aggregate_Fields>;
  nodes: Array<Full_Card>;
};

/** aggregate fields of "full_card" */
export type Full_Card_Aggregate_Fields = {
  __typename?: 'full_card_aggregate_fields';
  avg?: Maybe<Full_Card_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Full_Card_Max_Fields>;
  min?: Maybe<Full_Card_Min_Fields>;
  stddev?: Maybe<Full_Card_Stddev_Fields>;
  stddev_pop?: Maybe<Full_Card_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Full_Card_Stddev_Samp_Fields>;
  sum?: Maybe<Full_Card_Sum_Fields>;
  var_pop?: Maybe<Full_Card_Var_Pop_Fields>;
  var_samp?: Maybe<Full_Card_Var_Samp_Fields>;
  variance?: Maybe<Full_Card_Variance_Fields>;
};


/** aggregate fields of "full_card" */
export type Full_Card_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Full_Card_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Full_Card_Append_Input = {
  deck_options?: InputMaybe<Scalars['jsonb']>;
  deck_requirements?: InputMaybe<Scalars['jsonb']>;
  restrictions?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Full_Card_Avg_Fields = {
  __typename?: 'full_card_avg_fields';
  clues?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  deck_limit?: Maybe<Scalars['Float']>;
  doom?: Maybe<Scalars['Float']>;
  encounter_position?: Maybe<Scalars['Float']>;
  enemy_damage?: Maybe<Scalars['Float']>;
  enemy_evade?: Maybe<Scalars['Float']>;
  enemy_fight?: Maybe<Scalars['Float']>;
  enemy_horror?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  pack_position?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sanity?: Maybe<Scalars['Float']>;
  shroud?: Maybe<Scalars['Float']>;
  skill_agility?: Maybe<Scalars['Float']>;
  skill_combat?: Maybe<Scalars['Float']>;
  skill_intellect?: Maybe<Scalars['Float']>;
  skill_wild?: Maybe<Scalars['Float']>;
  skill_willpower?: Maybe<Scalars['Float']>;
  stage?: Maybe<Scalars['Float']>;
  vengeance?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
  victory?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "full_card". All fields are combined with a logical 'AND'. */
export type Full_Card_Bool_Exp = {
  _and?: InputMaybe<Array<Full_Card_Bool_Exp>>;
  _not?: InputMaybe<Full_Card_Bool_Exp>;
  _or?: InputMaybe<Array<Full_Card_Bool_Exp>>;
  alternate_required_code?: InputMaybe<String_Comparison_Exp>;
  back_link?: InputMaybe<String_Comparison_Exp>;
  backimagesrc?: InputMaybe<String_Comparison_Exp>;
  clues?: InputMaybe<Int_Comparison_Exp>;
  clues_fixed?: InputMaybe<Boolean_Comparison_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  cost?: InputMaybe<Int_Comparison_Exp>;
  deck_limit?: InputMaybe<Int_Comparison_Exp>;
  deck_options?: InputMaybe<Jsonb_Comparison_Exp>;
  deck_requirements?: InputMaybe<Jsonb_Comparison_Exp>;
  doom?: InputMaybe<Int_Comparison_Exp>;
  double_sided?: InputMaybe<Boolean_Comparison_Exp>;
  encounter_code?: InputMaybe<String_Comparison_Exp>;
  encounter_position?: InputMaybe<Int_Comparison_Exp>;
  encounter_sets?: InputMaybe<Card_Encounter_Set_Bool_Exp>;
  encounter_sets_aggregate?: InputMaybe<Card_Encounter_Set_Aggregate_Bool_Exp>;
  enemy_damage?: InputMaybe<Int_Comparison_Exp>;
  enemy_evade?: InputMaybe<Int_Comparison_Exp>;
  enemy_fight?: InputMaybe<Int_Comparison_Exp>;
  enemy_horror?: InputMaybe<Int_Comparison_Exp>;
  exceptional?: InputMaybe<Boolean_Comparison_Exp>;
  exile?: InputMaybe<Boolean_Comparison_Exp>;
  faction2_code?: InputMaybe<String_Comparison_Exp>;
  faction3_code?: InputMaybe<String_Comparison_Exp>;
  faction_code?: InputMaybe<String_Comparison_Exp>;
  health?: InputMaybe<Int_Comparison_Exp>;
  health_per_investigator?: InputMaybe<Boolean_Comparison_Exp>;
  hidden?: InputMaybe<Boolean_Comparison_Exp>;
  illustrator?: InputMaybe<String_Comparison_Exp>;
  imagesrc?: InputMaybe<String_Comparison_Exp>;
  is_unique?: InputMaybe<Boolean_Comparison_Exp>;
  linked_card?: InputMaybe<Full_Card_Bool_Exp>;
  myriad?: InputMaybe<Boolean_Comparison_Exp>;
  pack_code?: InputMaybe<String_Comparison_Exp>;
  pack_position?: InputMaybe<Int_Comparison_Exp>;
  packs?: InputMaybe<Card_Pack_Bool_Exp>;
  packs_aggregate?: InputMaybe<Card_Pack_Aggregate_Bool_Exp>;
  permanent?: InputMaybe<Boolean_Comparison_Exp>;
  position?: InputMaybe<Int_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  real_back_flavor?: InputMaybe<String_Comparison_Exp>;
  real_back_name?: InputMaybe<String_Comparison_Exp>;
  real_back_text?: InputMaybe<String_Comparison_Exp>;
  real_encounter_set_name?: InputMaybe<String_Comparison_Exp>;
  real_flavor?: InputMaybe<String_Comparison_Exp>;
  real_name?: InputMaybe<String_Comparison_Exp>;
  real_pack_name?: InputMaybe<String_Comparison_Exp>;
  real_slot?: InputMaybe<String_Comparison_Exp>;
  real_subname?: InputMaybe<String_Comparison_Exp>;
  real_text?: InputMaybe<String_Comparison_Exp>;
  real_traits?: InputMaybe<String_Comparison_Exp>;
  restrictions?: InputMaybe<Jsonb_Comparison_Exp>;
  sanity?: InputMaybe<Int_Comparison_Exp>;
  shroud?: InputMaybe<Int_Comparison_Exp>;
  skill_agility?: InputMaybe<Int_Comparison_Exp>;
  skill_combat?: InputMaybe<Int_Comparison_Exp>;
  skill_intellect?: InputMaybe<Int_Comparison_Exp>;
  skill_wild?: InputMaybe<Int_Comparison_Exp>;
  skill_willpower?: InputMaybe<Int_Comparison_Exp>;
  stage?: InputMaybe<Int_Comparison_Exp>;
  subtype_code?: InputMaybe<String_Comparison_Exp>;
  translations?: InputMaybe<Full_Card_Text_Bool_Exp>;
  translations_aggregate?: InputMaybe<Full_Card_Text_Aggregate_Bool_Exp>;
  type_code?: InputMaybe<Card_Type_Code_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vengeance?: InputMaybe<Int_Comparison_Exp>;
  version?: InputMaybe<Int_Comparison_Exp>;
  victory?: InputMaybe<Int_Comparison_Exp>;
  xp?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "full_card" */
export enum Full_Card_Constraint {
  /** unique or primary key constraint on columns "code" */
  FullCardPkey = 'full_card_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Full_Card_Delete_At_Path_Input = {
  deck_options?: InputMaybe<Array<Scalars['String']>>;
  deck_requirements?: InputMaybe<Array<Scalars['String']>>;
  restrictions?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Full_Card_Delete_Elem_Input = {
  deck_options?: InputMaybe<Scalars['Int']>;
  deck_requirements?: InputMaybe<Scalars['Int']>;
  restrictions?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Full_Card_Delete_Key_Input = {
  deck_options?: InputMaybe<Scalars['String']>;
  deck_requirements?: InputMaybe<Scalars['String']>;
  restrictions?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "full_card" */
export type Full_Card_Inc_Input = {
  clues?: InputMaybe<Scalars['Int']>;
  cost?: InputMaybe<Scalars['Int']>;
  deck_limit?: InputMaybe<Scalars['Int']>;
  doom?: InputMaybe<Scalars['Int']>;
  encounter_position?: InputMaybe<Scalars['Int']>;
  enemy_damage?: InputMaybe<Scalars['Int']>;
  enemy_evade?: InputMaybe<Scalars['Int']>;
  enemy_fight?: InputMaybe<Scalars['Int']>;
  enemy_horror?: InputMaybe<Scalars['Int']>;
  health?: InputMaybe<Scalars['Int']>;
  pack_position?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  sanity?: InputMaybe<Scalars['Int']>;
  shroud?: InputMaybe<Scalars['Int']>;
  skill_agility?: InputMaybe<Scalars['Int']>;
  skill_combat?: InputMaybe<Scalars['Int']>;
  skill_intellect?: InputMaybe<Scalars['Int']>;
  skill_wild?: InputMaybe<Scalars['Int']>;
  skill_willpower?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Scalars['Int']>;
  vengeance?: InputMaybe<Scalars['Int']>;
  version?: InputMaybe<Scalars['Int']>;
  victory?: InputMaybe<Scalars['Int']>;
  xp?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "full_card" */
export type Full_Card_Insert_Input = {
  alternate_required_code?: InputMaybe<Scalars['String']>;
  back_link?: InputMaybe<Scalars['String']>;
  backimagesrc?: InputMaybe<Scalars['String']>;
  clues?: InputMaybe<Scalars['Int']>;
  clues_fixed?: InputMaybe<Scalars['Boolean']>;
  code?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<Scalars['Int']>;
  deck_limit?: InputMaybe<Scalars['Int']>;
  deck_options?: InputMaybe<Scalars['jsonb']>;
  deck_requirements?: InputMaybe<Scalars['jsonb']>;
  doom?: InputMaybe<Scalars['Int']>;
  double_sided?: InputMaybe<Scalars['Boolean']>;
  encounter_code?: InputMaybe<Scalars['String']>;
  encounter_position?: InputMaybe<Scalars['Int']>;
  encounter_sets?: InputMaybe<Card_Encounter_Set_Arr_Rel_Insert_Input>;
  enemy_damage?: InputMaybe<Scalars['Int']>;
  enemy_evade?: InputMaybe<Scalars['Int']>;
  enemy_fight?: InputMaybe<Scalars['Int']>;
  enemy_horror?: InputMaybe<Scalars['Int']>;
  exceptional?: InputMaybe<Scalars['Boolean']>;
  exile?: InputMaybe<Scalars['Boolean']>;
  faction2_code?: InputMaybe<Scalars['String']>;
  faction3_code?: InputMaybe<Scalars['String']>;
  faction_code?: InputMaybe<Scalars['String']>;
  health?: InputMaybe<Scalars['Int']>;
  health_per_investigator?: InputMaybe<Scalars['Boolean']>;
  hidden?: InputMaybe<Scalars['Boolean']>;
  illustrator?: InputMaybe<Scalars['String']>;
  imagesrc?: InputMaybe<Scalars['String']>;
  is_unique?: InputMaybe<Scalars['Boolean']>;
  linked_card?: InputMaybe<Full_Card_Obj_Rel_Insert_Input>;
  myriad?: InputMaybe<Scalars['Boolean']>;
  pack_code?: InputMaybe<Scalars['String']>;
  pack_position?: InputMaybe<Scalars['Int']>;
  packs?: InputMaybe<Card_Pack_Arr_Rel_Insert_Input>;
  permanent?: InputMaybe<Scalars['Boolean']>;
  position?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  real_back_flavor?: InputMaybe<Scalars['String']>;
  real_back_name?: InputMaybe<Scalars['String']>;
  real_back_text?: InputMaybe<Scalars['String']>;
  real_encounter_set_name?: InputMaybe<Scalars['String']>;
  real_flavor?: InputMaybe<Scalars['String']>;
  real_name?: InputMaybe<Scalars['String']>;
  real_pack_name?: InputMaybe<Scalars['String']>;
  real_slot?: InputMaybe<Scalars['String']>;
  real_subname?: InputMaybe<Scalars['String']>;
  real_text?: InputMaybe<Scalars['String']>;
  real_traits?: InputMaybe<Scalars['String']>;
  restrictions?: InputMaybe<Scalars['jsonb']>;
  sanity?: InputMaybe<Scalars['Int']>;
  shroud?: InputMaybe<Scalars['Int']>;
  skill_agility?: InputMaybe<Scalars['Int']>;
  skill_combat?: InputMaybe<Scalars['Int']>;
  skill_intellect?: InputMaybe<Scalars['Int']>;
  skill_wild?: InputMaybe<Scalars['Int']>;
  skill_willpower?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Scalars['Int']>;
  subtype_code?: InputMaybe<Scalars['String']>;
  translations?: InputMaybe<Full_Card_Text_Arr_Rel_Insert_Input>;
  type_code?: InputMaybe<Card_Type_Code_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  vengeance?: InputMaybe<Scalars['Int']>;
  version?: InputMaybe<Scalars['Int']>;
  victory?: InputMaybe<Scalars['Int']>;
  xp?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Full_Card_Max_Fields = {
  __typename?: 'full_card_max_fields';
  alternate_required_code?: Maybe<Scalars['String']>;
  back_link?: Maybe<Scalars['String']>;
  backimagesrc?: Maybe<Scalars['String']>;
  clues?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Int']>;
  deck_limit?: Maybe<Scalars['Int']>;
  doom?: Maybe<Scalars['Int']>;
  encounter_code?: Maybe<Scalars['String']>;
  encounter_position?: Maybe<Scalars['Int']>;
  enemy_damage?: Maybe<Scalars['Int']>;
  enemy_evade?: Maybe<Scalars['Int']>;
  enemy_fight?: Maybe<Scalars['Int']>;
  enemy_horror?: Maybe<Scalars['Int']>;
  faction2_code?: Maybe<Scalars['String']>;
  faction3_code?: Maybe<Scalars['String']>;
  faction_code?: Maybe<Scalars['String']>;
  health?: Maybe<Scalars['Int']>;
  illustrator?: Maybe<Scalars['String']>;
  imagesrc?: Maybe<Scalars['String']>;
  pack_code?: Maybe<Scalars['String']>;
  pack_position?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  real_back_flavor?: Maybe<Scalars['String']>;
  real_back_name?: Maybe<Scalars['String']>;
  real_back_text?: Maybe<Scalars['String']>;
  real_encounter_set_name?: Maybe<Scalars['String']>;
  real_flavor?: Maybe<Scalars['String']>;
  real_name?: Maybe<Scalars['String']>;
  real_pack_name?: Maybe<Scalars['String']>;
  real_slot?: Maybe<Scalars['String']>;
  real_subname?: Maybe<Scalars['String']>;
  real_text?: Maybe<Scalars['String']>;
  real_traits?: Maybe<Scalars['String']>;
  sanity?: Maybe<Scalars['Int']>;
  shroud?: Maybe<Scalars['Int']>;
  skill_agility?: Maybe<Scalars['Int']>;
  skill_combat?: Maybe<Scalars['Int']>;
  skill_intellect?: Maybe<Scalars['Int']>;
  skill_wild?: Maybe<Scalars['Int']>;
  skill_willpower?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['Int']>;
  subtype_code?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vengeance?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['Int']>;
  victory?: Maybe<Scalars['Int']>;
  xp?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Full_Card_Min_Fields = {
  __typename?: 'full_card_min_fields';
  alternate_required_code?: Maybe<Scalars['String']>;
  back_link?: Maybe<Scalars['String']>;
  backimagesrc?: Maybe<Scalars['String']>;
  clues?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Int']>;
  deck_limit?: Maybe<Scalars['Int']>;
  doom?: Maybe<Scalars['Int']>;
  encounter_code?: Maybe<Scalars['String']>;
  encounter_position?: Maybe<Scalars['Int']>;
  enemy_damage?: Maybe<Scalars['Int']>;
  enemy_evade?: Maybe<Scalars['Int']>;
  enemy_fight?: Maybe<Scalars['Int']>;
  enemy_horror?: Maybe<Scalars['Int']>;
  faction2_code?: Maybe<Scalars['String']>;
  faction3_code?: Maybe<Scalars['String']>;
  faction_code?: Maybe<Scalars['String']>;
  health?: Maybe<Scalars['Int']>;
  illustrator?: Maybe<Scalars['String']>;
  imagesrc?: Maybe<Scalars['String']>;
  pack_code?: Maybe<Scalars['String']>;
  pack_position?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  real_back_flavor?: Maybe<Scalars['String']>;
  real_back_name?: Maybe<Scalars['String']>;
  real_back_text?: Maybe<Scalars['String']>;
  real_encounter_set_name?: Maybe<Scalars['String']>;
  real_flavor?: Maybe<Scalars['String']>;
  real_name?: Maybe<Scalars['String']>;
  real_pack_name?: Maybe<Scalars['String']>;
  real_slot?: Maybe<Scalars['String']>;
  real_subname?: Maybe<Scalars['String']>;
  real_text?: Maybe<Scalars['String']>;
  real_traits?: Maybe<Scalars['String']>;
  sanity?: Maybe<Scalars['Int']>;
  shroud?: Maybe<Scalars['Int']>;
  skill_agility?: Maybe<Scalars['Int']>;
  skill_combat?: Maybe<Scalars['Int']>;
  skill_intellect?: Maybe<Scalars['Int']>;
  skill_wild?: Maybe<Scalars['Int']>;
  skill_willpower?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['Int']>;
  subtype_code?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vengeance?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['Int']>;
  victory?: Maybe<Scalars['Int']>;
  xp?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "full_card" */
export type Full_Card_Mutation_Response = {
  __typename?: 'full_card_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Full_Card>;
};

/** input type for inserting object relation for remote table "full_card" */
export type Full_Card_Obj_Rel_Insert_Input = {
  data: Full_Card_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Full_Card_On_Conflict>;
};

/** on_conflict condition type for table "full_card" */
export type Full_Card_On_Conflict = {
  constraint: Full_Card_Constraint;
  update_columns?: Array<Full_Card_Update_Column>;
  where?: InputMaybe<Full_Card_Bool_Exp>;
};

/** Ordering options when selecting data from "full_card". */
export type Full_Card_Order_By = {
  alternate_required_code?: InputMaybe<Order_By>;
  back_link?: InputMaybe<Order_By>;
  backimagesrc?: InputMaybe<Order_By>;
  clues?: InputMaybe<Order_By>;
  clues_fixed?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  deck_limit?: InputMaybe<Order_By>;
  deck_options?: InputMaybe<Order_By>;
  deck_requirements?: InputMaybe<Order_By>;
  doom?: InputMaybe<Order_By>;
  double_sided?: InputMaybe<Order_By>;
  encounter_code?: InputMaybe<Order_By>;
  encounter_position?: InputMaybe<Order_By>;
  encounter_sets_aggregate?: InputMaybe<Card_Encounter_Set_Aggregate_Order_By>;
  enemy_damage?: InputMaybe<Order_By>;
  enemy_evade?: InputMaybe<Order_By>;
  enemy_fight?: InputMaybe<Order_By>;
  enemy_horror?: InputMaybe<Order_By>;
  exceptional?: InputMaybe<Order_By>;
  exile?: InputMaybe<Order_By>;
  faction2_code?: InputMaybe<Order_By>;
  faction3_code?: InputMaybe<Order_By>;
  faction_code?: InputMaybe<Order_By>;
  health?: InputMaybe<Order_By>;
  health_per_investigator?: InputMaybe<Order_By>;
  hidden?: InputMaybe<Order_By>;
  illustrator?: InputMaybe<Order_By>;
  imagesrc?: InputMaybe<Order_By>;
  is_unique?: InputMaybe<Order_By>;
  linked_card?: InputMaybe<Full_Card_Order_By>;
  myriad?: InputMaybe<Order_By>;
  pack_code?: InputMaybe<Order_By>;
  pack_position?: InputMaybe<Order_By>;
  packs_aggregate?: InputMaybe<Card_Pack_Aggregate_Order_By>;
  permanent?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  real_back_flavor?: InputMaybe<Order_By>;
  real_back_name?: InputMaybe<Order_By>;
  real_back_text?: InputMaybe<Order_By>;
  real_encounter_set_name?: InputMaybe<Order_By>;
  real_flavor?: InputMaybe<Order_By>;
  real_name?: InputMaybe<Order_By>;
  real_pack_name?: InputMaybe<Order_By>;
  real_slot?: InputMaybe<Order_By>;
  real_subname?: InputMaybe<Order_By>;
  real_text?: InputMaybe<Order_By>;
  real_traits?: InputMaybe<Order_By>;
  restrictions?: InputMaybe<Order_By>;
  sanity?: InputMaybe<Order_By>;
  shroud?: InputMaybe<Order_By>;
  skill_agility?: InputMaybe<Order_By>;
  skill_combat?: InputMaybe<Order_By>;
  skill_intellect?: InputMaybe<Order_By>;
  skill_wild?: InputMaybe<Order_By>;
  skill_willpower?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
  subtype_code?: InputMaybe<Order_By>;
  translations_aggregate?: InputMaybe<Full_Card_Text_Aggregate_Order_By>;
  type_code?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vengeance?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
  victory?: InputMaybe<Order_By>;
  xp?: InputMaybe<Order_By>;
};

/** primary key columns input for table: full_card */
export type Full_Card_Pk_Columns_Input = {
  code: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Full_Card_Prepend_Input = {
  deck_options?: InputMaybe<Scalars['jsonb']>;
  deck_requirements?: InputMaybe<Scalars['jsonb']>;
  restrictions?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "full_card" */
export enum Full_Card_Select_Column {
  /** column name */
  AlternateRequiredCode = 'alternate_required_code',
  /** column name */
  BackLink = 'back_link',
  /** column name */
  Backimagesrc = 'backimagesrc',
  /** column name */
  Clues = 'clues',
  /** column name */
  CluesFixed = 'clues_fixed',
  /** column name */
  Code = 'code',
  /** column name */
  Cost = 'cost',
  /** column name */
  DeckLimit = 'deck_limit',
  /** column name */
  DeckOptions = 'deck_options',
  /** column name */
  DeckRequirements = 'deck_requirements',
  /** column name */
  Doom = 'doom',
  /** column name */
  DoubleSided = 'double_sided',
  /** column name */
  EncounterCode = 'encounter_code',
  /** column name */
  EncounterPosition = 'encounter_position',
  /** column name */
  EnemyDamage = 'enemy_damage',
  /** column name */
  EnemyEvade = 'enemy_evade',
  /** column name */
  EnemyFight = 'enemy_fight',
  /** column name */
  EnemyHorror = 'enemy_horror',
  /** column name */
  Exceptional = 'exceptional',
  /** column name */
  Exile = 'exile',
  /** column name */
  Faction2Code = 'faction2_code',
  /** column name */
  Faction3Code = 'faction3_code',
  /** column name */
  FactionCode = 'faction_code',
  /** column name */
  Health = 'health',
  /** column name */
  HealthPerInvestigator = 'health_per_investigator',
  /** column name */
  Hidden = 'hidden',
  /** column name */
  Illustrator = 'illustrator',
  /** column name */
  Imagesrc = 'imagesrc',
  /** column name */
  IsUnique = 'is_unique',
  /** column name */
  Myriad = 'myriad',
  /** column name */
  PackCode = 'pack_code',
  /** column name */
  PackPosition = 'pack_position',
  /** column name */
  Permanent = 'permanent',
  /** column name */
  Position = 'position',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  RealBackFlavor = 'real_back_flavor',
  /** column name */
  RealBackName = 'real_back_name',
  /** column name */
  RealBackText = 'real_back_text',
  /** column name */
  RealEncounterSetName = 'real_encounter_set_name',
  /** column name */
  RealFlavor = 'real_flavor',
  /** column name */
  RealName = 'real_name',
  /** column name */
  RealPackName = 'real_pack_name',
  /** column name */
  RealSlot = 'real_slot',
  /** column name */
  RealSubname = 'real_subname',
  /** column name */
  RealText = 'real_text',
  /** column name */
  RealTraits = 'real_traits',
  /** column name */
  Restrictions = 'restrictions',
  /** column name */
  Sanity = 'sanity',
  /** column name */
  Shroud = 'shroud',
  /** column name */
  SkillAgility = 'skill_agility',
  /** column name */
  SkillCombat = 'skill_combat',
  /** column name */
  SkillIntellect = 'skill_intellect',
  /** column name */
  SkillWild = 'skill_wild',
  /** column name */
  SkillWillpower = 'skill_willpower',
  /** column name */
  Stage = 'stage',
  /** column name */
  SubtypeCode = 'subtype_code',
  /** column name */
  TypeCode = 'type_code',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Vengeance = 'vengeance',
  /** column name */
  Version = 'version',
  /** column name */
  Victory = 'victory',
  /** column name */
  Xp = 'xp'
}

/** input type for updating data in table "full_card" */
export type Full_Card_Set_Input = {
  alternate_required_code?: InputMaybe<Scalars['String']>;
  back_link?: InputMaybe<Scalars['String']>;
  backimagesrc?: InputMaybe<Scalars['String']>;
  clues?: InputMaybe<Scalars['Int']>;
  clues_fixed?: InputMaybe<Scalars['Boolean']>;
  code?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<Scalars['Int']>;
  deck_limit?: InputMaybe<Scalars['Int']>;
  deck_options?: InputMaybe<Scalars['jsonb']>;
  deck_requirements?: InputMaybe<Scalars['jsonb']>;
  doom?: InputMaybe<Scalars['Int']>;
  double_sided?: InputMaybe<Scalars['Boolean']>;
  encounter_code?: InputMaybe<Scalars['String']>;
  encounter_position?: InputMaybe<Scalars['Int']>;
  enemy_damage?: InputMaybe<Scalars['Int']>;
  enemy_evade?: InputMaybe<Scalars['Int']>;
  enemy_fight?: InputMaybe<Scalars['Int']>;
  enemy_horror?: InputMaybe<Scalars['Int']>;
  exceptional?: InputMaybe<Scalars['Boolean']>;
  exile?: InputMaybe<Scalars['Boolean']>;
  faction2_code?: InputMaybe<Scalars['String']>;
  faction3_code?: InputMaybe<Scalars['String']>;
  faction_code?: InputMaybe<Scalars['String']>;
  health?: InputMaybe<Scalars['Int']>;
  health_per_investigator?: InputMaybe<Scalars['Boolean']>;
  hidden?: InputMaybe<Scalars['Boolean']>;
  illustrator?: InputMaybe<Scalars['String']>;
  imagesrc?: InputMaybe<Scalars['String']>;
  is_unique?: InputMaybe<Scalars['Boolean']>;
  myriad?: InputMaybe<Scalars['Boolean']>;
  pack_code?: InputMaybe<Scalars['String']>;
  pack_position?: InputMaybe<Scalars['Int']>;
  permanent?: InputMaybe<Scalars['Boolean']>;
  position?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  real_back_flavor?: InputMaybe<Scalars['String']>;
  real_back_name?: InputMaybe<Scalars['String']>;
  real_back_text?: InputMaybe<Scalars['String']>;
  real_encounter_set_name?: InputMaybe<Scalars['String']>;
  real_flavor?: InputMaybe<Scalars['String']>;
  real_name?: InputMaybe<Scalars['String']>;
  real_pack_name?: InputMaybe<Scalars['String']>;
  real_slot?: InputMaybe<Scalars['String']>;
  real_subname?: InputMaybe<Scalars['String']>;
  real_text?: InputMaybe<Scalars['String']>;
  real_traits?: InputMaybe<Scalars['String']>;
  restrictions?: InputMaybe<Scalars['jsonb']>;
  sanity?: InputMaybe<Scalars['Int']>;
  shroud?: InputMaybe<Scalars['Int']>;
  skill_agility?: InputMaybe<Scalars['Int']>;
  skill_combat?: InputMaybe<Scalars['Int']>;
  skill_intellect?: InputMaybe<Scalars['Int']>;
  skill_wild?: InputMaybe<Scalars['Int']>;
  skill_willpower?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Scalars['Int']>;
  subtype_code?: InputMaybe<Scalars['String']>;
  type_code?: InputMaybe<Card_Type_Code_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  vengeance?: InputMaybe<Scalars['Int']>;
  version?: InputMaybe<Scalars['Int']>;
  victory?: InputMaybe<Scalars['Int']>;
  xp?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Full_Card_Stddev_Fields = {
  __typename?: 'full_card_stddev_fields';
  clues?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  deck_limit?: Maybe<Scalars['Float']>;
  doom?: Maybe<Scalars['Float']>;
  encounter_position?: Maybe<Scalars['Float']>;
  enemy_damage?: Maybe<Scalars['Float']>;
  enemy_evade?: Maybe<Scalars['Float']>;
  enemy_fight?: Maybe<Scalars['Float']>;
  enemy_horror?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  pack_position?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sanity?: Maybe<Scalars['Float']>;
  shroud?: Maybe<Scalars['Float']>;
  skill_agility?: Maybe<Scalars['Float']>;
  skill_combat?: Maybe<Scalars['Float']>;
  skill_intellect?: Maybe<Scalars['Float']>;
  skill_wild?: Maybe<Scalars['Float']>;
  skill_willpower?: Maybe<Scalars['Float']>;
  stage?: Maybe<Scalars['Float']>;
  vengeance?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
  victory?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Full_Card_Stddev_Pop_Fields = {
  __typename?: 'full_card_stddev_pop_fields';
  clues?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  deck_limit?: Maybe<Scalars['Float']>;
  doom?: Maybe<Scalars['Float']>;
  encounter_position?: Maybe<Scalars['Float']>;
  enemy_damage?: Maybe<Scalars['Float']>;
  enemy_evade?: Maybe<Scalars['Float']>;
  enemy_fight?: Maybe<Scalars['Float']>;
  enemy_horror?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  pack_position?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sanity?: Maybe<Scalars['Float']>;
  shroud?: Maybe<Scalars['Float']>;
  skill_agility?: Maybe<Scalars['Float']>;
  skill_combat?: Maybe<Scalars['Float']>;
  skill_intellect?: Maybe<Scalars['Float']>;
  skill_wild?: Maybe<Scalars['Float']>;
  skill_willpower?: Maybe<Scalars['Float']>;
  stage?: Maybe<Scalars['Float']>;
  vengeance?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
  victory?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Full_Card_Stddev_Samp_Fields = {
  __typename?: 'full_card_stddev_samp_fields';
  clues?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  deck_limit?: Maybe<Scalars['Float']>;
  doom?: Maybe<Scalars['Float']>;
  encounter_position?: Maybe<Scalars['Float']>;
  enemy_damage?: Maybe<Scalars['Float']>;
  enemy_evade?: Maybe<Scalars['Float']>;
  enemy_fight?: Maybe<Scalars['Float']>;
  enemy_horror?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  pack_position?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sanity?: Maybe<Scalars['Float']>;
  shroud?: Maybe<Scalars['Float']>;
  skill_agility?: Maybe<Scalars['Float']>;
  skill_combat?: Maybe<Scalars['Float']>;
  skill_intellect?: Maybe<Scalars['Float']>;
  skill_wild?: Maybe<Scalars['Float']>;
  skill_willpower?: Maybe<Scalars['Float']>;
  stage?: Maybe<Scalars['Float']>;
  vengeance?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
  victory?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "full_card" */
export type Full_Card_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Full_Card_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Full_Card_Stream_Cursor_Value_Input = {
  alternate_required_code?: InputMaybe<Scalars['String']>;
  back_link?: InputMaybe<Scalars['String']>;
  backimagesrc?: InputMaybe<Scalars['String']>;
  clues?: InputMaybe<Scalars['Int']>;
  clues_fixed?: InputMaybe<Scalars['Boolean']>;
  code?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<Scalars['Int']>;
  deck_limit?: InputMaybe<Scalars['Int']>;
  deck_options?: InputMaybe<Scalars['jsonb']>;
  deck_requirements?: InputMaybe<Scalars['jsonb']>;
  doom?: InputMaybe<Scalars['Int']>;
  double_sided?: InputMaybe<Scalars['Boolean']>;
  encounter_code?: InputMaybe<Scalars['String']>;
  encounter_position?: InputMaybe<Scalars['Int']>;
  enemy_damage?: InputMaybe<Scalars['Int']>;
  enemy_evade?: InputMaybe<Scalars['Int']>;
  enemy_fight?: InputMaybe<Scalars['Int']>;
  enemy_horror?: InputMaybe<Scalars['Int']>;
  exceptional?: InputMaybe<Scalars['Boolean']>;
  exile?: InputMaybe<Scalars['Boolean']>;
  faction2_code?: InputMaybe<Scalars['String']>;
  faction3_code?: InputMaybe<Scalars['String']>;
  faction_code?: InputMaybe<Scalars['String']>;
  health?: InputMaybe<Scalars['Int']>;
  health_per_investigator?: InputMaybe<Scalars['Boolean']>;
  hidden?: InputMaybe<Scalars['Boolean']>;
  illustrator?: InputMaybe<Scalars['String']>;
  imagesrc?: InputMaybe<Scalars['String']>;
  is_unique?: InputMaybe<Scalars['Boolean']>;
  myriad?: InputMaybe<Scalars['Boolean']>;
  pack_code?: InputMaybe<Scalars['String']>;
  pack_position?: InputMaybe<Scalars['Int']>;
  permanent?: InputMaybe<Scalars['Boolean']>;
  position?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  real_back_flavor?: InputMaybe<Scalars['String']>;
  real_back_name?: InputMaybe<Scalars['String']>;
  real_back_text?: InputMaybe<Scalars['String']>;
  real_encounter_set_name?: InputMaybe<Scalars['String']>;
  real_flavor?: InputMaybe<Scalars['String']>;
  real_name?: InputMaybe<Scalars['String']>;
  real_pack_name?: InputMaybe<Scalars['String']>;
  real_slot?: InputMaybe<Scalars['String']>;
  real_subname?: InputMaybe<Scalars['String']>;
  real_text?: InputMaybe<Scalars['String']>;
  real_traits?: InputMaybe<Scalars['String']>;
  restrictions?: InputMaybe<Scalars['jsonb']>;
  sanity?: InputMaybe<Scalars['Int']>;
  shroud?: InputMaybe<Scalars['Int']>;
  skill_agility?: InputMaybe<Scalars['Int']>;
  skill_combat?: InputMaybe<Scalars['Int']>;
  skill_intellect?: InputMaybe<Scalars['Int']>;
  skill_wild?: InputMaybe<Scalars['Int']>;
  skill_willpower?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Scalars['Int']>;
  subtype_code?: InputMaybe<Scalars['String']>;
  type_code?: InputMaybe<Card_Type_Code_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  vengeance?: InputMaybe<Scalars['Int']>;
  version?: InputMaybe<Scalars['Int']>;
  victory?: InputMaybe<Scalars['Int']>;
  xp?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Full_Card_Sum_Fields = {
  __typename?: 'full_card_sum_fields';
  clues?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  deck_limit?: Maybe<Scalars['Int']>;
  doom?: Maybe<Scalars['Int']>;
  encounter_position?: Maybe<Scalars['Int']>;
  enemy_damage?: Maybe<Scalars['Int']>;
  enemy_evade?: Maybe<Scalars['Int']>;
  enemy_fight?: Maybe<Scalars['Int']>;
  enemy_horror?: Maybe<Scalars['Int']>;
  health?: Maybe<Scalars['Int']>;
  pack_position?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  sanity?: Maybe<Scalars['Int']>;
  shroud?: Maybe<Scalars['Int']>;
  skill_agility?: Maybe<Scalars['Int']>;
  skill_combat?: Maybe<Scalars['Int']>;
  skill_intellect?: Maybe<Scalars['Int']>;
  skill_wild?: Maybe<Scalars['Int']>;
  skill_willpower?: Maybe<Scalars['Int']>;
  stage?: Maybe<Scalars['Int']>;
  vengeance?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['Int']>;
  victory?: Maybe<Scalars['Int']>;
  xp?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "full_card_text" */
export type Full_Card_Text = {
  __typename?: 'full_card_text';
  back_flavor?: Maybe<Scalars['String']>;
  back_name?: Maybe<Scalars['String']>;
  back_text?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  encounter_name?: Maybe<Scalars['String']>;
  flavor?: Maybe<Scalars['String']>;
  locale: Scalars['String'];
  name: Scalars['String'];
  slot?: Maybe<Scalars['String']>;
  subname?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  traits?: Maybe<Scalars['String']>;
};

/** aggregated selection of "full_card_text" */
export type Full_Card_Text_Aggregate = {
  __typename?: 'full_card_text_aggregate';
  aggregate?: Maybe<Full_Card_Text_Aggregate_Fields>;
  nodes: Array<Full_Card_Text>;
};

export type Full_Card_Text_Aggregate_Bool_Exp = {
  count?: InputMaybe<Full_Card_Text_Aggregate_Bool_Exp_Count>;
};

export type Full_Card_Text_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Full_Card_Text_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Full_Card_Text_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "full_card_text" */
export type Full_Card_Text_Aggregate_Fields = {
  __typename?: 'full_card_text_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Full_Card_Text_Max_Fields>;
  min?: Maybe<Full_Card_Text_Min_Fields>;
};


/** aggregate fields of "full_card_text" */
export type Full_Card_Text_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Full_Card_Text_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "full_card_text" */
export type Full_Card_Text_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Full_Card_Text_Max_Order_By>;
  min?: InputMaybe<Full_Card_Text_Min_Order_By>;
};

/** input type for inserting array relation for remote table "full_card_text" */
export type Full_Card_Text_Arr_Rel_Insert_Input = {
  data: Array<Full_Card_Text_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Full_Card_Text_On_Conflict>;
};

/** Boolean expression to filter rows from the table "full_card_text". All fields are combined with a logical 'AND'. */
export type Full_Card_Text_Bool_Exp = {
  _and?: InputMaybe<Array<Full_Card_Text_Bool_Exp>>;
  _not?: InputMaybe<Full_Card_Text_Bool_Exp>;
  _or?: InputMaybe<Array<Full_Card_Text_Bool_Exp>>;
  back_flavor?: InputMaybe<String_Comparison_Exp>;
  back_name?: InputMaybe<String_Comparison_Exp>;
  back_text?: InputMaybe<String_Comparison_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  encounter_name?: InputMaybe<String_Comparison_Exp>;
  flavor?: InputMaybe<String_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  slot?: InputMaybe<String_Comparison_Exp>;
  subname?: InputMaybe<String_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  traits?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "full_card_text" */
export enum Full_Card_Text_Constraint {
  /** unique or primary key constraint on columns "code", "locale" */
  FullCardTextPkey = 'full_card_text_pkey'
}

/** input type for inserting data into table "full_card_text" */
export type Full_Card_Text_Insert_Input = {
  back_flavor?: InputMaybe<Scalars['String']>;
  back_name?: InputMaybe<Scalars['String']>;
  back_text?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  encounter_name?: InputMaybe<Scalars['String']>;
  flavor?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['String']>;
  subname?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  traits?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Full_Card_Text_Max_Fields = {
  __typename?: 'full_card_text_max_fields';
  back_flavor?: Maybe<Scalars['String']>;
  back_name?: Maybe<Scalars['String']>;
  back_text?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  encounter_name?: Maybe<Scalars['String']>;
  flavor?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slot?: Maybe<Scalars['String']>;
  subname?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  traits?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "full_card_text" */
export type Full_Card_Text_Max_Order_By = {
  back_flavor?: InputMaybe<Order_By>;
  back_name?: InputMaybe<Order_By>;
  back_text?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  encounter_name?: InputMaybe<Order_By>;
  flavor?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
  subname?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  traits?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Full_Card_Text_Min_Fields = {
  __typename?: 'full_card_text_min_fields';
  back_flavor?: Maybe<Scalars['String']>;
  back_name?: Maybe<Scalars['String']>;
  back_text?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  encounter_name?: Maybe<Scalars['String']>;
  flavor?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slot?: Maybe<Scalars['String']>;
  subname?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  traits?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "full_card_text" */
export type Full_Card_Text_Min_Order_By = {
  back_flavor?: InputMaybe<Order_By>;
  back_name?: InputMaybe<Order_By>;
  back_text?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  encounter_name?: InputMaybe<Order_By>;
  flavor?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
  subname?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  traits?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "full_card_text" */
export type Full_Card_Text_Mutation_Response = {
  __typename?: 'full_card_text_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Full_Card_Text>;
};

/** on_conflict condition type for table "full_card_text" */
export type Full_Card_Text_On_Conflict = {
  constraint: Full_Card_Text_Constraint;
  update_columns?: Array<Full_Card_Text_Update_Column>;
  where?: InputMaybe<Full_Card_Text_Bool_Exp>;
};

/** Ordering options when selecting data from "full_card_text". */
export type Full_Card_Text_Order_By = {
  back_flavor?: InputMaybe<Order_By>;
  back_name?: InputMaybe<Order_By>;
  back_text?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  encounter_name?: InputMaybe<Order_By>;
  flavor?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slot?: InputMaybe<Order_By>;
  subname?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  traits?: InputMaybe<Order_By>;
};

/** primary key columns input for table: full_card_text */
export type Full_Card_Text_Pk_Columns_Input = {
  code: Scalars['String'];
  locale: Scalars['String'];
};

/** select columns of table "full_card_text" */
export enum Full_Card_Text_Select_Column {
  /** column name */
  BackFlavor = 'back_flavor',
  /** column name */
  BackName = 'back_name',
  /** column name */
  BackText = 'back_text',
  /** column name */
  Code = 'code',
  /** column name */
  EncounterName = 'encounter_name',
  /** column name */
  Flavor = 'flavor',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  Slot = 'slot',
  /** column name */
  Subname = 'subname',
  /** column name */
  Text = 'text',
  /** column name */
  Traits = 'traits'
}

/** input type for updating data in table "full_card_text" */
export type Full_Card_Text_Set_Input = {
  back_flavor?: InputMaybe<Scalars['String']>;
  back_name?: InputMaybe<Scalars['String']>;
  back_text?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  encounter_name?: InputMaybe<Scalars['String']>;
  flavor?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['String']>;
  subname?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  traits?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "full_card_text" */
export type Full_Card_Text_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Full_Card_Text_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Full_Card_Text_Stream_Cursor_Value_Input = {
  back_flavor?: InputMaybe<Scalars['String']>;
  back_name?: InputMaybe<Scalars['String']>;
  back_text?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  encounter_name?: InputMaybe<Scalars['String']>;
  flavor?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  slot?: InputMaybe<Scalars['String']>;
  subname?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  traits?: InputMaybe<Scalars['String']>;
};

/** update columns of table "full_card_text" */
export enum Full_Card_Text_Update_Column {
  /** column name */
  BackFlavor = 'back_flavor',
  /** column name */
  BackName = 'back_name',
  /** column name */
  BackText = 'back_text',
  /** column name */
  Code = 'code',
  /** column name */
  EncounterName = 'encounter_name',
  /** column name */
  Flavor = 'flavor',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  Slot = 'slot',
  /** column name */
  Subname = 'subname',
  /** column name */
  Text = 'text',
  /** column name */
  Traits = 'traits'
}

export type Full_Card_Text_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Full_Card_Text_Set_Input>;
  where: Full_Card_Text_Bool_Exp;
};

/** update columns of table "full_card" */
export enum Full_Card_Update_Column {
  /** column name */
  AlternateRequiredCode = 'alternate_required_code',
  /** column name */
  BackLink = 'back_link',
  /** column name */
  Backimagesrc = 'backimagesrc',
  /** column name */
  Clues = 'clues',
  /** column name */
  CluesFixed = 'clues_fixed',
  /** column name */
  Code = 'code',
  /** column name */
  Cost = 'cost',
  /** column name */
  DeckLimit = 'deck_limit',
  /** column name */
  DeckOptions = 'deck_options',
  /** column name */
  DeckRequirements = 'deck_requirements',
  /** column name */
  Doom = 'doom',
  /** column name */
  DoubleSided = 'double_sided',
  /** column name */
  EncounterCode = 'encounter_code',
  /** column name */
  EncounterPosition = 'encounter_position',
  /** column name */
  EnemyDamage = 'enemy_damage',
  /** column name */
  EnemyEvade = 'enemy_evade',
  /** column name */
  EnemyFight = 'enemy_fight',
  /** column name */
  EnemyHorror = 'enemy_horror',
  /** column name */
  Exceptional = 'exceptional',
  /** column name */
  Exile = 'exile',
  /** column name */
  Faction2Code = 'faction2_code',
  /** column name */
  Faction3Code = 'faction3_code',
  /** column name */
  FactionCode = 'faction_code',
  /** column name */
  Health = 'health',
  /** column name */
  HealthPerInvestigator = 'health_per_investigator',
  /** column name */
  Hidden = 'hidden',
  /** column name */
  Illustrator = 'illustrator',
  /** column name */
  Imagesrc = 'imagesrc',
  /** column name */
  IsUnique = 'is_unique',
  /** column name */
  Myriad = 'myriad',
  /** column name */
  PackCode = 'pack_code',
  /** column name */
  PackPosition = 'pack_position',
  /** column name */
  Permanent = 'permanent',
  /** column name */
  Position = 'position',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  RealBackFlavor = 'real_back_flavor',
  /** column name */
  RealBackName = 'real_back_name',
  /** column name */
  RealBackText = 'real_back_text',
  /** column name */
  RealEncounterSetName = 'real_encounter_set_name',
  /** column name */
  RealFlavor = 'real_flavor',
  /** column name */
  RealName = 'real_name',
  /** column name */
  RealPackName = 'real_pack_name',
  /** column name */
  RealSlot = 'real_slot',
  /** column name */
  RealSubname = 'real_subname',
  /** column name */
  RealText = 'real_text',
  /** column name */
  RealTraits = 'real_traits',
  /** column name */
  Restrictions = 'restrictions',
  /** column name */
  Sanity = 'sanity',
  /** column name */
  Shroud = 'shroud',
  /** column name */
  SkillAgility = 'skill_agility',
  /** column name */
  SkillCombat = 'skill_combat',
  /** column name */
  SkillIntellect = 'skill_intellect',
  /** column name */
  SkillWild = 'skill_wild',
  /** column name */
  SkillWillpower = 'skill_willpower',
  /** column name */
  Stage = 'stage',
  /** column name */
  SubtypeCode = 'subtype_code',
  /** column name */
  TypeCode = 'type_code',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Vengeance = 'vengeance',
  /** column name */
  Version = 'version',
  /** column name */
  Victory = 'victory',
  /** column name */
  Xp = 'xp'
}

export type Full_Card_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Full_Card_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Full_Card_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Full_Card_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Full_Card_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Full_Card_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Full_Card_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Full_Card_Set_Input>;
  where: Full_Card_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Full_Card_Var_Pop_Fields = {
  __typename?: 'full_card_var_pop_fields';
  clues?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  deck_limit?: Maybe<Scalars['Float']>;
  doom?: Maybe<Scalars['Float']>;
  encounter_position?: Maybe<Scalars['Float']>;
  enemy_damage?: Maybe<Scalars['Float']>;
  enemy_evade?: Maybe<Scalars['Float']>;
  enemy_fight?: Maybe<Scalars['Float']>;
  enemy_horror?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  pack_position?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sanity?: Maybe<Scalars['Float']>;
  shroud?: Maybe<Scalars['Float']>;
  skill_agility?: Maybe<Scalars['Float']>;
  skill_combat?: Maybe<Scalars['Float']>;
  skill_intellect?: Maybe<Scalars['Float']>;
  skill_wild?: Maybe<Scalars['Float']>;
  skill_willpower?: Maybe<Scalars['Float']>;
  stage?: Maybe<Scalars['Float']>;
  vengeance?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
  victory?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Full_Card_Var_Samp_Fields = {
  __typename?: 'full_card_var_samp_fields';
  clues?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  deck_limit?: Maybe<Scalars['Float']>;
  doom?: Maybe<Scalars['Float']>;
  encounter_position?: Maybe<Scalars['Float']>;
  enemy_damage?: Maybe<Scalars['Float']>;
  enemy_evade?: Maybe<Scalars['Float']>;
  enemy_fight?: Maybe<Scalars['Float']>;
  enemy_horror?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  pack_position?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sanity?: Maybe<Scalars['Float']>;
  shroud?: Maybe<Scalars['Float']>;
  skill_agility?: Maybe<Scalars['Float']>;
  skill_combat?: Maybe<Scalars['Float']>;
  skill_intellect?: Maybe<Scalars['Float']>;
  skill_wild?: Maybe<Scalars['Float']>;
  skill_willpower?: Maybe<Scalars['Float']>;
  stage?: Maybe<Scalars['Float']>;
  vengeance?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
  victory?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Full_Card_Variance_Fields = {
  __typename?: 'full_card_variance_fields';
  clues?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  deck_limit?: Maybe<Scalars['Float']>;
  doom?: Maybe<Scalars['Float']>;
  encounter_position?: Maybe<Scalars['Float']>;
  enemy_damage?: Maybe<Scalars['Float']>;
  enemy_evade?: Maybe<Scalars['Float']>;
  enemy_fight?: Maybe<Scalars['Float']>;
  enemy_horror?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  pack_position?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sanity?: Maybe<Scalars['Float']>;
  shroud?: Maybe<Scalars['Float']>;
  skill_agility?: Maybe<Scalars['Float']>;
  skill_combat?: Maybe<Scalars['Float']>;
  skill_intellect?: Maybe<Scalars['Float']>;
  skill_wild?: Maybe<Scalars['Float']>;
  skill_willpower?: Maybe<Scalars['Float']>;
  stage?: Maybe<Scalars['Float']>;
  vengeance?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
  victory?: Maybe<Scalars['Float']>;
  xp?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "gender" */
export type Gender = {
  __typename?: 'gender';
  code: Scalars['String'];
};

/** aggregated selection of "gender" */
export type Gender_Aggregate = {
  __typename?: 'gender_aggregate';
  aggregate?: Maybe<Gender_Aggregate_Fields>;
  nodes: Array<Gender>;
};

/** aggregate fields of "gender" */
export type Gender_Aggregate_Fields = {
  __typename?: 'gender_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Gender_Max_Fields>;
  min?: Maybe<Gender_Min_Fields>;
};


/** aggregate fields of "gender" */
export type Gender_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Gender_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "gender". All fields are combined with a logical 'AND'. */
export type Gender_Bool_Exp = {
  _and?: InputMaybe<Array<Gender_Bool_Exp>>;
  _not?: InputMaybe<Gender_Bool_Exp>;
  _or?: InputMaybe<Array<Gender_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "gender" */
export enum Gender_Constraint {
  /** unique or primary key constraint on columns "code" */
  GenderPkey = 'gender_pkey'
}

export enum Gender_Enum {
  F = 'f',
  M = 'm',
  Nb = 'nb'
}

/** Boolean expression to compare columns of type "gender_enum". All fields are combined with logical 'AND'. */
export type Gender_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Gender_Enum>;
  _in?: InputMaybe<Array<Gender_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Gender_Enum>;
  _nin?: InputMaybe<Array<Gender_Enum>>;
};

/** input type for inserting data into table "gender" */
export type Gender_Insert_Input = {
  code?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Gender_Max_Fields = {
  __typename?: 'gender_max_fields';
  code?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Gender_Min_Fields = {
  __typename?: 'gender_min_fields';
  code?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "gender" */
export type Gender_Mutation_Response = {
  __typename?: 'gender_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Gender>;
};

/** on_conflict condition type for table "gender" */
export type Gender_On_Conflict = {
  constraint: Gender_Constraint;
  update_columns?: Array<Gender_Update_Column>;
  where?: InputMaybe<Gender_Bool_Exp>;
};

/** Ordering options when selecting data from "gender". */
export type Gender_Order_By = {
  code?: InputMaybe<Order_By>;
};

/** primary key columns input for table: gender */
export type Gender_Pk_Columns_Input = {
  code: Scalars['String'];
};

/** select columns of table "gender" */
export enum Gender_Select_Column {
  /** column name */
  Code = 'code'
}

/** input type for updating data in table "gender" */
export type Gender_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "gender" */
export type Gender_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Gender_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Gender_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']>;
};

/** update columns of table "gender" */
export enum Gender_Update_Column {
  /** column name */
  Code = 'code'
}

export type Gender_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Gender_Set_Input>;
  where: Gender_Bool_Exp;
};

/** columns and relationships of "guide_achievement" */
export type Guide_Achievement = {
  __typename?: 'guide_achievement';
  bool_value?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  campaign: Campaign;
  campaign_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  type: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  value?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "guide_achievement" */
export type Guide_Achievement_Aggregate = {
  __typename?: 'guide_achievement_aggregate';
  aggregate?: Maybe<Guide_Achievement_Aggregate_Fields>;
  nodes: Array<Guide_Achievement>;
};

export type Guide_Achievement_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Guide_Achievement_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Guide_Achievement_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Guide_Achievement_Aggregate_Bool_Exp_Count>;
};

export type Guide_Achievement_Aggregate_Bool_Exp_Bool_And = {
  arguments: Guide_Achievement_Select_Column_Guide_Achievement_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Guide_Achievement_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Guide_Achievement_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Guide_Achievement_Select_Column_Guide_Achievement_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Guide_Achievement_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Guide_Achievement_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Guide_Achievement_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Guide_Achievement_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "guide_achievement" */
export type Guide_Achievement_Aggregate_Fields = {
  __typename?: 'guide_achievement_aggregate_fields';
  avg?: Maybe<Guide_Achievement_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Guide_Achievement_Max_Fields>;
  min?: Maybe<Guide_Achievement_Min_Fields>;
  stddev?: Maybe<Guide_Achievement_Stddev_Fields>;
  stddev_pop?: Maybe<Guide_Achievement_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Guide_Achievement_Stddev_Samp_Fields>;
  sum?: Maybe<Guide_Achievement_Sum_Fields>;
  var_pop?: Maybe<Guide_Achievement_Var_Pop_Fields>;
  var_samp?: Maybe<Guide_Achievement_Var_Samp_Fields>;
  variance?: Maybe<Guide_Achievement_Variance_Fields>;
};


/** aggregate fields of "guide_achievement" */
export type Guide_Achievement_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Guide_Achievement_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "guide_achievement" */
export type Guide_Achievement_Aggregate_Order_By = {
  avg?: InputMaybe<Guide_Achievement_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Guide_Achievement_Max_Order_By>;
  min?: InputMaybe<Guide_Achievement_Min_Order_By>;
  stddev?: InputMaybe<Guide_Achievement_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Guide_Achievement_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Guide_Achievement_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Guide_Achievement_Sum_Order_By>;
  var_pop?: InputMaybe<Guide_Achievement_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Guide_Achievement_Var_Samp_Order_By>;
  variance?: InputMaybe<Guide_Achievement_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "guide_achievement" */
export type Guide_Achievement_Arr_Rel_Insert_Input = {
  data: Array<Guide_Achievement_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Guide_Achievement_On_Conflict>;
};

/** aggregate avg on columns */
export type Guide_Achievement_Avg_Fields = {
  __typename?: 'guide_achievement_avg_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "guide_achievement" */
export type Guide_Achievement_Avg_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "guide_achievement". All fields are combined with a logical 'AND'. */
export type Guide_Achievement_Bool_Exp = {
  _and?: InputMaybe<Array<Guide_Achievement_Bool_Exp>>;
  _not?: InputMaybe<Guide_Achievement_Bool_Exp>;
  _or?: InputMaybe<Array<Guide_Achievement_Bool_Exp>>;
  bool_value?: InputMaybe<Boolean_Comparison_Exp>;
  campaign?: InputMaybe<Campaign_Bool_Exp>;
  campaign_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  value?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "guide_achievement" */
export enum Guide_Achievement_Constraint {
  /** unique or primary key constraint on columns "campaign_id", "id" */
  GuideAchievementPkey = 'guide_achievement_pkey'
}

/** input type for incrementing numeric columns in table "guide_achievement" */
export type Guide_Achievement_Inc_Input = {
  campaign_id?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "guide_achievement" */
export type Guide_Achievement_Insert_Input = {
  bool_value?: InputMaybe<Scalars['Boolean']>;
  campaign?: InputMaybe<Campaign_Obj_Rel_Insert_Input>;
  campaign_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Guide_Achievement_Max_Fields = {
  __typename?: 'guide_achievement_max_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "guide_achievement" */
export type Guide_Achievement_Max_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Guide_Achievement_Min_Fields = {
  __typename?: 'guide_achievement_min_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "guide_achievement" */
export type Guide_Achievement_Min_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "guide_achievement" */
export type Guide_Achievement_Mutation_Response = {
  __typename?: 'guide_achievement_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Guide_Achievement>;
};

/** on_conflict condition type for table "guide_achievement" */
export type Guide_Achievement_On_Conflict = {
  constraint: Guide_Achievement_Constraint;
  update_columns?: Array<Guide_Achievement_Update_Column>;
  where?: InputMaybe<Guide_Achievement_Bool_Exp>;
};

/** Ordering options when selecting data from "guide_achievement". */
export type Guide_Achievement_Order_By = {
  bool_value?: InputMaybe<Order_By>;
  campaign?: InputMaybe<Campaign_Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: guide_achievement */
export type Guide_Achievement_Pk_Columns_Input = {
  campaign_id: Scalars['Int'];
  id: Scalars['String'];
};

/** select columns of table "guide_achievement" */
export enum Guide_Achievement_Select_Column {
  /** column name */
  BoolValue = 'bool_value',
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** select "guide_achievement_aggregate_bool_exp_bool_and_arguments_columns" columns of table "guide_achievement" */
export enum Guide_Achievement_Select_Column_Guide_Achievement_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  BoolValue = 'bool_value'
}

/** select "guide_achievement_aggregate_bool_exp_bool_or_arguments_columns" columns of table "guide_achievement" */
export enum Guide_Achievement_Select_Column_Guide_Achievement_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  BoolValue = 'bool_value'
}

/** input type for updating data in table "guide_achievement" */
export type Guide_Achievement_Set_Input = {
  bool_value?: InputMaybe<Scalars['Boolean']>;
  campaign_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Guide_Achievement_Stddev_Fields = {
  __typename?: 'guide_achievement_stddev_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "guide_achievement" */
export type Guide_Achievement_Stddev_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Guide_Achievement_Stddev_Pop_Fields = {
  __typename?: 'guide_achievement_stddev_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "guide_achievement" */
export type Guide_Achievement_Stddev_Pop_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Guide_Achievement_Stddev_Samp_Fields = {
  __typename?: 'guide_achievement_stddev_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "guide_achievement" */
export type Guide_Achievement_Stddev_Samp_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "guide_achievement" */
export type Guide_Achievement_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Guide_Achievement_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Guide_Achievement_Stream_Cursor_Value_Input = {
  bool_value?: InputMaybe<Scalars['Boolean']>;
  campaign_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Guide_Achievement_Sum_Fields = {
  __typename?: 'guide_achievement_sum_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "guide_achievement" */
export type Guide_Achievement_Sum_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** update columns of table "guide_achievement" */
export enum Guide_Achievement_Update_Column {
  /** column name */
  BoolValue = 'bool_value',
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

export type Guide_Achievement_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Guide_Achievement_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Guide_Achievement_Set_Input>;
  where: Guide_Achievement_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Guide_Achievement_Var_Pop_Fields = {
  __typename?: 'guide_achievement_var_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "guide_achievement" */
export type Guide_Achievement_Var_Pop_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Guide_Achievement_Var_Samp_Fields = {
  __typename?: 'guide_achievement_var_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "guide_achievement" */
export type Guide_Achievement_Var_Samp_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Guide_Achievement_Variance_Fields = {
  __typename?: 'guide_achievement_variance_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "guide_achievement" */
export type Guide_Achievement_Variance_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** columns and relationships of "guide_input" */
export type Guide_Input = {
  __typename?: 'guide_input';
  /** An object relationship */
  campaign: Campaign;
  campaign_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  inserted_idx?: Maybe<Scalars['Int']>;
  payload?: Maybe<Scalars['jsonb']>;
  scenario?: Maybe<Scalars['String']>;
  step?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "guide_input" */
export type Guide_InputPayloadArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "guide_input" */
export type Guide_Input_Aggregate = {
  __typename?: 'guide_input_aggregate';
  aggregate?: Maybe<Guide_Input_Aggregate_Fields>;
  nodes: Array<Guide_Input>;
};

export type Guide_Input_Aggregate_Bool_Exp = {
  count?: InputMaybe<Guide_Input_Aggregate_Bool_Exp_Count>;
};

export type Guide_Input_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Guide_Input_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Guide_Input_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "guide_input" */
export type Guide_Input_Aggregate_Fields = {
  __typename?: 'guide_input_aggregate_fields';
  avg?: Maybe<Guide_Input_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Guide_Input_Max_Fields>;
  min?: Maybe<Guide_Input_Min_Fields>;
  stddev?: Maybe<Guide_Input_Stddev_Fields>;
  stddev_pop?: Maybe<Guide_Input_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Guide_Input_Stddev_Samp_Fields>;
  sum?: Maybe<Guide_Input_Sum_Fields>;
  var_pop?: Maybe<Guide_Input_Var_Pop_Fields>;
  var_samp?: Maybe<Guide_Input_Var_Samp_Fields>;
  variance?: Maybe<Guide_Input_Variance_Fields>;
};


/** aggregate fields of "guide_input" */
export type Guide_Input_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Guide_Input_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "guide_input" */
export type Guide_Input_Aggregate_Order_By = {
  avg?: InputMaybe<Guide_Input_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Guide_Input_Max_Order_By>;
  min?: InputMaybe<Guide_Input_Min_Order_By>;
  stddev?: InputMaybe<Guide_Input_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Guide_Input_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Guide_Input_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Guide_Input_Sum_Order_By>;
  var_pop?: InputMaybe<Guide_Input_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Guide_Input_Var_Samp_Order_By>;
  variance?: InputMaybe<Guide_Input_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Guide_Input_Append_Input = {
  payload?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "guide_input" */
export type Guide_Input_Arr_Rel_Insert_Input = {
  data: Array<Guide_Input_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Guide_Input_On_Conflict>;
};

/** aggregate avg on columns */
export type Guide_Input_Avg_Fields = {
  __typename?: 'guide_input_avg_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  inserted_idx?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "guide_input" */
export type Guide_Input_Avg_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  inserted_idx?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "guide_input". All fields are combined with a logical 'AND'. */
export type Guide_Input_Bool_Exp = {
  _and?: InputMaybe<Array<Guide_Input_Bool_Exp>>;
  _not?: InputMaybe<Guide_Input_Bool_Exp>;
  _or?: InputMaybe<Array<Guide_Input_Bool_Exp>>;
  campaign?: InputMaybe<Campaign_Bool_Exp>;
  campaign_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  inserted_idx?: InputMaybe<Int_Comparison_Exp>;
  payload?: InputMaybe<Jsonb_Comparison_Exp>;
  scenario?: InputMaybe<String_Comparison_Exp>;
  step?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "guide_input" */
export enum Guide_Input_Constraint {
  /** unique or primary key constraint on columns "campaign_id", "id" */
  GuideInputPkey = 'guide_input_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Guide_Input_Delete_At_Path_Input = {
  payload?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Guide_Input_Delete_Elem_Input = {
  payload?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Guide_Input_Delete_Key_Input = {
  payload?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "guide_input" */
export type Guide_Input_Inc_Input = {
  campaign_id?: InputMaybe<Scalars['Int']>;
  inserted_idx?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "guide_input" */
export type Guide_Input_Insert_Input = {
  campaign?: InputMaybe<Campaign_Obj_Rel_Insert_Input>;
  campaign_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  inserted_idx?: InputMaybe<Scalars['Int']>;
  payload?: InputMaybe<Scalars['jsonb']>;
  scenario?: InputMaybe<Scalars['String']>;
  step?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Guide_Input_Max_Fields = {
  __typename?: 'guide_input_max_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  inserted_idx?: Maybe<Scalars['Int']>;
  scenario?: Maybe<Scalars['String']>;
  step?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "guide_input" */
export type Guide_Input_Max_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inserted_idx?: InputMaybe<Order_By>;
  scenario?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Guide_Input_Min_Fields = {
  __typename?: 'guide_input_min_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  inserted_idx?: Maybe<Scalars['Int']>;
  scenario?: Maybe<Scalars['String']>;
  step?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "guide_input" */
export type Guide_Input_Min_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inserted_idx?: InputMaybe<Order_By>;
  scenario?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "guide_input" */
export type Guide_Input_Mutation_Response = {
  __typename?: 'guide_input_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Guide_Input>;
};

/** on_conflict condition type for table "guide_input" */
export type Guide_Input_On_Conflict = {
  constraint: Guide_Input_Constraint;
  update_columns?: Array<Guide_Input_Update_Column>;
  where?: InputMaybe<Guide_Input_Bool_Exp>;
};

/** Ordering options when selecting data from "guide_input". */
export type Guide_Input_Order_By = {
  campaign?: InputMaybe<Campaign_Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inserted_idx?: InputMaybe<Order_By>;
  payload?: InputMaybe<Order_By>;
  scenario?: InputMaybe<Order_By>;
  step?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: guide_input */
export type Guide_Input_Pk_Columns_Input = {
  campaign_id: Scalars['Int'];
  id: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Guide_Input_Prepend_Input = {
  payload?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "guide_input" */
export enum Guide_Input_Select_Column {
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InsertedIdx = 'inserted_idx',
  /** column name */
  Payload = 'payload',
  /** column name */
  Scenario = 'scenario',
  /** column name */
  Step = 'step',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "guide_input" */
export type Guide_Input_Set_Input = {
  campaign_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  inserted_idx?: InputMaybe<Scalars['Int']>;
  payload?: InputMaybe<Scalars['jsonb']>;
  scenario?: InputMaybe<Scalars['String']>;
  step?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Guide_Input_Stddev_Fields = {
  __typename?: 'guide_input_stddev_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  inserted_idx?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "guide_input" */
export type Guide_Input_Stddev_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  inserted_idx?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Guide_Input_Stddev_Pop_Fields = {
  __typename?: 'guide_input_stddev_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  inserted_idx?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "guide_input" */
export type Guide_Input_Stddev_Pop_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  inserted_idx?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Guide_Input_Stddev_Samp_Fields = {
  __typename?: 'guide_input_stddev_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  inserted_idx?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "guide_input" */
export type Guide_Input_Stddev_Samp_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  inserted_idx?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "guide_input" */
export type Guide_Input_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Guide_Input_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Guide_Input_Stream_Cursor_Value_Input = {
  campaign_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  inserted_idx?: InputMaybe<Scalars['Int']>;
  payload?: InputMaybe<Scalars['jsonb']>;
  scenario?: InputMaybe<Scalars['String']>;
  step?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Guide_Input_Sum_Fields = {
  __typename?: 'guide_input_sum_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  inserted_idx?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "guide_input" */
export type Guide_Input_Sum_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  inserted_idx?: InputMaybe<Order_By>;
};

/** update columns of table "guide_input" */
export enum Guide_Input_Update_Column {
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InsertedIdx = 'inserted_idx',
  /** column name */
  Payload = 'payload',
  /** column name */
  Scenario = 'scenario',
  /** column name */
  Step = 'step',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Guide_Input_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Guide_Input_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Guide_Input_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Guide_Input_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Guide_Input_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Guide_Input_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Guide_Input_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Guide_Input_Set_Input>;
  where: Guide_Input_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Guide_Input_Var_Pop_Fields = {
  __typename?: 'guide_input_var_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  inserted_idx?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "guide_input" */
export type Guide_Input_Var_Pop_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  inserted_idx?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Guide_Input_Var_Samp_Fields = {
  __typename?: 'guide_input_var_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  inserted_idx?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "guide_input" */
export type Guide_Input_Var_Samp_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  inserted_idx?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Guide_Input_Variance_Fields = {
  __typename?: 'guide_input_variance_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  inserted_idx?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "guide_input" */
export type Guide_Input_Variance_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  inserted_idx?: InputMaybe<Order_By>;
};

/** columns and relationships of "investigator_data" */
export type Investigator_Data = {
  __typename?: 'investigator_data';
  addedCards?: Maybe<Scalars['jsonb']>;
  availableXp?: Maybe<Scalars['Int']>;
  /** An object relationship */
  campaign_data: Campaign;
  campaign_id: Scalars['Int'];
  cardCounts?: Maybe<Scalars['jsonb']>;
  created_at: Scalars['timestamptz'];
  /** A computed field, executes function "investigator_data_id" */
  id?: Maybe<Scalars['String']>;
  ignoreStoryAssets?: Maybe<Scalars['jsonb']>;
  insane?: Maybe<Scalars['Boolean']>;
  investigator: Scalars['String'];
  killed?: Maybe<Scalars['Boolean']>;
  mental?: Maybe<Scalars['Int']>;
  physical?: Maybe<Scalars['Int']>;
  removedCards?: Maybe<Scalars['jsonb']>;
  specialXp?: Maybe<Scalars['jsonb']>;
  spentXp?: Maybe<Scalars['Int']>;
  storyAssets?: Maybe<Scalars['jsonb']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "investigator_data" */
export type Investigator_DataAddedCardsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "investigator_data" */
export type Investigator_DataCardCountsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "investigator_data" */
export type Investigator_DataIgnoreStoryAssetsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "investigator_data" */
export type Investigator_DataRemovedCardsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "investigator_data" */
export type Investigator_DataSpecialXpArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "investigator_data" */
export type Investigator_DataStoryAssetsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "investigator_data" */
export type Investigator_Data_Aggregate = {
  __typename?: 'investigator_data_aggregate';
  aggregate?: Maybe<Investigator_Data_Aggregate_Fields>;
  nodes: Array<Investigator_Data>;
};

export type Investigator_Data_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Investigator_Data_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Investigator_Data_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Investigator_Data_Aggregate_Bool_Exp_Count>;
};

export type Investigator_Data_Aggregate_Bool_Exp_Bool_And = {
  arguments: Investigator_Data_Select_Column_Investigator_Data_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Investigator_Data_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Investigator_Data_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Investigator_Data_Select_Column_Investigator_Data_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Investigator_Data_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Investigator_Data_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Investigator_Data_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Investigator_Data_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "investigator_data" */
export type Investigator_Data_Aggregate_Fields = {
  __typename?: 'investigator_data_aggregate_fields';
  avg?: Maybe<Investigator_Data_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Investigator_Data_Max_Fields>;
  min?: Maybe<Investigator_Data_Min_Fields>;
  stddev?: Maybe<Investigator_Data_Stddev_Fields>;
  stddev_pop?: Maybe<Investigator_Data_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Investigator_Data_Stddev_Samp_Fields>;
  sum?: Maybe<Investigator_Data_Sum_Fields>;
  var_pop?: Maybe<Investigator_Data_Var_Pop_Fields>;
  var_samp?: Maybe<Investigator_Data_Var_Samp_Fields>;
  variance?: Maybe<Investigator_Data_Variance_Fields>;
};


/** aggregate fields of "investigator_data" */
export type Investigator_Data_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Investigator_Data_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "investigator_data" */
export type Investigator_Data_Aggregate_Order_By = {
  avg?: InputMaybe<Investigator_Data_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Investigator_Data_Max_Order_By>;
  min?: InputMaybe<Investigator_Data_Min_Order_By>;
  stddev?: InputMaybe<Investigator_Data_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Investigator_Data_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Investigator_Data_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Investigator_Data_Sum_Order_By>;
  var_pop?: InputMaybe<Investigator_Data_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Investigator_Data_Var_Samp_Order_By>;
  variance?: InputMaybe<Investigator_Data_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Investigator_Data_Append_Input = {
  addedCards?: InputMaybe<Scalars['jsonb']>;
  cardCounts?: InputMaybe<Scalars['jsonb']>;
  ignoreStoryAssets?: InputMaybe<Scalars['jsonb']>;
  removedCards?: InputMaybe<Scalars['jsonb']>;
  specialXp?: InputMaybe<Scalars['jsonb']>;
  storyAssets?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "investigator_data" */
export type Investigator_Data_Arr_Rel_Insert_Input = {
  data: Array<Investigator_Data_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Investigator_Data_On_Conflict>;
};

/** aggregate avg on columns */
export type Investigator_Data_Avg_Fields = {
  __typename?: 'investigator_data_avg_fields';
  availableXp?: Maybe<Scalars['Float']>;
  campaign_id?: Maybe<Scalars['Float']>;
  mental?: Maybe<Scalars['Float']>;
  physical?: Maybe<Scalars['Float']>;
  spentXp?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "investigator_data" */
export type Investigator_Data_Avg_Order_By = {
  availableXp?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  mental?: InputMaybe<Order_By>;
  physical?: InputMaybe<Order_By>;
  spentXp?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "investigator_data". All fields are combined with a logical 'AND'. */
export type Investigator_Data_Bool_Exp = {
  _and?: InputMaybe<Array<Investigator_Data_Bool_Exp>>;
  _not?: InputMaybe<Investigator_Data_Bool_Exp>;
  _or?: InputMaybe<Array<Investigator_Data_Bool_Exp>>;
  addedCards?: InputMaybe<Jsonb_Comparison_Exp>;
  availableXp?: InputMaybe<Int_Comparison_Exp>;
  campaign_data?: InputMaybe<Campaign_Bool_Exp>;
  campaign_id?: InputMaybe<Int_Comparison_Exp>;
  cardCounts?: InputMaybe<Jsonb_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  ignoreStoryAssets?: InputMaybe<Jsonb_Comparison_Exp>;
  insane?: InputMaybe<Boolean_Comparison_Exp>;
  investigator?: InputMaybe<String_Comparison_Exp>;
  killed?: InputMaybe<Boolean_Comparison_Exp>;
  mental?: InputMaybe<Int_Comparison_Exp>;
  physical?: InputMaybe<Int_Comparison_Exp>;
  removedCards?: InputMaybe<Jsonb_Comparison_Exp>;
  specialXp?: InputMaybe<Jsonb_Comparison_Exp>;
  spentXp?: InputMaybe<Int_Comparison_Exp>;
  storyAssets?: InputMaybe<Jsonb_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "investigator_data" */
export enum Investigator_Data_Constraint {
  /** unique or primary key constraint on columns "campaign_id", "investigator" */
  InvestigatorDataPkey = 'investigator_data_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Investigator_Data_Delete_At_Path_Input = {
  addedCards?: InputMaybe<Array<Scalars['String']>>;
  cardCounts?: InputMaybe<Array<Scalars['String']>>;
  ignoreStoryAssets?: InputMaybe<Array<Scalars['String']>>;
  removedCards?: InputMaybe<Array<Scalars['String']>>;
  specialXp?: InputMaybe<Array<Scalars['String']>>;
  storyAssets?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Investigator_Data_Delete_Elem_Input = {
  addedCards?: InputMaybe<Scalars['Int']>;
  cardCounts?: InputMaybe<Scalars['Int']>;
  ignoreStoryAssets?: InputMaybe<Scalars['Int']>;
  removedCards?: InputMaybe<Scalars['Int']>;
  specialXp?: InputMaybe<Scalars['Int']>;
  storyAssets?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Investigator_Data_Delete_Key_Input = {
  addedCards?: InputMaybe<Scalars['String']>;
  cardCounts?: InputMaybe<Scalars['String']>;
  ignoreStoryAssets?: InputMaybe<Scalars['String']>;
  removedCards?: InputMaybe<Scalars['String']>;
  specialXp?: InputMaybe<Scalars['String']>;
  storyAssets?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "investigator_data" */
export type Investigator_Data_Inc_Input = {
  availableXp?: InputMaybe<Scalars['Int']>;
  campaign_id?: InputMaybe<Scalars['Int']>;
  mental?: InputMaybe<Scalars['Int']>;
  physical?: InputMaybe<Scalars['Int']>;
  spentXp?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "investigator_data" */
export type Investigator_Data_Insert_Input = {
  addedCards?: InputMaybe<Scalars['jsonb']>;
  availableXp?: InputMaybe<Scalars['Int']>;
  campaign_data?: InputMaybe<Campaign_Obj_Rel_Insert_Input>;
  campaign_id?: InputMaybe<Scalars['Int']>;
  cardCounts?: InputMaybe<Scalars['jsonb']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  ignoreStoryAssets?: InputMaybe<Scalars['jsonb']>;
  insane?: InputMaybe<Scalars['Boolean']>;
  investigator?: InputMaybe<Scalars['String']>;
  killed?: InputMaybe<Scalars['Boolean']>;
  mental?: InputMaybe<Scalars['Int']>;
  physical?: InputMaybe<Scalars['Int']>;
  removedCards?: InputMaybe<Scalars['jsonb']>;
  specialXp?: InputMaybe<Scalars['jsonb']>;
  spentXp?: InputMaybe<Scalars['Int']>;
  storyAssets?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Investigator_Data_Max_Fields = {
  __typename?: 'investigator_data_max_fields';
  availableXp?: Maybe<Scalars['Int']>;
  campaign_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  investigator?: Maybe<Scalars['String']>;
  mental?: Maybe<Scalars['Int']>;
  physical?: Maybe<Scalars['Int']>;
  spentXp?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "investigator_data" */
export type Investigator_Data_Max_Order_By = {
  availableXp?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  investigator?: InputMaybe<Order_By>;
  mental?: InputMaybe<Order_By>;
  physical?: InputMaybe<Order_By>;
  spentXp?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Investigator_Data_Min_Fields = {
  __typename?: 'investigator_data_min_fields';
  availableXp?: Maybe<Scalars['Int']>;
  campaign_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  investigator?: Maybe<Scalars['String']>;
  mental?: Maybe<Scalars['Int']>;
  physical?: Maybe<Scalars['Int']>;
  spentXp?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "investigator_data" */
export type Investigator_Data_Min_Order_By = {
  availableXp?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  investigator?: InputMaybe<Order_By>;
  mental?: InputMaybe<Order_By>;
  physical?: InputMaybe<Order_By>;
  spentXp?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "investigator_data" */
export type Investigator_Data_Mutation_Response = {
  __typename?: 'investigator_data_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Investigator_Data>;
};

/** input type for inserting object relation for remote table "investigator_data" */
export type Investigator_Data_Obj_Rel_Insert_Input = {
  data: Investigator_Data_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Investigator_Data_On_Conflict>;
};

/** on_conflict condition type for table "investigator_data" */
export type Investigator_Data_On_Conflict = {
  constraint: Investigator_Data_Constraint;
  update_columns?: Array<Investigator_Data_Update_Column>;
  where?: InputMaybe<Investigator_Data_Bool_Exp>;
};

/** Ordering options when selecting data from "investigator_data". */
export type Investigator_Data_Order_By = {
  addedCards?: InputMaybe<Order_By>;
  availableXp?: InputMaybe<Order_By>;
  campaign_data?: InputMaybe<Campaign_Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  cardCounts?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ignoreStoryAssets?: InputMaybe<Order_By>;
  insane?: InputMaybe<Order_By>;
  investigator?: InputMaybe<Order_By>;
  killed?: InputMaybe<Order_By>;
  mental?: InputMaybe<Order_By>;
  physical?: InputMaybe<Order_By>;
  removedCards?: InputMaybe<Order_By>;
  specialXp?: InputMaybe<Order_By>;
  spentXp?: InputMaybe<Order_By>;
  storyAssets?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: investigator_data */
export type Investigator_Data_Pk_Columns_Input = {
  campaign_id: Scalars['Int'];
  investigator: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Investigator_Data_Prepend_Input = {
  addedCards?: InputMaybe<Scalars['jsonb']>;
  cardCounts?: InputMaybe<Scalars['jsonb']>;
  ignoreStoryAssets?: InputMaybe<Scalars['jsonb']>;
  removedCards?: InputMaybe<Scalars['jsonb']>;
  specialXp?: InputMaybe<Scalars['jsonb']>;
  storyAssets?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "investigator_data" */
export enum Investigator_Data_Select_Column {
  /** column name */
  AddedCards = 'addedCards',
  /** column name */
  AvailableXp = 'availableXp',
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  CardCounts = 'cardCounts',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  IgnoreStoryAssets = 'ignoreStoryAssets',
  /** column name */
  Insane = 'insane',
  /** column name */
  Investigator = 'investigator',
  /** column name */
  Killed = 'killed',
  /** column name */
  Mental = 'mental',
  /** column name */
  Physical = 'physical',
  /** column name */
  RemovedCards = 'removedCards',
  /** column name */
  SpecialXp = 'specialXp',
  /** column name */
  SpentXp = 'spentXp',
  /** column name */
  StoryAssets = 'storyAssets',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "investigator_data_aggregate_bool_exp_bool_and_arguments_columns" columns of table "investigator_data" */
export enum Investigator_Data_Select_Column_Investigator_Data_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Insane = 'insane',
  /** column name */
  Killed = 'killed'
}

/** select "investigator_data_aggregate_bool_exp_bool_or_arguments_columns" columns of table "investigator_data" */
export enum Investigator_Data_Select_Column_Investigator_Data_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Insane = 'insane',
  /** column name */
  Killed = 'killed'
}

/** input type for updating data in table "investigator_data" */
export type Investigator_Data_Set_Input = {
  addedCards?: InputMaybe<Scalars['jsonb']>;
  availableXp?: InputMaybe<Scalars['Int']>;
  campaign_id?: InputMaybe<Scalars['Int']>;
  cardCounts?: InputMaybe<Scalars['jsonb']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  ignoreStoryAssets?: InputMaybe<Scalars['jsonb']>;
  insane?: InputMaybe<Scalars['Boolean']>;
  investigator?: InputMaybe<Scalars['String']>;
  killed?: InputMaybe<Scalars['Boolean']>;
  mental?: InputMaybe<Scalars['Int']>;
  physical?: InputMaybe<Scalars['Int']>;
  removedCards?: InputMaybe<Scalars['jsonb']>;
  specialXp?: InputMaybe<Scalars['jsonb']>;
  spentXp?: InputMaybe<Scalars['Int']>;
  storyAssets?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Investigator_Data_Stddev_Fields = {
  __typename?: 'investigator_data_stddev_fields';
  availableXp?: Maybe<Scalars['Float']>;
  campaign_id?: Maybe<Scalars['Float']>;
  mental?: Maybe<Scalars['Float']>;
  physical?: Maybe<Scalars['Float']>;
  spentXp?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "investigator_data" */
export type Investigator_Data_Stddev_Order_By = {
  availableXp?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  mental?: InputMaybe<Order_By>;
  physical?: InputMaybe<Order_By>;
  spentXp?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Investigator_Data_Stddev_Pop_Fields = {
  __typename?: 'investigator_data_stddev_pop_fields';
  availableXp?: Maybe<Scalars['Float']>;
  campaign_id?: Maybe<Scalars['Float']>;
  mental?: Maybe<Scalars['Float']>;
  physical?: Maybe<Scalars['Float']>;
  spentXp?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "investigator_data" */
export type Investigator_Data_Stddev_Pop_Order_By = {
  availableXp?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  mental?: InputMaybe<Order_By>;
  physical?: InputMaybe<Order_By>;
  spentXp?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Investigator_Data_Stddev_Samp_Fields = {
  __typename?: 'investigator_data_stddev_samp_fields';
  availableXp?: Maybe<Scalars['Float']>;
  campaign_id?: Maybe<Scalars['Float']>;
  mental?: Maybe<Scalars['Float']>;
  physical?: Maybe<Scalars['Float']>;
  spentXp?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "investigator_data" */
export type Investigator_Data_Stddev_Samp_Order_By = {
  availableXp?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  mental?: InputMaybe<Order_By>;
  physical?: InputMaybe<Order_By>;
  spentXp?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "investigator_data" */
export type Investigator_Data_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Investigator_Data_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Investigator_Data_Stream_Cursor_Value_Input = {
  addedCards?: InputMaybe<Scalars['jsonb']>;
  availableXp?: InputMaybe<Scalars['Int']>;
  campaign_id?: InputMaybe<Scalars['Int']>;
  cardCounts?: InputMaybe<Scalars['jsonb']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  ignoreStoryAssets?: InputMaybe<Scalars['jsonb']>;
  insane?: InputMaybe<Scalars['Boolean']>;
  investigator?: InputMaybe<Scalars['String']>;
  killed?: InputMaybe<Scalars['Boolean']>;
  mental?: InputMaybe<Scalars['Int']>;
  physical?: InputMaybe<Scalars['Int']>;
  removedCards?: InputMaybe<Scalars['jsonb']>;
  specialXp?: InputMaybe<Scalars['jsonb']>;
  spentXp?: InputMaybe<Scalars['Int']>;
  storyAssets?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Investigator_Data_Sum_Fields = {
  __typename?: 'investigator_data_sum_fields';
  availableXp?: Maybe<Scalars['Int']>;
  campaign_id?: Maybe<Scalars['Int']>;
  mental?: Maybe<Scalars['Int']>;
  physical?: Maybe<Scalars['Int']>;
  spentXp?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "investigator_data" */
export type Investigator_Data_Sum_Order_By = {
  availableXp?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  mental?: InputMaybe<Order_By>;
  physical?: InputMaybe<Order_By>;
  spentXp?: InputMaybe<Order_By>;
};

/** update columns of table "investigator_data" */
export enum Investigator_Data_Update_Column {
  /** column name */
  AddedCards = 'addedCards',
  /** column name */
  AvailableXp = 'availableXp',
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  CardCounts = 'cardCounts',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  IgnoreStoryAssets = 'ignoreStoryAssets',
  /** column name */
  Insane = 'insane',
  /** column name */
  Investigator = 'investigator',
  /** column name */
  Killed = 'killed',
  /** column name */
  Mental = 'mental',
  /** column name */
  Physical = 'physical',
  /** column name */
  RemovedCards = 'removedCards',
  /** column name */
  SpecialXp = 'specialXp',
  /** column name */
  SpentXp = 'spentXp',
  /** column name */
  StoryAssets = 'storyAssets',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Investigator_Data_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Investigator_Data_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Investigator_Data_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Investigator_Data_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Investigator_Data_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Investigator_Data_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Investigator_Data_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Investigator_Data_Set_Input>;
  where: Investigator_Data_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Investigator_Data_Var_Pop_Fields = {
  __typename?: 'investigator_data_var_pop_fields';
  availableXp?: Maybe<Scalars['Float']>;
  campaign_id?: Maybe<Scalars['Float']>;
  mental?: Maybe<Scalars['Float']>;
  physical?: Maybe<Scalars['Float']>;
  spentXp?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "investigator_data" */
export type Investigator_Data_Var_Pop_Order_By = {
  availableXp?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  mental?: InputMaybe<Order_By>;
  physical?: InputMaybe<Order_By>;
  spentXp?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Investigator_Data_Var_Samp_Fields = {
  __typename?: 'investigator_data_var_samp_fields';
  availableXp?: Maybe<Scalars['Float']>;
  campaign_id?: Maybe<Scalars['Float']>;
  mental?: Maybe<Scalars['Float']>;
  physical?: Maybe<Scalars['Float']>;
  spentXp?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "investigator_data" */
export type Investigator_Data_Var_Samp_Order_By = {
  availableXp?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  mental?: InputMaybe<Order_By>;
  physical?: InputMaybe<Order_By>;
  spentXp?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Investigator_Data_Variance_Fields = {
  __typename?: 'investigator_data_variance_fields';
  availableXp?: Maybe<Scalars['Float']>;
  campaign_id?: Maybe<Scalars['Float']>;
  mental?: Maybe<Scalars['Float']>;
  physical?: Maybe<Scalars['Float']>;
  spentXp?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "investigator_data" */
export type Investigator_Data_Variance_Order_By = {
  availableXp?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  mental?: InputMaybe<Order_By>;
  physical?: InputMaybe<Order_By>;
  spentXp?: InputMaybe<Order_By>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "latest_decks" */
export type Latest_Decks = {
  __typename?: 'latest_decks';
  /** An object relationship */
  campaign?: Maybe<Campaign>;
  campaign_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  deck?: Maybe<Campaign_Deck>;
  id?: Maybe<Scalars['Int']>;
  owner_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "latest_decks" */
export type Latest_Decks_Aggregate = {
  __typename?: 'latest_decks_aggregate';
  aggregate?: Maybe<Latest_Decks_Aggregate_Fields>;
  nodes: Array<Latest_Decks>;
};

export type Latest_Decks_Aggregate_Bool_Exp = {
  count?: InputMaybe<Latest_Decks_Aggregate_Bool_Exp_Count>;
};

export type Latest_Decks_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Latest_Decks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Latest_Decks_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "latest_decks" */
export type Latest_Decks_Aggregate_Fields = {
  __typename?: 'latest_decks_aggregate_fields';
  avg?: Maybe<Latest_Decks_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Latest_Decks_Max_Fields>;
  min?: Maybe<Latest_Decks_Min_Fields>;
  stddev?: Maybe<Latest_Decks_Stddev_Fields>;
  stddev_pop?: Maybe<Latest_Decks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Latest_Decks_Stddev_Samp_Fields>;
  sum?: Maybe<Latest_Decks_Sum_Fields>;
  var_pop?: Maybe<Latest_Decks_Var_Pop_Fields>;
  var_samp?: Maybe<Latest_Decks_Var_Samp_Fields>;
  variance?: Maybe<Latest_Decks_Variance_Fields>;
};


/** aggregate fields of "latest_decks" */
export type Latest_Decks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Latest_Decks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "latest_decks" */
export type Latest_Decks_Aggregate_Order_By = {
  avg?: InputMaybe<Latest_Decks_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Latest_Decks_Max_Order_By>;
  min?: InputMaybe<Latest_Decks_Min_Order_By>;
  stddev?: InputMaybe<Latest_Decks_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Latest_Decks_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Latest_Decks_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Latest_Decks_Sum_Order_By>;
  var_pop?: InputMaybe<Latest_Decks_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Latest_Decks_Var_Samp_Order_By>;
  variance?: InputMaybe<Latest_Decks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "latest_decks" */
export type Latest_Decks_Arr_Rel_Insert_Input = {
  data: Array<Latest_Decks_Insert_Input>;
};

/** aggregate avg on columns */
export type Latest_Decks_Avg_Fields = {
  __typename?: 'latest_decks_avg_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "latest_decks" */
export type Latest_Decks_Avg_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "latest_decks". All fields are combined with a logical 'AND'. */
export type Latest_Decks_Bool_Exp = {
  _and?: InputMaybe<Array<Latest_Decks_Bool_Exp>>;
  _not?: InputMaybe<Latest_Decks_Bool_Exp>;
  _or?: InputMaybe<Array<Latest_Decks_Bool_Exp>>;
  campaign?: InputMaybe<Campaign_Bool_Exp>;
  campaign_id?: InputMaybe<Int_Comparison_Exp>;
  deck?: InputMaybe<Campaign_Deck_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  owner_id?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "latest_decks" */
export type Latest_Decks_Inc_Input = {
  campaign_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "latest_decks" */
export type Latest_Decks_Insert_Input = {
  campaign?: InputMaybe<Campaign_Obj_Rel_Insert_Input>;
  campaign_id?: InputMaybe<Scalars['Int']>;
  deck?: InputMaybe<Campaign_Deck_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  owner_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Latest_Decks_Max_Fields = {
  __typename?: 'latest_decks_max_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  owner_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "latest_decks" */
export type Latest_Decks_Max_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Latest_Decks_Min_Fields = {
  __typename?: 'latest_decks_min_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  owner_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "latest_decks" */
export type Latest_Decks_Min_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "latest_decks" */
export type Latest_Decks_Mutation_Response = {
  __typename?: 'latest_decks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Latest_Decks>;
};

/** Ordering options when selecting data from "latest_decks". */
export type Latest_Decks_Order_By = {
  campaign?: InputMaybe<Campaign_Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  deck?: InputMaybe<Campaign_Deck_Order_By>;
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** select columns of table "latest_decks" */
export enum Latest_Decks_Select_Column {
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  Id = 'id',
  /** column name */
  OwnerId = 'owner_id'
}

/** input type for updating data in table "latest_decks" */
export type Latest_Decks_Set_Input = {
  campaign_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  owner_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Latest_Decks_Stddev_Fields = {
  __typename?: 'latest_decks_stddev_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "latest_decks" */
export type Latest_Decks_Stddev_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Latest_Decks_Stddev_Pop_Fields = {
  __typename?: 'latest_decks_stddev_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "latest_decks" */
export type Latest_Decks_Stddev_Pop_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Latest_Decks_Stddev_Samp_Fields = {
  __typename?: 'latest_decks_stddev_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "latest_decks" */
export type Latest_Decks_Stddev_Samp_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "latest_decks" */
export type Latest_Decks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Latest_Decks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Latest_Decks_Stream_Cursor_Value_Input = {
  campaign_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  owner_id?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Latest_Decks_Sum_Fields = {
  __typename?: 'latest_decks_sum_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "latest_decks" */
export type Latest_Decks_Sum_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

export type Latest_Decks_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Latest_Decks_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Latest_Decks_Set_Input>;
  where: Latest_Decks_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Latest_Decks_Var_Pop_Fields = {
  __typename?: 'latest_decks_var_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "latest_decks" */
export type Latest_Decks_Var_Pop_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Latest_Decks_Var_Samp_Fields = {
  __typename?: 'latest_decks_var_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "latest_decks" */
export type Latest_Decks_Var_Samp_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Latest_Decks_Variance_Fields = {
  __typename?: 'latest_decks_variance_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "latest_decks" */
export type Latest_Decks_Variance_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "local_decks" */
export type Local_Decks = {
  __typename?: 'local_decks';
  /** An object relationship */
  campaign?: Maybe<Campaign>;
  campaign_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  deck?: Maybe<Campaign_Deck>;
  id?: Maybe<Scalars['Int']>;
  owner_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "local_decks" */
export type Local_Decks_Aggregate = {
  __typename?: 'local_decks_aggregate';
  aggregate?: Maybe<Local_Decks_Aggregate_Fields>;
  nodes: Array<Local_Decks>;
};

export type Local_Decks_Aggregate_Bool_Exp = {
  count?: InputMaybe<Local_Decks_Aggregate_Bool_Exp_Count>;
};

export type Local_Decks_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Local_Decks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Local_Decks_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "local_decks" */
export type Local_Decks_Aggregate_Fields = {
  __typename?: 'local_decks_aggregate_fields';
  avg?: Maybe<Local_Decks_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Local_Decks_Max_Fields>;
  min?: Maybe<Local_Decks_Min_Fields>;
  stddev?: Maybe<Local_Decks_Stddev_Fields>;
  stddev_pop?: Maybe<Local_Decks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Local_Decks_Stddev_Samp_Fields>;
  sum?: Maybe<Local_Decks_Sum_Fields>;
  var_pop?: Maybe<Local_Decks_Var_Pop_Fields>;
  var_samp?: Maybe<Local_Decks_Var_Samp_Fields>;
  variance?: Maybe<Local_Decks_Variance_Fields>;
};


/** aggregate fields of "local_decks" */
export type Local_Decks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Local_Decks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "local_decks" */
export type Local_Decks_Aggregate_Order_By = {
  avg?: InputMaybe<Local_Decks_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Local_Decks_Max_Order_By>;
  min?: InputMaybe<Local_Decks_Min_Order_By>;
  stddev?: InputMaybe<Local_Decks_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Local_Decks_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Local_Decks_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Local_Decks_Sum_Order_By>;
  var_pop?: InputMaybe<Local_Decks_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Local_Decks_Var_Samp_Order_By>;
  variance?: InputMaybe<Local_Decks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "local_decks" */
export type Local_Decks_Arr_Rel_Insert_Input = {
  data: Array<Local_Decks_Insert_Input>;
};

/** aggregate avg on columns */
export type Local_Decks_Avg_Fields = {
  __typename?: 'local_decks_avg_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "local_decks" */
export type Local_Decks_Avg_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "local_decks". All fields are combined with a logical 'AND'. */
export type Local_Decks_Bool_Exp = {
  _and?: InputMaybe<Array<Local_Decks_Bool_Exp>>;
  _not?: InputMaybe<Local_Decks_Bool_Exp>;
  _or?: InputMaybe<Array<Local_Decks_Bool_Exp>>;
  campaign?: InputMaybe<Campaign_Bool_Exp>;
  campaign_id?: InputMaybe<Int_Comparison_Exp>;
  deck?: InputMaybe<Campaign_Deck_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  owner_id?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "local_decks" */
export type Local_Decks_Inc_Input = {
  campaign_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "local_decks" */
export type Local_Decks_Insert_Input = {
  campaign?: InputMaybe<Campaign_Obj_Rel_Insert_Input>;
  campaign_id?: InputMaybe<Scalars['Int']>;
  deck?: InputMaybe<Campaign_Deck_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  owner_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Local_Decks_Max_Fields = {
  __typename?: 'local_decks_max_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  owner_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "local_decks" */
export type Local_Decks_Max_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Local_Decks_Min_Fields = {
  __typename?: 'local_decks_min_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  owner_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "local_decks" */
export type Local_Decks_Min_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "local_decks" */
export type Local_Decks_Mutation_Response = {
  __typename?: 'local_decks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Local_Decks>;
};

/** Ordering options when selecting data from "local_decks". */
export type Local_Decks_Order_By = {
  campaign?: InputMaybe<Campaign_Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  deck?: InputMaybe<Campaign_Deck_Order_By>;
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
};

/** select columns of table "local_decks" */
export enum Local_Decks_Select_Column {
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  Id = 'id',
  /** column name */
  OwnerId = 'owner_id'
}

/** input type for updating data in table "local_decks" */
export type Local_Decks_Set_Input = {
  campaign_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  owner_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Local_Decks_Stddev_Fields = {
  __typename?: 'local_decks_stddev_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "local_decks" */
export type Local_Decks_Stddev_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Local_Decks_Stddev_Pop_Fields = {
  __typename?: 'local_decks_stddev_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "local_decks" */
export type Local_Decks_Stddev_Pop_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Local_Decks_Stddev_Samp_Fields = {
  __typename?: 'local_decks_stddev_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "local_decks" */
export type Local_Decks_Stddev_Samp_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "local_decks" */
export type Local_Decks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Local_Decks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Local_Decks_Stream_Cursor_Value_Input = {
  campaign_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  owner_id?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Local_Decks_Sum_Fields = {
  __typename?: 'local_decks_sum_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "local_decks" */
export type Local_Decks_Sum_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

export type Local_Decks_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Local_Decks_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Local_Decks_Set_Input>;
  where: Local_Decks_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Local_Decks_Var_Pop_Fields = {
  __typename?: 'local_decks_var_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "local_decks" */
export type Local_Decks_Var_Pop_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Local_Decks_Var_Samp_Fields = {
  __typename?: 'local_decks_var_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "local_decks" */
export type Local_Decks_Var_Samp_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Local_Decks_Variance_Fields = {
  __typename?: 'local_decks_variance_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "local_decks" */
export type Local_Decks_Variance_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "all_card" */
  delete_all_card?: Maybe<All_Card_Mutation_Response>;
  /** delete single row from the table: "all_card" */
  delete_all_card_by_pk?: Maybe<All_Card>;
  /** delete data from the table: "all_card_text" */
  delete_all_card_text?: Maybe<All_Card_Text_Mutation_Response>;
  /** delete single row from the table: "all_card_text" */
  delete_all_card_text_by_pk?: Maybe<All_Card_Text>;
  /** delete data from the table: "all_card_updated" */
  delete_all_card_updated?: Maybe<All_Card_Updated_Mutation_Response>;
  /** delete single row from the table: "all_card_updated" */
  delete_all_card_updated_by_pk?: Maybe<All_Card_Updated>;
  /** delete data from the table: "base_decks" */
  delete_base_decks?: Maybe<Base_Decks_Mutation_Response>;
  /** delete data from the table: "campaign" */
  delete_campaign?: Maybe<Campaign_Mutation_Response>;
  /** delete data from the table: "campaign_access" */
  delete_campaign_access?: Maybe<Campaign_Access_Mutation_Response>;
  /** delete single row from the table: "campaign_access" */
  delete_campaign_access_by_pk?: Maybe<Campaign_Access>;
  /** delete single row from the table: "campaign" */
  delete_campaign_by_pk?: Maybe<Campaign>;
  /** delete data from the table: "campaign_deck" */
  delete_campaign_deck?: Maybe<Campaign_Deck_Mutation_Response>;
  /** delete single row from the table: "campaign_deck" */
  delete_campaign_deck_by_pk?: Maybe<Campaign_Deck>;
  /** delete data from the table: "campaign_difficulty" */
  delete_campaign_difficulty?: Maybe<Campaign_Difficulty_Mutation_Response>;
  /** delete single row from the table: "campaign_difficulty" */
  delete_campaign_difficulty_by_pk?: Maybe<Campaign_Difficulty>;
  /** delete data from the table: "campaign_guide" */
  delete_campaign_guide?: Maybe<Campaign_Guide_Mutation_Response>;
  /** delete data from the table: "campaign_investigator" */
  delete_campaign_investigator?: Maybe<Campaign_Investigator_Mutation_Response>;
  /** delete single row from the table: "campaign_investigator" */
  delete_campaign_investigator_by_pk?: Maybe<Campaign_Investigator>;
  /** delete data from the table: "card" */
  delete_card?: Maybe<Card_Mutation_Response>;
  /** delete single row from the table: "card" */
  delete_card_by_pk?: Maybe<Card>;
  /** delete data from the table: "card_cycle" */
  delete_card_cycle?: Maybe<Card_Cycle_Mutation_Response>;
  /** delete single row from the table: "card_cycle" */
  delete_card_cycle_by_pk?: Maybe<Card_Cycle>;
  /** delete data from the table: "card_encounter_set" */
  delete_card_encounter_set?: Maybe<Card_Encounter_Set_Mutation_Response>;
  /** delete single row from the table: "card_encounter_set" */
  delete_card_encounter_set_by_pk?: Maybe<Card_Encounter_Set>;
  /** delete data from the table: "card_pack" */
  delete_card_pack?: Maybe<Card_Pack_Mutation_Response>;
  /** delete single row from the table: "card_pack" */
  delete_card_pack_by_pk?: Maybe<Card_Pack>;
  /** delete data from the table: "card_subtype_name" */
  delete_card_subtype_name?: Maybe<Card_Subtype_Name_Mutation_Response>;
  /** delete single row from the table: "card_subtype_name" */
  delete_card_subtype_name_by_pk?: Maybe<Card_Subtype_Name>;
  /** delete data from the table: "card_text" */
  delete_card_text?: Maybe<Card_Text_Mutation_Response>;
  /** delete single row from the table: "card_text" */
  delete_card_text_by_pk?: Maybe<Card_Text>;
  /** delete data from the table: "card_type_code" */
  delete_card_type_code?: Maybe<Card_Type_Code_Mutation_Response>;
  /** delete single row from the table: "card_type_code" */
  delete_card_type_code_by_pk?: Maybe<Card_Type_Code>;
  /** delete data from the table: "card_type_name" */
  delete_card_type_name?: Maybe<Card_Type_Name_Mutation_Response>;
  /** delete single row from the table: "card_type_name" */
  delete_card_type_name_by_pk?: Maybe<Card_Type_Name>;
  /** delete data from the table: "chaos_bag_result" */
  delete_chaos_bag_result?: Maybe<Chaos_Bag_Result_Mutation_Response>;
  /** delete single row from the table: "chaos_bag_result" */
  delete_chaos_bag_result_by_pk?: Maybe<Chaos_Bag_Result>;
  /** delete data from the table: "chaos_bag_tarot_mode" */
  delete_chaos_bag_tarot_mode?: Maybe<Chaos_Bag_Tarot_Mode_Mutation_Response>;
  /** delete single row from the table: "chaos_bag_tarot_mode" */
  delete_chaos_bag_tarot_mode_by_pk?: Maybe<Chaos_Bag_Tarot_Mode>;
  /** delete data from the table: "cycle" */
  delete_cycle?: Maybe<Cycle_Mutation_Response>;
  /** delete single row from the table: "cycle" */
  delete_cycle_by_pk?: Maybe<Cycle>;
  /** delete data from the table: "cycle_name" */
  delete_cycle_name?: Maybe<Cycle_Name_Mutation_Response>;
  /** delete single row from the table: "cycle_name" */
  delete_cycle_name_by_pk?: Maybe<Cycle_Name>;
  /** delete data from the table: "faction_name" */
  delete_faction_name?: Maybe<Faction_Name_Mutation_Response>;
  /** delete single row from the table: "faction_name" */
  delete_faction_name_by_pk?: Maybe<Faction_Name>;
  /** delete data from the table: "faq" */
  delete_faq?: Maybe<Faq_Mutation_Response>;
  /** delete single row from the table: "faq" */
  delete_faq_by_pk?: Maybe<Faq>;
  /** delete data from the table: "faq_text" */
  delete_faq_text?: Maybe<Faq_Text_Mutation_Response>;
  /** delete single row from the table: "faq_text" */
  delete_faq_text_by_pk?: Maybe<Faq_Text>;
  /** delete data from the table: "friend_status" */
  delete_friend_status?: Maybe<Friend_Status_Mutation_Response>;
  /** delete single row from the table: "friend_status" */
  delete_friend_status_by_pk?: Maybe<Friend_Status>;
  /** delete data from the table: "friend_status_type" */
  delete_friend_status_type?: Maybe<Friend_Status_Type_Mutation_Response>;
  /** delete single row from the table: "friend_status_type" */
  delete_friend_status_type_by_pk?: Maybe<Friend_Status_Type>;
  /** delete data from the table: "full_card" */
  delete_full_card?: Maybe<Full_Card_Mutation_Response>;
  /** delete single row from the table: "full_card" */
  delete_full_card_by_pk?: Maybe<Full_Card>;
  /** delete data from the table: "full_card_text" */
  delete_full_card_text?: Maybe<Full_Card_Text_Mutation_Response>;
  /** delete single row from the table: "full_card_text" */
  delete_full_card_text_by_pk?: Maybe<Full_Card_Text>;
  /** delete data from the table: "gender" */
  delete_gender?: Maybe<Gender_Mutation_Response>;
  /** delete single row from the table: "gender" */
  delete_gender_by_pk?: Maybe<Gender>;
  /** delete data from the table: "guide_achievement" */
  delete_guide_achievement?: Maybe<Guide_Achievement_Mutation_Response>;
  /** delete single row from the table: "guide_achievement" */
  delete_guide_achievement_by_pk?: Maybe<Guide_Achievement>;
  /** delete data from the table: "guide_input" */
  delete_guide_input?: Maybe<Guide_Input_Mutation_Response>;
  /** delete single row from the table: "guide_input" */
  delete_guide_input_by_pk?: Maybe<Guide_Input>;
  /** delete data from the table: "investigator_data" */
  delete_investigator_data?: Maybe<Investigator_Data_Mutation_Response>;
  /** delete single row from the table: "investigator_data" */
  delete_investigator_data_by_pk?: Maybe<Investigator_Data>;
  /** delete data from the table: "latest_decks" */
  delete_latest_decks?: Maybe<Latest_Decks_Mutation_Response>;
  /** delete data from the table: "local_decks" */
  delete_local_decks?: Maybe<Local_Decks_Mutation_Response>;
  /** delete data from the table: "pack" */
  delete_pack?: Maybe<Pack_Mutation_Response>;
  /** delete single row from the table: "pack" */
  delete_pack_by_pk?: Maybe<Pack>;
  /** delete data from the table: "pack_name" */
  delete_pack_name?: Maybe<Pack_Name_Mutation_Response>;
  /** delete single row from the table: "pack_name" */
  delete_pack_name_by_pk?: Maybe<Pack_Name>;
  /** delete data from the table: "rangers.aspect" */
  delete_rangers_aspect?: Maybe<Rangers_Aspect_Mutation_Response>;
  /** delete single row from the table: "rangers.aspect" */
  delete_rangers_aspect_by_pk?: Maybe<Rangers_Aspect>;
  /** delete data from the table: "rangers.aspect_text" */
  delete_rangers_aspect_text?: Maybe<Rangers_Aspect_Text_Mutation_Response>;
  /** delete single row from the table: "rangers.aspect_text" */
  delete_rangers_aspect_text_by_pk?: Maybe<Rangers_Aspect_Text>;
  /** delete data from the table: "rangers.card" */
  delete_rangers_card?: Maybe<Rangers_Card_Mutation_Response>;
  /** delete single row from the table: "rangers.card" */
  delete_rangers_card_by_pk?: Maybe<Rangers_Card>;
  /** delete data from the table: "rangers.card_text" */
  delete_rangers_card_text?: Maybe<Rangers_Card_Text_Mutation_Response>;
  /** delete single row from the table: "rangers.card_text" */
  delete_rangers_card_text_by_pk?: Maybe<Rangers_Card_Text>;
  /** delete data from the table: "rangers.locale" */
  delete_rangers_locale?: Maybe<Rangers_Locale_Mutation_Response>;
  /** delete single row from the table: "rangers.locale" */
  delete_rangers_locale_by_pk?: Maybe<Rangers_Locale>;
  /** delete data from the table: "rangers.pack" */
  delete_rangers_pack?: Maybe<Rangers_Pack_Mutation_Response>;
  /** delete single row from the table: "rangers.pack" */
  delete_rangers_pack_by_pk?: Maybe<Rangers_Pack>;
  /** delete data from the table: "rangers.pack_text" */
  delete_rangers_pack_text?: Maybe<Rangers_Pack_Text_Mutation_Response>;
  /** delete single row from the table: "rangers.pack_text" */
  delete_rangers_pack_text_by_pk?: Maybe<Rangers_Pack_Text>;
  /** delete data from the table: "rangers.set" */
  delete_rangers_set?: Maybe<Rangers_Set_Mutation_Response>;
  /** delete single row from the table: "rangers.set" */
  delete_rangers_set_by_pk?: Maybe<Rangers_Set>;
  /** delete data from the table: "rangers.set_text" */
  delete_rangers_set_text?: Maybe<Rangers_Set_Text_Mutation_Response>;
  /** delete single row from the table: "rangers.set_text" */
  delete_rangers_set_text_by_pk?: Maybe<Rangers_Set_Text>;
  /** delete data from the table: "rangers.set_type" */
  delete_rangers_set_type?: Maybe<Rangers_Set_Type_Mutation_Response>;
  /** delete single row from the table: "rangers.set_type" */
  delete_rangers_set_type_by_pk?: Maybe<Rangers_Set_Type>;
  /** delete data from the table: "rangers.set_type_text" */
  delete_rangers_set_type_text?: Maybe<Rangers_Set_Type_Text_Mutation_Response>;
  /** delete single row from the table: "rangers.set_type_text" */
  delete_rangers_set_type_text_by_pk?: Maybe<Rangers_Set_Type_Text>;
  /** delete data from the table: "rangers.token" */
  delete_rangers_token?: Maybe<Rangers_Token_Mutation_Response>;
  /** delete single row from the table: "rangers.token" */
  delete_rangers_token_by_pk?: Maybe<Rangers_Token>;
  /** delete data from the table: "rangers.token_text" */
  delete_rangers_token_text?: Maybe<Rangers_Token_Text_Mutation_Response>;
  /** delete single row from the table: "rangers.token_text" */
  delete_rangers_token_text_by_pk?: Maybe<Rangers_Token_Text>;
  /** delete data from the table: "rangers.type" */
  delete_rangers_type?: Maybe<Rangers_Type_Mutation_Response>;
  /** delete single row from the table: "rangers.type" */
  delete_rangers_type_by_pk?: Maybe<Rangers_Type>;
  /** delete data from the table: "rangers.type_text" */
  delete_rangers_type_text?: Maybe<Rangers_Type_Text_Mutation_Response>;
  /** delete single row from the table: "rangers.type_text" */
  delete_rangers_type_text_by_pk?: Maybe<Rangers_Type_Text>;
  /** delete data from the table: "taboo_set" */
  delete_taboo_set?: Maybe<Taboo_Set_Mutation_Response>;
  /** delete single row from the table: "taboo_set" */
  delete_taboo_set_by_pk?: Maybe<Taboo_Set>;
  /** delete data from the table: "user_campaigns" */
  delete_user_campaigns?: Maybe<User_Campaigns_Mutation_Response>;
  /** delete data from the table: "user_flag" */
  delete_user_flag?: Maybe<User_Flag_Mutation_Response>;
  /** delete single row from the table: "user_flag" */
  delete_user_flag_by_pk?: Maybe<User_Flag>;
  /** delete data from the table: "user_flag_type" */
  delete_user_flag_type?: Maybe<User_Flag_Type_Mutation_Response>;
  /** delete single row from the table: "user_flag_type" */
  delete_user_flag_type_by_pk?: Maybe<User_Flag_Type>;
  /** delete data from the table: "user_friends" */
  delete_user_friends?: Maybe<User_Friends_Mutation_Response>;
  /** delete data from the table: "user_received_friend_requests" */
  delete_user_received_friend_requests?: Maybe<User_Received_Friend_Requests_Mutation_Response>;
  /** delete data from the table: "user_sent_friend_requests" */
  delete_user_sent_friend_requests?: Maybe<User_Sent_Friend_Requests_Mutation_Response>;
  /** delete data from the table: "user_settings" */
  delete_user_settings?: Maybe<User_Settings_Mutation_Response>;
  /** delete single row from the table: "user_settings" */
  delete_user_settings_by_pk?: Maybe<User_Settings>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "all_card" */
  insert_all_card?: Maybe<All_Card_Mutation_Response>;
  /** insert a single row into the table: "all_card" */
  insert_all_card_one?: Maybe<All_Card>;
  /** insert data into the table: "all_card_text" */
  insert_all_card_text?: Maybe<All_Card_Text_Mutation_Response>;
  /** insert a single row into the table: "all_card_text" */
  insert_all_card_text_one?: Maybe<All_Card_Text>;
  /** insert data into the table: "all_card_updated" */
  insert_all_card_updated?: Maybe<All_Card_Updated_Mutation_Response>;
  /** insert a single row into the table: "all_card_updated" */
  insert_all_card_updated_one?: Maybe<All_Card_Updated>;
  /** insert data into the table: "base_decks" */
  insert_base_decks?: Maybe<Base_Decks_Mutation_Response>;
  /** insert a single row into the table: "base_decks" */
  insert_base_decks_one?: Maybe<Base_Decks>;
  /** insert data into the table: "campaign" */
  insert_campaign?: Maybe<Campaign_Mutation_Response>;
  /** insert data into the table: "campaign_access" */
  insert_campaign_access?: Maybe<Campaign_Access_Mutation_Response>;
  /** insert a single row into the table: "campaign_access" */
  insert_campaign_access_one?: Maybe<Campaign_Access>;
  /** insert data into the table: "campaign_deck" */
  insert_campaign_deck?: Maybe<Campaign_Deck_Mutation_Response>;
  /** insert a single row into the table: "campaign_deck" */
  insert_campaign_deck_one?: Maybe<Campaign_Deck>;
  /** insert data into the table: "campaign_difficulty" */
  insert_campaign_difficulty?: Maybe<Campaign_Difficulty_Mutation_Response>;
  /** insert a single row into the table: "campaign_difficulty" */
  insert_campaign_difficulty_one?: Maybe<Campaign_Difficulty>;
  /** insert data into the table: "campaign_guide" */
  insert_campaign_guide?: Maybe<Campaign_Guide_Mutation_Response>;
  /** insert a single row into the table: "campaign_guide" */
  insert_campaign_guide_one?: Maybe<Campaign_Guide>;
  /** insert data into the table: "campaign_investigator" */
  insert_campaign_investigator?: Maybe<Campaign_Investigator_Mutation_Response>;
  /** insert a single row into the table: "campaign_investigator" */
  insert_campaign_investigator_one?: Maybe<Campaign_Investigator>;
  /** insert a single row into the table: "campaign" */
  insert_campaign_one?: Maybe<Campaign>;
  /** insert data into the table: "card" */
  insert_card?: Maybe<Card_Mutation_Response>;
  /** insert data into the table: "card_cycle" */
  insert_card_cycle?: Maybe<Card_Cycle_Mutation_Response>;
  /** insert a single row into the table: "card_cycle" */
  insert_card_cycle_one?: Maybe<Card_Cycle>;
  /** insert data into the table: "card_encounter_set" */
  insert_card_encounter_set?: Maybe<Card_Encounter_Set_Mutation_Response>;
  /** insert a single row into the table: "card_encounter_set" */
  insert_card_encounter_set_one?: Maybe<Card_Encounter_Set>;
  /** insert a single row into the table: "card" */
  insert_card_one?: Maybe<Card>;
  /** insert data into the table: "card_pack" */
  insert_card_pack?: Maybe<Card_Pack_Mutation_Response>;
  /** insert a single row into the table: "card_pack" */
  insert_card_pack_one?: Maybe<Card_Pack>;
  /** insert data into the table: "card_subtype_name" */
  insert_card_subtype_name?: Maybe<Card_Subtype_Name_Mutation_Response>;
  /** insert a single row into the table: "card_subtype_name" */
  insert_card_subtype_name_one?: Maybe<Card_Subtype_Name>;
  /** insert data into the table: "card_text" */
  insert_card_text?: Maybe<Card_Text_Mutation_Response>;
  /** insert a single row into the table: "card_text" */
  insert_card_text_one?: Maybe<Card_Text>;
  /** insert data into the table: "card_type_code" */
  insert_card_type_code?: Maybe<Card_Type_Code_Mutation_Response>;
  /** insert a single row into the table: "card_type_code" */
  insert_card_type_code_one?: Maybe<Card_Type_Code>;
  /** insert data into the table: "card_type_name" */
  insert_card_type_name?: Maybe<Card_Type_Name_Mutation_Response>;
  /** insert a single row into the table: "card_type_name" */
  insert_card_type_name_one?: Maybe<Card_Type_Name>;
  /** insert data into the table: "chaos_bag_result" */
  insert_chaos_bag_result?: Maybe<Chaos_Bag_Result_Mutation_Response>;
  /** insert a single row into the table: "chaos_bag_result" */
  insert_chaos_bag_result_one?: Maybe<Chaos_Bag_Result>;
  /** insert data into the table: "chaos_bag_tarot_mode" */
  insert_chaos_bag_tarot_mode?: Maybe<Chaos_Bag_Tarot_Mode_Mutation_Response>;
  /** insert a single row into the table: "chaos_bag_tarot_mode" */
  insert_chaos_bag_tarot_mode_one?: Maybe<Chaos_Bag_Tarot_Mode>;
  /** insert data into the table: "cycle" */
  insert_cycle?: Maybe<Cycle_Mutation_Response>;
  /** insert data into the table: "cycle_name" */
  insert_cycle_name?: Maybe<Cycle_Name_Mutation_Response>;
  /** insert a single row into the table: "cycle_name" */
  insert_cycle_name_one?: Maybe<Cycle_Name>;
  /** insert a single row into the table: "cycle" */
  insert_cycle_one?: Maybe<Cycle>;
  /** insert data into the table: "faction_name" */
  insert_faction_name?: Maybe<Faction_Name_Mutation_Response>;
  /** insert a single row into the table: "faction_name" */
  insert_faction_name_one?: Maybe<Faction_Name>;
  /** insert data into the table: "faq" */
  insert_faq?: Maybe<Faq_Mutation_Response>;
  /** insert a single row into the table: "faq" */
  insert_faq_one?: Maybe<Faq>;
  /** insert data into the table: "faq_text" */
  insert_faq_text?: Maybe<Faq_Text_Mutation_Response>;
  /** insert a single row into the table: "faq_text" */
  insert_faq_text_one?: Maybe<Faq_Text>;
  /** insert data into the table: "friend_status" */
  insert_friend_status?: Maybe<Friend_Status_Mutation_Response>;
  /** insert a single row into the table: "friend_status" */
  insert_friend_status_one?: Maybe<Friend_Status>;
  /** insert data into the table: "friend_status_type" */
  insert_friend_status_type?: Maybe<Friend_Status_Type_Mutation_Response>;
  /** insert a single row into the table: "friend_status_type" */
  insert_friend_status_type_one?: Maybe<Friend_Status_Type>;
  /** insert data into the table: "full_card" */
  insert_full_card?: Maybe<Full_Card_Mutation_Response>;
  /** insert a single row into the table: "full_card" */
  insert_full_card_one?: Maybe<Full_Card>;
  /** insert data into the table: "full_card_text" */
  insert_full_card_text?: Maybe<Full_Card_Text_Mutation_Response>;
  /** insert a single row into the table: "full_card_text" */
  insert_full_card_text_one?: Maybe<Full_Card_Text>;
  /** insert data into the table: "gender" */
  insert_gender?: Maybe<Gender_Mutation_Response>;
  /** insert a single row into the table: "gender" */
  insert_gender_one?: Maybe<Gender>;
  /** insert data into the table: "guide_achievement" */
  insert_guide_achievement?: Maybe<Guide_Achievement_Mutation_Response>;
  /** insert a single row into the table: "guide_achievement" */
  insert_guide_achievement_one?: Maybe<Guide_Achievement>;
  /** insert data into the table: "guide_input" */
  insert_guide_input?: Maybe<Guide_Input_Mutation_Response>;
  /** insert a single row into the table: "guide_input" */
  insert_guide_input_one?: Maybe<Guide_Input>;
  /** insert data into the table: "investigator_data" */
  insert_investigator_data?: Maybe<Investigator_Data_Mutation_Response>;
  /** insert a single row into the table: "investigator_data" */
  insert_investigator_data_one?: Maybe<Investigator_Data>;
  /** insert data into the table: "latest_decks" */
  insert_latest_decks?: Maybe<Latest_Decks_Mutation_Response>;
  /** insert a single row into the table: "latest_decks" */
  insert_latest_decks_one?: Maybe<Latest_Decks>;
  /** insert data into the table: "local_decks" */
  insert_local_decks?: Maybe<Local_Decks_Mutation_Response>;
  /** insert a single row into the table: "local_decks" */
  insert_local_decks_one?: Maybe<Local_Decks>;
  /** insert data into the table: "pack" */
  insert_pack?: Maybe<Pack_Mutation_Response>;
  /** insert data into the table: "pack_name" */
  insert_pack_name?: Maybe<Pack_Name_Mutation_Response>;
  /** insert a single row into the table: "pack_name" */
  insert_pack_name_one?: Maybe<Pack_Name>;
  /** insert a single row into the table: "pack" */
  insert_pack_one?: Maybe<Pack>;
  /** insert data into the table: "rangers.aspect" */
  insert_rangers_aspect?: Maybe<Rangers_Aspect_Mutation_Response>;
  /** insert a single row into the table: "rangers.aspect" */
  insert_rangers_aspect_one?: Maybe<Rangers_Aspect>;
  /** insert data into the table: "rangers.aspect_text" */
  insert_rangers_aspect_text?: Maybe<Rangers_Aspect_Text_Mutation_Response>;
  /** insert a single row into the table: "rangers.aspect_text" */
  insert_rangers_aspect_text_one?: Maybe<Rangers_Aspect_Text>;
  /** insert data into the table: "rangers.card" */
  insert_rangers_card?: Maybe<Rangers_Card_Mutation_Response>;
  /** insert a single row into the table: "rangers.card" */
  insert_rangers_card_one?: Maybe<Rangers_Card>;
  /** insert data into the table: "rangers.card_text" */
  insert_rangers_card_text?: Maybe<Rangers_Card_Text_Mutation_Response>;
  /** insert a single row into the table: "rangers.card_text" */
  insert_rangers_card_text_one?: Maybe<Rangers_Card_Text>;
  /** insert data into the table: "rangers.locale" */
  insert_rangers_locale?: Maybe<Rangers_Locale_Mutation_Response>;
  /** insert a single row into the table: "rangers.locale" */
  insert_rangers_locale_one?: Maybe<Rangers_Locale>;
  /** insert data into the table: "rangers.pack" */
  insert_rangers_pack?: Maybe<Rangers_Pack_Mutation_Response>;
  /** insert a single row into the table: "rangers.pack" */
  insert_rangers_pack_one?: Maybe<Rangers_Pack>;
  /** insert data into the table: "rangers.pack_text" */
  insert_rangers_pack_text?: Maybe<Rangers_Pack_Text_Mutation_Response>;
  /** insert a single row into the table: "rangers.pack_text" */
  insert_rangers_pack_text_one?: Maybe<Rangers_Pack_Text>;
  /** insert data into the table: "rangers.set" */
  insert_rangers_set?: Maybe<Rangers_Set_Mutation_Response>;
  /** insert a single row into the table: "rangers.set" */
  insert_rangers_set_one?: Maybe<Rangers_Set>;
  /** insert data into the table: "rangers.set_text" */
  insert_rangers_set_text?: Maybe<Rangers_Set_Text_Mutation_Response>;
  /** insert a single row into the table: "rangers.set_text" */
  insert_rangers_set_text_one?: Maybe<Rangers_Set_Text>;
  /** insert data into the table: "rangers.set_type" */
  insert_rangers_set_type?: Maybe<Rangers_Set_Type_Mutation_Response>;
  /** insert a single row into the table: "rangers.set_type" */
  insert_rangers_set_type_one?: Maybe<Rangers_Set_Type>;
  /** insert data into the table: "rangers.set_type_text" */
  insert_rangers_set_type_text?: Maybe<Rangers_Set_Type_Text_Mutation_Response>;
  /** insert a single row into the table: "rangers.set_type_text" */
  insert_rangers_set_type_text_one?: Maybe<Rangers_Set_Type_Text>;
  /** insert data into the table: "rangers.token" */
  insert_rangers_token?: Maybe<Rangers_Token_Mutation_Response>;
  /** insert a single row into the table: "rangers.token" */
  insert_rangers_token_one?: Maybe<Rangers_Token>;
  /** insert data into the table: "rangers.token_text" */
  insert_rangers_token_text?: Maybe<Rangers_Token_Text_Mutation_Response>;
  /** insert a single row into the table: "rangers.token_text" */
  insert_rangers_token_text_one?: Maybe<Rangers_Token_Text>;
  /** insert data into the table: "rangers.type" */
  insert_rangers_type?: Maybe<Rangers_Type_Mutation_Response>;
  /** insert a single row into the table: "rangers.type" */
  insert_rangers_type_one?: Maybe<Rangers_Type>;
  /** insert data into the table: "rangers.type_text" */
  insert_rangers_type_text?: Maybe<Rangers_Type_Text_Mutation_Response>;
  /** insert a single row into the table: "rangers.type_text" */
  insert_rangers_type_text_one?: Maybe<Rangers_Type_Text>;
  /** insert data into the table: "taboo_set" */
  insert_taboo_set?: Maybe<Taboo_Set_Mutation_Response>;
  /** insert a single row into the table: "taboo_set" */
  insert_taboo_set_one?: Maybe<Taboo_Set>;
  /** insert data into the table: "user_campaigns" */
  insert_user_campaigns?: Maybe<User_Campaigns_Mutation_Response>;
  /** insert a single row into the table: "user_campaigns" */
  insert_user_campaigns_one?: Maybe<User_Campaigns>;
  /** insert data into the table: "user_flag" */
  insert_user_flag?: Maybe<User_Flag_Mutation_Response>;
  /** insert a single row into the table: "user_flag" */
  insert_user_flag_one?: Maybe<User_Flag>;
  /** insert data into the table: "user_flag_type" */
  insert_user_flag_type?: Maybe<User_Flag_Type_Mutation_Response>;
  /** insert a single row into the table: "user_flag_type" */
  insert_user_flag_type_one?: Maybe<User_Flag_Type>;
  /** insert data into the table: "user_friends" */
  insert_user_friends?: Maybe<User_Friends_Mutation_Response>;
  /** insert a single row into the table: "user_friends" */
  insert_user_friends_one?: Maybe<User_Friends>;
  /** insert data into the table: "user_received_friend_requests" */
  insert_user_received_friend_requests?: Maybe<User_Received_Friend_Requests_Mutation_Response>;
  /** insert a single row into the table: "user_received_friend_requests" */
  insert_user_received_friend_requests_one?: Maybe<User_Received_Friend_Requests>;
  /** insert data into the table: "user_sent_friend_requests" */
  insert_user_sent_friend_requests?: Maybe<User_Sent_Friend_Requests_Mutation_Response>;
  /** insert a single row into the table: "user_sent_friend_requests" */
  insert_user_sent_friend_requests_one?: Maybe<User_Sent_Friend_Requests>;
  /** insert data into the table: "user_settings" */
  insert_user_settings?: Maybe<User_Settings_Mutation_Response>;
  /** insert a single row into the table: "user_settings" */
  insert_user_settings_one?: Maybe<User_Settings>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "all_card" */
  update_all_card?: Maybe<All_Card_Mutation_Response>;
  /** update single row of the table: "all_card" */
  update_all_card_by_pk?: Maybe<All_Card>;
  /** update multiples rows of table: "all_card" */
  update_all_card_many?: Maybe<Array<Maybe<All_Card_Mutation_Response>>>;
  /** update data of the table: "all_card_text" */
  update_all_card_text?: Maybe<All_Card_Text_Mutation_Response>;
  /** update single row of the table: "all_card_text" */
  update_all_card_text_by_pk?: Maybe<All_Card_Text>;
  /** update multiples rows of table: "all_card_text" */
  update_all_card_text_many?: Maybe<Array<Maybe<All_Card_Text_Mutation_Response>>>;
  /** update data of the table: "all_card_updated" */
  update_all_card_updated?: Maybe<All_Card_Updated_Mutation_Response>;
  /** update single row of the table: "all_card_updated" */
  update_all_card_updated_by_pk?: Maybe<All_Card_Updated>;
  /** update multiples rows of table: "all_card_updated" */
  update_all_card_updated_many?: Maybe<Array<Maybe<All_Card_Updated_Mutation_Response>>>;
  /** update data of the table: "base_decks" */
  update_base_decks?: Maybe<Base_Decks_Mutation_Response>;
  /** update multiples rows of table: "base_decks" */
  update_base_decks_many?: Maybe<Array<Maybe<Base_Decks_Mutation_Response>>>;
  /** update data of the table: "campaign" */
  update_campaign?: Maybe<Campaign_Mutation_Response>;
  /** update data of the table: "campaign_access" */
  update_campaign_access?: Maybe<Campaign_Access_Mutation_Response>;
  /** update single row of the table: "campaign_access" */
  update_campaign_access_by_pk?: Maybe<Campaign_Access>;
  /** update multiples rows of table: "campaign_access" */
  update_campaign_access_many?: Maybe<Array<Maybe<Campaign_Access_Mutation_Response>>>;
  /** update single row of the table: "campaign" */
  update_campaign_by_pk?: Maybe<Campaign>;
  /** update data of the table: "campaign_deck" */
  update_campaign_deck?: Maybe<Campaign_Deck_Mutation_Response>;
  /** update single row of the table: "campaign_deck" */
  update_campaign_deck_by_pk?: Maybe<Campaign_Deck>;
  /** update multiples rows of table: "campaign_deck" */
  update_campaign_deck_many?: Maybe<Array<Maybe<Campaign_Deck_Mutation_Response>>>;
  /** update data of the table: "campaign_difficulty" */
  update_campaign_difficulty?: Maybe<Campaign_Difficulty_Mutation_Response>;
  /** update single row of the table: "campaign_difficulty" */
  update_campaign_difficulty_by_pk?: Maybe<Campaign_Difficulty>;
  /** update multiples rows of table: "campaign_difficulty" */
  update_campaign_difficulty_many?: Maybe<Array<Maybe<Campaign_Difficulty_Mutation_Response>>>;
  /** update data of the table: "campaign_guide" */
  update_campaign_guide?: Maybe<Campaign_Guide_Mutation_Response>;
  /** update multiples rows of table: "campaign_guide" */
  update_campaign_guide_many?: Maybe<Array<Maybe<Campaign_Guide_Mutation_Response>>>;
  /** update data of the table: "campaign_investigator" */
  update_campaign_investigator?: Maybe<Campaign_Investigator_Mutation_Response>;
  /** update single row of the table: "campaign_investigator" */
  update_campaign_investigator_by_pk?: Maybe<Campaign_Investigator>;
  /** update multiples rows of table: "campaign_investigator" */
  update_campaign_investigator_many?: Maybe<Array<Maybe<Campaign_Investigator_Mutation_Response>>>;
  /** update multiples rows of table: "campaign" */
  update_campaign_many?: Maybe<Array<Maybe<Campaign_Mutation_Response>>>;
  /** update data of the table: "card" */
  update_card?: Maybe<Card_Mutation_Response>;
  /** update single row of the table: "card" */
  update_card_by_pk?: Maybe<Card>;
  /** update data of the table: "card_cycle" */
  update_card_cycle?: Maybe<Card_Cycle_Mutation_Response>;
  /** update single row of the table: "card_cycle" */
  update_card_cycle_by_pk?: Maybe<Card_Cycle>;
  /** update multiples rows of table: "card_cycle" */
  update_card_cycle_many?: Maybe<Array<Maybe<Card_Cycle_Mutation_Response>>>;
  /** update data of the table: "card_encounter_set" */
  update_card_encounter_set?: Maybe<Card_Encounter_Set_Mutation_Response>;
  /** update single row of the table: "card_encounter_set" */
  update_card_encounter_set_by_pk?: Maybe<Card_Encounter_Set>;
  /** update multiples rows of table: "card_encounter_set" */
  update_card_encounter_set_many?: Maybe<Array<Maybe<Card_Encounter_Set_Mutation_Response>>>;
  /** update multiples rows of table: "card" */
  update_card_many?: Maybe<Array<Maybe<Card_Mutation_Response>>>;
  /** update data of the table: "card_pack" */
  update_card_pack?: Maybe<Card_Pack_Mutation_Response>;
  /** update single row of the table: "card_pack" */
  update_card_pack_by_pk?: Maybe<Card_Pack>;
  /** update multiples rows of table: "card_pack" */
  update_card_pack_many?: Maybe<Array<Maybe<Card_Pack_Mutation_Response>>>;
  /** update data of the table: "card_subtype_name" */
  update_card_subtype_name?: Maybe<Card_Subtype_Name_Mutation_Response>;
  /** update single row of the table: "card_subtype_name" */
  update_card_subtype_name_by_pk?: Maybe<Card_Subtype_Name>;
  /** update multiples rows of table: "card_subtype_name" */
  update_card_subtype_name_many?: Maybe<Array<Maybe<Card_Subtype_Name_Mutation_Response>>>;
  /** update data of the table: "card_text" */
  update_card_text?: Maybe<Card_Text_Mutation_Response>;
  /** update single row of the table: "card_text" */
  update_card_text_by_pk?: Maybe<Card_Text>;
  /** update multiples rows of table: "card_text" */
  update_card_text_many?: Maybe<Array<Maybe<Card_Text_Mutation_Response>>>;
  /** update data of the table: "card_type_code" */
  update_card_type_code?: Maybe<Card_Type_Code_Mutation_Response>;
  /** update single row of the table: "card_type_code" */
  update_card_type_code_by_pk?: Maybe<Card_Type_Code>;
  /** update multiples rows of table: "card_type_code" */
  update_card_type_code_many?: Maybe<Array<Maybe<Card_Type_Code_Mutation_Response>>>;
  /** update data of the table: "card_type_name" */
  update_card_type_name?: Maybe<Card_Type_Name_Mutation_Response>;
  /** update single row of the table: "card_type_name" */
  update_card_type_name_by_pk?: Maybe<Card_Type_Name>;
  /** update multiples rows of table: "card_type_name" */
  update_card_type_name_many?: Maybe<Array<Maybe<Card_Type_Name_Mutation_Response>>>;
  /** update data of the table: "chaos_bag_result" */
  update_chaos_bag_result?: Maybe<Chaos_Bag_Result_Mutation_Response>;
  /** update single row of the table: "chaos_bag_result" */
  update_chaos_bag_result_by_pk?: Maybe<Chaos_Bag_Result>;
  /** update multiples rows of table: "chaos_bag_result" */
  update_chaos_bag_result_many?: Maybe<Array<Maybe<Chaos_Bag_Result_Mutation_Response>>>;
  /** update data of the table: "chaos_bag_tarot_mode" */
  update_chaos_bag_tarot_mode?: Maybe<Chaos_Bag_Tarot_Mode_Mutation_Response>;
  /** update single row of the table: "chaos_bag_tarot_mode" */
  update_chaos_bag_tarot_mode_by_pk?: Maybe<Chaos_Bag_Tarot_Mode>;
  /** update multiples rows of table: "chaos_bag_tarot_mode" */
  update_chaos_bag_tarot_mode_many?: Maybe<Array<Maybe<Chaos_Bag_Tarot_Mode_Mutation_Response>>>;
  /** update data of the table: "cycle" */
  update_cycle?: Maybe<Cycle_Mutation_Response>;
  /** update single row of the table: "cycle" */
  update_cycle_by_pk?: Maybe<Cycle>;
  /** update multiples rows of table: "cycle" */
  update_cycle_many?: Maybe<Array<Maybe<Cycle_Mutation_Response>>>;
  /** update data of the table: "cycle_name" */
  update_cycle_name?: Maybe<Cycle_Name_Mutation_Response>;
  /** update single row of the table: "cycle_name" */
  update_cycle_name_by_pk?: Maybe<Cycle_Name>;
  /** update multiples rows of table: "cycle_name" */
  update_cycle_name_many?: Maybe<Array<Maybe<Cycle_Name_Mutation_Response>>>;
  /** update data of the table: "faction_name" */
  update_faction_name?: Maybe<Faction_Name_Mutation_Response>;
  /** update single row of the table: "faction_name" */
  update_faction_name_by_pk?: Maybe<Faction_Name>;
  /** update multiples rows of table: "faction_name" */
  update_faction_name_many?: Maybe<Array<Maybe<Faction_Name_Mutation_Response>>>;
  /** update data of the table: "faq" */
  update_faq?: Maybe<Faq_Mutation_Response>;
  /** update single row of the table: "faq" */
  update_faq_by_pk?: Maybe<Faq>;
  /** update multiples rows of table: "faq" */
  update_faq_many?: Maybe<Array<Maybe<Faq_Mutation_Response>>>;
  /** update data of the table: "faq_text" */
  update_faq_text?: Maybe<Faq_Text_Mutation_Response>;
  /** update single row of the table: "faq_text" */
  update_faq_text_by_pk?: Maybe<Faq_Text>;
  /** update multiples rows of table: "faq_text" */
  update_faq_text_many?: Maybe<Array<Maybe<Faq_Text_Mutation_Response>>>;
  /** update data of the table: "friend_status" */
  update_friend_status?: Maybe<Friend_Status_Mutation_Response>;
  /** update single row of the table: "friend_status" */
  update_friend_status_by_pk?: Maybe<Friend_Status>;
  /** update multiples rows of table: "friend_status" */
  update_friend_status_many?: Maybe<Array<Maybe<Friend_Status_Mutation_Response>>>;
  /** update data of the table: "friend_status_type" */
  update_friend_status_type?: Maybe<Friend_Status_Type_Mutation_Response>;
  /** update single row of the table: "friend_status_type" */
  update_friend_status_type_by_pk?: Maybe<Friend_Status_Type>;
  /** update multiples rows of table: "friend_status_type" */
  update_friend_status_type_many?: Maybe<Array<Maybe<Friend_Status_Type_Mutation_Response>>>;
  /** update data of the table: "full_card" */
  update_full_card?: Maybe<Full_Card_Mutation_Response>;
  /** update single row of the table: "full_card" */
  update_full_card_by_pk?: Maybe<Full_Card>;
  /** update multiples rows of table: "full_card" */
  update_full_card_many?: Maybe<Array<Maybe<Full_Card_Mutation_Response>>>;
  /** update data of the table: "full_card_text" */
  update_full_card_text?: Maybe<Full_Card_Text_Mutation_Response>;
  /** update single row of the table: "full_card_text" */
  update_full_card_text_by_pk?: Maybe<Full_Card_Text>;
  /** update multiples rows of table: "full_card_text" */
  update_full_card_text_many?: Maybe<Array<Maybe<Full_Card_Text_Mutation_Response>>>;
  /** update data of the table: "gender" */
  update_gender?: Maybe<Gender_Mutation_Response>;
  /** update single row of the table: "gender" */
  update_gender_by_pk?: Maybe<Gender>;
  /** update multiples rows of table: "gender" */
  update_gender_many?: Maybe<Array<Maybe<Gender_Mutation_Response>>>;
  /** update data of the table: "guide_achievement" */
  update_guide_achievement?: Maybe<Guide_Achievement_Mutation_Response>;
  /** update single row of the table: "guide_achievement" */
  update_guide_achievement_by_pk?: Maybe<Guide_Achievement>;
  /** update multiples rows of table: "guide_achievement" */
  update_guide_achievement_many?: Maybe<Array<Maybe<Guide_Achievement_Mutation_Response>>>;
  /** update data of the table: "guide_input" */
  update_guide_input?: Maybe<Guide_Input_Mutation_Response>;
  /** update single row of the table: "guide_input" */
  update_guide_input_by_pk?: Maybe<Guide_Input>;
  /** update multiples rows of table: "guide_input" */
  update_guide_input_many?: Maybe<Array<Maybe<Guide_Input_Mutation_Response>>>;
  /** update data of the table: "investigator_data" */
  update_investigator_data?: Maybe<Investigator_Data_Mutation_Response>;
  /** update single row of the table: "investigator_data" */
  update_investigator_data_by_pk?: Maybe<Investigator_Data>;
  /** update multiples rows of table: "investigator_data" */
  update_investigator_data_many?: Maybe<Array<Maybe<Investigator_Data_Mutation_Response>>>;
  /** update data of the table: "latest_decks" */
  update_latest_decks?: Maybe<Latest_Decks_Mutation_Response>;
  /** update multiples rows of table: "latest_decks" */
  update_latest_decks_many?: Maybe<Array<Maybe<Latest_Decks_Mutation_Response>>>;
  /** update data of the table: "local_decks" */
  update_local_decks?: Maybe<Local_Decks_Mutation_Response>;
  /** update multiples rows of table: "local_decks" */
  update_local_decks_many?: Maybe<Array<Maybe<Local_Decks_Mutation_Response>>>;
  /** update data of the table: "pack" */
  update_pack?: Maybe<Pack_Mutation_Response>;
  /** update single row of the table: "pack" */
  update_pack_by_pk?: Maybe<Pack>;
  /** update multiples rows of table: "pack" */
  update_pack_many?: Maybe<Array<Maybe<Pack_Mutation_Response>>>;
  /** update data of the table: "pack_name" */
  update_pack_name?: Maybe<Pack_Name_Mutation_Response>;
  /** update single row of the table: "pack_name" */
  update_pack_name_by_pk?: Maybe<Pack_Name>;
  /** update multiples rows of table: "pack_name" */
  update_pack_name_many?: Maybe<Array<Maybe<Pack_Name_Mutation_Response>>>;
  /** update data of the table: "rangers.aspect" */
  update_rangers_aspect?: Maybe<Rangers_Aspect_Mutation_Response>;
  /** update single row of the table: "rangers.aspect" */
  update_rangers_aspect_by_pk?: Maybe<Rangers_Aspect>;
  /** update multiples rows of table: "rangers.aspect" */
  update_rangers_aspect_many?: Maybe<Array<Maybe<Rangers_Aspect_Mutation_Response>>>;
  /** update data of the table: "rangers.aspect_text" */
  update_rangers_aspect_text?: Maybe<Rangers_Aspect_Text_Mutation_Response>;
  /** update single row of the table: "rangers.aspect_text" */
  update_rangers_aspect_text_by_pk?: Maybe<Rangers_Aspect_Text>;
  /** update multiples rows of table: "rangers.aspect_text" */
  update_rangers_aspect_text_many?: Maybe<Array<Maybe<Rangers_Aspect_Text_Mutation_Response>>>;
  /** update data of the table: "rangers.card" */
  update_rangers_card?: Maybe<Rangers_Card_Mutation_Response>;
  /** update single row of the table: "rangers.card" */
  update_rangers_card_by_pk?: Maybe<Rangers_Card>;
  /** update multiples rows of table: "rangers.card" */
  update_rangers_card_many?: Maybe<Array<Maybe<Rangers_Card_Mutation_Response>>>;
  /** update data of the table: "rangers.card_text" */
  update_rangers_card_text?: Maybe<Rangers_Card_Text_Mutation_Response>;
  /** update single row of the table: "rangers.card_text" */
  update_rangers_card_text_by_pk?: Maybe<Rangers_Card_Text>;
  /** update multiples rows of table: "rangers.card_text" */
  update_rangers_card_text_many?: Maybe<Array<Maybe<Rangers_Card_Text_Mutation_Response>>>;
  /** update data of the table: "rangers.locale" */
  update_rangers_locale?: Maybe<Rangers_Locale_Mutation_Response>;
  /** update single row of the table: "rangers.locale" */
  update_rangers_locale_by_pk?: Maybe<Rangers_Locale>;
  /** update multiples rows of table: "rangers.locale" */
  update_rangers_locale_many?: Maybe<Array<Maybe<Rangers_Locale_Mutation_Response>>>;
  /** update data of the table: "rangers.pack" */
  update_rangers_pack?: Maybe<Rangers_Pack_Mutation_Response>;
  /** update single row of the table: "rangers.pack" */
  update_rangers_pack_by_pk?: Maybe<Rangers_Pack>;
  /** update multiples rows of table: "rangers.pack" */
  update_rangers_pack_many?: Maybe<Array<Maybe<Rangers_Pack_Mutation_Response>>>;
  /** update data of the table: "rangers.pack_text" */
  update_rangers_pack_text?: Maybe<Rangers_Pack_Text_Mutation_Response>;
  /** update single row of the table: "rangers.pack_text" */
  update_rangers_pack_text_by_pk?: Maybe<Rangers_Pack_Text>;
  /** update multiples rows of table: "rangers.pack_text" */
  update_rangers_pack_text_many?: Maybe<Array<Maybe<Rangers_Pack_Text_Mutation_Response>>>;
  /** update data of the table: "rangers.set" */
  update_rangers_set?: Maybe<Rangers_Set_Mutation_Response>;
  /** update single row of the table: "rangers.set" */
  update_rangers_set_by_pk?: Maybe<Rangers_Set>;
  /** update multiples rows of table: "rangers.set" */
  update_rangers_set_many?: Maybe<Array<Maybe<Rangers_Set_Mutation_Response>>>;
  /** update data of the table: "rangers.set_text" */
  update_rangers_set_text?: Maybe<Rangers_Set_Text_Mutation_Response>;
  /** update single row of the table: "rangers.set_text" */
  update_rangers_set_text_by_pk?: Maybe<Rangers_Set_Text>;
  /** update multiples rows of table: "rangers.set_text" */
  update_rangers_set_text_many?: Maybe<Array<Maybe<Rangers_Set_Text_Mutation_Response>>>;
  /** update data of the table: "rangers.set_type" */
  update_rangers_set_type?: Maybe<Rangers_Set_Type_Mutation_Response>;
  /** update single row of the table: "rangers.set_type" */
  update_rangers_set_type_by_pk?: Maybe<Rangers_Set_Type>;
  /** update multiples rows of table: "rangers.set_type" */
  update_rangers_set_type_many?: Maybe<Array<Maybe<Rangers_Set_Type_Mutation_Response>>>;
  /** update data of the table: "rangers.set_type_text" */
  update_rangers_set_type_text?: Maybe<Rangers_Set_Type_Text_Mutation_Response>;
  /** update single row of the table: "rangers.set_type_text" */
  update_rangers_set_type_text_by_pk?: Maybe<Rangers_Set_Type_Text>;
  /** update multiples rows of table: "rangers.set_type_text" */
  update_rangers_set_type_text_many?: Maybe<Array<Maybe<Rangers_Set_Type_Text_Mutation_Response>>>;
  /** update data of the table: "rangers.token" */
  update_rangers_token?: Maybe<Rangers_Token_Mutation_Response>;
  /** update single row of the table: "rangers.token" */
  update_rangers_token_by_pk?: Maybe<Rangers_Token>;
  /** update multiples rows of table: "rangers.token" */
  update_rangers_token_many?: Maybe<Array<Maybe<Rangers_Token_Mutation_Response>>>;
  /** update data of the table: "rangers.token_text" */
  update_rangers_token_text?: Maybe<Rangers_Token_Text_Mutation_Response>;
  /** update single row of the table: "rangers.token_text" */
  update_rangers_token_text_by_pk?: Maybe<Rangers_Token_Text>;
  /** update multiples rows of table: "rangers.token_text" */
  update_rangers_token_text_many?: Maybe<Array<Maybe<Rangers_Token_Text_Mutation_Response>>>;
  /** update data of the table: "rangers.type" */
  update_rangers_type?: Maybe<Rangers_Type_Mutation_Response>;
  /** update single row of the table: "rangers.type" */
  update_rangers_type_by_pk?: Maybe<Rangers_Type>;
  /** update multiples rows of table: "rangers.type" */
  update_rangers_type_many?: Maybe<Array<Maybe<Rangers_Type_Mutation_Response>>>;
  /** update data of the table: "rangers.type_text" */
  update_rangers_type_text?: Maybe<Rangers_Type_Text_Mutation_Response>;
  /** update single row of the table: "rangers.type_text" */
  update_rangers_type_text_by_pk?: Maybe<Rangers_Type_Text>;
  /** update multiples rows of table: "rangers.type_text" */
  update_rangers_type_text_many?: Maybe<Array<Maybe<Rangers_Type_Text_Mutation_Response>>>;
  /** update data of the table: "taboo_set" */
  update_taboo_set?: Maybe<Taboo_Set_Mutation_Response>;
  /** update single row of the table: "taboo_set" */
  update_taboo_set_by_pk?: Maybe<Taboo_Set>;
  /** update multiples rows of table: "taboo_set" */
  update_taboo_set_many?: Maybe<Array<Maybe<Taboo_Set_Mutation_Response>>>;
  /** update data of the table: "user_campaigns" */
  update_user_campaigns?: Maybe<User_Campaigns_Mutation_Response>;
  /** update multiples rows of table: "user_campaigns" */
  update_user_campaigns_many?: Maybe<Array<Maybe<User_Campaigns_Mutation_Response>>>;
  /** update data of the table: "user_flag" */
  update_user_flag?: Maybe<User_Flag_Mutation_Response>;
  /** update single row of the table: "user_flag" */
  update_user_flag_by_pk?: Maybe<User_Flag>;
  /** update multiples rows of table: "user_flag" */
  update_user_flag_many?: Maybe<Array<Maybe<User_Flag_Mutation_Response>>>;
  /** update data of the table: "user_flag_type" */
  update_user_flag_type?: Maybe<User_Flag_Type_Mutation_Response>;
  /** update single row of the table: "user_flag_type" */
  update_user_flag_type_by_pk?: Maybe<User_Flag_Type>;
  /** update multiples rows of table: "user_flag_type" */
  update_user_flag_type_many?: Maybe<Array<Maybe<User_Flag_Type_Mutation_Response>>>;
  /** update data of the table: "user_friends" */
  update_user_friends?: Maybe<User_Friends_Mutation_Response>;
  /** update multiples rows of table: "user_friends" */
  update_user_friends_many?: Maybe<Array<Maybe<User_Friends_Mutation_Response>>>;
  /** update data of the table: "user_received_friend_requests" */
  update_user_received_friend_requests?: Maybe<User_Received_Friend_Requests_Mutation_Response>;
  /** update multiples rows of table: "user_received_friend_requests" */
  update_user_received_friend_requests_many?: Maybe<Array<Maybe<User_Received_Friend_Requests_Mutation_Response>>>;
  /** update data of the table: "user_sent_friend_requests" */
  update_user_sent_friend_requests?: Maybe<User_Sent_Friend_Requests_Mutation_Response>;
  /** update multiples rows of table: "user_sent_friend_requests" */
  update_user_sent_friend_requests_many?: Maybe<Array<Maybe<User_Sent_Friend_Requests_Mutation_Response>>>;
  /** update data of the table: "user_settings" */
  update_user_settings?: Maybe<User_Settings_Mutation_Response>;
  /** update single row of the table: "user_settings" */
  update_user_settings_by_pk?: Maybe<User_Settings>;
  /** update multiples rows of table: "user_settings" */
  update_user_settings_many?: Maybe<Array<Maybe<User_Settings_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_All_CardArgs = {
  where: All_Card_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_All_Card_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_All_Card_TextArgs = {
  where: All_Card_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_All_Card_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_All_Card_UpdatedArgs = {
  where: All_Card_Updated_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_All_Card_Updated_By_PkArgs = {
  locale: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Base_DecksArgs = {
  where: Base_Decks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CampaignArgs = {
  where: Campaign_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Campaign_AccessArgs = {
  where: Campaign_Access_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Campaign_Access_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Campaign_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Campaign_DeckArgs = {
  where: Campaign_Deck_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Campaign_Deck_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Campaign_DifficultyArgs = {
  where: Campaign_Difficulty_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Campaign_Difficulty_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Campaign_GuideArgs = {
  where: Campaign_Guide_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Campaign_InvestigatorArgs = {
  where: Campaign_Investigator_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Campaign_Investigator_By_PkArgs = {
  campaign_id: Scalars['Int'];
  investigator: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_CardArgs = {
  where: Card_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Card_By_PkArgs = {
  code: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Card_CycleArgs = {
  where: Card_Cycle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Card_Cycle_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Card_Encounter_SetArgs = {
  where: Card_Encounter_Set_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Card_Encounter_Set_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Card_PackArgs = {
  where: Card_Pack_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Card_Pack_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Card_Subtype_NameArgs = {
  where: Card_Subtype_Name_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Card_Subtype_Name_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Card_TextArgs = {
  where: Card_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Card_Text_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Card_Type_CodeArgs = {
  where: Card_Type_Code_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Card_Type_Code_By_PkArgs = {
  code: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Card_Type_NameArgs = {
  where: Card_Type_Name_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Card_Type_Name_By_PkArgs = {
  code: Card_Type_Code_Enum;
  locale: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Chaos_Bag_ResultArgs = {
  where: Chaos_Bag_Result_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chaos_Bag_Result_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Chaos_Bag_Tarot_ModeArgs = {
  where: Chaos_Bag_Tarot_Mode_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chaos_Bag_Tarot_Mode_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_CycleArgs = {
  where: Cycle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cycle_By_PkArgs = {
  code: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Cycle_NameArgs = {
  where: Cycle_Name_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cycle_Name_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Faction_NameArgs = {
  where: Faction_Name_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Faction_Name_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_FaqArgs = {
  where: Faq_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Faq_By_PkArgs = {
  code: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Faq_TextArgs = {
  where: Faq_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Faq_Text_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Friend_StatusArgs = {
  where: Friend_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Friend_Status_By_PkArgs = {
  user_id_a: Scalars['String'];
  user_id_b: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Friend_Status_TypeArgs = {
  where: Friend_Status_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Friend_Status_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Full_CardArgs = {
  where: Full_Card_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Full_Card_By_PkArgs = {
  code: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Full_Card_TextArgs = {
  where: Full_Card_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Full_Card_Text_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_GenderArgs = {
  where: Gender_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gender_By_PkArgs = {
  code: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Guide_AchievementArgs = {
  where: Guide_Achievement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Guide_Achievement_By_PkArgs = {
  campaign_id: Scalars['Int'];
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Guide_InputArgs = {
  where: Guide_Input_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Guide_Input_By_PkArgs = {
  campaign_id: Scalars['Int'];
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Investigator_DataArgs = {
  where: Investigator_Data_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Investigator_Data_By_PkArgs = {
  campaign_id: Scalars['Int'];
  investigator: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Latest_DecksArgs = {
  where: Latest_Decks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Local_DecksArgs = {
  where: Local_Decks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_PackArgs = {
  where: Pack_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pack_By_PkArgs = {
  code: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Pack_NameArgs = {
  where: Pack_Name_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pack_Name_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Rangers_AspectArgs = {
  where: Rangers_Aspect_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rangers_Aspect_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Rangers_Aspect_TextArgs = {
  where: Rangers_Aspect_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rangers_Aspect_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Rangers_CardArgs = {
  where: Rangers_Card_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rangers_Card_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Rangers_Card_TextArgs = {
  where: Rangers_Card_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rangers_Card_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Rangers_LocaleArgs = {
  where: Rangers_Locale_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rangers_Locale_By_PkArgs = {
  locale: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Rangers_PackArgs = {
  where: Rangers_Pack_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rangers_Pack_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Rangers_Pack_TextArgs = {
  where: Rangers_Pack_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rangers_Pack_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Rangers_SetArgs = {
  where: Rangers_Set_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rangers_Set_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Rangers_Set_TextArgs = {
  where: Rangers_Set_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rangers_Set_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Rangers_Set_TypeArgs = {
  where: Rangers_Set_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rangers_Set_Type_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Rangers_Set_Type_TextArgs = {
  where: Rangers_Set_Type_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rangers_Set_Type_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Rangers_TokenArgs = {
  where: Rangers_Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rangers_Token_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Rangers_Token_TextArgs = {
  where: Rangers_Token_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rangers_Token_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Rangers_TypeArgs = {
  where: Rangers_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rangers_Type_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Rangers_Type_TextArgs = {
  where: Rangers_Type_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rangers_Type_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Taboo_SetArgs = {
  where: Taboo_Set_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Taboo_Set_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_CampaignsArgs = {
  where: User_Campaigns_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_FlagArgs = {
  where: User_Flag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Flag_By_PkArgs = {
  flag: User_Flag_Type_Enum;
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_User_Flag_TypeArgs = {
  where: User_Flag_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Flag_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_User_FriendsArgs = {
  where: User_Friends_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Received_Friend_RequestsArgs = {
  where: User_Received_Friend_Requests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Sent_Friend_RequestsArgs = {
  where: User_Sent_Friend_Requests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_SettingsArgs = {
  where: User_Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Settings_By_PkArgs = {
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_All_CardArgs = {
  objects: Array<All_Card_Insert_Input>;
  on_conflict?: InputMaybe<All_Card_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_All_Card_OneArgs = {
  object: All_Card_Insert_Input;
  on_conflict?: InputMaybe<All_Card_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_All_Card_TextArgs = {
  objects: Array<All_Card_Text_Insert_Input>;
  on_conflict?: InputMaybe<All_Card_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_All_Card_Text_OneArgs = {
  object: All_Card_Text_Insert_Input;
  on_conflict?: InputMaybe<All_Card_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_All_Card_UpdatedArgs = {
  objects: Array<All_Card_Updated_Insert_Input>;
  on_conflict?: InputMaybe<All_Card_Updated_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_All_Card_Updated_OneArgs = {
  object: All_Card_Updated_Insert_Input;
  on_conflict?: InputMaybe<All_Card_Updated_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Base_DecksArgs = {
  objects: Array<Base_Decks_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Base_Decks_OneArgs = {
  object: Base_Decks_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_CampaignArgs = {
  objects: Array<Campaign_Insert_Input>;
  on_conflict?: InputMaybe<Campaign_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaign_AccessArgs = {
  objects: Array<Campaign_Access_Insert_Input>;
  on_conflict?: InputMaybe<Campaign_Access_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaign_Access_OneArgs = {
  object: Campaign_Access_Insert_Input;
  on_conflict?: InputMaybe<Campaign_Access_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaign_DeckArgs = {
  objects: Array<Campaign_Deck_Insert_Input>;
  on_conflict?: InputMaybe<Campaign_Deck_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaign_Deck_OneArgs = {
  object: Campaign_Deck_Insert_Input;
  on_conflict?: InputMaybe<Campaign_Deck_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaign_DifficultyArgs = {
  objects: Array<Campaign_Difficulty_Insert_Input>;
  on_conflict?: InputMaybe<Campaign_Difficulty_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaign_Difficulty_OneArgs = {
  object: Campaign_Difficulty_Insert_Input;
  on_conflict?: InputMaybe<Campaign_Difficulty_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaign_GuideArgs = {
  objects: Array<Campaign_Guide_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Campaign_Guide_OneArgs = {
  object: Campaign_Guide_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Campaign_InvestigatorArgs = {
  objects: Array<Campaign_Investigator_Insert_Input>;
  on_conflict?: InputMaybe<Campaign_Investigator_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaign_Investigator_OneArgs = {
  object: Campaign_Investigator_Insert_Input;
  on_conflict?: InputMaybe<Campaign_Investigator_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaign_OneArgs = {
  object: Campaign_Insert_Input;
  on_conflict?: InputMaybe<Campaign_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CardArgs = {
  objects: Array<Card_Insert_Input>;
  on_conflict?: InputMaybe<Card_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Card_CycleArgs = {
  objects: Array<Card_Cycle_Insert_Input>;
  on_conflict?: InputMaybe<Card_Cycle_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Card_Cycle_OneArgs = {
  object: Card_Cycle_Insert_Input;
  on_conflict?: InputMaybe<Card_Cycle_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Card_Encounter_SetArgs = {
  objects: Array<Card_Encounter_Set_Insert_Input>;
  on_conflict?: InputMaybe<Card_Encounter_Set_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Card_Encounter_Set_OneArgs = {
  object: Card_Encounter_Set_Insert_Input;
  on_conflict?: InputMaybe<Card_Encounter_Set_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Card_OneArgs = {
  object: Card_Insert_Input;
  on_conflict?: InputMaybe<Card_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Card_PackArgs = {
  objects: Array<Card_Pack_Insert_Input>;
  on_conflict?: InputMaybe<Card_Pack_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Card_Pack_OneArgs = {
  object: Card_Pack_Insert_Input;
  on_conflict?: InputMaybe<Card_Pack_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Card_Subtype_NameArgs = {
  objects: Array<Card_Subtype_Name_Insert_Input>;
  on_conflict?: InputMaybe<Card_Subtype_Name_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Card_Subtype_Name_OneArgs = {
  object: Card_Subtype_Name_Insert_Input;
  on_conflict?: InputMaybe<Card_Subtype_Name_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Card_TextArgs = {
  objects: Array<Card_Text_Insert_Input>;
  on_conflict?: InputMaybe<Card_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Card_Text_OneArgs = {
  object: Card_Text_Insert_Input;
  on_conflict?: InputMaybe<Card_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Card_Type_CodeArgs = {
  objects: Array<Card_Type_Code_Insert_Input>;
  on_conflict?: InputMaybe<Card_Type_Code_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Card_Type_Code_OneArgs = {
  object: Card_Type_Code_Insert_Input;
  on_conflict?: InputMaybe<Card_Type_Code_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Card_Type_NameArgs = {
  objects: Array<Card_Type_Name_Insert_Input>;
  on_conflict?: InputMaybe<Card_Type_Name_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Card_Type_Name_OneArgs = {
  object: Card_Type_Name_Insert_Input;
  on_conflict?: InputMaybe<Card_Type_Name_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chaos_Bag_ResultArgs = {
  objects: Array<Chaos_Bag_Result_Insert_Input>;
  on_conflict?: InputMaybe<Chaos_Bag_Result_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chaos_Bag_Result_OneArgs = {
  object: Chaos_Bag_Result_Insert_Input;
  on_conflict?: InputMaybe<Chaos_Bag_Result_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chaos_Bag_Tarot_ModeArgs = {
  objects: Array<Chaos_Bag_Tarot_Mode_Insert_Input>;
  on_conflict?: InputMaybe<Chaos_Bag_Tarot_Mode_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chaos_Bag_Tarot_Mode_OneArgs = {
  object: Chaos_Bag_Tarot_Mode_Insert_Input;
  on_conflict?: InputMaybe<Chaos_Bag_Tarot_Mode_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CycleArgs = {
  objects: Array<Cycle_Insert_Input>;
  on_conflict?: InputMaybe<Cycle_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cycle_NameArgs = {
  objects: Array<Cycle_Name_Insert_Input>;
  on_conflict?: InputMaybe<Cycle_Name_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cycle_Name_OneArgs = {
  object: Cycle_Name_Insert_Input;
  on_conflict?: InputMaybe<Cycle_Name_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cycle_OneArgs = {
  object: Cycle_Insert_Input;
  on_conflict?: InputMaybe<Cycle_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Faction_NameArgs = {
  objects: Array<Faction_Name_Insert_Input>;
  on_conflict?: InputMaybe<Faction_Name_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Faction_Name_OneArgs = {
  object: Faction_Name_Insert_Input;
  on_conflict?: InputMaybe<Faction_Name_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FaqArgs = {
  objects: Array<Faq_Insert_Input>;
  on_conflict?: InputMaybe<Faq_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Faq_OneArgs = {
  object: Faq_Insert_Input;
  on_conflict?: InputMaybe<Faq_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Faq_TextArgs = {
  objects: Array<Faq_Text_Insert_Input>;
  on_conflict?: InputMaybe<Faq_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Faq_Text_OneArgs = {
  object: Faq_Text_Insert_Input;
  on_conflict?: InputMaybe<Faq_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Friend_StatusArgs = {
  objects: Array<Friend_Status_Insert_Input>;
  on_conflict?: InputMaybe<Friend_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Friend_Status_OneArgs = {
  object: Friend_Status_Insert_Input;
  on_conflict?: InputMaybe<Friend_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Friend_Status_TypeArgs = {
  objects: Array<Friend_Status_Type_Insert_Input>;
  on_conflict?: InputMaybe<Friend_Status_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Friend_Status_Type_OneArgs = {
  object: Friend_Status_Type_Insert_Input;
  on_conflict?: InputMaybe<Friend_Status_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Full_CardArgs = {
  objects: Array<Full_Card_Insert_Input>;
  on_conflict?: InputMaybe<Full_Card_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Full_Card_OneArgs = {
  object: Full_Card_Insert_Input;
  on_conflict?: InputMaybe<Full_Card_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Full_Card_TextArgs = {
  objects: Array<Full_Card_Text_Insert_Input>;
  on_conflict?: InputMaybe<Full_Card_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Full_Card_Text_OneArgs = {
  object: Full_Card_Text_Insert_Input;
  on_conflict?: InputMaybe<Full_Card_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GenderArgs = {
  objects: Array<Gender_Insert_Input>;
  on_conflict?: InputMaybe<Gender_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gender_OneArgs = {
  object: Gender_Insert_Input;
  on_conflict?: InputMaybe<Gender_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Guide_AchievementArgs = {
  objects: Array<Guide_Achievement_Insert_Input>;
  on_conflict?: InputMaybe<Guide_Achievement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Guide_Achievement_OneArgs = {
  object: Guide_Achievement_Insert_Input;
  on_conflict?: InputMaybe<Guide_Achievement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Guide_InputArgs = {
  objects: Array<Guide_Input_Insert_Input>;
  on_conflict?: InputMaybe<Guide_Input_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Guide_Input_OneArgs = {
  object: Guide_Input_Insert_Input;
  on_conflict?: InputMaybe<Guide_Input_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Investigator_DataArgs = {
  objects: Array<Investigator_Data_Insert_Input>;
  on_conflict?: InputMaybe<Investigator_Data_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Investigator_Data_OneArgs = {
  object: Investigator_Data_Insert_Input;
  on_conflict?: InputMaybe<Investigator_Data_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Latest_DecksArgs = {
  objects: Array<Latest_Decks_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Latest_Decks_OneArgs = {
  object: Latest_Decks_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Local_DecksArgs = {
  objects: Array<Local_Decks_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Local_Decks_OneArgs = {
  object: Local_Decks_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_PackArgs = {
  objects: Array<Pack_Insert_Input>;
  on_conflict?: InputMaybe<Pack_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pack_NameArgs = {
  objects: Array<Pack_Name_Insert_Input>;
  on_conflict?: InputMaybe<Pack_Name_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pack_Name_OneArgs = {
  object: Pack_Name_Insert_Input;
  on_conflict?: InputMaybe<Pack_Name_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pack_OneArgs = {
  object: Pack_Insert_Input;
  on_conflict?: InputMaybe<Pack_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_AspectArgs = {
  objects: Array<Rangers_Aspect_Insert_Input>;
  on_conflict?: InputMaybe<Rangers_Aspect_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_Aspect_OneArgs = {
  object: Rangers_Aspect_Insert_Input;
  on_conflict?: InputMaybe<Rangers_Aspect_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_Aspect_TextArgs = {
  objects: Array<Rangers_Aspect_Text_Insert_Input>;
  on_conflict?: InputMaybe<Rangers_Aspect_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_Aspect_Text_OneArgs = {
  object: Rangers_Aspect_Text_Insert_Input;
  on_conflict?: InputMaybe<Rangers_Aspect_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_CardArgs = {
  objects: Array<Rangers_Card_Insert_Input>;
  on_conflict?: InputMaybe<Rangers_Card_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_Card_OneArgs = {
  object: Rangers_Card_Insert_Input;
  on_conflict?: InputMaybe<Rangers_Card_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_Card_TextArgs = {
  objects: Array<Rangers_Card_Text_Insert_Input>;
  on_conflict?: InputMaybe<Rangers_Card_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_Card_Text_OneArgs = {
  object: Rangers_Card_Text_Insert_Input;
  on_conflict?: InputMaybe<Rangers_Card_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_LocaleArgs = {
  objects: Array<Rangers_Locale_Insert_Input>;
  on_conflict?: InputMaybe<Rangers_Locale_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_Locale_OneArgs = {
  object: Rangers_Locale_Insert_Input;
  on_conflict?: InputMaybe<Rangers_Locale_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_PackArgs = {
  objects: Array<Rangers_Pack_Insert_Input>;
  on_conflict?: InputMaybe<Rangers_Pack_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_Pack_OneArgs = {
  object: Rangers_Pack_Insert_Input;
  on_conflict?: InputMaybe<Rangers_Pack_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_Pack_TextArgs = {
  objects: Array<Rangers_Pack_Text_Insert_Input>;
  on_conflict?: InputMaybe<Rangers_Pack_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_Pack_Text_OneArgs = {
  object: Rangers_Pack_Text_Insert_Input;
  on_conflict?: InputMaybe<Rangers_Pack_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_SetArgs = {
  objects: Array<Rangers_Set_Insert_Input>;
  on_conflict?: InputMaybe<Rangers_Set_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_Set_OneArgs = {
  object: Rangers_Set_Insert_Input;
  on_conflict?: InputMaybe<Rangers_Set_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_Set_TextArgs = {
  objects: Array<Rangers_Set_Text_Insert_Input>;
  on_conflict?: InputMaybe<Rangers_Set_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_Set_Text_OneArgs = {
  object: Rangers_Set_Text_Insert_Input;
  on_conflict?: InputMaybe<Rangers_Set_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_Set_TypeArgs = {
  objects: Array<Rangers_Set_Type_Insert_Input>;
  on_conflict?: InputMaybe<Rangers_Set_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_Set_Type_OneArgs = {
  object: Rangers_Set_Type_Insert_Input;
  on_conflict?: InputMaybe<Rangers_Set_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_Set_Type_TextArgs = {
  objects: Array<Rangers_Set_Type_Text_Insert_Input>;
  on_conflict?: InputMaybe<Rangers_Set_Type_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_Set_Type_Text_OneArgs = {
  object: Rangers_Set_Type_Text_Insert_Input;
  on_conflict?: InputMaybe<Rangers_Set_Type_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_TokenArgs = {
  objects: Array<Rangers_Token_Insert_Input>;
  on_conflict?: InputMaybe<Rangers_Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_Token_OneArgs = {
  object: Rangers_Token_Insert_Input;
  on_conflict?: InputMaybe<Rangers_Token_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_Token_TextArgs = {
  objects: Array<Rangers_Token_Text_Insert_Input>;
  on_conflict?: InputMaybe<Rangers_Token_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_Token_Text_OneArgs = {
  object: Rangers_Token_Text_Insert_Input;
  on_conflict?: InputMaybe<Rangers_Token_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_TypeArgs = {
  objects: Array<Rangers_Type_Insert_Input>;
  on_conflict?: InputMaybe<Rangers_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_Type_OneArgs = {
  object: Rangers_Type_Insert_Input;
  on_conflict?: InputMaybe<Rangers_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_Type_TextArgs = {
  objects: Array<Rangers_Type_Text_Insert_Input>;
  on_conflict?: InputMaybe<Rangers_Type_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rangers_Type_Text_OneArgs = {
  object: Rangers_Type_Text_Insert_Input;
  on_conflict?: InputMaybe<Rangers_Type_Text_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Taboo_SetArgs = {
  objects: Array<Taboo_Set_Insert_Input>;
  on_conflict?: InputMaybe<Taboo_Set_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Taboo_Set_OneArgs = {
  object: Taboo_Set_Insert_Input;
  on_conflict?: InputMaybe<Taboo_Set_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_CampaignsArgs = {
  objects: Array<User_Campaigns_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_User_Campaigns_OneArgs = {
  object: User_Campaigns_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_User_FlagArgs = {
  objects: Array<User_Flag_Insert_Input>;
  on_conflict?: InputMaybe<User_Flag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Flag_OneArgs = {
  object: User_Flag_Insert_Input;
  on_conflict?: InputMaybe<User_Flag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Flag_TypeArgs = {
  objects: Array<User_Flag_Type_Insert_Input>;
  on_conflict?: InputMaybe<User_Flag_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Flag_Type_OneArgs = {
  object: User_Flag_Type_Insert_Input;
  on_conflict?: InputMaybe<User_Flag_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_FriendsArgs = {
  objects: Array<User_Friends_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_User_Friends_OneArgs = {
  object: User_Friends_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_User_Received_Friend_RequestsArgs = {
  objects: Array<User_Received_Friend_Requests_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_User_Received_Friend_Requests_OneArgs = {
  object: User_Received_Friend_Requests_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_User_Sent_Friend_RequestsArgs = {
  objects: Array<User_Sent_Friend_Requests_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_User_Sent_Friend_Requests_OneArgs = {
  object: User_Sent_Friend_Requests_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_User_SettingsArgs = {
  objects: Array<User_Settings_Insert_Input>;
  on_conflict?: InputMaybe<User_Settings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Settings_OneArgs = {
  object: User_Settings_Insert_Input;
  on_conflict?: InputMaybe<User_Settings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_All_CardArgs = {
  _append?: InputMaybe<All_Card_Append_Input>;
  _delete_at_path?: InputMaybe<All_Card_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<All_Card_Delete_Elem_Input>;
  _delete_key?: InputMaybe<All_Card_Delete_Key_Input>;
  _inc?: InputMaybe<All_Card_Inc_Input>;
  _prepend?: InputMaybe<All_Card_Prepend_Input>;
  _set?: InputMaybe<All_Card_Set_Input>;
  where: All_Card_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_All_Card_By_PkArgs = {
  _append?: InputMaybe<All_Card_Append_Input>;
  _delete_at_path?: InputMaybe<All_Card_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<All_Card_Delete_Elem_Input>;
  _delete_key?: InputMaybe<All_Card_Delete_Key_Input>;
  _inc?: InputMaybe<All_Card_Inc_Input>;
  _prepend?: InputMaybe<All_Card_Prepend_Input>;
  _set?: InputMaybe<All_Card_Set_Input>;
  pk_columns: All_Card_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_All_Card_ManyArgs = {
  updates: Array<All_Card_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_All_Card_TextArgs = {
  _set?: InputMaybe<All_Card_Text_Set_Input>;
  where: All_Card_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_All_Card_Text_By_PkArgs = {
  _set?: InputMaybe<All_Card_Text_Set_Input>;
  pk_columns: All_Card_Text_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_All_Card_Text_ManyArgs = {
  updates: Array<All_Card_Text_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_All_Card_UpdatedArgs = {
  _inc?: InputMaybe<All_Card_Updated_Inc_Input>;
  _set?: InputMaybe<All_Card_Updated_Set_Input>;
  where: All_Card_Updated_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_All_Card_Updated_By_PkArgs = {
  _inc?: InputMaybe<All_Card_Updated_Inc_Input>;
  _set?: InputMaybe<All_Card_Updated_Set_Input>;
  pk_columns: All_Card_Updated_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_All_Card_Updated_ManyArgs = {
  updates: Array<All_Card_Updated_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Base_DecksArgs = {
  _inc?: InputMaybe<Base_Decks_Inc_Input>;
  _set?: InputMaybe<Base_Decks_Set_Input>;
  where: Base_Decks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Base_Decks_ManyArgs = {
  updates: Array<Base_Decks_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CampaignArgs = {
  _append?: InputMaybe<Campaign_Append_Input>;
  _delete_at_path?: InputMaybe<Campaign_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Campaign_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Campaign_Delete_Key_Input>;
  _inc?: InputMaybe<Campaign_Inc_Input>;
  _prepend?: InputMaybe<Campaign_Prepend_Input>;
  _set?: InputMaybe<Campaign_Set_Input>;
  where: Campaign_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_AccessArgs = {
  _inc?: InputMaybe<Campaign_Access_Inc_Input>;
  _set?: InputMaybe<Campaign_Access_Set_Input>;
  where: Campaign_Access_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_Access_By_PkArgs = {
  _inc?: InputMaybe<Campaign_Access_Inc_Input>;
  _set?: InputMaybe<Campaign_Access_Set_Input>;
  pk_columns: Campaign_Access_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_Access_ManyArgs = {
  updates: Array<Campaign_Access_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_By_PkArgs = {
  _append?: InputMaybe<Campaign_Append_Input>;
  _delete_at_path?: InputMaybe<Campaign_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Campaign_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Campaign_Delete_Key_Input>;
  _inc?: InputMaybe<Campaign_Inc_Input>;
  _prepend?: InputMaybe<Campaign_Prepend_Input>;
  _set?: InputMaybe<Campaign_Set_Input>;
  pk_columns: Campaign_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_DeckArgs = {
  _append?: InputMaybe<Campaign_Deck_Append_Input>;
  _delete_at_path?: InputMaybe<Campaign_Deck_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Campaign_Deck_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Campaign_Deck_Delete_Key_Input>;
  _inc?: InputMaybe<Campaign_Deck_Inc_Input>;
  _prepend?: InputMaybe<Campaign_Deck_Prepend_Input>;
  _set?: InputMaybe<Campaign_Deck_Set_Input>;
  where: Campaign_Deck_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_Deck_By_PkArgs = {
  _append?: InputMaybe<Campaign_Deck_Append_Input>;
  _delete_at_path?: InputMaybe<Campaign_Deck_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Campaign_Deck_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Campaign_Deck_Delete_Key_Input>;
  _inc?: InputMaybe<Campaign_Deck_Inc_Input>;
  _prepend?: InputMaybe<Campaign_Deck_Prepend_Input>;
  _set?: InputMaybe<Campaign_Deck_Set_Input>;
  pk_columns: Campaign_Deck_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_Deck_ManyArgs = {
  updates: Array<Campaign_Deck_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_DifficultyArgs = {
  _set?: InputMaybe<Campaign_Difficulty_Set_Input>;
  where: Campaign_Difficulty_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_Difficulty_By_PkArgs = {
  _set?: InputMaybe<Campaign_Difficulty_Set_Input>;
  pk_columns: Campaign_Difficulty_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_Difficulty_ManyArgs = {
  updates: Array<Campaign_Difficulty_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_GuideArgs = {
  _inc?: InputMaybe<Campaign_Guide_Inc_Input>;
  _set?: InputMaybe<Campaign_Guide_Set_Input>;
  where: Campaign_Guide_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_Guide_ManyArgs = {
  updates: Array<Campaign_Guide_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_InvestigatorArgs = {
  _inc?: InputMaybe<Campaign_Investigator_Inc_Input>;
  _set?: InputMaybe<Campaign_Investigator_Set_Input>;
  where: Campaign_Investigator_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_Investigator_By_PkArgs = {
  _inc?: InputMaybe<Campaign_Investigator_Inc_Input>;
  _set?: InputMaybe<Campaign_Investigator_Set_Input>;
  pk_columns: Campaign_Investigator_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_Investigator_ManyArgs = {
  updates: Array<Campaign_Investigator_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_ManyArgs = {
  updates: Array<Campaign_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CardArgs = {
  _append?: InputMaybe<Card_Append_Input>;
  _delete_at_path?: InputMaybe<Card_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Card_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Card_Delete_Key_Input>;
  _inc?: InputMaybe<Card_Inc_Input>;
  _prepend?: InputMaybe<Card_Prepend_Input>;
  _set?: InputMaybe<Card_Set_Input>;
  where: Card_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Card_By_PkArgs = {
  _append?: InputMaybe<Card_Append_Input>;
  _delete_at_path?: InputMaybe<Card_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Card_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Card_Delete_Key_Input>;
  _inc?: InputMaybe<Card_Inc_Input>;
  _prepend?: InputMaybe<Card_Prepend_Input>;
  _set?: InputMaybe<Card_Set_Input>;
  pk_columns: Card_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Card_CycleArgs = {
  _inc?: InputMaybe<Card_Cycle_Inc_Input>;
  _set?: InputMaybe<Card_Cycle_Set_Input>;
  where: Card_Cycle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Card_Cycle_By_PkArgs = {
  _inc?: InputMaybe<Card_Cycle_Inc_Input>;
  _set?: InputMaybe<Card_Cycle_Set_Input>;
  pk_columns: Card_Cycle_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Card_Cycle_ManyArgs = {
  updates: Array<Card_Cycle_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Card_Encounter_SetArgs = {
  _set?: InputMaybe<Card_Encounter_Set_Set_Input>;
  where: Card_Encounter_Set_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Card_Encounter_Set_By_PkArgs = {
  _set?: InputMaybe<Card_Encounter_Set_Set_Input>;
  pk_columns: Card_Encounter_Set_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Card_Encounter_Set_ManyArgs = {
  updates: Array<Card_Encounter_Set_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Card_ManyArgs = {
  updates: Array<Card_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Card_PackArgs = {
  _inc?: InputMaybe<Card_Pack_Inc_Input>;
  _set?: InputMaybe<Card_Pack_Set_Input>;
  where: Card_Pack_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Card_Pack_By_PkArgs = {
  _inc?: InputMaybe<Card_Pack_Inc_Input>;
  _set?: InputMaybe<Card_Pack_Set_Input>;
  pk_columns: Card_Pack_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Card_Pack_ManyArgs = {
  updates: Array<Card_Pack_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Card_Subtype_NameArgs = {
  _set?: InputMaybe<Card_Subtype_Name_Set_Input>;
  where: Card_Subtype_Name_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Card_Subtype_Name_By_PkArgs = {
  _set?: InputMaybe<Card_Subtype_Name_Set_Input>;
  pk_columns: Card_Subtype_Name_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Card_Subtype_Name_ManyArgs = {
  updates: Array<Card_Subtype_Name_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Card_TextArgs = {
  _set?: InputMaybe<Card_Text_Set_Input>;
  where: Card_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Card_Text_By_PkArgs = {
  _set?: InputMaybe<Card_Text_Set_Input>;
  pk_columns: Card_Text_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Card_Text_ManyArgs = {
  updates: Array<Card_Text_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Card_Type_CodeArgs = {
  _set?: InputMaybe<Card_Type_Code_Set_Input>;
  where: Card_Type_Code_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Card_Type_Code_By_PkArgs = {
  _set?: InputMaybe<Card_Type_Code_Set_Input>;
  pk_columns: Card_Type_Code_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Card_Type_Code_ManyArgs = {
  updates: Array<Card_Type_Code_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Card_Type_NameArgs = {
  _set?: InputMaybe<Card_Type_Name_Set_Input>;
  where: Card_Type_Name_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Card_Type_Name_By_PkArgs = {
  _set?: InputMaybe<Card_Type_Name_Set_Input>;
  pk_columns: Card_Type_Name_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Card_Type_Name_ManyArgs = {
  updates: Array<Card_Type_Name_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Chaos_Bag_ResultArgs = {
  _append?: InputMaybe<Chaos_Bag_Result_Append_Input>;
  _delete_at_path?: InputMaybe<Chaos_Bag_Result_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Chaos_Bag_Result_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Chaos_Bag_Result_Delete_Key_Input>;
  _inc?: InputMaybe<Chaos_Bag_Result_Inc_Input>;
  _prepend?: InputMaybe<Chaos_Bag_Result_Prepend_Input>;
  _set?: InputMaybe<Chaos_Bag_Result_Set_Input>;
  where: Chaos_Bag_Result_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chaos_Bag_Result_By_PkArgs = {
  _append?: InputMaybe<Chaos_Bag_Result_Append_Input>;
  _delete_at_path?: InputMaybe<Chaos_Bag_Result_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Chaos_Bag_Result_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Chaos_Bag_Result_Delete_Key_Input>;
  _inc?: InputMaybe<Chaos_Bag_Result_Inc_Input>;
  _prepend?: InputMaybe<Chaos_Bag_Result_Prepend_Input>;
  _set?: InputMaybe<Chaos_Bag_Result_Set_Input>;
  pk_columns: Chaos_Bag_Result_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Chaos_Bag_Result_ManyArgs = {
  updates: Array<Chaos_Bag_Result_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Chaos_Bag_Tarot_ModeArgs = {
  _set?: InputMaybe<Chaos_Bag_Tarot_Mode_Set_Input>;
  where: Chaos_Bag_Tarot_Mode_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chaos_Bag_Tarot_Mode_By_PkArgs = {
  _set?: InputMaybe<Chaos_Bag_Tarot_Mode_Set_Input>;
  pk_columns: Chaos_Bag_Tarot_Mode_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Chaos_Bag_Tarot_Mode_ManyArgs = {
  updates: Array<Chaos_Bag_Tarot_Mode_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CycleArgs = {
  _inc?: InputMaybe<Cycle_Inc_Input>;
  _set?: InputMaybe<Cycle_Set_Input>;
  where: Cycle_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cycle_By_PkArgs = {
  _inc?: InputMaybe<Cycle_Inc_Input>;
  _set?: InputMaybe<Cycle_Set_Input>;
  pk_columns: Cycle_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cycle_ManyArgs = {
  updates: Array<Cycle_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Cycle_NameArgs = {
  _set?: InputMaybe<Cycle_Name_Set_Input>;
  where: Cycle_Name_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cycle_Name_By_PkArgs = {
  _set?: InputMaybe<Cycle_Name_Set_Input>;
  pk_columns: Cycle_Name_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cycle_Name_ManyArgs = {
  updates: Array<Cycle_Name_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Faction_NameArgs = {
  _set?: InputMaybe<Faction_Name_Set_Input>;
  where: Faction_Name_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Faction_Name_By_PkArgs = {
  _set?: InputMaybe<Faction_Name_Set_Input>;
  pk_columns: Faction_Name_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Faction_Name_ManyArgs = {
  updates: Array<Faction_Name_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FaqArgs = {
  _set?: InputMaybe<Faq_Set_Input>;
  where: Faq_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Faq_By_PkArgs = {
  _set?: InputMaybe<Faq_Set_Input>;
  pk_columns: Faq_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Faq_ManyArgs = {
  updates: Array<Faq_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Faq_TextArgs = {
  _set?: InputMaybe<Faq_Text_Set_Input>;
  where: Faq_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Faq_Text_By_PkArgs = {
  _set?: InputMaybe<Faq_Text_Set_Input>;
  pk_columns: Faq_Text_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Faq_Text_ManyArgs = {
  updates: Array<Faq_Text_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Friend_StatusArgs = {
  _set?: InputMaybe<Friend_Status_Set_Input>;
  where: Friend_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Friend_Status_By_PkArgs = {
  _set?: InputMaybe<Friend_Status_Set_Input>;
  pk_columns: Friend_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Friend_Status_ManyArgs = {
  updates: Array<Friend_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Friend_Status_TypeArgs = {
  _set?: InputMaybe<Friend_Status_Type_Set_Input>;
  where: Friend_Status_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Friend_Status_Type_By_PkArgs = {
  _set?: InputMaybe<Friend_Status_Type_Set_Input>;
  pk_columns: Friend_Status_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Friend_Status_Type_ManyArgs = {
  updates: Array<Friend_Status_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Full_CardArgs = {
  _append?: InputMaybe<Full_Card_Append_Input>;
  _delete_at_path?: InputMaybe<Full_Card_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Full_Card_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Full_Card_Delete_Key_Input>;
  _inc?: InputMaybe<Full_Card_Inc_Input>;
  _prepend?: InputMaybe<Full_Card_Prepend_Input>;
  _set?: InputMaybe<Full_Card_Set_Input>;
  where: Full_Card_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Full_Card_By_PkArgs = {
  _append?: InputMaybe<Full_Card_Append_Input>;
  _delete_at_path?: InputMaybe<Full_Card_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Full_Card_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Full_Card_Delete_Key_Input>;
  _inc?: InputMaybe<Full_Card_Inc_Input>;
  _prepend?: InputMaybe<Full_Card_Prepend_Input>;
  _set?: InputMaybe<Full_Card_Set_Input>;
  pk_columns: Full_Card_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Full_Card_ManyArgs = {
  updates: Array<Full_Card_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Full_Card_TextArgs = {
  _set?: InputMaybe<Full_Card_Text_Set_Input>;
  where: Full_Card_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Full_Card_Text_By_PkArgs = {
  _set?: InputMaybe<Full_Card_Text_Set_Input>;
  pk_columns: Full_Card_Text_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Full_Card_Text_ManyArgs = {
  updates: Array<Full_Card_Text_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GenderArgs = {
  _set?: InputMaybe<Gender_Set_Input>;
  where: Gender_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gender_By_PkArgs = {
  _set?: InputMaybe<Gender_Set_Input>;
  pk_columns: Gender_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Gender_ManyArgs = {
  updates: Array<Gender_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Guide_AchievementArgs = {
  _inc?: InputMaybe<Guide_Achievement_Inc_Input>;
  _set?: InputMaybe<Guide_Achievement_Set_Input>;
  where: Guide_Achievement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Guide_Achievement_By_PkArgs = {
  _inc?: InputMaybe<Guide_Achievement_Inc_Input>;
  _set?: InputMaybe<Guide_Achievement_Set_Input>;
  pk_columns: Guide_Achievement_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Guide_Achievement_ManyArgs = {
  updates: Array<Guide_Achievement_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Guide_InputArgs = {
  _append?: InputMaybe<Guide_Input_Append_Input>;
  _delete_at_path?: InputMaybe<Guide_Input_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Guide_Input_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Guide_Input_Delete_Key_Input>;
  _inc?: InputMaybe<Guide_Input_Inc_Input>;
  _prepend?: InputMaybe<Guide_Input_Prepend_Input>;
  _set?: InputMaybe<Guide_Input_Set_Input>;
  where: Guide_Input_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Guide_Input_By_PkArgs = {
  _append?: InputMaybe<Guide_Input_Append_Input>;
  _delete_at_path?: InputMaybe<Guide_Input_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Guide_Input_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Guide_Input_Delete_Key_Input>;
  _inc?: InputMaybe<Guide_Input_Inc_Input>;
  _prepend?: InputMaybe<Guide_Input_Prepend_Input>;
  _set?: InputMaybe<Guide_Input_Set_Input>;
  pk_columns: Guide_Input_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Guide_Input_ManyArgs = {
  updates: Array<Guide_Input_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Investigator_DataArgs = {
  _append?: InputMaybe<Investigator_Data_Append_Input>;
  _delete_at_path?: InputMaybe<Investigator_Data_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Investigator_Data_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Investigator_Data_Delete_Key_Input>;
  _inc?: InputMaybe<Investigator_Data_Inc_Input>;
  _prepend?: InputMaybe<Investigator_Data_Prepend_Input>;
  _set?: InputMaybe<Investigator_Data_Set_Input>;
  where: Investigator_Data_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Investigator_Data_By_PkArgs = {
  _append?: InputMaybe<Investigator_Data_Append_Input>;
  _delete_at_path?: InputMaybe<Investigator_Data_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Investigator_Data_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Investigator_Data_Delete_Key_Input>;
  _inc?: InputMaybe<Investigator_Data_Inc_Input>;
  _prepend?: InputMaybe<Investigator_Data_Prepend_Input>;
  _set?: InputMaybe<Investigator_Data_Set_Input>;
  pk_columns: Investigator_Data_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Investigator_Data_ManyArgs = {
  updates: Array<Investigator_Data_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Latest_DecksArgs = {
  _inc?: InputMaybe<Latest_Decks_Inc_Input>;
  _set?: InputMaybe<Latest_Decks_Set_Input>;
  where: Latest_Decks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Latest_Decks_ManyArgs = {
  updates: Array<Latest_Decks_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Local_DecksArgs = {
  _inc?: InputMaybe<Local_Decks_Inc_Input>;
  _set?: InputMaybe<Local_Decks_Set_Input>;
  where: Local_Decks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Local_Decks_ManyArgs = {
  updates: Array<Local_Decks_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PackArgs = {
  _inc?: InputMaybe<Pack_Inc_Input>;
  _set?: InputMaybe<Pack_Set_Input>;
  where: Pack_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pack_By_PkArgs = {
  _inc?: InputMaybe<Pack_Inc_Input>;
  _set?: InputMaybe<Pack_Set_Input>;
  pk_columns: Pack_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pack_ManyArgs = {
  updates: Array<Pack_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Pack_NameArgs = {
  _set?: InputMaybe<Pack_Name_Set_Input>;
  where: Pack_Name_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pack_Name_By_PkArgs = {
  _set?: InputMaybe<Pack_Name_Set_Input>;
  pk_columns: Pack_Name_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pack_Name_ManyArgs = {
  updates: Array<Pack_Name_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_AspectArgs = {
  _set?: InputMaybe<Rangers_Aspect_Set_Input>;
  where: Rangers_Aspect_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Aspect_By_PkArgs = {
  _set?: InputMaybe<Rangers_Aspect_Set_Input>;
  pk_columns: Rangers_Aspect_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Aspect_ManyArgs = {
  updates: Array<Rangers_Aspect_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Aspect_TextArgs = {
  _set?: InputMaybe<Rangers_Aspect_Text_Set_Input>;
  where: Rangers_Aspect_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Aspect_Text_By_PkArgs = {
  _set?: InputMaybe<Rangers_Aspect_Text_Set_Input>;
  pk_columns: Rangers_Aspect_Text_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Aspect_Text_ManyArgs = {
  updates: Array<Rangers_Aspect_Text_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_CardArgs = {
  _inc?: InputMaybe<Rangers_Card_Inc_Input>;
  _set?: InputMaybe<Rangers_Card_Set_Input>;
  where: Rangers_Card_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Card_By_PkArgs = {
  _inc?: InputMaybe<Rangers_Card_Inc_Input>;
  _set?: InputMaybe<Rangers_Card_Set_Input>;
  pk_columns: Rangers_Card_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Card_ManyArgs = {
  updates: Array<Rangers_Card_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Card_TextArgs = {
  _set?: InputMaybe<Rangers_Card_Text_Set_Input>;
  where: Rangers_Card_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Card_Text_By_PkArgs = {
  _set?: InputMaybe<Rangers_Card_Text_Set_Input>;
  pk_columns: Rangers_Card_Text_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Card_Text_ManyArgs = {
  updates: Array<Rangers_Card_Text_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_LocaleArgs = {
  _set?: InputMaybe<Rangers_Locale_Set_Input>;
  where: Rangers_Locale_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Locale_By_PkArgs = {
  _set?: InputMaybe<Rangers_Locale_Set_Input>;
  pk_columns: Rangers_Locale_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Locale_ManyArgs = {
  updates: Array<Rangers_Locale_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_PackArgs = {
  _inc?: InputMaybe<Rangers_Pack_Inc_Input>;
  _set?: InputMaybe<Rangers_Pack_Set_Input>;
  where: Rangers_Pack_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Pack_By_PkArgs = {
  _inc?: InputMaybe<Rangers_Pack_Inc_Input>;
  _set?: InputMaybe<Rangers_Pack_Set_Input>;
  pk_columns: Rangers_Pack_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Pack_ManyArgs = {
  updates: Array<Rangers_Pack_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Pack_TextArgs = {
  _set?: InputMaybe<Rangers_Pack_Text_Set_Input>;
  where: Rangers_Pack_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Pack_Text_By_PkArgs = {
  _set?: InputMaybe<Rangers_Pack_Text_Set_Input>;
  pk_columns: Rangers_Pack_Text_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Pack_Text_ManyArgs = {
  updates: Array<Rangers_Pack_Text_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_SetArgs = {
  _inc?: InputMaybe<Rangers_Set_Inc_Input>;
  _set?: InputMaybe<Rangers_Set_Set_Input>;
  where: Rangers_Set_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Set_By_PkArgs = {
  _inc?: InputMaybe<Rangers_Set_Inc_Input>;
  _set?: InputMaybe<Rangers_Set_Set_Input>;
  pk_columns: Rangers_Set_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Set_ManyArgs = {
  updates: Array<Rangers_Set_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Set_TextArgs = {
  _set?: InputMaybe<Rangers_Set_Text_Set_Input>;
  where: Rangers_Set_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Set_Text_By_PkArgs = {
  _set?: InputMaybe<Rangers_Set_Text_Set_Input>;
  pk_columns: Rangers_Set_Text_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Set_Text_ManyArgs = {
  updates: Array<Rangers_Set_Text_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Set_TypeArgs = {
  _set?: InputMaybe<Rangers_Set_Type_Set_Input>;
  where: Rangers_Set_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Set_Type_By_PkArgs = {
  _set?: InputMaybe<Rangers_Set_Type_Set_Input>;
  pk_columns: Rangers_Set_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Set_Type_ManyArgs = {
  updates: Array<Rangers_Set_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Set_Type_TextArgs = {
  _set?: InputMaybe<Rangers_Set_Type_Text_Set_Input>;
  where: Rangers_Set_Type_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Set_Type_Text_By_PkArgs = {
  _set?: InputMaybe<Rangers_Set_Type_Text_Set_Input>;
  pk_columns: Rangers_Set_Type_Text_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Set_Type_Text_ManyArgs = {
  updates: Array<Rangers_Set_Type_Text_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_TokenArgs = {
  _set?: InputMaybe<Rangers_Token_Set_Input>;
  where: Rangers_Token_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Token_By_PkArgs = {
  _set?: InputMaybe<Rangers_Token_Set_Input>;
  pk_columns: Rangers_Token_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Token_ManyArgs = {
  updates: Array<Rangers_Token_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Token_TextArgs = {
  _set?: InputMaybe<Rangers_Token_Text_Set_Input>;
  where: Rangers_Token_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Token_Text_By_PkArgs = {
  _set?: InputMaybe<Rangers_Token_Text_Set_Input>;
  pk_columns: Rangers_Token_Text_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Token_Text_ManyArgs = {
  updates: Array<Rangers_Token_Text_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_TypeArgs = {
  _set?: InputMaybe<Rangers_Type_Set_Input>;
  where: Rangers_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Type_By_PkArgs = {
  _set?: InputMaybe<Rangers_Type_Set_Input>;
  pk_columns: Rangers_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Type_ManyArgs = {
  updates: Array<Rangers_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Type_TextArgs = {
  _set?: InputMaybe<Rangers_Type_Text_Set_Input>;
  where: Rangers_Type_Text_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Type_Text_By_PkArgs = {
  _set?: InputMaybe<Rangers_Type_Text_Set_Input>;
  pk_columns: Rangers_Type_Text_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rangers_Type_Text_ManyArgs = {
  updates: Array<Rangers_Type_Text_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Taboo_SetArgs = {
  _inc?: InputMaybe<Taboo_Set_Inc_Input>;
  _set?: InputMaybe<Taboo_Set_Set_Input>;
  where: Taboo_Set_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Taboo_Set_By_PkArgs = {
  _inc?: InputMaybe<Taboo_Set_Inc_Input>;
  _set?: InputMaybe<Taboo_Set_Set_Input>;
  pk_columns: Taboo_Set_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Taboo_Set_ManyArgs = {
  updates: Array<Taboo_Set_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_CampaignsArgs = {
  _inc?: InputMaybe<User_Campaigns_Inc_Input>;
  _set?: InputMaybe<User_Campaigns_Set_Input>;
  where: User_Campaigns_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Campaigns_ManyArgs = {
  updates: Array<User_Campaigns_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_FlagArgs = {
  _set?: InputMaybe<User_Flag_Set_Input>;
  where: User_Flag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Flag_By_PkArgs = {
  _set?: InputMaybe<User_Flag_Set_Input>;
  pk_columns: User_Flag_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Flag_ManyArgs = {
  updates: Array<User_Flag_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Flag_TypeArgs = {
  _set?: InputMaybe<User_Flag_Type_Set_Input>;
  where: User_Flag_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Flag_Type_By_PkArgs = {
  _set?: InputMaybe<User_Flag_Type_Set_Input>;
  pk_columns: User_Flag_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Flag_Type_ManyArgs = {
  updates: Array<User_Flag_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_FriendsArgs = {
  _set?: InputMaybe<User_Friends_Set_Input>;
  where: User_Friends_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Friends_ManyArgs = {
  updates: Array<User_Friends_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Received_Friend_RequestsArgs = {
  _set?: InputMaybe<User_Received_Friend_Requests_Set_Input>;
  where: User_Received_Friend_Requests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Received_Friend_Requests_ManyArgs = {
  updates: Array<User_Received_Friend_Requests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Sent_Friend_RequestsArgs = {
  _set?: InputMaybe<User_Sent_Friend_Requests_Set_Input>;
  where: User_Sent_Friend_Requests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Sent_Friend_Requests_ManyArgs = {
  updates: Array<User_Sent_Friend_Requests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_SettingsArgs = {
  _append?: InputMaybe<User_Settings_Append_Input>;
  _delete_at_path?: InputMaybe<User_Settings_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Settings_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Settings_Delete_Key_Input>;
  _prepend?: InputMaybe<User_Settings_Prepend_Input>;
  _set?: InputMaybe<User_Settings_Set_Input>;
  where: User_Settings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Settings_By_PkArgs = {
  _append?: InputMaybe<User_Settings_Append_Input>;
  _delete_at_path?: InputMaybe<User_Settings_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Settings_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Settings_Delete_Key_Input>;
  _prepend?: InputMaybe<User_Settings_Prepend_Input>;
  _set?: InputMaybe<User_Settings_Set_Input>;
  pk_columns: User_Settings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Settings_ManyArgs = {
  updates: Array<User_Settings_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "pack" */
export type Pack = {
  __typename?: 'pack';
  /** An array relationship */
  cards: Array<All_Card>;
  /** An aggregate relationship */
  cards_aggregate: All_Card_Aggregate;
  code: Scalars['String'];
  /** An object relationship */
  cycle: Cycle;
  cycle_code: Scalars['String'];
  official: Scalars['Boolean'];
  position: Scalars['Int'];
  real_name: Scalars['String'];
  /** An array relationship */
  translations: Array<Pack_Name>;
  /** An aggregate relationship */
  translations_aggregate: Pack_Name_Aggregate;
};


/** columns and relationships of "pack" */
export type PackCardsArgs = {
  distinct_on?: InputMaybe<Array<All_Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<All_Card_Order_By>>;
  where?: InputMaybe<All_Card_Bool_Exp>;
};


/** columns and relationships of "pack" */
export type PackCards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<All_Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<All_Card_Order_By>>;
  where?: InputMaybe<All_Card_Bool_Exp>;
};


/** columns and relationships of "pack" */
export type PackTranslationsArgs = {
  distinct_on?: InputMaybe<Array<Pack_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pack_Name_Order_By>>;
  where?: InputMaybe<Pack_Name_Bool_Exp>;
};


/** columns and relationships of "pack" */
export type PackTranslations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pack_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pack_Name_Order_By>>;
  where?: InputMaybe<Pack_Name_Bool_Exp>;
};

/** aggregated selection of "pack" */
export type Pack_Aggregate = {
  __typename?: 'pack_aggregate';
  aggregate?: Maybe<Pack_Aggregate_Fields>;
  nodes: Array<Pack>;
};

export type Pack_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Pack_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Pack_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Pack_Aggregate_Bool_Exp_Count>;
};

export type Pack_Aggregate_Bool_Exp_Bool_And = {
  arguments: Pack_Select_Column_Pack_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Pack_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Pack_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Pack_Select_Column_Pack_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Pack_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Pack_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Pack_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Pack_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "pack" */
export type Pack_Aggregate_Fields = {
  __typename?: 'pack_aggregate_fields';
  avg?: Maybe<Pack_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Pack_Max_Fields>;
  min?: Maybe<Pack_Min_Fields>;
  stddev?: Maybe<Pack_Stddev_Fields>;
  stddev_pop?: Maybe<Pack_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pack_Stddev_Samp_Fields>;
  sum?: Maybe<Pack_Sum_Fields>;
  var_pop?: Maybe<Pack_Var_Pop_Fields>;
  var_samp?: Maybe<Pack_Var_Samp_Fields>;
  variance?: Maybe<Pack_Variance_Fields>;
};


/** aggregate fields of "pack" */
export type Pack_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pack_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "pack" */
export type Pack_Aggregate_Order_By = {
  avg?: InputMaybe<Pack_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pack_Max_Order_By>;
  min?: InputMaybe<Pack_Min_Order_By>;
  stddev?: InputMaybe<Pack_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Pack_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Pack_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Pack_Sum_Order_By>;
  var_pop?: InputMaybe<Pack_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Pack_Var_Samp_Order_By>;
  variance?: InputMaybe<Pack_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "pack" */
export type Pack_Arr_Rel_Insert_Input = {
  data: Array<Pack_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Pack_On_Conflict>;
};

/** aggregate avg on columns */
export type Pack_Avg_Fields = {
  __typename?: 'pack_avg_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "pack" */
export type Pack_Avg_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pack". All fields are combined with a logical 'AND'. */
export type Pack_Bool_Exp = {
  _and?: InputMaybe<Array<Pack_Bool_Exp>>;
  _not?: InputMaybe<Pack_Bool_Exp>;
  _or?: InputMaybe<Array<Pack_Bool_Exp>>;
  cards?: InputMaybe<All_Card_Bool_Exp>;
  cards_aggregate?: InputMaybe<All_Card_Aggregate_Bool_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  cycle?: InputMaybe<Cycle_Bool_Exp>;
  cycle_code?: InputMaybe<String_Comparison_Exp>;
  official?: InputMaybe<Boolean_Comparison_Exp>;
  position?: InputMaybe<Int_Comparison_Exp>;
  real_name?: InputMaybe<String_Comparison_Exp>;
  translations?: InputMaybe<Pack_Name_Bool_Exp>;
  translations_aggregate?: InputMaybe<Pack_Name_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "pack" */
export enum Pack_Constraint {
  /** unique or primary key constraint on columns "code" */
  PackPkey = 'pack_pkey'
}

/** input type for incrementing numeric columns in table "pack" */
export type Pack_Inc_Input = {
  position?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "pack" */
export type Pack_Insert_Input = {
  cards?: InputMaybe<All_Card_Arr_Rel_Insert_Input>;
  code?: InputMaybe<Scalars['String']>;
  cycle?: InputMaybe<Cycle_Obj_Rel_Insert_Input>;
  cycle_code?: InputMaybe<Scalars['String']>;
  official?: InputMaybe<Scalars['Boolean']>;
  position?: InputMaybe<Scalars['Int']>;
  real_name?: InputMaybe<Scalars['String']>;
  translations?: InputMaybe<Pack_Name_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Pack_Max_Fields = {
  __typename?: 'pack_max_fields';
  code?: Maybe<Scalars['String']>;
  cycle_code?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  real_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "pack" */
export type Pack_Max_Order_By = {
  code?: InputMaybe<Order_By>;
  cycle_code?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  real_name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Pack_Min_Fields = {
  __typename?: 'pack_min_fields';
  code?: Maybe<Scalars['String']>;
  cycle_code?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  real_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "pack" */
export type Pack_Min_Order_By = {
  code?: InputMaybe<Order_By>;
  cycle_code?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  real_name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "pack" */
export type Pack_Mutation_Response = {
  __typename?: 'pack_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pack>;
};

/** columns and relationships of "pack_name" */
export type Pack_Name = {
  __typename?: 'pack_name';
  code: Scalars['String'];
  locale: Scalars['String'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "pack_name" */
export type Pack_Name_Aggregate = {
  __typename?: 'pack_name_aggregate';
  aggregate?: Maybe<Pack_Name_Aggregate_Fields>;
  nodes: Array<Pack_Name>;
};

export type Pack_Name_Aggregate_Bool_Exp = {
  count?: InputMaybe<Pack_Name_Aggregate_Bool_Exp_Count>;
};

export type Pack_Name_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Pack_Name_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Pack_Name_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "pack_name" */
export type Pack_Name_Aggregate_Fields = {
  __typename?: 'pack_name_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Pack_Name_Max_Fields>;
  min?: Maybe<Pack_Name_Min_Fields>;
};


/** aggregate fields of "pack_name" */
export type Pack_Name_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pack_Name_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "pack_name" */
export type Pack_Name_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pack_Name_Max_Order_By>;
  min?: InputMaybe<Pack_Name_Min_Order_By>;
};

/** input type for inserting array relation for remote table "pack_name" */
export type Pack_Name_Arr_Rel_Insert_Input = {
  data: Array<Pack_Name_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Pack_Name_On_Conflict>;
};

/** Boolean expression to filter rows from the table "pack_name". All fields are combined with a logical 'AND'. */
export type Pack_Name_Bool_Exp = {
  _and?: InputMaybe<Array<Pack_Name_Bool_Exp>>;
  _not?: InputMaybe<Pack_Name_Bool_Exp>;
  _or?: InputMaybe<Array<Pack_Name_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "pack_name" */
export enum Pack_Name_Constraint {
  /** unique or primary key constraint on columns "code", "locale" */
  PackNamePkey = 'pack_name_pkey'
}

/** input type for inserting data into table "pack_name" */
export type Pack_Name_Insert_Input = {
  code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Pack_Name_Max_Fields = {
  __typename?: 'pack_name_max_fields';
  code?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "pack_name" */
export type Pack_Name_Max_Order_By = {
  code?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Pack_Name_Min_Fields = {
  __typename?: 'pack_name_min_fields';
  code?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "pack_name" */
export type Pack_Name_Min_Order_By = {
  code?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "pack_name" */
export type Pack_Name_Mutation_Response = {
  __typename?: 'pack_name_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Pack_Name>;
};

/** on_conflict condition type for table "pack_name" */
export type Pack_Name_On_Conflict = {
  constraint: Pack_Name_Constraint;
  update_columns?: Array<Pack_Name_Update_Column>;
  where?: InputMaybe<Pack_Name_Bool_Exp>;
};

/** Ordering options when selecting data from "pack_name". */
export type Pack_Name_Order_By = {
  code?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: pack_name */
export type Pack_Name_Pk_Columns_Input = {
  code: Scalars['String'];
  locale: Scalars['String'];
};

/** select columns of table "pack_name" */
export enum Pack_Name_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "pack_name" */
export type Pack_Name_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "pack_name" */
export type Pack_Name_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pack_Name_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pack_Name_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "pack_name" */
export enum Pack_Name_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Pack_Name_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pack_Name_Set_Input>;
  where: Pack_Name_Bool_Exp;
};

/** input type for inserting object relation for remote table "pack" */
export type Pack_Obj_Rel_Insert_Input = {
  data: Pack_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Pack_On_Conflict>;
};

/** on_conflict condition type for table "pack" */
export type Pack_On_Conflict = {
  constraint: Pack_Constraint;
  update_columns?: Array<Pack_Update_Column>;
  where?: InputMaybe<Pack_Bool_Exp>;
};

/** Ordering options when selecting data from "pack". */
export type Pack_Order_By = {
  cards_aggregate?: InputMaybe<All_Card_Aggregate_Order_By>;
  code?: InputMaybe<Order_By>;
  cycle?: InputMaybe<Cycle_Order_By>;
  cycle_code?: InputMaybe<Order_By>;
  official?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  real_name?: InputMaybe<Order_By>;
  translations_aggregate?: InputMaybe<Pack_Name_Aggregate_Order_By>;
};

/** primary key columns input for table: pack */
export type Pack_Pk_Columns_Input = {
  code: Scalars['String'];
};

/** select columns of table "pack" */
export enum Pack_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CycleCode = 'cycle_code',
  /** column name */
  Official = 'official',
  /** column name */
  Position = 'position',
  /** column name */
  RealName = 'real_name'
}

/** select "pack_aggregate_bool_exp_bool_and_arguments_columns" columns of table "pack" */
export enum Pack_Select_Column_Pack_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Official = 'official'
}

/** select "pack_aggregate_bool_exp_bool_or_arguments_columns" columns of table "pack" */
export enum Pack_Select_Column_Pack_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Official = 'official'
}

/** input type for updating data in table "pack" */
export type Pack_Set_Input = {
  code?: InputMaybe<Scalars['String']>;
  cycle_code?: InputMaybe<Scalars['String']>;
  official?: InputMaybe<Scalars['Boolean']>;
  position?: InputMaybe<Scalars['Int']>;
  real_name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Pack_Stddev_Fields = {
  __typename?: 'pack_stddev_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "pack" */
export type Pack_Stddev_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Pack_Stddev_Pop_Fields = {
  __typename?: 'pack_stddev_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "pack" */
export type Pack_Stddev_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Pack_Stddev_Samp_Fields = {
  __typename?: 'pack_stddev_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "pack" */
export type Pack_Stddev_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "pack" */
export type Pack_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pack_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pack_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']>;
  cycle_code?: InputMaybe<Scalars['String']>;
  official?: InputMaybe<Scalars['Boolean']>;
  position?: InputMaybe<Scalars['Int']>;
  real_name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Pack_Sum_Fields = {
  __typename?: 'pack_sum_fields';
  position?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "pack" */
export type Pack_Sum_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** update columns of table "pack" */
export enum Pack_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CycleCode = 'cycle_code',
  /** column name */
  Official = 'official',
  /** column name */
  Position = 'position',
  /** column name */
  RealName = 'real_name'
}

export type Pack_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Pack_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pack_Set_Input>;
  where: Pack_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Pack_Var_Pop_Fields = {
  __typename?: 'pack_var_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "pack" */
export type Pack_Var_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Pack_Var_Samp_Fields = {
  __typename?: 'pack_var_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "pack" */
export type Pack_Var_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Pack_Variance_Fields = {
  __typename?: 'pack_variance_fields';
  position?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "pack" */
export type Pack_Variance_Order_By = {
  position?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "all_card" */
  all_card: Array<All_Card>;
  /** fetch aggregated fields from the table: "all_card" */
  all_card_aggregate: All_Card_Aggregate;
  /** fetch data from the table: "all_card" using primary key columns */
  all_card_by_pk?: Maybe<All_Card>;
  /** fetch data from the table: "all_card_text" */
  all_card_text: Array<All_Card_Text>;
  /** fetch aggregated fields from the table: "all_card_text" */
  all_card_text_aggregate: All_Card_Text_Aggregate;
  /** fetch data from the table: "all_card_text" using primary key columns */
  all_card_text_by_pk?: Maybe<All_Card_Text>;
  /** fetch data from the table: "all_card_updated" */
  all_card_updated: Array<All_Card_Updated>;
  /** fetch aggregated fields from the table: "all_card_updated" */
  all_card_updated_aggregate: All_Card_Updated_Aggregate;
  /** fetch data from the table: "all_card_updated" using primary key columns */
  all_card_updated_by_pk?: Maybe<All_Card_Updated>;
  /** An array relationship */
  base_decks: Array<Base_Decks>;
  /** An aggregate relationship */
  base_decks_aggregate: Base_Decks_Aggregate;
  /** fetch data from the table: "campaign" */
  campaign: Array<Campaign>;
  /** fetch data from the table: "campaign_access" */
  campaign_access: Array<Campaign_Access>;
  /** fetch aggregated fields from the table: "campaign_access" */
  campaign_access_aggregate: Campaign_Access_Aggregate;
  /** fetch data from the table: "campaign_access" using primary key columns */
  campaign_access_by_pk?: Maybe<Campaign_Access>;
  /** fetch aggregated fields from the table: "campaign" */
  campaign_aggregate: Campaign_Aggregate;
  /** fetch data from the table: "campaign" using primary key columns */
  campaign_by_pk?: Maybe<Campaign>;
  /** fetch data from the table: "campaign_deck" */
  campaign_deck: Array<Campaign_Deck>;
  /** fetch aggregated fields from the table: "campaign_deck" */
  campaign_deck_aggregate: Campaign_Deck_Aggregate;
  /** fetch data from the table: "campaign_deck" using primary key columns */
  campaign_deck_by_pk?: Maybe<Campaign_Deck>;
  /** fetch data from the table: "campaign_difficulty" */
  campaign_difficulty: Array<Campaign_Difficulty>;
  /** fetch aggregated fields from the table: "campaign_difficulty" */
  campaign_difficulty_aggregate: Campaign_Difficulty_Aggregate;
  /** fetch data from the table: "campaign_difficulty" using primary key columns */
  campaign_difficulty_by_pk?: Maybe<Campaign_Difficulty>;
  /** fetch data from the table: "campaign_guide" */
  campaign_guide: Array<Campaign_Guide>;
  /** fetch aggregated fields from the table: "campaign_guide" */
  campaign_guide_aggregate: Campaign_Guide_Aggregate;
  /** fetch data from the table: "campaign_investigator" */
  campaign_investigator: Array<Campaign_Investigator>;
  /** fetch aggregated fields from the table: "campaign_investigator" */
  campaign_investigator_aggregate: Campaign_Investigator_Aggregate;
  /** fetch data from the table: "campaign_investigator" using primary key columns */
  campaign_investigator_by_pk?: Maybe<Campaign_Investigator>;
  /** fetch data from the table: "campaigns_by_cycle" */
  campaigns_by_cycle: Array<Campaigns_By_Cycle>;
  /** fetch aggregated fields from the table: "campaigns_by_cycle" */
  campaigns_by_cycle_aggregate: Campaigns_By_Cycle_Aggregate;
  /** fetch data from the table: "card" */
  card: Array<Card>;
  /** fetch aggregated fields from the table: "card" */
  card_aggregate: Card_Aggregate;
  /** fetch data from the table: "card" using primary key columns */
  card_by_pk?: Maybe<Card>;
  /** fetch data from the table: "card_cycle" */
  card_cycle: Array<Card_Cycle>;
  /** fetch aggregated fields from the table: "card_cycle" */
  card_cycle_aggregate: Card_Cycle_Aggregate;
  /** fetch data from the table: "card_cycle" using primary key columns */
  card_cycle_by_pk?: Maybe<Card_Cycle>;
  /** fetch data from the table: "card_encounter_set" */
  card_encounter_set: Array<Card_Encounter_Set>;
  /** fetch aggregated fields from the table: "card_encounter_set" */
  card_encounter_set_aggregate: Card_Encounter_Set_Aggregate;
  /** fetch data from the table: "card_encounter_set" using primary key columns */
  card_encounter_set_by_pk?: Maybe<Card_Encounter_Set>;
  /** fetch data from the table: "card_pack" */
  card_pack: Array<Card_Pack>;
  /** fetch aggregated fields from the table: "card_pack" */
  card_pack_aggregate: Card_Pack_Aggregate;
  /** fetch data from the table: "card_pack" using primary key columns */
  card_pack_by_pk?: Maybe<Card_Pack>;
  /** fetch data from the table: "card_subtype_name" */
  card_subtype_name: Array<Card_Subtype_Name>;
  /** fetch aggregated fields from the table: "card_subtype_name" */
  card_subtype_name_aggregate: Card_Subtype_Name_Aggregate;
  /** fetch data from the table: "card_subtype_name" using primary key columns */
  card_subtype_name_by_pk?: Maybe<Card_Subtype_Name>;
  /** fetch data from the table: "card_text" */
  card_text: Array<Card_Text>;
  /** fetch aggregated fields from the table: "card_text" */
  card_text_aggregate: Card_Text_Aggregate;
  /** fetch data from the table: "card_text" using primary key columns */
  card_text_by_pk?: Maybe<Card_Text>;
  /** fetch data from the table: "card_type_code" */
  card_type_code: Array<Card_Type_Code>;
  /** fetch aggregated fields from the table: "card_type_code" */
  card_type_code_aggregate: Card_Type_Code_Aggregate;
  /** fetch data from the table: "card_type_code" using primary key columns */
  card_type_code_by_pk?: Maybe<Card_Type_Code>;
  /** fetch data from the table: "card_type_name" */
  card_type_name: Array<Card_Type_Name>;
  /** fetch aggregated fields from the table: "card_type_name" */
  card_type_name_aggregate: Card_Type_Name_Aggregate;
  /** fetch data from the table: "card_type_name" using primary key columns */
  card_type_name_by_pk?: Maybe<Card_Type_Name>;
  /** An array relationship */
  chaos_bag_result: Array<Chaos_Bag_Result>;
  /** An aggregate relationship */
  chaos_bag_result_aggregate: Chaos_Bag_Result_Aggregate;
  /** fetch data from the table: "chaos_bag_result" using primary key columns */
  chaos_bag_result_by_pk?: Maybe<Chaos_Bag_Result>;
  /** fetch data from the table: "chaos_bag_tarot_mode" */
  chaos_bag_tarot_mode: Array<Chaos_Bag_Tarot_Mode>;
  /** fetch aggregated fields from the table: "chaos_bag_tarot_mode" */
  chaos_bag_tarot_mode_aggregate: Chaos_Bag_Tarot_Mode_Aggregate;
  /** fetch data from the table: "chaos_bag_tarot_mode" using primary key columns */
  chaos_bag_tarot_mode_by_pk?: Maybe<Chaos_Bag_Tarot_Mode>;
  /** fetch data from the table: "cycle" */
  cycle: Array<Cycle>;
  /** fetch aggregated fields from the table: "cycle" */
  cycle_aggregate: Cycle_Aggregate;
  /** fetch data from the table: "cycle" using primary key columns */
  cycle_by_pk?: Maybe<Cycle>;
  /** fetch data from the table: "cycle_name" */
  cycle_name: Array<Cycle_Name>;
  /** fetch aggregated fields from the table: "cycle_name" */
  cycle_name_aggregate: Cycle_Name_Aggregate;
  /** fetch data from the table: "cycle_name" using primary key columns */
  cycle_name_by_pk?: Maybe<Cycle_Name>;
  /** fetch data from the table: "faction_name" */
  faction_name: Array<Faction_Name>;
  /** fetch aggregated fields from the table: "faction_name" */
  faction_name_aggregate: Faction_Name_Aggregate;
  /** fetch data from the table: "faction_name" using primary key columns */
  faction_name_by_pk?: Maybe<Faction_Name>;
  /** fetch data from the table: "faq" */
  faq: Array<Faq>;
  /** fetch aggregated fields from the table: "faq" */
  faq_aggregate: Faq_Aggregate;
  /** fetch data from the table: "faq" using primary key columns */
  faq_by_pk?: Maybe<Faq>;
  /** fetch data from the table: "faq_text" */
  faq_text: Array<Faq_Text>;
  /** fetch aggregated fields from the table: "faq_text" */
  faq_text_aggregate: Faq_Text_Aggregate;
  /** fetch data from the table: "faq_text" using primary key columns */
  faq_text_by_pk?: Maybe<Faq_Text>;
  /** fetch data from the table: "friend_status" */
  friend_status: Array<Friend_Status>;
  /** fetch aggregated fields from the table: "friend_status" */
  friend_status_aggregate: Friend_Status_Aggregate;
  /** fetch data from the table: "friend_status" using primary key columns */
  friend_status_by_pk?: Maybe<Friend_Status>;
  /** fetch data from the table: "friend_status_type" */
  friend_status_type: Array<Friend_Status_Type>;
  /** fetch aggregated fields from the table: "friend_status_type" */
  friend_status_type_aggregate: Friend_Status_Type_Aggregate;
  /** fetch data from the table: "friend_status_type" using primary key columns */
  friend_status_type_by_pk?: Maybe<Friend_Status_Type>;
  /** fetch data from the table: "full_card" */
  full_card: Array<Full_Card>;
  /** fetch aggregated fields from the table: "full_card" */
  full_card_aggregate: Full_Card_Aggregate;
  /** fetch data from the table: "full_card" using primary key columns */
  full_card_by_pk?: Maybe<Full_Card>;
  /** fetch data from the table: "full_card_text" */
  full_card_text: Array<Full_Card_Text>;
  /** fetch aggregated fields from the table: "full_card_text" */
  full_card_text_aggregate: Full_Card_Text_Aggregate;
  /** fetch data from the table: "full_card_text" using primary key columns */
  full_card_text_by_pk?: Maybe<Full_Card_Text>;
  /** fetch data from the table: "gender" */
  gender: Array<Gender>;
  /** fetch aggregated fields from the table: "gender" */
  gender_aggregate: Gender_Aggregate;
  /** fetch data from the table: "gender" using primary key columns */
  gender_by_pk?: Maybe<Gender>;
  /** fetch data from the table: "guide_achievement" */
  guide_achievement: Array<Guide_Achievement>;
  /** fetch aggregated fields from the table: "guide_achievement" */
  guide_achievement_aggregate: Guide_Achievement_Aggregate;
  /** fetch data from the table: "guide_achievement" using primary key columns */
  guide_achievement_by_pk?: Maybe<Guide_Achievement>;
  /** fetch data from the table: "guide_input" */
  guide_input: Array<Guide_Input>;
  /** fetch aggregated fields from the table: "guide_input" */
  guide_input_aggregate: Guide_Input_Aggregate;
  /** fetch data from the table: "guide_input" using primary key columns */
  guide_input_by_pk?: Maybe<Guide_Input>;
  /** An array relationship */
  investigator_data: Array<Investigator_Data>;
  /** An aggregate relationship */
  investigator_data_aggregate: Investigator_Data_Aggregate;
  /** fetch data from the table: "investigator_data" using primary key columns */
  investigator_data_by_pk?: Maybe<Investigator_Data>;
  /** An array relationship */
  latest_decks: Array<Latest_Decks>;
  /** An aggregate relationship */
  latest_decks_aggregate: Latest_Decks_Aggregate;
  /** An array relationship */
  local_decks: Array<Local_Decks>;
  /** An aggregate relationship */
  local_decks_aggregate: Local_Decks_Aggregate;
  /** fetch data from the table: "pack" */
  pack: Array<Pack>;
  /** fetch aggregated fields from the table: "pack" */
  pack_aggregate: Pack_Aggregate;
  /** fetch data from the table: "pack" using primary key columns */
  pack_by_pk?: Maybe<Pack>;
  /** fetch data from the table: "pack_name" */
  pack_name: Array<Pack_Name>;
  /** fetch aggregated fields from the table: "pack_name" */
  pack_name_aggregate: Pack_Name_Aggregate;
  /** fetch data from the table: "pack_name" using primary key columns */
  pack_name_by_pk?: Maybe<Pack_Name>;
  /** fetch data from the table: "rangers.aspect" */
  rangers_aspect: Array<Rangers_Aspect>;
  /** fetch aggregated fields from the table: "rangers.aspect" */
  rangers_aspect_aggregate: Rangers_Aspect_Aggregate;
  /** fetch data from the table: "rangers.aspect" using primary key columns */
  rangers_aspect_by_pk?: Maybe<Rangers_Aspect>;
  /** fetch data from the table: "rangers.aspect_localized" */
  rangers_aspect_localized: Array<Rangers_Aspect_Localized>;
  /** fetch aggregated fields from the table: "rangers.aspect_localized" */
  rangers_aspect_localized_aggregate: Rangers_Aspect_Localized_Aggregate;
  /** fetch data from the table: "rangers.aspect_text" */
  rangers_aspect_text: Array<Rangers_Aspect_Text>;
  /** fetch aggregated fields from the table: "rangers.aspect_text" */
  rangers_aspect_text_aggregate: Rangers_Aspect_Text_Aggregate;
  /** fetch data from the table: "rangers.aspect_text" using primary key columns */
  rangers_aspect_text_by_pk?: Maybe<Rangers_Aspect_Text>;
  /** fetch data from the table: "rangers.card" */
  rangers_card: Array<Rangers_Card>;
  /** fetch aggregated fields from the table: "rangers.card" */
  rangers_card_aggregate: Rangers_Card_Aggregate;
  /** fetch data from the table: "rangers.card" using primary key columns */
  rangers_card_by_pk?: Maybe<Rangers_Card>;
  /** fetch data from the table: "rangers.card_localized" */
  rangers_card_localized: Array<Rangers_Card_Localized>;
  /** fetch aggregated fields from the table: "rangers.card_localized" */
  rangers_card_localized_aggregate: Rangers_Card_Localized_Aggregate;
  /** fetch data from the table: "rangers.card_text" */
  rangers_card_text: Array<Rangers_Card_Text>;
  /** fetch aggregated fields from the table: "rangers.card_text" */
  rangers_card_text_aggregate: Rangers_Card_Text_Aggregate;
  /** fetch data from the table: "rangers.card_text" using primary key columns */
  rangers_card_text_by_pk?: Maybe<Rangers_Card_Text>;
  /** fetch data from the table: "rangers.locale" */
  rangers_locale: Array<Rangers_Locale>;
  /** fetch aggregated fields from the table: "rangers.locale" */
  rangers_locale_aggregate: Rangers_Locale_Aggregate;
  /** fetch data from the table: "rangers.locale" using primary key columns */
  rangers_locale_by_pk?: Maybe<Rangers_Locale>;
  /** fetch data from the table: "rangers.pack" */
  rangers_pack: Array<Rangers_Pack>;
  /** fetch aggregated fields from the table: "rangers.pack" */
  rangers_pack_aggregate: Rangers_Pack_Aggregate;
  /** fetch data from the table: "rangers.pack" using primary key columns */
  rangers_pack_by_pk?: Maybe<Rangers_Pack>;
  /** fetch data from the table: "rangers.pack_text" */
  rangers_pack_text: Array<Rangers_Pack_Text>;
  /** fetch aggregated fields from the table: "rangers.pack_text" */
  rangers_pack_text_aggregate: Rangers_Pack_Text_Aggregate;
  /** fetch data from the table: "rangers.pack_text" using primary key columns */
  rangers_pack_text_by_pk?: Maybe<Rangers_Pack_Text>;
  /** fetch data from the table: "rangers.set" */
  rangers_set: Array<Rangers_Set>;
  /** fetch aggregated fields from the table: "rangers.set" */
  rangers_set_aggregate: Rangers_Set_Aggregate;
  /** fetch data from the table: "rangers.set" using primary key columns */
  rangers_set_by_pk?: Maybe<Rangers_Set>;
  /** fetch data from the table: "rangers.set_text" */
  rangers_set_text: Array<Rangers_Set_Text>;
  /** fetch aggregated fields from the table: "rangers.set_text" */
  rangers_set_text_aggregate: Rangers_Set_Text_Aggregate;
  /** fetch data from the table: "rangers.set_text" using primary key columns */
  rangers_set_text_by_pk?: Maybe<Rangers_Set_Text>;
  /** fetch data from the table: "rangers.set_type" */
  rangers_set_type: Array<Rangers_Set_Type>;
  /** fetch aggregated fields from the table: "rangers.set_type" */
  rangers_set_type_aggregate: Rangers_Set_Type_Aggregate;
  /** fetch data from the table: "rangers.set_type" using primary key columns */
  rangers_set_type_by_pk?: Maybe<Rangers_Set_Type>;
  /** fetch data from the table: "rangers.set_type_text" */
  rangers_set_type_text: Array<Rangers_Set_Type_Text>;
  /** fetch aggregated fields from the table: "rangers.set_type_text" */
  rangers_set_type_text_aggregate: Rangers_Set_Type_Text_Aggregate;
  /** fetch data from the table: "rangers.set_type_text" using primary key columns */
  rangers_set_type_text_by_pk?: Maybe<Rangers_Set_Type_Text>;
  /** fetch data from the table: "rangers.token" */
  rangers_token: Array<Rangers_Token>;
  /** fetch aggregated fields from the table: "rangers.token" */
  rangers_token_aggregate: Rangers_Token_Aggregate;
  /** fetch data from the table: "rangers.token" using primary key columns */
  rangers_token_by_pk?: Maybe<Rangers_Token>;
  /** fetch data from the table: "rangers.token_text" */
  rangers_token_text: Array<Rangers_Token_Text>;
  /** fetch aggregated fields from the table: "rangers.token_text" */
  rangers_token_text_aggregate: Rangers_Token_Text_Aggregate;
  /** fetch data from the table: "rangers.token_text" using primary key columns */
  rangers_token_text_by_pk?: Maybe<Rangers_Token_Text>;
  /** fetch data from the table: "rangers.type" */
  rangers_type: Array<Rangers_Type>;
  /** fetch aggregated fields from the table: "rangers.type" */
  rangers_type_aggregate: Rangers_Type_Aggregate;
  /** fetch data from the table: "rangers.type" using primary key columns */
  rangers_type_by_pk?: Maybe<Rangers_Type>;
  /** fetch data from the table: "rangers.type_text" */
  rangers_type_text: Array<Rangers_Type_Text>;
  /** fetch aggregated fields from the table: "rangers.type_text" */
  rangers_type_text_aggregate: Rangers_Type_Text_Aggregate;
  /** fetch data from the table: "rangers.type_text" using primary key columns */
  rangers_type_text_by_pk?: Maybe<Rangers_Type_Text>;
  /** fetch data from the table: "taboo_set" */
  taboo_set: Array<Taboo_Set>;
  /** fetch aggregated fields from the table: "taboo_set" */
  taboo_set_aggregate: Taboo_Set_Aggregate;
  /** fetch data from the table: "taboo_set" using primary key columns */
  taboo_set_by_pk?: Maybe<Taboo_Set>;
  /** fetch data from the table: "user_campaigns" */
  user_campaigns: Array<User_Campaigns>;
  /** fetch aggregated fields from the table: "user_campaigns" */
  user_campaigns_aggregate: User_Campaigns_Aggregate;
  /** fetch data from the table: "user_flag" */
  user_flag: Array<User_Flag>;
  /** fetch aggregated fields from the table: "user_flag" */
  user_flag_aggregate: User_Flag_Aggregate;
  /** fetch data from the table: "user_flag" using primary key columns */
  user_flag_by_pk?: Maybe<User_Flag>;
  /** fetch data from the table: "user_flag_type" */
  user_flag_type: Array<User_Flag_Type>;
  /** fetch aggregated fields from the table: "user_flag_type" */
  user_flag_type_aggregate: User_Flag_Type_Aggregate;
  /** fetch data from the table: "user_flag_type" using primary key columns */
  user_flag_type_by_pk?: Maybe<User_Flag_Type>;
  /** fetch data from the table: "user_friends" */
  user_friends: Array<User_Friends>;
  /** fetch aggregated fields from the table: "user_friends" */
  user_friends_aggregate: User_Friends_Aggregate;
  /** fetch data from the table: "user_received_friend_requests" */
  user_received_friend_requests: Array<User_Received_Friend_Requests>;
  /** fetch aggregated fields from the table: "user_received_friend_requests" */
  user_received_friend_requests_aggregate: User_Received_Friend_Requests_Aggregate;
  /** fetch data from the table: "user_sent_friend_requests" */
  user_sent_friend_requests: Array<User_Sent_Friend_Requests>;
  /** fetch aggregated fields from the table: "user_sent_friend_requests" */
  user_sent_friend_requests_aggregate: User_Sent_Friend_Requests_Aggregate;
  /** fetch data from the table: "user_settings" */
  user_settings: Array<User_Settings>;
  /** fetch aggregated fields from the table: "user_settings" */
  user_settings_aggregate: User_Settings_Aggregate;
  /** fetch data from the table: "user_settings" using primary key columns */
  user_settings_by_pk?: Maybe<User_Settings>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootAll_CardArgs = {
  distinct_on?: InputMaybe<Array<All_Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<All_Card_Order_By>>;
  where?: InputMaybe<All_Card_Bool_Exp>;
};


export type Query_RootAll_Card_AggregateArgs = {
  distinct_on?: InputMaybe<Array<All_Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<All_Card_Order_By>>;
  where?: InputMaybe<All_Card_Bool_Exp>;
};


export type Query_RootAll_Card_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootAll_Card_TextArgs = {
  distinct_on?: InputMaybe<Array<All_Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<All_Card_Text_Order_By>>;
  where?: InputMaybe<All_Card_Text_Bool_Exp>;
};


export type Query_RootAll_Card_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<All_Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<All_Card_Text_Order_By>>;
  where?: InputMaybe<All_Card_Text_Bool_Exp>;
};


export type Query_RootAll_Card_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


export type Query_RootAll_Card_UpdatedArgs = {
  distinct_on?: InputMaybe<Array<All_Card_Updated_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<All_Card_Updated_Order_By>>;
  where?: InputMaybe<All_Card_Updated_Bool_Exp>;
};


export type Query_RootAll_Card_Updated_AggregateArgs = {
  distinct_on?: InputMaybe<Array<All_Card_Updated_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<All_Card_Updated_Order_By>>;
  where?: InputMaybe<All_Card_Updated_Bool_Exp>;
};


export type Query_RootAll_Card_Updated_By_PkArgs = {
  locale: Scalars['String'];
};


export type Query_RootBase_DecksArgs = {
  distinct_on?: InputMaybe<Array<Base_Decks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Base_Decks_Order_By>>;
  where?: InputMaybe<Base_Decks_Bool_Exp>;
};


export type Query_RootBase_Decks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Base_Decks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Base_Decks_Order_By>>;
  where?: InputMaybe<Base_Decks_Bool_Exp>;
};


export type Query_RootCampaignArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


export type Query_RootCampaign_AccessArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Access_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Access_Order_By>>;
  where?: InputMaybe<Campaign_Access_Bool_Exp>;
};


export type Query_RootCampaign_Access_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Access_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Access_Order_By>>;
  where?: InputMaybe<Campaign_Access_Bool_Exp>;
};


export type Query_RootCampaign_Access_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCampaign_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


export type Query_RootCampaign_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCampaign_DeckArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Deck_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Deck_Order_By>>;
  where?: InputMaybe<Campaign_Deck_Bool_Exp>;
};


export type Query_RootCampaign_Deck_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Deck_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Deck_Order_By>>;
  where?: InputMaybe<Campaign_Deck_Bool_Exp>;
};


export type Query_RootCampaign_Deck_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCampaign_DifficultyArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Difficulty_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Difficulty_Order_By>>;
  where?: InputMaybe<Campaign_Difficulty_Bool_Exp>;
};


export type Query_RootCampaign_Difficulty_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Difficulty_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Difficulty_Order_By>>;
  where?: InputMaybe<Campaign_Difficulty_Bool_Exp>;
};


export type Query_RootCampaign_Difficulty_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootCampaign_GuideArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Guide_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Guide_Order_By>>;
  where?: InputMaybe<Campaign_Guide_Bool_Exp>;
};


export type Query_RootCampaign_Guide_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Guide_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Guide_Order_By>>;
  where?: InputMaybe<Campaign_Guide_Bool_Exp>;
};


export type Query_RootCampaign_InvestigatorArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Investigator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Investigator_Order_By>>;
  where?: InputMaybe<Campaign_Investigator_Bool_Exp>;
};


export type Query_RootCampaign_Investigator_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Investigator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Investigator_Order_By>>;
  where?: InputMaybe<Campaign_Investigator_Bool_Exp>;
};


export type Query_RootCampaign_Investigator_By_PkArgs = {
  campaign_id: Scalars['Int'];
  investigator: Scalars['String'];
};


export type Query_RootCampaigns_By_CycleArgs = {
  distinct_on?: InputMaybe<Array<Campaigns_By_Cycle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaigns_By_Cycle_Order_By>>;
  where?: InputMaybe<Campaigns_By_Cycle_Bool_Exp>;
};


export type Query_RootCampaigns_By_Cycle_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaigns_By_Cycle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaigns_By_Cycle_Order_By>>;
  where?: InputMaybe<Campaigns_By_Cycle_Bool_Exp>;
};


export type Query_RootCardArgs = {
  distinct_on?: InputMaybe<Array<Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Order_By>>;
  where?: InputMaybe<Card_Bool_Exp>;
};


export type Query_RootCard_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Order_By>>;
  where?: InputMaybe<Card_Bool_Exp>;
};


export type Query_RootCard_By_PkArgs = {
  code: Scalars['String'];
};


export type Query_RootCard_CycleArgs = {
  distinct_on?: InputMaybe<Array<Card_Cycle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Cycle_Order_By>>;
  where?: InputMaybe<Card_Cycle_Bool_Exp>;
};


export type Query_RootCard_Cycle_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Card_Cycle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Cycle_Order_By>>;
  where?: InputMaybe<Card_Cycle_Bool_Exp>;
};


export type Query_RootCard_Cycle_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


export type Query_RootCard_Encounter_SetArgs = {
  distinct_on?: InputMaybe<Array<Card_Encounter_Set_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Encounter_Set_Order_By>>;
  where?: InputMaybe<Card_Encounter_Set_Bool_Exp>;
};


export type Query_RootCard_Encounter_Set_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Card_Encounter_Set_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Encounter_Set_Order_By>>;
  where?: InputMaybe<Card_Encounter_Set_Bool_Exp>;
};


export type Query_RootCard_Encounter_Set_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


export type Query_RootCard_PackArgs = {
  distinct_on?: InputMaybe<Array<Card_Pack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Pack_Order_By>>;
  where?: InputMaybe<Card_Pack_Bool_Exp>;
};


export type Query_RootCard_Pack_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Card_Pack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Pack_Order_By>>;
  where?: InputMaybe<Card_Pack_Bool_Exp>;
};


export type Query_RootCard_Pack_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


export type Query_RootCard_Subtype_NameArgs = {
  distinct_on?: InputMaybe<Array<Card_Subtype_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Subtype_Name_Order_By>>;
  where?: InputMaybe<Card_Subtype_Name_Bool_Exp>;
};


export type Query_RootCard_Subtype_Name_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Card_Subtype_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Subtype_Name_Order_By>>;
  where?: InputMaybe<Card_Subtype_Name_Bool_Exp>;
};


export type Query_RootCard_Subtype_Name_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


export type Query_RootCard_TextArgs = {
  distinct_on?: InputMaybe<Array<Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Text_Order_By>>;
  where?: InputMaybe<Card_Text_Bool_Exp>;
};


export type Query_RootCard_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Text_Order_By>>;
  where?: InputMaybe<Card_Text_Bool_Exp>;
};


export type Query_RootCard_Text_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


export type Query_RootCard_Type_CodeArgs = {
  distinct_on?: InputMaybe<Array<Card_Type_Code_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Type_Code_Order_By>>;
  where?: InputMaybe<Card_Type_Code_Bool_Exp>;
};


export type Query_RootCard_Type_Code_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Card_Type_Code_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Type_Code_Order_By>>;
  where?: InputMaybe<Card_Type_Code_Bool_Exp>;
};


export type Query_RootCard_Type_Code_By_PkArgs = {
  code: Scalars['String'];
};


export type Query_RootCard_Type_NameArgs = {
  distinct_on?: InputMaybe<Array<Card_Type_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Type_Name_Order_By>>;
  where?: InputMaybe<Card_Type_Name_Bool_Exp>;
};


export type Query_RootCard_Type_Name_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Card_Type_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Type_Name_Order_By>>;
  where?: InputMaybe<Card_Type_Name_Bool_Exp>;
};


export type Query_RootCard_Type_Name_By_PkArgs = {
  code: Card_Type_Code_Enum;
  locale: Scalars['String'];
};


export type Query_RootChaos_Bag_ResultArgs = {
  distinct_on?: InputMaybe<Array<Chaos_Bag_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chaos_Bag_Result_Order_By>>;
  where?: InputMaybe<Chaos_Bag_Result_Bool_Exp>;
};


export type Query_RootChaos_Bag_Result_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chaos_Bag_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chaos_Bag_Result_Order_By>>;
  where?: InputMaybe<Chaos_Bag_Result_Bool_Exp>;
};


export type Query_RootChaos_Bag_Result_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootChaos_Bag_Tarot_ModeArgs = {
  distinct_on?: InputMaybe<Array<Chaos_Bag_Tarot_Mode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chaos_Bag_Tarot_Mode_Order_By>>;
  where?: InputMaybe<Chaos_Bag_Tarot_Mode_Bool_Exp>;
};


export type Query_RootChaos_Bag_Tarot_Mode_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chaos_Bag_Tarot_Mode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chaos_Bag_Tarot_Mode_Order_By>>;
  where?: InputMaybe<Chaos_Bag_Tarot_Mode_Bool_Exp>;
};


export type Query_RootChaos_Bag_Tarot_Mode_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootCycleArgs = {
  distinct_on?: InputMaybe<Array<Cycle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cycle_Order_By>>;
  where?: InputMaybe<Cycle_Bool_Exp>;
};


export type Query_RootCycle_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cycle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cycle_Order_By>>;
  where?: InputMaybe<Cycle_Bool_Exp>;
};


export type Query_RootCycle_By_PkArgs = {
  code: Scalars['String'];
};


export type Query_RootCycle_NameArgs = {
  distinct_on?: InputMaybe<Array<Cycle_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cycle_Name_Order_By>>;
  where?: InputMaybe<Cycle_Name_Bool_Exp>;
};


export type Query_RootCycle_Name_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cycle_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cycle_Name_Order_By>>;
  where?: InputMaybe<Cycle_Name_Bool_Exp>;
};


export type Query_RootCycle_Name_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


export type Query_RootFaction_NameArgs = {
  distinct_on?: InputMaybe<Array<Faction_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Faction_Name_Order_By>>;
  where?: InputMaybe<Faction_Name_Bool_Exp>;
};


export type Query_RootFaction_Name_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Faction_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Faction_Name_Order_By>>;
  where?: InputMaybe<Faction_Name_Bool_Exp>;
};


export type Query_RootFaction_Name_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


export type Query_RootFaqArgs = {
  distinct_on?: InputMaybe<Array<Faq_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Faq_Order_By>>;
  where?: InputMaybe<Faq_Bool_Exp>;
};


export type Query_RootFaq_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Faq_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Faq_Order_By>>;
  where?: InputMaybe<Faq_Bool_Exp>;
};


export type Query_RootFaq_By_PkArgs = {
  code: Scalars['String'];
};


export type Query_RootFaq_TextArgs = {
  distinct_on?: InputMaybe<Array<Faq_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Faq_Text_Order_By>>;
  where?: InputMaybe<Faq_Text_Bool_Exp>;
};


export type Query_RootFaq_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Faq_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Faq_Text_Order_By>>;
  where?: InputMaybe<Faq_Text_Bool_Exp>;
};


export type Query_RootFaq_Text_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


export type Query_RootFriend_StatusArgs = {
  distinct_on?: InputMaybe<Array<Friend_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Friend_Status_Order_By>>;
  where?: InputMaybe<Friend_Status_Bool_Exp>;
};


export type Query_RootFriend_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Friend_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Friend_Status_Order_By>>;
  where?: InputMaybe<Friend_Status_Bool_Exp>;
};


export type Query_RootFriend_Status_By_PkArgs = {
  user_id_a: Scalars['String'];
  user_id_b: Scalars['String'];
};


export type Query_RootFriend_Status_TypeArgs = {
  distinct_on?: InputMaybe<Array<Friend_Status_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Friend_Status_Type_Order_By>>;
  where?: InputMaybe<Friend_Status_Type_Bool_Exp>;
};


export type Query_RootFriend_Status_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Friend_Status_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Friend_Status_Type_Order_By>>;
  where?: InputMaybe<Friend_Status_Type_Bool_Exp>;
};


export type Query_RootFriend_Status_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootFull_CardArgs = {
  distinct_on?: InputMaybe<Array<Full_Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Card_Order_By>>;
  where?: InputMaybe<Full_Card_Bool_Exp>;
};


export type Query_RootFull_Card_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Full_Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Card_Order_By>>;
  where?: InputMaybe<Full_Card_Bool_Exp>;
};


export type Query_RootFull_Card_By_PkArgs = {
  code: Scalars['String'];
};


export type Query_RootFull_Card_TextArgs = {
  distinct_on?: InputMaybe<Array<Full_Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Card_Text_Order_By>>;
  where?: InputMaybe<Full_Card_Text_Bool_Exp>;
};


export type Query_RootFull_Card_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Full_Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Card_Text_Order_By>>;
  where?: InputMaybe<Full_Card_Text_Bool_Exp>;
};


export type Query_RootFull_Card_Text_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


export type Query_RootGenderArgs = {
  distinct_on?: InputMaybe<Array<Gender_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gender_Order_By>>;
  where?: InputMaybe<Gender_Bool_Exp>;
};


export type Query_RootGender_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gender_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gender_Order_By>>;
  where?: InputMaybe<Gender_Bool_Exp>;
};


export type Query_RootGender_By_PkArgs = {
  code: Scalars['String'];
};


export type Query_RootGuide_AchievementArgs = {
  distinct_on?: InputMaybe<Array<Guide_Achievement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Guide_Achievement_Order_By>>;
  where?: InputMaybe<Guide_Achievement_Bool_Exp>;
};


export type Query_RootGuide_Achievement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Guide_Achievement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Guide_Achievement_Order_By>>;
  where?: InputMaybe<Guide_Achievement_Bool_Exp>;
};


export type Query_RootGuide_Achievement_By_PkArgs = {
  campaign_id: Scalars['Int'];
  id: Scalars['String'];
};


export type Query_RootGuide_InputArgs = {
  distinct_on?: InputMaybe<Array<Guide_Input_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Guide_Input_Order_By>>;
  where?: InputMaybe<Guide_Input_Bool_Exp>;
};


export type Query_RootGuide_Input_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Guide_Input_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Guide_Input_Order_By>>;
  where?: InputMaybe<Guide_Input_Bool_Exp>;
};


export type Query_RootGuide_Input_By_PkArgs = {
  campaign_id: Scalars['Int'];
  id: Scalars['String'];
};


export type Query_RootInvestigator_DataArgs = {
  distinct_on?: InputMaybe<Array<Investigator_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investigator_Data_Order_By>>;
  where?: InputMaybe<Investigator_Data_Bool_Exp>;
};


export type Query_RootInvestigator_Data_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Investigator_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investigator_Data_Order_By>>;
  where?: InputMaybe<Investigator_Data_Bool_Exp>;
};


export type Query_RootInvestigator_Data_By_PkArgs = {
  campaign_id: Scalars['Int'];
  investigator: Scalars['String'];
};


export type Query_RootLatest_DecksArgs = {
  distinct_on?: InputMaybe<Array<Latest_Decks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Latest_Decks_Order_By>>;
  where?: InputMaybe<Latest_Decks_Bool_Exp>;
};


export type Query_RootLatest_Decks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Latest_Decks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Latest_Decks_Order_By>>;
  where?: InputMaybe<Latest_Decks_Bool_Exp>;
};


export type Query_RootLocal_DecksArgs = {
  distinct_on?: InputMaybe<Array<Local_Decks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Local_Decks_Order_By>>;
  where?: InputMaybe<Local_Decks_Bool_Exp>;
};


export type Query_RootLocal_Decks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Local_Decks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Local_Decks_Order_By>>;
  where?: InputMaybe<Local_Decks_Bool_Exp>;
};


export type Query_RootPackArgs = {
  distinct_on?: InputMaybe<Array<Pack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pack_Order_By>>;
  where?: InputMaybe<Pack_Bool_Exp>;
};


export type Query_RootPack_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pack_Order_By>>;
  where?: InputMaybe<Pack_Bool_Exp>;
};


export type Query_RootPack_By_PkArgs = {
  code: Scalars['String'];
};


export type Query_RootPack_NameArgs = {
  distinct_on?: InputMaybe<Array<Pack_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pack_Name_Order_By>>;
  where?: InputMaybe<Pack_Name_Bool_Exp>;
};


export type Query_RootPack_Name_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pack_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pack_Name_Order_By>>;
  where?: InputMaybe<Pack_Name_Bool_Exp>;
};


export type Query_RootPack_Name_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


export type Query_RootRangers_AspectArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Aspect_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Aspect_Order_By>>;
  where?: InputMaybe<Rangers_Aspect_Bool_Exp>;
};


export type Query_RootRangers_Aspect_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Aspect_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Aspect_Order_By>>;
  where?: InputMaybe<Rangers_Aspect_Bool_Exp>;
};


export type Query_RootRangers_Aspect_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRangers_Aspect_LocalizedArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Aspect_Localized_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Aspect_Localized_Order_By>>;
  where?: InputMaybe<Rangers_Aspect_Localized_Bool_Exp>;
};


export type Query_RootRangers_Aspect_Localized_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Aspect_Localized_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Aspect_Localized_Order_By>>;
  where?: InputMaybe<Rangers_Aspect_Localized_Bool_Exp>;
};


export type Query_RootRangers_Aspect_TextArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Aspect_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Aspect_Text_Order_By>>;
  where?: InputMaybe<Rangers_Aspect_Text_Bool_Exp>;
};


export type Query_RootRangers_Aspect_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Aspect_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Aspect_Text_Order_By>>;
  where?: InputMaybe<Rangers_Aspect_Text_Bool_Exp>;
};


export type Query_RootRangers_Aspect_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


export type Query_RootRangers_CardArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Card_Order_By>>;
  where?: InputMaybe<Rangers_Card_Bool_Exp>;
};


export type Query_RootRangers_Card_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Card_Order_By>>;
  where?: InputMaybe<Rangers_Card_Bool_Exp>;
};


export type Query_RootRangers_Card_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRangers_Card_LocalizedArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Card_Localized_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Card_Localized_Order_By>>;
  where?: InputMaybe<Rangers_Card_Localized_Bool_Exp>;
};


export type Query_RootRangers_Card_Localized_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Card_Localized_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Card_Localized_Order_By>>;
  where?: InputMaybe<Rangers_Card_Localized_Bool_Exp>;
};


export type Query_RootRangers_Card_TextArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Card_Text_Order_By>>;
  where?: InputMaybe<Rangers_Card_Text_Bool_Exp>;
};


export type Query_RootRangers_Card_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Card_Text_Order_By>>;
  where?: InputMaybe<Rangers_Card_Text_Bool_Exp>;
};


export type Query_RootRangers_Card_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


export type Query_RootRangers_LocaleArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Locale_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Locale_Order_By>>;
  where?: InputMaybe<Rangers_Locale_Bool_Exp>;
};


export type Query_RootRangers_Locale_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Locale_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Locale_Order_By>>;
  where?: InputMaybe<Rangers_Locale_Bool_Exp>;
};


export type Query_RootRangers_Locale_By_PkArgs = {
  locale: Scalars['String'];
};


export type Query_RootRangers_PackArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Pack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Pack_Order_By>>;
  where?: InputMaybe<Rangers_Pack_Bool_Exp>;
};


export type Query_RootRangers_Pack_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Pack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Pack_Order_By>>;
  where?: InputMaybe<Rangers_Pack_Bool_Exp>;
};


export type Query_RootRangers_Pack_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRangers_Pack_TextArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Pack_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Pack_Text_Order_By>>;
  where?: InputMaybe<Rangers_Pack_Text_Bool_Exp>;
};


export type Query_RootRangers_Pack_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Pack_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Pack_Text_Order_By>>;
  where?: InputMaybe<Rangers_Pack_Text_Bool_Exp>;
};


export type Query_RootRangers_Pack_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


export type Query_RootRangers_SetArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Set_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Set_Order_By>>;
  where?: InputMaybe<Rangers_Set_Bool_Exp>;
};


export type Query_RootRangers_Set_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Set_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Set_Order_By>>;
  where?: InputMaybe<Rangers_Set_Bool_Exp>;
};


export type Query_RootRangers_Set_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRangers_Set_TextArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Set_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Set_Text_Order_By>>;
  where?: InputMaybe<Rangers_Set_Text_Bool_Exp>;
};


export type Query_RootRangers_Set_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Set_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Set_Text_Order_By>>;
  where?: InputMaybe<Rangers_Set_Text_Bool_Exp>;
};


export type Query_RootRangers_Set_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


export type Query_RootRangers_Set_TypeArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Set_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Set_Type_Order_By>>;
  where?: InputMaybe<Rangers_Set_Type_Bool_Exp>;
};


export type Query_RootRangers_Set_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Set_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Set_Type_Order_By>>;
  where?: InputMaybe<Rangers_Set_Type_Bool_Exp>;
};


export type Query_RootRangers_Set_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRangers_Set_Type_TextArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Set_Type_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Set_Type_Text_Order_By>>;
  where?: InputMaybe<Rangers_Set_Type_Text_Bool_Exp>;
};


export type Query_RootRangers_Set_Type_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Set_Type_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Set_Type_Text_Order_By>>;
  where?: InputMaybe<Rangers_Set_Type_Text_Bool_Exp>;
};


export type Query_RootRangers_Set_Type_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


export type Query_RootRangers_TokenArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Token_Order_By>>;
  where?: InputMaybe<Rangers_Token_Bool_Exp>;
};


export type Query_RootRangers_Token_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Token_Order_By>>;
  where?: InputMaybe<Rangers_Token_Bool_Exp>;
};


export type Query_RootRangers_Token_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRangers_Token_TextArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Token_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Token_Text_Order_By>>;
  where?: InputMaybe<Rangers_Token_Text_Bool_Exp>;
};


export type Query_RootRangers_Token_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Token_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Token_Text_Order_By>>;
  where?: InputMaybe<Rangers_Token_Text_Bool_Exp>;
};


export type Query_RootRangers_Token_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


export type Query_RootRangers_TypeArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Type_Order_By>>;
  where?: InputMaybe<Rangers_Type_Bool_Exp>;
};


export type Query_RootRangers_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Type_Order_By>>;
  where?: InputMaybe<Rangers_Type_Bool_Exp>;
};


export type Query_RootRangers_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRangers_Type_TextArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Type_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Type_Text_Order_By>>;
  where?: InputMaybe<Rangers_Type_Text_Bool_Exp>;
};


export type Query_RootRangers_Type_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Type_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Type_Text_Order_By>>;
  where?: InputMaybe<Rangers_Type_Text_Bool_Exp>;
};


export type Query_RootRangers_Type_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


export type Query_RootTaboo_SetArgs = {
  distinct_on?: InputMaybe<Array<Taboo_Set_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Taboo_Set_Order_By>>;
  where?: InputMaybe<Taboo_Set_Bool_Exp>;
};


export type Query_RootTaboo_Set_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Taboo_Set_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Taboo_Set_Order_By>>;
  where?: InputMaybe<Taboo_Set_Bool_Exp>;
};


export type Query_RootTaboo_Set_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUser_CampaignsArgs = {
  distinct_on?: InputMaybe<Array<User_Campaigns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Campaigns_Order_By>>;
  where?: InputMaybe<User_Campaigns_Bool_Exp>;
};


export type Query_RootUser_Campaigns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Campaigns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Campaigns_Order_By>>;
  where?: InputMaybe<User_Campaigns_Bool_Exp>;
};


export type Query_RootUser_FlagArgs = {
  distinct_on?: InputMaybe<Array<User_Flag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Flag_Order_By>>;
  where?: InputMaybe<User_Flag_Bool_Exp>;
};


export type Query_RootUser_Flag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Flag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Flag_Order_By>>;
  where?: InputMaybe<User_Flag_Bool_Exp>;
};


export type Query_RootUser_Flag_By_PkArgs = {
  flag: User_Flag_Type_Enum;
  user_id: Scalars['String'];
};


export type Query_RootUser_Flag_TypeArgs = {
  distinct_on?: InputMaybe<Array<User_Flag_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Flag_Type_Order_By>>;
  where?: InputMaybe<User_Flag_Type_Bool_Exp>;
};


export type Query_RootUser_Flag_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Flag_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Flag_Type_Order_By>>;
  where?: InputMaybe<User_Flag_Type_Bool_Exp>;
};


export type Query_RootUser_Flag_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootUser_FriendsArgs = {
  distinct_on?: InputMaybe<Array<User_Friends_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Friends_Order_By>>;
  where?: InputMaybe<User_Friends_Bool_Exp>;
};


export type Query_RootUser_Friends_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Friends_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Friends_Order_By>>;
  where?: InputMaybe<User_Friends_Bool_Exp>;
};


export type Query_RootUser_Received_Friend_RequestsArgs = {
  distinct_on?: InputMaybe<Array<User_Received_Friend_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Received_Friend_Requests_Order_By>>;
  where?: InputMaybe<User_Received_Friend_Requests_Bool_Exp>;
};


export type Query_RootUser_Received_Friend_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Received_Friend_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Received_Friend_Requests_Order_By>>;
  where?: InputMaybe<User_Received_Friend_Requests_Bool_Exp>;
};


export type Query_RootUser_Sent_Friend_RequestsArgs = {
  distinct_on?: InputMaybe<Array<User_Sent_Friend_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Sent_Friend_Requests_Order_By>>;
  where?: InputMaybe<User_Sent_Friend_Requests_Bool_Exp>;
};


export type Query_RootUser_Sent_Friend_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Sent_Friend_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Sent_Friend_Requests_Order_By>>;
  where?: InputMaybe<User_Sent_Friend_Requests_Bool_Exp>;
};


export type Query_RootUser_SettingsArgs = {
  distinct_on?: InputMaybe<Array<User_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Settings_Order_By>>;
  where?: InputMaybe<User_Settings_Bool_Exp>;
};


export type Query_RootUser_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Settings_Order_By>>;
  where?: InputMaybe<User_Settings_Bool_Exp>;
};


export type Query_RootUser_Settings_By_PkArgs = {
  user_id: Scalars['String'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "rangers.aspect" */
export type Rangers_Aspect = {
  __typename?: 'rangers_aspect';
  id: Scalars['String'];
  name: Scalars['String'];
  short_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "rangers.aspect" */
export type Rangers_Aspect_Aggregate = {
  __typename?: 'rangers_aspect_aggregate';
  aggregate?: Maybe<Rangers_Aspect_Aggregate_Fields>;
  nodes: Array<Rangers_Aspect>;
};

/** aggregate fields of "rangers.aspect" */
export type Rangers_Aspect_Aggregate_Fields = {
  __typename?: 'rangers_aspect_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rangers_Aspect_Max_Fields>;
  min?: Maybe<Rangers_Aspect_Min_Fields>;
};


/** aggregate fields of "rangers.aspect" */
export type Rangers_Aspect_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rangers_Aspect_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rangers.aspect". All fields are combined with a logical 'AND'. */
export type Rangers_Aspect_Bool_Exp = {
  _and?: InputMaybe<Array<Rangers_Aspect_Bool_Exp>>;
  _not?: InputMaybe<Rangers_Aspect_Bool_Exp>;
  _or?: InputMaybe<Array<Rangers_Aspect_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  short_name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rangers.aspect" */
export enum Rangers_Aspect_Constraint {
  /** unique or primary key constraint on columns "id" */
  AspectPkey = 'aspect_pkey'
}

/** input type for inserting data into table "rangers.aspect" */
export type Rangers_Aspect_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  short_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "rangers.aspect_localized" */
export type Rangers_Aspect_Localized = {
  __typename?: 'rangers_aspect_localized';
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  real_name?: Maybe<Scalars['String']>;
  real_short_name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "rangers.aspect_localized" */
export type Rangers_Aspect_Localized_Aggregate = {
  __typename?: 'rangers_aspect_localized_aggregate';
  aggregate?: Maybe<Rangers_Aspect_Localized_Aggregate_Fields>;
  nodes: Array<Rangers_Aspect_Localized>;
};

/** aggregate fields of "rangers.aspect_localized" */
export type Rangers_Aspect_Localized_Aggregate_Fields = {
  __typename?: 'rangers_aspect_localized_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rangers_Aspect_Localized_Max_Fields>;
  min?: Maybe<Rangers_Aspect_Localized_Min_Fields>;
};


/** aggregate fields of "rangers.aspect_localized" */
export type Rangers_Aspect_Localized_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rangers_Aspect_Localized_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rangers.aspect_localized". All fields are combined with a logical 'AND'. */
export type Rangers_Aspect_Localized_Bool_Exp = {
  _and?: InputMaybe<Array<Rangers_Aspect_Localized_Bool_Exp>>;
  _not?: InputMaybe<Rangers_Aspect_Localized_Bool_Exp>;
  _or?: InputMaybe<Array<Rangers_Aspect_Localized_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  real_name?: InputMaybe<String_Comparison_Exp>;
  real_short_name?: InputMaybe<String_Comparison_Exp>;
  short_name?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Rangers_Aspect_Localized_Max_Fields = {
  __typename?: 'rangers_aspect_localized_max_fields';
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  real_name?: Maybe<Scalars['String']>;
  real_short_name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Rangers_Aspect_Localized_Min_Fields = {
  __typename?: 'rangers_aspect_localized_min_fields';
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  real_name?: Maybe<Scalars['String']>;
  real_short_name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "rangers.aspect_localized". */
export type Rangers_Aspect_Localized_Order_By = {
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  real_name?: InputMaybe<Order_By>;
  real_short_name?: InputMaybe<Order_By>;
  short_name?: InputMaybe<Order_By>;
};

/** select columns of table "rangers.aspect_localized" */
export enum Rangers_Aspect_Localized_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  RealName = 'real_name',
  /** column name */
  RealShortName = 'real_short_name',
  /** column name */
  ShortName = 'short_name'
}

/** Streaming cursor of the table "rangers_aspect_localized" */
export type Rangers_Aspect_Localized_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rangers_Aspect_Localized_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rangers_Aspect_Localized_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  real_name?: InputMaybe<Scalars['String']>;
  real_short_name?: InputMaybe<Scalars['String']>;
  short_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Rangers_Aspect_Max_Fields = {
  __typename?: 'rangers_aspect_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Rangers_Aspect_Min_Fields = {
  __typename?: 'rangers_aspect_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "rangers.aspect" */
export type Rangers_Aspect_Mutation_Response = {
  __typename?: 'rangers_aspect_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rangers_Aspect>;
};

/** on_conflict condition type for table "rangers.aspect" */
export type Rangers_Aspect_On_Conflict = {
  constraint: Rangers_Aspect_Constraint;
  update_columns?: Array<Rangers_Aspect_Update_Column>;
  where?: InputMaybe<Rangers_Aspect_Bool_Exp>;
};

/** Ordering options when selecting data from "rangers.aspect". */
export type Rangers_Aspect_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  short_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rangers.aspect */
export type Rangers_Aspect_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "rangers.aspect" */
export enum Rangers_Aspect_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ShortName = 'short_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rangers.aspect" */
export type Rangers_Aspect_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  short_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "rangers_aspect" */
export type Rangers_Aspect_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rangers_Aspect_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rangers_Aspect_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  short_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "rangers.aspect_text" */
export type Rangers_Aspect_Text = {
  __typename?: 'rangers_aspect_text';
  id: Scalars['String'];
  locale: Scalars['String'];
  name: Scalars['String'];
  short_name: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "rangers.aspect_text" */
export type Rangers_Aspect_Text_Aggregate = {
  __typename?: 'rangers_aspect_text_aggregate';
  aggregate?: Maybe<Rangers_Aspect_Text_Aggregate_Fields>;
  nodes: Array<Rangers_Aspect_Text>;
};

/** aggregate fields of "rangers.aspect_text" */
export type Rangers_Aspect_Text_Aggregate_Fields = {
  __typename?: 'rangers_aspect_text_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rangers_Aspect_Text_Max_Fields>;
  min?: Maybe<Rangers_Aspect_Text_Min_Fields>;
};


/** aggregate fields of "rangers.aspect_text" */
export type Rangers_Aspect_Text_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rangers_Aspect_Text_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rangers.aspect_text". All fields are combined with a logical 'AND'. */
export type Rangers_Aspect_Text_Bool_Exp = {
  _and?: InputMaybe<Array<Rangers_Aspect_Text_Bool_Exp>>;
  _not?: InputMaybe<Rangers_Aspect_Text_Bool_Exp>;
  _or?: InputMaybe<Array<Rangers_Aspect_Text_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  short_name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rangers.aspect_text" */
export enum Rangers_Aspect_Text_Constraint {
  /** unique or primary key constraint on columns "locale", "id" */
  AspectTextPkey = 'aspect_text_pkey'
}

/** input type for inserting data into table "rangers.aspect_text" */
export type Rangers_Aspect_Text_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  short_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Rangers_Aspect_Text_Max_Fields = {
  __typename?: 'rangers_aspect_text_max_fields';
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Rangers_Aspect_Text_Min_Fields = {
  __typename?: 'rangers_aspect_text_min_fields';
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "rangers.aspect_text" */
export type Rangers_Aspect_Text_Mutation_Response = {
  __typename?: 'rangers_aspect_text_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rangers_Aspect_Text>;
};

/** on_conflict condition type for table "rangers.aspect_text" */
export type Rangers_Aspect_Text_On_Conflict = {
  constraint: Rangers_Aspect_Text_Constraint;
  update_columns?: Array<Rangers_Aspect_Text_Update_Column>;
  where?: InputMaybe<Rangers_Aspect_Text_Bool_Exp>;
};

/** Ordering options when selecting data from "rangers.aspect_text". */
export type Rangers_Aspect_Text_Order_By = {
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  short_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rangers.aspect_text */
export type Rangers_Aspect_Text_Pk_Columns_Input = {
  id: Scalars['String'];
  locale: Scalars['String'];
};

/** select columns of table "rangers.aspect_text" */
export enum Rangers_Aspect_Text_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  ShortName = 'short_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rangers.aspect_text" */
export type Rangers_Aspect_Text_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  short_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "rangers_aspect_text" */
export type Rangers_Aspect_Text_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rangers_Aspect_Text_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rangers_Aspect_Text_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  short_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "rangers.aspect_text" */
export enum Rangers_Aspect_Text_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  ShortName = 'short_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rangers_Aspect_Text_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rangers_Aspect_Text_Set_Input>;
  where: Rangers_Aspect_Text_Bool_Exp;
};

/** update columns of table "rangers.aspect" */
export enum Rangers_Aspect_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ShortName = 'short_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rangers_Aspect_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rangers_Aspect_Set_Input>;
  where: Rangers_Aspect_Bool_Exp;
};

/** columns and relationships of "rangers.card" */
export type Rangers_Card = {
  __typename?: 'rangers_card';
  approach_conflict?: Maybe<Scalars['Int']>;
  approach_connection?: Maybe<Scalars['Int']>;
  approach_exploration?: Maybe<Scalars['Int']>;
  approach_reason?: Maybe<Scalars['Int']>;
  aspect_id?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Int']>;
  equip?: Maybe<Scalars['Int']>;
  harm?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  level?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  presence?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['Int']>;
  quantity: Scalars['Int'];
  set_id: Scalars['String'];
  set_position: Scalars['Int'];
  text?: Maybe<Scalars['String']>;
  token_count?: Maybe<Scalars['Int']>;
  token_id?: Maybe<Scalars['String']>;
  traits?: Maybe<Scalars['String']>;
  /** An array relationship */
  translations: Array<Rangers_Card_Text>;
  /** An aggregate relationship */
  translations_aggregate: Rangers_Card_Text_Aggregate;
  type_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "rangers.card" */
export type Rangers_CardTranslationsArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Card_Text_Order_By>>;
  where?: InputMaybe<Rangers_Card_Text_Bool_Exp>;
};


/** columns and relationships of "rangers.card" */
export type Rangers_CardTranslations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Card_Text_Order_By>>;
  where?: InputMaybe<Rangers_Card_Text_Bool_Exp>;
};

/** aggregated selection of "rangers.card" */
export type Rangers_Card_Aggregate = {
  __typename?: 'rangers_card_aggregate';
  aggregate?: Maybe<Rangers_Card_Aggregate_Fields>;
  nodes: Array<Rangers_Card>;
};

/** aggregate fields of "rangers.card" */
export type Rangers_Card_Aggregate_Fields = {
  __typename?: 'rangers_card_aggregate_fields';
  avg?: Maybe<Rangers_Card_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rangers_Card_Max_Fields>;
  min?: Maybe<Rangers_Card_Min_Fields>;
  stddev?: Maybe<Rangers_Card_Stddev_Fields>;
  stddev_pop?: Maybe<Rangers_Card_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rangers_Card_Stddev_Samp_Fields>;
  sum?: Maybe<Rangers_Card_Sum_Fields>;
  var_pop?: Maybe<Rangers_Card_Var_Pop_Fields>;
  var_samp?: Maybe<Rangers_Card_Var_Samp_Fields>;
  variance?: Maybe<Rangers_Card_Variance_Fields>;
};


/** aggregate fields of "rangers.card" */
export type Rangers_Card_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rangers_Card_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Rangers_Card_Avg_Fields = {
  __typename?: 'rangers_card_avg_fields';
  approach_conflict?: Maybe<Scalars['Float']>;
  approach_connection?: Maybe<Scalars['Float']>;
  approach_exploration?: Maybe<Scalars['Float']>;
  approach_reason?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  equip?: Maybe<Scalars['Float']>;
  harm?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  presence?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  set_position?: Maybe<Scalars['Float']>;
  token_count?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "rangers.card". All fields are combined with a logical 'AND'. */
export type Rangers_Card_Bool_Exp = {
  _and?: InputMaybe<Array<Rangers_Card_Bool_Exp>>;
  _not?: InputMaybe<Rangers_Card_Bool_Exp>;
  _or?: InputMaybe<Array<Rangers_Card_Bool_Exp>>;
  approach_conflict?: InputMaybe<Int_Comparison_Exp>;
  approach_connection?: InputMaybe<Int_Comparison_Exp>;
  approach_exploration?: InputMaybe<Int_Comparison_Exp>;
  approach_reason?: InputMaybe<Int_Comparison_Exp>;
  aspect_id?: InputMaybe<String_Comparison_Exp>;
  cost?: InputMaybe<Int_Comparison_Exp>;
  equip?: InputMaybe<Int_Comparison_Exp>;
  harm?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  level?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  presence?: InputMaybe<Int_Comparison_Exp>;
  progress?: InputMaybe<Int_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  set_id?: InputMaybe<String_Comparison_Exp>;
  set_position?: InputMaybe<Int_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  token_count?: InputMaybe<Int_Comparison_Exp>;
  token_id?: InputMaybe<String_Comparison_Exp>;
  traits?: InputMaybe<String_Comparison_Exp>;
  translations?: InputMaybe<Rangers_Card_Text_Bool_Exp>;
  translations_aggregate?: InputMaybe<Rangers_Card_Text_Aggregate_Bool_Exp>;
  type_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rangers.card" */
export enum Rangers_Card_Constraint {
  /** unique or primary key constraint on columns "id" */
  CardPkey = 'card_pkey'
}

/** input type for incrementing numeric columns in table "rangers.card" */
export type Rangers_Card_Inc_Input = {
  approach_conflict?: InputMaybe<Scalars['Int']>;
  approach_connection?: InputMaybe<Scalars['Int']>;
  approach_exploration?: InputMaybe<Scalars['Int']>;
  approach_reason?: InputMaybe<Scalars['Int']>;
  cost?: InputMaybe<Scalars['Int']>;
  equip?: InputMaybe<Scalars['Int']>;
  harm?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  presence?: InputMaybe<Scalars['Int']>;
  progress?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  set_position?: InputMaybe<Scalars['Int']>;
  token_count?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "rangers.card" */
export type Rangers_Card_Insert_Input = {
  approach_conflict?: InputMaybe<Scalars['Int']>;
  approach_connection?: InputMaybe<Scalars['Int']>;
  approach_exploration?: InputMaybe<Scalars['Int']>;
  approach_reason?: InputMaybe<Scalars['Int']>;
  aspect_id?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<Scalars['Int']>;
  equip?: InputMaybe<Scalars['Int']>;
  harm?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  presence?: InputMaybe<Scalars['Int']>;
  progress?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  set_id?: InputMaybe<Scalars['String']>;
  set_position?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  token_count?: InputMaybe<Scalars['Int']>;
  token_id?: InputMaybe<Scalars['String']>;
  traits?: InputMaybe<Scalars['String']>;
  translations?: InputMaybe<Rangers_Card_Text_Arr_Rel_Insert_Input>;
  type_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "rangers.card_localized" */
export type Rangers_Card_Localized = {
  __typename?: 'rangers_card_localized';
  approach_conflict?: Maybe<Scalars['Int']>;
  approach_connection?: Maybe<Scalars['Int']>;
  approach_exploration?: Maybe<Scalars['Int']>;
  approach_reason?: Maybe<Scalars['Int']>;
  aspect_id?: Maybe<Scalars['String']>;
  aspect_name?: Maybe<Scalars['String']>;
  aspect_short_name?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Int']>;
  equip?: Maybe<Scalars['Int']>;
  harm?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  presence?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  real_name?: Maybe<Scalars['String']>;
  real_text?: Maybe<Scalars['String']>;
  real_traits?: Maybe<Scalars['String']>;
  set_id?: Maybe<Scalars['String']>;
  set_name?: Maybe<Scalars['String']>;
  set_position?: Maybe<Scalars['Int']>;
  set_size?: Maybe<Scalars['Int']>;
  set_type_id?: Maybe<Scalars['String']>;
  set_type_name?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  token_count?: Maybe<Scalars['Int']>;
  token_id?: Maybe<Scalars['String']>;
  token_name?: Maybe<Scalars['String']>;
  token_plurals?: Maybe<Scalars['String']>;
  traits?: Maybe<Scalars['String']>;
  type_id?: Maybe<Scalars['String']>;
  type_name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "rangers.card_localized" */
export type Rangers_Card_Localized_Aggregate = {
  __typename?: 'rangers_card_localized_aggregate';
  aggregate?: Maybe<Rangers_Card_Localized_Aggregate_Fields>;
  nodes: Array<Rangers_Card_Localized>;
};

/** aggregate fields of "rangers.card_localized" */
export type Rangers_Card_Localized_Aggregate_Fields = {
  __typename?: 'rangers_card_localized_aggregate_fields';
  avg?: Maybe<Rangers_Card_Localized_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rangers_Card_Localized_Max_Fields>;
  min?: Maybe<Rangers_Card_Localized_Min_Fields>;
  stddev?: Maybe<Rangers_Card_Localized_Stddev_Fields>;
  stddev_pop?: Maybe<Rangers_Card_Localized_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rangers_Card_Localized_Stddev_Samp_Fields>;
  sum?: Maybe<Rangers_Card_Localized_Sum_Fields>;
  var_pop?: Maybe<Rangers_Card_Localized_Var_Pop_Fields>;
  var_samp?: Maybe<Rangers_Card_Localized_Var_Samp_Fields>;
  variance?: Maybe<Rangers_Card_Localized_Variance_Fields>;
};


/** aggregate fields of "rangers.card_localized" */
export type Rangers_Card_Localized_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rangers_Card_Localized_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Rangers_Card_Localized_Avg_Fields = {
  __typename?: 'rangers_card_localized_avg_fields';
  approach_conflict?: Maybe<Scalars['Float']>;
  approach_connection?: Maybe<Scalars['Float']>;
  approach_exploration?: Maybe<Scalars['Float']>;
  approach_reason?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  equip?: Maybe<Scalars['Float']>;
  harm?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  presence?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  set_position?: Maybe<Scalars['Float']>;
  set_size?: Maybe<Scalars['Float']>;
  token_count?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "rangers.card_localized". All fields are combined with a logical 'AND'. */
export type Rangers_Card_Localized_Bool_Exp = {
  _and?: InputMaybe<Array<Rangers_Card_Localized_Bool_Exp>>;
  _not?: InputMaybe<Rangers_Card_Localized_Bool_Exp>;
  _or?: InputMaybe<Array<Rangers_Card_Localized_Bool_Exp>>;
  approach_conflict?: InputMaybe<Int_Comparison_Exp>;
  approach_connection?: InputMaybe<Int_Comparison_Exp>;
  approach_exploration?: InputMaybe<Int_Comparison_Exp>;
  approach_reason?: InputMaybe<Int_Comparison_Exp>;
  aspect_id?: InputMaybe<String_Comparison_Exp>;
  aspect_name?: InputMaybe<String_Comparison_Exp>;
  aspect_short_name?: InputMaybe<String_Comparison_Exp>;
  cost?: InputMaybe<Int_Comparison_Exp>;
  equip?: InputMaybe<Int_Comparison_Exp>;
  harm?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  level?: InputMaybe<Int_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  presence?: InputMaybe<Int_Comparison_Exp>;
  progress?: InputMaybe<Int_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  real_name?: InputMaybe<String_Comparison_Exp>;
  real_text?: InputMaybe<String_Comparison_Exp>;
  real_traits?: InputMaybe<String_Comparison_Exp>;
  set_id?: InputMaybe<String_Comparison_Exp>;
  set_name?: InputMaybe<String_Comparison_Exp>;
  set_position?: InputMaybe<Int_Comparison_Exp>;
  set_size?: InputMaybe<Int_Comparison_Exp>;
  set_type_id?: InputMaybe<String_Comparison_Exp>;
  set_type_name?: InputMaybe<String_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  token_count?: InputMaybe<Int_Comparison_Exp>;
  token_id?: InputMaybe<String_Comparison_Exp>;
  token_name?: InputMaybe<String_Comparison_Exp>;
  token_plurals?: InputMaybe<String_Comparison_Exp>;
  traits?: InputMaybe<String_Comparison_Exp>;
  type_id?: InputMaybe<String_Comparison_Exp>;
  type_name?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Rangers_Card_Localized_Max_Fields = {
  __typename?: 'rangers_card_localized_max_fields';
  approach_conflict?: Maybe<Scalars['Int']>;
  approach_connection?: Maybe<Scalars['Int']>;
  approach_exploration?: Maybe<Scalars['Int']>;
  approach_reason?: Maybe<Scalars['Int']>;
  aspect_id?: Maybe<Scalars['String']>;
  aspect_name?: Maybe<Scalars['String']>;
  aspect_short_name?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Int']>;
  equip?: Maybe<Scalars['Int']>;
  harm?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  presence?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  real_name?: Maybe<Scalars['String']>;
  real_text?: Maybe<Scalars['String']>;
  real_traits?: Maybe<Scalars['String']>;
  set_id?: Maybe<Scalars['String']>;
  set_name?: Maybe<Scalars['String']>;
  set_position?: Maybe<Scalars['Int']>;
  set_size?: Maybe<Scalars['Int']>;
  set_type_id?: Maybe<Scalars['String']>;
  set_type_name?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  token_count?: Maybe<Scalars['Int']>;
  token_id?: Maybe<Scalars['String']>;
  token_name?: Maybe<Scalars['String']>;
  token_plurals?: Maybe<Scalars['String']>;
  traits?: Maybe<Scalars['String']>;
  type_id?: Maybe<Scalars['String']>;
  type_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Rangers_Card_Localized_Min_Fields = {
  __typename?: 'rangers_card_localized_min_fields';
  approach_conflict?: Maybe<Scalars['Int']>;
  approach_connection?: Maybe<Scalars['Int']>;
  approach_exploration?: Maybe<Scalars['Int']>;
  approach_reason?: Maybe<Scalars['Int']>;
  aspect_id?: Maybe<Scalars['String']>;
  aspect_name?: Maybe<Scalars['String']>;
  aspect_short_name?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Int']>;
  equip?: Maybe<Scalars['Int']>;
  harm?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  presence?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  real_name?: Maybe<Scalars['String']>;
  real_text?: Maybe<Scalars['String']>;
  real_traits?: Maybe<Scalars['String']>;
  set_id?: Maybe<Scalars['String']>;
  set_name?: Maybe<Scalars['String']>;
  set_position?: Maybe<Scalars['Int']>;
  set_size?: Maybe<Scalars['Int']>;
  set_type_id?: Maybe<Scalars['String']>;
  set_type_name?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  token_count?: Maybe<Scalars['Int']>;
  token_id?: Maybe<Scalars['String']>;
  token_name?: Maybe<Scalars['String']>;
  token_plurals?: Maybe<Scalars['String']>;
  traits?: Maybe<Scalars['String']>;
  type_id?: Maybe<Scalars['String']>;
  type_name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "rangers.card_localized". */
export type Rangers_Card_Localized_Order_By = {
  approach_conflict?: InputMaybe<Order_By>;
  approach_connection?: InputMaybe<Order_By>;
  approach_exploration?: InputMaybe<Order_By>;
  approach_reason?: InputMaybe<Order_By>;
  aspect_id?: InputMaybe<Order_By>;
  aspect_name?: InputMaybe<Order_By>;
  aspect_short_name?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  equip?: InputMaybe<Order_By>;
  harm?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  presence?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  real_name?: InputMaybe<Order_By>;
  real_text?: InputMaybe<Order_By>;
  real_traits?: InputMaybe<Order_By>;
  set_id?: InputMaybe<Order_By>;
  set_name?: InputMaybe<Order_By>;
  set_position?: InputMaybe<Order_By>;
  set_size?: InputMaybe<Order_By>;
  set_type_id?: InputMaybe<Order_By>;
  set_type_name?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  token_count?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  token_name?: InputMaybe<Order_By>;
  token_plurals?: InputMaybe<Order_By>;
  traits?: InputMaybe<Order_By>;
  type_id?: InputMaybe<Order_By>;
  type_name?: InputMaybe<Order_By>;
};

/** select columns of table "rangers.card_localized" */
export enum Rangers_Card_Localized_Select_Column {
  /** column name */
  ApproachConflict = 'approach_conflict',
  /** column name */
  ApproachConnection = 'approach_connection',
  /** column name */
  ApproachExploration = 'approach_exploration',
  /** column name */
  ApproachReason = 'approach_reason',
  /** column name */
  AspectId = 'aspect_id',
  /** column name */
  AspectName = 'aspect_name',
  /** column name */
  AspectShortName = 'aspect_short_name',
  /** column name */
  Cost = 'cost',
  /** column name */
  Equip = 'equip',
  /** column name */
  Harm = 'harm',
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  Presence = 'presence',
  /** column name */
  Progress = 'progress',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  RealName = 'real_name',
  /** column name */
  RealText = 'real_text',
  /** column name */
  RealTraits = 'real_traits',
  /** column name */
  SetId = 'set_id',
  /** column name */
  SetName = 'set_name',
  /** column name */
  SetPosition = 'set_position',
  /** column name */
  SetSize = 'set_size',
  /** column name */
  SetTypeId = 'set_type_id',
  /** column name */
  SetTypeName = 'set_type_name',
  /** column name */
  Text = 'text',
  /** column name */
  TokenCount = 'token_count',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  TokenName = 'token_name',
  /** column name */
  TokenPlurals = 'token_plurals',
  /** column name */
  Traits = 'traits',
  /** column name */
  TypeId = 'type_id',
  /** column name */
  TypeName = 'type_name'
}

/** aggregate stddev on columns */
export type Rangers_Card_Localized_Stddev_Fields = {
  __typename?: 'rangers_card_localized_stddev_fields';
  approach_conflict?: Maybe<Scalars['Float']>;
  approach_connection?: Maybe<Scalars['Float']>;
  approach_exploration?: Maybe<Scalars['Float']>;
  approach_reason?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  equip?: Maybe<Scalars['Float']>;
  harm?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  presence?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  set_position?: Maybe<Scalars['Float']>;
  set_size?: Maybe<Scalars['Float']>;
  token_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Rangers_Card_Localized_Stddev_Pop_Fields = {
  __typename?: 'rangers_card_localized_stddev_pop_fields';
  approach_conflict?: Maybe<Scalars['Float']>;
  approach_connection?: Maybe<Scalars['Float']>;
  approach_exploration?: Maybe<Scalars['Float']>;
  approach_reason?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  equip?: Maybe<Scalars['Float']>;
  harm?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  presence?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  set_position?: Maybe<Scalars['Float']>;
  set_size?: Maybe<Scalars['Float']>;
  token_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Rangers_Card_Localized_Stddev_Samp_Fields = {
  __typename?: 'rangers_card_localized_stddev_samp_fields';
  approach_conflict?: Maybe<Scalars['Float']>;
  approach_connection?: Maybe<Scalars['Float']>;
  approach_exploration?: Maybe<Scalars['Float']>;
  approach_reason?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  equip?: Maybe<Scalars['Float']>;
  harm?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  presence?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  set_position?: Maybe<Scalars['Float']>;
  set_size?: Maybe<Scalars['Float']>;
  token_count?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "rangers_card_localized" */
export type Rangers_Card_Localized_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rangers_Card_Localized_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rangers_Card_Localized_Stream_Cursor_Value_Input = {
  approach_conflict?: InputMaybe<Scalars['Int']>;
  approach_connection?: InputMaybe<Scalars['Int']>;
  approach_exploration?: InputMaybe<Scalars['Int']>;
  approach_reason?: InputMaybe<Scalars['Int']>;
  aspect_id?: InputMaybe<Scalars['String']>;
  aspect_name?: InputMaybe<Scalars['String']>;
  aspect_short_name?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<Scalars['Int']>;
  equip?: InputMaybe<Scalars['Int']>;
  harm?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  presence?: InputMaybe<Scalars['Int']>;
  progress?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  real_name?: InputMaybe<Scalars['String']>;
  real_text?: InputMaybe<Scalars['String']>;
  real_traits?: InputMaybe<Scalars['String']>;
  set_id?: InputMaybe<Scalars['String']>;
  set_name?: InputMaybe<Scalars['String']>;
  set_position?: InputMaybe<Scalars['Int']>;
  set_size?: InputMaybe<Scalars['Int']>;
  set_type_id?: InputMaybe<Scalars['String']>;
  set_type_name?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  token_count?: InputMaybe<Scalars['Int']>;
  token_id?: InputMaybe<Scalars['String']>;
  token_name?: InputMaybe<Scalars['String']>;
  token_plurals?: InputMaybe<Scalars['String']>;
  traits?: InputMaybe<Scalars['String']>;
  type_id?: InputMaybe<Scalars['String']>;
  type_name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Rangers_Card_Localized_Sum_Fields = {
  __typename?: 'rangers_card_localized_sum_fields';
  approach_conflict?: Maybe<Scalars['Int']>;
  approach_connection?: Maybe<Scalars['Int']>;
  approach_exploration?: Maybe<Scalars['Int']>;
  approach_reason?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  equip?: Maybe<Scalars['Int']>;
  harm?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  presence?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  set_position?: Maybe<Scalars['Int']>;
  set_size?: Maybe<Scalars['Int']>;
  token_count?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Rangers_Card_Localized_Var_Pop_Fields = {
  __typename?: 'rangers_card_localized_var_pop_fields';
  approach_conflict?: Maybe<Scalars['Float']>;
  approach_connection?: Maybe<Scalars['Float']>;
  approach_exploration?: Maybe<Scalars['Float']>;
  approach_reason?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  equip?: Maybe<Scalars['Float']>;
  harm?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  presence?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  set_position?: Maybe<Scalars['Float']>;
  set_size?: Maybe<Scalars['Float']>;
  token_count?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Rangers_Card_Localized_Var_Samp_Fields = {
  __typename?: 'rangers_card_localized_var_samp_fields';
  approach_conflict?: Maybe<Scalars['Float']>;
  approach_connection?: Maybe<Scalars['Float']>;
  approach_exploration?: Maybe<Scalars['Float']>;
  approach_reason?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  equip?: Maybe<Scalars['Float']>;
  harm?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  presence?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  set_position?: Maybe<Scalars['Float']>;
  set_size?: Maybe<Scalars['Float']>;
  token_count?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Rangers_Card_Localized_Variance_Fields = {
  __typename?: 'rangers_card_localized_variance_fields';
  approach_conflict?: Maybe<Scalars['Float']>;
  approach_connection?: Maybe<Scalars['Float']>;
  approach_exploration?: Maybe<Scalars['Float']>;
  approach_reason?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  equip?: Maybe<Scalars['Float']>;
  harm?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  presence?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  set_position?: Maybe<Scalars['Float']>;
  set_size?: Maybe<Scalars['Float']>;
  token_count?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Rangers_Card_Max_Fields = {
  __typename?: 'rangers_card_max_fields';
  approach_conflict?: Maybe<Scalars['Int']>;
  approach_connection?: Maybe<Scalars['Int']>;
  approach_exploration?: Maybe<Scalars['Int']>;
  approach_reason?: Maybe<Scalars['Int']>;
  aspect_id?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Int']>;
  equip?: Maybe<Scalars['Int']>;
  harm?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  presence?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  set_id?: Maybe<Scalars['String']>;
  set_position?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  token_count?: Maybe<Scalars['Int']>;
  token_id?: Maybe<Scalars['String']>;
  traits?: Maybe<Scalars['String']>;
  type_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Rangers_Card_Min_Fields = {
  __typename?: 'rangers_card_min_fields';
  approach_conflict?: Maybe<Scalars['Int']>;
  approach_connection?: Maybe<Scalars['Int']>;
  approach_exploration?: Maybe<Scalars['Int']>;
  approach_reason?: Maybe<Scalars['Int']>;
  aspect_id?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Int']>;
  equip?: Maybe<Scalars['Int']>;
  harm?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  presence?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  set_id?: Maybe<Scalars['String']>;
  set_position?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  token_count?: Maybe<Scalars['Int']>;
  token_id?: Maybe<Scalars['String']>;
  traits?: Maybe<Scalars['String']>;
  type_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "rangers.card" */
export type Rangers_Card_Mutation_Response = {
  __typename?: 'rangers_card_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rangers_Card>;
};

/** on_conflict condition type for table "rangers.card" */
export type Rangers_Card_On_Conflict = {
  constraint: Rangers_Card_Constraint;
  update_columns?: Array<Rangers_Card_Update_Column>;
  where?: InputMaybe<Rangers_Card_Bool_Exp>;
};

/** Ordering options when selecting data from "rangers.card". */
export type Rangers_Card_Order_By = {
  approach_conflict?: InputMaybe<Order_By>;
  approach_connection?: InputMaybe<Order_By>;
  approach_exploration?: InputMaybe<Order_By>;
  approach_reason?: InputMaybe<Order_By>;
  aspect_id?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  equip?: InputMaybe<Order_By>;
  harm?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  presence?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  set_id?: InputMaybe<Order_By>;
  set_position?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  token_count?: InputMaybe<Order_By>;
  token_id?: InputMaybe<Order_By>;
  traits?: InputMaybe<Order_By>;
  translations_aggregate?: InputMaybe<Rangers_Card_Text_Aggregate_Order_By>;
  type_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rangers.card */
export type Rangers_Card_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "rangers.card" */
export enum Rangers_Card_Select_Column {
  /** column name */
  ApproachConflict = 'approach_conflict',
  /** column name */
  ApproachConnection = 'approach_connection',
  /** column name */
  ApproachExploration = 'approach_exploration',
  /** column name */
  ApproachReason = 'approach_reason',
  /** column name */
  AspectId = 'aspect_id',
  /** column name */
  Cost = 'cost',
  /** column name */
  Equip = 'equip',
  /** column name */
  Harm = 'harm',
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  Name = 'name',
  /** column name */
  Presence = 'presence',
  /** column name */
  Progress = 'progress',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  SetId = 'set_id',
  /** column name */
  SetPosition = 'set_position',
  /** column name */
  Text = 'text',
  /** column name */
  TokenCount = 'token_count',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  Traits = 'traits',
  /** column name */
  TypeId = 'type_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rangers.card" */
export type Rangers_Card_Set_Input = {
  approach_conflict?: InputMaybe<Scalars['Int']>;
  approach_connection?: InputMaybe<Scalars['Int']>;
  approach_exploration?: InputMaybe<Scalars['Int']>;
  approach_reason?: InputMaybe<Scalars['Int']>;
  aspect_id?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<Scalars['Int']>;
  equip?: InputMaybe<Scalars['Int']>;
  harm?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  presence?: InputMaybe<Scalars['Int']>;
  progress?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  set_id?: InputMaybe<Scalars['String']>;
  set_position?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  token_count?: InputMaybe<Scalars['Int']>;
  token_id?: InputMaybe<Scalars['String']>;
  traits?: InputMaybe<Scalars['String']>;
  type_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Rangers_Card_Stddev_Fields = {
  __typename?: 'rangers_card_stddev_fields';
  approach_conflict?: Maybe<Scalars['Float']>;
  approach_connection?: Maybe<Scalars['Float']>;
  approach_exploration?: Maybe<Scalars['Float']>;
  approach_reason?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  equip?: Maybe<Scalars['Float']>;
  harm?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  presence?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  set_position?: Maybe<Scalars['Float']>;
  token_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Rangers_Card_Stddev_Pop_Fields = {
  __typename?: 'rangers_card_stddev_pop_fields';
  approach_conflict?: Maybe<Scalars['Float']>;
  approach_connection?: Maybe<Scalars['Float']>;
  approach_exploration?: Maybe<Scalars['Float']>;
  approach_reason?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  equip?: Maybe<Scalars['Float']>;
  harm?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  presence?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  set_position?: Maybe<Scalars['Float']>;
  token_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Rangers_Card_Stddev_Samp_Fields = {
  __typename?: 'rangers_card_stddev_samp_fields';
  approach_conflict?: Maybe<Scalars['Float']>;
  approach_connection?: Maybe<Scalars['Float']>;
  approach_exploration?: Maybe<Scalars['Float']>;
  approach_reason?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  equip?: Maybe<Scalars['Float']>;
  harm?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  presence?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  set_position?: Maybe<Scalars['Float']>;
  token_count?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "rangers_card" */
export type Rangers_Card_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rangers_Card_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rangers_Card_Stream_Cursor_Value_Input = {
  approach_conflict?: InputMaybe<Scalars['Int']>;
  approach_connection?: InputMaybe<Scalars['Int']>;
  approach_exploration?: InputMaybe<Scalars['Int']>;
  approach_reason?: InputMaybe<Scalars['Int']>;
  aspect_id?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<Scalars['Int']>;
  equip?: InputMaybe<Scalars['Int']>;
  harm?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  presence?: InputMaybe<Scalars['Int']>;
  progress?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  set_id?: InputMaybe<Scalars['String']>;
  set_position?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  token_count?: InputMaybe<Scalars['Int']>;
  token_id?: InputMaybe<Scalars['String']>;
  traits?: InputMaybe<Scalars['String']>;
  type_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Rangers_Card_Sum_Fields = {
  __typename?: 'rangers_card_sum_fields';
  approach_conflict?: Maybe<Scalars['Int']>;
  approach_connection?: Maybe<Scalars['Int']>;
  approach_exploration?: Maybe<Scalars['Int']>;
  approach_reason?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  equip?: Maybe<Scalars['Int']>;
  harm?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  presence?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  set_position?: Maybe<Scalars['Int']>;
  token_count?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "rangers.card_text" */
export type Rangers_Card_Text = {
  __typename?: 'rangers_card_text';
  id: Scalars['String'];
  locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  traits?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "rangers.card_text" */
export type Rangers_Card_Text_Aggregate = {
  __typename?: 'rangers_card_text_aggregate';
  aggregate?: Maybe<Rangers_Card_Text_Aggregate_Fields>;
  nodes: Array<Rangers_Card_Text>;
};

export type Rangers_Card_Text_Aggregate_Bool_Exp = {
  count?: InputMaybe<Rangers_Card_Text_Aggregate_Bool_Exp_Count>;
};

export type Rangers_Card_Text_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Rangers_Card_Text_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Rangers_Card_Text_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "rangers.card_text" */
export type Rangers_Card_Text_Aggregate_Fields = {
  __typename?: 'rangers_card_text_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rangers_Card_Text_Max_Fields>;
  min?: Maybe<Rangers_Card_Text_Min_Fields>;
};


/** aggregate fields of "rangers.card_text" */
export type Rangers_Card_Text_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rangers_Card_Text_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rangers.card_text" */
export type Rangers_Card_Text_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rangers_Card_Text_Max_Order_By>;
  min?: InputMaybe<Rangers_Card_Text_Min_Order_By>;
};

/** input type for inserting array relation for remote table "rangers.card_text" */
export type Rangers_Card_Text_Arr_Rel_Insert_Input = {
  data: Array<Rangers_Card_Text_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rangers_Card_Text_On_Conflict>;
};

/** Boolean expression to filter rows from the table "rangers.card_text". All fields are combined with a logical 'AND'. */
export type Rangers_Card_Text_Bool_Exp = {
  _and?: InputMaybe<Array<Rangers_Card_Text_Bool_Exp>>;
  _not?: InputMaybe<Rangers_Card_Text_Bool_Exp>;
  _or?: InputMaybe<Array<Rangers_Card_Text_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  traits?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rangers.card_text" */
export enum Rangers_Card_Text_Constraint {
  /** unique or primary key constraint on columns "locale", "id" */
  CardTextPkey = 'card_text_pkey'
}

/** input type for inserting data into table "rangers.card_text" */
export type Rangers_Card_Text_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  traits?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Rangers_Card_Text_Max_Fields = {
  __typename?: 'rangers_card_text_max_fields';
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  traits?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "rangers.card_text" */
export type Rangers_Card_Text_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  traits?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rangers_Card_Text_Min_Fields = {
  __typename?: 'rangers_card_text_min_fields';
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  traits?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "rangers.card_text" */
export type Rangers_Card_Text_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  traits?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rangers.card_text" */
export type Rangers_Card_Text_Mutation_Response = {
  __typename?: 'rangers_card_text_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rangers_Card_Text>;
};

/** on_conflict condition type for table "rangers.card_text" */
export type Rangers_Card_Text_On_Conflict = {
  constraint: Rangers_Card_Text_Constraint;
  update_columns?: Array<Rangers_Card_Text_Update_Column>;
  where?: InputMaybe<Rangers_Card_Text_Bool_Exp>;
};

/** Ordering options when selecting data from "rangers.card_text". */
export type Rangers_Card_Text_Order_By = {
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  traits?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rangers.card_text */
export type Rangers_Card_Text_Pk_Columns_Input = {
  id: Scalars['String'];
  locale: Scalars['String'];
};

/** select columns of table "rangers.card_text" */
export enum Rangers_Card_Text_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  Text = 'text',
  /** column name */
  Traits = 'traits',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rangers.card_text" */
export type Rangers_Card_Text_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  traits?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "rangers_card_text" */
export type Rangers_Card_Text_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rangers_Card_Text_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rangers_Card_Text_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  traits?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "rangers.card_text" */
export enum Rangers_Card_Text_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  Text = 'text',
  /** column name */
  Traits = 'traits',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rangers_Card_Text_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rangers_Card_Text_Set_Input>;
  where: Rangers_Card_Text_Bool_Exp;
};

/** update columns of table "rangers.card" */
export enum Rangers_Card_Update_Column {
  /** column name */
  ApproachConflict = 'approach_conflict',
  /** column name */
  ApproachConnection = 'approach_connection',
  /** column name */
  ApproachExploration = 'approach_exploration',
  /** column name */
  ApproachReason = 'approach_reason',
  /** column name */
  AspectId = 'aspect_id',
  /** column name */
  Cost = 'cost',
  /** column name */
  Equip = 'equip',
  /** column name */
  Harm = 'harm',
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  Name = 'name',
  /** column name */
  Presence = 'presence',
  /** column name */
  Progress = 'progress',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  SetId = 'set_id',
  /** column name */
  SetPosition = 'set_position',
  /** column name */
  Text = 'text',
  /** column name */
  TokenCount = 'token_count',
  /** column name */
  TokenId = 'token_id',
  /** column name */
  Traits = 'traits',
  /** column name */
  TypeId = 'type_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rangers_Card_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Rangers_Card_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rangers_Card_Set_Input>;
  where: Rangers_Card_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Rangers_Card_Var_Pop_Fields = {
  __typename?: 'rangers_card_var_pop_fields';
  approach_conflict?: Maybe<Scalars['Float']>;
  approach_connection?: Maybe<Scalars['Float']>;
  approach_exploration?: Maybe<Scalars['Float']>;
  approach_reason?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  equip?: Maybe<Scalars['Float']>;
  harm?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  presence?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  set_position?: Maybe<Scalars['Float']>;
  token_count?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Rangers_Card_Var_Samp_Fields = {
  __typename?: 'rangers_card_var_samp_fields';
  approach_conflict?: Maybe<Scalars['Float']>;
  approach_connection?: Maybe<Scalars['Float']>;
  approach_exploration?: Maybe<Scalars['Float']>;
  approach_reason?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  equip?: Maybe<Scalars['Float']>;
  harm?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  presence?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  set_position?: Maybe<Scalars['Float']>;
  token_count?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Rangers_Card_Variance_Fields = {
  __typename?: 'rangers_card_variance_fields';
  approach_conflict?: Maybe<Scalars['Float']>;
  approach_connection?: Maybe<Scalars['Float']>;
  approach_exploration?: Maybe<Scalars['Float']>;
  approach_reason?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  equip?: Maybe<Scalars['Float']>;
  harm?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  presence?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  set_position?: Maybe<Scalars['Float']>;
  token_count?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "rangers.locale" */
export type Rangers_Locale = {
  __typename?: 'rangers_locale';
  locale: Scalars['String'];
};

/** aggregated selection of "rangers.locale" */
export type Rangers_Locale_Aggregate = {
  __typename?: 'rangers_locale_aggregate';
  aggregate?: Maybe<Rangers_Locale_Aggregate_Fields>;
  nodes: Array<Rangers_Locale>;
};

/** aggregate fields of "rangers.locale" */
export type Rangers_Locale_Aggregate_Fields = {
  __typename?: 'rangers_locale_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rangers_Locale_Max_Fields>;
  min?: Maybe<Rangers_Locale_Min_Fields>;
};


/** aggregate fields of "rangers.locale" */
export type Rangers_Locale_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rangers_Locale_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rangers.locale". All fields are combined with a logical 'AND'. */
export type Rangers_Locale_Bool_Exp = {
  _and?: InputMaybe<Array<Rangers_Locale_Bool_Exp>>;
  _not?: InputMaybe<Rangers_Locale_Bool_Exp>;
  _or?: InputMaybe<Array<Rangers_Locale_Bool_Exp>>;
  locale?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "rangers.locale" */
export enum Rangers_Locale_Constraint {
  /** unique or primary key constraint on columns "locale" */
  LocalePkey = 'locale_pkey'
}

/** input type for inserting data into table "rangers.locale" */
export type Rangers_Locale_Insert_Input = {
  locale?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Rangers_Locale_Max_Fields = {
  __typename?: 'rangers_locale_max_fields';
  locale?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Rangers_Locale_Min_Fields = {
  __typename?: 'rangers_locale_min_fields';
  locale?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "rangers.locale" */
export type Rangers_Locale_Mutation_Response = {
  __typename?: 'rangers_locale_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rangers_Locale>;
};

/** on_conflict condition type for table "rangers.locale" */
export type Rangers_Locale_On_Conflict = {
  constraint: Rangers_Locale_Constraint;
  update_columns?: Array<Rangers_Locale_Update_Column>;
  where?: InputMaybe<Rangers_Locale_Bool_Exp>;
};

/** Ordering options when selecting data from "rangers.locale". */
export type Rangers_Locale_Order_By = {
  locale?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rangers.locale */
export type Rangers_Locale_Pk_Columns_Input = {
  locale: Scalars['String'];
};

/** select columns of table "rangers.locale" */
export enum Rangers_Locale_Select_Column {
  /** column name */
  Locale = 'locale'
}

/** input type for updating data in table "rangers.locale" */
export type Rangers_Locale_Set_Input = {
  locale?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "rangers_locale" */
export type Rangers_Locale_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rangers_Locale_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rangers_Locale_Stream_Cursor_Value_Input = {
  locale?: InputMaybe<Scalars['String']>;
};

/** update columns of table "rangers.locale" */
export enum Rangers_Locale_Update_Column {
  /** column name */
  Locale = 'locale'
}

export type Rangers_Locale_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rangers_Locale_Set_Input>;
  where: Rangers_Locale_Bool_Exp;
};

/** columns and relationships of "rangers.pack" */
export type Rangers_Pack = {
  __typename?: 'rangers_pack';
  id: Scalars['String'];
  name: Scalars['String'];
  position?: Maybe<Scalars['Int']>;
  /** An array relationship */
  translations: Array<Rangers_Pack_Text>;
  /** An aggregate relationship */
  translations_aggregate: Rangers_Pack_Text_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "rangers.pack" */
export type Rangers_PackTranslationsArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Pack_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Pack_Text_Order_By>>;
  where?: InputMaybe<Rangers_Pack_Text_Bool_Exp>;
};


/** columns and relationships of "rangers.pack" */
export type Rangers_PackTranslations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Pack_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Pack_Text_Order_By>>;
  where?: InputMaybe<Rangers_Pack_Text_Bool_Exp>;
};

/** aggregated selection of "rangers.pack" */
export type Rangers_Pack_Aggregate = {
  __typename?: 'rangers_pack_aggregate';
  aggregate?: Maybe<Rangers_Pack_Aggregate_Fields>;
  nodes: Array<Rangers_Pack>;
};

/** aggregate fields of "rangers.pack" */
export type Rangers_Pack_Aggregate_Fields = {
  __typename?: 'rangers_pack_aggregate_fields';
  avg?: Maybe<Rangers_Pack_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rangers_Pack_Max_Fields>;
  min?: Maybe<Rangers_Pack_Min_Fields>;
  stddev?: Maybe<Rangers_Pack_Stddev_Fields>;
  stddev_pop?: Maybe<Rangers_Pack_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rangers_Pack_Stddev_Samp_Fields>;
  sum?: Maybe<Rangers_Pack_Sum_Fields>;
  var_pop?: Maybe<Rangers_Pack_Var_Pop_Fields>;
  var_samp?: Maybe<Rangers_Pack_Var_Samp_Fields>;
  variance?: Maybe<Rangers_Pack_Variance_Fields>;
};


/** aggregate fields of "rangers.pack" */
export type Rangers_Pack_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rangers_Pack_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Rangers_Pack_Avg_Fields = {
  __typename?: 'rangers_pack_avg_fields';
  position?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "rangers.pack". All fields are combined with a logical 'AND'. */
export type Rangers_Pack_Bool_Exp = {
  _and?: InputMaybe<Array<Rangers_Pack_Bool_Exp>>;
  _not?: InputMaybe<Rangers_Pack_Bool_Exp>;
  _or?: InputMaybe<Array<Rangers_Pack_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  position?: InputMaybe<Int_Comparison_Exp>;
  translations?: InputMaybe<Rangers_Pack_Text_Bool_Exp>;
  translations_aggregate?: InputMaybe<Rangers_Pack_Text_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rangers.pack" */
export enum Rangers_Pack_Constraint {
  /** unique or primary key constraint on columns "id" */
  PackPkey = 'pack_pkey'
}

/** input type for incrementing numeric columns in table "rangers.pack" */
export type Rangers_Pack_Inc_Input = {
  position?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "rangers.pack" */
export type Rangers_Pack_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  translations?: InputMaybe<Rangers_Pack_Text_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Rangers_Pack_Max_Fields = {
  __typename?: 'rangers_pack_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Rangers_Pack_Min_Fields = {
  __typename?: 'rangers_pack_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "rangers.pack" */
export type Rangers_Pack_Mutation_Response = {
  __typename?: 'rangers_pack_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rangers_Pack>;
};

/** on_conflict condition type for table "rangers.pack" */
export type Rangers_Pack_On_Conflict = {
  constraint: Rangers_Pack_Constraint;
  update_columns?: Array<Rangers_Pack_Update_Column>;
  where?: InputMaybe<Rangers_Pack_Bool_Exp>;
};

/** Ordering options when selecting data from "rangers.pack". */
export type Rangers_Pack_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  translations_aggregate?: InputMaybe<Rangers_Pack_Text_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rangers.pack */
export type Rangers_Pack_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "rangers.pack" */
export enum Rangers_Pack_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Position = 'position',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rangers.pack" */
export type Rangers_Pack_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Rangers_Pack_Stddev_Fields = {
  __typename?: 'rangers_pack_stddev_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Rangers_Pack_Stddev_Pop_Fields = {
  __typename?: 'rangers_pack_stddev_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Rangers_Pack_Stddev_Samp_Fields = {
  __typename?: 'rangers_pack_stddev_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "rangers_pack" */
export type Rangers_Pack_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rangers_Pack_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rangers_Pack_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Rangers_Pack_Sum_Fields = {
  __typename?: 'rangers_pack_sum_fields';
  position?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "rangers.pack_text" */
export type Rangers_Pack_Text = {
  __typename?: 'rangers_pack_text';
  id: Scalars['String'];
  locale: Scalars['String'];
  name: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "rangers.pack_text" */
export type Rangers_Pack_Text_Aggregate = {
  __typename?: 'rangers_pack_text_aggregate';
  aggregate?: Maybe<Rangers_Pack_Text_Aggregate_Fields>;
  nodes: Array<Rangers_Pack_Text>;
};

export type Rangers_Pack_Text_Aggregate_Bool_Exp = {
  count?: InputMaybe<Rangers_Pack_Text_Aggregate_Bool_Exp_Count>;
};

export type Rangers_Pack_Text_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Rangers_Pack_Text_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Rangers_Pack_Text_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "rangers.pack_text" */
export type Rangers_Pack_Text_Aggregate_Fields = {
  __typename?: 'rangers_pack_text_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rangers_Pack_Text_Max_Fields>;
  min?: Maybe<Rangers_Pack_Text_Min_Fields>;
};


/** aggregate fields of "rangers.pack_text" */
export type Rangers_Pack_Text_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rangers_Pack_Text_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rangers.pack_text" */
export type Rangers_Pack_Text_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rangers_Pack_Text_Max_Order_By>;
  min?: InputMaybe<Rangers_Pack_Text_Min_Order_By>;
};

/** input type for inserting array relation for remote table "rangers.pack_text" */
export type Rangers_Pack_Text_Arr_Rel_Insert_Input = {
  data: Array<Rangers_Pack_Text_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rangers_Pack_Text_On_Conflict>;
};

/** Boolean expression to filter rows from the table "rangers.pack_text". All fields are combined with a logical 'AND'. */
export type Rangers_Pack_Text_Bool_Exp = {
  _and?: InputMaybe<Array<Rangers_Pack_Text_Bool_Exp>>;
  _not?: InputMaybe<Rangers_Pack_Text_Bool_Exp>;
  _or?: InputMaybe<Array<Rangers_Pack_Text_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rangers.pack_text" */
export enum Rangers_Pack_Text_Constraint {
  /** unique or primary key constraint on columns "locale", "id" */
  PackTextPkey = 'pack_text_pkey'
}

/** input type for inserting data into table "rangers.pack_text" */
export type Rangers_Pack_Text_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Rangers_Pack_Text_Max_Fields = {
  __typename?: 'rangers_pack_text_max_fields';
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "rangers.pack_text" */
export type Rangers_Pack_Text_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rangers_Pack_Text_Min_Fields = {
  __typename?: 'rangers_pack_text_min_fields';
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "rangers.pack_text" */
export type Rangers_Pack_Text_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rangers.pack_text" */
export type Rangers_Pack_Text_Mutation_Response = {
  __typename?: 'rangers_pack_text_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rangers_Pack_Text>;
};

/** on_conflict condition type for table "rangers.pack_text" */
export type Rangers_Pack_Text_On_Conflict = {
  constraint: Rangers_Pack_Text_Constraint;
  update_columns?: Array<Rangers_Pack_Text_Update_Column>;
  where?: InputMaybe<Rangers_Pack_Text_Bool_Exp>;
};

/** Ordering options when selecting data from "rangers.pack_text". */
export type Rangers_Pack_Text_Order_By = {
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rangers.pack_text */
export type Rangers_Pack_Text_Pk_Columns_Input = {
  id: Scalars['String'];
  locale: Scalars['String'];
};

/** select columns of table "rangers.pack_text" */
export enum Rangers_Pack_Text_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rangers.pack_text" */
export type Rangers_Pack_Text_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "rangers_pack_text" */
export type Rangers_Pack_Text_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rangers_Pack_Text_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rangers_Pack_Text_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "rangers.pack_text" */
export enum Rangers_Pack_Text_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rangers_Pack_Text_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rangers_Pack_Text_Set_Input>;
  where: Rangers_Pack_Text_Bool_Exp;
};

/** update columns of table "rangers.pack" */
export enum Rangers_Pack_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Position = 'position',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rangers_Pack_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Rangers_Pack_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rangers_Pack_Set_Input>;
  where: Rangers_Pack_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Rangers_Pack_Var_Pop_Fields = {
  __typename?: 'rangers_pack_var_pop_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Rangers_Pack_Var_Samp_Fields = {
  __typename?: 'rangers_pack_var_samp_fields';
  position?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Rangers_Pack_Variance_Fields = {
  __typename?: 'rangers_pack_variance_fields';
  position?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "rangers.set" */
export type Rangers_Set = {
  __typename?: 'rangers_set';
  id: Scalars['String'];
  name: Scalars['String'];
  size?: Maybe<Scalars['Int']>;
  /** An array relationship */
  translations: Array<Rangers_Set_Text>;
  /** An aggregate relationship */
  translations_aggregate: Rangers_Set_Text_Aggregate;
  type_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "rangers.set" */
export type Rangers_SetTranslationsArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Set_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Set_Text_Order_By>>;
  where?: InputMaybe<Rangers_Set_Text_Bool_Exp>;
};


/** columns and relationships of "rangers.set" */
export type Rangers_SetTranslations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Set_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Set_Text_Order_By>>;
  where?: InputMaybe<Rangers_Set_Text_Bool_Exp>;
};

/** aggregated selection of "rangers.set" */
export type Rangers_Set_Aggregate = {
  __typename?: 'rangers_set_aggregate';
  aggregate?: Maybe<Rangers_Set_Aggregate_Fields>;
  nodes: Array<Rangers_Set>;
};

/** aggregate fields of "rangers.set" */
export type Rangers_Set_Aggregate_Fields = {
  __typename?: 'rangers_set_aggregate_fields';
  avg?: Maybe<Rangers_Set_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rangers_Set_Max_Fields>;
  min?: Maybe<Rangers_Set_Min_Fields>;
  stddev?: Maybe<Rangers_Set_Stddev_Fields>;
  stddev_pop?: Maybe<Rangers_Set_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rangers_Set_Stddev_Samp_Fields>;
  sum?: Maybe<Rangers_Set_Sum_Fields>;
  var_pop?: Maybe<Rangers_Set_Var_Pop_Fields>;
  var_samp?: Maybe<Rangers_Set_Var_Samp_Fields>;
  variance?: Maybe<Rangers_Set_Variance_Fields>;
};


/** aggregate fields of "rangers.set" */
export type Rangers_Set_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rangers_Set_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Rangers_Set_Avg_Fields = {
  __typename?: 'rangers_set_avg_fields';
  size?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "rangers.set". All fields are combined with a logical 'AND'. */
export type Rangers_Set_Bool_Exp = {
  _and?: InputMaybe<Array<Rangers_Set_Bool_Exp>>;
  _not?: InputMaybe<Rangers_Set_Bool_Exp>;
  _or?: InputMaybe<Array<Rangers_Set_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  translations?: InputMaybe<Rangers_Set_Text_Bool_Exp>;
  translations_aggregate?: InputMaybe<Rangers_Set_Text_Aggregate_Bool_Exp>;
  type_id?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rangers.set" */
export enum Rangers_Set_Constraint {
  /** unique or primary key constraint on columns "id" */
  SetPkey = 'set_pkey'
}

/** input type for incrementing numeric columns in table "rangers.set" */
export type Rangers_Set_Inc_Input = {
  size?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "rangers.set" */
export type Rangers_Set_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  translations?: InputMaybe<Rangers_Set_Text_Arr_Rel_Insert_Input>;
  type_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Rangers_Set_Max_Fields = {
  __typename?: 'rangers_set_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Rangers_Set_Min_Fields = {
  __typename?: 'rangers_set_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  type_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "rangers.set" */
export type Rangers_Set_Mutation_Response = {
  __typename?: 'rangers_set_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rangers_Set>;
};

/** on_conflict condition type for table "rangers.set" */
export type Rangers_Set_On_Conflict = {
  constraint: Rangers_Set_Constraint;
  update_columns?: Array<Rangers_Set_Update_Column>;
  where?: InputMaybe<Rangers_Set_Bool_Exp>;
};

/** Ordering options when selecting data from "rangers.set". */
export type Rangers_Set_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  translations_aggregate?: InputMaybe<Rangers_Set_Text_Aggregate_Order_By>;
  type_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rangers.set */
export type Rangers_Set_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "rangers.set" */
export enum Rangers_Set_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  TypeId = 'type_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rangers.set" */
export type Rangers_Set_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  type_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Rangers_Set_Stddev_Fields = {
  __typename?: 'rangers_set_stddev_fields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Rangers_Set_Stddev_Pop_Fields = {
  __typename?: 'rangers_set_stddev_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Rangers_Set_Stddev_Samp_Fields = {
  __typename?: 'rangers_set_stddev_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "rangers_set" */
export type Rangers_Set_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rangers_Set_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rangers_Set_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  type_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Rangers_Set_Sum_Fields = {
  __typename?: 'rangers_set_sum_fields';
  size?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "rangers.set_text" */
export type Rangers_Set_Text = {
  __typename?: 'rangers_set_text';
  id: Scalars['String'];
  locale: Scalars['String'];
  name: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "rangers.set_text" */
export type Rangers_Set_Text_Aggregate = {
  __typename?: 'rangers_set_text_aggregate';
  aggregate?: Maybe<Rangers_Set_Text_Aggregate_Fields>;
  nodes: Array<Rangers_Set_Text>;
};

export type Rangers_Set_Text_Aggregate_Bool_Exp = {
  count?: InputMaybe<Rangers_Set_Text_Aggregate_Bool_Exp_Count>;
};

export type Rangers_Set_Text_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Rangers_Set_Text_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Rangers_Set_Text_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "rangers.set_text" */
export type Rangers_Set_Text_Aggregate_Fields = {
  __typename?: 'rangers_set_text_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rangers_Set_Text_Max_Fields>;
  min?: Maybe<Rangers_Set_Text_Min_Fields>;
};


/** aggregate fields of "rangers.set_text" */
export type Rangers_Set_Text_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rangers_Set_Text_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rangers.set_text" */
export type Rangers_Set_Text_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rangers_Set_Text_Max_Order_By>;
  min?: InputMaybe<Rangers_Set_Text_Min_Order_By>;
};

/** input type for inserting array relation for remote table "rangers.set_text" */
export type Rangers_Set_Text_Arr_Rel_Insert_Input = {
  data: Array<Rangers_Set_Text_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rangers_Set_Text_On_Conflict>;
};

/** Boolean expression to filter rows from the table "rangers.set_text". All fields are combined with a logical 'AND'. */
export type Rangers_Set_Text_Bool_Exp = {
  _and?: InputMaybe<Array<Rangers_Set_Text_Bool_Exp>>;
  _not?: InputMaybe<Rangers_Set_Text_Bool_Exp>;
  _or?: InputMaybe<Array<Rangers_Set_Text_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rangers.set_text" */
export enum Rangers_Set_Text_Constraint {
  /** unique or primary key constraint on columns "locale", "id" */
  SetTextPkey = 'set_text_pkey'
}

/** input type for inserting data into table "rangers.set_text" */
export type Rangers_Set_Text_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Rangers_Set_Text_Max_Fields = {
  __typename?: 'rangers_set_text_max_fields';
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "rangers.set_text" */
export type Rangers_Set_Text_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rangers_Set_Text_Min_Fields = {
  __typename?: 'rangers_set_text_min_fields';
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "rangers.set_text" */
export type Rangers_Set_Text_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rangers.set_text" */
export type Rangers_Set_Text_Mutation_Response = {
  __typename?: 'rangers_set_text_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rangers_Set_Text>;
};

/** on_conflict condition type for table "rangers.set_text" */
export type Rangers_Set_Text_On_Conflict = {
  constraint: Rangers_Set_Text_Constraint;
  update_columns?: Array<Rangers_Set_Text_Update_Column>;
  where?: InputMaybe<Rangers_Set_Text_Bool_Exp>;
};

/** Ordering options when selecting data from "rangers.set_text". */
export type Rangers_Set_Text_Order_By = {
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rangers.set_text */
export type Rangers_Set_Text_Pk_Columns_Input = {
  id: Scalars['String'];
  locale: Scalars['String'];
};

/** select columns of table "rangers.set_text" */
export enum Rangers_Set_Text_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rangers.set_text" */
export type Rangers_Set_Text_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "rangers_set_text" */
export type Rangers_Set_Text_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rangers_Set_Text_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rangers_Set_Text_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "rangers.set_text" */
export enum Rangers_Set_Text_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rangers_Set_Text_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rangers_Set_Text_Set_Input>;
  where: Rangers_Set_Text_Bool_Exp;
};

/** columns and relationships of "rangers.set_type" */
export type Rangers_Set_Type = {
  __typename?: 'rangers_set_type';
  id: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  translations: Array<Rangers_Set_Type_Text>;
  /** An aggregate relationship */
  translations_aggregate: Rangers_Set_Type_Text_Aggregate;
};


/** columns and relationships of "rangers.set_type" */
export type Rangers_Set_TypeTranslationsArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Set_Type_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Set_Type_Text_Order_By>>;
  where?: InputMaybe<Rangers_Set_Type_Text_Bool_Exp>;
};


/** columns and relationships of "rangers.set_type" */
export type Rangers_Set_TypeTranslations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Set_Type_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Set_Type_Text_Order_By>>;
  where?: InputMaybe<Rangers_Set_Type_Text_Bool_Exp>;
};

/** aggregated selection of "rangers.set_type" */
export type Rangers_Set_Type_Aggregate = {
  __typename?: 'rangers_set_type_aggregate';
  aggregate?: Maybe<Rangers_Set_Type_Aggregate_Fields>;
  nodes: Array<Rangers_Set_Type>;
};

/** aggregate fields of "rangers.set_type" */
export type Rangers_Set_Type_Aggregate_Fields = {
  __typename?: 'rangers_set_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rangers_Set_Type_Max_Fields>;
  min?: Maybe<Rangers_Set_Type_Min_Fields>;
};


/** aggregate fields of "rangers.set_type" */
export type Rangers_Set_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rangers_Set_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rangers.set_type". All fields are combined with a logical 'AND'. */
export type Rangers_Set_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Rangers_Set_Type_Bool_Exp>>;
  _not?: InputMaybe<Rangers_Set_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Rangers_Set_Type_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  translations?: InputMaybe<Rangers_Set_Type_Text_Bool_Exp>;
  translations_aggregate?: InputMaybe<Rangers_Set_Type_Text_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "rangers.set_type" */
export enum Rangers_Set_Type_Constraint {
  /** unique or primary key constraint on columns "id" */
  SetTypePkey = 'set_type_pkey'
}

/** input type for inserting data into table "rangers.set_type" */
export type Rangers_Set_Type_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  translations?: InputMaybe<Rangers_Set_Type_Text_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Rangers_Set_Type_Max_Fields = {
  __typename?: 'rangers_set_type_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Rangers_Set_Type_Min_Fields = {
  __typename?: 'rangers_set_type_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "rangers.set_type" */
export type Rangers_Set_Type_Mutation_Response = {
  __typename?: 'rangers_set_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rangers_Set_Type>;
};

/** on_conflict condition type for table "rangers.set_type" */
export type Rangers_Set_Type_On_Conflict = {
  constraint: Rangers_Set_Type_Constraint;
  update_columns?: Array<Rangers_Set_Type_Update_Column>;
  where?: InputMaybe<Rangers_Set_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "rangers.set_type". */
export type Rangers_Set_Type_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  translations_aggregate?: InputMaybe<Rangers_Set_Type_Text_Aggregate_Order_By>;
};

/** primary key columns input for table: rangers.set_type */
export type Rangers_Set_Type_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "rangers.set_type" */
export enum Rangers_Set_Type_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "rangers.set_type" */
export type Rangers_Set_Type_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "rangers_set_type" */
export type Rangers_Set_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rangers_Set_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rangers_Set_Type_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "rangers.set_type_text" */
export type Rangers_Set_Type_Text = {
  __typename?: 'rangers_set_type_text';
  id: Scalars['String'];
  locale: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "rangers.set_type_text" */
export type Rangers_Set_Type_Text_Aggregate = {
  __typename?: 'rangers_set_type_text_aggregate';
  aggregate?: Maybe<Rangers_Set_Type_Text_Aggregate_Fields>;
  nodes: Array<Rangers_Set_Type_Text>;
};

export type Rangers_Set_Type_Text_Aggregate_Bool_Exp = {
  count?: InputMaybe<Rangers_Set_Type_Text_Aggregate_Bool_Exp_Count>;
};

export type Rangers_Set_Type_Text_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Rangers_Set_Type_Text_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Rangers_Set_Type_Text_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "rangers.set_type_text" */
export type Rangers_Set_Type_Text_Aggregate_Fields = {
  __typename?: 'rangers_set_type_text_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rangers_Set_Type_Text_Max_Fields>;
  min?: Maybe<Rangers_Set_Type_Text_Min_Fields>;
};


/** aggregate fields of "rangers.set_type_text" */
export type Rangers_Set_Type_Text_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rangers_Set_Type_Text_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rangers.set_type_text" */
export type Rangers_Set_Type_Text_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rangers_Set_Type_Text_Max_Order_By>;
  min?: InputMaybe<Rangers_Set_Type_Text_Min_Order_By>;
};

/** input type for inserting array relation for remote table "rangers.set_type_text" */
export type Rangers_Set_Type_Text_Arr_Rel_Insert_Input = {
  data: Array<Rangers_Set_Type_Text_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rangers_Set_Type_Text_On_Conflict>;
};

/** Boolean expression to filter rows from the table "rangers.set_type_text". All fields are combined with a logical 'AND'. */
export type Rangers_Set_Type_Text_Bool_Exp = {
  _and?: InputMaybe<Array<Rangers_Set_Type_Text_Bool_Exp>>;
  _not?: InputMaybe<Rangers_Set_Type_Text_Bool_Exp>;
  _or?: InputMaybe<Array<Rangers_Set_Type_Text_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "rangers.set_type_text" */
export enum Rangers_Set_Type_Text_Constraint {
  /** unique or primary key constraint on columns "locale", "id" */
  SetTypeTextPkey = 'set_type_text_pkey'
}

/** input type for inserting data into table "rangers.set_type_text" */
export type Rangers_Set_Type_Text_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Rangers_Set_Type_Text_Max_Fields = {
  __typename?: 'rangers_set_type_text_max_fields';
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "rangers.set_type_text" */
export type Rangers_Set_Type_Text_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rangers_Set_Type_Text_Min_Fields = {
  __typename?: 'rangers_set_type_text_min_fields';
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "rangers.set_type_text" */
export type Rangers_Set_Type_Text_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rangers.set_type_text" */
export type Rangers_Set_Type_Text_Mutation_Response = {
  __typename?: 'rangers_set_type_text_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rangers_Set_Type_Text>;
};

/** on_conflict condition type for table "rangers.set_type_text" */
export type Rangers_Set_Type_Text_On_Conflict = {
  constraint: Rangers_Set_Type_Text_Constraint;
  update_columns?: Array<Rangers_Set_Type_Text_Update_Column>;
  where?: InputMaybe<Rangers_Set_Type_Text_Bool_Exp>;
};

/** Ordering options when selecting data from "rangers.set_type_text". */
export type Rangers_Set_Type_Text_Order_By = {
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rangers.set_type_text */
export type Rangers_Set_Type_Text_Pk_Columns_Input = {
  id: Scalars['String'];
  locale: Scalars['String'];
};

/** select columns of table "rangers.set_type_text" */
export enum Rangers_Set_Type_Text_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "rangers.set_type_text" */
export type Rangers_Set_Type_Text_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "rangers_set_type_text" */
export type Rangers_Set_Type_Text_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rangers_Set_Type_Text_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rangers_Set_Type_Text_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "rangers.set_type_text" */
export enum Rangers_Set_Type_Text_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name'
}

export type Rangers_Set_Type_Text_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rangers_Set_Type_Text_Set_Input>;
  where: Rangers_Set_Type_Text_Bool_Exp;
};

/** update columns of table "rangers.set_type" */
export enum Rangers_Set_Type_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Rangers_Set_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rangers_Set_Type_Set_Input>;
  where: Rangers_Set_Type_Bool_Exp;
};

/** update columns of table "rangers.set" */
export enum Rangers_Set_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  TypeId = 'type_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rangers_Set_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Rangers_Set_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rangers_Set_Set_Input>;
  where: Rangers_Set_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Rangers_Set_Var_Pop_Fields = {
  __typename?: 'rangers_set_var_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Rangers_Set_Var_Samp_Fields = {
  __typename?: 'rangers_set_var_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Rangers_Set_Variance_Fields = {
  __typename?: 'rangers_set_variance_fields';
  size?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "rangers.token" */
export type Rangers_Token = {
  __typename?: 'rangers_token';
  id: Scalars['String'];
  name: Scalars['String'];
  plurals?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "rangers.token" */
export type Rangers_Token_Aggregate = {
  __typename?: 'rangers_token_aggregate';
  aggregate?: Maybe<Rangers_Token_Aggregate_Fields>;
  nodes: Array<Rangers_Token>;
};

/** aggregate fields of "rangers.token" */
export type Rangers_Token_Aggregate_Fields = {
  __typename?: 'rangers_token_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rangers_Token_Max_Fields>;
  min?: Maybe<Rangers_Token_Min_Fields>;
};


/** aggregate fields of "rangers.token" */
export type Rangers_Token_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rangers_Token_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rangers.token". All fields are combined with a logical 'AND'. */
export type Rangers_Token_Bool_Exp = {
  _and?: InputMaybe<Array<Rangers_Token_Bool_Exp>>;
  _not?: InputMaybe<Rangers_Token_Bool_Exp>;
  _or?: InputMaybe<Array<Rangers_Token_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  plurals?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rangers.token" */
export enum Rangers_Token_Constraint {
  /** unique or primary key constraint on columns "id" */
  TokenPkey = 'token_pkey'
}

/** input type for inserting data into table "rangers.token" */
export type Rangers_Token_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  plurals?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Rangers_Token_Max_Fields = {
  __typename?: 'rangers_token_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  plurals?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Rangers_Token_Min_Fields = {
  __typename?: 'rangers_token_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  plurals?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "rangers.token" */
export type Rangers_Token_Mutation_Response = {
  __typename?: 'rangers_token_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rangers_Token>;
};

/** on_conflict condition type for table "rangers.token" */
export type Rangers_Token_On_Conflict = {
  constraint: Rangers_Token_Constraint;
  update_columns?: Array<Rangers_Token_Update_Column>;
  where?: InputMaybe<Rangers_Token_Bool_Exp>;
};

/** Ordering options when selecting data from "rangers.token". */
export type Rangers_Token_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  plurals?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rangers.token */
export type Rangers_Token_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "rangers.token" */
export enum Rangers_Token_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Plurals = 'plurals',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rangers.token" */
export type Rangers_Token_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  plurals?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "rangers_token" */
export type Rangers_Token_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rangers_Token_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rangers_Token_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  plurals?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "rangers.token_text" */
export type Rangers_Token_Text = {
  __typename?: 'rangers_token_text';
  id: Scalars['String'];
  locale: Scalars['String'];
  name: Scalars['String'];
  plurals: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "rangers.token_text" */
export type Rangers_Token_Text_Aggregate = {
  __typename?: 'rangers_token_text_aggregate';
  aggregate?: Maybe<Rangers_Token_Text_Aggregate_Fields>;
  nodes: Array<Rangers_Token_Text>;
};

/** aggregate fields of "rangers.token_text" */
export type Rangers_Token_Text_Aggregate_Fields = {
  __typename?: 'rangers_token_text_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rangers_Token_Text_Max_Fields>;
  min?: Maybe<Rangers_Token_Text_Min_Fields>;
};


/** aggregate fields of "rangers.token_text" */
export type Rangers_Token_Text_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rangers_Token_Text_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rangers.token_text". All fields are combined with a logical 'AND'. */
export type Rangers_Token_Text_Bool_Exp = {
  _and?: InputMaybe<Array<Rangers_Token_Text_Bool_Exp>>;
  _not?: InputMaybe<Rangers_Token_Text_Bool_Exp>;
  _or?: InputMaybe<Array<Rangers_Token_Text_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  plurals?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rangers.token_text" */
export enum Rangers_Token_Text_Constraint {
  /** unique or primary key constraint on columns "locale", "id" */
  TokenTextPkey = 'token_text_pkey'
}

/** input type for inserting data into table "rangers.token_text" */
export type Rangers_Token_Text_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  plurals?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Rangers_Token_Text_Max_Fields = {
  __typename?: 'rangers_token_text_max_fields';
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  plurals?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Rangers_Token_Text_Min_Fields = {
  __typename?: 'rangers_token_text_min_fields';
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  plurals?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "rangers.token_text" */
export type Rangers_Token_Text_Mutation_Response = {
  __typename?: 'rangers_token_text_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rangers_Token_Text>;
};

/** on_conflict condition type for table "rangers.token_text" */
export type Rangers_Token_Text_On_Conflict = {
  constraint: Rangers_Token_Text_Constraint;
  update_columns?: Array<Rangers_Token_Text_Update_Column>;
  where?: InputMaybe<Rangers_Token_Text_Bool_Exp>;
};

/** Ordering options when selecting data from "rangers.token_text". */
export type Rangers_Token_Text_Order_By = {
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  plurals?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rangers.token_text */
export type Rangers_Token_Text_Pk_Columns_Input = {
  id: Scalars['String'];
  locale: Scalars['String'];
};

/** select columns of table "rangers.token_text" */
export enum Rangers_Token_Text_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  Plurals = 'plurals',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rangers.token_text" */
export type Rangers_Token_Text_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  plurals?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "rangers_token_text" */
export type Rangers_Token_Text_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rangers_Token_Text_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rangers_Token_Text_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  plurals?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "rangers.token_text" */
export enum Rangers_Token_Text_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  Plurals = 'plurals',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rangers_Token_Text_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rangers_Token_Text_Set_Input>;
  where: Rangers_Token_Text_Bool_Exp;
};

/** update columns of table "rangers.token" */
export enum Rangers_Token_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Plurals = 'plurals',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rangers_Token_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rangers_Token_Set_Input>;
  where: Rangers_Token_Bool_Exp;
};

/** columns and relationships of "rangers.type" */
export type Rangers_Type = {
  __typename?: 'rangers_type';
  id: Scalars['String'];
  name: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "rangers.type" */
export type Rangers_Type_Aggregate = {
  __typename?: 'rangers_type_aggregate';
  aggregate?: Maybe<Rangers_Type_Aggregate_Fields>;
  nodes: Array<Rangers_Type>;
};

/** aggregate fields of "rangers.type" */
export type Rangers_Type_Aggregate_Fields = {
  __typename?: 'rangers_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rangers_Type_Max_Fields>;
  min?: Maybe<Rangers_Type_Min_Fields>;
};


/** aggregate fields of "rangers.type" */
export type Rangers_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rangers_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rangers.type". All fields are combined with a logical 'AND'. */
export type Rangers_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Rangers_Type_Bool_Exp>>;
  _not?: InputMaybe<Rangers_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Rangers_Type_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rangers.type" */
export enum Rangers_Type_Constraint {
  /** unique or primary key constraint on columns "id" */
  TypePkey = 'type_pkey'
}

/** input type for inserting data into table "rangers.type" */
export type Rangers_Type_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Rangers_Type_Max_Fields = {
  __typename?: 'rangers_type_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Rangers_Type_Min_Fields = {
  __typename?: 'rangers_type_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "rangers.type" */
export type Rangers_Type_Mutation_Response = {
  __typename?: 'rangers_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rangers_Type>;
};

/** on_conflict condition type for table "rangers.type" */
export type Rangers_Type_On_Conflict = {
  constraint: Rangers_Type_Constraint;
  update_columns?: Array<Rangers_Type_Update_Column>;
  where?: InputMaybe<Rangers_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "rangers.type". */
export type Rangers_Type_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rangers.type */
export type Rangers_Type_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "rangers.type" */
export enum Rangers_Type_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rangers.type" */
export type Rangers_Type_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "rangers_type" */
export type Rangers_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rangers_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rangers_Type_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** columns and relationships of "rangers.type_text" */
export type Rangers_Type_Text = {
  __typename?: 'rangers_type_text';
  id: Scalars['String'];
  locale: Scalars['String'];
  name: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "rangers.type_text" */
export type Rangers_Type_Text_Aggregate = {
  __typename?: 'rangers_type_text_aggregate';
  aggregate?: Maybe<Rangers_Type_Text_Aggregate_Fields>;
  nodes: Array<Rangers_Type_Text>;
};

/** aggregate fields of "rangers.type_text" */
export type Rangers_Type_Text_Aggregate_Fields = {
  __typename?: 'rangers_type_text_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rangers_Type_Text_Max_Fields>;
  min?: Maybe<Rangers_Type_Text_Min_Fields>;
};


/** aggregate fields of "rangers.type_text" */
export type Rangers_Type_Text_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rangers_Type_Text_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rangers.type_text". All fields are combined with a logical 'AND'. */
export type Rangers_Type_Text_Bool_Exp = {
  _and?: InputMaybe<Array<Rangers_Type_Text_Bool_Exp>>;
  _not?: InputMaybe<Rangers_Type_Text_Bool_Exp>;
  _or?: InputMaybe<Array<Rangers_Type_Text_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rangers.type_text" */
export enum Rangers_Type_Text_Constraint {
  /** unique or primary key constraint on columns "locale", "id" */
  TypeTextPkey = 'type_text_pkey'
}

/** input type for inserting data into table "rangers.type_text" */
export type Rangers_Type_Text_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Rangers_Type_Text_Max_Fields = {
  __typename?: 'rangers_type_text_max_fields';
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Rangers_Type_Text_Min_Fields = {
  __typename?: 'rangers_type_text_min_fields';
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "rangers.type_text" */
export type Rangers_Type_Text_Mutation_Response = {
  __typename?: 'rangers_type_text_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rangers_Type_Text>;
};

/** on_conflict condition type for table "rangers.type_text" */
export type Rangers_Type_Text_On_Conflict = {
  constraint: Rangers_Type_Text_Constraint;
  update_columns?: Array<Rangers_Type_Text_Update_Column>;
  where?: InputMaybe<Rangers_Type_Text_Bool_Exp>;
};

/** Ordering options when selecting data from "rangers.type_text". */
export type Rangers_Type_Text_Order_By = {
  id?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rangers.type_text */
export type Rangers_Type_Text_Pk_Columns_Input = {
  id: Scalars['String'];
  locale: Scalars['String'];
};

/** select columns of table "rangers.type_text" */
export enum Rangers_Type_Text_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rangers.type_text" */
export type Rangers_Type_Text_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "rangers_type_text" */
export type Rangers_Type_Text_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rangers_Type_Text_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rangers_Type_Text_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "rangers.type_text" */
export enum Rangers_Type_Text_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Locale = 'locale',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rangers_Type_Text_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rangers_Type_Text_Set_Input>;
  where: Rangers_Type_Text_Bool_Exp;
};

/** update columns of table "rangers.type" */
export enum Rangers_Type_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Rangers_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rangers_Type_Set_Input>;
  where: Rangers_Type_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "all_card" */
  all_card: Array<All_Card>;
  /** fetch aggregated fields from the table: "all_card" */
  all_card_aggregate: All_Card_Aggregate;
  /** fetch data from the table: "all_card" using primary key columns */
  all_card_by_pk?: Maybe<All_Card>;
  /** fetch data from the table in a streaming manner: "all_card" */
  all_card_stream: Array<All_Card>;
  /** fetch data from the table: "all_card_text" */
  all_card_text: Array<All_Card_Text>;
  /** fetch aggregated fields from the table: "all_card_text" */
  all_card_text_aggregate: All_Card_Text_Aggregate;
  /** fetch data from the table: "all_card_text" using primary key columns */
  all_card_text_by_pk?: Maybe<All_Card_Text>;
  /** fetch data from the table in a streaming manner: "all_card_text" */
  all_card_text_stream: Array<All_Card_Text>;
  /** fetch data from the table: "all_card_updated" */
  all_card_updated: Array<All_Card_Updated>;
  /** fetch aggregated fields from the table: "all_card_updated" */
  all_card_updated_aggregate: All_Card_Updated_Aggregate;
  /** fetch data from the table: "all_card_updated" using primary key columns */
  all_card_updated_by_pk?: Maybe<All_Card_Updated>;
  /** fetch data from the table in a streaming manner: "all_card_updated" */
  all_card_updated_stream: Array<All_Card_Updated>;
  /** An array relationship */
  base_decks: Array<Base_Decks>;
  /** An aggregate relationship */
  base_decks_aggregate: Base_Decks_Aggregate;
  /** fetch data from the table in a streaming manner: "base_decks" */
  base_decks_stream: Array<Base_Decks>;
  /** fetch data from the table: "campaign" */
  campaign: Array<Campaign>;
  /** fetch data from the table: "campaign_access" */
  campaign_access: Array<Campaign_Access>;
  /** fetch aggregated fields from the table: "campaign_access" */
  campaign_access_aggregate: Campaign_Access_Aggregate;
  /** fetch data from the table: "campaign_access" using primary key columns */
  campaign_access_by_pk?: Maybe<Campaign_Access>;
  /** fetch data from the table in a streaming manner: "campaign_access" */
  campaign_access_stream: Array<Campaign_Access>;
  /** fetch aggregated fields from the table: "campaign" */
  campaign_aggregate: Campaign_Aggregate;
  /** fetch data from the table: "campaign" using primary key columns */
  campaign_by_pk?: Maybe<Campaign>;
  /** fetch data from the table: "campaign_deck" */
  campaign_deck: Array<Campaign_Deck>;
  /** fetch aggregated fields from the table: "campaign_deck" */
  campaign_deck_aggregate: Campaign_Deck_Aggregate;
  /** fetch data from the table: "campaign_deck" using primary key columns */
  campaign_deck_by_pk?: Maybe<Campaign_Deck>;
  /** fetch data from the table in a streaming manner: "campaign_deck" */
  campaign_deck_stream: Array<Campaign_Deck>;
  /** fetch data from the table: "campaign_difficulty" */
  campaign_difficulty: Array<Campaign_Difficulty>;
  /** fetch aggregated fields from the table: "campaign_difficulty" */
  campaign_difficulty_aggregate: Campaign_Difficulty_Aggregate;
  /** fetch data from the table: "campaign_difficulty" using primary key columns */
  campaign_difficulty_by_pk?: Maybe<Campaign_Difficulty>;
  /** fetch data from the table in a streaming manner: "campaign_difficulty" */
  campaign_difficulty_stream: Array<Campaign_Difficulty>;
  /** fetch data from the table: "campaign_guide" */
  campaign_guide: Array<Campaign_Guide>;
  /** fetch aggregated fields from the table: "campaign_guide" */
  campaign_guide_aggregate: Campaign_Guide_Aggregate;
  /** fetch data from the table in a streaming manner: "campaign_guide" */
  campaign_guide_stream: Array<Campaign_Guide>;
  /** fetch data from the table: "campaign_investigator" */
  campaign_investigator: Array<Campaign_Investigator>;
  /** fetch aggregated fields from the table: "campaign_investigator" */
  campaign_investigator_aggregate: Campaign_Investigator_Aggregate;
  /** fetch data from the table: "campaign_investigator" using primary key columns */
  campaign_investigator_by_pk?: Maybe<Campaign_Investigator>;
  /** fetch data from the table in a streaming manner: "campaign_investigator" */
  campaign_investigator_stream: Array<Campaign_Investigator>;
  /** fetch data from the table in a streaming manner: "campaign" */
  campaign_stream: Array<Campaign>;
  /** fetch data from the table: "campaigns_by_cycle" */
  campaigns_by_cycle: Array<Campaigns_By_Cycle>;
  /** fetch aggregated fields from the table: "campaigns_by_cycle" */
  campaigns_by_cycle_aggregate: Campaigns_By_Cycle_Aggregate;
  /** fetch data from the table in a streaming manner: "campaigns_by_cycle" */
  campaigns_by_cycle_stream: Array<Campaigns_By_Cycle>;
  /** fetch data from the table: "card" */
  card: Array<Card>;
  /** fetch aggregated fields from the table: "card" */
  card_aggregate: Card_Aggregate;
  /** fetch data from the table: "card" using primary key columns */
  card_by_pk?: Maybe<Card>;
  /** fetch data from the table: "card_cycle" */
  card_cycle: Array<Card_Cycle>;
  /** fetch aggregated fields from the table: "card_cycle" */
  card_cycle_aggregate: Card_Cycle_Aggregate;
  /** fetch data from the table: "card_cycle" using primary key columns */
  card_cycle_by_pk?: Maybe<Card_Cycle>;
  /** fetch data from the table in a streaming manner: "card_cycle" */
  card_cycle_stream: Array<Card_Cycle>;
  /** fetch data from the table: "card_encounter_set" */
  card_encounter_set: Array<Card_Encounter_Set>;
  /** fetch aggregated fields from the table: "card_encounter_set" */
  card_encounter_set_aggregate: Card_Encounter_Set_Aggregate;
  /** fetch data from the table: "card_encounter_set" using primary key columns */
  card_encounter_set_by_pk?: Maybe<Card_Encounter_Set>;
  /** fetch data from the table in a streaming manner: "card_encounter_set" */
  card_encounter_set_stream: Array<Card_Encounter_Set>;
  /** fetch data from the table: "card_pack" */
  card_pack: Array<Card_Pack>;
  /** fetch aggregated fields from the table: "card_pack" */
  card_pack_aggregate: Card_Pack_Aggregate;
  /** fetch data from the table: "card_pack" using primary key columns */
  card_pack_by_pk?: Maybe<Card_Pack>;
  /** fetch data from the table in a streaming manner: "card_pack" */
  card_pack_stream: Array<Card_Pack>;
  /** fetch data from the table in a streaming manner: "card" */
  card_stream: Array<Card>;
  /** fetch data from the table: "card_subtype_name" */
  card_subtype_name: Array<Card_Subtype_Name>;
  /** fetch aggregated fields from the table: "card_subtype_name" */
  card_subtype_name_aggregate: Card_Subtype_Name_Aggregate;
  /** fetch data from the table: "card_subtype_name" using primary key columns */
  card_subtype_name_by_pk?: Maybe<Card_Subtype_Name>;
  /** fetch data from the table in a streaming manner: "card_subtype_name" */
  card_subtype_name_stream: Array<Card_Subtype_Name>;
  /** fetch data from the table: "card_text" */
  card_text: Array<Card_Text>;
  /** fetch aggregated fields from the table: "card_text" */
  card_text_aggregate: Card_Text_Aggregate;
  /** fetch data from the table: "card_text" using primary key columns */
  card_text_by_pk?: Maybe<Card_Text>;
  /** fetch data from the table in a streaming manner: "card_text" */
  card_text_stream: Array<Card_Text>;
  /** fetch data from the table: "card_type_code" */
  card_type_code: Array<Card_Type_Code>;
  /** fetch aggregated fields from the table: "card_type_code" */
  card_type_code_aggregate: Card_Type_Code_Aggregate;
  /** fetch data from the table: "card_type_code" using primary key columns */
  card_type_code_by_pk?: Maybe<Card_Type_Code>;
  /** fetch data from the table in a streaming manner: "card_type_code" */
  card_type_code_stream: Array<Card_Type_Code>;
  /** fetch data from the table: "card_type_name" */
  card_type_name: Array<Card_Type_Name>;
  /** fetch aggregated fields from the table: "card_type_name" */
  card_type_name_aggregate: Card_Type_Name_Aggregate;
  /** fetch data from the table: "card_type_name" using primary key columns */
  card_type_name_by_pk?: Maybe<Card_Type_Name>;
  /** fetch data from the table in a streaming manner: "card_type_name" */
  card_type_name_stream: Array<Card_Type_Name>;
  /** An array relationship */
  chaos_bag_result: Array<Chaos_Bag_Result>;
  /** An aggregate relationship */
  chaos_bag_result_aggregate: Chaos_Bag_Result_Aggregate;
  /** fetch data from the table: "chaos_bag_result" using primary key columns */
  chaos_bag_result_by_pk?: Maybe<Chaos_Bag_Result>;
  /** fetch data from the table in a streaming manner: "chaos_bag_result" */
  chaos_bag_result_stream: Array<Chaos_Bag_Result>;
  /** fetch data from the table: "chaos_bag_tarot_mode" */
  chaos_bag_tarot_mode: Array<Chaos_Bag_Tarot_Mode>;
  /** fetch aggregated fields from the table: "chaos_bag_tarot_mode" */
  chaos_bag_tarot_mode_aggregate: Chaos_Bag_Tarot_Mode_Aggregate;
  /** fetch data from the table: "chaos_bag_tarot_mode" using primary key columns */
  chaos_bag_tarot_mode_by_pk?: Maybe<Chaos_Bag_Tarot_Mode>;
  /** fetch data from the table in a streaming manner: "chaos_bag_tarot_mode" */
  chaos_bag_tarot_mode_stream: Array<Chaos_Bag_Tarot_Mode>;
  /** fetch data from the table: "cycle" */
  cycle: Array<Cycle>;
  /** fetch aggregated fields from the table: "cycle" */
  cycle_aggregate: Cycle_Aggregate;
  /** fetch data from the table: "cycle" using primary key columns */
  cycle_by_pk?: Maybe<Cycle>;
  /** fetch data from the table: "cycle_name" */
  cycle_name: Array<Cycle_Name>;
  /** fetch aggregated fields from the table: "cycle_name" */
  cycle_name_aggregate: Cycle_Name_Aggregate;
  /** fetch data from the table: "cycle_name" using primary key columns */
  cycle_name_by_pk?: Maybe<Cycle_Name>;
  /** fetch data from the table in a streaming manner: "cycle_name" */
  cycle_name_stream: Array<Cycle_Name>;
  /** fetch data from the table in a streaming manner: "cycle" */
  cycle_stream: Array<Cycle>;
  /** fetch data from the table: "faction_name" */
  faction_name: Array<Faction_Name>;
  /** fetch aggregated fields from the table: "faction_name" */
  faction_name_aggregate: Faction_Name_Aggregate;
  /** fetch data from the table: "faction_name" using primary key columns */
  faction_name_by_pk?: Maybe<Faction_Name>;
  /** fetch data from the table in a streaming manner: "faction_name" */
  faction_name_stream: Array<Faction_Name>;
  /** fetch data from the table: "faq" */
  faq: Array<Faq>;
  /** fetch aggregated fields from the table: "faq" */
  faq_aggregate: Faq_Aggregate;
  /** fetch data from the table: "faq" using primary key columns */
  faq_by_pk?: Maybe<Faq>;
  /** fetch data from the table in a streaming manner: "faq" */
  faq_stream: Array<Faq>;
  /** fetch data from the table: "faq_text" */
  faq_text: Array<Faq_Text>;
  /** fetch aggregated fields from the table: "faq_text" */
  faq_text_aggregate: Faq_Text_Aggregate;
  /** fetch data from the table: "faq_text" using primary key columns */
  faq_text_by_pk?: Maybe<Faq_Text>;
  /** fetch data from the table in a streaming manner: "faq_text" */
  faq_text_stream: Array<Faq_Text>;
  /** fetch data from the table: "friend_status" */
  friend_status: Array<Friend_Status>;
  /** fetch aggregated fields from the table: "friend_status" */
  friend_status_aggregate: Friend_Status_Aggregate;
  /** fetch data from the table: "friend_status" using primary key columns */
  friend_status_by_pk?: Maybe<Friend_Status>;
  /** fetch data from the table in a streaming manner: "friend_status" */
  friend_status_stream: Array<Friend_Status>;
  /** fetch data from the table: "friend_status_type" */
  friend_status_type: Array<Friend_Status_Type>;
  /** fetch aggregated fields from the table: "friend_status_type" */
  friend_status_type_aggregate: Friend_Status_Type_Aggregate;
  /** fetch data from the table: "friend_status_type" using primary key columns */
  friend_status_type_by_pk?: Maybe<Friend_Status_Type>;
  /** fetch data from the table in a streaming manner: "friend_status_type" */
  friend_status_type_stream: Array<Friend_Status_Type>;
  /** fetch data from the table: "full_card" */
  full_card: Array<Full_Card>;
  /** fetch aggregated fields from the table: "full_card" */
  full_card_aggregate: Full_Card_Aggregate;
  /** fetch data from the table: "full_card" using primary key columns */
  full_card_by_pk?: Maybe<Full_Card>;
  /** fetch data from the table in a streaming manner: "full_card" */
  full_card_stream: Array<Full_Card>;
  /** fetch data from the table: "full_card_text" */
  full_card_text: Array<Full_Card_Text>;
  /** fetch aggregated fields from the table: "full_card_text" */
  full_card_text_aggregate: Full_Card_Text_Aggregate;
  /** fetch data from the table: "full_card_text" using primary key columns */
  full_card_text_by_pk?: Maybe<Full_Card_Text>;
  /** fetch data from the table in a streaming manner: "full_card_text" */
  full_card_text_stream: Array<Full_Card_Text>;
  /** fetch data from the table: "gender" */
  gender: Array<Gender>;
  /** fetch aggregated fields from the table: "gender" */
  gender_aggregate: Gender_Aggregate;
  /** fetch data from the table: "gender" using primary key columns */
  gender_by_pk?: Maybe<Gender>;
  /** fetch data from the table in a streaming manner: "gender" */
  gender_stream: Array<Gender>;
  /** fetch data from the table: "guide_achievement" */
  guide_achievement: Array<Guide_Achievement>;
  /** fetch aggregated fields from the table: "guide_achievement" */
  guide_achievement_aggregate: Guide_Achievement_Aggregate;
  /** fetch data from the table: "guide_achievement" using primary key columns */
  guide_achievement_by_pk?: Maybe<Guide_Achievement>;
  /** fetch data from the table in a streaming manner: "guide_achievement" */
  guide_achievement_stream: Array<Guide_Achievement>;
  /** fetch data from the table: "guide_input" */
  guide_input: Array<Guide_Input>;
  /** fetch aggregated fields from the table: "guide_input" */
  guide_input_aggregate: Guide_Input_Aggregate;
  /** fetch data from the table: "guide_input" using primary key columns */
  guide_input_by_pk?: Maybe<Guide_Input>;
  /** fetch data from the table in a streaming manner: "guide_input" */
  guide_input_stream: Array<Guide_Input>;
  /** An array relationship */
  investigator_data: Array<Investigator_Data>;
  /** An aggregate relationship */
  investigator_data_aggregate: Investigator_Data_Aggregate;
  /** fetch data from the table: "investigator_data" using primary key columns */
  investigator_data_by_pk?: Maybe<Investigator_Data>;
  /** fetch data from the table in a streaming manner: "investigator_data" */
  investigator_data_stream: Array<Investigator_Data>;
  /** An array relationship */
  latest_decks: Array<Latest_Decks>;
  /** An aggregate relationship */
  latest_decks_aggregate: Latest_Decks_Aggregate;
  /** fetch data from the table in a streaming manner: "latest_decks" */
  latest_decks_stream: Array<Latest_Decks>;
  /** An array relationship */
  local_decks: Array<Local_Decks>;
  /** An aggregate relationship */
  local_decks_aggregate: Local_Decks_Aggregate;
  /** fetch data from the table in a streaming manner: "local_decks" */
  local_decks_stream: Array<Local_Decks>;
  /** fetch data from the table: "pack" */
  pack: Array<Pack>;
  /** fetch aggregated fields from the table: "pack" */
  pack_aggregate: Pack_Aggregate;
  /** fetch data from the table: "pack" using primary key columns */
  pack_by_pk?: Maybe<Pack>;
  /** fetch data from the table: "pack_name" */
  pack_name: Array<Pack_Name>;
  /** fetch aggregated fields from the table: "pack_name" */
  pack_name_aggregate: Pack_Name_Aggregate;
  /** fetch data from the table: "pack_name" using primary key columns */
  pack_name_by_pk?: Maybe<Pack_Name>;
  /** fetch data from the table in a streaming manner: "pack_name" */
  pack_name_stream: Array<Pack_Name>;
  /** fetch data from the table in a streaming manner: "pack" */
  pack_stream: Array<Pack>;
  /** fetch data from the table: "rangers.aspect" */
  rangers_aspect: Array<Rangers_Aspect>;
  /** fetch aggregated fields from the table: "rangers.aspect" */
  rangers_aspect_aggregate: Rangers_Aspect_Aggregate;
  /** fetch data from the table: "rangers.aspect" using primary key columns */
  rangers_aspect_by_pk?: Maybe<Rangers_Aspect>;
  /** fetch data from the table: "rangers.aspect_localized" */
  rangers_aspect_localized: Array<Rangers_Aspect_Localized>;
  /** fetch aggregated fields from the table: "rangers.aspect_localized" */
  rangers_aspect_localized_aggregate: Rangers_Aspect_Localized_Aggregate;
  /** fetch data from the table in a streaming manner: "rangers.aspect_localized" */
  rangers_aspect_localized_stream: Array<Rangers_Aspect_Localized>;
  /** fetch data from the table in a streaming manner: "rangers.aspect" */
  rangers_aspect_stream: Array<Rangers_Aspect>;
  /** fetch data from the table: "rangers.aspect_text" */
  rangers_aspect_text: Array<Rangers_Aspect_Text>;
  /** fetch aggregated fields from the table: "rangers.aspect_text" */
  rangers_aspect_text_aggregate: Rangers_Aspect_Text_Aggregate;
  /** fetch data from the table: "rangers.aspect_text" using primary key columns */
  rangers_aspect_text_by_pk?: Maybe<Rangers_Aspect_Text>;
  /** fetch data from the table in a streaming manner: "rangers.aspect_text" */
  rangers_aspect_text_stream: Array<Rangers_Aspect_Text>;
  /** fetch data from the table: "rangers.card" */
  rangers_card: Array<Rangers_Card>;
  /** fetch aggregated fields from the table: "rangers.card" */
  rangers_card_aggregate: Rangers_Card_Aggregate;
  /** fetch data from the table: "rangers.card" using primary key columns */
  rangers_card_by_pk?: Maybe<Rangers_Card>;
  /** fetch data from the table: "rangers.card_localized" */
  rangers_card_localized: Array<Rangers_Card_Localized>;
  /** fetch aggregated fields from the table: "rangers.card_localized" */
  rangers_card_localized_aggregate: Rangers_Card_Localized_Aggregate;
  /** fetch data from the table in a streaming manner: "rangers.card_localized" */
  rangers_card_localized_stream: Array<Rangers_Card_Localized>;
  /** fetch data from the table in a streaming manner: "rangers.card" */
  rangers_card_stream: Array<Rangers_Card>;
  /** fetch data from the table: "rangers.card_text" */
  rangers_card_text: Array<Rangers_Card_Text>;
  /** fetch aggregated fields from the table: "rangers.card_text" */
  rangers_card_text_aggregate: Rangers_Card_Text_Aggregate;
  /** fetch data from the table: "rangers.card_text" using primary key columns */
  rangers_card_text_by_pk?: Maybe<Rangers_Card_Text>;
  /** fetch data from the table in a streaming manner: "rangers.card_text" */
  rangers_card_text_stream: Array<Rangers_Card_Text>;
  /** fetch data from the table: "rangers.locale" */
  rangers_locale: Array<Rangers_Locale>;
  /** fetch aggregated fields from the table: "rangers.locale" */
  rangers_locale_aggregate: Rangers_Locale_Aggregate;
  /** fetch data from the table: "rangers.locale" using primary key columns */
  rangers_locale_by_pk?: Maybe<Rangers_Locale>;
  /** fetch data from the table in a streaming manner: "rangers.locale" */
  rangers_locale_stream: Array<Rangers_Locale>;
  /** fetch data from the table: "rangers.pack" */
  rangers_pack: Array<Rangers_Pack>;
  /** fetch aggregated fields from the table: "rangers.pack" */
  rangers_pack_aggregate: Rangers_Pack_Aggregate;
  /** fetch data from the table: "rangers.pack" using primary key columns */
  rangers_pack_by_pk?: Maybe<Rangers_Pack>;
  /** fetch data from the table in a streaming manner: "rangers.pack" */
  rangers_pack_stream: Array<Rangers_Pack>;
  /** fetch data from the table: "rangers.pack_text" */
  rangers_pack_text: Array<Rangers_Pack_Text>;
  /** fetch aggregated fields from the table: "rangers.pack_text" */
  rangers_pack_text_aggregate: Rangers_Pack_Text_Aggregate;
  /** fetch data from the table: "rangers.pack_text" using primary key columns */
  rangers_pack_text_by_pk?: Maybe<Rangers_Pack_Text>;
  /** fetch data from the table in a streaming manner: "rangers.pack_text" */
  rangers_pack_text_stream: Array<Rangers_Pack_Text>;
  /** fetch data from the table: "rangers.set" */
  rangers_set: Array<Rangers_Set>;
  /** fetch aggregated fields from the table: "rangers.set" */
  rangers_set_aggregate: Rangers_Set_Aggregate;
  /** fetch data from the table: "rangers.set" using primary key columns */
  rangers_set_by_pk?: Maybe<Rangers_Set>;
  /** fetch data from the table in a streaming manner: "rangers.set" */
  rangers_set_stream: Array<Rangers_Set>;
  /** fetch data from the table: "rangers.set_text" */
  rangers_set_text: Array<Rangers_Set_Text>;
  /** fetch aggregated fields from the table: "rangers.set_text" */
  rangers_set_text_aggregate: Rangers_Set_Text_Aggregate;
  /** fetch data from the table: "rangers.set_text" using primary key columns */
  rangers_set_text_by_pk?: Maybe<Rangers_Set_Text>;
  /** fetch data from the table in a streaming manner: "rangers.set_text" */
  rangers_set_text_stream: Array<Rangers_Set_Text>;
  /** fetch data from the table: "rangers.set_type" */
  rangers_set_type: Array<Rangers_Set_Type>;
  /** fetch aggregated fields from the table: "rangers.set_type" */
  rangers_set_type_aggregate: Rangers_Set_Type_Aggregate;
  /** fetch data from the table: "rangers.set_type" using primary key columns */
  rangers_set_type_by_pk?: Maybe<Rangers_Set_Type>;
  /** fetch data from the table in a streaming manner: "rangers.set_type" */
  rangers_set_type_stream: Array<Rangers_Set_Type>;
  /** fetch data from the table: "rangers.set_type_text" */
  rangers_set_type_text: Array<Rangers_Set_Type_Text>;
  /** fetch aggregated fields from the table: "rangers.set_type_text" */
  rangers_set_type_text_aggregate: Rangers_Set_Type_Text_Aggregate;
  /** fetch data from the table: "rangers.set_type_text" using primary key columns */
  rangers_set_type_text_by_pk?: Maybe<Rangers_Set_Type_Text>;
  /** fetch data from the table in a streaming manner: "rangers.set_type_text" */
  rangers_set_type_text_stream: Array<Rangers_Set_Type_Text>;
  /** fetch data from the table: "rangers.token" */
  rangers_token: Array<Rangers_Token>;
  /** fetch aggregated fields from the table: "rangers.token" */
  rangers_token_aggregate: Rangers_Token_Aggregate;
  /** fetch data from the table: "rangers.token" using primary key columns */
  rangers_token_by_pk?: Maybe<Rangers_Token>;
  /** fetch data from the table in a streaming manner: "rangers.token" */
  rangers_token_stream: Array<Rangers_Token>;
  /** fetch data from the table: "rangers.token_text" */
  rangers_token_text: Array<Rangers_Token_Text>;
  /** fetch aggregated fields from the table: "rangers.token_text" */
  rangers_token_text_aggregate: Rangers_Token_Text_Aggregate;
  /** fetch data from the table: "rangers.token_text" using primary key columns */
  rangers_token_text_by_pk?: Maybe<Rangers_Token_Text>;
  /** fetch data from the table in a streaming manner: "rangers.token_text" */
  rangers_token_text_stream: Array<Rangers_Token_Text>;
  /** fetch data from the table: "rangers.type" */
  rangers_type: Array<Rangers_Type>;
  /** fetch aggregated fields from the table: "rangers.type" */
  rangers_type_aggregate: Rangers_Type_Aggregate;
  /** fetch data from the table: "rangers.type" using primary key columns */
  rangers_type_by_pk?: Maybe<Rangers_Type>;
  /** fetch data from the table in a streaming manner: "rangers.type" */
  rangers_type_stream: Array<Rangers_Type>;
  /** fetch data from the table: "rangers.type_text" */
  rangers_type_text: Array<Rangers_Type_Text>;
  /** fetch aggregated fields from the table: "rangers.type_text" */
  rangers_type_text_aggregate: Rangers_Type_Text_Aggregate;
  /** fetch data from the table: "rangers.type_text" using primary key columns */
  rangers_type_text_by_pk?: Maybe<Rangers_Type_Text>;
  /** fetch data from the table in a streaming manner: "rangers.type_text" */
  rangers_type_text_stream: Array<Rangers_Type_Text>;
  /** fetch data from the table: "taboo_set" */
  taboo_set: Array<Taboo_Set>;
  /** fetch aggregated fields from the table: "taboo_set" */
  taboo_set_aggregate: Taboo_Set_Aggregate;
  /** fetch data from the table: "taboo_set" using primary key columns */
  taboo_set_by_pk?: Maybe<Taboo_Set>;
  /** fetch data from the table in a streaming manner: "taboo_set" */
  taboo_set_stream: Array<Taboo_Set>;
  /** fetch data from the table: "user_campaigns" */
  user_campaigns: Array<User_Campaigns>;
  /** fetch aggregated fields from the table: "user_campaigns" */
  user_campaigns_aggregate: User_Campaigns_Aggregate;
  /** fetch data from the table in a streaming manner: "user_campaigns" */
  user_campaigns_stream: Array<User_Campaigns>;
  /** fetch data from the table: "user_flag" */
  user_flag: Array<User_Flag>;
  /** fetch aggregated fields from the table: "user_flag" */
  user_flag_aggregate: User_Flag_Aggregate;
  /** fetch data from the table: "user_flag" using primary key columns */
  user_flag_by_pk?: Maybe<User_Flag>;
  /** fetch data from the table in a streaming manner: "user_flag" */
  user_flag_stream: Array<User_Flag>;
  /** fetch data from the table: "user_flag_type" */
  user_flag_type: Array<User_Flag_Type>;
  /** fetch aggregated fields from the table: "user_flag_type" */
  user_flag_type_aggregate: User_Flag_Type_Aggregate;
  /** fetch data from the table: "user_flag_type" using primary key columns */
  user_flag_type_by_pk?: Maybe<User_Flag_Type>;
  /** fetch data from the table in a streaming manner: "user_flag_type" */
  user_flag_type_stream: Array<User_Flag_Type>;
  /** fetch data from the table: "user_friends" */
  user_friends: Array<User_Friends>;
  /** fetch aggregated fields from the table: "user_friends" */
  user_friends_aggregate: User_Friends_Aggregate;
  /** fetch data from the table in a streaming manner: "user_friends" */
  user_friends_stream: Array<User_Friends>;
  /** fetch data from the table: "user_received_friend_requests" */
  user_received_friend_requests: Array<User_Received_Friend_Requests>;
  /** fetch aggregated fields from the table: "user_received_friend_requests" */
  user_received_friend_requests_aggregate: User_Received_Friend_Requests_Aggregate;
  /** fetch data from the table in a streaming manner: "user_received_friend_requests" */
  user_received_friend_requests_stream: Array<User_Received_Friend_Requests>;
  /** fetch data from the table: "user_sent_friend_requests" */
  user_sent_friend_requests: Array<User_Sent_Friend_Requests>;
  /** fetch aggregated fields from the table: "user_sent_friend_requests" */
  user_sent_friend_requests_aggregate: User_Sent_Friend_Requests_Aggregate;
  /** fetch data from the table in a streaming manner: "user_sent_friend_requests" */
  user_sent_friend_requests_stream: Array<User_Sent_Friend_Requests>;
  /** fetch data from the table: "user_settings" */
  user_settings: Array<User_Settings>;
  /** fetch aggregated fields from the table: "user_settings" */
  user_settings_aggregate: User_Settings_Aggregate;
  /** fetch data from the table: "user_settings" using primary key columns */
  user_settings_by_pk?: Maybe<User_Settings>;
  /** fetch data from the table in a streaming manner: "user_settings" */
  user_settings_stream: Array<User_Settings>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootAll_CardArgs = {
  distinct_on?: InputMaybe<Array<All_Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<All_Card_Order_By>>;
  where?: InputMaybe<All_Card_Bool_Exp>;
};


export type Subscription_RootAll_Card_AggregateArgs = {
  distinct_on?: InputMaybe<Array<All_Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<All_Card_Order_By>>;
  where?: InputMaybe<All_Card_Bool_Exp>;
};


export type Subscription_RootAll_Card_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAll_Card_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<All_Card_Stream_Cursor_Input>>;
  where?: InputMaybe<All_Card_Bool_Exp>;
};


export type Subscription_RootAll_Card_TextArgs = {
  distinct_on?: InputMaybe<Array<All_Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<All_Card_Text_Order_By>>;
  where?: InputMaybe<All_Card_Text_Bool_Exp>;
};


export type Subscription_RootAll_Card_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<All_Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<All_Card_Text_Order_By>>;
  where?: InputMaybe<All_Card_Text_Bool_Exp>;
};


export type Subscription_RootAll_Card_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


export type Subscription_RootAll_Card_Text_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<All_Card_Text_Stream_Cursor_Input>>;
  where?: InputMaybe<All_Card_Text_Bool_Exp>;
};


export type Subscription_RootAll_Card_UpdatedArgs = {
  distinct_on?: InputMaybe<Array<All_Card_Updated_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<All_Card_Updated_Order_By>>;
  where?: InputMaybe<All_Card_Updated_Bool_Exp>;
};


export type Subscription_RootAll_Card_Updated_AggregateArgs = {
  distinct_on?: InputMaybe<Array<All_Card_Updated_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<All_Card_Updated_Order_By>>;
  where?: InputMaybe<All_Card_Updated_Bool_Exp>;
};


export type Subscription_RootAll_Card_Updated_By_PkArgs = {
  locale: Scalars['String'];
};


export type Subscription_RootAll_Card_Updated_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<All_Card_Updated_Stream_Cursor_Input>>;
  where?: InputMaybe<All_Card_Updated_Bool_Exp>;
};


export type Subscription_RootBase_DecksArgs = {
  distinct_on?: InputMaybe<Array<Base_Decks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Base_Decks_Order_By>>;
  where?: InputMaybe<Base_Decks_Bool_Exp>;
};


export type Subscription_RootBase_Decks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Base_Decks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Base_Decks_Order_By>>;
  where?: InputMaybe<Base_Decks_Bool_Exp>;
};


export type Subscription_RootBase_Decks_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Base_Decks_Stream_Cursor_Input>>;
  where?: InputMaybe<Base_Decks_Bool_Exp>;
};


export type Subscription_RootCampaignArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


export type Subscription_RootCampaign_AccessArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Access_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Access_Order_By>>;
  where?: InputMaybe<Campaign_Access_Bool_Exp>;
};


export type Subscription_RootCampaign_Access_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Access_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Access_Order_By>>;
  where?: InputMaybe<Campaign_Access_Bool_Exp>;
};


export type Subscription_RootCampaign_Access_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCampaign_Access_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Campaign_Access_Stream_Cursor_Input>>;
  where?: InputMaybe<Campaign_Access_Bool_Exp>;
};


export type Subscription_RootCampaign_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


export type Subscription_RootCampaign_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCampaign_DeckArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Deck_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Deck_Order_By>>;
  where?: InputMaybe<Campaign_Deck_Bool_Exp>;
};


export type Subscription_RootCampaign_Deck_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Deck_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Deck_Order_By>>;
  where?: InputMaybe<Campaign_Deck_Bool_Exp>;
};


export type Subscription_RootCampaign_Deck_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCampaign_Deck_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Campaign_Deck_Stream_Cursor_Input>>;
  where?: InputMaybe<Campaign_Deck_Bool_Exp>;
};


export type Subscription_RootCampaign_DifficultyArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Difficulty_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Difficulty_Order_By>>;
  where?: InputMaybe<Campaign_Difficulty_Bool_Exp>;
};


export type Subscription_RootCampaign_Difficulty_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Difficulty_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Difficulty_Order_By>>;
  where?: InputMaybe<Campaign_Difficulty_Bool_Exp>;
};


export type Subscription_RootCampaign_Difficulty_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootCampaign_Difficulty_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Campaign_Difficulty_Stream_Cursor_Input>>;
  where?: InputMaybe<Campaign_Difficulty_Bool_Exp>;
};


export type Subscription_RootCampaign_GuideArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Guide_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Guide_Order_By>>;
  where?: InputMaybe<Campaign_Guide_Bool_Exp>;
};


export type Subscription_RootCampaign_Guide_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Guide_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Guide_Order_By>>;
  where?: InputMaybe<Campaign_Guide_Bool_Exp>;
};


export type Subscription_RootCampaign_Guide_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Campaign_Guide_Stream_Cursor_Input>>;
  where?: InputMaybe<Campaign_Guide_Bool_Exp>;
};


export type Subscription_RootCampaign_InvestigatorArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Investigator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Investigator_Order_By>>;
  where?: InputMaybe<Campaign_Investigator_Bool_Exp>;
};


export type Subscription_RootCampaign_Investigator_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Investigator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Investigator_Order_By>>;
  where?: InputMaybe<Campaign_Investigator_Bool_Exp>;
};


export type Subscription_RootCampaign_Investigator_By_PkArgs = {
  campaign_id: Scalars['Int'];
  investigator: Scalars['String'];
};


export type Subscription_RootCampaign_Investigator_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Campaign_Investigator_Stream_Cursor_Input>>;
  where?: InputMaybe<Campaign_Investigator_Bool_Exp>;
};


export type Subscription_RootCampaign_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Campaign_Stream_Cursor_Input>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


export type Subscription_RootCampaigns_By_CycleArgs = {
  distinct_on?: InputMaybe<Array<Campaigns_By_Cycle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaigns_By_Cycle_Order_By>>;
  where?: InputMaybe<Campaigns_By_Cycle_Bool_Exp>;
};


export type Subscription_RootCampaigns_By_Cycle_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaigns_By_Cycle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaigns_By_Cycle_Order_By>>;
  where?: InputMaybe<Campaigns_By_Cycle_Bool_Exp>;
};


export type Subscription_RootCampaigns_By_Cycle_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Campaigns_By_Cycle_Stream_Cursor_Input>>;
  where?: InputMaybe<Campaigns_By_Cycle_Bool_Exp>;
};


export type Subscription_RootCardArgs = {
  distinct_on?: InputMaybe<Array<Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Order_By>>;
  where?: InputMaybe<Card_Bool_Exp>;
};


export type Subscription_RootCard_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Order_By>>;
  where?: InputMaybe<Card_Bool_Exp>;
};


export type Subscription_RootCard_By_PkArgs = {
  code: Scalars['String'];
};


export type Subscription_RootCard_CycleArgs = {
  distinct_on?: InputMaybe<Array<Card_Cycle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Cycle_Order_By>>;
  where?: InputMaybe<Card_Cycle_Bool_Exp>;
};


export type Subscription_RootCard_Cycle_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Card_Cycle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Cycle_Order_By>>;
  where?: InputMaybe<Card_Cycle_Bool_Exp>;
};


export type Subscription_RootCard_Cycle_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


export type Subscription_RootCard_Cycle_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Card_Cycle_Stream_Cursor_Input>>;
  where?: InputMaybe<Card_Cycle_Bool_Exp>;
};


export type Subscription_RootCard_Encounter_SetArgs = {
  distinct_on?: InputMaybe<Array<Card_Encounter_Set_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Encounter_Set_Order_By>>;
  where?: InputMaybe<Card_Encounter_Set_Bool_Exp>;
};


export type Subscription_RootCard_Encounter_Set_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Card_Encounter_Set_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Encounter_Set_Order_By>>;
  where?: InputMaybe<Card_Encounter_Set_Bool_Exp>;
};


export type Subscription_RootCard_Encounter_Set_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


export type Subscription_RootCard_Encounter_Set_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Card_Encounter_Set_Stream_Cursor_Input>>;
  where?: InputMaybe<Card_Encounter_Set_Bool_Exp>;
};


export type Subscription_RootCard_PackArgs = {
  distinct_on?: InputMaybe<Array<Card_Pack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Pack_Order_By>>;
  where?: InputMaybe<Card_Pack_Bool_Exp>;
};


export type Subscription_RootCard_Pack_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Card_Pack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Pack_Order_By>>;
  where?: InputMaybe<Card_Pack_Bool_Exp>;
};


export type Subscription_RootCard_Pack_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


export type Subscription_RootCard_Pack_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Card_Pack_Stream_Cursor_Input>>;
  where?: InputMaybe<Card_Pack_Bool_Exp>;
};


export type Subscription_RootCard_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Card_Stream_Cursor_Input>>;
  where?: InputMaybe<Card_Bool_Exp>;
};


export type Subscription_RootCard_Subtype_NameArgs = {
  distinct_on?: InputMaybe<Array<Card_Subtype_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Subtype_Name_Order_By>>;
  where?: InputMaybe<Card_Subtype_Name_Bool_Exp>;
};


export type Subscription_RootCard_Subtype_Name_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Card_Subtype_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Subtype_Name_Order_By>>;
  where?: InputMaybe<Card_Subtype_Name_Bool_Exp>;
};


export type Subscription_RootCard_Subtype_Name_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


export type Subscription_RootCard_Subtype_Name_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Card_Subtype_Name_Stream_Cursor_Input>>;
  where?: InputMaybe<Card_Subtype_Name_Bool_Exp>;
};


export type Subscription_RootCard_TextArgs = {
  distinct_on?: InputMaybe<Array<Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Text_Order_By>>;
  where?: InputMaybe<Card_Text_Bool_Exp>;
};


export type Subscription_RootCard_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Text_Order_By>>;
  where?: InputMaybe<Card_Text_Bool_Exp>;
};


export type Subscription_RootCard_Text_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


export type Subscription_RootCard_Text_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Card_Text_Stream_Cursor_Input>>;
  where?: InputMaybe<Card_Text_Bool_Exp>;
};


export type Subscription_RootCard_Type_CodeArgs = {
  distinct_on?: InputMaybe<Array<Card_Type_Code_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Type_Code_Order_By>>;
  where?: InputMaybe<Card_Type_Code_Bool_Exp>;
};


export type Subscription_RootCard_Type_Code_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Card_Type_Code_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Type_Code_Order_By>>;
  where?: InputMaybe<Card_Type_Code_Bool_Exp>;
};


export type Subscription_RootCard_Type_Code_By_PkArgs = {
  code: Scalars['String'];
};


export type Subscription_RootCard_Type_Code_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Card_Type_Code_Stream_Cursor_Input>>;
  where?: InputMaybe<Card_Type_Code_Bool_Exp>;
};


export type Subscription_RootCard_Type_NameArgs = {
  distinct_on?: InputMaybe<Array<Card_Type_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Type_Name_Order_By>>;
  where?: InputMaybe<Card_Type_Name_Bool_Exp>;
};


export type Subscription_RootCard_Type_Name_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Card_Type_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Card_Type_Name_Order_By>>;
  where?: InputMaybe<Card_Type_Name_Bool_Exp>;
};


export type Subscription_RootCard_Type_Name_By_PkArgs = {
  code: Card_Type_Code_Enum;
  locale: Scalars['String'];
};


export type Subscription_RootCard_Type_Name_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Card_Type_Name_Stream_Cursor_Input>>;
  where?: InputMaybe<Card_Type_Name_Bool_Exp>;
};


export type Subscription_RootChaos_Bag_ResultArgs = {
  distinct_on?: InputMaybe<Array<Chaos_Bag_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chaos_Bag_Result_Order_By>>;
  where?: InputMaybe<Chaos_Bag_Result_Bool_Exp>;
};


export type Subscription_RootChaos_Bag_Result_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chaos_Bag_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chaos_Bag_Result_Order_By>>;
  where?: InputMaybe<Chaos_Bag_Result_Bool_Exp>;
};


export type Subscription_RootChaos_Bag_Result_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootChaos_Bag_Result_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Chaos_Bag_Result_Stream_Cursor_Input>>;
  where?: InputMaybe<Chaos_Bag_Result_Bool_Exp>;
};


export type Subscription_RootChaos_Bag_Tarot_ModeArgs = {
  distinct_on?: InputMaybe<Array<Chaos_Bag_Tarot_Mode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chaos_Bag_Tarot_Mode_Order_By>>;
  where?: InputMaybe<Chaos_Bag_Tarot_Mode_Bool_Exp>;
};


export type Subscription_RootChaos_Bag_Tarot_Mode_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chaos_Bag_Tarot_Mode_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chaos_Bag_Tarot_Mode_Order_By>>;
  where?: InputMaybe<Chaos_Bag_Tarot_Mode_Bool_Exp>;
};


export type Subscription_RootChaos_Bag_Tarot_Mode_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootChaos_Bag_Tarot_Mode_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Chaos_Bag_Tarot_Mode_Stream_Cursor_Input>>;
  where?: InputMaybe<Chaos_Bag_Tarot_Mode_Bool_Exp>;
};


export type Subscription_RootCycleArgs = {
  distinct_on?: InputMaybe<Array<Cycle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cycle_Order_By>>;
  where?: InputMaybe<Cycle_Bool_Exp>;
};


export type Subscription_RootCycle_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cycle_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cycle_Order_By>>;
  where?: InputMaybe<Cycle_Bool_Exp>;
};


export type Subscription_RootCycle_By_PkArgs = {
  code: Scalars['String'];
};


export type Subscription_RootCycle_NameArgs = {
  distinct_on?: InputMaybe<Array<Cycle_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cycle_Name_Order_By>>;
  where?: InputMaybe<Cycle_Name_Bool_Exp>;
};


export type Subscription_RootCycle_Name_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cycle_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cycle_Name_Order_By>>;
  where?: InputMaybe<Cycle_Name_Bool_Exp>;
};


export type Subscription_RootCycle_Name_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


export type Subscription_RootCycle_Name_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Cycle_Name_Stream_Cursor_Input>>;
  where?: InputMaybe<Cycle_Name_Bool_Exp>;
};


export type Subscription_RootCycle_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Cycle_Stream_Cursor_Input>>;
  where?: InputMaybe<Cycle_Bool_Exp>;
};


export type Subscription_RootFaction_NameArgs = {
  distinct_on?: InputMaybe<Array<Faction_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Faction_Name_Order_By>>;
  where?: InputMaybe<Faction_Name_Bool_Exp>;
};


export type Subscription_RootFaction_Name_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Faction_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Faction_Name_Order_By>>;
  where?: InputMaybe<Faction_Name_Bool_Exp>;
};


export type Subscription_RootFaction_Name_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


export type Subscription_RootFaction_Name_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Faction_Name_Stream_Cursor_Input>>;
  where?: InputMaybe<Faction_Name_Bool_Exp>;
};


export type Subscription_RootFaqArgs = {
  distinct_on?: InputMaybe<Array<Faq_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Faq_Order_By>>;
  where?: InputMaybe<Faq_Bool_Exp>;
};


export type Subscription_RootFaq_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Faq_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Faq_Order_By>>;
  where?: InputMaybe<Faq_Bool_Exp>;
};


export type Subscription_RootFaq_By_PkArgs = {
  code: Scalars['String'];
};


export type Subscription_RootFaq_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Faq_Stream_Cursor_Input>>;
  where?: InputMaybe<Faq_Bool_Exp>;
};


export type Subscription_RootFaq_TextArgs = {
  distinct_on?: InputMaybe<Array<Faq_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Faq_Text_Order_By>>;
  where?: InputMaybe<Faq_Text_Bool_Exp>;
};


export type Subscription_RootFaq_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Faq_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Faq_Text_Order_By>>;
  where?: InputMaybe<Faq_Text_Bool_Exp>;
};


export type Subscription_RootFaq_Text_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


export type Subscription_RootFaq_Text_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Faq_Text_Stream_Cursor_Input>>;
  where?: InputMaybe<Faq_Text_Bool_Exp>;
};


export type Subscription_RootFriend_StatusArgs = {
  distinct_on?: InputMaybe<Array<Friend_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Friend_Status_Order_By>>;
  where?: InputMaybe<Friend_Status_Bool_Exp>;
};


export type Subscription_RootFriend_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Friend_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Friend_Status_Order_By>>;
  where?: InputMaybe<Friend_Status_Bool_Exp>;
};


export type Subscription_RootFriend_Status_By_PkArgs = {
  user_id_a: Scalars['String'];
  user_id_b: Scalars['String'];
};


export type Subscription_RootFriend_Status_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Friend_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Friend_Status_Bool_Exp>;
};


export type Subscription_RootFriend_Status_TypeArgs = {
  distinct_on?: InputMaybe<Array<Friend_Status_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Friend_Status_Type_Order_By>>;
  where?: InputMaybe<Friend_Status_Type_Bool_Exp>;
};


export type Subscription_RootFriend_Status_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Friend_Status_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Friend_Status_Type_Order_By>>;
  where?: InputMaybe<Friend_Status_Type_Bool_Exp>;
};


export type Subscription_RootFriend_Status_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootFriend_Status_Type_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Friend_Status_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Friend_Status_Type_Bool_Exp>;
};


export type Subscription_RootFull_CardArgs = {
  distinct_on?: InputMaybe<Array<Full_Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Card_Order_By>>;
  where?: InputMaybe<Full_Card_Bool_Exp>;
};


export type Subscription_RootFull_Card_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Full_Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Card_Order_By>>;
  where?: InputMaybe<Full_Card_Bool_Exp>;
};


export type Subscription_RootFull_Card_By_PkArgs = {
  code: Scalars['String'];
};


export type Subscription_RootFull_Card_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Full_Card_Stream_Cursor_Input>>;
  where?: InputMaybe<Full_Card_Bool_Exp>;
};


export type Subscription_RootFull_Card_TextArgs = {
  distinct_on?: InputMaybe<Array<Full_Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Card_Text_Order_By>>;
  where?: InputMaybe<Full_Card_Text_Bool_Exp>;
};


export type Subscription_RootFull_Card_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Full_Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Full_Card_Text_Order_By>>;
  where?: InputMaybe<Full_Card_Text_Bool_Exp>;
};


export type Subscription_RootFull_Card_Text_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


export type Subscription_RootFull_Card_Text_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Full_Card_Text_Stream_Cursor_Input>>;
  where?: InputMaybe<Full_Card_Text_Bool_Exp>;
};


export type Subscription_RootGenderArgs = {
  distinct_on?: InputMaybe<Array<Gender_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gender_Order_By>>;
  where?: InputMaybe<Gender_Bool_Exp>;
};


export type Subscription_RootGender_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gender_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gender_Order_By>>;
  where?: InputMaybe<Gender_Bool_Exp>;
};


export type Subscription_RootGender_By_PkArgs = {
  code: Scalars['String'];
};


export type Subscription_RootGender_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Gender_Stream_Cursor_Input>>;
  where?: InputMaybe<Gender_Bool_Exp>;
};


export type Subscription_RootGuide_AchievementArgs = {
  distinct_on?: InputMaybe<Array<Guide_Achievement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Guide_Achievement_Order_By>>;
  where?: InputMaybe<Guide_Achievement_Bool_Exp>;
};


export type Subscription_RootGuide_Achievement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Guide_Achievement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Guide_Achievement_Order_By>>;
  where?: InputMaybe<Guide_Achievement_Bool_Exp>;
};


export type Subscription_RootGuide_Achievement_By_PkArgs = {
  campaign_id: Scalars['Int'];
  id: Scalars['String'];
};


export type Subscription_RootGuide_Achievement_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Guide_Achievement_Stream_Cursor_Input>>;
  where?: InputMaybe<Guide_Achievement_Bool_Exp>;
};


export type Subscription_RootGuide_InputArgs = {
  distinct_on?: InputMaybe<Array<Guide_Input_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Guide_Input_Order_By>>;
  where?: InputMaybe<Guide_Input_Bool_Exp>;
};


export type Subscription_RootGuide_Input_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Guide_Input_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Guide_Input_Order_By>>;
  where?: InputMaybe<Guide_Input_Bool_Exp>;
};


export type Subscription_RootGuide_Input_By_PkArgs = {
  campaign_id: Scalars['Int'];
  id: Scalars['String'];
};


export type Subscription_RootGuide_Input_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Guide_Input_Stream_Cursor_Input>>;
  where?: InputMaybe<Guide_Input_Bool_Exp>;
};


export type Subscription_RootInvestigator_DataArgs = {
  distinct_on?: InputMaybe<Array<Investigator_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investigator_Data_Order_By>>;
  where?: InputMaybe<Investigator_Data_Bool_Exp>;
};


export type Subscription_RootInvestigator_Data_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Investigator_Data_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investigator_Data_Order_By>>;
  where?: InputMaybe<Investigator_Data_Bool_Exp>;
};


export type Subscription_RootInvestigator_Data_By_PkArgs = {
  campaign_id: Scalars['Int'];
  investigator: Scalars['String'];
};


export type Subscription_RootInvestigator_Data_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Investigator_Data_Stream_Cursor_Input>>;
  where?: InputMaybe<Investigator_Data_Bool_Exp>;
};


export type Subscription_RootLatest_DecksArgs = {
  distinct_on?: InputMaybe<Array<Latest_Decks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Latest_Decks_Order_By>>;
  where?: InputMaybe<Latest_Decks_Bool_Exp>;
};


export type Subscription_RootLatest_Decks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Latest_Decks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Latest_Decks_Order_By>>;
  where?: InputMaybe<Latest_Decks_Bool_Exp>;
};


export type Subscription_RootLatest_Decks_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Latest_Decks_Stream_Cursor_Input>>;
  where?: InputMaybe<Latest_Decks_Bool_Exp>;
};


export type Subscription_RootLocal_DecksArgs = {
  distinct_on?: InputMaybe<Array<Local_Decks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Local_Decks_Order_By>>;
  where?: InputMaybe<Local_Decks_Bool_Exp>;
};


export type Subscription_RootLocal_Decks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Local_Decks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Local_Decks_Order_By>>;
  where?: InputMaybe<Local_Decks_Bool_Exp>;
};


export type Subscription_RootLocal_Decks_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Local_Decks_Stream_Cursor_Input>>;
  where?: InputMaybe<Local_Decks_Bool_Exp>;
};


export type Subscription_RootPackArgs = {
  distinct_on?: InputMaybe<Array<Pack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pack_Order_By>>;
  where?: InputMaybe<Pack_Bool_Exp>;
};


export type Subscription_RootPack_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pack_Order_By>>;
  where?: InputMaybe<Pack_Bool_Exp>;
};


export type Subscription_RootPack_By_PkArgs = {
  code: Scalars['String'];
};


export type Subscription_RootPack_NameArgs = {
  distinct_on?: InputMaybe<Array<Pack_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pack_Name_Order_By>>;
  where?: InputMaybe<Pack_Name_Bool_Exp>;
};


export type Subscription_RootPack_Name_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pack_Name_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pack_Name_Order_By>>;
  where?: InputMaybe<Pack_Name_Bool_Exp>;
};


export type Subscription_RootPack_Name_By_PkArgs = {
  code: Scalars['String'];
  locale: Scalars['String'];
};


export type Subscription_RootPack_Name_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Pack_Name_Stream_Cursor_Input>>;
  where?: InputMaybe<Pack_Name_Bool_Exp>;
};


export type Subscription_RootPack_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Pack_Stream_Cursor_Input>>;
  where?: InputMaybe<Pack_Bool_Exp>;
};


export type Subscription_RootRangers_AspectArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Aspect_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Aspect_Order_By>>;
  where?: InputMaybe<Rangers_Aspect_Bool_Exp>;
};


export type Subscription_RootRangers_Aspect_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Aspect_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Aspect_Order_By>>;
  where?: InputMaybe<Rangers_Aspect_Bool_Exp>;
};


export type Subscription_RootRangers_Aspect_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRangers_Aspect_LocalizedArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Aspect_Localized_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Aspect_Localized_Order_By>>;
  where?: InputMaybe<Rangers_Aspect_Localized_Bool_Exp>;
};


export type Subscription_RootRangers_Aspect_Localized_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Aspect_Localized_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Aspect_Localized_Order_By>>;
  where?: InputMaybe<Rangers_Aspect_Localized_Bool_Exp>;
};


export type Subscription_RootRangers_Aspect_Localized_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Rangers_Aspect_Localized_Stream_Cursor_Input>>;
  where?: InputMaybe<Rangers_Aspect_Localized_Bool_Exp>;
};


export type Subscription_RootRangers_Aspect_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Rangers_Aspect_Stream_Cursor_Input>>;
  where?: InputMaybe<Rangers_Aspect_Bool_Exp>;
};


export type Subscription_RootRangers_Aspect_TextArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Aspect_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Aspect_Text_Order_By>>;
  where?: InputMaybe<Rangers_Aspect_Text_Bool_Exp>;
};


export type Subscription_RootRangers_Aspect_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Aspect_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Aspect_Text_Order_By>>;
  where?: InputMaybe<Rangers_Aspect_Text_Bool_Exp>;
};


export type Subscription_RootRangers_Aspect_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


export type Subscription_RootRangers_Aspect_Text_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Rangers_Aspect_Text_Stream_Cursor_Input>>;
  where?: InputMaybe<Rangers_Aspect_Text_Bool_Exp>;
};


export type Subscription_RootRangers_CardArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Card_Order_By>>;
  where?: InputMaybe<Rangers_Card_Bool_Exp>;
};


export type Subscription_RootRangers_Card_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Card_Order_By>>;
  where?: InputMaybe<Rangers_Card_Bool_Exp>;
};


export type Subscription_RootRangers_Card_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRangers_Card_LocalizedArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Card_Localized_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Card_Localized_Order_By>>;
  where?: InputMaybe<Rangers_Card_Localized_Bool_Exp>;
};


export type Subscription_RootRangers_Card_Localized_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Card_Localized_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Card_Localized_Order_By>>;
  where?: InputMaybe<Rangers_Card_Localized_Bool_Exp>;
};


export type Subscription_RootRangers_Card_Localized_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Rangers_Card_Localized_Stream_Cursor_Input>>;
  where?: InputMaybe<Rangers_Card_Localized_Bool_Exp>;
};


export type Subscription_RootRangers_Card_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Rangers_Card_Stream_Cursor_Input>>;
  where?: InputMaybe<Rangers_Card_Bool_Exp>;
};


export type Subscription_RootRangers_Card_TextArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Card_Text_Order_By>>;
  where?: InputMaybe<Rangers_Card_Text_Bool_Exp>;
};


export type Subscription_RootRangers_Card_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Card_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Card_Text_Order_By>>;
  where?: InputMaybe<Rangers_Card_Text_Bool_Exp>;
};


export type Subscription_RootRangers_Card_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


export type Subscription_RootRangers_Card_Text_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Rangers_Card_Text_Stream_Cursor_Input>>;
  where?: InputMaybe<Rangers_Card_Text_Bool_Exp>;
};


export type Subscription_RootRangers_LocaleArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Locale_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Locale_Order_By>>;
  where?: InputMaybe<Rangers_Locale_Bool_Exp>;
};


export type Subscription_RootRangers_Locale_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Locale_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Locale_Order_By>>;
  where?: InputMaybe<Rangers_Locale_Bool_Exp>;
};


export type Subscription_RootRangers_Locale_By_PkArgs = {
  locale: Scalars['String'];
};


export type Subscription_RootRangers_Locale_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Rangers_Locale_Stream_Cursor_Input>>;
  where?: InputMaybe<Rangers_Locale_Bool_Exp>;
};


export type Subscription_RootRangers_PackArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Pack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Pack_Order_By>>;
  where?: InputMaybe<Rangers_Pack_Bool_Exp>;
};


export type Subscription_RootRangers_Pack_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Pack_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Pack_Order_By>>;
  where?: InputMaybe<Rangers_Pack_Bool_Exp>;
};


export type Subscription_RootRangers_Pack_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRangers_Pack_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Rangers_Pack_Stream_Cursor_Input>>;
  where?: InputMaybe<Rangers_Pack_Bool_Exp>;
};


export type Subscription_RootRangers_Pack_TextArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Pack_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Pack_Text_Order_By>>;
  where?: InputMaybe<Rangers_Pack_Text_Bool_Exp>;
};


export type Subscription_RootRangers_Pack_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Pack_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Pack_Text_Order_By>>;
  where?: InputMaybe<Rangers_Pack_Text_Bool_Exp>;
};


export type Subscription_RootRangers_Pack_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


export type Subscription_RootRangers_Pack_Text_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Rangers_Pack_Text_Stream_Cursor_Input>>;
  where?: InputMaybe<Rangers_Pack_Text_Bool_Exp>;
};


export type Subscription_RootRangers_SetArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Set_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Set_Order_By>>;
  where?: InputMaybe<Rangers_Set_Bool_Exp>;
};


export type Subscription_RootRangers_Set_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Set_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Set_Order_By>>;
  where?: InputMaybe<Rangers_Set_Bool_Exp>;
};


export type Subscription_RootRangers_Set_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRangers_Set_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Rangers_Set_Stream_Cursor_Input>>;
  where?: InputMaybe<Rangers_Set_Bool_Exp>;
};


export type Subscription_RootRangers_Set_TextArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Set_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Set_Text_Order_By>>;
  where?: InputMaybe<Rangers_Set_Text_Bool_Exp>;
};


export type Subscription_RootRangers_Set_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Set_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Set_Text_Order_By>>;
  where?: InputMaybe<Rangers_Set_Text_Bool_Exp>;
};


export type Subscription_RootRangers_Set_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


export type Subscription_RootRangers_Set_Text_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Rangers_Set_Text_Stream_Cursor_Input>>;
  where?: InputMaybe<Rangers_Set_Text_Bool_Exp>;
};


export type Subscription_RootRangers_Set_TypeArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Set_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Set_Type_Order_By>>;
  where?: InputMaybe<Rangers_Set_Type_Bool_Exp>;
};


export type Subscription_RootRangers_Set_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Set_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Set_Type_Order_By>>;
  where?: InputMaybe<Rangers_Set_Type_Bool_Exp>;
};


export type Subscription_RootRangers_Set_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRangers_Set_Type_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Rangers_Set_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Rangers_Set_Type_Bool_Exp>;
};


export type Subscription_RootRangers_Set_Type_TextArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Set_Type_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Set_Type_Text_Order_By>>;
  where?: InputMaybe<Rangers_Set_Type_Text_Bool_Exp>;
};


export type Subscription_RootRangers_Set_Type_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Set_Type_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Set_Type_Text_Order_By>>;
  where?: InputMaybe<Rangers_Set_Type_Text_Bool_Exp>;
};


export type Subscription_RootRangers_Set_Type_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


export type Subscription_RootRangers_Set_Type_Text_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Rangers_Set_Type_Text_Stream_Cursor_Input>>;
  where?: InputMaybe<Rangers_Set_Type_Text_Bool_Exp>;
};


export type Subscription_RootRangers_TokenArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Token_Order_By>>;
  where?: InputMaybe<Rangers_Token_Bool_Exp>;
};


export type Subscription_RootRangers_Token_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Token_Order_By>>;
  where?: InputMaybe<Rangers_Token_Bool_Exp>;
};


export type Subscription_RootRangers_Token_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRangers_Token_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Rangers_Token_Stream_Cursor_Input>>;
  where?: InputMaybe<Rangers_Token_Bool_Exp>;
};


export type Subscription_RootRangers_Token_TextArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Token_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Token_Text_Order_By>>;
  where?: InputMaybe<Rangers_Token_Text_Bool_Exp>;
};


export type Subscription_RootRangers_Token_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Token_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Token_Text_Order_By>>;
  where?: InputMaybe<Rangers_Token_Text_Bool_Exp>;
};


export type Subscription_RootRangers_Token_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


export type Subscription_RootRangers_Token_Text_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Rangers_Token_Text_Stream_Cursor_Input>>;
  where?: InputMaybe<Rangers_Token_Text_Bool_Exp>;
};


export type Subscription_RootRangers_TypeArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Type_Order_By>>;
  where?: InputMaybe<Rangers_Type_Bool_Exp>;
};


export type Subscription_RootRangers_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Type_Order_By>>;
  where?: InputMaybe<Rangers_Type_Bool_Exp>;
};


export type Subscription_RootRangers_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRangers_Type_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Rangers_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Rangers_Type_Bool_Exp>;
};


export type Subscription_RootRangers_Type_TextArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Type_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Type_Text_Order_By>>;
  where?: InputMaybe<Rangers_Type_Text_Bool_Exp>;
};


export type Subscription_RootRangers_Type_Text_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rangers_Type_Text_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rangers_Type_Text_Order_By>>;
  where?: InputMaybe<Rangers_Type_Text_Bool_Exp>;
};


export type Subscription_RootRangers_Type_Text_By_PkArgs = {
  id: Scalars['String'];
  locale: Scalars['String'];
};


export type Subscription_RootRangers_Type_Text_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Rangers_Type_Text_Stream_Cursor_Input>>;
  where?: InputMaybe<Rangers_Type_Text_Bool_Exp>;
};


export type Subscription_RootTaboo_SetArgs = {
  distinct_on?: InputMaybe<Array<Taboo_Set_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Taboo_Set_Order_By>>;
  where?: InputMaybe<Taboo_Set_Bool_Exp>;
};


export type Subscription_RootTaboo_Set_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Taboo_Set_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Taboo_Set_Order_By>>;
  where?: InputMaybe<Taboo_Set_Bool_Exp>;
};


export type Subscription_RootTaboo_Set_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTaboo_Set_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Taboo_Set_Stream_Cursor_Input>>;
  where?: InputMaybe<Taboo_Set_Bool_Exp>;
};


export type Subscription_RootUser_CampaignsArgs = {
  distinct_on?: InputMaybe<Array<User_Campaigns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Campaigns_Order_By>>;
  where?: InputMaybe<User_Campaigns_Bool_Exp>;
};


export type Subscription_RootUser_Campaigns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Campaigns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Campaigns_Order_By>>;
  where?: InputMaybe<User_Campaigns_Bool_Exp>;
};


export type Subscription_RootUser_Campaigns_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Campaigns_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Campaigns_Bool_Exp>;
};


export type Subscription_RootUser_FlagArgs = {
  distinct_on?: InputMaybe<Array<User_Flag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Flag_Order_By>>;
  where?: InputMaybe<User_Flag_Bool_Exp>;
};


export type Subscription_RootUser_Flag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Flag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Flag_Order_By>>;
  where?: InputMaybe<User_Flag_Bool_Exp>;
};


export type Subscription_RootUser_Flag_By_PkArgs = {
  flag: User_Flag_Type_Enum;
  user_id: Scalars['String'];
};


export type Subscription_RootUser_Flag_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Flag_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Flag_Bool_Exp>;
};


export type Subscription_RootUser_Flag_TypeArgs = {
  distinct_on?: InputMaybe<Array<User_Flag_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Flag_Type_Order_By>>;
  where?: InputMaybe<User_Flag_Type_Bool_Exp>;
};


export type Subscription_RootUser_Flag_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Flag_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Flag_Type_Order_By>>;
  where?: InputMaybe<User_Flag_Type_Bool_Exp>;
};


export type Subscription_RootUser_Flag_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootUser_Flag_Type_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Flag_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Flag_Type_Bool_Exp>;
};


export type Subscription_RootUser_FriendsArgs = {
  distinct_on?: InputMaybe<Array<User_Friends_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Friends_Order_By>>;
  where?: InputMaybe<User_Friends_Bool_Exp>;
};


export type Subscription_RootUser_Friends_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Friends_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Friends_Order_By>>;
  where?: InputMaybe<User_Friends_Bool_Exp>;
};


export type Subscription_RootUser_Friends_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Friends_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Friends_Bool_Exp>;
};


export type Subscription_RootUser_Received_Friend_RequestsArgs = {
  distinct_on?: InputMaybe<Array<User_Received_Friend_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Received_Friend_Requests_Order_By>>;
  where?: InputMaybe<User_Received_Friend_Requests_Bool_Exp>;
};


export type Subscription_RootUser_Received_Friend_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Received_Friend_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Received_Friend_Requests_Order_By>>;
  where?: InputMaybe<User_Received_Friend_Requests_Bool_Exp>;
};


export type Subscription_RootUser_Received_Friend_Requests_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Received_Friend_Requests_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Received_Friend_Requests_Bool_Exp>;
};


export type Subscription_RootUser_Sent_Friend_RequestsArgs = {
  distinct_on?: InputMaybe<Array<User_Sent_Friend_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Sent_Friend_Requests_Order_By>>;
  where?: InputMaybe<User_Sent_Friend_Requests_Bool_Exp>;
};


export type Subscription_RootUser_Sent_Friend_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Sent_Friend_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Sent_Friend_Requests_Order_By>>;
  where?: InputMaybe<User_Sent_Friend_Requests_Bool_Exp>;
};


export type Subscription_RootUser_Sent_Friend_Requests_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Sent_Friend_Requests_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Sent_Friend_Requests_Bool_Exp>;
};


export type Subscription_RootUser_SettingsArgs = {
  distinct_on?: InputMaybe<Array<User_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Settings_Order_By>>;
  where?: InputMaybe<User_Settings_Bool_Exp>;
};


export type Subscription_RootUser_Settings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Settings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Settings_Order_By>>;
  where?: InputMaybe<User_Settings_Bool_Exp>;
};


export type Subscription_RootUser_Settings_By_PkArgs = {
  user_id: Scalars['String'];
};


export type Subscription_RootUser_Settings_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Settings_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Settings_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "taboo_set" */
export type Taboo_Set = {
  __typename?: 'taboo_set';
  active: Scalars['Boolean'];
  card_count: Scalars['Int'];
  /** An array relationship */
  cards: Array<All_Card>;
  /** An aggregate relationship */
  cards_aggregate: All_Card_Aggregate;
  code: Scalars['String'];
  current: Scalars['Boolean'];
  date: Scalars['String'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};


/** columns and relationships of "taboo_set" */
export type Taboo_SetCardsArgs = {
  distinct_on?: InputMaybe<Array<All_Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<All_Card_Order_By>>;
  where?: InputMaybe<All_Card_Bool_Exp>;
};


/** columns and relationships of "taboo_set" */
export type Taboo_SetCards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<All_Card_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<All_Card_Order_By>>;
  where?: InputMaybe<All_Card_Bool_Exp>;
};

/** aggregated selection of "taboo_set" */
export type Taboo_Set_Aggregate = {
  __typename?: 'taboo_set_aggregate';
  aggregate?: Maybe<Taboo_Set_Aggregate_Fields>;
  nodes: Array<Taboo_Set>;
};

/** aggregate fields of "taboo_set" */
export type Taboo_Set_Aggregate_Fields = {
  __typename?: 'taboo_set_aggregate_fields';
  avg?: Maybe<Taboo_Set_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Taboo_Set_Max_Fields>;
  min?: Maybe<Taboo_Set_Min_Fields>;
  stddev?: Maybe<Taboo_Set_Stddev_Fields>;
  stddev_pop?: Maybe<Taboo_Set_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Taboo_Set_Stddev_Samp_Fields>;
  sum?: Maybe<Taboo_Set_Sum_Fields>;
  var_pop?: Maybe<Taboo_Set_Var_Pop_Fields>;
  var_samp?: Maybe<Taboo_Set_Var_Samp_Fields>;
  variance?: Maybe<Taboo_Set_Variance_Fields>;
};


/** aggregate fields of "taboo_set" */
export type Taboo_Set_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Taboo_Set_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Taboo_Set_Avg_Fields = {
  __typename?: 'taboo_set_avg_fields';
  card_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "taboo_set". All fields are combined with a logical 'AND'. */
export type Taboo_Set_Bool_Exp = {
  _and?: InputMaybe<Array<Taboo_Set_Bool_Exp>>;
  _not?: InputMaybe<Taboo_Set_Bool_Exp>;
  _or?: InputMaybe<Array<Taboo_Set_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  card_count?: InputMaybe<Int_Comparison_Exp>;
  cards?: InputMaybe<All_Card_Bool_Exp>;
  cards_aggregate?: InputMaybe<All_Card_Aggregate_Bool_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  current?: InputMaybe<Boolean_Comparison_Exp>;
  date?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "taboo_set" */
export enum Taboo_Set_Constraint {
  /** unique or primary key constraint on columns "id" */
  TabooSetPkey = 'taboo_set_pkey'
}

/** input type for incrementing numeric columns in table "taboo_set" */
export type Taboo_Set_Inc_Input = {
  card_count?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "taboo_set" */
export type Taboo_Set_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  card_count?: InputMaybe<Scalars['Int']>;
  cards?: InputMaybe<All_Card_Arr_Rel_Insert_Input>;
  code?: InputMaybe<Scalars['String']>;
  current?: InputMaybe<Scalars['Boolean']>;
  date?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Taboo_Set_Max_Fields = {
  __typename?: 'taboo_set_max_fields';
  card_count?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Taboo_Set_Min_Fields = {
  __typename?: 'taboo_set_min_fields';
  card_count?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "taboo_set" */
export type Taboo_Set_Mutation_Response = {
  __typename?: 'taboo_set_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Taboo_Set>;
};

/** input type for inserting object relation for remote table "taboo_set" */
export type Taboo_Set_Obj_Rel_Insert_Input = {
  data: Taboo_Set_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Taboo_Set_On_Conflict>;
};

/** on_conflict condition type for table "taboo_set" */
export type Taboo_Set_On_Conflict = {
  constraint: Taboo_Set_Constraint;
  update_columns?: Array<Taboo_Set_Update_Column>;
  where?: InputMaybe<Taboo_Set_Bool_Exp>;
};

/** Ordering options when selecting data from "taboo_set". */
export type Taboo_Set_Order_By = {
  active?: InputMaybe<Order_By>;
  card_count?: InputMaybe<Order_By>;
  cards_aggregate?: InputMaybe<All_Card_Aggregate_Order_By>;
  code?: InputMaybe<Order_By>;
  current?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: taboo_set */
export type Taboo_Set_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "taboo_set" */
export enum Taboo_Set_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CardCount = 'card_count',
  /** column name */
  Code = 'code',
  /** column name */
  Current = 'current',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "taboo_set" */
export type Taboo_Set_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  card_count?: InputMaybe<Scalars['Int']>;
  code?: InputMaybe<Scalars['String']>;
  current?: InputMaybe<Scalars['Boolean']>;
  date?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Taboo_Set_Stddev_Fields = {
  __typename?: 'taboo_set_stddev_fields';
  card_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Taboo_Set_Stddev_Pop_Fields = {
  __typename?: 'taboo_set_stddev_pop_fields';
  card_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Taboo_Set_Stddev_Samp_Fields = {
  __typename?: 'taboo_set_stddev_samp_fields';
  card_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "taboo_set" */
export type Taboo_Set_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Taboo_Set_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Taboo_Set_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  card_count?: InputMaybe<Scalars['Int']>;
  code?: InputMaybe<Scalars['String']>;
  current?: InputMaybe<Scalars['Boolean']>;
  date?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Taboo_Set_Sum_Fields = {
  __typename?: 'taboo_set_sum_fields';
  card_count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "taboo_set" */
export enum Taboo_Set_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CardCount = 'card_count',
  /** column name */
  Code = 'code',
  /** column name */
  Current = 'current',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Taboo_Set_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Taboo_Set_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Taboo_Set_Set_Input>;
  where: Taboo_Set_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Taboo_Set_Var_Pop_Fields = {
  __typename?: 'taboo_set_var_pop_fields';
  card_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Taboo_Set_Var_Samp_Fields = {
  __typename?: 'taboo_set_var_samp_fields';
  card_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Taboo_Set_Variance_Fields = {
  __typename?: 'taboo_set_variance_fields';
  card_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user_campaigns" */
export type User_Campaigns = {
  __typename?: 'user_campaigns';
  /** An object relationship */
  campaign?: Maybe<Campaign>;
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "user_campaigns" */
export type User_Campaigns_Aggregate = {
  __typename?: 'user_campaigns_aggregate';
  aggregate?: Maybe<User_Campaigns_Aggregate_Fields>;
  nodes: Array<User_Campaigns>;
};

export type User_Campaigns_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Campaigns_Aggregate_Bool_Exp_Count>;
};

export type User_Campaigns_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Campaigns_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Campaigns_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_campaigns" */
export type User_Campaigns_Aggregate_Fields = {
  __typename?: 'user_campaigns_aggregate_fields';
  avg?: Maybe<User_Campaigns_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Campaigns_Max_Fields>;
  min?: Maybe<User_Campaigns_Min_Fields>;
  stddev?: Maybe<User_Campaigns_Stddev_Fields>;
  stddev_pop?: Maybe<User_Campaigns_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Campaigns_Stddev_Samp_Fields>;
  sum?: Maybe<User_Campaigns_Sum_Fields>;
  var_pop?: Maybe<User_Campaigns_Var_Pop_Fields>;
  var_samp?: Maybe<User_Campaigns_Var_Samp_Fields>;
  variance?: Maybe<User_Campaigns_Variance_Fields>;
};


/** aggregate fields of "user_campaigns" */
export type User_Campaigns_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Campaigns_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_campaigns" */
export type User_Campaigns_Aggregate_Order_By = {
  avg?: InputMaybe<User_Campaigns_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Campaigns_Max_Order_By>;
  min?: InputMaybe<User_Campaigns_Min_Order_By>;
  stddev?: InputMaybe<User_Campaigns_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Campaigns_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Campaigns_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Campaigns_Sum_Order_By>;
  var_pop?: InputMaybe<User_Campaigns_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Campaigns_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Campaigns_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_campaigns" */
export type User_Campaigns_Arr_Rel_Insert_Input = {
  data: Array<User_Campaigns_Insert_Input>;
};

/** aggregate avg on columns */
export type User_Campaigns_Avg_Fields = {
  __typename?: 'user_campaigns_avg_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_campaigns" */
export type User_Campaigns_Avg_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_campaigns". All fields are combined with a logical 'AND'. */
export type User_Campaigns_Bool_Exp = {
  _and?: InputMaybe<Array<User_Campaigns_Bool_Exp>>;
  _not?: InputMaybe<User_Campaigns_Bool_Exp>;
  _or?: InputMaybe<Array<User_Campaigns_Bool_Exp>>;
  campaign?: InputMaybe<Campaign_Bool_Exp>;
  campaign_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "user_campaigns" */
export type User_Campaigns_Inc_Input = {
  campaign_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_campaigns" */
export type User_Campaigns_Insert_Input = {
  campaign?: InputMaybe<Campaign_Obj_Rel_Insert_Input>;
  campaign_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Campaigns_Max_Fields = {
  __typename?: 'user_campaigns_max_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_campaigns" */
export type User_Campaigns_Max_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Campaigns_Min_Fields = {
  __typename?: 'user_campaigns_min_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_campaigns" */
export type User_Campaigns_Min_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_campaigns" */
export type User_Campaigns_Mutation_Response = {
  __typename?: 'user_campaigns_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Campaigns>;
};

/** Ordering options when selecting data from "user_campaigns". */
export type User_Campaigns_Order_By = {
  campaign?: InputMaybe<Campaign_Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "user_campaigns" */
export enum User_Campaigns_Select_Column {
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_campaigns" */
export type User_Campaigns_Set_Input = {
  campaign_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Campaigns_Stddev_Fields = {
  __typename?: 'user_campaigns_stddev_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_campaigns" */
export type User_Campaigns_Stddev_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Campaigns_Stddev_Pop_Fields = {
  __typename?: 'user_campaigns_stddev_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_campaigns" */
export type User_Campaigns_Stddev_Pop_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Campaigns_Stddev_Samp_Fields = {
  __typename?: 'user_campaigns_stddev_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_campaigns" */
export type User_Campaigns_Stddev_Samp_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_campaigns" */
export type User_Campaigns_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Campaigns_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Campaigns_Stream_Cursor_Value_Input = {
  campaign_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type User_Campaigns_Sum_Fields = {
  __typename?: 'user_campaigns_sum_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_campaigns" */
export type User_Campaigns_Sum_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

export type User_Campaigns_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Campaigns_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Campaigns_Set_Input>;
  where: User_Campaigns_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Campaigns_Var_Pop_Fields = {
  __typename?: 'user_campaigns_var_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_campaigns" */
export type User_Campaigns_Var_Pop_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Campaigns_Var_Samp_Fields = {
  __typename?: 'user_campaigns_var_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_campaigns" */
export type User_Campaigns_Var_Samp_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Campaigns_Variance_Fields = {
  __typename?: 'user_campaigns_variance_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_campaigns" */
export type User_Campaigns_Variance_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "user_flag" */
export type User_Flag = {
  __typename?: 'user_flag';
  flag: User_Flag_Type_Enum;
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "user_flag" */
export type User_Flag_Aggregate = {
  __typename?: 'user_flag_aggregate';
  aggregate?: Maybe<User_Flag_Aggregate_Fields>;
  nodes: Array<User_Flag>;
};

export type User_Flag_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Flag_Aggregate_Bool_Exp_Count>;
};

export type User_Flag_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Flag_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Flag_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_flag" */
export type User_Flag_Aggregate_Fields = {
  __typename?: 'user_flag_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Flag_Max_Fields>;
  min?: Maybe<User_Flag_Min_Fields>;
};


/** aggregate fields of "user_flag" */
export type User_Flag_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Flag_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_flag" */
export type User_Flag_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Flag_Max_Order_By>;
  min?: InputMaybe<User_Flag_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_flag" */
export type User_Flag_Arr_Rel_Insert_Input = {
  data: Array<User_Flag_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Flag_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_flag". All fields are combined with a logical 'AND'. */
export type User_Flag_Bool_Exp = {
  _and?: InputMaybe<Array<User_Flag_Bool_Exp>>;
  _not?: InputMaybe<User_Flag_Bool_Exp>;
  _or?: InputMaybe<Array<User_Flag_Bool_Exp>>;
  flag?: InputMaybe<User_Flag_Type_Enum_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_flag" */
export enum User_Flag_Constraint {
  /** unique or primary key constraint on columns "flag", "user_id" */
  UserFlagPkey = 'user_flag_pkey'
}

/** input type for inserting data into table "user_flag" */
export type User_Flag_Insert_Input = {
  flag?: InputMaybe<User_Flag_Type_Enum>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Flag_Max_Fields = {
  __typename?: 'user_flag_max_fields';
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_flag" */
export type User_Flag_Max_Order_By = {
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Flag_Min_Fields = {
  __typename?: 'user_flag_min_fields';
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_flag" */
export type User_Flag_Min_Order_By = {
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_flag" */
export type User_Flag_Mutation_Response = {
  __typename?: 'user_flag_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Flag>;
};

/** on_conflict condition type for table "user_flag" */
export type User_Flag_On_Conflict = {
  constraint: User_Flag_Constraint;
  update_columns?: Array<User_Flag_Update_Column>;
  where?: InputMaybe<User_Flag_Bool_Exp>;
};

/** Ordering options when selecting data from "user_flag". */
export type User_Flag_Order_By = {
  flag?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_flag */
export type User_Flag_Pk_Columns_Input = {
  flag: User_Flag_Type_Enum;
  user_id: Scalars['String'];
};

/** select columns of table "user_flag" */
export enum User_Flag_Select_Column {
  /** column name */
  Flag = 'flag',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_flag" */
export type User_Flag_Set_Input = {
  flag?: InputMaybe<User_Flag_Type_Enum>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "user_flag" */
export type User_Flag_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Flag_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Flag_Stream_Cursor_Value_Input = {
  flag?: InputMaybe<User_Flag_Type_Enum>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "user_flag_type" */
export type User_Flag_Type = {
  __typename?: 'user_flag_type';
  value: Scalars['String'];
};

/** aggregated selection of "user_flag_type" */
export type User_Flag_Type_Aggregate = {
  __typename?: 'user_flag_type_aggregate';
  aggregate?: Maybe<User_Flag_Type_Aggregate_Fields>;
  nodes: Array<User_Flag_Type>;
};

/** aggregate fields of "user_flag_type" */
export type User_Flag_Type_Aggregate_Fields = {
  __typename?: 'user_flag_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Flag_Type_Max_Fields>;
  min?: Maybe<User_Flag_Type_Min_Fields>;
};


/** aggregate fields of "user_flag_type" */
export type User_Flag_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Flag_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_flag_type". All fields are combined with a logical 'AND'. */
export type User_Flag_Type_Bool_Exp = {
  _and?: InputMaybe<Array<User_Flag_Type_Bool_Exp>>;
  _not?: InputMaybe<User_Flag_Type_Bool_Exp>;
  _or?: InputMaybe<Array<User_Flag_Type_Bool_Exp>>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_flag_type" */
export enum User_Flag_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  UserFlagTypePkey = 'user_flag_type_pkey'
}

export enum User_Flag_Type_Enum {
  Admin = 'admin',
  EsDv = 'es_dv',
  EsDvAdmin = 'es_dv_admin'
}

/** Boolean expression to compare columns of type "user_flag_type_enum". All fields are combined with logical 'AND'. */
export type User_Flag_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<User_Flag_Type_Enum>;
  _in?: InputMaybe<Array<User_Flag_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<User_Flag_Type_Enum>;
  _nin?: InputMaybe<Array<User_Flag_Type_Enum>>;
};

/** input type for inserting data into table "user_flag_type" */
export type User_Flag_Type_Insert_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Flag_Type_Max_Fields = {
  __typename?: 'user_flag_type_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Flag_Type_Min_Fields = {
  __typename?: 'user_flag_type_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user_flag_type" */
export type User_Flag_Type_Mutation_Response = {
  __typename?: 'user_flag_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Flag_Type>;
};

/** on_conflict condition type for table "user_flag_type" */
export type User_Flag_Type_On_Conflict = {
  constraint: User_Flag_Type_Constraint;
  update_columns?: Array<User_Flag_Type_Update_Column>;
  where?: InputMaybe<User_Flag_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "user_flag_type". */
export type User_Flag_Type_Order_By = {
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_flag_type */
export type User_Flag_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "user_flag_type" */
export enum User_Flag_Type_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "user_flag_type" */
export type User_Flag_Type_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "user_flag_type" */
export type User_Flag_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Flag_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Flag_Type_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user_flag_type" */
export enum User_Flag_Type_Update_Column {
  /** column name */
  Value = 'value'
}

export type User_Flag_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Flag_Type_Set_Input>;
  where: User_Flag_Type_Bool_Exp;
};

/** update columns of table "user_flag" */
export enum User_Flag_Update_Column {
  /** column name */
  Flag = 'flag',
  /** column name */
  UserId = 'user_id'
}

export type User_Flag_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Flag_Set_Input>;
  where: User_Flag_Bool_Exp;
};

/** columns and relationships of "user_friends" */
export type User_Friends = {
  __typename?: 'user_friends';
  status?: Maybe<Scalars['String']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id_a?: Maybe<Scalars['String']>;
  user_id_b?: Maybe<Scalars['String']>;
};

/** aggregated selection of "user_friends" */
export type User_Friends_Aggregate = {
  __typename?: 'user_friends_aggregate';
  aggregate?: Maybe<User_Friends_Aggregate_Fields>;
  nodes: Array<User_Friends>;
};

export type User_Friends_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Friends_Aggregate_Bool_Exp_Count>;
};

export type User_Friends_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Friends_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Friends_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_friends" */
export type User_Friends_Aggregate_Fields = {
  __typename?: 'user_friends_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Friends_Max_Fields>;
  min?: Maybe<User_Friends_Min_Fields>;
};


/** aggregate fields of "user_friends" */
export type User_Friends_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Friends_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_friends" */
export type User_Friends_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Friends_Max_Order_By>;
  min?: InputMaybe<User_Friends_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_friends" */
export type User_Friends_Arr_Rel_Insert_Input = {
  data: Array<User_Friends_Insert_Input>;
};

/** Boolean expression to filter rows from the table "user_friends". All fields are combined with a logical 'AND'. */
export type User_Friends_Bool_Exp = {
  _and?: InputMaybe<Array<User_Friends_Bool_Exp>>;
  _not?: InputMaybe<User_Friends_Bool_Exp>;
  _or?: InputMaybe<Array<User_Friends_Bool_Exp>>;
  status?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id_a?: InputMaybe<String_Comparison_Exp>;
  user_id_b?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "user_friends" */
export type User_Friends_Insert_Input = {
  status?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id_a?: InputMaybe<Scalars['String']>;
  user_id_b?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Friends_Max_Fields = {
  __typename?: 'user_friends_max_fields';
  status?: Maybe<Scalars['String']>;
  user_id_a?: Maybe<Scalars['String']>;
  user_id_b?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_friends" */
export type User_Friends_Max_Order_By = {
  status?: InputMaybe<Order_By>;
  user_id_a?: InputMaybe<Order_By>;
  user_id_b?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Friends_Min_Fields = {
  __typename?: 'user_friends_min_fields';
  status?: Maybe<Scalars['String']>;
  user_id_a?: Maybe<Scalars['String']>;
  user_id_b?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_friends" */
export type User_Friends_Min_Order_By = {
  status?: InputMaybe<Order_By>;
  user_id_a?: InputMaybe<Order_By>;
  user_id_b?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_friends" */
export type User_Friends_Mutation_Response = {
  __typename?: 'user_friends_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Friends>;
};

/** Ordering options when selecting data from "user_friends". */
export type User_Friends_Order_By = {
  status?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id_a?: InputMaybe<Order_By>;
  user_id_b?: InputMaybe<Order_By>;
};

/** select columns of table "user_friends" */
export enum User_Friends_Select_Column {
  /** column name */
  Status = 'status',
  /** column name */
  UserIdA = 'user_id_a',
  /** column name */
  UserIdB = 'user_id_b'
}

/** input type for updating data in table "user_friends" */
export type User_Friends_Set_Input = {
  status?: InputMaybe<Scalars['String']>;
  user_id_a?: InputMaybe<Scalars['String']>;
  user_id_b?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "user_friends" */
export type User_Friends_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Friends_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Friends_Stream_Cursor_Value_Input = {
  status?: InputMaybe<Scalars['String']>;
  user_id_a?: InputMaybe<Scalars['String']>;
  user_id_b?: InputMaybe<Scalars['String']>;
};

export type User_Friends_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Friends_Set_Input>;
  where: User_Friends_Bool_Exp;
};

/** columns and relationships of "user_received_friend_requests" */
export type User_Received_Friend_Requests = {
  __typename?: 'user_received_friend_requests';
  status?: Maybe<Scalars['String']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id_a?: Maybe<Scalars['String']>;
  user_id_b?: Maybe<Scalars['String']>;
};

/** aggregated selection of "user_received_friend_requests" */
export type User_Received_Friend_Requests_Aggregate = {
  __typename?: 'user_received_friend_requests_aggregate';
  aggregate?: Maybe<User_Received_Friend_Requests_Aggregate_Fields>;
  nodes: Array<User_Received_Friend_Requests>;
};

export type User_Received_Friend_Requests_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Received_Friend_Requests_Aggregate_Bool_Exp_Count>;
};

export type User_Received_Friend_Requests_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Received_Friend_Requests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Received_Friend_Requests_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_received_friend_requests" */
export type User_Received_Friend_Requests_Aggregate_Fields = {
  __typename?: 'user_received_friend_requests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Received_Friend_Requests_Max_Fields>;
  min?: Maybe<User_Received_Friend_Requests_Min_Fields>;
};


/** aggregate fields of "user_received_friend_requests" */
export type User_Received_Friend_Requests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Received_Friend_Requests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_received_friend_requests" */
export type User_Received_Friend_Requests_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Received_Friend_Requests_Max_Order_By>;
  min?: InputMaybe<User_Received_Friend_Requests_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_received_friend_requests" */
export type User_Received_Friend_Requests_Arr_Rel_Insert_Input = {
  data: Array<User_Received_Friend_Requests_Insert_Input>;
};

/** Boolean expression to filter rows from the table "user_received_friend_requests". All fields are combined with a logical 'AND'. */
export type User_Received_Friend_Requests_Bool_Exp = {
  _and?: InputMaybe<Array<User_Received_Friend_Requests_Bool_Exp>>;
  _not?: InputMaybe<User_Received_Friend_Requests_Bool_Exp>;
  _or?: InputMaybe<Array<User_Received_Friend_Requests_Bool_Exp>>;
  status?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id_a?: InputMaybe<String_Comparison_Exp>;
  user_id_b?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "user_received_friend_requests" */
export type User_Received_Friend_Requests_Insert_Input = {
  status?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id_a?: InputMaybe<Scalars['String']>;
  user_id_b?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Received_Friend_Requests_Max_Fields = {
  __typename?: 'user_received_friend_requests_max_fields';
  status?: Maybe<Scalars['String']>;
  user_id_a?: Maybe<Scalars['String']>;
  user_id_b?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_received_friend_requests" */
export type User_Received_Friend_Requests_Max_Order_By = {
  status?: InputMaybe<Order_By>;
  user_id_a?: InputMaybe<Order_By>;
  user_id_b?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Received_Friend_Requests_Min_Fields = {
  __typename?: 'user_received_friend_requests_min_fields';
  status?: Maybe<Scalars['String']>;
  user_id_a?: Maybe<Scalars['String']>;
  user_id_b?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_received_friend_requests" */
export type User_Received_Friend_Requests_Min_Order_By = {
  status?: InputMaybe<Order_By>;
  user_id_a?: InputMaybe<Order_By>;
  user_id_b?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_received_friend_requests" */
export type User_Received_Friend_Requests_Mutation_Response = {
  __typename?: 'user_received_friend_requests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Received_Friend_Requests>;
};

/** Ordering options when selecting data from "user_received_friend_requests". */
export type User_Received_Friend_Requests_Order_By = {
  status?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id_a?: InputMaybe<Order_By>;
  user_id_b?: InputMaybe<Order_By>;
};

/** select columns of table "user_received_friend_requests" */
export enum User_Received_Friend_Requests_Select_Column {
  /** column name */
  Status = 'status',
  /** column name */
  UserIdA = 'user_id_a',
  /** column name */
  UserIdB = 'user_id_b'
}

/** input type for updating data in table "user_received_friend_requests" */
export type User_Received_Friend_Requests_Set_Input = {
  status?: InputMaybe<Scalars['String']>;
  user_id_a?: InputMaybe<Scalars['String']>;
  user_id_b?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "user_received_friend_requests" */
export type User_Received_Friend_Requests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Received_Friend_Requests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Received_Friend_Requests_Stream_Cursor_Value_Input = {
  status?: InputMaybe<Scalars['String']>;
  user_id_a?: InputMaybe<Scalars['String']>;
  user_id_b?: InputMaybe<Scalars['String']>;
};

export type User_Received_Friend_Requests_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Received_Friend_Requests_Set_Input>;
  where: User_Received_Friend_Requests_Bool_Exp;
};

/** columns and relationships of "user_sent_friend_requests" */
export type User_Sent_Friend_Requests = {
  __typename?: 'user_sent_friend_requests';
  status?: Maybe<Scalars['String']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id_a?: Maybe<Scalars['String']>;
  user_id_b?: Maybe<Scalars['String']>;
};

/** aggregated selection of "user_sent_friend_requests" */
export type User_Sent_Friend_Requests_Aggregate = {
  __typename?: 'user_sent_friend_requests_aggregate';
  aggregate?: Maybe<User_Sent_Friend_Requests_Aggregate_Fields>;
  nodes: Array<User_Sent_Friend_Requests>;
};

export type User_Sent_Friend_Requests_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Sent_Friend_Requests_Aggregate_Bool_Exp_Count>;
};

export type User_Sent_Friend_Requests_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Sent_Friend_Requests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Sent_Friend_Requests_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_sent_friend_requests" */
export type User_Sent_Friend_Requests_Aggregate_Fields = {
  __typename?: 'user_sent_friend_requests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Sent_Friend_Requests_Max_Fields>;
  min?: Maybe<User_Sent_Friend_Requests_Min_Fields>;
};


/** aggregate fields of "user_sent_friend_requests" */
export type User_Sent_Friend_Requests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Sent_Friend_Requests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_sent_friend_requests" */
export type User_Sent_Friend_Requests_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Sent_Friend_Requests_Max_Order_By>;
  min?: InputMaybe<User_Sent_Friend_Requests_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_sent_friend_requests" */
export type User_Sent_Friend_Requests_Arr_Rel_Insert_Input = {
  data: Array<User_Sent_Friend_Requests_Insert_Input>;
};

/** Boolean expression to filter rows from the table "user_sent_friend_requests". All fields are combined with a logical 'AND'. */
export type User_Sent_Friend_Requests_Bool_Exp = {
  _and?: InputMaybe<Array<User_Sent_Friend_Requests_Bool_Exp>>;
  _not?: InputMaybe<User_Sent_Friend_Requests_Bool_Exp>;
  _or?: InputMaybe<Array<User_Sent_Friend_Requests_Bool_Exp>>;
  status?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id_a?: InputMaybe<String_Comparison_Exp>;
  user_id_b?: InputMaybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "user_sent_friend_requests" */
export type User_Sent_Friend_Requests_Insert_Input = {
  status?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id_a?: InputMaybe<Scalars['String']>;
  user_id_b?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Sent_Friend_Requests_Max_Fields = {
  __typename?: 'user_sent_friend_requests_max_fields';
  status?: Maybe<Scalars['String']>;
  user_id_a?: Maybe<Scalars['String']>;
  user_id_b?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_sent_friend_requests" */
export type User_Sent_Friend_Requests_Max_Order_By = {
  status?: InputMaybe<Order_By>;
  user_id_a?: InputMaybe<Order_By>;
  user_id_b?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Sent_Friend_Requests_Min_Fields = {
  __typename?: 'user_sent_friend_requests_min_fields';
  status?: Maybe<Scalars['String']>;
  user_id_a?: Maybe<Scalars['String']>;
  user_id_b?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_sent_friend_requests" */
export type User_Sent_Friend_Requests_Min_Order_By = {
  status?: InputMaybe<Order_By>;
  user_id_a?: InputMaybe<Order_By>;
  user_id_b?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_sent_friend_requests" */
export type User_Sent_Friend_Requests_Mutation_Response = {
  __typename?: 'user_sent_friend_requests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Sent_Friend_Requests>;
};

/** Ordering options when selecting data from "user_sent_friend_requests". */
export type User_Sent_Friend_Requests_Order_By = {
  status?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id_a?: InputMaybe<Order_By>;
  user_id_b?: InputMaybe<Order_By>;
};

/** select columns of table "user_sent_friend_requests" */
export enum User_Sent_Friend_Requests_Select_Column {
  /** column name */
  Status = 'status',
  /** column name */
  UserIdA = 'user_id_a',
  /** column name */
  UserIdB = 'user_id_b'
}

/** input type for updating data in table "user_sent_friend_requests" */
export type User_Sent_Friend_Requests_Set_Input = {
  status?: InputMaybe<Scalars['String']>;
  user_id_a?: InputMaybe<Scalars['String']>;
  user_id_b?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "user_sent_friend_requests" */
export type User_Sent_Friend_Requests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Sent_Friend_Requests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Sent_Friend_Requests_Stream_Cursor_Value_Input = {
  status?: InputMaybe<Scalars['String']>;
  user_id_a?: InputMaybe<Scalars['String']>;
  user_id_b?: InputMaybe<Scalars['String']>;
};

export type User_Sent_Friend_Requests_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Sent_Friend_Requests_Set_Input>;
  where: User_Sent_Friend_Requests_Bool_Exp;
};

/** columns and relationships of "user_settings" */
export type User_Settings = {
  __typename?: 'user_settings';
  alphabetize?: Maybe<Scalars['Boolean']>;
  campaign_show_deck_id?: Maybe<Scalars['Boolean']>;
  colorblind?: Maybe<Scalars['Boolean']>;
  custom_content?: Maybe<Scalars['Boolean']>;
  ignore_collection?: Maybe<Scalars['Boolean']>;
  in_collection?: Maybe<Scalars['jsonb']>;
  onboarding?: Maybe<Scalars['jsonb']>;
  show_spoilers?: Maybe<Scalars['jsonb']>;
  single_card?: Maybe<Scalars['Boolean']>;
  sort_quotes?: Maybe<Scalars['Boolean']>;
  user_id: Scalars['String'];
};


/** columns and relationships of "user_settings" */
export type User_SettingsIn_CollectionArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "user_settings" */
export type User_SettingsOnboardingArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "user_settings" */
export type User_SettingsShow_SpoilersArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "user_settings" */
export type User_Settings_Aggregate = {
  __typename?: 'user_settings_aggregate';
  aggregate?: Maybe<User_Settings_Aggregate_Fields>;
  nodes: Array<User_Settings>;
};

/** aggregate fields of "user_settings" */
export type User_Settings_Aggregate_Fields = {
  __typename?: 'user_settings_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Settings_Max_Fields>;
  min?: Maybe<User_Settings_Min_Fields>;
};


/** aggregate fields of "user_settings" */
export type User_Settings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Settings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type User_Settings_Append_Input = {
  in_collection?: InputMaybe<Scalars['jsonb']>;
  onboarding?: InputMaybe<Scalars['jsonb']>;
  show_spoilers?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "user_settings". All fields are combined with a logical 'AND'. */
export type User_Settings_Bool_Exp = {
  _and?: InputMaybe<Array<User_Settings_Bool_Exp>>;
  _not?: InputMaybe<User_Settings_Bool_Exp>;
  _or?: InputMaybe<Array<User_Settings_Bool_Exp>>;
  alphabetize?: InputMaybe<Boolean_Comparison_Exp>;
  campaign_show_deck_id?: InputMaybe<Boolean_Comparison_Exp>;
  colorblind?: InputMaybe<Boolean_Comparison_Exp>;
  custom_content?: InputMaybe<Boolean_Comparison_Exp>;
  ignore_collection?: InputMaybe<Boolean_Comparison_Exp>;
  in_collection?: InputMaybe<Jsonb_Comparison_Exp>;
  onboarding?: InputMaybe<Jsonb_Comparison_Exp>;
  show_spoilers?: InputMaybe<Jsonb_Comparison_Exp>;
  single_card?: InputMaybe<Boolean_Comparison_Exp>;
  sort_quotes?: InputMaybe<Boolean_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_settings" */
export enum User_Settings_Constraint {
  /** unique or primary key constraint on columns "user_id" */
  UserSettingsPkey = 'user_settings_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type User_Settings_Delete_At_Path_Input = {
  in_collection?: InputMaybe<Array<Scalars['String']>>;
  onboarding?: InputMaybe<Array<Scalars['String']>>;
  show_spoilers?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type User_Settings_Delete_Elem_Input = {
  in_collection?: InputMaybe<Scalars['Int']>;
  onboarding?: InputMaybe<Scalars['Int']>;
  show_spoilers?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type User_Settings_Delete_Key_Input = {
  in_collection?: InputMaybe<Scalars['String']>;
  onboarding?: InputMaybe<Scalars['String']>;
  show_spoilers?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "user_settings" */
export type User_Settings_Insert_Input = {
  alphabetize?: InputMaybe<Scalars['Boolean']>;
  campaign_show_deck_id?: InputMaybe<Scalars['Boolean']>;
  colorblind?: InputMaybe<Scalars['Boolean']>;
  custom_content?: InputMaybe<Scalars['Boolean']>;
  ignore_collection?: InputMaybe<Scalars['Boolean']>;
  in_collection?: InputMaybe<Scalars['jsonb']>;
  onboarding?: InputMaybe<Scalars['jsonb']>;
  show_spoilers?: InputMaybe<Scalars['jsonb']>;
  single_card?: InputMaybe<Scalars['Boolean']>;
  sort_quotes?: InputMaybe<Scalars['Boolean']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Settings_Max_Fields = {
  __typename?: 'user_settings_max_fields';
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Settings_Min_Fields = {
  __typename?: 'user_settings_min_fields';
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user_settings" */
export type User_Settings_Mutation_Response = {
  __typename?: 'user_settings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Settings>;
};

/** on_conflict condition type for table "user_settings" */
export type User_Settings_On_Conflict = {
  constraint: User_Settings_Constraint;
  update_columns?: Array<User_Settings_Update_Column>;
  where?: InputMaybe<User_Settings_Bool_Exp>;
};

/** Ordering options when selecting data from "user_settings". */
export type User_Settings_Order_By = {
  alphabetize?: InputMaybe<Order_By>;
  campaign_show_deck_id?: InputMaybe<Order_By>;
  colorblind?: InputMaybe<Order_By>;
  custom_content?: InputMaybe<Order_By>;
  ignore_collection?: InputMaybe<Order_By>;
  in_collection?: InputMaybe<Order_By>;
  onboarding?: InputMaybe<Order_By>;
  show_spoilers?: InputMaybe<Order_By>;
  single_card?: InputMaybe<Order_By>;
  sort_quotes?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_settings */
export type User_Settings_Pk_Columns_Input = {
  user_id: Scalars['String'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type User_Settings_Prepend_Input = {
  in_collection?: InputMaybe<Scalars['jsonb']>;
  onboarding?: InputMaybe<Scalars['jsonb']>;
  show_spoilers?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "user_settings" */
export enum User_Settings_Select_Column {
  /** column name */
  Alphabetize = 'alphabetize',
  /** column name */
  CampaignShowDeckId = 'campaign_show_deck_id',
  /** column name */
  Colorblind = 'colorblind',
  /** column name */
  CustomContent = 'custom_content',
  /** column name */
  IgnoreCollection = 'ignore_collection',
  /** column name */
  InCollection = 'in_collection',
  /** column name */
  Onboarding = 'onboarding',
  /** column name */
  ShowSpoilers = 'show_spoilers',
  /** column name */
  SingleCard = 'single_card',
  /** column name */
  SortQuotes = 'sort_quotes',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_settings" */
export type User_Settings_Set_Input = {
  alphabetize?: InputMaybe<Scalars['Boolean']>;
  campaign_show_deck_id?: InputMaybe<Scalars['Boolean']>;
  colorblind?: InputMaybe<Scalars['Boolean']>;
  custom_content?: InputMaybe<Scalars['Boolean']>;
  ignore_collection?: InputMaybe<Scalars['Boolean']>;
  in_collection?: InputMaybe<Scalars['jsonb']>;
  onboarding?: InputMaybe<Scalars['jsonb']>;
  show_spoilers?: InputMaybe<Scalars['jsonb']>;
  single_card?: InputMaybe<Scalars['Boolean']>;
  sort_quotes?: InputMaybe<Scalars['Boolean']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "user_settings" */
export type User_Settings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Settings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Settings_Stream_Cursor_Value_Input = {
  alphabetize?: InputMaybe<Scalars['Boolean']>;
  campaign_show_deck_id?: InputMaybe<Scalars['Boolean']>;
  colorblind?: InputMaybe<Scalars['Boolean']>;
  custom_content?: InputMaybe<Scalars['Boolean']>;
  ignore_collection?: InputMaybe<Scalars['Boolean']>;
  in_collection?: InputMaybe<Scalars['jsonb']>;
  onboarding?: InputMaybe<Scalars['jsonb']>;
  show_spoilers?: InputMaybe<Scalars['jsonb']>;
  single_card?: InputMaybe<Scalars['Boolean']>;
  sort_quotes?: InputMaybe<Scalars['Boolean']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user_settings" */
export enum User_Settings_Update_Column {
  /** column name */
  Alphabetize = 'alphabetize',
  /** column name */
  CampaignShowDeckId = 'campaign_show_deck_id',
  /** column name */
  Colorblind = 'colorblind',
  /** column name */
  CustomContent = 'custom_content',
  /** column name */
  IgnoreCollection = 'ignore_collection',
  /** column name */
  InCollection = 'in_collection',
  /** column name */
  Onboarding = 'onboarding',
  /** column name */
  ShowSpoilers = 'show_spoilers',
  /** column name */
  SingleCard = 'single_card',
  /** column name */
  SortQuotes = 'sort_quotes',
  /** column name */
  UserId = 'user_id'
}

export type User_Settings_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<User_Settings_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<User_Settings_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<User_Settings_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<User_Settings_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<User_Settings_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Settings_Set_Input>;
  where: User_Settings_Bool_Exp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  all_decks: Array<Campaign_Deck>;
  /** An aggregate relationship */
  all_decks_aggregate: Campaign_Deck_Aggregate;
  /** An array relationship */
  campaigns: Array<User_Campaigns>;
  /** An aggregate relationship */
  campaigns_aggregate: User_Campaigns_Aggregate;
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  decks: Array<Latest_Decks>;
  /** An aggregate relationship */
  decks_aggregate: Latest_Decks_Aggregate;
  /** An array relationship */
  flags: Array<User_Flag>;
  /** An aggregate relationship */
  flags_aggregate: User_Flag_Aggregate;
  /** An array relationship */
  friends: Array<User_Friends>;
  /** An aggregate relationship */
  friends_aggregate: User_Friends_Aggregate;
  handle?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  /** An array relationship */
  local_decks: Array<Local_Decks>;
  /** An aggregate relationship */
  local_decks_aggregate: Local_Decks_Aggregate;
  /** An array relationship */
  received_requests: Array<User_Received_Friend_Requests>;
  /** An aggregate relationship */
  received_requests_aggregate: User_Received_Friend_Requests_Aggregate;
  /** An array relationship */
  sent_requests: Array<User_Sent_Friend_Requests>;
  /** An aggregate relationship */
  sent_requests_aggregate: User_Sent_Friend_Requests_Aggregate;
  updated_at: Scalars['timestamp'];
};


/** columns and relationships of "users" */
export type UsersAll_DecksArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Deck_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Deck_Order_By>>;
  where?: InputMaybe<Campaign_Deck_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAll_Decks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Deck_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Deck_Order_By>>;
  where?: InputMaybe<Campaign_Deck_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCampaignsArgs = {
  distinct_on?: InputMaybe<Array<User_Campaigns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Campaigns_Order_By>>;
  where?: InputMaybe<User_Campaigns_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCampaigns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Campaigns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Campaigns_Order_By>>;
  where?: InputMaybe<User_Campaigns_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersDecksArgs = {
  distinct_on?: InputMaybe<Array<Latest_Decks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Latest_Decks_Order_By>>;
  where?: InputMaybe<Latest_Decks_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersDecks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Latest_Decks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Latest_Decks_Order_By>>;
  where?: InputMaybe<Latest_Decks_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFlagsArgs = {
  distinct_on?: InputMaybe<Array<User_Flag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Flag_Order_By>>;
  where?: InputMaybe<User_Flag_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFlags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Flag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Flag_Order_By>>;
  where?: InputMaybe<User_Flag_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFriendsArgs = {
  distinct_on?: InputMaybe<Array<User_Friends_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Friends_Order_By>>;
  where?: InputMaybe<User_Friends_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFriends_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Friends_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Friends_Order_By>>;
  where?: InputMaybe<User_Friends_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLocal_DecksArgs = {
  distinct_on?: InputMaybe<Array<Local_Decks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Local_Decks_Order_By>>;
  where?: InputMaybe<Local_Decks_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLocal_Decks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Local_Decks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Local_Decks_Order_By>>;
  where?: InputMaybe<Local_Decks_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersReceived_RequestsArgs = {
  distinct_on?: InputMaybe<Array<User_Received_Friend_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Received_Friend_Requests_Order_By>>;
  where?: InputMaybe<User_Received_Friend_Requests_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersReceived_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Received_Friend_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Received_Friend_Requests_Order_By>>;
  where?: InputMaybe<User_Received_Friend_Requests_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSent_RequestsArgs = {
  distinct_on?: InputMaybe<Array<User_Sent_Friend_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Sent_Friend_Requests_Order_By>>;
  where?: InputMaybe<User_Sent_Friend_Requests_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSent_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Sent_Friend_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Sent_Friend_Requests_Order_By>>;
  where?: InputMaybe<User_Sent_Friend_Requests_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  all_decks?: InputMaybe<Campaign_Deck_Bool_Exp>;
  all_decks_aggregate?: InputMaybe<Campaign_Deck_Aggregate_Bool_Exp>;
  campaigns?: InputMaybe<User_Campaigns_Bool_Exp>;
  campaigns_aggregate?: InputMaybe<User_Campaigns_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  decks?: InputMaybe<Latest_Decks_Bool_Exp>;
  decks_aggregate?: InputMaybe<Latest_Decks_Aggregate_Bool_Exp>;
  flags?: InputMaybe<User_Flag_Bool_Exp>;
  flags_aggregate?: InputMaybe<User_Flag_Aggregate_Bool_Exp>;
  friends?: InputMaybe<User_Friends_Bool_Exp>;
  friends_aggregate?: InputMaybe<User_Friends_Aggregate_Bool_Exp>;
  handle?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  local_decks?: InputMaybe<Local_Decks_Bool_Exp>;
  local_decks_aggregate?: InputMaybe<Local_Decks_Aggregate_Bool_Exp>;
  received_requests?: InputMaybe<User_Received_Friend_Requests_Bool_Exp>;
  received_requests_aggregate?: InputMaybe<User_Received_Friend_Requests_Aggregate_Bool_Exp>;
  sent_requests?: InputMaybe<User_Sent_Friend_Requests_Bool_Exp>;
  sent_requests_aggregate?: InputMaybe<User_Sent_Friend_Requests_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  all_decks?: InputMaybe<Campaign_Deck_Arr_Rel_Insert_Input>;
  campaigns?: InputMaybe<User_Campaigns_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  decks?: InputMaybe<Latest_Decks_Arr_Rel_Insert_Input>;
  flags?: InputMaybe<User_Flag_Arr_Rel_Insert_Input>;
  friends?: InputMaybe<User_Friends_Arr_Rel_Insert_Input>;
  handle?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  local_decks?: InputMaybe<Local_Decks_Arr_Rel_Insert_Input>;
  received_requests?: InputMaybe<User_Received_Friend_Requests_Arr_Rel_Insert_Input>;
  sent_requests?: InputMaybe<User_Sent_Friend_Requests_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  all_decks_aggregate?: InputMaybe<Campaign_Deck_Aggregate_Order_By>;
  campaigns_aggregate?: InputMaybe<User_Campaigns_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  decks_aggregate?: InputMaybe<Latest_Decks_Aggregate_Order_By>;
  flags_aggregate?: InputMaybe<User_Flag_Aggregate_Order_By>;
  friends_aggregate?: InputMaybe<User_Friends_Aggregate_Order_By>;
  handle?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  local_decks_aggregate?: InputMaybe<Local_Decks_Aggregate_Order_By>;
  received_requests_aggregate?: InputMaybe<User_Received_Friend_Requests_Aggregate_Order_By>;
  sent_requests_aggregate?: InputMaybe<User_Sent_Friend_Requests_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Handle = 'handle',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  handle?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  handle?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Handle = 'handle',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

export type CardFragment = { __typename?: 'rangers_card_localized', id?: string | null, name?: string | null, traits?: string | null, equip?: number | null, presence?: number | null, token_id?: string | null, token_name?: string | null, token_plurals?: string | null, token_count?: number | null, harm?: number | null, approach_conflict?: number | null, approach_reason?: number | null, approach_exploration?: number | null, approach_connection?: number | null, text?: string | null, set_id?: string | null, set_name?: string | null, set_type_id?: string | null, set_size?: number | null, set_type_name?: string | null, set_position?: number | null, quantity?: number | null, level?: number | null, type_id?: string | null, type_name?: string | null, cost?: number | null, aspect_id?: string | null, aspect_name?: string | null, aspect_short_name?: string | null, progress?: number | null };

export type AspectFragment = { __typename?: 'rangers_aspect_localized', id?: string | null, name?: string | null, short_name?: string | null };

export type GetCardsQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type GetCardsQuery = { __typename?: 'query_root', rangers_card_localized: Array<{ __typename?: 'rangers_card_localized', id?: string | null, name?: string | null, traits?: string | null, equip?: number | null, presence?: number | null, token_id?: string | null, token_name?: string | null, token_plurals?: string | null, token_count?: number | null, harm?: number | null, approach_conflict?: number | null, approach_reason?: number | null, approach_exploration?: number | null, approach_connection?: number | null, text?: string | null, set_id?: string | null, set_name?: string | null, set_type_id?: string | null, set_size?: number | null, set_type_name?: string | null, set_position?: number | null, quantity?: number | null, level?: number | null, type_id?: string | null, type_name?: string | null, cost?: number | null, aspect_id?: string | null, aspect_name?: string | null, aspect_short_name?: string | null, progress?: number | null }>, rangers_aspect_localized: Array<{ __typename?: 'rangers_aspect_localized', id?: string | null, name?: string | null, short_name?: string | null }> };

export const CardFragmentDoc = gql`
    fragment Card on rangers_card_localized {
  id
  name
  traits
  equip
  presence
  token_id
  token_name
  token_plurals
  token_count
  harm
  approach_conflict
  approach_reason
  approach_exploration
  approach_connection
  text
  set_id
  set_name
  set_type_id
  set_size
  set_type_name
  set_position
  quantity
  level
  type_id
  type_name
  cost
  aspect_id
  aspect_name
  aspect_short_name
  progress
}
    `;
export const AspectFragmentDoc = gql`
    fragment Aspect on rangers_aspect_localized {
  id
  name
  short_name
}
    `;
export const GetCardsDocument = gql`
    query getCards($locale: String!) {
  rangers_card_localized(where: {locale: {_eq: $locale}}) {
    ...Card
  }
  rangers_aspect_localized(where: {locale: {_eq: $locale}}) {
    ...Aspect
  }
}
    ${CardFragmentDoc}
${AspectFragmentDoc}`;

/**
 * __useGetCardsQuery__
 *
 * To run a query within a React component, call `useGetCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCardsQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetCardsQuery(baseOptions: Apollo.QueryHookOptions<GetCardsQuery, GetCardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCardsQuery, GetCardsQueryVariables>(GetCardsDocument, options);
      }
export function useGetCardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCardsQuery, GetCardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCardsQuery, GetCardsQueryVariables>(GetCardsDocument, options);
        }
export type GetCardsQueryHookResult = ReturnType<typeof useGetCardsQuery>;
export type GetCardsLazyQueryHookResult = ReturnType<typeof useGetCardsLazyQuery>;
export type GetCardsQueryResult = Apollo.QueryResult<GetCardsQuery, GetCardsQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    