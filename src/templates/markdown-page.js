import React from "react"
import { Container } from "../components/Container"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import theme from "../../config/theme"

// interface IProps {
//   pageContext: any
// }

const MarkdownPage = ({ children, pageContext: { frontmatter } }) => {
  return (
    <>
      <SEO frontmatter={frontmatter} />
      <Layout
        pageTitle={frontmatter.title}
        noFooter={frontmatter.noFooter}
        frontmatter={frontmatter}
        headerColor={theme.colors.black}
      >
        <Container>{children}</Container>
      </Layout>
    </>
  )
}

export default MarkdownPage
