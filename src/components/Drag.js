import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

const style = {
  cursor: 'move'
}

const boxSource = {
  beginDrag(props) {
    return {
      //content: props.children
    }
  },

  endDrag(props, monitor) {
    //const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      //TODO：放置组件到store
      props.drop_item(props.template);
    }
  },
}

@DragSource('DnD', boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
export default class Drag extends Component {
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