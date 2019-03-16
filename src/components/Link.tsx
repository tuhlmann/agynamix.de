import React from "react"
import GatsbyLink from "gatsby-link"

interface IProps {
  to?: string
  href?: string
  activeClassName?: string
}

export const Link: React.FC<IProps> = ({children, to, href, activeClassName, ...other}) => {
  const internal = to && /^\/(?!\/)/.test(to)

  if (to && internal) {
    return (
      <GatsbyLink to={to} activeClassName={activeClassName} {...other}>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a href={to || href} {...other}>
      {children}
    </a>
  )
}
