import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getBaseColor, getActiveColor } from 'utils';

export default function Tile(props) {
  let canvas = null;
  const canvasRef = useRef(null);
  const [fillColor, setFillColor] = useState(getBaseColor());

  // TODO: Rename??
  function handleMouseOver() {
    setFillColor(getActiveColor());
  }

  function handleMouseOut() {
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
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onTouchStart={handleMouseOver}
      onTouchEnd={handleMouseOut}
      {...props}
    />
  );
}

const Canvas = styled.canvas`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
