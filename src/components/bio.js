/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/avatar.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginTop: rhythm(5),
        marginBottom: rhythm(5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <section
        style={{
          fontFamily: "Noto Sans, sans-serif",
          fontWeight: 500,
          fontSize: 15,
        }}
      >
        <span style={{ fontWeight: 500, fontSize: 20 }}>Written by </span>
        <span
          style={{
            color: "#ffffff",
            fontWeight: 600,
            fontSize: 23,
            fontFamily: "Noto Sans, sans-serif",
            backgroundColor: "#e74c3c",
          }}
        >
          {author.name}
        </span>
        <br />
        <span style={{ fontSize: 12 }}>{author.summary}</span>
        <br />
        <a
          style={{ boxShadow: `none`, color: `#e74c3c`, fontWeight: 600 }}
          href={`https://github.com/${social.github}`}
        >
          Github
        </a>
      </section>
    </div>
  )
}

export default Bio
