import { connect } from 'react-refetch';
import convert from './convert';

export const build_amp = connect( props => {
  return {
    build_amp: data => ({
      postResponse: {
        //url: 'http://202.103.68.62:3001/',
        url: 'http://localhost:3001/',
        method: 'POST',
        force: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: `html=${data.html}&items=${JSON.stringify(data.items)}`,
        then: value => { 
          props.save_qrcode(value.succ);
          props.save_css(value.css);
        },
        catch: ( reason => {
          alert('本地express4未启动');
        })
      }
    })
  }
})

//save amp
export const save_amp = connect( props => {
  return {
    save_amp: data => ({
      postResponse: {
        url: 'http://europe.chtcdn.com/info.php/info_amp/save_amp',
        //url: 'http://200.103.68.62:9000/info.php/info_amp/save_amp',
        method: 'POST',
        force: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: `icid=${data.icid}&json=${data.json}&html=${data.html}&status=${data.status}&css=${data.css}`,
        then: value => {
          if (!value.succ) {
            props.saving_status('error');
          } else {
            props.saving_status('success');
          }
        },
        catch: ( reason => {
          props.saving_status('error');
          alert('请求服务器失败');
        })
      }
    })
  }
})

//load amp
export const load_amp = connect( props => {
  return {
    load_amp: icid => ({
      postResponse: {
        url: 'http://europe.chtcdn.com/info.php/info_amp/load_amp',
        //url: 'http://202.103.68.62:9000/info.php/info_amp/load_amp',
        method: 'POST',
        force: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: `icid=${icid}`,
        then: value => {
          if (!value.succ) {
            //alert(`信息平台无AMP数据: ${value.message}`);
          } else if (!value.json || value.json==='null') {
            alert('信息平台无AMP数据');
          } else {
            props.pop_items();
            props.load_items(JSON.parse(value.json));
            props.amp_status(parseInt(value.status, 10));
            props.loading_status(100);
          }
        },
        catch: ( reason => {
          alert('请求服务器失败');
        })
      }
    })
  }
})

//load info
export const load_info = connect( props => {
  return {
    load_info: icid => ({
      postResponse: {
        url: 'http://europe.chtcdn.com/info.php/info_amp/load_info',
        //url: 'http://202.103.68.62:9000/info.php/info_amp/load_info',
        method: 'POST',
        force: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: `icid=${icid}`,
        then: value => {
          if (!value.succ) {
            alert(`信息平台无AMP数据: ${value.message}`);
          } else if (!value.info || value.info==='null') {
            alert('信息平台无AMP数据');
          } else {
            const json = convert(value.info);
            props.pop_items();
            //添加H1标签
            props.drop_item({
              template: 'ChHead',
              formData: {
                text: value.title,
                type: 'H1'
              }
            });
            props.load_items(json);
          }
        },
        catch: ( reason => {
          alert('请求服务器失败');
        })
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