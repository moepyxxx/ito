/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type CreateTorisan = {
  birth_date: Scalars['DateTime']['input'];
  food: TorisanFood;
  gender_type: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  nickname: Scalars['String']['input'];
  objective: TorisanObjective;
  specie_type: Scalars['Int']['input'];
  stage_type: Scalars['Int']['input'];
};

export type EditTorisan = {
  food: TorisanFood;
  objective: TorisanObjective;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTorisan: Torisan;
  editTorisan: Torisan;
  signout: Scalars['Boolean']['output'];
};


export type MutationCreateTorisanArgs = {
  torisan: CreateTorisan;
};


export type MutationEditTorisanArgs = {
  torisan: EditTorisan;
  torisanId: Scalars['Float']['input'];
};

export type Query = {
  __typename?: 'Query';
  torisan: Torisan;
  torisans: Array<TorisanBase>;
};


export type QueryTorisanArgs = {
  id: Scalars['Float']['input'];
};

/** 鳥さん詳細 */
export type Torisan = {
  __typename?: 'Torisan';
  birth_date: Scalars['DateTime']['output'];
  food: TorisanFoodObject;
  gender_type: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nickname: Scalars['String']['output'];
  objective: TorisanObjectiveObject;
  specie_type: Scalars['Int']['output'];
  stage_type: Scalars['Int']['output'];
};

/** 鳥さんベーシック */
export type TorisanBase = {
  __typename?: 'TorisanBase';
  birth_date: Scalars['DateTime']['output'];
  gender_type: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nickname: Scalars['String']['output'];
  specie_type: Scalars['Int']['output'];
  stage_type: Scalars['Int']['output'];
};

/** 鳥さんのごはん */
export type TorisanFood = {
  any_other_foods?: InputMaybe<Scalars['String']['input']>;
  any_staple_food?: InputMaybe<Scalars['String']['input']>;
  other_food_types: Array<Scalars['Int']['input']>;
  staple_food_type?: InputMaybe<Scalars['Int']['input']>;
};

/** 鳥さんのごはん */
export type TorisanFoodObject = {
  __typename?: 'TorisanFoodObject';
  any_other_foods?: Maybe<Scalars['String']['output']>;
  any_staple_food?: Maybe<Scalars['String']['output']>;
  other_food_types: Array<Scalars['Int']['output']>;
  staple_food_type?: Maybe<Scalars['Int']['output']>;
};

/** 鳥さんの目標 */
export type TorisanObjective = {
  amount_of_staple_food?: InputMaybe<Scalars['Float']['input']>;
  amount_of_water?: InputMaybe<Scalars['Float']['input']>;
  body_weight?: InputMaybe<Scalars['Float']['input']>;
};

/** 鳥さんの目標 */
export type TorisanObjectiveObject = {
  __typename?: 'TorisanObjectiveObject';
  amount_of_staple_food?: Maybe<Scalars['Float']['output']>;
  amount_of_water?: Maybe<Scalars['Float']['output']>;
  body_weight?: Maybe<Scalars['Float']['output']>;
};
