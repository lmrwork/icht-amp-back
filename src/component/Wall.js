import React, { PureComponent } from 'react';

import CardBox from './CardBox';

class Wall extends PureComponent {
  render() {
    return (
      <div className="flex flex-wrap">
        <div className="col-4 my3"><CardBox /></div>
        <div className="col-4 my3">预览框</div>
        <div className="col-4 my3">属性框</div>
      </div>
    );
  }
}

export default Wall;
