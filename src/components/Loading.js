import React, {PureComponent} from 'react';
import connect from '../redux/connect';
import { load_amp } from '../utils/refetch';
import queryString from 'query-string';

@connect
@load_amp
class Loading extends PureComponent {

  componentDidMount() {
    const parsed = queryString.parse(window.location.search);
    if (parsed.icid) {
      //加载进度条
      this.props.load_amp(parsed.icid);
    }
  }

  render() {
    return (
      <div id="loading" className="align-left">
      </div>
    )
  }
}

export default Loading;

