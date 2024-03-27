import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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

export type Mutation = {
  __typename?: 'Mutation';
  createTorisan: Torisan;
  signout: Scalars['Boolean']['output'];
};


export type MutationCreateTorisanArgs = {
  torisan: CreateTorisan;
};

export type Query = {
  __typename?: 'Query';
  torisans: Array<Scalars['Int']['output']>;
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateTorisan: CreateTorisan;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Torisan: ResolverTypeWrapper<Torisan>;
  TorisanFood: TorisanFood;
  TorisanFoodObject: ResolverTypeWrapper<TorisanFoodObject>;
  TorisanObjective: TorisanObjective;
  TorisanObjectiveObject: ResolverTypeWrapper<TorisanObjectiveObject>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  CreateTorisan: CreateTorisan;
  DateTime: Scalars['DateTime']['output'];
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  Torisan: Torisan;
  TorisanFood: TorisanFood;
  TorisanFoodObject: TorisanFoodObject;
  TorisanObjective: TorisanObjective;
  TorisanObjectiveObject: TorisanObjectiveObject;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createTorisan?: Resolver<ResolversTypes['Torisan'], ParentType, ContextType, RequireFields<MutationCreateTorisanArgs, 'torisan'>>;
  signout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  torisans?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type TorisanResolvers<ContextType = any, ParentType extends ResolversParentTypes['Torisan'] = ResolversParentTypes['Torisan']> = {
  birth_date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  food?: Resolver<ResolversTypes['TorisanFoodObject'], ParentType, ContextType>;
  gender_type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nickname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  objective?: Resolver<ResolversTypes['TorisanObjectiveObject'], ParentType, ContextType>;
  specie_type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stage_type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TorisanFoodObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['TorisanFoodObject'] = ResolversParentTypes['TorisanFoodObject']> = {
  any_other_foods?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  any_staple_food?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  other_food_types?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  staple_food_type?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TorisanObjectiveObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['TorisanObjectiveObject'] = ResolversParentTypes['TorisanObjectiveObject']> = {
  amount_of_staple_food?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount_of_water?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  body_weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Torisan?: TorisanResolvers<ContextType>;
  TorisanFoodObject?: TorisanFoodObjectResolvers<ContextType>;
  TorisanObjectiveObject?: TorisanObjectiveObjectResolvers<ContextType>;
};

