import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { queries } from 'styles';

export default function Tile(props) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.fillStyle = 'red';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, []);

  return <Canvas ref={canvasRef} {...props} />;
}

const Canvas = styled.canvas`
  border: 1px solid black;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

//   @media ${queries.desktop} {
//     width: 150px;
//     height: 150px;
//   }
`;
