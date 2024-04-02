import { gql } from "@apollo/client";

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

export const TORISAN = gql`
  query Torisan($id: Float!) {
    torisan(id: $id) {
      id
      name
      nickname
      birth_date
      specie_type
      stage_type
      gender_type
      objective {
        body_weight
        amount_of_water
        amount_of_staple_food
      }
      food {
        staple_food_type
        any_staple_food
        any_other_foods
        other_food_types
      }
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
