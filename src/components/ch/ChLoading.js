import React, { PureComponent } from 'react';
import connect from '../../redux/connect';
import { load_info } from '../../utils/refetch';
import queryString from 'query-string';
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

@connect
@load_info
class ChLoading extends PureComponent {

  info = () => {
    const parsed = queryString.parse(window.location.search);
    this.props.load_info(parsed.icid);
  }

  create = () => {
    this.props.pop_items();
  }

  render() {
    return (
      <div>
        <div className="ChLoading">
          <Spinkit size={120} color="#09c" />
        </div>
        <button className="btn block mx-auto mt3" onClick={this.create} style={{width:'16rem', border:'1px solid #888'}}>
          开始编辑新AMP页面
        </button>
        <button className="btn block mx-auto mt2" onClick={this.info} style={{width:'16rem', border:'1px solid #888'}}>
          转换原始HTML成AMP部件（实验性）
        </button>
        <p className="px2 center">尝试将源HTML代码中的基础标签转成AMP部件，目前会忽略table标签。</p>
      </div>
    )
  }

}

export default ChLoading;