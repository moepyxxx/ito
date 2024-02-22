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
  gender_type: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  nickname: Scalars['String']['input'];
  specie_type: Scalars['Int']['input'];
  stage_type: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTorisan: Torisan;
};


export type MutationCreateTorisanArgs = {
  torisan: CreateTorisan;
};

export type Query = {
  __typename?: 'Query';
  summaryTorisans: Array<Torisan>;
  torisan: Torisan;
};


export type QueryTorisanArgs = {
  id: Scalars['Float']['input'];
};

/** 鳥さん詳細 */
export type Torisan = {
  __typename?: 'Torisan';
  birth_date: Scalars['DateTime']['output'];
  gender_type: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nickname: Scalars['String']['output'];
  specie_type: Scalars['Int']['output'];
  stage_type: Scalars['Int']['output'];
};
