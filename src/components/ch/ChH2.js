import React, { PureComponent } from 'react';
import connect from '../../redux/connect';

@connect
class ChH2 extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChH2.formData;
    return (
      <h2 className="h2 left-align px2" onClick={this.props.onClick}>
        { formData.h2Text}
      </h2>
    )
  }

}

export default ChH2;