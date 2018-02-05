import React, { PureComponent } from 'react';
import connect from '../redux/connect';
import Form from "react-jsonschema-form";

@connect
class PropBox extends PureComponent {

  delete = idx => {
    if (this.props.state.propIndex !== null) {
      this.props.delet_item(this.props.state.propIndex);
      this.props.prop_item(null);
    } else {
      alert('Can not delete ~');
    }
  }

  change = ({formData}) => {
    this.props.update_item(this.props.state.propIndex, formData);
  }

  render() {
    let item, itemCfg; 
    item = this.props.state.dropItems[this.props.state.propIndex];
    if (item) {
      itemCfg = this.props.state.propConf[item.template];
    }
    return (
      <div>
        <div className="CardBox mx-auto py1">
          <div className="flex flex-column">
            <div className="CardBoxTitle"> 部件属性 </div>
              <div className="CardBoxItem mx2 my1 p2 relative">
                Dancing up ! Come on baby !
              </div>
              { itemCfg ?
              <Form schema={itemCfg.schema}
                    uiSchema={itemCfg.uiSchema}
                    formData={item.formData ? item.formData : itemCfg.formData}
                    onChange={this.change}
                    className="bsform"
                    action="#">
                  <div className="relative">
                    <button type="button" className="btn btn-danger relative right-0" onClick={this.delete}>删除部件</button>
                  </div>
              </Form>
              : null }
          </div>
        </div>
      </div>
    );
  }
}

export default PropBox;
