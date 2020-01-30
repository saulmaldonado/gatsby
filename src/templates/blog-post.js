import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { rhythm, scale } from "../utils/typography"

import './blog-post.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>

        <article>
          <header>
            <h1
              style={{
                maxWidth:'50vw',
                paddingLeft: '10px',
                marginBottom: 0,
                textAlign: 'left',
                paddingLeft:'400px',
                height: '10vh',
                paddingTop: '20px'
              }}
            >
              {post.frontmatter.title}
              <div
              style={{
                border:'black solid 2px',
                width: '60vw',
                position: 'relative',
                right: '100px',
                top: '10px'
              }}
              ></div>
            </h1>
            <p
              style={{
                display: `block`,
                fontSize: '20px',
                fontWeight:'bold',
                position:'relative',
                right: '470px'
              }}
            >
              {post.frontmatter.date}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} style={{
            maxWidth: '60vw',
            marginLeft:'auto',
            marginRight:'auto',
            display: 'flex'
          }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />

        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
