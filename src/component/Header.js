import React, { PureComponent } from 'react';
import logo from '../svg/logo.svg';

class Header extends PureComponent {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    );
  }
}

export default Header;
