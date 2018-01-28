import React, { PureComponent } from 'react';

import Header from '../component/Header';
import Wall from '../component/Wall';

import 'normalize.css';
import '../css/basscss.css';
import '../css/App.css';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Header />
        <Wall />
      </div>
    );
  }
}

export default App;
