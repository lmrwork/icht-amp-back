import React, { PureComponent } from 'react';
import connect from '../../redux/connect';

@connect
class ChCarousel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  prev = () => {
    this.setState({count: this.state.count-1});
  }

  next = () => {
    this.setState({count: this.state.count+1});
  }

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChCarousel.formData;
    return (
      <div className="relative">
        <div onClick={this.props.onClick} className="ChCarousel">
          {formData.imageList ? formData.imageList.map( (v, id) => {
            if (v.imgHref) {
              return <a key={id} data-href={v.imgHref} className={(this.state.count%formData.imageList.length) === id ? null : 'hidden'}><img src={v.imgSrc} width="100%" alt="test" /></a>;
            } else {
              return <img key={id} src={v.imgSrc} width="100%" className={(this.state.count%formData.imageList.length) === id ? null : 'hidden'} alt="test" />;
            }
          }) : null}
        </div>
        <div className="ChCarouselPrev" onClick={this.prev}>&lt;</div>
        <div className="ChCarouselNext" onClick={this.next}>&gt;</div>
        <div className="ChCarouseCount">{this.state.count%formData.imageList.length + 1}</div>
      </div>
    )
  }

}

export default ChCarousel;