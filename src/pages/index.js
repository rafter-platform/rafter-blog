import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import JournalWarning from '../components/JournalWarning'

export default function BlogIndex({ data, location }) {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.posts.edges
  const journals = data.journals.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        )
      })}
      <Journals journals={journals} />
    </Layout>
  )
}

function Journals({ journals }) {
  return (
    <div
      style={{
        backgroundColor: '#ffffda',
        padding: '1em',
        marginBottom: '2em',
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: '0.5em',
          fontSize: '1em',
        }}
      >
        Journals
      </h2>
      <JournalWarning />
      <ul style={{ marginBottom: 0, marginTop: '1em' }}>
        {journals.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <li key={node.fields.slug}>
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: rhythm(1 / 4),
                  fontSize: '1.1em',
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const pageQuery = graphql`
  fragment postFields on Mdx {
    excerpt
    fields {
      slug
    }
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
    }
  }

  query {
    site {
      siteMetadata {
        title
      }
    }
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { ne: "journal" } } }
    ) {
      edges {
        node {
          ...postFields
        }
      }
    }
    journals: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "journal" } } }
    ) {
      edges {
        node {
          ...postFields
        }
      }
    }
  }
`
