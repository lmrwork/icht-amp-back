import React, { PureComponent } from 'react';
import connect from '../../redux/connect';

@connect
class ChA extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChA.formData;
    return (
      <a data-href={formData.aHref} className={"ChA block px2 py1 " + formData.aAlign} onClick={this.props.onClick}>{formData.aText}</a>
    )
  }

}

export default ChA;