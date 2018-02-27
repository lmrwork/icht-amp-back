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
      <div>
        <div className="ChLoading">
          <Spinkit size={120} color="#09c" />
        </div>
        <button className="btn block mx-auto mt3" style={{width:'16rem', border:'1px solid #888'}}>转换原始HTML成AMP部件（实验性）</button>
      </div>
    )
  }

}

export default ChLoading;