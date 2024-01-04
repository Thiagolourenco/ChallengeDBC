import { gql } from '@apollo/client';

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

