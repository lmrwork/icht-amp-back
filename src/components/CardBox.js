import React, { PureComponent } from 'react';
import connect from '../redux/connect';
import Drag from './Drag';

import ChBanner from './ch/ChBanner';
import ChH1 from './ch/ChH1';
import ChH2 from './ch/ChH2';
import ChP from './ch/ChP';

@connect
class CardBox extends PureComponent {
  render() {
    return (
      <div>
        <div className="CardBox mx-auto py1">
          <div className="flex flex-column">
            <div className="CardBoxTitle"> 常用部件 </div>
            <div className="CardBoxItem mx2 my1 p2 relative">
              <Drag {...this.props} template="ChBanner">
                <ChBanner form_data={this.props.state.propConf.ChBanner.formData}/>
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
              <Drag {...this.props} template="ChP">
                <ChP />
              </Drag>
            </div>
            <div className="CardBoxTitle"> 可选部件 </div>
            <div className="CardBoxItem mx2 my1 p2 relative">轮播图</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardBox;
