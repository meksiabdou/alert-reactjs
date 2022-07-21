# @meksiabdou/alert-reactjs

> Alert For ReactJs

![bundlephobia](https://badgen.net/bundlephobia/minzip/@meksiabdou/alert-reactjs)
![npm](https://badgen.net/npm/v/@meksiabdou/alert-reactjs)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![license](https://badgen.net/github/license/meksiabdou/alert-reactjs)
## Install

```cmd
yarn add @meksiabdou/alert-reactjs
```

```cmd
npm install @meksiabdou/alert-reactjs
```
## Props

| Property       | Type                                        | default |
| -------------- | ------------------------------------------- | ------- |
| show           | boolean                                     | false   |
| type           | 'success' or 'error' or 'warning' or 'dark' | success |
| message        | string                                      | null    |
| customIcon     | function                                    | N/A     |
| transitionTime | number (ms)                                 | 250     |
| onHide         | function                                    | N/A     |

## Usage

```tsx
import React, { useState } from 'react';

import Alert from 'alert-reactjs';
import 'alert-reactjs/dist/index.css';

const Home = () => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState('success');

  return (
    <Alert
      type={type}
      message="Create React Library Example 😄"
      show={show}
      onHide={() => setShow(false)}
    />
  );
};
```

## ScreensShot

![Upload Tab](docs/screenshot.jpg)

## License

MIT © [meksiabdou](https://github.com/meksiabdou)
