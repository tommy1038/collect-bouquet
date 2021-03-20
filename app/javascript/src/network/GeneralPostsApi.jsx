import axios from 'axios';
import { useState, useEffect } from 'react';

export const GeneralPostsApi = () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    axios
      .get('/api/s3')
      .then((response) => {
        console.log(response.data);
        setstate(response.data.posts);
      })
      .catch((error) => {
        console.log({ error });
        console.log('ERROR!! occurred in Backend.');
      });
  }, []);

  return state;
};
