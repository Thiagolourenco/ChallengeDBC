import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ActivityIndicator, FlatList, Image } from 'react-native'

import { Button, CardCharacter, Loading } from '../../components'
import { useQuery } from '@apollo/client'
import { GetCharacters } from '../../graphql'
import useCharactersStore from '../../store/characters'


const Home = (): JSX.Element => {
  const { fetchCharacters, data, loading, error } = useCharactersStore()
  
  useEffect(() => {
    fetchCharacters()
  }, [data]);

  const handleEndReached = () => fetchCharacters();

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff"}}>
      {loading ? (
        <Loading />
      ) : (
        <FlatList 
          style={{ alignSelf: "center", marginLeft: 8 }}
          numColumns={2}
          data={data}
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