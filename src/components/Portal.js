import React, {PureComponent} from 'react';
import connect from '../redux/connect';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

@connect
class Portal extends PureComponent {
  render() {
    return (
      <ReactModal 
        isOpen={true}
        contentLabel="Inline Styles Modal Example"
      >
        <p>Modal text!</p>
        <button onClick={()=>{}}>Close Modal</button>
      </ReactModal>
    );
  }
}

export default Portal;
