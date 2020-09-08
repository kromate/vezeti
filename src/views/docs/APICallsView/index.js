import React, { lazy, Suspense } from 'react';
import Page from 'src/components/Page';

const Content = lazy(() => import('./Content.mdx'));

const APICallsView = () => {
  return (
    <Page title="API Calls">
      <Suspense fallback={null}>
        <Content />
      </Suspense>
    </Page>
  );
};

export default APICallsView;
