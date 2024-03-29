import styled from 'styled-components/native'
import Animated from 'react-native-reanimated';

export const CardContainer = styled(Animated.View)`
  align-items: center;
  margin-left: 4px;
  margin-right: 4px;
  margin-bottom: 8px;
  margin-top: 16px;
`;

export const CardImage = styled.Image`
  height: 250px;
  width: 180px;
  border-radius: 16px;
`;

export const CardText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #2C2E38;
  margin-top: 4px;
  margin-bottom: 4px;
`;