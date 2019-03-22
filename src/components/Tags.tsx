import React from "react"
import { Link } from "./Link"
import { css } from "@emotion/core"
import theme from "../../config/theme"
import { bpMaxSM } from "../lib/breakpoints"
import kebabCase from "lodash/kebabCase"

interface ITagProps {
  tag: string
  withLink?: boolean
  invertBackground?: boolean
}

export const Tag: React.FC<ITagProps> = ({tag, withLink = false, invertBackground = false}) => {
  const SpanOrLink = withLink ? "a" : "span"

  return (
    <SpanOrLink
      css={css`
        padding: 1px 8px;
        border: 1px solid #f1f1f1;
        border-radius: 15px;
        font-size: 12px;
        margin: 2px;
        background-color: ${invertBackground ? theme.colors.white : theme.colors.background_color};
      `}
      href={withLink ? `/tags/${kebabCase(tag)}/` : undefined}
    >
      {tag}
    </SpanOrLink>
  )
}

interface ITagsProps {
  tags: string[]
  withLink?: boolean
  invertBackground?: boolean
}

export const Tags: React.FC<ITagsProps> = ({tags, withLink = false, invertBackground = false}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        margin: 0 -2px 0 -2px;
      `}
    >
      {tags.map((category, index) => (
        <Tag key={index} tag={category} withLink={withLink} invertBackground={invertBackground} />
      ))}
    </div>
  )
}
