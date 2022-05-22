import styled from 'styled-components/native';
import { MotiView } from 'moti';

import { COLORS, FONTS } from '../../theme';

export const Container = styled(MotiView).attrs({
  from: {
    opacity: 0,
    translateY: -50
  },
  animate: {
    opacity: 1,
    translateY: 0
  },
  transition: {
    type: "timing",
    duration: 700
  }
})`
  width: 100%;
  margin-bottom: 36px;
  `;
export const MessageText = styled.Text`
  font-size: 15px;
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.WHITE};
  line-height: 20px;
  margin-bottom: 12px;
  `;

export const Username = styled.Text`
  font-size: 15px;
  font-family: ${FONTS.REGULAR};
  color: ${COLORS.WHITE};
  margin-left: 16px;
`;
export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;
