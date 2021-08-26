// dependencies
import styled                    from 'styled-components/native';
import { Feather }               from '@expo/vector-icons';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

interface TransactionProps {
  type: 'income' | 'outcome'
}

export const Container = styled.View`
  margin-bottom : ${RFValue(16)}px;
  padding       : ${RFValue(17)}px ${RFValue(24)}px;
  background    : ${({theme}) => theme.colors.shape};
  border-radius : 5px;
`;

export const Title = styled.Text`
  font-family : ${({theme}) => theme.fonts.regular};
  font-size   : ${RFValue(14)}px;
`;

export const Amount = styled.Text<TransactionProps>`
  margin-top  : 2px;
  font-family : ${({theme}) => theme.fonts.regular};
  font-size   : ${RFValue(20)}px;
  color       : ${({theme, type}) => type === 'income' ? theme.colors.success : theme.colors.attention};
`;

export const Footer = styled.View`
  margin-top      : ${RFValue(19)}px;
  flex-direction  : row;
  justify-content : space-between;
  align-items     : center;
`;

export const Category = styled.View`
  flex-direction : row;
  align-items    : center;
`;

export const Icon = styled(Feather)`
  margin-right : 17px;
  font-size    : ${RFValue(20)}px;
  color        : ${({theme}) => theme.colors.text};
`;

export const CategoryName = styled.Text`
  font-size : ${RFValue(17)}px;
  color     : ${({theme}) => theme.colors.text};
`;

export const CreatedAt = styled.Text`
  font-size : ${RFValue(12)}px;
  color     : ${({theme}) => theme.colors.text};
`;
