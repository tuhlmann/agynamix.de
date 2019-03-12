import styled from "@emotion/styled"
import theme from "../../../config/theme"

export default styled.a`
  text-decoration: none;
  box-shadow: inset 0 -5px 0 ${theme.colors.link_hover_color_15};
  &:hover {
    opacity: 1;
    box-shadow: inset 0 -5px 0 ${theme.colors.link_hover_color_40};
    transition: ease-in 0.5s border-bottom;
  }
`
