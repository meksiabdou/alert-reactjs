import { useState } from 'react'
import Alert from 'alert-reactjs'

const App = () => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <div style={{ padding: 10 }}>
      <button style={{ marginBottom: 10 }} onClick={() => setShow(true)}>
        show Alert
      </button>
      <Alert
        type={'error'}
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
        onHide={() => setShow(false)}
      />
    </div>
  )
}

export default App
