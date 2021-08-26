// dependencies
import { FlatList }              from 'react-native';
import styled                    from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { getBottomSpace }        from 'react-native-iphone-x-helper';

interface TransactionProps {
  id        : string,
  title     : string;
  amount    : string;
  category  : {
    name : string;
    icon : string;
  };
  createdAt : string;
  type      : 'income' | 'outcome'
}

export const Container = styled.View`
  padding    : 0 ${RFValue(24)}px;
  margin-top : ${RFPercentage(22)}px;
  flex       : 1;
`;

export const Title = styled.Text`
  margin-bottom : ${RFValue(16)}px;
  font-family   : ${({theme}) => theme.fonts.regular};
  font-size     : ${RFValue(18)}px;
`;

export const List = styled(FlatList as new () => FlatList<TransactionProps> ).attrs({
  showsVerticalScrollIndicator : false,
  contentContainerStyle        : { paddingBottom: getBottomSpace()}
})``;