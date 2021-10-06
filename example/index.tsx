import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, Alert } from '../.';

const App = () => {
  return (
    <div>
      <Alert type="positive">tes</Alert>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
