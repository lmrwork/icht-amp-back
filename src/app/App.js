import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Blackboard from '../components/Blackboard';
//本地存储
import '../utils/storage';

/*App.css*/
import '../css/devices.css';
import 'normalize.css';
import '../../node_modules/hover.css/css/hover.css';
import 'react-tabs/style/react-tabs.css';

/*使用整理后的css*/
import '../css/App.css';
import '../css/form.css';
import '../css/widget/Amp.css';
import '../css/widget/Global.css';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Loading />
          <Header />
          <Blackboard />
        </div>
      </Provider>
    );
  }
}

export default App;
