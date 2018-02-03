import React, { Component } from 'react';
import connect from '../redux/connect';
import Drag from './Drag';

import ChBanner from './ch/ChBanner';
import ChH1 from './ch/ChH1';
import ChH2 from './ch/ChH2';

@connect
class CardBox extends Component {
  render() {
    return (
      <div>
        <div className="CardBox mx-auto py1">
          <div className="CardBoxTitle"> 常用部件 </div>
          <div className="flex flex-column">
            <div className="CardBoxItem mx2 my1 p2 relative">
              <Drag {...this.props} template="ChBanner">
                <ChBanner />
              </Drag>
              <hr/>
              <Drag {...this.props} template="ChH1">
                <ChH1 />
              </Drag>
              <hr/>
              <Drag {...this.props} template="ChH2">
                <ChH2 />
              </Drag>
              <hr/>
            </div>
            <div className="CardBoxItem mx2 my1 p2 relative">轮播图</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardBox;
