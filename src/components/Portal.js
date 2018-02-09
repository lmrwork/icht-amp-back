import React, {PureComponent} from 'react';
import connect from '../redux/connect';

@connect
class Portal extends PureComponent {
  render() {
    return (
      <div>test</div>
    );
  }
}

export default Portal;
