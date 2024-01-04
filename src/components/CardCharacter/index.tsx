import React from 'react'

import { Character } from '../../pages/Home'
import { CardContainer, CardImage, CardText  } from './styles'
import Button from '../Button'

const CardCharacter = (item: Character) => {
  return (
    <CardContainer>
      <CardImage source={{ uri: item.image }} />
      <CardText>{item.name}</CardText>

      <Button text='Ver detalhes' />
      
    </CardContainer>
  )
}

export default CardCharacter