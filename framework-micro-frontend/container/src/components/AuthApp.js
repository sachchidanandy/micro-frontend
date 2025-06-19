import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'auth/AuthApp';

export default function AuthApp({ onSignIn }) {
  const authContainer = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigatin } = mount(authContainer.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        if (history.location.pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn,
    });

    history.listen(onParentNavigatin);
    onParentNavigatin(history.location);
  }, []);

  return <div ref={authContainer} />
}
