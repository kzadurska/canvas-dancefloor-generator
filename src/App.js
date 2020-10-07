import React, { useState, useEffect } from 'react';

import { GlobalStyles } from 'styles';
import { getDefaultGeneratorValues } from 'api';

import Dancefloor from 'components/Dancefloor';
import Header from 'components/Header';
import Loader from 'components/Loader';

export default function App() {
  const [columns, setColumns] = useState('');
  const [rows, setRows] = useState('');
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    getDefaultGeneratorValues().then(response => {
      setRows(response.rows);
      setColumns(response.columns);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <GlobalStyles />

      {isLoading && <Loader />}

      {!isLoading && (
        <main css="display: flex; flex-direction: column; align-items:center;">
          <Header onSubmit={handleSubmit} validationMessage={validationMessage} />

          <Dancefloor rows={rows} columns={columns} />
        </main>
      )}
    </>
  );
}
