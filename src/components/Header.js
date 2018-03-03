import React, {PureComponent} from 'react';
import connect from '../redux/connect';
import { slide as Menu } from 'react-burger-menu'
import { load_info } from '../utils/refetch';

import logo from '../svg/logo.svg';
import history from '../svg/history.svg';
import template from '../svg/all.svg';
import schema from '../svg/json.svg';
import simple from '../redux/store/simple';

@connect
@load_info
class Header extends PureComponent {

  history = (n) => {
    this.props.load_history(n);
  }

  simple = (n) => {
    if (simple[n]) {
      this.props.clear_dropitems();
      this.props.drop_item({
        template: 'ChBanner',
        formData:this.props.state.propConf.ChBanner.formData
      });
      this.props.load_items(simple[n].json);
    } else {
      alert('载入预置模板失败！');
    }
  }

  site = () => {
    alert(`当前数据源：${this.props.state.dataSource[this.props.state.dataSourceId]}。`);
    //const currentId = this.props.state.dataSourceId + 1;
    //this.props.taggle_site(currentId % this.props.state.dataSource.length);
  }

  reload = () => {
    const reload = window.confirm("清空面板？");
    if (reload) {
      this.props.clear_dropitems();
      this.props.drop_item({
        template: 'ChBanner',
        formData:this.props.state.propConf.ChBanner.formData
      });
      this.props.drop_item({
        template: 'ChLoading',
        formData:this.props.state.propConf.ChBanner.formData
      });
    }
  }

  render() {
    const histories = window.loadDropItems();
    return (
      <header className="App-header relative" id="appHeader">
        <button className="btn sourceBtn" onClick={this.site}>{this.props.state.dataSource[this.props.state.dataSourceId]}</button>
        <button className="btn reloadBtn" onClick={this.reload}>清屏</button>
        <img src={logo} className="App-logo" alt="logo" />
        <Menu pageWrapId={ "Blackboard" } outerContainerId={ "root" } customBurgerIcon={<img src={history} style={{height:'40px'}} alt="menu"/>} right width="auto" burgerButtonClassName="histoyBtn">
          <div className="mb2">点击加载历史记录：（约~200条）</div>
          {
            histories ? histories.map( (i, n) => (
              <a key={n} className="menu-item py1 left-align" onClick={() => this.history(n)} style={{cursor:'pointer'}}> 
              {`（${n+1}）${i.time} [操作: ${i.action}]`}
              </a>
            )) : null
          }
        </Menu>
        <Menu pageWrapId={ "Blackboard" } outerContainerId={ "root" } customBurgerIcon={<img src={template} style={{height:'40px'}} alt="menu"/>} right width="auto" burgerButtonClassName="simpleBtn">
          <div className="mb2">点击加载预置模板</div>
          { simple.map( (i, n) => (
              <a key={n} className="menu-item py1 left-align" onClick={() => this.simple(n)} style={{cursor:'pointer'}}> 
              {`（${n+1}）${i.name}`}
              </a>
            ))
          }
        </Menu>
        <Menu pageWrapId={ "Blackboard" } outerContainerId={ "root" } customBurgerIcon={<img src={schema} style={{height:'40px'}} alt="menu"/>} right width="auto" burgerButtonClassName="schemaBtn" menuClassName="schemaMenu">
          <div className="mb2">录入结构化标签（JSON-LD），帮助链接:<a href="https://jsonld.com/article/"> Schema.org </a></div>
          <textarea className="schemaArea" placeholder={
`Such as ......

<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "NewsArticle",
  "@id": "https://www.chinahighlights.com/",
  "mainEntityOfPage": [{
    "@type": "WebPage",
    "@id": "https://google.com/article"
  }],
  "headline":"China Travel Agency, Tour with China Highlights - Since 1959!",
  "author": [{
    "@type": "person",
    "name": "Mercier Zeng"
  }],
  "description": "China travel agency offers China Tours, Yangtze River Cruises, Domestic Flights &amp; Hotels. Helping over 10,000+ people tour China each year, maybe you?",
  "image": [{
    "@type": "ImageObject",
    "url": "https://data.chinahighlights.com/image/homepage/great-wall-trek.jpg",
    "width": "1903px",
    "height": "720px"
  }],
  "publisher": [{
    "@type": "Organization",
    "name": "China Highlights",
    "logo": [{
      "@type": "ImageObject",
      "url": "https://data.chinahighlights.com/pic/logo/logo-132x104.png",
      "width": "132",
      "height": "104"
    }]
  }],
  "datePublished": "1998-09-27 02:14:27.000",
  "dateModified": "2017-07-20 02:19:23.293"
}
</script>`}></textarea>
          <button className="btn my2 center">提交结构化标签</button>
        </Menu>

      </header>
  )}

}

export default Header;

