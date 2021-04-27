import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, Loader } from '../.';

const App = () => {
  return (
    <div>
      <Button type="primary">Testing</Button>
      <Loader visible />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
