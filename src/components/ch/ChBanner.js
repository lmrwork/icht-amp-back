import React from 'react';

const ch = props => 
  <header className="flex justify-start items-center pl2 ch-header" {...props}>
    <div role="button" aria-label="open sidebar" tabIndex="0" className="pr2 ch-header-menubar">☰</div>
    <div className="my0 mx-auto relative ch-header-banner"> CHINAHIGHLIGHTS<sup>®</sup> </div>
    <a className="text-decoration-none mr2 block ch-header-tailormade" data-href="/su-viaje-a-medida/"> {props.input ? props.input.banner : 'Create My Trip !'}</a>
  </header>

export default ch;
