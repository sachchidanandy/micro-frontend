import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import SignUp from './components/Signup';
import SignIn from './components/Signin';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider injectFirst generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/auth/signin" component={(props) => <SignIn onSignIn={onSignIn} {...props} />} />
            <Route exact path="/auth/signup" component={(props) => <SignUp onSignIn={onSignIn} {...props} />} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
};
