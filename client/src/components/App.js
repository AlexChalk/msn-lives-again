import React from 'react';
import { Route } from 'react-router-dom';
import MessageWindowContainer from '../containers/MessageWindowContainer.js';
import ContactsWindowContainer from '../containers/ContactsWindowContainer.js';
import AddContactWindow from './AddContactWindow.js';
import './App.css';

class App extends React.Component {
  componentWillMount() {
    this.props.loadDatabase();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="Headline">Messenger for Roof AI</h2>
        </div>
        <div className="App-body">
          <div id="messageArea" className="row">
            <div className="row">
              <ContactsWindowContainer />
              <Route exact path="/" component={AddContactWindow} />
              <Route path="/conversations/:id" 
                component={MessageWindowContainer} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
