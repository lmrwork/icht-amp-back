import { connect } from 'react-refetch';
import convert from './convert';

export const build_amp = connect( props => {
  return {
    build_amp: data => ({
      postResponse: {
        url: `//${window.location.hostname}:3733`,
        //url: '//202.103.68.62:3733/',
        method: 'POST',
        force: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: `html=${encodeURIComponent(data.html)}&items=${encodeURIComponent(JSON.stringify(data.items))}&schema=${encodeURIComponent(data.schema)}`,
        then: value => { 
          props.save_qrcode(value.succ);
          props.save_css(value.css);
          props.save_script(value.script);
          props.save_validator(value.validator);
          props.loading_status(100);
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
        url: `//${props.state.dataSource[props.state.dataSourceId]}/info.php/info_amp/save_amp`,
        //url: 'http://202.103.68.62:9000/info.php/info_amp/save_amp',
        method: 'POST',
        force: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: `icid=${data.icid}&json=${encodeURIComponent(data.json)}&html=${encodeURIComponent(data.html)}&status=${data.status}&css=${encodeURIComponent(data.css)}&script=${encodeURIComponent(data.script)}&schema=${encodeURIComponent(data.schema)}`,
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
        url: `//${props.state.dataSource[props.state.dataSourceId]}/info.php/info_amp/load_amp`,
        //url: 'http://202.103.68.62:9000/info.php/info_amp/load_amp',
        method: 'POST',
        force: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: `icid=${icid}`,
        then: value => {
          if (!value.succ) {
            alert(`此条信息无AMP页面，请新建AMP页面或者转换HTML到AMP。`);
          } else if (!value.json || value.json==='null') {
            alert(`此条信息无AMP页面，请新建AMP页面或者转换HTML到AMP。`);
          } else {
            props.pop_items();
            props.load_items(JSON.parse(value.json));
            props.amp_status(parseInt(value.status, 10));
            props.save_schema(value.schema);
          }
          props.loading_status(100);
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
        url: `//${props.state.dataSource[props.state.dataSourceId]}/info.php/info_amp/load_info`,
        //url: 'http://202.103.68.62:9000/info.php/info_amp/load_info',
        method: 'POST',
        force: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: `icid=${icid}`,
        then: value => {
          if (!value.succ) {
            alert(`查询不到源信息的HTML:`);
          } else if (!value.info || value.info==='null') {
            alert(`查询不到源信息的HTML`);
          } else {
            const json = convert(value.info);
            props.pop_items();
            let hasHead1 = json.some(item => item.formData.head === 'H1');
            //添加H1标签
            if (!hasHead1) {
              props.drop_item({
                template: 'ChHead',
                formData: {
                  text: value.title,
                  type: 'H1'
                }
              });
            }
            props.load_items(json);
          }
          props.loading_status(100);
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