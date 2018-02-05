import React, { PureComponent } from 'react';
import connect from '../redux/connect';

import Drop from './Drop';
import Sort from './Sort';

import ChBanner from './ch/ChBanner';
import ChH1 from './ch/ChH1';
import ChH2 from './ch/ChH2';
import ChP from './ch/ChP';

@connect
class FrameBox extends PureComponent {

  click = (el, idx) => {
    this.props.prop_item(idx);
  }

  moveCard = (dragIndex, hoverIndex) => {
    //TODO:Sort
    this.props.sort_item(dragIndex+1, hoverIndex+1);
  }

  render() {
    return (
      <div className="FrameBox mx-auto relative">
        <Drop name="FrameDrop" accepts="DnD">
          <div className="iPhone8">
            {
              this.props.state.dropItems.map((el, idx) => {
                let show;
                switch (el.template) {
                  case 'ChBanner':
                    show = <Sort key={idx} index={idx} id={idx} moveCard={this.moveCard} prop_item={this.props.prop_item} className="bb"><ChBanner onClick={() => this.click(el, idx)} form_data={el.formData}/></Sort>;
                    break;
                  case 'ChH1':
                    show = <Sort key={idx} index={idx} id={idx} moveCard={this.moveCard} prop_item={this.props.prop_item} className="bb"><ChH1 onClick={() => this.click(el, idx)} form_data={el.formData}/></Sort>;
                    break;
                  case 'ChH2':
                    show = <Sort key={idx} index={idx} id={idx} moveCard={this.moveCard} prop_item={this.props.prop_item} className="bb"><ChH2  onClick={() => this.click(el, idx)} form_data={el.formData}/></Sort>;
                    break;
                  case 'ChP':
                    show = <Sort key={idx} index={idx} id={idx} moveCard={this.moveCard} prop_item={this.props.prop_item} className="bb"><ChP  onClick={() => this.click(el, idx)} form_data={el.formData}/></Sort>;
                    break;
                  default:
                    show = null;
                }
                return show;
              })
            }
          </div>
        </Drop>
        <div className="device device-iphone-8 device-gold device-pos">
          <div className="device-frame">
            <div className="device-content">
            </div>
          </div>
          <div className="device-stripe"></div>
          <div className="device-header"></div>
          <div className="device-sensors"></div>
          <div className="device-btns"></div>
          <div className="device-power"></div>
        </div>
      </div>
    );
  }
}

export default FrameBox;
