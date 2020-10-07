import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useDimensions from 'react-use-dimensions';

import { queries } from 'styles';

import Tile from 'components/Tile';

Dancefloor.propTypes = {
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
};

export default function Dancefloor({ rows, columns }) {
  const [ref, { width }] = useDimensions();

  function getTileSize() {
    // Subtract 2px per element to make them all fit, otherwise they wrap
    return width ? Math.floor(width / columns) - 2 : 0;
  }

  function getSingleRow() {
    const elements = new Array(Number(columns));
    elements.fill(<Tile size={getTileSize()} />);

    return elements;
  }

  function getRows() {
    const elements = new Array(Number(rows));
    elements.fill(<TilesRow size={getTileSize()}>{getSingleRow()}</TilesRow>);

    return elements;
  }

  return (
    <DancefloorWrapper ref={ref}>{getRows()}</DancefloorWrapper>

    // {/* <DancefloorWrapper ref={ref}>
    //   {arr.map(row => {
    //     return (
    //       <TilesRow key={row} size={getTileSize()}>
    //         {Array(columns).map(column => {
    //           return <Tile key={`${row}_${column}`} size={getTileSize()} />;
    //         })}

    //       </TilesRow>
    //     );
    //   })}
    // </DancefloorWrapper> */}
  );
}

const DancefloorWrapper = styled.section`
  background: white;
  width: 100%;
  margin-top: 32px;
  height: 100%;

  @media ${queries.mobile} {
    margin: 8px;
    margin-top: 16px;
  }

  @media ${queries.desktop} {
    width: 50%;
  }
`;

const TilesRow = styled.div`
  height: ${({ size }) => size}px;

  display: flex;
  justify-content: center;
`;
