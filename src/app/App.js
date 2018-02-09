import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import Header from '../components/Header';
import Blackboard from '../components/Blackboard';
import Portal from '../components/Portal';
//本地存储
import '../utils/logStorage';

import '../css/devices.css';
import 'normalize.css';
import '../../node_modules/hover.css/css/hover.css';

/*使用整理后的css*/
//import '../css/basscss.css=';
import '../css/amp.css';
import '../css/App.css';
import '../css/form.css';
import '../css/widget.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Blackboard />
          <Portal />
        </div>
      </Provider>
    );
  }
}

export default App;
