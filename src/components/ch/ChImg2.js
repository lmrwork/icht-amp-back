import React, { PureComponent } from 'react';
import connect from '../../redux/connect';

@connect
class ChImg2 extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChImg2.formData;
    return (
      <div onClick={this.props.onClick} className="ChImg2 homeBrand pb1"> 
        <amp-img src={formData.imgSrc} layout="responsive" width={formData.imgWidth} height={formData.imgHeight} alt={formData.imgAlt}></amp-img>
        <span className={`pSize${formData.size}`} dangerouslySetInnerHTML={{__html:formData.title}}>
        </span>
      </div>
    )
  }

}

export default ChImg2;