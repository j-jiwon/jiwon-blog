import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Category from "../components/category"
import GlobalStyles from "../styles/GlobalStyles"
import Theme from "../Styles/Theme"
import { ThemeProvider } from "styled-components"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <ThemeProvider theme={Theme}>
      <Layout location={location} title={siteTitle}>
        <GlobalStyles />
        <SEO title="All posts" />
        <Bio />
        <Category />
        <div
          style={{
            borderTop: "1px solid black",
            borderLeft: "1px solid black",
            borderRight: "1px solid black",
            marginBottom: 20,
          }}
        >
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article
                key={node.fields.slug}
                style={{
                  borderBottom: "1px solid black",
                  padding: 10,
                  paddingLeft: 20,
                  height: "180px",
                }}
              >
                <header>
                  <h4>
                    <Link
                      style={{ boxShadow: `none`, color: "#000000" }}
                      to={node.fields.slug}
                    >
                      {title}
                    </Link>
                  </h4>
                  <small>{node.frontmatter.date}</small>
                </header>
                <section style={{ marginTop: 5 }}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                    style={{ lineHeight: 1.3 }}
                  />
                </section>
              </article>
            )
          })}
        </div>
      </Layout>
    </ThemeProvider>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
