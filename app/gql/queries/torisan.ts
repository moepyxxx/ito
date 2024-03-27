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
  query torisan($id: Float!) {
    torisan(id: $id) {
      id
      name
      nickname
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
