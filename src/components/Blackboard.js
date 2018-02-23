import React, {PureComponent} from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import connect from '../redux/connect';
import QRCode from 'qrcode.react';
import CardBox from './CardBox';
import FrameBox from './FrameBox';
import PropBox from './PropBox';
import Saving from './Saving';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/javascript/javascript.js';
import {UnControlled as CodeMirror} from 'react-codemirror2';
import pretty from 'pretty';

@connect
class Blackboard extends PureComponent {

  componentWillMount() {
    //动态加载所有部件样式
    const csskey = Object.keys(this.props.state.propConf);
    csskey.forEach( i => {
      try {
        require(`../css/widget/${i}.css`);
      } catch (e) { /* console.log(e); */ }
    });
  }

  render() {
    let showQr = null;
    if (this.props.state.qrCode && this.props.state.qrCode.succ) {
      showQr =  this.props.state.qrCode.succ;
    }
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className="relative" id="Blackboard">
          <div className="flex flex-wrap" style={{minHeight:'60em'}}>
            <div className="col-4 my3 relative"><CardBox /></div>
            <div className="col-4 my3 relative"><FrameBox /></div>
            <div className="col-4 my3 relative"><PropBox /></div>
          </div>
          <div className="flex flex-wrap coldarea">
            <div className="col-12">
              <p># 点击iPhone的 "Home" 生成AMP（用手机扫描二维码测试）</p>
              <div className="QRCode">
                { showQr ? 
                <div>
                  <QRCode value={showQr} />
                  <p><a href={showQr} target="_blank"> {showQr} </a></p>
                  <Saving />
                </div> 
                : null }
              </div>

            </div>
            <div className="col-6 my3">
              <CodeMirror className="codemirror"
                value={pretty(this.props.state.html)}
                options={{
                  mode: 'xml',
                  theme: 'material',
                  lineNumbers: true,
                  lineWrapping: true,
                  readOnly: true
                }}
                onChange={(editor, value) => {}}
              />
            </div>
            <div className="col-6 my3">
              <CodeMirror className="codemirror"
                value={this.props.state.json}
                options={{
                  mode: 'javascript',
                  theme: 'material',
                  lineNumbers: true,
                  lineWrapping: true,
                  readOnly: true
                }}
                onChange={(editor, value) => {}}
              />
            </div>
          </div>
        </div>
      </DragDropContextProvider>
    )
  }
}

export default Blackboard;
