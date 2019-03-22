import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import theme from "../../config/theme"
import { Container } from "../components/Container"
import Layout from "../components/Layout"
import { TextLink } from "../components/Header"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

// interface IProps {
//   pageContext: any
//   data: any
// }

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`

  return (
    <Layout headerColor={theme.colors.black}>
      <SEO />
      <Container
        noVerticalPadding
        css={css`
          margin-top: 30px;
        `}
      >
        <div>
          <h1>
            {tagHeader} / <TextLink to="/tags">All Tags</TextLink>
          </h1>
          <ul>
            {edges.map((edge) => {
              const { node } = edge
              const { slug } = node.fields
              const { title } = node.frontmatter
              return (
                <li key={slug}>
                  <TextLink to={slug}>{title}</TextLink>
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired
            })
          })
        }).isRequired
      )
    })
  })
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {tags: {in: [$tag]}}}
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
