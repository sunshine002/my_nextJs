## 项目说明
主要用来实践next.js框架

## basic-css-app
练习styled-jsx的使用

## 代码转换工具
- url-to-withrouter.js
  - 把pages中的url对象转换为router对象
  - 生成方式：
    - curl -L https://github.com/zeit/next-codemod/archive/master.tar.gz | tar -xz --strip=2 next-codemod-master/transforms/url-to-withrouter.js
  
  - 结合facebook中的jscodeshift工具包来使用
    - https://github.com/zeit/next-codemod#url-to-withrouter
  - 代码转换命令：
    - jscodeshift -t ./url-to-withrouter.js pages/**/*.js

## out静态导出功能

- 可以next.config.js中配置要导出的页面，不配置默认导出pages下所有页面

- 执行npm run export 命令后生成静态站点

  注意！！：使用next export，我们创建了个静态 HTML 应用。构建时将会运行页面里生命周期getInitialProps 函数。

  由于req和res只在服务端可用，故不能通过getInitialProps，所以动态渲染可以运行next start或其他自定义服务端 API。即部署时如果有服务端渲染的内容则需要部署在node服务上。


## nextjs中配置反向代理

- 根目录下新建server文件夹，前端启动dev命令更新为以下

```
<!-- package.json -->

cross-env NODE_ENV=development PORT=3000 node server.js
```


## 其它

查看nextjs分享文档地址：

http://note.youdao.com/noteshare?id=bc5656151b1a502b6696a22ad1477389




