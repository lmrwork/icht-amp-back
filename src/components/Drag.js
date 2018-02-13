import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

const style = {
  cursor: 'move'
}

const boxSource = {
  beginDrag(props) {
    return {
      id: 0,
      index: 0,
    }
  },

  endDrag(props, monitor) {
    const dropResult = monitor.getDropResult();
    //console.log(props);
    if (dropResult) {
      if (dropResult.name === 'FrameDrop') {
        //放置组件到store
        props.drop_item({
          template: props.template,
          formData: props.state.propConf[props.template].formData,
        });
        props.save_history('放置');
      }
    }
  }
}

@DragSource('Sort', boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
export default class Drag extends PureComponent {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
  }

  render() {
    const { isDragging, connectDragSource } = this.props;
    const opacity = isDragging ? 0.5 : 1;

    return connectDragSource(
      <div style={{ ...style, opacity }}>
        {this.props.children}
      </div>
    )
  }
}