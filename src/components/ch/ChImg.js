import React, { PureComponent } from 'react';
import connect from '../../redux/connect';

@connect
class ChImg extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChImg.formData;
    let img;
    if (this.props.amp) {
      img = <amp-img src={formData.imgSrc} width={formData.imgWidth} height={formData.imgHeight} layout="responsive" alt={formData.imgAlt} class="rounded"></amp-img>;
    } else {
      img = <img src={formData.imgSrc} width={formData.imgWidth} height={formData.imgHeight} layout="responsive" alt={formData.imgAlt} class="rounded"></img>;
    }
    return (
      <div onClick={this.props.onClick} className="ChImg px2 mx1">
      	{ formData.href && formData.href !== '#' ? 
        	<a data-href={formData.href} className="block">
            {img}
        	</a>
      	 : img
      	}
        { formData.title ? <div className={`pt1 ${formData.align} ${formData.titleStyle}`}>{formData.title}</div> : null }
      </div>
    )
  }

}

export default ChImg;