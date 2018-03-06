import React, { PureComponent } from 'react';
import connect from '../../redux/connect';
import ImgFix from '../ImgFix';
import UlFix from '../UlFix';

@connect
class ChTour2 extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChTour2.formData;
    return (
      <div className="ChTour2 homeTours px2 my2" onClick={this.props.onClick}>
        <div className="PopCity">
          <a data-href={formData.imgTitleHref} rel="nofollow">
            <ImgFix formData={formData} amp={this.props.amp} layout={'responsive'} className="img-responsive img-rounded"/>
          </a> 
          <span className="CityName">
            <a data-href={formData.imgTitleHref}>{formData.imgTitle}</a>
          </span> 
          { formData.imgTitleSmall ? <span className="CityTag">{formData.imgTitleSmall}</span> : null }
          <div className="CityTour">
            <UlFix formData={formData}/>
          </div>
        </div>
      </div>
    )
  }

}

export default ChTour2;