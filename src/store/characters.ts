import { create } from "zustand";
import client from "../services/client";
import { gql } from "@apollo/client";
import { CharactersDataResponse } from "../@types/characters";
import { CharactersType } from "../@types/store";

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