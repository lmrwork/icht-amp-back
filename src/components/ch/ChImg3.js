import React, { PureComponent } from 'react';
import connect from '../../redux/connect';

@connect
class ChImg3 extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChImg3.formData;
    let img;
    if (this.props.amp) {
      img = <amp-img src={formData.imgSrc} width={formData.imgWidth} height={formData.imgHeight} alt={formData.imgAlt}></amp-img>;
    } else {
      img = <img src={formData.imgSrc} width={formData.imgWidth} height={formData.imgHeight} alt={formData.imgAlt}></img>;
    }
    return (
      <div className="ChImg3 my2 mx2 pt1 clearfix" onClick={this.props.onClick}> 
      { formData.href ? 
        <a className={`pt1 pSize${formData.size}`} data-href={formData.href}> 
          {img}
          {formData.title}
        </a> 
        : 
        <a className={`pt1 pSize${formData.size}`}> 
          {img} 
          {formData.title}
        </a>
      }
      </div>
    )
  }

}

export default ChImg3;