export interface Characters {
  image: string;
  id: string;
  name: string;
}

export interface CharactersData {
  results: Characters[];
}

export interface CharactersDataResponse {
  characters: CharactersData
}
