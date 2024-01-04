import React, { useState } from 'react'
import { View, Text, SafeAreaView, ActivityIndicator, FlatList, Image } from 'react-native'

import { Button, CardCharacter, Header, Loading } from '../../components'
import { useQuery } from '@apollo/client'
import { GetCharacters } from '../../graphql'

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
  image: string;
  id: string;
  name: string;
  species: string;
  status: string;
  type: string;
  location: Location;
  origin: Origin;
}

interface CharactersData {
  results: Character[];
}

interface RickAndMortyApiResponse {
  characters: CharactersData;
}


const Home = (): JSX.Element => {
  const [page, setPage] = useState<number>(1)

  const { data, loading, error } = useQuery<RickAndMortyApiResponse>(GetCharacters, {
    variables: {
      page
    }
  })

  return (
    <SafeAreaView>
      <Header title='Lista de Personagens' />

      {loading ? (
        <Loading />
      ) : (
        <FlatList 
          style={{ alignSelf: "center", marginLeft: 8 }}
          numColumns={2}
          data={data?.characters?.results}
          renderItem={({ item }) => <CardCharacter {...item} />}
        />
      ) }
    </SafeAreaView>
  )
}

export default Home