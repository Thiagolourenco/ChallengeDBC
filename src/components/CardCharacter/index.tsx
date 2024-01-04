import React from 'react'

import { Character } from '../../pages/Home'
import { CardContainer, CardImage, CardText  } from './styles'
import Button from '../Button'
import { useNavigation } from '@react-navigation/native'

const CardCharacter = (item: Character) => {
  const { navigate } = useNavigation()

  return (
    <CardContainer onPress={() => navigate("Details", { id: item.id })}>
      <CardImage source={{ uri: item.image }} />
      <CardText>{item.name}</CardText>

      <Button text='Ver detalhes' onPress={() => navigate('Details', { id: item.id  })}/>
      
    </CardContainer>
  )
}

export default CardCharacter