import React, { lazy, Suspense } from 'react';
import Page from 'src/components/Page';

const Content = lazy(() => import('./Content.mdx'));

const ChangelogView = () => {
  return (
    <Page title="Changelog">
      <Suspense fallback={null}>
        <Content />
      </Suspense>
    </Page>
  );
};

export default ChangelogView;