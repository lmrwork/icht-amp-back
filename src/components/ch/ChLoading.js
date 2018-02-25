import React, { PureComponent } from 'react';
import {
  //ChasingDots
  //Circle
  //CubeGrid
  //DoubleBounce
  //FadingCircle
  //FoldingCube
  //Pulse
  //RotatingPlane
  //ThreeBounce
  //WanderingCubes
  Wave
as Spinkit} from 'better-react-spinkit'; 
//http://better-react-spinkit.benjamintatum.com

class ChLoading extends PureComponent {

  render() {
    return (
      <div className="ChLoading">
        <Spinkit size={120} color="#09c" />
      </div>
    )
  }

}

export default ChLoading;