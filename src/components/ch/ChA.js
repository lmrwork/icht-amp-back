import React, { PureComponent } from 'react';
import connect from '../../redux/connect';

@connect
class ChA extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChA.formData;
    return (
      <a data-href={formData.href} className={`ChA block px2 py1 ${formData.align} pSize${formData.Size} ${formData.color}`} onClick={this.props.onClick}>{formData.text}</a>
    )
  }

}

export default ChA;