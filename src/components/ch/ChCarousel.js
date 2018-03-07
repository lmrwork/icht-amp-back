import React, { PureComponent } from 'react';
import connect from '../../redux/connect';

@connect
class ChCarousel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 100
    }
  }

  prev = () => {
    if (this.state.count > 0)
      this.setState({count: this.state.count-1});
  }

  next = () => {
    this.setState({count: this.state.count+1});
  }

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChCarousel.formData;
    return (
      <div className="relative mb2">
        <div onClick={this.props.onClick} className="ChCarousel" width={formData.imgWidth} height={formData.imgHeight}>
          {formData.imgList ? formData.imgList.map( (v, id) => {
            if (v.href) {
              return <a key={id} data-href={v.href} className={(this.state.count%formData.imgList.length) === id ? null : 'hidden'}><img src={v.imgSrc} width={formData.imgWidth} height={formData.imgHeight} alt="test" /></a>;
            } else {
              return <img key={id} src={v.imgSrc} width={formData.imgWidth} height={formData.imgHeight} className={(this.state.count%formData.imgList.length) === id ? null : 'hidden'} alt="test" />;
            }
          }) : null}
        </div>
        <div className="ChCarouselPrev" onClick={this.prev}>&lt;</div>
        <div className="ChCarouselNext" onClick={this.next}>&gt;</div>
        <div className="ChCarouseCount">{this.state.count%formData.imgList.length + 1}</div>
      </div>
    )
  }

}

export default ChCarousel;