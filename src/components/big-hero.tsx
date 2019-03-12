import React from "react"
import {css} from "@emotion/core"
import theme from "../../config/theme"
import {bpMaxMD, bpMaxSM} from "../lib/breakpoints"
import {rhythm} from "../lib/typography"
import Container from "./Container"

import photoOfTorsten from "../images/hero/torsten.png"

interface IProps {
  children?: JSX.Element[]
  message?: string
}

const BigHero: React.SFC<IProps> = ({
  children,
  message = `Hi, I'm AGYNAMIX. I'm a passionate full stack software developer,
  here to help you and your team deliver outstanding products.`
}) => {
  return (
    <section
      css={css`
        * {
          color: ${theme.colors.white};
        }
        width: 100%;
        background: #7487cc;
        background-image: linear-gradient(-213deg, #3f3f3f 0%, #7487cc 100%);
        background-position: center right, center left;
        background-repeat: no-repeat;
        background-size: contain;
        z-index: 0;
        position: relative;
        align-items: center;
        display: flex;
        padding-top: 40px;
        ${bpMaxMD} {
          background-size: cover;
        }
        ${bpMaxSM} {
          padding-top: 60px;
        }
      `}
    >
      {children}
      <Container
        css={css`
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          //justify-content: center;
          padding-bottom: 0;
          ${bpMaxMD} {
            flex-direction: column;
            align-items: center;
          }
        `}
      >
        <div
          css={css`
            display: none;
            visibility: hidden;
            ${bpMaxMD} {
              display: block;
              visibility: visible;
              border-radius: 50%;
              width: 160px;
              height: 160px;
              overflow: hidden;
              //background: #241d44;
              background: #4b4ddf;
              background-image: url(${photoOfTorsten});
              background-size: cover;
              background-position-y: 10px;
              background-repeat: no-repeat;
              margin-bottom: 25px;
            }
          `}
        />
        <h1
          css={css`
            position: relative;
            z-index: 5;
            line-height: 1.5;
            margin: 0;
            max-width: ${rhythm(17)};
            font-size: 30px;
            height: 100%;
            display: flex;
            align-self: center;
            padding-bottom: 40px;
          `}
        >
          {message}
        </h1>
        <div
          css={{
            marginRight: "-160px",
            width: 380,
            height: 336,
            [bpMaxMD]: {
              display: "none",
              visibility: "hidden"
            }
          }}
        >
          <img src={photoOfTorsten} alt="Torsten Uhlmann" css={{maxWidth: "90%", marginBottom: 0}} />
        </div>
      </Container>
    </section>
  )
}

export default BigHero
