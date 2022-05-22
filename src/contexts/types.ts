import { ReactNode } from "react";

export const CLIENT_ID = 'f922d10fc6c825e85498';
export const SCOPE = 'read:user';
export const USER_STORAGE = '@nlwheat:user'
export const TOKEN_STORAGE = '@nlwheat:token'

export interface User {
  id: string;
  name: string;
  avatar_url: string;
  login: string;
}

export interface AuthContextData {
  user: User | null;
  isSigningIn: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface AuthorizationResponse {
  params: {
    code?: string;
    error?: string;
  },
  type?: string;
}