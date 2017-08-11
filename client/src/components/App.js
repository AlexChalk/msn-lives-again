import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import VisibleConversations from '../containers/VisibleConversations.js';
import ContactsWindow from './ContactsWindow.js';
import './App.css';

const App = () => ( 
  <div className="App">
    <div className="App-header">
      <h2 className="Headline">Messenger for Roof AI</h2>
    </div>
    <div className="App-body">
      <div id="messageArea" className="row">
        <div className="row">
          <ContactsWindow />
          <Route path="/conversations/:id" 
            component={VisibleConversations} />
        </div>
      </div>
    </div>
  </div>
);

export default App;
