import React, { lazy, Suspense } from 'react';
import Page from 'src/components/Page';

const Content = lazy(() => import('./Content.mdx'));

const EnvironmentVariablesView = () => {
  return (
    <Page title="Environment Variables">
      <Suspense fallback={null}>
        <Content />
      </Suspense>
    </Page>
  );
};

export default EnvironmentVariablesView;
