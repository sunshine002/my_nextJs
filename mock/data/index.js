

module.exports = {
	// 上传接口返回值测试
	'/nextjs/init':{
    retcode:200,
    retdesc:'描述信息',
    data:{
      message:'从服务器调接口返回的内容',
    }
  },

  '/nextjs/data':{
    retcode:200,
    retdesc:'描述信息',
    data:{
      ms:'从客户端调接口返回的内容'
    }
  },

  '/nextjs/props':{
    message:'getInitialProps方法中调用接口返回的数据'
  }
}
