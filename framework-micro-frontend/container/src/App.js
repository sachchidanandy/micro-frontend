import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
const MarketingAppLazy = lazy(() => import('./components/MarketingApp'));
const AuthAppLazy = lazy(() => import('./components/AuthApp'));
const DashboardAppLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'cont',
});

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signInUser = () => {
    setIsSignedIn(true);
  };

  const signOutUser = () => {
    setIsSignedIn(false);
  };

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  return (
    <StylesProvider injectFirst generateClassName={generateClassName}>
      <Router history={history}>
        <div>
          <Header isSignedIn={isSignedIn} onSignOut={signOutUser} />
          <Suspense fallback={<ProgressBar />}>
            <Switch>
              <Route path="/auth" component={() => <AuthAppLazy onSignIn={signInUser} />} />
              <Route path="/dashboard" component={() => <DashboardAppLazy />} />
              <Route path="/" component={() => <MarketingAppLazy signedIn={isSignedIn} />} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </StylesProvider>
  )
};
