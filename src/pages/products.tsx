import React from "react"
import {css} from "@emotion/core"
import Layout from "../components/Layout"
import Container from "../components/Container"
import SEO from "../components/SEO"
import theme from "../../config/theme"
import story from "../data/story"
import {StoryRenderer} from "../components/StoryRenderer"
import {Categories} from "../lib/prepare-story-data"

export default function Clients() {
  return (
    <Layout headerColor={theme.colors.black}>
      <SEO />
      <Container
        noVerticalPadding
        css={css`
          margin-top: 30px;
        `}
      >
        <StoryRenderer story={story} categories={[Categories.Product]} withDescription />
      </Container>
    </Layout>
  )
}
