import React from 'react'

import { ButtonView, ButtonViewText } from './styles'

interface IButton {
  text: string
}

const Button = ({ text }: IButton) => {
  return (
    <ButtonView>
      <ButtonViewText>{text}</ButtonViewText>
    </ButtonView>
  )
}

export default Button