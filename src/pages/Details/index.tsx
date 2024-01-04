import { useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'

import { Loading } from '../../components'
import useCharacterStore from '../../store/character'

const Details = () => {
  const { params } = useRoute()
  const { data, error, fetchCharacter, loading } = useCharacterStore()

  console.log("params", params)
 
  useEffect(() => {
    fetchCharacter(String(params.id))
  }, [])
  
  return (
    <View style={{  alignItems: "center", backgroundColor: "#ffffff", flex: 1}}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Image source={{ uri: data?.image}} style={{ height: 300, width: 300, borderRadius: 8, marginTop: 16 }}  />
          <Text>{data?.name}</Text>
          <Text>Localização: {data?.location.name}</Text>
          <Text>status: {data?.status}</Text>
          <Text>espécie: {data?.species}</Text>
          <Text>Total de Epísodios: {data?.episode.length}</Text>
        </>
      )}
 
    </View>
  )
}

export default Details