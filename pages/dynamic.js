/**
 * 入口页：
 * 测试pages目录下页面对应的路由，Link的使用，动态路由的使用
 * 测试withRoter的作用
 */

import Frame from '../component/frame'
import { withRouter } from 'next/router'
import Link from 'next/link'

const PostLink = (props) => {
  return (<li>
    <Link href={`/dynamic?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>);
};

export default withRouter((props) => (
  <Frame>
    <pre>
      {`
      dynamic.js 页面内容
    `}
    </pre>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="Deploy apps with Zeit" />
    </ul>
    <div>
      {props.router.query.title}
    </div>

    <style global jsx>{`
      // 更新全局样式，但只在此页面中生效，即独立作用域
      body {
        padding:10px;
      }
    `}</style>

  </Frame>
))

// export default (props) => (
//   <Frame>
//     <pre>
//     {`
//       dynamic.js 页面内容
//     `}
//     </pre>
//     <div>
//       {props.url.query.title}
//     </div>

//     <style global jsx>{`
//       // 更新全局样式，但只在此页面中生效，即独立作用域
//       body {
//         padding:10px;
//       }
//     `}</style>

//   </Frame>
// )
