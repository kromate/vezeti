import React, { lazy, Suspense } from 'react';
import Page from 'src/components/Page';

const Content = lazy(() => import('./Content.mdx'));

const SettingsView = () => {
  return (
    <Page title="Settings">
      <Suspense fallback={null}>
        <Content />
      </Suspense>
    </Page>
  );
};

export default SettingsView;
