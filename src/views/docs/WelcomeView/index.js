import React, { lazy, Suspense } from 'react';
import Page from 'src/components/Page';

const Content = lazy(() => import('./Content.mdx'));

const WelcomeView = () => {
  return (
    <Page title="Welcome">
      <Suspense fallback={null}>
        <Content />
      </Suspense>
    </Page>
  );
}

export default WelcomeView;
