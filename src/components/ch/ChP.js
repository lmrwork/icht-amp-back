import React, { PureComponent } from 'react';
import connect from '../../redux/connect';

@connect
class ChP extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChP.formData;
    return (
      <p className="left-align px2" onClick={this.props.onClick}>
        { formData.pText }
      </p>
    )
  }

}

export default ChP;