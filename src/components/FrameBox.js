import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import Frame from 'react-frame-component';

import connect from '../redux/connect';
import refetch from '../utils/refetch';

import Drop from './Drop';
import Sort from './Sort';
import ChBanner from './ch/ChBanner';
import ChHead from './ch/ChHead';
import ChP from './ch/ChP';
import ChImg from './ch/ChImg';
import ChImg2 from './ch/ChImg2';
import ChA from './ch/ChA';
import ChUl from './ch/ChUl';
import ChCarousel from './ch/ChCarousel';
import ChCarouselAmp from './ch/ChCarouselAmp';
import ChTour from './ch/ChTour';

@connect
@refetch
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
  }

  click = (el, idx) => {
    this.props.prop_item(idx);
  }

  update_html = () => {
    if (this.refs.phone) {
      const allNode = findDOMNode(this.refs.phone).querySelectorAll('[draggable]');
      let allNodeText = '';
      allNode.forEach( v => allNodeText += v.innerHTML);
      allNodeText = allNodeText.replace('data-href', 'href');
      this.props.update_html(allNodeText);
      this.props.post(allNodeText);
    }
  } 

  moveCard = (dragIndex, hoverIndex) => {
    //TODO:Sort
    this.props.sort_item(dragIndex+1, hoverIndex+1);
  }

  render() {
    //post html
    const { postResponse } = this.props;
    if (postResponse) {
      if (postResponse.pending) {
        console.log('pending');
      } else if (postResponse.rejected) {
        console.log('rejected');
      } else if (postResponse.fulfilled) {
        console.log(postResponse.value);
      }
    }
    //load drop items
    const nodes = this.props.state.dropItems.map((el, idx) => {
      let show;
      let showHtml;
      switch (el.template) {
        case 'ChBanner':
          show = <ChBanner key={idx} index={idx} onClick={() => {}} form_data={el.formData}/>;
          showHtml = show;
          break;
        case 'ChHead':
          show = <Sort key={idx} index={idx} id={idx} moveCard={this.moveCard} prop_item={this.props.prop_item} save_history={this.props.save_history}><ChHead onClick={() => this.click(el, idx)} form_data={el.formData}/></Sort>;
          showHtml = show;
          break;
        case 'ChP':
          show = <Sort key={idx} index={idx} id={idx} moveCard={this.moveCard} prop_item={this.props.prop_item} save_history={this.props.save_history}><ChP  onClick={() => this.click(el, idx)} form_data={el.formData}/></Sort>;
          showHtml = show;
          break;
        case 'ChImg':
          show = <Sort key={idx} index={idx} id={idx} moveCard={this.moveCard} prop_item={this.props.prop_item} save_history={this.props.save_history}><ChImg  onClick={() => this.click(el, idx)} form_data={el.formData}/></Sort>;
          showHtml = show;
          break;
        case 'ChImg2':
          show = <Sort key={idx} index={idx} id={idx} moveCard={this.moveCard} prop_item={this.props.prop_item} save_history={this.props.save_history}><ChImg2  onClick={() => this.click(el, idx)} form_data={el.formData}/></Sort>;
          showHtml = show;
          break;
        case 'ChA':
          show = <Sort key={idx} index={idx} id={idx} moveCard={this.moveCard} prop_item={this.props.prop_item} save_history={this.props.save_history}><ChA  onClick={() => this.click(el, idx)} form_data={el.formData}/></Sort>;
          showHtml = show;
          break;
        case 'ChUl':
          show = <Sort key={idx} index={idx} id={idx} moveCard={this.moveCard} prop_item={this.props.prop_item} save_history={this.props.save_history}><ChUl  onClick={() => this.click(el, idx)} form_data={el.formData}/></Sort>;
          showHtml = show;
          break;
        case 'ChCarousel':
          show = <Sort key={idx} index={idx} id={idx} moveCard={this.moveCard} prop_item={this.props.prop_item} save_history={this.props.save_history}><ChCarousel  onClick={() => this.click(el, idx)} form_data={el.formData}/></Sort>;
          showHtml = <Sort key={idx} index={idx} id={idx} moveCard={this.moveCard} prop_item={this.props.prop_item} save_history={this.props.save_history}><ChCarouselAmp  onClick={() => this.click(el, idx)} form_data={el.formData}/></Sort>;;
          break;
        case 'ChTour':
          show = <Sort key={idx} index={idx} id={idx} moveCard={this.moveCard} prop_item={this.props.prop_item} save_history={this.props.save_history}><ChTour  onClick={() => this.click(el, idx)} form_data={el.formData}/></Sort>;
          showHtml = show;
          break;
        default:
          show = null;
          showHtml = show;
      }
      return {show:show, showHtml:showHtml};
    });

    return (
      <div className="FrameBox mx-auto relative">
        <div className="iPhone8Btn hvr-border-fade" onClick={this.update_html}></div>
        <Drop name="FrameDrop" accepts="DnD">
          <div className="iPhone8">{ nodes.map( i => i.show ) }</div>
        </Drop>
        <Frame className="hidden pureHtml" ref="pureHtml">
          <div ref="phone">{ nodes.map( i => i.showHtml ) }</div>
        </Frame>
        <div className="device device-iphone-8 device-gold device-pos">
          <div className="device-frame">
            <div className="device-content"></div>
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
