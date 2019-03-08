import React from "react"
import {css} from "@emotion/core"
import Layout from "../components/Layout"
import Container from "../components/Container"
import SEO from "../components/SEO"
import theme from "../../config/theme"
import clients from "../data/clients"
import {ClientRenderer} from "../components/ClientRenderer"

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
        <ClientRenderer clients={clients} />
      </Container>
    </Layout>
  )
}
