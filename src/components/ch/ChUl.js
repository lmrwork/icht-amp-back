import React, { PureComponent } from 'react';
import connect from '../../redux/connect';

@connect
class ChUl extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChUl.formData;
    return (
      <div className="ChUl px2 my1" onClick={this.props.onClick}>
        <p>{formData.title}</p>
        <ul className="list-reset">
          {formData.list ? formData.list.map( (i, idx) => {
            if (i.href) {
              return <li key={idx} className={formData.listStyle}><a data-href={i.href}>{i.text}</a></li>;
            } else {
              return <li key={idx} className={formData.listStyle} dangerouslySetInnerHTML={{__html: i.text}}></li>;
          }}) : null}
        </ul>
       </div>
    )
  }

}

export default ChUl;