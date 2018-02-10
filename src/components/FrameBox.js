import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import connect from '../redux/connect';

import Drop from './Drop';
import Sort from './Sort';

import ChBanner from './ch/ChBanner';
import ChHead from './ch/ChHead';
import ChP from './ch/ChP';
import ChImg from './ch/ChImg';
import ChA from './ch/ChA';
import ChUl from './ch/ChUl';

@connect
class FrameBox extends PureComponent {

  componentWillMount() {
    if (this.props.state.dropItems.length === 0) {
      this.props.state.dropItems.push(
        {
          template: 'ChBanner',
          formData:this.props.state.propConf.ChBanner.formData
        }
      );
    }
    return true;
  }

  click = (el, idx) => {
    this.props.prop_item(idx);
  }

  update_html = () => {
    if (this.refs.phone) {
      const allNode = findDOMNode(this.refs.phone).querySelectorAll('[draggable]');
      let allNodeText = '';
      allNode.forEach( v => allNodeText += v.innerHTML);
      this.props.update_html(allNodeText);
    }
  } 

  moveCard = (dragIndex, hoverIndex) => {
    //TODO:Sort
    this.props.sort_item(dragIndex+1, hoverIndex+1);
  }

  render() {
    return (
      <div className="FrameBox mx-auto relative">
        <div className="iPhone8Btn hvr-border-fade" onClick={this.update_html}></div>
        <Drop name="FrameDrop" accepts="DnD">
          <div className="iPhone8" ref="phone">
            {
              this.props.state.dropItems.map((el, idx) => {
                let show;
                switch (el.template) {
                  case 'ChBanner':
                    show = <ChBanner key={idx} index={idx} onClick={() => {}} form_data={el.formData}/>;
                    break;
                  case 'ChHead':
                    show = <Sort key={idx} index={idx} id={idx} moveCard={this.moveCard} prop_item={this.props.prop_item} save_history={this.props.save_history}><ChHead onClick={() => this.click(el, idx)} form_data={el.formData}/></Sort>;
                    break;
                  case 'ChP':
                    show = <Sort key={idx} index={idx} id={idx} moveCard={this.moveCard} prop_item={this.props.prop_item} save_history={this.props.save_history}><ChP  onClick={() => this.click(el, idx)} form_data={el.formData}/></Sort>;
                    break;
                  case 'ChImg':
                    show = <Sort key={idx} index={idx} id={idx} moveCard={this.moveCard} prop_item={this.props.prop_item} save_history={this.props.save_history}><ChImg  onClick={() => this.click(el, idx)} form_data={el.formData}/></Sort>;
                    break;
                  case 'ChA':
                    show = <Sort key={idx} index={idx} id={idx} moveCard={this.moveCard} prop_item={this.props.prop_item} save_history={this.props.save_history}><ChA  onClick={() => this.click(el, idx)} form_data={el.formData}/></Sort>;
                    break;
                  case 'ChUl':
                    show = <Sort key={idx} index={idx} id={idx} moveCard={this.moveCard} prop_item={this.props.prop_item} save_history={this.props.save_history}><ChUl  onClick={() => this.click(el, idx)} form_data={el.formData}/></Sort>;
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
