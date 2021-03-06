import React, { lazy, Suspense } from 'react';
import Page from 'src/components/Page';

const Content = lazy(() => import('./Content.mdx'));

const RoutingView = () => {
  return (
    <Page title="Routing">
      <Suspense fallback={null}>
        <Content />
      </Suspense>
    </Page>
  );
};

export default RoutingView;
