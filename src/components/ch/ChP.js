import React from 'react';

const ch = props => 
  <p className="left-align px2" {...props}>
    { props.input ? props.input.p : 'Paragraph : <p> # e.g. A paragraph is a section of a piece of writing. A paragraph always begins on a new line and contains at least one sentence.' }
  </p>

export default ch;
