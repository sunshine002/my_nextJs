
/**
 * 数据获取demo
 * fetch用axios方式
 */

import React from 'react';
// import Fetch from '../common/fetch';
// import { message } from 'antd';

// import fetch from 'isomorphic-unfetch'
import fetch from '../common/fetch';

/**
 * 注意  isomorphic-unfetch 与 axios 的区分：
 * 1. 用isomorphic-unfetch时，则服务器返回的数据需要转成json格式，即 data.json();
 * 2. 用axios时，则服务器返回的数据就是json格式
 * 以上两者选任意一种即可
 */

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

    const data = await fetch('http://127.0.0.1:3000/api/nextjs/props')
    // const data = await res.json()

    console.log(`Show data fetched. message: ${data.data.message}`)

    return { shows: data.data.message }
  }

  render() {
    return (

      <p>{this.props.shows}</p>

    )
  }
}
