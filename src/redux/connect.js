import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../redux/actions/all';

export default connect( 
  state => ({ state }), 
  dispatch => bindActionCreators(actions, dispatch)
)