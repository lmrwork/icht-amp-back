import React, { PureComponent } from 'react';
import connect from '../../redux/connect';

@connect
class ChTour extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChTour.formData;
    return (
      <div className="homeTours px2 pb2 pt1" onClick={this.props.onClick}>
        <a data-href="/tour/cht-63/"><amp-img src="https://data.chinahighlights.com/amp-img/homepage/great-wall.jpg" alt="The Great Wall of China" layout="responsive" width="500" height="320"></amp-img></a>
        <div className="tourPackage">
          <h3>Classic Wonders - 11 Days </h3>
          <span className="destinations">Beijing - Xi'an - Guilin/Yangshuo -  Shanghai</span>
          <p>Enjoy China’s classic scenery in Guilin, as well as ancient culture in Beijing and Xi’an, and classy Shanghai, all in 11 days. </p>
          <div className="viewDetail"><a data-href="/tour/cht-63/">View Details</a></div>
        </div>
      </div>
    )
  }

}

export default ChTour;