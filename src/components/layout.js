import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
//import bgImage from "../../content/assets/bg_design.png"
import Theme from "../styles/Theme"

const Layout = ({ location, title, children }) => {
  let header = (
    <h1
      style={{
        marginTop: 0,
        marginBottom: 5,
        color: "#000000",
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

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(2 / 4)}`,
        fontWeight: 500,
        // backgroundImage:
        //   location.pathname === rootPath ? `url(${bgImage})` : ``,
      }}
    >
      <header style={{ marginBottom: 80 }}>{header}</header>
      <mains>{children}</mains>
      <footer
        style={{
          marginTop: 40,
          textAlign: "center",
          borderTop: "1px solid black",
        }}
      >
        ©Jiwon {new Date().getFullYear()}, Built with
        {` `}
        <a
          style={{ boxShadow: `none`, color: `${Theme.baseColor}` }}
          href="https://www.gatsbyjs.org"
        >
          Gatsby
        </a>
      </footer>
    </div>
  )
}

export default Layout
