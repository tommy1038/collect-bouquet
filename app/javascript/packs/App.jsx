import React from 'react';
import ReactDOM from 'react-dom';

import { Top } from '../src/pages/Top';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Top/>,
    document.getElementById('react-entries')
  );
});
