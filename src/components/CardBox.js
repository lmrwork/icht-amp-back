import React, { PureComponent } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import connect from '../redux/connect';
import Drag from './Drag';

import ChHead from './ch/ChHead';
import ChP from './ch/ChP';
import ChImg from './ch/ChImg';
import ChA from './ch/ChA';
import ChUl from './ch/ChUl';

@connect
class CardBox extends PureComponent {
  render() {
    return (
      <div>
        <div className="CardBox mx-auto py1">
          <div className="flex flex-column">
            <div className="CardBoxTitle"> 部件仓库 </div>
            <div className="CardBoxItem mx2 mt1 mb2 p2 relative">
              {'拖拽部件到右侧iPhone，预览 -->>'}
            </div>
            <Tabs>
              <TabList>
                <Tab>常用部件</Tab>
                <Tab>可选部件</Tab>
              </TabList>

              <TabPanel>
                <div className="CardBoxItem mx2 my1 pt0 pb3 relative">
                  <Drag {...this.props} template="ChHead">
                    <ChHead />
                  </Drag>
                  <hr/>
                  <Drag {...this.props} template="ChP">
                    <ChP />
                  </Drag>
                  <hr/>
                  <Drag {...this.props} template="ChA">
                    <ChA />
                  </Drag>
                  <hr/>
                  <Drag {...this.props} template="ChUl">
                    <ChUl />
                  </Drag>
                  <hr/>
                  <Drag {...this.props} template="ChImg">
                    <ChImg />
                  </Drag>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="CardBoxItem mx2 my1 p2 relative">
                  TODO: 轮播图
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default CardBox;
