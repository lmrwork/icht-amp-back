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

  change = ({formData}) => {
    if (formData.imageList) { //轮播组件~fix
      //先删除JS部件
      this.props.delet_item(this.props.state.propIndex);
      //再次添加JS部件
      this.props.state.dropItems.splice(this.props.state.propIndex, 0, {
        'template': 'ChCarousel',
        'formData': formData
      });
    } else {
      this.props.update_item(this.props.state.propIndex, formData);
    }
    this.props.save_history('属性');
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
              {'<<-- 点击左侧iPhone中的部件，编辑属性'}
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
