import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, Alert, Accordion, Rundown } from '../.';

const App = () => {
  return (
    <div>
      <Accordion items={[{content: "Tes", title:"Tes"}]}/>
      <Button>Tes</Button>
      <Rundown 
        dataRundown={[
          { event: 'Registrasi Peserta', timeStart: '12.45', timeEnd: '13.00' },
        ]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
