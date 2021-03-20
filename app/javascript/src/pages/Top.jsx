import React from 'react';

import { ImageItem } from '../components/ImageItem';
import { ImageItemCopy } from '../components/ImageItemCopy';
import { getImages } from '../network/Api';
export const Top = () => {
  const posts = getImages();
  return (
    <>
      {posts.map((post, index) => (
        <ImageItem key={index} image={post.image} />
      ))}
      <ImageItemCopy />
      <ImageItemCopy />
      <ImageItemCopy />
      <ImageItemCopy />
    </>
  );
};
