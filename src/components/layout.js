import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const borderStyle = {
    borderTop: "1px solid black",
  }
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          marginTop: 0,
          marginBottom: 5,
          fontFamily: `Noto Sans KR`,
          fontWeight: 400,
          borderBottom: "1px solid black",
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h1
        style={{
          fontFamily: `Noto Sans KR, sans-serif`,
          fontWeight: 400,
          marginTop: 0,
          marginBottom: 5,
          borderBottom: "1px solid black",
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        marginBottom: 50,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(2 / 4)}`,
        fontFamily: `Noto Sans KR, sans-serif`,
        fontWeight: 500,
      }}
    >
      <header style={{ marginBottom: 100 }}>{header}</header>
      <mains>{children}</mains>
      <footer style={borderStyle}>
        ©Jiwon {new Date().getFullYear()}, Built with
        {` `}
        <Link
          style={{ boxShadow: `none`, color: `#e74c3c` }}
          to="https://www.gatsbyjs.org"
        >
          Gatsby
        </Link>
      </footer>
    </div>
  )
}

export default Layout
