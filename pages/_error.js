import React from 'react'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    console.log(this.props)
    return (
      <p>
        {this.props.statusCode
          ? `自定义error内容：${this.props.statusCode} occurred on server`
          : '自定义error内容 occurred on client'}
      </p>
    )
  }
}
