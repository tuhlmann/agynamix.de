import React from 'react'
import { css } from '@emotion/core'
import theme from '../../config/theme'
import { bpMaxMD, bpMaxSM } from '../lib/breakpoints'
import { rhythm } from '../lib/typography'
import Container, { FullWidthContainer } from './Container'

interface IProps {
  children?: JSX.Element[]
  message?: string
}

export const SimpleHero: React.SFC<IProps> = ({
  children
}) => {
  return (
    <section
      css={css`
        * {
          color: ${theme.colors.white};
        }
        width: 100%;
        z-index: 0;
        position: relative;
        align-items: center;
        display: flex;
        padding-top: 20px;
        background-color: ${theme.colors.background_color};
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
              overflow: hidden;
              background-position-y: 10px;
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
        </h1>
        <div
          css={{
            marginRight: '-160px',
            width: 380,
            [bpMaxMD]: {
              display: 'none',
              visibility: 'hidden',
            },
          }}
        >
        </div>
      </Container>
    </section>
  )
}

