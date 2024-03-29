import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';

const style = {
  cursor: 'move',
}

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
    }
  },
  endDrag(props, monitor) {
    //const dropResult = monitor.getDropResult();
    //if (dropResult) {
      props.save_history('交换');
    //}
  }
}

const cardTarget = {

  canDrop() {
    return false;
  },

  hover(props, monitor, component) {

    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    //console.log(`${dragIndex} === ${hoverIndex} from ${props.from}`);

    //表示从cardbox过来
    if (dragIndex === 0) {
      if (hoverIndex !== localStorage.getItem('insertID')) {
        localStorage.setItem('insertID', hoverIndex);
      }
      return;
    }

    if (dragIndex === hoverIndex) {
      //console.log('dragIndex === hoverIndex');
      return;
    }

    //Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    //Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    //Determine mouse position
    const clientOffset = monitor.getClientOffset();
    //Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      //console.log('dragIndex < hoverIndex && hoverClientY < hoverMiddleY');
      return;
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      //console.log('dragIndex > hoverIndex && hoverClientY > hoverMiddleY');
      return;
    }

    props.moveCard(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  },
}

@DropTarget('Sort', cardTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))
@DragSource('Sort', cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
export default class Sort extends PureComponent {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
    moveCard: PropTypes.func.isRequired,
  }

  render() {
    const {
      isDragging,
      connectDragSource,
      connectDropTarget,
    } = this.props
    const opacity = isDragging ? 1 : 1;

    return connectDragSource(
      connectDropTarget(
        <div style={{ ...style, opacity }} className={this.props.className}>
          {this.props.children}
        </div>
      ),
    )
  }
}