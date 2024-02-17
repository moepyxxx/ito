"use server";

import * as restc from "typed-rest-client/RestClient";
import { GenderType, StageType } from "../types";

const client = new restc.RestClient("vsts-node-api", "http://localhost:3000");

type TorisanBasic = {
  nickname: string;
  birth_date: string;
  species_id: number;
  gender_type: GenderType;
};

type TorisanObjective = {
  body_weight: number;
  amount_of_water: number;
};

type TorisanMeal = {
  staple_food_id: number;
  additional_food_ids: number[];
};

export type SummaryTorisan = {
  id: number;
  stage: StageType;
  basic: TorisanBasic;
};

/**
 * 鳥さんの一覧情報を見る
 */
export async function getSummaryTorisans() {
  return (await client.get<SummaryTorisan[]>("/a/torisans")).result;
}

export type TorisanSpecie = {
  id: number;
  name: string;
};

/**
 * 鳥さんの種類一覧を見る
 */
export async function getTorisanSpecies() {
  return (await client.get<TorisanSpecie[]>("/a/torisans/species")).result;
}

export type RegisterTorisan = {
  nickname: string;
  basic: TorisanBasic;
  objective: TorisanObjective;
  meal: TorisanMeal;
};

/**
 * 新しい鳥さんを登録する
 */
export async function registerTorisan(torisan: RegisterTorisan) {
  await client.create<SummaryTorisan>("/a/torisans", torisan);
}
