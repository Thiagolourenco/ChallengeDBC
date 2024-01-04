import styled from 'styled-components/native'

export const CardContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 1
})`
  align-items: center;
  margin-left: 4px;
  margin-right: 4px;
  margin-bottom: 8px;
  margin-top: 16px;
`;

export const CardImage = styled.Image`
  height: 250;
  width: 180;
  border-radius: 16px;
`;

export const CardText = styled.Text`
  font-size: 16;
  font-weight: 600;
  color: #2C2E38;
  margin-top: 4px;
  margin-bottom: 4px;
`;