import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getBaseColor, getActiveColor } from 'utils';

export default function Tile(props) {
  let canvas = null;
  const canvasRef = useRef(null);
  const [fillColor, setFillColor] = useState(getBaseColor());

  function handleChangeColorToActive() {
    setFillColor(getActiveColor());
  }

  function handleChangeColorToBase() {
    setFillColor(getBaseColor());
  }

  useEffect(() => {
    canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.fillStyle = fillColor;
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, [fillColor]);

  return (
    <Canvas
      ref={canvasRef}
      onMouseOver={handleChangeColorToActive}
      onMouseOut={handleChangeColorToBase}
      onTouchStart={handleChangeColorToActive}
      onTouchEnd={handleChangeColorToBase}
      {...props}
    />
  );
}

const Canvas = styled.canvas`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
