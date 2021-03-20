import axios from 'axios';
import { useState, useEffect } from 'react';

export const GeneralPostsApi = () => {
  const [state, setstate] = useState();
  const [page, setPage] = useState(0);
  useEffect(() => {
    axios
      .get('/api/s3', {
        params: {
          size: 1,
          offset: page * 10,
        },
      })
      .then((response) => {
        console.log(response.data.posts);
        setstate(response.data.posts);
      })
      .catch((error) => {
        console.log({ error });
        console.log('ERROR!! occurred in Backend.');
      });
  }, [page]);

  return [state, setPage];
};
