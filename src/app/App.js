import React, { PureComponent } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { allReducers } from '../redux/reducers/all';

import Header from '../components/Header';
import Wall from '../components/Wall';

import 'normalize.css';
import '../css/basscss.css';
import '../css/App.css';

//开发模式
const store = createStore(
  allReducers,
  //生成模式注释下行
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Wall />
        </div>
      </Provider>
    );
  }
}

export default App;
