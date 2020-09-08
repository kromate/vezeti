import React, { lazy, Suspense } from 'react';
import Page from 'src/components/Page';

const Content = lazy(() => import('./Content.mdx'));

const StateManagementView = () => {
  return (
    <Page title="State Management">
      <Suspense fallback={null}>
        <Content />
      </Suspense>
    </Page>
  );
};

export default StateManagementView;
