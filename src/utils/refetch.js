import { connect } from 'react-refetch'

export default connect( props => {
  return {
    post: data => ({
      postResponse: {
        //url: 'http://202.103.68.62:3001/',
        url: 'http://192.168.199.170:3001/',
        method: 'POST',
        force: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: `html=${data.html}&items=${JSON.stringify(data.items)}`,
        then: value => { props.save_qrcode(value) }
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