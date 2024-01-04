import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ActivityIndicator, FlatList, Image } from 'react-native'

import { Button, CardCharacter, Loading } from '../../components'
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
  const [characters, setCharacters] = useState<Character[]>([]);

  const { data, loading, error } = useQuery<RickAndMortyApiResponse>(GetCharacters, {
    variables: {
      page
    }
  })
  
  useEffect(() => {
    if (data?.characters?.results) {
      setCharacters((prevCharacters) => [...prevCharacters, ...data.characters.results]);
    }
  }, [data]);

  const handleEndReached = () => setPage((prevPage) => prevPage + 1);

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff"}}>
      {loading ? (
        <Loading />
      ) : (
        <FlatList 
          style={{ alignSelf: "center", marginLeft: 8 }}
          numColumns={2}
          data={characters}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <CardCharacter {...item} /> }
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.1}
          ListFooterComponent={() =>
            loading ? <Loading /> : null
          }
        />
      ) }
    </View>
  )
}

export default Home