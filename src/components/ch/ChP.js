import React, { PureComponent } from 'react';
import connect from '../../redux/connect';

@connect
class ChP extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChP.formData;
    return (
      <p className={"ChP px2 "+formData.pAlign} onClick={this.props.onClick} dangerouslySetInnerHTML={{__html: formData.pText}}></p>
    )
  }

}

export default ChP;