import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useDimensions from 'react-use-dimensions';

import { queries } from 'styles';

import Tile from 'components/Tile';

Dancefloor.propTypes = {
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default function Dancefloor({ rows, columns }) {
  const [ref, { width }] = useDimensions();

  function getTileSize() {
    // Subtract 2px per element to make them all fit, otherwise they wrap
    return width ? Math.floor(width / columns) - 2 : 0;
  }

  function getSingleRow() {
    const elements = [...Array(Number(columns)).keys()];
    return elements.map(element => <Tile size={getTileSize()} key={`column_${element}`} />);
  }

  function getRows() {
    const elements = [...Array(Number(rows)).keys()];
    return elements.map(element => (
      <TilesRow size={getTileSize()} key={`row_${element}`}>
        {getSingleRow()}
      </TilesRow>
    ));
  }

  return <DancefloorWrapper ref={ref}>{getRows()}</DancefloorWrapper>;
}

const DancefloorWrapper = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 32px;

  @media ${queries.mobile} {
    margin: 8px;
    margin-top: 16px;
  }

  @media ${queries.desktop} {
    width: 50%;
  }
`;

const TilesRow = styled.div`
  display: flex;
  justify-content: center;

  height: ${({ size }) => size}px;
`;
