import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import theme from "../../config/theme"
import { Container } from "../components/Container"
import Layout from "../components/Layout"
import { TextLink } from "../components/Header"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

const TagsPage: React.FC<any> = ({
  data: {
    allMdx: {group}
  }
}) => (
  <Layout headerColor={theme.colors.black}>
    <SEO />
    <Container
      noVerticalPadding
      css={css`
        margin-top: 30px;
      `}
    >
      <div>
        <h1>All available Tags</h1>
        <ul>
          {group.map((tag: any) => (
            <li key={tag.fieldValue}>
              <TextLink to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </TextLink>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired
        }).isRequired
      )
    })
  })
}

export default TagsPage

export const pageQuery = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
