import { create } from "zustand";
import { gql } from "@apollo/client";

import client from "../services/client";
import { RickAndMortyApiResponse } from "../@types/character";
import { CharacterType } from "../@types/store";

const fetchData = async (id: string) => {
  const { data, loading, error } = await client.query<RickAndMortyApiResponse>({
    query: gql`
       query Character($characterId: ID!) {
          character(id: $characterId) {
            created
            episode {
              id
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
    `,
    variables: {
      characterId: id
    }
  });

  return { data: data.character, loading, error};
};

const useCharacterStore = create<CharacterType>(set => ({
  data: null,
  loading: true,
  error: null,
  fetchCharacter: async (id) => {
    const { loading, error, data } = await fetchData(id);

    set(() => ({ 
      data, 
      loading, 
      error,
    }))
  }
}))

export default useCharacterStore