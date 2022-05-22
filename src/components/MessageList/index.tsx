import React, { useEffect, useState } from "react";
import { io } from 'socket.io-client';

import { Container } from './styles'

import { api } from "../../services/api";

import { MessageProps } from "../../../utils/messagePropsType";

import { Message } from "../Message";
import { MESSAGES_EXAMPLE } from "../../../utils/messages";

let MessageQueue: MessageProps[] = MESSAGES_EXAMPLE;

const socket = io(String(api.defaults.baseURL));

socket.on('new_message', newMessage => {
  MessageQueue.push(newMessage);
  console.log(newMessage);
})

export function MessageList() {
  const [currentMessage, setCurrentMessage] = useState<MessageProps[]>([]);

  useEffect(() => {
    (async function fetchMessages() {
      const messagesResponse = await api.get<MessageProps[]>('/messages/last3');

      setCurrentMessage(messagesResponse.data);
    })();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if(MessageQueue.length > 0) {
        setCurrentMessage(prevState => [MessageQueue[0], prevState[0], prevState[1]]);
        MessageQueue.shift();
      }

      return () => clearInterval(timer);
    }, 3000)
  }, [])

  return (
    <Container>
      {currentMessage.map(message => <Message data={message} key={message.id} />
      )}
    </Container>
  );
}