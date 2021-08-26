// dependencies & libs
import styled      from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'


export const Container = styled.View`
  flex-direction  : row;
  align-items     : center;
`;

export const Photo = styled.Image`
  width  : ${RFValue(48)}px;
  height : ${RFValue(48)}px;

  border-radius : 10px;
`;

export const Info = styled.View`
  margin-left : 17px;
`;

export const Text = styled.Text`
  font-family : ${({theme}) => theme.fonts.regular};
  font-size   : ${RFValue(18)}px;

  color : ${({theme}) => theme.colors.shape};
`;

export const Username = styled.Text`
  font-family : ${({theme}) => theme.fonts.bold};
  font-size   : ${RFValue(18)}px;

  color : ${({theme}) => theme.colors.shape};
`;