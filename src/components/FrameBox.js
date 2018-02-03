import React, { PureComponent } from 'react';
import connect from '../redux/connect';
import Drop from './Drop';

@connect
class FrameBox extends PureComponent {

  constructor(props) {
    super(props);
    this.props.test1('ok???');
  }

  render() {
    return (
      <div className="FrameBox mx-auto">
        <Drop>
          <div className="iPhone8">
            xxxx
          </div>
        </Drop>
      </div>
    );
  }
}

export default FrameBox;
