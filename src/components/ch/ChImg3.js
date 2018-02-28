import React, { PureComponent } from 'react';
import connect from '../../redux/connect';
import ImgFix from '../ImgFix';

@connect
class ChImg3 extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChImg3.formData;
    return (
      <div className="ChImg3 mx2 my2 pt1 clearfix" onClick={this.props.onClick}> 
      { formData.href ? 
        <a className={`pt1 pSize${formData.size}`} data-href={formData.href}> 
          <ImgFix formData={formData} amp={this.props.amp} />
          {formData.title}
        </a> 
        : 
        <a className={`pt1 pSize${formData.size}`}> 
          <ImgFix formData={formData} amp={this.props.amp} layout={false}/>
          {formData.title}
        </a>
      }
      </div>
    )
  }

}

export default ChImg3;