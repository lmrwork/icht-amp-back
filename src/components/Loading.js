import React, {PureComponent} from 'react';
import connect from '../redux/connect';
import { load_amp } from '../utils/refetch';
import queryString from 'query-string';
import ProgressBar from 'react-progress-bar-plus';
import 'react-progress-bar-plus/lib/progress-bar.css';

@connect
@load_amp
class Loading extends PureComponent {

  /*
  constructor(props) {
    super(props);
    this.state = {
      percent: -1
    }
  }

  step = () => {
    if (this.state.percent < 33) {
      this.setState({percent: this.state.percent+1});
      window.requestAnimationFrame(this.step);
    } else if (this.state.percent < 66) {
      this.setState({percent: this.state.percent+0.5});
      window.requestAnimationFrame(this.step);
    } else if (this.state.percent < 99) {
      this.setState({percent: this.state.percent+0.3});
      window.requestAnimationFrame(this.step);
    }
  }
  */

  componentWillMount() {
    const parsed = queryString.parse(window.location.search);
    if (parsed.icid) {
      //加载进度条
      this.props.load_amp(parsed.icid);
      //window.requestAnimationFrame(this.step);
    }
  }

  render() {
    return (
      <div id="loading">
        <ProgressBar autoIncrement={true} percent={this.props.state.loading ? this.props.state.loading : -1} />
      </div>
    )
  }
}

export default Loading;

