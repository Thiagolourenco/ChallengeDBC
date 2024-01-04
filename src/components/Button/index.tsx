import React from 'react'

import { ButtonView, ButtonViewText } from './styles'

interface IButton {
  text: string
  onPress: () => void
}

const Button = ({ text, onPress }: IButton) => {
  return (
    <ButtonView onPress={onPress}>
      <ButtonViewText>{text}</ButtonViewText>
    </ButtonView>
  )
}

export default Button