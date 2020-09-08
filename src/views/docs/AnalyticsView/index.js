import React, { lazy, Suspense } from 'react';
import Page from 'src/components/Page';

const Content = lazy(() => import('./Content.mdx'));

const AnalyticsView = () => {
  return (
    <Page title="Analytics">
      <Suspense fallback={null}>
        <Content />
      </Suspense>
    </Page>
  );
};

export default AnalyticsView;
