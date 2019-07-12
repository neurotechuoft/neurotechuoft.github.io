import React from 'react';
import ReactDOM from 'react-dom';
import { LinksBar } from "./LinksBar";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LinksBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
