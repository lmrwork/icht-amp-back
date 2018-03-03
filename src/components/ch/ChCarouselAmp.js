import React, { PureComponent } from 'react';
import connect from '../../redux/connect';

@connect
class ChCarousel extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChCarousel.formData;
    return (
      <div onClick={this.props.onClick} className="ChCarousel mb2">
      	<amp-carousel layout="responsive" width={formData.imgWidth} height={formData.imgHeight} type="slides" autoplay="autoplay" delay="3000" loop="loop">
          {formData.imgList ? formData.imgList.map( (v, id) => {
            if (v.href) {
              return <a key={id} data-href={v.href}><amp-img src={v.imgSrc} width={formData.imgWidth} height={formData.imgHeight}></amp-img></a>;
            } else {
              return <amp-img key={id} src={v.imgSrc} width={formData.imgWidth} height={formData.imgHeight}></amp-img>;
            }
          }) : null}
        </amp-carousel>
      </div>
    )
  }

}

export default ChCarousel;