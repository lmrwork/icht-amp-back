import React from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import CardBox from './CardBox';
import FrameBox from './FrameBox';

const Blackboard = () => (
  <DragDropContextProvider  backend={HTML5Backend}>
    <div className="flex flex-wrap">
      <div className="col-4 my3"><CardBox /></div>
      <div className="col-4 my3"><FrameBox /></div>
      <div className="col-4 my3">属性框</div>
    </div>
  </DragDropContextProvider>
)

export default Blackboard;
