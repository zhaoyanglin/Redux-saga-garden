import React from 'react';
import Garden from './components/Garden/Garden';
import { connect } from 'react-redux';

import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>Welcome to your garden!</h1>
    </header>
    <Garden />
  </div>
);

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
