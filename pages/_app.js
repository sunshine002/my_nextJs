import App, {Container} from 'next/app'
import React from 'react'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return <Container>
    <p style={{paddingBottom:'50px'}}>app框架组件中的公共内容</p>
      <Component {...pageProps} />
    </Container>
  }
}
