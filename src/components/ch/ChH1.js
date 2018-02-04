import React from 'react';

const ch = props => 
  <h1 className="h1 left-align px2" {...props}>
    { props.input ? props.input.h1 : 'Head 1 : <h1>' }
  </h1>

export default ch;
