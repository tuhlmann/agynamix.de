import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import SEO from "../components/SEO"
import { css } from "@emotion/core"
import { Container } from "../components/Container"
import Layout from "../components/Layout"
import { Share } from "../components/Share"
import SubscribeForm from "../components/Forms/Subscribe"
import Markdown from "react-markdown"
import { fonts } from "../lib/typography"
import config from "../../config/website"
import { bpMaxSM } from "../lib/breakpoints"
import { get } from "lodash"
import { Tags } from "../components/Tags"

// interface IProps {
//   data: any
// }

const Post = ({ data: { site, mdx } }) => {
  const {
    author = config.author,
    title,
    slug,
    date,
    description,
    banner,
    bannerCredit,
    noFooter,
    tags,
  } = mdx.fields

  return (
    <Layout
      site={site}
      frontmatter={mdx.fields}
      pageTitle="Torsten Uhlmann's Blog"
      headerLink="/blog"
      noFooter={noFooter}
      subscribeForm={<SubscribeForm />}
    >
      <SEO
        frontmatter={mdx.fields}
        metaImage={get(mdx, "fields.banner.childImageSharp.fluid.src")}
        isBlogPost
      />
      <article
        css={css`
          width: 100%;
          display: flex;
          twitter-widget {
            margin-left: auto;
            margin-right: auto;
          }
        `}
      >
        <Container>
          <h1
            css={css`
              text-align: center;
              margin-bottom: 20px;
              margin-top: 0;
              font-family: ${fonts.light};
            `}
          >
            {title}
          </h1>
          <div
            css={css`
              display: flex;
              justify-content: center;
              margin-bottom: 20px;
              h3,
              span {
                text-align: center;
                font-size: 15px;
                opacity: 0.6;
                font-family: ${fonts.regular}, sans-serif;
                font-weight: normal;
                margin: 0 5px;
              }
            `}
          >
            {author && <h3>{author}</h3>}
            {author && <span>—</span>}
            {date && <h3>{date}</h3>}
          </div>
          {banner && (
            <div
              css={css`
                text-align: center;

                p {
                  margin-bottom: 0;
                }
                ${bpMaxSM} {
                  padding: 0;
                }
              `}
            >
              <Img sizes={banner.childImageSharp.fluid} alt={site.siteMetadata.tags.join(", ")} />
              {bannerCredit ? <Markdown>{bannerCredit}</Markdown> : null}
            </div>
          )}
          {tags && (
            <div css={{ marginTop: 10 }}>
              <Tags tags={tags} withLink invertBackground />
            </div>
          )}
          <br />
          {description ? <Markdown>{description}</Markdown> : null}
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Container>
        {/* <SubscribeForm /> */}
      </article>
      <Container noVerticalPadding>
        <Share
          url={`${config.siteUrl}${slug}`}
          title={title}
          twitterHandle={config.twitterHandle}
        />
        <br />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        tags
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        title
        noFooter
        description
        date(formatString: "MMMM dd, YYYY")
        author
        banner {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        bannerCredit
        slug
        description
        tags
      }
      body
    }
  }
`

export default Post
