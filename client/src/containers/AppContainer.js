import { loadDatabase } from '../actions/actionCreators.js';
import { connect } from 'react-redux';
import App from '../components/App.js';

const mapDispatchToProps = (dispatch) => {
  return {
    loadDatabase: () => {
      dispatch(loadDatabase());
    }
  };
};

const AppContainer = connect(null, mapDispatchToProps)(App);
export default AppContainer;
