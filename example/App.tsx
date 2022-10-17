import * as React from 'react';
import { useState } from 'react';
import Alert, { AlertStyle } from '../.';

const App = () => {
  const [show, setShow] = useState<boolean>(false);
  const [type, setType] = useState('error');

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
      <div style={{ width: 600 }}>
        <Alert
          type={type as any}
          message={
            <span>
              A simple danger alert with an{' '}
              <a href="#" style={{ fontWeight: 700, color: 'inherit' }}>
                example link
              </a>
              . Give it a click if you like.
            </span>
          }
          show={show}
          onHide={() => setShow(false)}
        />
        <Alert
          type={'success'}
          message="Create React Library Example 😄"
          show={show}
          onHide={() => setShow(false)}
          alertStyle={{
            success: {
              alert: {
                borderTop: '2px solid rgb(4 108 78)',
                borderRadius: 0,
              },
            },
          } as AlertStyle}
        />
        <Alert
          type={'warning'}
          message="Create React Library Example 😄"
          show={show}
          onHide={() => setShow(false)}
        />
        <Alert
          type={'dark'}
          message="Create React Library Example 😄"
          show={show}
          onHide={() => setShow(false)}
        />
        <Alert
          type={'info'}
          transitionTime={1000}
          message="Create React Library Example 😄"
          show={show}
          onHide={() => setShow(false)}
        />
      </div>
    </div>
  );
};

export default App;
