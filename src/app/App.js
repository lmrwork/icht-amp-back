import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import Header from '../components/Header';
import Blackboard from '../components/Blackboard';
//本地存储
import '../utils/storage';

import '../css/devices.css';
import 'normalize.css';
import '../../node_modules/hover.css/css/hover.css';
import 'react-tabs/style/react-tabs.css';

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
        </div>
      </Provider>
    );
  }
}

export default App;
