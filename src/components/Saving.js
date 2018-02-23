import React, {PureComponent} from 'react';
import connect from '../redux/connect';
import { save_amp } from '../utils/refetch';
import ProgressButton from 'react-progress-button'
import queryString from 'query-string';

import "react-progress-button/react-progress-button.css";

@connect
@save_amp
class Saving extends PureComponent {

  click = () => {
    const parsed = queryString.parse(window.location.search);
    if (parsed.icid) {
      this.props.saving_status('loading');
      this.props.save_amp({
        icid: parsed.icid,
        html: this.props.state.html,
        json: this.props.state.json,
        css: this.props.state.css,
        status: this.props.state.amp_status
      });
    }
  }

  render() {
    return (
      <div id="Saving">
        <ProgressButton onClick={this.click} state={this.props.state.saving}>
        推送到信息平台
        </ProgressButton>
      </div>
    )
  }
}

export default Saving;

