import React, { PureComponent } from 'react';
import connect from '../../redux/connect';

@connect
class ChH3 extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChH3.formData;
    return (
      <h3 className="ChH3 h3 left-align px2" onClick={this.props.onClick}>
        { formData.h3Text}
      </h3>
    )
  }

}

export default ChH3;