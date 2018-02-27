import React, { PureComponent } from 'react';
import connect from '../../redux/connect';

@connect
class ChImg2 extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChImg2.formData;
    let img;
    if (this.props.amp) {
      img = <amp-img src={formData.imgSrc} width={formData.imgWidth} height={formData.imgHeight} layout="responsive" alt={formData.imgAlt}></amp-img>;
    } else {
      img = <img src={formData.imgSrc} width={formData.imgWidth} height={formData.imgHeight} layout="responsive" alt={formData.imgAlt}></img>;
    }
    return (
      <div onClick={this.props.onClick} className="ChImg2 homeBrand mb1"> 
        {img}
        <span className={`pSize${formData.size}`} dangerouslySetInnerHTML={{__html:formData.title}}>
        </span>
      </div>
    )
  }

}

export default ChImg2;