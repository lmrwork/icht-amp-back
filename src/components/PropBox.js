import React, { Component } from 'react';

import connect from '../redux/connect';

import Form from "react-jsonschema-form";
import Drop from './Drop';

const schema = {
  title: "ChBanner",
  type: "object",
  required: ["banner"],
  properties: {
    banner: {type: "string", title: "banner", default: "Create My Trip !"},
  }
};

const formData = {
  banner: "First task",
};

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
                    formData={formData}
                    className="bsform"
              />
            </Drop>
          </div>
        </div>
      </div>
    );
  }
}

export default PropBox;
