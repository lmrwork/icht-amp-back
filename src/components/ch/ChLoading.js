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
    this.props.loading_status(50);
  }

  create = () => {
    this.props.pop_items();
  }

  render() {
    return (
      <div>
        { this.props.state.loading === 50 ?
          <div className="ChLoading">
            <Spinkit size={120} color="#09c" />
          </div> : null
        }
        { this.props.state.loading === 100 ?
          <div>
            <div className="lmrLogo center mt4"> 
              {/* 备胎：http://pipsum.com/200x180.jpg https://lorempixel.com/200/180/ https://placeimg.com/200/180/any */ }
              <img src="https://placeimg.com/200/180/any" alt="这里应该有一张图片，如果不出请联系LMR！"/>
            </div>
            <button className="btn block mx-auto mt3" onClick={this.info} style={{width:'16rem', border:'1px solid #888'}}>
              将HTML转换成AMP部件（实验性）
            </button>
            <button className="btn block mx-auto mt2" onClick={this.create} style={{width:'16rem', border:'1px solid #888'}}>
              创建新AMP页面
            </button>
            <p className="px2 center pSize9 cGray">* 实验性：尝试将源HTML中的基础标签转换成<br/>AMP部件，目前会忽略&lt;table&gt;、&lt;form&gt;标签。</p>
          </div>
        : null }
      </div>
    )
  }

}

export default ChLoading;