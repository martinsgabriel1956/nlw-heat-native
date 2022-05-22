import React, { createContext, useContext, useEffect, useState } from "react";
import * as AuthSessions from 'expo-auth-session';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContextData, AuthorizationResponse, AuthProviderProps, AuthResponse, CLIENT_ID, SCOPE, User, TOKEN_STORAGE } from "./types";

import { api } from "../services/api";

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {

  const [isSigningIn, setIsSigningIn] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  async function signIn() {
    try {

      setIsSigningIn(true);

      const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`;

      const authSessionResponse = await AuthSessions.startAsync({
        authUrl
      }) as AuthorizationResponse;

      if (authSessionResponse.type === 'success' && authSessionResponse.params.error !== 'access_denied') {
        const authResponse = await api.post('/authenticate', {
          code: authSessionResponse.params.code,
        })

        const { user, token } = authResponse.data as AuthResponse;

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        await AsyncStorage.setItem(`${USER_STORAGE}`, JSON.stringify(user));
        await AsyncStorage.setItem(`${TOKEN_STORAGE}`, token);

        setUser(user);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsSigningIn(false);
    }
  }

  async function signOut() { 
    setUser(null);
    await AsyncStorage.removeItem(`${USER_STORAGE}`);
    await AsyncStorage.removeItem(`${TOKEN_STORAGE}`);
  }

  useEffect(() => {
    async function loadUserStorageData() {
      const userStorage = await AsyncStorage.getItem(`${USER_STORAGE}`);
      const tokenStorage = await AsyncStorage.getItem(`${TOKEN_STORAGE}`);

      if (userStorage && tokenStorage) {
        api.defaults.headers.common['Authorization'] = `Bearer ${tokenStorage}`;

        setUser(JSON.parse(userStorage));

      }

      setIsSigningIn(false);
    }

    loadUserStorageData();
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isSigningIn,
        signIn,
        signOut,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
function USER_STORAGE(USER_STORAGE: any) {
  throw new Error("Function not implemented.");
}

