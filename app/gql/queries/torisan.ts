import { gql } from "@apollo/client";
import { Query, Torisan } from "../generated/client/graphql";

export type TORISANS_TYPE = Pick<Query, "torisans">;
export type SUMMARY_TORISAN = Pick<
  Torisan,
  "id" | "nickname" | "specie_type" | "stage_type"
>;
export const TORISANS = gql`
  query Torisans {
    torisans {
      id
      nickname
      specie_type
      stage_type
    }
  }
`;

export const CREATE_TORISAN = gql`
  mutation CreateTorisan($torisan: CreateTorisan!) {
    createTorisan(torisan: $torisan) {
      id
      nickname
    }
  }
`;
