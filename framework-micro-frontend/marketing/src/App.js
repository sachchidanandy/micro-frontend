import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default () => {
  return (
    <div>
      <StylesProvider injectFirst>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  )
};
