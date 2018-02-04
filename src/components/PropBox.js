import React, { Component } from 'react';

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
class PropBox extends Component {
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
              <Form schema={schema}
                    uiSchema={uiSchema}
                    formData={formData}
                    onSubmit={onSubmit}
                    className="bsform"
                    action="#"
              />
            </Drop>
          </div>
        </div>
      </div>
    );
  }
}

export default PropBox;
