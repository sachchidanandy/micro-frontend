import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'marketing/MarketingApp';

export default function MarketingApp() {
  const marketingContainer = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigatin } = mount(marketingContainer.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigatin);
    onParentNavigatin(history.location);
  }, []);

  return <div ref={marketingContainer} />
}
