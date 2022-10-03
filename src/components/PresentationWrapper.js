import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useDimensions from 'react-use-dimensions';

import { queries } from 'styles';

import Circle from './Circle';
import { getColorByIndex } from '../utils';

Wrapper.propTypes = {
  columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default function Wrapper({ columns }) {
  const [ref, { width }] = useDimensions();
  const columnNumber = [...Array(Number(columns)).keys()];

  const getFillColor = i => getColorByIndex(i);

  function getTileSize() {
    // Subtract 2px per element to make them all fit, otherwise they wrap
    return width ? Math.floor(width / columns) - 2 : 0;
  }

  return (
    <CircleWrapper ref={ref}>
      <div>
        <h2>Just some circles</h2>
        {columnNumber.map((element, index) => (
          <Circle size={getTileSize()} key={`column_${element}`} fillColor={getFillColor(index)} />
        ))}
      </div>
      <div>
        <h2>With opacity</h2>
        {columnNumber.map((element, index) => (
          <Circle size={getTileSize()} key={`column_${element}`} fillColor={getFillColor(index)} opacity={0.6} />
        ))}
      </div>
      <div>
        <h2>With more opacity</h2>
        {columnNumber.map((element, index) => (
          <Circle size={getTileSize()} key={`column_${element}`} fillColor={getFillColor(index)} opacity={0.3} />
        ))}
      </div>
      <div>
        <h2>With radial radient</h2>
        {columnNumber.map((element, index) => (
          <Circle size={getTileSize()} key={`column_${element}`} fillColor={getFillColor(index)} hasGradient />
        ))}
      </div>
      <div>
        <h2>Donut</h2>
        {columnNumber.map((element, index) => (
          <Circle size={getTileSize()} key={`column_${element}`} fillColor={getFillColor(index)} isDonut />
        ))}
      </div>
    </CircleWrapper>
  );
}

const CircleWrapper = styled.section`
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
