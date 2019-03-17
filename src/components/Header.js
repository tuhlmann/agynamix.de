import React from "react"
import { Link } from "./Link"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import theme from "../../config/theme"
import { fonts } from "../lib/typography"

import { MobileNav } from "./MobileNav"
import { Container } from "./Container"
import { bpMaxSM } from "../lib/breakpoints"
import logo from "../images/logo.png"

function HeaderLink(props) {
  const { headerColor, ...myProps } = props
  return (
    <Link
      activeClassName="active"
      css={{
        textDecoration: "none",
        width: "fit-content",
        color: headerColor ? headerColor : theme.colors.black,
        "&:hover,&:focus": {
          color:
            headerColor === theme.colors.white
              ? "white"
              : theme.colors.link_color_hover,
        },
      }}
      {...myProps}
    />
  )
}

export const NavLink = styled(HeaderLink)({
  margin: "8px",
  background: "transparent",
  opacity: 0.8,
  "& + &": { marginLeft: 15 },
  "&:hover": {
    opacity: 1,
    boxShadow: `inset 0 -5px 0 ${theme.colors.link_hover_color_40}`,
    transition: "ease-in 0.5s border-bottom",
  },
  [bpMaxSM]: {
    display: "none",
  },
  "&.active": {
    boxShadow: `inset 0 -5px 0 ${theme.colors.link_hover_color_40}`
  },
})

export const TextLink = styled(HeaderLink)({
  background: "transparent",
  opacity: 1,
  boxShadow: `inset 0 -5px 0 ${theme.colors.link_hover_color_15}`,
  transition: "ease-in 0.5s border-bottom",
  "&:hover": {
    opacity: 1,
    boxShadow: `inset 0 -5px 0 ${theme.colors.link_hover_color_40}`,
    transition: "ease-in 0.5s border-bottom",
  },
})

const Header = ({
  dark,
  bgColor = "none",
  /*siteTitle,*/
  headerLink = "/",
  headerColor = "black",
  fixed = false,
}) => (
    <header
      css={css`
      width: 100%;
      flex-shrink: 0;
      background: none;
      padding: 30px 0 0 0;
      ${bpMaxSM} {
        padding: 35px 0 0 0;
      }
      background: ${dark ? "#090909" : `${bgColor}` || "none"};
      z-index: 10;
      position: ${fixed ? "fixed" : "absolute"};
      top: 0;
      font-family: ${fonts.regular};
    `}
    >
      <Container noVerticalPadding noHorizontalPadding maxWidth={1000}>
        <nav
          css={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <HeaderLink
            to={headerLink}
            aria-label="go to homepage"
            headerColor={headerColor}
          >
            <img
              src={logo}
              alt="Torsten Uhlmann"
              css={{ maxWidth: "200px", marginBottom: 0, verticalAlign: "bottom" }}
            />
          </HeaderLink>
          <div
            css={css`
            font-size: 18px;
            line-height: 1.25;
            display: flex;
            align-items: center;
            .mobile-nav {
              display: none;
              visibility: hidden;
              ${bpMaxSM} {
                display: block;
                visibility: visible;
              }
            }
          `}
          >
            <MobileNav color={headerColor} />
            <NavLink
              headerColor={headerColor}
              to="/consulting"
              aria-label="View consulting page"
            >
              Consulting
          </NavLink>
            <NavLink
              headerColor={headerColor}
              to="/clients"
              aria-label="View clients page"
            >
              Clients
          </NavLink>
            <NavLink
              headerColor={headerColor}
              to="/products"
              aria-label="View products page"
            >
              Products
          </NavLink>
            <NavLink
              headerColor={headerColor}
              to="/blog"
              aria-label="View blog page"
            >
              Blog
          </NavLink>
            <NavLink
              headerColor={headerColor}
              to="/about"
              aria-label="View about page"
            >
              About
          </NavLink>
          </div>
        </nav>
      </Container>
    </header>
  )

export default Header
