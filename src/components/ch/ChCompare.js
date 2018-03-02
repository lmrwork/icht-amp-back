import React, { PureComponent } from 'react';
import connect from '../../redux/connect';
import {safeHref as safe} from '../../utils/safe';

@connect
class ChCompare extends PureComponent {

  render() {
    const formData = this.props.form_data ? this.props.form_data : this.props.state.propConf.ChP.formData;
    return (
      <div className="ChCompare px2 my2" onClick={this.props.onClick}>
        <amp-state id="remoteAnimals"
          <script type="application/json">
            {compareList : [
              {title: Head1, desc: 'this is compare Paragraph1'},
              {title: Head2, desc: 'this is compare Paragraph2'}
            ]}
          </script>
        </amp-state>
        <p 
        [text] = "compareList[0].desc"
        className={`ChCompareP px2 ${formData.align} ${formData.color} pSize${formData.size}`} 
        onClick={this.props.onClick} 
        />
        <p 
        [text] = "compareList[1].desc"
        className={`ChCompareP px2 ${formData.align} ${formData.color} pSize${formData.size}`} 
        onClick={this.props.onClick} 
        dangerouslySetInnerHTML={{__html: safe(formData.text)}}
        />
      </div>
    )
  }

}

export default ChCompare;