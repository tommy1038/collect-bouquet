import React from 'react';
import ReactDOM from 'react-dom';

import { Secret } from '../src/pages/Secret';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Secret/>,
    document.getElementById('react-entries')
  );
});
