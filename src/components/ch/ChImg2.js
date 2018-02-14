import React, { PureComponent } from 'react';
import connect from '../../redux/connect';

@connect
class ChImg2 extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChImg2.formData;
    return (
      <div onClick={this.props.onClick} className="ChImg2 homeBrand py1"> 
        <amp-img src="//data.chinahighlights.com/amp-img/homepage/mobile-home-brand.jpg" layout="responsive" width={formData.imgWidth} height={formData.imgHeight} alt={formData.imgAlt}></amp-img>
        <span style={{fontSize: `${formData.textSize/10}rem`}}>{formData.imgTitle}</span>
      </div>
    )
  }

}

export default ChImg2;