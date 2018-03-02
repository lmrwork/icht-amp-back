import React, { PureComponent } from 'react';
import connect from '../redux/connect';
import Form from "react-jsonschema-form";

@connect
class PropBox extends PureComponent {

  delete = idx => {
    if (this.props.state.propIndex !== null) {
      const yes = window.confirm('确定删除此部件');
      if (yes) {
        this.props.delet_item(this.props.state.propIndex);
        this.props.prop_item(null);
        this.props.save_history('删除');
      }
    } else {
      alert('Can not delete ~');
    }
  }

  update_item = () => {
    this.props.save_history('重载');
    this.props.clear_dropitems();
    window.requestAnimationFrame(()=>this.props.load_history(0));
  }

  change = ({formData}) => {
    this.props.update_item(this.props.state.propIndex, formData);
    this.props.save_history('属性');
  }

  render() {
    let item, itemCfg; 
    item = this.props.state.dropItems[this.props.state.propIndex];
    if (item) {
      itemCfg = this.props.state.propConf[item.template];
    }
    return (
      <div id="CardBox">
        <div className="CardBox mx-auto py1">
          <div className="flex flex-column">
            <div className="CardBoxTitle"> AMP部件属性 </div>
            <div className="CardBoxItem mx2 my1 p2 relative">
              {'<<-- 点击左侧iPhone中的部件，编辑属性'}
            </div>
            { itemCfg ?
            <Form schema={itemCfg.schema}
                  uiSchema={itemCfg.uiSchema}
                  formData={item.formData ? item.formData : itemCfg.formData}
                  onChange={this.change}
                  className="bsform"
                  action="#">
                <div className="relative clearfix px1">
                  <button type="button" className="btn btn-danger left" onClick={this.delete}>删除部件</button>
                  <button type="button" className="btn btn-info right" onClick={this.update_item}>刷新iPhone</button>
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
