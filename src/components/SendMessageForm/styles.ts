import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { COLORS } from '../../theme';

export const Container = styled.View`
  width: 100%;
  height: 184px;
  background-color: ${COLORS.BLACK_TERTIARY};
  padding-bottom: ${getBottomSpace() + 16}px;
  padding-top: 16px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Input = styled.TextInput.attrs({
  keyboardAppearance: 'dark',
  placeholder: 'Qual a sua expectativa para o evento?',
  placeholderTextColor: COLORS.GRAY_PRIMARY,
  multiline: true,
  maxLength: 140
})`
  width: 100%;
  height: 88px;
  color: ${COLORS.WHITE};
  text-align-vertical: top;
`;