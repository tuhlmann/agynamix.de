import React from "react"
import { css } from "@emotion/core"
import { bpMaxSM } from "../lib/breakpoints"

interface IProps {
  maxWidth?: number
  noHorizontalPadding?: boolean
  noVerticalPadding?: boolean
}

export const Container: React.FC<IProps> = props => {
  const {maxWidth = 920, noHorizontalPadding = false, noVerticalPadding = false, ...restProps} = props
  return (
    <div
      css={css`
        width: 100%;
        margin: 0 auto;
        max-width: ${maxWidth + (noHorizontalPadding ? 0 : 80)}px;
        padding: ${noVerticalPadding ? 0 : "40"}px ${noHorizontalPadding ? 0 : "40"}px;
        ${bpMaxSM} {
          padding: ${noVerticalPadding ? 0 : "20"}px ${noHorizontalPadding ? 0 : "20"}px;
        }
      `}
      {...restProps}
    >
      {props.children}
    </div>
  )
}

export const FullWidthContainer: React.FC<IProps> = props => {
  const {noHorizontalPadding = false, noVerticalPadding = false, ...restProps} = props
  return (
    <div
      css={css`
        width: 100%;
        margin: 0 auto;
        padding: ${noVerticalPadding ? 0 : "40"}px ${noHorizontalPadding ? 0 : "40"}px;
        ${bpMaxSM} {
          padding: ${noVerticalPadding ? 0 : "20"}px ${noHorizontalPadding ? 0 : "20"}px;
        }
      `}
      {...restProps}
    >
      {props.children}
    </div>
  )
}
