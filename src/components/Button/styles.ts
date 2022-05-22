import styled from 'styled-components/native';
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'

import { COLORS, FONTS } from '../../theme';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${(props: any) => props.bgColor};
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  color: ${(props: any) => props.color};
  font-family: ${FONTS.BOLD};
  font-size: 14px;
`;

export const Icon = styled(AntDesign).attrs({
  size: 24
})`
  margin-right: 12px;
`;
