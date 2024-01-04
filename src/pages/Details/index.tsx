import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import { Button, Loading, ViewError } from '../../components'
import useCharacterStore from '../../store/character'
import { RouterListTypes } from '../../@types'

import { Container, Image, Content, TextName, TextInfo, Row } from './styles'

type ProfileScreenRouteProp = RouteProp<RouterListTypes, 'Details'>;

const Details = () => {
  const { params } = useRoute<ProfileScreenRouteProp>()
  const { goBack } = useNavigation()

  const { data, error, fetchCharacter, loading } = useCharacterStore()
 
  useEffect(() => {
    fetchCharacter(String(params.id))
  }, [])


  if(error) {
    return <ViewError />
  }
  
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Image source={{ uri: data?.image }} />
          <Content>
            <TextName>{data?.name}</TextName>
            <TextInfo>Localização: {data?.location.name}</TextInfo>
            <Row>
              <TextInfo>Status: {data?.status} -- </TextInfo>
              <TextInfo>Espécie: {data?.species}</TextInfo>
            </Row>
          
            <TextInfo>Data de Criação {data?.created}</TextInfo>

            <TextInfo>Total de Epísodios: {data?.episode?.length}</TextInfo>
          </Content>
       
          <Button text='Voltar' onPress={() => goBack()} />
        </>
      )}
 
    </Container>
  )
}

export default Details