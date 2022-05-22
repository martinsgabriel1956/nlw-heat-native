import React, { useState } from "react";

import { COLORS } from "../../theme";
import { Container, Input } from './styles';

import { Button } from "../Button";
import { Alert, Keyboard } from "react-native";
import { api } from "../../services/api";

export function SendMessageForm() {
  const [message, setMessage] = useState("");
  const [seedingMessage, setSeedingMessage] = useState(false);

  async function handleMessageSubmit() {
    const messageFormatted = message.trim();
    
    if (messageFormatted.length > 0) {
      setSeedingMessage(true);
      await api.post('/messages', { 
        message: messageFormatted 
      });
      
      setMessage("");
      Keyboard.dismiss();
      setSeedingMessage(false);

      Alert.alert("Mensagem enviada com sucesso!");

    } else {
      Alert.alert("Por favor, digite uma mensagem");
    }
  }

  return (
    <Container>
      <Input
        onChangeText={setMessage}
        value={message}
        editable={!seedingMessage}
      />

      <Button 
        title="ENVIAR MENSAGEM"
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        isLoading={seedingMessage}
        onPress={handleMessageSubmit}
      />
    </Container>
  )
};