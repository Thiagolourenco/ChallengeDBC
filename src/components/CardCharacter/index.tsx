import React from 'react'

import { CardContainer, CardImage, CardText  } from './styles'
import Button from '../Button'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouterListTypes } from '../../@types'
import { Character } from '../../store/characters'

const CardCharacter = (item: Character) => {
  const { navigate } = useNavigation<NativeStackNavigationProp<RouterListTypes, 'Details'>>()

  return (
    <CardContainer onPress={() => navigate("Details", { id: item.id })}>
      <CardImage source={{ uri: item.image }} />
      <CardText>{item.name}</CardText>

      <Button text='Ver detalhes' onPress={() => navigate('Details', { id: item.id  })}/>
      
    </CardContainer>
  )
}

export default CardCharacter