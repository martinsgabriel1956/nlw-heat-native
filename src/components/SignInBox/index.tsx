import React from "react";

import { Container, Title } from './styles';
import { COLORS } from "../../theme";

import { Button } from "../Button";
import { useAuth } from "../../contexts/auth";

export function SignInBox() {
  const { signIn, isSigningIn } = useAuth()

  return (
    <Container>
      <Button
        title="ENTRAR COM O GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading={isSigningIn}
      />
    </Container>
  )
}