import React from 'react';

import { ImageItem } from '../components/ImageItem';
import { SecretPostsApi } from '../network/SecretPostsApi';
export const Secret = () => {
  const posts = SecretPostsApi();
  return (
    <>
      {posts.map((post, index) => (
        <ImageItem key={index} {...post} />
      ))}
    </>
  );
};
