import React, { PureComponent } from 'react';

import connect from '../redux/connect';

import Form from "react-jsonschema-form";
import Drop from './Drop';

let schema = {
  title: "test",
  type: "object",
  required: ["text"],
  properties: {
    text: {type: "string", title: "input"},
  }
};

let formData = {
  text: "default text",
};

let uiSchema =  {
  text: {
    "ui:widget": "text"
  }
};

const onSubmit = ({formData}) => console.log("Data submitted: ",  formData);

@connect
class PropBox extends PureComponent {
  constructor(props) {
    super(props);
  }

  delete = idx => {
    if (this.props.state.propIndex !== null) {
      this.props.delet_item(this.props.state.propIndex);
      this.props.prop_item(null);
    } else {
      alert('Can not delete ~');
    }
  }

  render() {
    return (
      <div>
        <div className="CardBox mx-auto py1">
          <div className="flex flex-column">
            <div className="CardBoxTitle"> 部件属性 </div>
            <Drop name="PropDrop" accepts="Sort">
              <div className="CardBoxItem mx2 my1 p2 relative">
                Drag & Drop here, Come on baby !
              </div>
              { this.props.state.propIndex !== null ?
              <Form schema={schema}
                    uiSchema={uiSchema}
                    formData={formData}
                    onSubmit={onSubmit}
                    className="bsform"
                    action="#">
                  <div className="relative">
                    <button type="submit" className="btn btn-primary">提交修改</button>
                    <button type="button" className="btn btn-danger absolute right-0" onClick={this.delete}>删除部件</button>
                  </div>
              </Form>
              : null }
            </Drop>
          </div>
        </div>
      </div>
    );
  }
}

export default PropBox;
