import { throttle } from 'lodash';
import React, { useEffect } from 'react';

import { ImageItem } from '../components/ImageItem';
import { SecretPostsApi } from '../network/SecretPostsApi';

export const Secret = () => {
  const [posts, setPage] = SecretPostsApi();

  const handleScroll = throttle(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    setPage((prev) => prev + 1);
  }, 200);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>{posts && posts.map((post) => <ImageItem key={post.key} {...post} />)}</>
  );
};
