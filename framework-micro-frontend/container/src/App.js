import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
const MarketingAppLazy = lazy(() => import('./components/MarketingApp'));
const AuthAppLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'cont',
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signInUser = () => {
    setIsSignedIn(true);
  };

  const signOutUser = () => {
    setIsSignedIn(false);
  };

  return (
    <StylesProvider injectFirst generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header isSignedIn={isSignedIn} onSignOut={signOutUser} />
          <Suspense fallback={<ProgressBar />}>
            <Switch>
              <Route path="/auth" component={() => <AuthAppLazy onSignIn={signInUser} />} />
              <Route path="/" component={() => <MarketingAppLazy signedIn={isSignedIn} />} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  )
};
