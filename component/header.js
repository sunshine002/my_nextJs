import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <div>
      <Link href="/">
        <a style={linkStyle}>首页(/)</a>
      </Link>
      <Link href="/hello">
        <a style={linkStyle}>测试页面组件(/hello)</a>
      </Link>
      <Link href="/dynamic">
        <a style={linkStyle}>动态组件(/dynamic)</a>
      </Link>
      <Link href="/two">
        <a style={linkStyle}>二级页面根目录(/two)</a>
      </Link>
      <Link href="/two/user">
        <a style={linkStyle}>二级页面非根目录(/two/user)</a>
      </Link>
      <Link href="/getData">
        <a style={linkStyle}>数据获取demo(/getData)</a>
      </Link>
    </div>
  </div>
)

export default Header;
