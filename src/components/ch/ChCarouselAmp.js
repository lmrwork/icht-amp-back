import React, { PureComponent } from 'react';
import connect from '../../redux/connect';

@connect
class ChCarousel extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChCarousel.formData;
    return (
      <div onClick={this.props.onClick} className="ChCarousel">
      	<amp-carousel layout="responsive" width={formData.imageWidth} height={formData.imageHeight} type="slides" autoplay="autoplay" delay="3000" loop="loop">
          {formData.imageList ? formData.imageList.map( (v, id) => {
            if (v.imgHref) {
              return <a key={id} data-href={v.imgHref}><amp-img src={v.imgSrc} width={formData.imageWidth} height={formData.imageHeight}></amp-img></a>;
            } else {
              return <amp-img key={id} src={v.imgSrc} width={formData.imageWidth} height={formData.imageHeight}></amp-img>;
            }
          }) : null}
        </amp-carousel>
      </div>
    )
  }

}

export default ChCarousel;