import React, { PureComponent } from 'react';

import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import Header from '../components/Header';
import Blackboard from '../components/Blackboard';

import 'normalize.css';
import '../css/basscss.css';
import '../css/App.css';

class App extends PureComponent {
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
