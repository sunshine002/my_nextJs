
/**
 * hello页面
 * 支持插入独立作用域的css
 */

// import '/static/index.css';
import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <link rel="stylesheet" type="text/css" href="static/index.css" />
    </Head>
    <p className='hello'>Hello World</p>
    <p className="mod">mod模块，测试static/index.css中的样式</p>
    <p>测试static下的静态资源：<img src ='/static/red.png' /></p>

    <style jsx>{`
      .hello {
        font: 15px Helvetica, Arial, sans-serif;
        background: #eee;
        padding: 100px;
        text-align: center;
        transition: 100ms ease-in background;
      }
      .hello:hover {
        background: #ccc;
      }
    `}</style>

  </div>
)
