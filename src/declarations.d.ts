// This file is used to hold ambient type declarations, as well as type shims
// for npm module without type declarations, and assets files.

// For example, to shim modules without declarations, use:
// declare module "package-without-declarations"

// And to shim assets, use (one file extension per `declare`):
// declare module "*.png"

declare module "*.svg"
declare module "*.png"
declare module "*.jpg"
declare module "*.gif"

declare module "@sindresorhus/slugify" {
  function slugify(name: string): string
  export default slugify
}

declare module "gatsby-mdx/mdx-renderer" {
  export default class MDXRenderer extends React.Component<any> {}
}

declare module "@mdx-js/tag" {
  export class MDXProvider extends React.Component<any> {}
}

declare module "react-share"
