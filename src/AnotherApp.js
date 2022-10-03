import React from 'react';

import { GlobalStyles } from 'styles';

import Wrapper from 'components/PresentationWrapper';

export default function App() {
  return (
    <>
      <GlobalStyles />

      <main css="display: flex; flex-direction: column; align-items:center;">
        <Wrapper rows={5} columns={8} />
      </main>
    </>
  );
}
