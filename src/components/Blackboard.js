import React from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import CardBox from './CardBox';
import FrameBox from './FrameBox';
import PropBox from './PropBox';

const Blackboard = () => 
  <DragDropContextProvider backend={HTML5Backend}>
    <div className="flex flex-wrap">
      <div className="col-4 my3 relative"><CardBox /></div>
      <div className="col-4 my3 relative"><FrameBox /></div>
      <div className="col-4 my3 relative"><PropBox /></div>
    </div>
  </DragDropContextProvider>

export default Blackboard;
