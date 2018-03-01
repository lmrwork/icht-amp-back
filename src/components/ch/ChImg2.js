import React, { PureComponent } from 'react';
import connect from '../../redux/connect';
import ImgFix from '../ImgFix';
import {safeHref as safe} from '../../utils/safe';

@connect
class ChImg2 extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChImg2.formData;
    return (
      <div onClick={this.props.onClick} className="ChImg2 homeBrand mb1"> 
        <ImgFix formData={formData} amp={this.props.amp} layout={'responsive'}/>
        <span className={`pSize${formData.size}`} dangerouslySetInnerHTML={{__html:safe(formData.title)}}>
        </span>
      </div>
    )
  }

}

export default ChImg2;