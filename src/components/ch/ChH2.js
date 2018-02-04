import React from 'react';

const ch = props => 
  <h2 className="h2 left-align px2" {...props}>
    { props.input ? props.input.h2 : 'Head 2 : <h2>' }
  </h2>

export default ch;
