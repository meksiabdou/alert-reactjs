import * as React from 'react';

interface IProps {
  style: any;
}

function SvgErrorcheckmarkcircle(props: IProps) {
  return (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g data-name={1}>
        <path d="M257 461.46c-114 0-206.73-92.74-206.73-206.73S143 48 257 48s206.73 92.74 206.73 206.73S371 461.46 257 461.46zM257 78c-97.45 0-176.73 79.28-176.73 176.73S159.55 431.46 257 431.46s176.73-79.28 176.73-176.73S354.45 78 257 78z" />
        <path d="M342.92 358a15 15 0 01-10.61-4.39L160.47 181.76a15 15 0 1121.21-21.21L353.53 332.4a15 15 0 01-10.61 25.6z" />
        <path d="M171.07 358a15 15 0 01-10.6-25.6l171.84-171.85a15 15 0 0121.22 21.21L181.68 353.61a15 15 0 01-10.61 4.39z" />
      </g>
    </svg>
  );
}

export default SvgErrorcheckmarkcircle;
