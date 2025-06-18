import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  const onParentNavigatin = ({ pathname: nextPathname }) => {
    const { pathname } = history.location;
    if (pathname !== nextPathname) {
      history.push(nextPathname);
    }
  };

  return { onParentNavigatin };
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-marketing-root');
  if (el) {
    mount(el, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
