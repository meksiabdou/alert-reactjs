import * as React from 'react'

interface IProps {
  height?: number
  width?: number
  fill?: string
}

function SvgWarning(props: IProps) {
  return (
    <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g data-name='Layer 58' id='warning_svg__Layer_58'>
        <path
          className='warning_svg__cls-1'
          d='M16 26a2 2 0 112-2 2 2 0 01-2 2zm0-2zM16 20a1 1 0 01-1-1v-8a1 1 0 012 0v8a1 1 0 01-1 1z'
        />
        <path
          className='warning_svg__cls-1'
          d='M27.78 30H4.22a3.19 3.19 0 01-2.77-1.57 3.13 3.13 0 01-.06-3.13L13.17 3.67a3.23 3.23 0 015.66 0L30.61 25.3a3.13 3.13 0 01-.06 3.13A3.19 3.19 0 0127.78 30zM16 4a1.18 1.18 0 00-1.07.63L3.15 26.25a1.12 1.12 0 000 1.16 1.19 1.19 0 001 .59h23.63a1.19 1.19 0 001-.59 1.12 1.12 0 000-1.16L17.07 4.63A1.18 1.18 0 0016 4z'
        />
      </g>
    </svg>
  )
}

export default SvgWarning
