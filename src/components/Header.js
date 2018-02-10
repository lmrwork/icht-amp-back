import React, {PureComponent} from 'react';
import connect from '../redux/connect';
import { slide as Menu } from 'react-burger-menu'

import logo from '../svg/logo.svg';
import history from '../svg/history.svg';

@connect
class Header extends PureComponent {

  onClick = (n) => {
    this.props.load_history(n);
  }

  render() {
    const histories = window.loadDropItems();
    return (
      <header className="App-header relative" id="appHeader">
        <img src={logo} className="App-logo" alt="logo" />
        <Menu pageWrapId={ "Blackboard" } outerContainerId={ "root" } customBurgerIcon={<img src={history} style={{height:'40px'}} alt="menu"/>} right width="auto">
        <div className="pb2">点击可以加载历史记录：（~5w字符）</div>
        {
          histories ? histories.map( (i, n) => (
            <a key={i} id="home" className="menu-item py1 left-align" onClick={() => this.onClick(n)} style={{cursor:'pointer'}}> {`（${n+1}）${i.time}`}</a>
          )) : null
        }
        </Menu>
      </header>
  )}

}

export default Header;

