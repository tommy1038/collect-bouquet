import axios from 'axios';
import { useState, useEffect } from 'react';

export const GeneralPostsApi = () => {
  const [state, setstate] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    axios
      .get('/api/s3', {
        params: {
          size: 10,
          offset: page * 10,
        },
      })
      .then((response) => {
        setstate((prev) => {
          const prevKeys = prev.map((prevPosts) => prevPosts.key);
          const post = response.data.posts.filter(
            (post) => !prevKeys.includes(post.key)
          );
          return prev.concat(post);
        });
      })
      .catch((error) => {
        console.log({ error });
        console.log('ERROR!! occurred in Backend.');
      });
  }, [page]);

  return [state, setPage];
};
