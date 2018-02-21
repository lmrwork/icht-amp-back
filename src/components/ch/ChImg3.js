import React, { PureComponent } from 'react';
import connect from '../../redux/connect';

@connect
class ChImg3 extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChImg3.formData;
    return (
      <div className="ChImg3 my1 mx2 pt1 clearfix" onClick={this.props.onClick}> 
        <a className={`pt1 pSize${formData.textSize}`} data-href="/tour/year.htm"> 
          <amp-img src="https://data.chinahighlights.com/image/homepage/plan-your-2018-china-tour.jpg" width={formData.imgWidth} height={formData.imgHeight} alt={formData.imgAlt}></amp-img> 
          {formData.imgTitle}
        </a> 
      </div>
    )
  }

}

export default ChImg3;