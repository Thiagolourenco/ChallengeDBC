import { useQuery } from '@apollo/client'
import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image } from 'react-native'

import { GetCharactersID } from '../../graphql'
import { Character } from '../Home'
import { Loading } from '../../components'

const Details = () => {
  const { params } = useRoute()

  console.log("params", params)
  const { data, loading, error} = useQuery<any>(GetCharactersID, { variables: {characterId: String(params.id)}})
 
  console.log("DAta", data)
  console.log("ERrro",error)
  return (
    <View style={{  alignItems: "center", backgroundColor: "#ffffff", flex: 1}}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Image source={{ uri: data?.character.image}} style={{ height: 300, width: 300, borderRadius: 8, marginTop: 16 }}  />
          <Text>{data?.character.name}</Text>
          <Text>Localização: {data?.character.location.name}</Text>
          <Text>status: {data?.character.status}</Text>
          <Text>espécie: {data?.character.species}</Text>
          <Text>Total de Epísodios: {data?.character.episode.length}</Text>
        </>
      )}
 
    </View>
  )
}

export default Details