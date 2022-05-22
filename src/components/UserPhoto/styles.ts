import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../theme";

export const Container = styled(LinearGradient).attrs({
  colors: [COLORS.PINK, COLORS.YELLOW],
  start: { x: 0, y: 0.8 },
  end: { x: 0.9, y: 1 },
})`
  justify-content: center;
  align-items: center;
  width: ${(props: { containerSize: number }) => props.containerSize}px;
  height: ${(props: { containerSize: number }) => props.containerSize}px;
  border-radius: ${(props: { containerSize: number }) => props.containerSize / 2}px;
  `;


export const Avatar = styled.Image`
  border-width: 4px;
  border-color: ${COLORS.BLACK_SECONDARY};
  border-style: solid;
  border-radius: ${(props: { avatarSize: number }) => props.avatarSize / 2}px;
  width: ${(props: { avatarSize: number }) => props.avatarSize}px;
  height: ${(props: { avatarSize: number }) => props.avatarSize}px;
`;

