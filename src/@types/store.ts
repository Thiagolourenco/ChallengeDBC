import { Character } from "./character"
import { Characters } from "./characters"

export type CharactersType = {
  data: Characters[]
  loading: boolean
  page: number
  error: unknown
  fetchCharacters: () => void
}

export type CharacterType = {
  data: Character | null
  loading: boolean
  error: unknown
  fetchCharacter: (id: string) => void
}