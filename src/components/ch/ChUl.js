import React, { PureComponent } from 'react';
import connect from '../../redux/connect';
import UlFix from '../UlFix';

@connect
class ChUl extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChUl.formData;
    return (
      <div className="ChUl px2 my2" onClick={this.props.onClick}>
        { formData.title ? <p>{formData.title}</p> : null }
        <UlFix className="list-reset" formData={formData}/>
      </div>
    )
  }

}

export default ChUl;