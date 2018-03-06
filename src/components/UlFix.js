import React from 'react';
import {safeHref as safe} from '../utils/safe';

const UlFix = ({formData, className}) => 
  <ul className={className}>
    {formData.list ? formData.list.map( (i, idx) => {
      if (i.href) {
        return <li key={idx} className={formData.listStyle}><a data-href={i.href}>{i.text}</a></li>;
      } else {
        return <li key={idx} className={formData.listStyle} dangerouslySetInnerHTML={{__html: safe(i.text)}}></li>;
    }}) : null}
  </ul>


export default UlFix;

