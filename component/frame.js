/**
 * 页面框架组件：
 * 用于在此组件基础上构建多个页面
 */

import Header from './header'

export default (props) => (
  <div>
    <Header />

    {props.children}

    <style global jsx>{`
      // 更新全局样式，但只在此页面中生效，即独立作用域
      body {
        padding:10px;
      }
    `}</style>

  </div>
)
