import React, { PureComponent } from 'react';
import connect from '../../redux/connect';
import ImgFix from '../ImgFix';

@connect
class ChTour extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChTour.formData;
    return (
      <div className="ChTour homeTours px2 my2" onClick={this.props.onClick}>
        <a data-href={formData.tourUrl}>
          <ImgFix formData={formData} amp={this.props.amp} layout={'responsive'}/>
        </a>
        <div className="tourPackage">
          <h3>{formData.tourTitle}</h3>
          {formData.tourCities ? <span className="destinations">{formData.tourCities}</span> : null}
          <p dangerouslySetInnerHTML={{__html: formData.tourDesc}}></p>
          <div className="viewDetail"><a data-href={formData.tourUrl}>{formData.tourBtn}</a></div>
        </div>
      </div>
    )
  }

}

export default ChTour;