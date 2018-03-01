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
      this.props.drop_item({
        template: 'ChLoading',
        formData: {}
      });
      this.props.loading_status(50);
      this.props.load_amp(parsed.icid);
    }
    //来源站点
    const ssid = sessionStorage.getItem('dataSourceId');
    if (ssid) {
      this.props.taggle_site(ssid);
    } else {
      this.props.state.dataSource.forEach((v, idx) => {
        if (document.referrer.indexOf(v) !== -1) {
          this.props.taggle_site(idx);
          sessionStorage.setItem('dataSourceId', idx);
          return false;
        }
      });
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

