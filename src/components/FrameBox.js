import React, { Component } from 'react';
import connect from '../redux/connect';

import Drop from './Drop';
import Sort from './Sort';


import ChBanner from './ch/ChBanner';
import ChH1 from './ch/ChH1';
import ChH2 from './ch/ChH2';

@connect
class FrameBox extends Component {

  click = (el, idx) => {
    alert('click '+ el + idx);
  }

  moveCard = (dragIndex, hoverIndex) => {
    //TODO:Sort
    console.log(dragIndex + '@' + hoverIndex);
  }

  render() {
    return (
      <div className="FrameBox mx-auto">
        <Drop>
          <div className="iPhone8">
            {
              this.props.state.dropItems.map((el, idx) => {
                let show;
                switch (el) {
                  case 'ChBanner':
                    show = <Sort key={idx} index={idx} id={idx} moveCard={this.moveCard} ><ChBanner onClick={() => this.click(el, idx)}/></Sort>;
                    break;
                  case 'ChH1':
                    show = <Sort key={idx} index={idx} id={idx} moveCard={this.moveCard} ><ChH1 onClick={() => this.click(el, idx)}/></Sort>;
                    break;
                  case 'ChH2':
                    show = <Sort key={idx} index={idx} id={idx} moveCard={this.moveCard} ><ChH2  onClick={() => this.click(el, idx)}/></Sort>;
                    break;
                  default:
                    show = null;
                }
                return show;
              })
            }
          </div>
        </Drop>
      </div>
    );
  }
}

export default FrameBox;
