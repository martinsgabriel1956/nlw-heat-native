import React from 'react';
import { Image } from 'react-native'

import { Avatar, Container } from './styles';

import avatarImg from '../../assets/avatar.png'

import { UserPhotoProps } from './type';
import { SIZES } from './utils';

const IMAGE_DEFAULT = Image.resolveAssetSource(avatarImg).uri;

export function UserPhoto({ imageUri, sizes = 'NORMAL' }: UserPhotoProps) {
  const { avatarSize, containerSize } = SIZES[sizes];

  return (
    <Container 
      containerSize={containerSize}
    >
      <Avatar
        source={{ uri: imageUri || IMAGE_DEFAULT }}
        avatarSize={avatarSize}
      />
    </Container>
  )
}