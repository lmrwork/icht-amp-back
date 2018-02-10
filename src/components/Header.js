import React, {PureComponent} from 'react';
import connect from '../redux/connect';
import { slide as Menu } from 'react-burger-menu'

import logo from '../svg/logo.svg';
import history from '../svg/history.svg';

@connect
class Header extends PureComponent {

  render() {
    const histories = window.loadDropItems();
    return (
      <header className="App-header relative" id="appHeader">
        <img src={logo} className="App-logo" alt="logo" />
        <Menu pageWrapId={ "Blackboard" } outerContainerId={ "root" } customBurgerIcon={<img src={history} style={{height:'40px'}} alt="menu"/>} right width="auto">
        <div className="pb2">点击可以加载历史记录：（至多100条）</div>
        {
          histories ? histories.map( (i, n) => (
            <a key={i} id="home" className="menu-item py1 left-align" href="/#"> {`(${n+1}) ${i.time}`}</a>
          )) : null
        }
        </Menu>
      </header>
  )}

}

export default Header;

