import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import Header from '../components/Header';
import Blackboard from '../components/Blackboard';

import '../css/devices.css';
import 'normalize.css';

/*使用整理后的css*/
//import '../css/basscss.css=';
import '../css/amp.css';

import '../css/App.css';
import '../css/form.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Blackboard />
        </div>
      </Provider>
    );
  }
}

export default App;
