import React, { lazy, Suspense } from 'react';
import Page from 'src/components/Page';

const Content = lazy(() => import('./Content.mdx'));

const ThemingView = () => {
  return (
    <Page title="Theming">
      <Suspense fallback={null}>
        <Content />
      </Suspense>
    </Page>
  );
};

export default ThemingView;
