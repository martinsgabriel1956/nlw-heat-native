import styled from 'styled-components/native';
import { TouchableOpacity } from "react-native";

import { COLORS, FONTS } from '../../theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  height: 48px;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: ${getBottomSpace() + 32}px;
`;

export const Title = styled.Text`
  /* color: ${(props: any) => props.color}; */
`;

