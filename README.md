# alert-reactjs

> Alert For ReactJs

[![NPM](https://img.shields.io/npm/v/alert-reactjs.svg)](https://www.npmjs.com/package/alert-reactjs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```cmd
yarn add https://github.com/meksiabdou/alert-reactjs#v2
```
## Props

| Property | Type   | default |
| -------- | ------ | ------------|
| show     | boolean | false
| type     | 'success' or 'error' or 'warning' or 'dark' | success |
| message  | string |  null |
| customIcon     | void | 	N/A
| transitionTime     | number (ms) | 250
| onHide   | function |  N/A |

## Usage

```tsx
import React, { useState } from 'react'

import Alert from 'alert-reactjs'
import 'alert-reactjs/dist/index.css'

const Home = () => {
  const [show, setShow] = useState(false)
  const [type, setType] = useState('success')

  return (
    <Alert
      type={type}
      message='Create React Library Example 😄'
      show={show}
      onHide={() => setShow(false)}
    />
  )
}
```

## ScreensShot
![Upload Tab](docs/screenshot.jpg)

## License

MIT © [meksiabdou](https://github.com/meksiabdou)
