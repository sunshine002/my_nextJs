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

## out
- 执行export命令后生成的静态站点

## nextjs中配置反向代理



