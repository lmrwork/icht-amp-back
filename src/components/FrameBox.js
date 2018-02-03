import React, { PureComponent } from 'react';
import connect from '../redux/connect';
import Drag from './Drag';

@connect
class FrameBox extends PureComponent {

  constructor(props) {
    super(props);
    this.props.test1('ok???');
  }

  render() {
    return (
      <div>
        <div className="FrameBox mx-auto py1">
        xxx
        </div>
      </div>
    );
  }
}

export default FrameBox;
