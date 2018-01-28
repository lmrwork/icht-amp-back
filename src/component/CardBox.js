import React, { PureComponent } from 'react';

class CardBox extends PureComponent {
  render() {
    return (
      <div>
        <div className="CardBoxTitle mb2">选择组件</div>
        <div className="CardBox mx-auto py1">
          <div className="flex flex-column">
            <div className="CardBoxItem BBSidebar mx2 my1 p2 relative">
              <header className="flex justify-start items-center pl2 ch-header">
                <div role="button" aria-label="open sidebar" tabIndex="0" className="pr2 ch-menubar">☰</div>
                <div className="my0 mx-auto ch-banner relative"> CHINAHIGHLIGHTS<sup>®</sup> </div>
                <a className="text-decoration-none mr2 block" href="/su-viaje-a-medida/" >Viaje A Medida China</a>
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
