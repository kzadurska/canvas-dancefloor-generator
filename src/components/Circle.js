import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

Circle.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  fillColor: PropTypes.string.isRequired,
  opacity: PropTypes.number,
  hasGradient: PropTypes.bool,
  isDonut: PropTypes.bool,
};

Circle.defaultProps = {
  opacity: 1,
  hasGradient: false,
  isDonut: false,
};

export default function Circle({ size, fillColor, opacity, hasGradient, isDonut }) {
  const halfSize = size / 2;
  let canvas = null;

  const canvasRef = useRef(null);

  useEffect(() => {
    canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.fillStyle = fillColor;
    context.beginPath();

    context.globalAlpha = opacity;
    context.arc(halfSize, halfSize, halfSize, 0, 2 * Math.PI);

    if (hasGradient) {
      const grd = context.createRadialGradient(halfSize, halfSize, 0, halfSize, halfSize, halfSize);
      grd.addColorStop(0, fillColor);
      grd.addColorStop(1, 'white');
      context.fillStyle = grd;
    }
    if (isDonut) {
      context.arc(halfSize, halfSize, halfSize / 2, 0, 2 * Math.PI);
    }

    if (isDonut) {
      context.fill('evenodd');
    } else {
      context.fill();
    }
  }, [fillColor, size]);

  return <canvas ref={canvasRef} width={size} height={size} />;
}
