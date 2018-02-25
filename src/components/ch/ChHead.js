import React, { PureComponent } from 'react';
import connect from '../../redux/connect';

@connect
class ChHead extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChHead.formData;
    switch (formData.head) {

      case 'H1':
        return (
          <h1 className="ChHead h1 left-align px2" onClick={this.props.onClick}>
            { formData.text}
          </h1>
        )

      case 'H2':
        return (
          <h2 className="ChHead h2 left-align px2" onClick={this.props.onClick}>
            { formData.text}
          </h2>
        )

      case 'H3':
        return (
          <h3 className="ChHead h3 left-align px2" onClick={this.props.onClick}>
            { formData.text}
          </h3>
        )

      case 'H4':
        return (
          <h4 className="ChHead h4 left-align px2 mb0" onClick={this.props.onClick}>
            { formData.text}
          </h4>
        )

      case 'H5':
        return (
          <h5 className="ChHead h5 left-align px2 mb0" onClick={this.props.onClick}>
            { formData.text}
          </h5>
        )

      case 'H6':
        return (
          <h6 className="ChHead h6 left-align px2 mb0" onClick={this.props.onClick}>
            { formData.text}
          </h6>
        )

      default:
        return (
          <h1 className="ChHead h1 left-align px2" onClick={this.props.onClick}>
            { formData.text}
          </h1>
        )
    }
  }

}

export default ChHead;

