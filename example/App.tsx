import * as React from 'react';
import { useState } from 'react'
import Alert from '../.'

const App = () => {
  const [show, setShow] = useState<boolean>(false)
  const [type, setType] = useState('error')

  //console.log(show)

  return (
    <div style={{ padding: 10 }}>
      <button style={{ marginBottom: 10 }} onClick={() => setShow(!show)}>
        show Alert
      </button>
      <button
        style={{ marginBottom: 10 }}
        onClick={() => setType(type === 'success' ? 'error' : 'success')}
      >
        Change To {type === 'error' ? 'success' : 'error'}
      </button>
      <div style={{ width: 400 }}>
        <Alert
          type={type as any}
          message='Create React Library Example 😄'
          show={show}
          onHide={() => setShow(false)}
        />
        <Alert
          type={'success'}
          message='Create React Library Example 😄'
          show={show}
          onHide={() => setShow(false)}
        />
        <Alert
          type={'warning'}
          message='Create React Library Example 😄'
          show={show}
          onHide={() => setShow(false)}
        />
        <Alert
          type={'dark'}
          message='Create React Library Example 😄'
          show={show}
          customIcon={() => <p>MEKSI</p>}
          onHide={() => setShow(false)}
        />
        <Alert
          // type={undefined as any}
          transitionTime={1000}
          message='Create React Library Example 😄'
          show={show}
          onHide={() => setShow(false)}
        />
      </div>
    </div>
  )
}

export default App
