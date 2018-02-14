import { connect } from 'react-refetch'

export default connect(props => ({
  post: subject => ({
    postResponse: {
      url: '/test/',
      method: 'POST',
      body: JSON.stringify(subject)
    }
  })
}))

/*
export default connect( 
  state => ({ state }), 
  dispatch => bindActionCreators(actions, dispatch)
)
*/