import React from 'react';
import ReactDOM from 'react-dom';
import { User } from './../../containers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<User />, div);
  ReactDOM.unmountComponentAtNode(div);
});
