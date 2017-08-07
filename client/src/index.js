import React from 'react';
import { render } from 'react-dom';
import App from './App.js';
import './index.css';
import ConversationWindow from './components/ConversationWindow.js';

render(
  <ConversationWindow />,
  document.getElementById('root')
);
