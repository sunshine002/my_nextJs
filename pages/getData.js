
/**
 * 数据获取demo
 * fetch用axios方式
 */

import React from 'react';
import Fetch from '../common/fetch';
import {message} from 'antd';

export default class extends React.Component {
  /**
   *
   getInitialProps 入参属性
    pathname - URL 的 path 部分
    query - URL 的 query 部分，并被解析成对象
    asPath - 显示在浏览器中的实际路径（包含查询部分），为String类型
    req - HTTP 请求对象 (只有服务器端有)
    res - HTTP 返回对象 (只有服务器端有)
    jsonPageRes - 获取数据响应对象 (只有客户端有)
    err - 渲染过程中的任何错误
   */
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    const a = 10;

    const res = await Fetch.get('nextjs/init').then(res => {
      console.log('resolve:' + res);
      const data = res.data;
      const code = data.retcode;
      if(code === 200){
        return data.data.message;
      }else{
        // 返回码非200走reject
        return Promise.reject({
          message: code + '返回返回码非200',
        });
      }
    }).catch(err => {
      // 接口404 走reject，err.message 为 Request failed with status code 404
      console.log('reject:' + err);
      message.error(err.message)
    });

    return { userAgent, a, message: res }
  }

  render() {
    console.log(this.props)
    message.success(this.props.message)
    return (
      <div>
        <h3>数据获取内容：</h3>
        <p>{this.props.userAgent}</p>
        <p>{this.props.a}</p>
        <p>{this.props.message || 1}</p>
      </div>
    )
  }
}
