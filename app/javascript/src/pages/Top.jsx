import React, { useEffect } from 'react';
import { throttle } from 'lodash';

import { ImageItem } from '../components/ImageItem';
import { GeneralPostsApi } from '../network/GeneralPostsApi';

export const Top = () => {
  const [posts, setPage] = GeneralPostsApi();

  const handleScroll = throttle(() => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (
      window.innerHeight + scrollTop + 50 <
      document.documentElement.offsetHeight
    ) {
      return;
    }
    setPage((prev) => prev + 1);
  }, 500);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      {posts &&
        posts.map((post) => <ImageItem key={post.key} image={post.image} />)}
    </>
  );
};
