import React, { useState } from 'react';
import styled from 'styled-components';
import useDimensions from 'react-use-dimensions';

import { GlobalStyles, queries } from 'styles';

import Tile from 'components/Tile';

export default function App() {
  // TODO: Get values "asynchronously"
  const [columns] = useState(4);
  const [rows] = useState(3);
  const [ref, { width }] = useDimensions();

  function getTileSize() {
    // Subtract 2px per element to make them all fit, otherwise they wrap
    return width ? Math.floor(width / columns) - 2 : 0;
  }

  function getSingleRow() {
    const elements = new Array(columns);
    elements.fill(<Tile size={getTileSize()} />);

    return elements;
  }

  function getRows() {
    const elements = new Array(rows);
    elements.fill(<TilesRow size={getTileSize()}>{getSingleRow().map(elem => elem)}</TilesRow>);

    return elements;
  }

  return (
    <>
      <GlobalStyles />

      <div css="display: flex; flex-direction: column; align-items:center;">
        <h1>Hello</h1>

        <Dancefloor ref={ref}>{getRows()}</Dancefloor>
      </div>
    </>
  );
}

const Dancefloor = styled.div`
  background: white;
  width: 100%;

  @media ${queries.mobile} {
    margin: 8px;
  }

  @media ${queries.desktop} {
    width: 50%;
  }
`;

const TilesRow = styled.div`
  height: ${({ size }) => size}px;
`;
