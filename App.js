
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import UploadsPage from './UploadsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/uploads" component={UploadsPage} />
      </Switch>
    </Router>
  );
}

export default App;
    