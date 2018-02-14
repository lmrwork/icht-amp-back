import { connect } from 'react-refetch'

export default connect( props => {
  return {
    post: html => ({
      postResponse: {
        //url: 'http://202.103.68.62:9093/i.php',
        url: 'http://202.103.68.62:3001/',
        method: 'POST',
        force: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: `html=${html}`
      }
    })
  }
})

/*
export default connect( 
  state => ({ state }), 
  dispatch => bindActionCreators(actions, dispatch)
)
*/