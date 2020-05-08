import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

import bgImage from "../../content/assets/bg_design.png"
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
          fontFamily: `Noto Sans KR, sans-serif`,
          fontWeight: 600,
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
          fontWeight: 600,
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
        backgroundImage:
          location.pathname === rootPath ? `url(${bgImage})` : ``,
      }}
    >
      <header style={{ marginBottom: 100 }}>{header}</header>
      <mains>{children}</mains>
      <footer style={borderStyle}>
        ©Jiwon {new Date().getFullYear()}, Built with
        {` `}
        <a
          style={{ boxShadow: `none`, color: `#e74c3c` }}
          href="https://www.gatsbyjs.org"
        >
          Gatsby
        </a>
      </footer>
    </div>
  )
}

export default Layout
