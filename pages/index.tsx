/**
 * 入口页：
 * 测试pages目录下页面对应的路由，Link的使用，动态路由的使用
 */

import Frame from '../component/frame'
import Head from 'next/head';
import {Button} from 'antd';

let name: string = "bob";
name = "smith";

export default () => (
  <Frame>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <Head key='2'>
      {/* <title>My page title2</title> */}
      <meta name="viewport" content="initial-scale=1.2, width=device-width" key="viewport" />
    </Head>
    <pre>{`

index.js 首页面内容

app的入口页面，默认为pages下的index.js文件

`}
  </pre>
    <p>测试ts语法：{name}</p>
    {`
    测试antd库中的组件及相关样式
    `}
    <Button type='danger'>测试antd按钮</Button>
  </Frame>
)
