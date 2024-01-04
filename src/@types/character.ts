
export interface Location {
  id: string;
  name: string;
}

export interface Origin {
  id: string | null;
  name: string;
}

export interface Character {
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

export interface RickAndMortyApiResponse {
  character: Character;
}
