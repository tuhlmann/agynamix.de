import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Blog from "../components/blog"

const CodingBlog = props => {
  return <Blog {...props} />
}

const CodingBlogWithData = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: {
              frontmatter: { published: { ne: false }, unlisted: { ne: true } }
              fileAbsolutePath: { regex: "//content/blog//" }
            }
          ) {
            edges {
              node {
                excerpt(pruneLength: 300)
                id
                fields {
                  title
                  slug
                  date
                }
                parent {
                  ... on File {
                    sourceInstanceName
                  }
                }
                frontmatter {
                  title
                  date(formatString: "MMMM dd, YYYY")
                  banner {
                    childImageSharp {
                      fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                      }
                    }
                  }
                  slug
                  tags
                }
              }
            }
          }
        }
      `}
      render={data => <CodingBlog data={data} {...props} />}
    />
  )
}

export default CodingBlogWithData
