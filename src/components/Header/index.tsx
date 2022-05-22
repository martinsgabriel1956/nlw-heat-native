import React from "react";

import { Container, LogoutText, LogoutButton } from './styles';

import LogoSvg from '../../assets/logo.svg'
import { TouchableOpacity } from "react-native";
import { UserPhoto } from "../UserPhoto";
import { useAuth } from "../../contexts/auth";

export function Header() {
  const { user, signOut } = useAuth();
  return (
    <Container>
      <LogoSvg />

      <LogoutButton>
        {user &&
          <TouchableOpacity onPress={signOut}>
            <LogoutText>Sair</LogoutText>
          </TouchableOpacity>
        }
        <UserPhoto imageUri={user?.avatar_url} />
      </LogoutButton>
    </Container>
  )
}