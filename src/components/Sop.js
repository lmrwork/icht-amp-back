import React from 'react';
//如何在信息平台由原信息生成AMP页面？
export const HowPushinfpToAmp = () => (
  <div className="sopDiv left-align">
    <h3>1、如何在信息平台由原信息生成AMP页面？</h3>
    <div className="clearfix">
      <p className="col col-1"><i>Step1：</i></p>
      <p className="col col-11">打开信息平台进入信息编辑页面，找到<b>【AMP构建工具】</b>链接点击进去。</p>
    </div>
    <div className="clearfix">
    <p className="col col-1"><i>Step2：</i></p>
    <p className="col col-11">在构建工具页面的iPhone模拟器中，找到<b>【将HTML转换成AMP部件（实验性）】</b>按键，点击生成AMP预览。</p>
    </div>
    <div className="clearfix">
      <p className="col col-1"><i>Step3：</i></p>
      <p className="col col-11">检查iPhone模拟器的页面文字、图片、链接是否生成正确，可在这个步骤在iPhone模拟器中：<em>拖放、增加、删除、调整</em>AMP部件。</p>
    </div>
    <div className="clearfix">
      <p className="col col-1"><i>step4：</i></p>
      <p className="col col-11">点击iPhone模拟器中的<b>【Home】</b>按键生成<em>二维码</em>，然后使用手机扫描，进行上线前的<em>实机测试</em>。</p>
    </div>
      <div className="clearfix">
      <p className="col col-1"><i>step5：</i></p>
    <p className="col col-11">勾选<b>【发布】</b>，点击<b>【推送到信息平台】</b>按键。</p>
    </div>
    <div className="clearfix">
      <p className="col col-1"><i>step6：</i></p>
      <p className="col col-11">返回信息平台编辑页面，<b>【保存信息】</b>，检查AMP信息页面，<em>AMP的URL：/amp/ + 原信息的URL</em>。</p>
    </div>
    <div className="clearfix">
      <p className="col col-1"><i>step7：</i></p>
      <p className="col col-11">在 https://search.google.com/test/amp 提交AMP的URL给Google检测并<b>【提交给Google】</b>，之后在webmaster中<em>提交Google抓取AMP的URL</em>。</p>
    </div>
  </div>
);
