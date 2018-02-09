import React, { PureComponent } from 'react';
import connect from '../../redux/connect';

@connect
class ChUl extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChUl.formData;
    return (
      <div className="ChUl px2 my1" onClick={this.props.onClick}>
        <p>{formData.ulTitle}</p>
        <ul className="list-reset">
          {formData.ulList ? formData.ulList.map( (i, idx) => {
            if (i.liHref) {
              return <li key={idx} className={formData.listStyle}><a data-href={i.liHref}>{i.liText}</a></li>;
            } else {
              return <li key={idx} className={formData.listStyle}>{i.liText}</li>;
          }}) : null}
        </ul>
       </div>
    )
  }

}

export default ChUl;