// dependencies & libs
import styled                    from 'styled-components/native';
import { Feather }               from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight }    from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex : 1;

  background-color : ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  width  : 100%;
  height : ${RFPercentage(42)}px;

  justify-content : center;
  align-items     : center;

  background-color : ${({theme}) => theme.colors.primary};
`;

export const Wrapper = styled.View`
  width      : 100%;
  padding    : 0 24px;

  flex-direction  : row;
  justify-content : space-between;
  align-items     : center;
`;

export const Icon = styled(Feather)`
  font-size : ${RFValue(24)}px;

  color : ${({theme}) => theme.colors.secondary};
`;

export const CardContainer = styled.ScrollView.attrs({
  horizontal                     : true, 
  showsHorizontalScrollIndicator : false,
  contentContainerStyle          : { paddingHorizontal: 24 }
})`
  width      : 100%;
  position   : absolute;
  margin-top : ${RFPercentage(30)}px;
`;