import React, { useEffect } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

import Button from '../Button'
import { RouterListTypes } from '../../@types'

import { CardContainer, CardImage, CardText  } from './styles'
import { Characters } from '../../@types/characters'
import { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'


const CardCharacter = (item: Characters) => {
  const { navigate } = useNavigation<NativeStackNavigationProp<RouterListTypes, 'Details'>>()

  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = 1;
  }, [opacity]);

  const styleViewCard = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {
        duration: 4000,
        easing: Easing.bezier(0.1, 0.1, 0.25, 1),
      }),
    };
  });
  
  return (
    <TouchableOpacity onPress={() => navigate("Details", { id: item.id })}>
      <CardContainer style={styleViewCard}>
        <CardImage source={{ uri: item.image }} />
        <CardText>{item.name}</CardText>

        <Button text='Ver detalhes' onPress={() => navigate('Details', { id: item.id  })}/>
        
      </CardContainer>
    </TouchableOpacity>
   
  )
}

export default CardCharacter