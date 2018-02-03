import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

@DropTarget('DnD', {}, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
export default class Drop extends Component {

  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
  }

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = 'white';
    if (isActive) {
      backgroundColor = '#F6F6F6';
    } else if (canDrop) {
      backgroundColor = '#FAFAFA';
    }

    return connectDropTarget(
      <div style={{ backgroundColor }}>
        {this.props.children}
      </div>
    )
  }
}