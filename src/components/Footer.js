import React from "react"
import Link from "../components/Link"
import { css } from "@emotion/core"
import { bpMaxSM } from "../lib/breakpoints"
// import SubscribeForm from './Forms/Subscribe'
import { Twitter, GitHub, LinkedIn, Facebook } from "./Social"
import Container from "./Container"
import theme from "../../config/theme"
import website from "../../config/website"
import styled from "@emotion/styled"
import { ContactIcon, FollowIcon, CopyrightIcon, CallIcon } from "./ConfirmMessage/Illustrations"

// import Signature from '../images/signature.png'

function FooterLink({ ...props }) {
  const footerColor = theme.colors.white
  return (
    <Link
      activeClassName="active"
      css={{
        textDecoration: "none",
        color: footerColor,
        "&:hover,&:focus": {
          color: "white",
        },
      }}
      {...props}
    />
  )
}

const NavLink = styled(FooterLink)({
  padding: "8px",
  borderRadius: "3px",
  background: "transparent",
  opacity: 0.8,
  "&:hover": {
    opacity: 1,
  },
  "&.active": {
    background: "rgba(40, 28, 77, 0.7)",
  },
})

function FooterExtLink({ children, ...props }) {
  const footerColor = theme.colors.white
  return (
    <a
      css={{
        textDecoration: "none",
        color: footerColor,
        "&:hover,&:focus": {
          color: "white",
        },
      }}
      {...props}
    >{children}</a>
  )
}

const ExternalLink = styled(FooterExtLink)({
  padding: "8px",
  borderRadius: "3px",
  background: "transparent",
  opacity: 0.8,
  "&:hover": {
    opacity: 1,
  },
  "&.active": {
    background: "rgba(40, 28, 77, 0.7)",
  },
})

const Paragraph = styled.p`
  opacity: 0.8;
  padding: 8px;
  margin: 0 0 0 10px;
`

// { subscribeForm = <SubscribeForm /> }
const Footer = () => (
  <footer
    css={css`
      background: linear-gradient(rgba(6, 19, 36, 0.9), rgba(6, 19, 36, 1));
      color: white;
      margin-top: 10px;
      @media print
      {    
        display: none !important;
      }
    `}
  >
    <Container maxWidth={1000}
      css={css`
        padding: 10px 20px 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        ${bpMaxSM} {
          padding-top: 0;
          flex-direction: column;
          align-items: flex-start;
        }
      `}
    >
      {/* {subscribeForm ? (
        <div css={{ marginTop: -40 }}>
          {subscribeForm}
          <br />
          <br />
        </div>
      ) : null} */}
      <div css={css`
        text-align: left;
        display: flex;
        justify-content: center;
        align-items: center;
      `}>
        {CallIcon}
        <Paragraph>
          0049 3721 273445<br />
          <ExternalLink css={css`opacity: 1; padding: 0;`} href={website.contactEmail}>tuhlmann@agynamix.de</ExternalLink>
        </Paragraph>
      </div>
      <div css={css`
        text-align: left;
        display: flex;
        justify-content: center;
        align-items: center;
      `}>
        {ContactIcon}
        <Paragraph>
          AGYNAMIX®<br />
          Buchenweg 5<br />
          09380 Thalheim<br />
        </Paragraph>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          img {
            margin: 50px 0;
            ${bpMaxSM} {
              margin: 20px 0;
            }
          }
        `}
      >
        {FollowIcon}
        <Facebook />
        <Twitter />
        <GitHub />
        <LinkedIn />

        {/* <Link to="/" aria-label="Return to homepage">
          <img
            src={Signature}
            alt="Kent C. Dodds" 
            css={css`
              max-width: 100px;
            `}
          />
        </Link> */}
      </div>
      <div css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        `}>
        {CopyrightIcon}
        <div>
          <NavLink css={{ marginLeft: 10 }} to="/imprint">Imprint</NavLink>{" / "}<NavLink to="/privacy-policy">Privacy Policy</NavLink>
          <Paragraph>
            © 2019 by Torsten Uhlmann.
          <br />
            Built with {" "} <span dangerouslySetInnerHTML={{ __html: "\u2764" }} /> in Thalheim.
          </Paragraph>
        </div>
      </div>
    </Container >
  </footer >
)

export default Footer
