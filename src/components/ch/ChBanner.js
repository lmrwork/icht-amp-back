import React, { PureComponent } from 'react';
import connect from '../../redux/connect';

@connect
class ChBanner extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChBanner.formData;
    return (
      <header className="ChBanner flex justify-start items-center pl2 ch-header" onClick={this.props.onClick}>
        <div role="button" aria-label="open sidebar" tabIndex="0" className="pr2 ch-header-menubar">☰</div>
        <div className="my0 mx-auto relative ch-header-banner"> CHINAHIGHLIGHTS<sup>®</sup> </div>
        <a className="text-decoration-none mr2 block ch-header-tailormade" data-href={formData.href}> {formData.text} </a>
      </header>
    )
  }

}

export default ChBanner;