import React, { PureComponent } from 'react';
import connect from '../../redux/connect';
import ImgFix from '../ImgFix';

@connect
class ChImg extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChImg.formData;
    return (
      <div onClick={this.props.onClick} className="ChImg px2 my2">
      	{ formData.href && formData.href !== '#' ? 
        	<a data-href={formData.href} className="block">
            <ImgFix formData={formData} amp={this.props.amp} layout={'responsive'}/>
        	</a>
      	 :  <ImgFix formData={formData} amp={this.props.amp} layout={'responsive'}/>
      	}
        { formData.title ? <div className={`pt1 ${formData.align} ${formData.titleStyle}`}>{formData.title}</div> : null }
      </div>
    )
  }

}

export default ChImg;