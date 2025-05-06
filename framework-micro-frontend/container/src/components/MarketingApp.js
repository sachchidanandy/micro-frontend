import React, { useEffect, useRef } from 'react';

import { mount } from 'marketing/MarketingApp';

export default function MarketingApp() {
  const marketingContainer = useRef(null);

  useEffect(() => {
    mount(marketingContainer.current);
  }, []);

  return <div ref={marketingContainer} />
}
