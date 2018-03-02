import React, { PureComponent } from 'react';
import connect from '../../redux/connect';
import {safeHref as safe} from '../../utils/safe';

@connect
class ChUl extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChUl.formData;
    return (
      <div className="ChUl px2 my2" onClick={this.props.onClick}>
        { formData.title ? <p>{formData.title}</p> : null }
        <ul className="list-reset">
          {formData.list ? formData.list.map( (i, idx) => {
            if (i.href) {
              return <li key={idx} className={formData.listStyle}><a data-href={i.href}>{i.text}</a></li>;
            } else {
              return <li key={idx} className={formData.listStyle} dangerouslySetInnerHTML={{__html: safe(i.text)}}></li>;
          }}) : null}
        </ul>
      </div>
    )
  }

}

export default ChUl;