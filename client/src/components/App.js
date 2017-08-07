import React, { Component } from 'react';
import ConversationWindow from './ConversationWindow.js';
import ContactsWindow from './ContactsWindow.js';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }

  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Messenger for Roof AI</h2>
        </div>
        <div className="App-body">
          <div id="messageArea" className="row">
            <div className="row">
              <ContactsWindow />
              <ConversationWindow />
            </div>
          </div>
          <p className="App-intro">
            {this.state.fetching
                ? 'Fetching message from API'
                : this.state.message}
          </p>
        </div>
      </div>
    );
  }
}

export default App;