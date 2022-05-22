import React from 'react';
import {  Text } from 'react-native';
import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { SendMessageForm } from '../../components/SendMessageForm';
import { SignInBox } from '../../components/SignInBox';
import { useAuth } from '../../contexts/auth';

import { Container } from './styles';


export function Home() {
  const {user} = useAuth();
  return (
    <Container>
      <Header />
      <MessageList />
      {user ? <SendMessageForm /> : <SignInBox />}
      
    </Container>
  )
}