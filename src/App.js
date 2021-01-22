import React from 'react';
import './App.css';

import { AEMText } from './components/Text';

const App = () => {
  return (
    <div className="App">
      <AEMText pagePath="/content/editorxpdevelopment/us/en" itemPath="/root/responsivegrid/text"/>
    </div>
  );
}

export default App;
