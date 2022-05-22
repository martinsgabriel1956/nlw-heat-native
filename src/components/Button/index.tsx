import React from "react";
import { ActivityIndicator } from "react-native";

import { Container, Icon, Title } from './styles';
import { ButtonProps } from "./types";

export function Button({ backgroundColor, color, title, icon, isLoading = false, ...rest }: ButtonProps) {
  return (
    <Container
      bgColor={backgroundColor}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={color} />
      ) : (
        <>
          <Icon name={icon} />
          <Title color={color}>{title}</Title>
        </>
      )}
    </Container>
  )
}