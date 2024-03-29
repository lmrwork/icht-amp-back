import React, { PureComponent } from 'react';
import connect from '../../redux/connect';
import ImgFix from '../ImgFix';
import {safeHref as safe} from '../../utils/safe';

@connect
class ChImg2 extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChImg2.formData;
    return (
      <div onClick={this.props.onClick} className="ChImg2 homeBrand mb2"> 
        <ImgFix formData={formData} amp={this.props.amp} layout={'responsive'}/>
        { formData.title ? <span className={`pSize${formData.size}`} dangerouslySetInnerHTML={{__html:safe(formData.title)}}>
        </span> : null }
      </div>
    )
  }

}

export default ChImg2;