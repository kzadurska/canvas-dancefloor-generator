import React from 'react';
import { GlobalStyles } from 'styles';
import { Page, Header, Footer, Main, Banner, AnimatedSquare } from 'components/Layout';
import UsersTable from 'components/Table';

export default function App() {
  return (
    <>
      <GlobalStyles />

      <Page>
        <Header>A</Header>

        <Main>
          <div css=" display: flex; flex-direction: column; align-items: center; flex-grow: 1;">
            <Banner>
              <AnimatedSquare>E</AnimatedSquare>
            </Banner>

            <UsersTable css="margin: 32px;" />
          </div>
        </Main>

        <Footer>D</Footer>
      </Page>
    </>
  );
}
