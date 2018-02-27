import React, {PureComponent} from 'react';
import connect from '../redux/connect';
import { slide as Menu } from 'react-burger-menu'

import logo from '../svg/logo.svg';
import history from '../svg/history.svg';
import template from '../svg/all.svg';
import simple from '../redux/store/simple';

@connect
class Header extends PureComponent {

  history = (n) => {
    this.props.load_history(n);
  }

  simple = (n) => {
    if (simple[n]) {
      this.props.clear_dropitems();
      this.props.drop_item(
        {
          template: 'ChBanner',
          formData:this.props.state.propConf.ChBanner.formData
        }
      );
      this.props.load_items(simple[n].json);
    } else {
      alert('载入预置模板失败！');
    }
  }

  render() {
    const histories = window.loadDropItems();
    return (
      <header className="App-header relative" id="appHeader">
        <img src={logo} className="App-logo" alt="logo" />
        <Menu pageWrapId={ "Blackboard" } outerContainerId={ "root" } customBurgerIcon={<img src={history} style={{height:'40px'}} alt="menu"/>} right width="auto" burgerButtonClassName="histoyBtn">
          <div className="pb2">点击下方，加载历史记录：（约~200条）</div>
          {
            histories ? histories.map( (i, n) => (
              <a key={n} className="menu-item py1 left-align" onClick={() => this.history(n)} style={{cursor:'pointer'}}> 
              {`（${n+1}）${i.time} [操作: ${i.action}]`}
              </a>
            )) : null
          }
        </Menu>
        <Menu pageWrapId={ "Blackboard" } outerContainerId={ "root" } customBurgerIcon={<img src={template} style={{height:'40px'}} alt="menu"/>} right width="auto" burgerButtonClassName="simpleBtn">
          <div className="pb2">点击下方，加载预置模板</div>
          { simple.map( (i, n) => (
              <a key={n} className="menu-item py1 left-align" onClick={() => this.simple(n)} style={{cursor:'pointer'}}> 
              {`（${n+1}）${i.name}`}
              </a>
            ))
          }
        </Menu>
      </header>
  )}

}

export default Header;

