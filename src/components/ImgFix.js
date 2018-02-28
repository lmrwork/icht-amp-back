import React from 'react';

const ImgFix = ({amp, formData, layout}) => {
  let imgfix;
  if (amp) {
    imgfix = <amp-img src={formData.imgSrc} width={formData.imgWidth} height={formData.imgHeight} layout={layout} alt={formData.imgAlt}></amp-img>;
  } else {
    imgfix = <img src={formData.imgSrc} width={formData.imgWidth} height={formData.imgHeight} layout={layout} alt={formData.imgAlt}></img>;
  }
  return imgfix;
}

export default ImgFix;

