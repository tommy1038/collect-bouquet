import React, {useEffect} from 'react';
import { throttle } from 'lodash';

import { ImageItem } from '../components/ImageItem';
import { GeneralPostsApi } from '../network/GeneralPostsApi';

export const Top = () => {
  const [posts, setPage] = GeneralPostsApi();

  // 一番下に到達したら setPageNumber でページを更新
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {posts && posts.map((post) => (
        <ImageItem key={post.image} image={post.image} />
      ))}
    </>
  );
};
