import React, { useState } from 'react';

import { GlobalStyles } from 'styles';

import Dancefloor from 'components/Dancefloor';
import Header from 'components/Header';

export default function App() {
  // TODO: Get values "asynchronously"
  const [columns, setColumns] = useState(4);
  const [rows, setRows] = useState(3);
  const [validationMessage, setValidationMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const { rowsNumber, columnsNumber } = event.target;

    if (!rowsNumber.value || !columnsNumber.value) {
      setValidationMessage('Inputs cannot be empty');
    } else {
      setValidationMessage('');

      setRows(rowsNumber.value);
      setColumns(columnsNumber.value);
    }
  }

  return (
    <>
      <GlobalStyles />

      <main css="display: flex; flex-direction: column; align-items:center;">
        <Header onSubmit={handleSubmit} validationMessage={validationMessage} />

        <Dancefloor rows={rows} columns={columns} />
      </main>
    </>
  );
}
