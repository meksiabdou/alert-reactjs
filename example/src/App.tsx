import { useState } from 'react'
import Alert from 'alert-reactjs'

const App = () => {
  const [show, setShow] = useState<boolean>(false)
  const [type, setType] = useState('error')

  console.log(show);
  
  return (
    <div style={{ padding: 10 }}>
      <button style={{ marginBottom: 10 }} onClick={() => setShow(!show)}>
        show Alert
      </button>
      <button style={{ marginBottom: 10 }} onClick={() => setType("ssss")}>
        Change To Success
      </button>
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
        onHide={() => setShow(false)}
      />
      <Alert
        type={undefined as any}
        message='Create React Library Example 😄'
        show={show}
        onHide={() => setShow(false)}
      />
    </div>
  )
}

export default App
