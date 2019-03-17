import React from "react"

import Title from "./Title"
import Subtitle from "./Subtitle"
import Paragraph from "./Paragraph"
import Code from "./Code"
import { TextLink } from "../Header"

export default {
  h1: props => <Title {...props} />,
  h2: props => <Subtitle {...props} />,
  p: props => <Paragraph {...props} />,
  a: props => <TextLink {...props} />,
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />
    }
  },
}

// lifted this from mdx-utils
// it doesn't compile it's code and this busted IE, so I'm just vendoring it.
function preToCodeBlock(preProps) {
  if (
    // children is MDXTag
    preProps.children &&
    // MDXTag props
    preProps.children.props &&
    // if MDXTag is going to render a <code>
    preProps.children.props.name === "code"
  ) {
    // we have a <pre><code> situation
    const {
      children: codeString,
      props: { className, ...props },
    } = preProps.children.props

    return {
      codeString: codeString.trim(),
      language: className && className.split("-")[1],
      ...props,
    }
  }
}
/* eslint react/display-name:0, consistent-return:0 */

