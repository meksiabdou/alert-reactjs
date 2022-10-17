import * as React from 'react';

interface IProps {
  style: any;
}

function SvgSuccesscheckmarkcircle(props: IProps) {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M15.191 19.749a.997.997 0 01-.707-.293l-2.5-2.5a1 1 0 111.413-1.415l1.794 1.794 4.792-4.791a1 1 0 111.414 1.414l-5.499 5.498a.997.997 0 01-.707.293z" />
      <path d="M16 29C8.832 29 3 23.168 3 16S8.832 3 16 3s13 5.832 13 13-5.832 13-13 13zm0-24C9.935 5 5 9.935 5 16s4.935 11 11 11 11-4.935 11-11S22.065 5 16 5z" />
    </svg>
  );
}

export default SvgSuccesscheckmarkcircle;
