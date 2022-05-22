import React from "react";

import { UserPhoto } from "../UserPhoto";

import { Container, Footer, MessageText, Username } from './styles'
import { MessageProps } from "./types";

export function Message(data: MessageProps) {
  const { data: {
    text, user: {
      name,
      avatar_url
    }
  }} = data;

  return (
    <Container>
      <MessageText>{text}</MessageText>

      <Footer>
        <UserPhoto
          imageUri={avatar_url}
          sizes='SMALL'
        />

        <Username>
          {name}
        </Username>
      </Footer>
    </Container>
  );
}