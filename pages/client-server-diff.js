
/**
 * 数据获取demo
 * fetch用axios方式
 *
 * 对比在getInitialProps方法中用服务端渲染与客户端渲染的区别
 *
 */

import React from 'react';
import Fetch from '../common/fetch';
import { message } from 'antd';

import Frame from '../component/frame'

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

    const res = await Fetch.get('http://127.0.0.1:3000/api/nextjs/init').then(res => {
      const data = res.data;
      const code = data.retcode;
      if (code === 200) {
        return data.data.message;
      } else {
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

    return { userAgent, message: res}
  }

  constructor(props) {
    super(props);
    this.state = {
      ms: '',
    }
  }

  componentDidMount() {
    Fetch.get('nextjs/data').then(res => {
      const data = res.data;
      const code = data.retcode;
      if (code === 200) {
        this.setState({
          ms: data.data.ms,
        })
      } else {
        // 返回码非200走reject
        return Promise.reject({
          message: code + '返回返回码非200',
        });
      }
    }).catch(err => {
      // 接口404 走reject，err.message 为 Request failed with status code 404
      message.error(err.message)
    });
  }

  render() {
    const { ms } = this.state;
    return (
      <Frame>
        <h3 style={{ paddingTop: '30px' }}>数据获取内容：</h3>
        <p><strong className='tit'>服务端渲染的数据getInitialProps方法中req.headers['user-agent']的值：</strong>{this.props.userAgent}</p>
        <p><strong className='tit'>服务端getInitialProps中接口渲染的数据：</strong>{this.props.message}</p>
        <p><strong className='tit2'>ms:</strong> {ms}</p>

        <h3 style={{ paddingTop: '30px' }}>getInitialProps说明：</h3>
        <pre>
          {`
当页面渲染时加载数据，我们使用了一个异步方法getInitialProps。它能异步获取 JS 普通对象，并绑定在props上

当服务渲染时，getInitialProps将会把数据序列化，就像JSON.stringify。所以确保getInitialProps返回的是一个普通 JS 对象，而不是Date, Map 或 Set类型

当页面初始化加载时，getInitialProps只会加载在服务端。只有当路由跳转（Link组件跳转或 API 方法跳转）时，客户端才会执行getInitialProps

getInitialProps将不能使用在子组件中。只能使用在pages页面中。

只有服务端用到的模块放在getInitialProps里，请确保正确的导入了它们
            `}
        </pre>

        <h3>getInitialProps中调用异步接口时的应用总结</h3>
        <pre>{`
仅服务器(刷新页面时)
本来我们预想的, 客户端和服务器都能输出同样的信息, 但实际上, 在这种情况下, 输出信息只显示在了服务器端的控制台上. 这是因为, 我们的页面是在服务器端进行渲染的. 我们在服务器上已经获取到了电视节目的数据, 没有理由在客户端再获取一次.

从客户端获取数据（用Link标签时）
这里, 我们只在客户端的控制台上看到了调试输入. 这是因为我们是通过客户端进行导航的. 因此从客户端获取数据是更好的方式.

getInitialProps中应用fetch时：
1. 如果添加fetch，异常情况用catch捕获时，必须用console.log来打印出err来，会在服务端打印出来，否则页面和服务端看不到任何错误信息的提示
2. 如果添加feath, 异常情况不用catch捕获时，会走nextjs的内置错误页，在页面中呈现出来代码error信息，同时也在浏览器的控制台中打印出来

        `}</pre>

        <style jsx>{`
          .tit {
            border:1px solid #ba2364;
          }
          .tit2 {
            border:1px solid #000;
          }
        `}</style>
      </Frame>
    )
  }
}
