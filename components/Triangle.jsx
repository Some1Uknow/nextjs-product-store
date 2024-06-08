import React from 'react';

const RightTriangleIcon = ({ size = 100, color = 'currentColor', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <polygon points="25,10 25,90 75,50" fill={color} />
  </svg>
);

export default RightTriangleIcon;
