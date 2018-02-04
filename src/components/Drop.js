import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';

const boxTarget = {
  drop(props) {
    return { name: props.name };
  },
}

@DropTarget(props => props.accepts, boxTarget, (connect, monitor) => ({
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

    let backgroundColor = 'none';
    if (isActive) {
      backgroundColor = 'none';
    } else if (canDrop) {
      backgroundColor = 'none';
    }

    return connectDropTarget(
      <div style={{ backgroundColor }}>
        {this.props.children}
      </div>
    )
  }
}