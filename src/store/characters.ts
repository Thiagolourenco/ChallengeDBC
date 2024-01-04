import { create } from "zustand";
import client from "../services/client";
import { gql } from "@apollo/client";

export interface Character {
  image: string;
  id: string;
  name: string;
}

interface CharactersData {
  results: Character[];
}

interface CharactersDataResponse {
  characters: CharactersData
}

type CharactersType = {
  data: Character[]
  loading: boolean
  page: number
  error: unknown
  fetchCharacters: () => void
}

const fetchData = async (page = 1) => {
  const { data, loading, error } = await client.query<CharactersDataResponse>({
    query: gql`
      query Characters($page: Int) {
        characters(page: $page) {
          results {
            image
            id
            name
          }
        }
      }
    `,
    variables: {
      page
    }
  });

  return { data, loading, error};
};

const useCharactersStore = create<CharactersType>(set => ({
  data: [],
  loading: true,
  error: null,
  page: 1,
  fetchCharacters: async () => {
    const { loading, error, data } = await fetchData(useCharactersStore.getState().page);

    set((state) => ({ 
      data: [...state.data, ...data.characters.results], 
      loading, 
      error,
      page: state.page++
    }))
  }
}))

export default useCharactersStore