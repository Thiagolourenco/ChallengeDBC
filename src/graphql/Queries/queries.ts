import { gql } from '@apollo/client';

export const GetCharactersID = gql`
  query Character($characterId: ID!) {
    character(id: $characterId) {
      created
      episode {
        id
        name
      }
      gender
      image
      id
      location {
        name
      }
      name
      origin {
        id
        name
      }
      species
      type
      status
    }
  }
`;

export const GetCharacters = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      results {
        gender
        created
        image
        id
        name
        species
        status
        type
        location {
          id
          name
        }
        origin {
          id
          name
        }
      }
    }
  }
`;

