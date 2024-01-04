import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

import Button from '../Button'
import { RouterListTypes } from '../../@types'

import { CardContainer, CardImage, CardText  } from './styles'
import { Characters } from '../../@types/characters'


const CardCharacter = (item: Characters) => {
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