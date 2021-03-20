import React from 'react';

import { ImageItem } from '../components/ImageItem';
import { GeneralPostsApi } from '../network/GeneralPostsApi';

export const Top = () => {
  const posts = GeneralPostsApi();
  return (
    <>
      {posts.map((post, index) => (
        <ImageItem key={index} image={post.image} />
      ))}
    </>
  );
};
