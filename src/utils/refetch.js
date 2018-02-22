import { connect } from 'react-refetch'

export const build_amp = connect( props => {
  return {
    post: data => ({
      postResponse: {
        //url: 'http://202.103.68.62:3001/',
        url: 'http://202.103.68.62:3001/',
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

//save amp
export const save_amp = connect( props => {
  return {
    post: data => ({
      postResponse: {
        //url: 'http://202.103.68.62:3001/',
        url: 'http://202.103.68.62:3001/',
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

//save amp
export const load_amp = connect( props => {
  return {
    post: data => ({
      postResponse: {
        //url: 'http://202.103.68.62:3001/',
        url: 'http://202.103.68.62:3001/',
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