import React, { PureComponent } from 'react';
import connect from '../../redux/connect';

@connect
class ChImg extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChImg.formData;
    return (
      <div onClick={this.props.onClick} className="ChImg px2 py1">
      	{ formData.imgHref && formData.imgHref !== '#' ? 
      	<a data-href={formData.imgHref} class="block">
      		<amp-img src={formData.imgSrc} width={formData.imgWidth} height={formData.imgHeight} layout="responsive" alt={formData.imgAlt} class="rounded"></amp-img>
      	</a>  
      	:
      	<amp-img src={formData.imgSrc} width={formData.imgWidth} height={formData.imgHeight} layout="responsive" alt={formData.imgAlt} class="rounded"></amp-img>
      	}
        { formData.imgTitle ? <div className="center pt1">{formData.imgTitle}</div> : null }
      </div>
    )
  }

}

export default ChImg;