import { create } from "zustand";
import client from "../services/client";
import { gql } from "@apollo/client";


interface Location {
  id: string;
  name: string;
}

interface Origin {
  id: string | null;
  name: string;
}

export interface Character {
  gender: string;
  created: string;
  episode: {
    id: number
  }[]
  image: string;
  id: string;
  name: string;
  species: string;
  status: string;
  type: string;
  location: Location;
  origin: Origin;
}

interface RickAndMortyApiResponse {
  character: Character;
}



type CharactersType = {
  data: Character | null
  loading: boolean
  error: unknown
  fetchCharacter: (id: string) => void
}

const fetchData = async (id: string) => {
  console.log("ID => ", id)
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

  console.log("DATA -====> ", data)
  return { data: data.character, loading, error};
};

const useCharacterStore = create<CharactersType>(set => ({
  data: null,
  loading: true,
  error: null,
  fetchCharacter: async (id) => {
    const { loading, error, data } = await fetchData(id);

    console.log("ERROR", error)
    set(() => ({ 
      data, 
      loading, 
      error,
    }))
  }
}))

export default useCharacterStore