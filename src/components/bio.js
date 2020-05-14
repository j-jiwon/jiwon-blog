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
import styled from "styled-components"
import Theme from "../Styles/Theme"

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

  const BioBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
  `

  const BioRow = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 500;
    margin-top: 10px;
    justify-content: space-around;
  `

  const { author, social } = data.site.siteMetadata
  return (
    <BioBox>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 30,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <BioRow>
        <span style={{ fontWeight: 500, fontSize: 15 }}>Written by </span>
        <span
          style={{
            color: Theme.whiteColor,
            fontWeight: 500,
            fontSize: 22,
            backgroundColor: Theme.baseColor,
            marginLeft: 5,
            padding: 2,
          }}
        >
          {author.name}
        </span>
      </BioRow>
      <BioRow>
        <span style={{ fontSize: 12 }}>{author.summary}</span>
      </BioRow>
      <BioRow>
        <a
          style={{ boxShadow: `none`, color: `#e74c3c`, fontWeight: 600 }}
          href={`https://github.com/${social.github}`}
        >
          Github
        </a>
      </BioRow>
    </BioBox>
  )
}

export default Bio
