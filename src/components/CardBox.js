import React, { PureComponent } from 'react';
import connect from '../redux/connect';

@connect
class CardBox extends PureComponent {

  constructor(props) {
    super(props);
    this.props.test1('ok???');
  } 

  render() {
    return (
      <div>
        <div className="CardBoxTitle mb2"> 选择组件 {this.props.state.test} </div>
        <div className="CardBox mx-auto py1">
          <div className="flex flex-column">
            <div className="CardBoxItem mx2 my1 p2 relative">

              <header className="flex justify-start items-center pl2 ch-header">
                <div role="button" aria-label="open sidebar" tabIndex="0" className="pr2 ch-header-menubar">☰</div>
                <div className="my0 mx-auto relative ch-header-banner"> CHINAHIGHLIGHTS<sup>®</sup> </div>
                <a className="text-decoration-none mr2 block ch-header-tailormade" data-href="/su-viaje-a-medida/">Viaje A Medida China</a>
              </header>

            </div>
            <div className="CardBoxItem mx2 my1 p2 relative">轮播图</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardBox;
