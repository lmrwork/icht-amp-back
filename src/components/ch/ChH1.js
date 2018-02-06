import React, { PureComponent } from 'react';
import connect from '../../redux/connect';

@connect
class ChH1 extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChH1.formData;
    return (
      <h1 className="ChH1 h1 left-align px2" onClick={this.props.onClick}>
        { formData.h1Text}
      </h1>
    )
  }

}

export default ChH1;

