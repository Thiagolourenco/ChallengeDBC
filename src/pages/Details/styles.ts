import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center; 
  background-color: #ffffff;
  flex: 1;
`;

export const Image = styled.Image`
  height: 300px;
  width: 300px;
  border-radius: 8px;
  margin-top: 16px;
`;

export const Content = styled.View`
  margin-top: 14px;
  margin-bottom: 18px;
`;

export const TextName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #2C2E38;
`;

export const TextInfo = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #2C2E38;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;