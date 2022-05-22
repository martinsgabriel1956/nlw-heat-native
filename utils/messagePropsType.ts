export interface MessageProps {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}