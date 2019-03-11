import {css} from "@emotion/core"
import styled from "@emotion/styled"
import {graphql} from "gatsby"
import React from "react"
import ReactDOM from "react-dom"
import theme from "../../config/theme"
import website from "../../config/website"
import {SimpleHero} from "../components/simple-hero"
import Container, {FullWidthContainer} from "../components/Container"
import Layout from "../components/Layout"
import Link from "../components/Link"
import SEO from "../components/SEO"
import {bpMaxMD, bpMaxSM} from "../lib/breakpoints"
import parseQueryString from "../lib/parse-query-string"
import {fonts, rhythm} from "../lib/typography"

import resumeImg from "../images/resume.svg"
import skillsImg from "../images/skills.svg"
import clientImg from "../images/client.svg"

import photoOfTorsten from "../images/hero/torsten.png"
import {NavLink, TextLink, TextExtLink} from "../components/Header"

interface IProps {
  backgroundColor: string
  image: string
  title: string
  description?: string
  link: string
  big?: boolean
}

const Card: React.SFC<IProps> = ({backgroundColor = "#E75248", image, title, description, link, big = false}) => (
  <Link
    to={link}
    aria-label={`View ${title}`}
    css={css`
      * {
        color: white;
        margin: 0;
      }
      display: flex;
      justify-content: space-between;
      align-items: center;
      h4 {
        font-size: 22px;
        padding: ${big ? "0 20px 0 40px" : "40px 40px 0 40px"};
      }
      p {
        padding: 20px 40px 0 40px;
        font-size: 16px;
        opacity: 0.85;
        ${bpMaxSM} {
          padding: 20px 20px 0 40px;
        }
      }
      ${bpMaxMD} {
          flex-direction: column;
          align-items: center;
          ${big &&
            `
          text-align: center;
          h4 {
            padding: 40px 40px 0 40px;
          }
          img {
            width: 100%;
          }
          p {
            padding-bottom: 40px;
          }
          `}
        }
      ${!big &&
        `
        align-items: flex-start;
        flex-direction: column; 
        img {
          margin-top: 20px;
        }
        ${bpMaxMD} {
          align-items: center;
          img {
            width: 100%;
          }
         h4 {
           padding: 40px 0 0 0;
         }
        }
      `}
      background: ${backgroundColor};
      overflow: hidden;
      border-radius: 5px;
      margin-bottom: ${big ? "20px" : "20px"};
      img {
        transition: ${theme.transition.ease};
      }
      @media (hover: hover) {
      :hover:not(.touch) {
        transform: scale(1.03);
        box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.15);
      }
      }
    `}
  >
    <div>
      <h4>{title}</h4>
      {description && <p>{description}</p>}
    </div>
    <img src={image} alt={title} />
  </Link>
)

const PostTitle = styled.h3`
  margin-bottom: ${rhythm(0.3)};
  transition: ${theme.transition.ease};
  font-size: 22px;
  font-family: ${fonts.regular};
  :hover {
    color: ${theme.brand.primary};
    transition: ${theme.transition.ease};
  }
`

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
`

// this component is one big shrug. I didn't have time to get good at animation
// and it's such a simple single-use component hack something I could ship...
function SubscribeConfirmation() {
  const portalContainerRef = React.useRef<HTMLElement>()
  const [showMessage, setShowMessage] = React.useState(false)
  const [animateIn, setAnimateIn] = React.useState(false)
  React.useEffect(() => {
    portalContainerRef.current = document.createElement("div")
    Object.assign(portalContainerRef.current.style, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 11
    })
    document.body.append(portalContainerRef.current)
  }, [])

  React.useEffect(() => {
    if (parseQueryString(window.location.search).hasOwnProperty("subscribed")) {
      setTimeout(() => {
        setShowMessage(true)
        setTimeout(() => {
          setShowMessage(false)
        }, 4500)
      }, 200)
    }
  }, [])
  React.useEffect(() => {
    if (showMessage) {
      setAnimateIn(true)
      setTimeout(() => setAnimateIn(false), 4000)
    }
  }, [showMessage])

  if (showMessage) {
    return ReactDOM.createPortal(
      <button
        onClick={() => setAnimateIn(false)}
        css={css`
          border-radius: 0;
          width: 100%;
          padding: 20px;
          display: flex;
          justify-content: center;
          background-color: ${theme.colors.green};
          color: ${theme.colors.primary_light};
          transition: 0.3s;
          transform: translateY(${animateIn ? "0" : "-85"}px);
        `}
      >
        Thanks for subscribing!
      </button>,
      portalContainerRef.current!
    )
  } else {
    return null
  }
}

interface IRoundLinkProps {
  background: string
  link: string
  text: string
}

const RoundLink: React.SFC<IRoundLinkProps> = ({background, link, text}) => {
  return (
    <Link to={link}>
      <div
        css={{
          width: 130,
          height: 130,
          display: "flex",
          margin: 5,
          background,
          backgroundPosition: "center",
          backgroundSize: "contain",
          borderRadius: "50%",
          justifyItems: "center",
          padding: 10
        }}
      >
        <span
          css={{
            margin: "auto",
            textAlign: "center",
            color: "white",
            opacity: 0.8,
            "&:hover": {
              opacity: 1
            }
          }}
        >
          {text}
        </span>
      </div>
    </Link>
  )
}

export default function Index(dataWrapper: any) {
  const {
    data: {allMdx}
  } = dataWrapper
  return (
    <Layout headerColor={theme.colors.black} hero={<SimpleHero />} pageTitle="AGYNAMIX - Passionate Software">
      <SEO />
      <SubscribeConfirmation />
      <Container
        maxWidth={1200}
        css={css`
          display: flex;
          justify-content: space-around;
          position: relative;
          padding-bottom: 0;
          background: ${theme.colors.background_color};
          border-radius: 5px;
          padding: 100px 120px 60px 120px;
          margin-bottom: ${rhythm(1)};
          ${bpMaxMD} {
            padding: auto;
          }
          ${bpMaxSM} {
            border-radius: 0;
            flex-direction: column;
            align-items: center;
          }
          h2 {
            margin-bottom: ${rhythm(1.5)};
          }
        `}
      >
        <div css={{flexGrow: 1, alignSelf: "center"}}>
          <div
            css={{
              maxWidth: 380,
              [bpMaxSM]: {
                width: 200
              }
            }}
          >
            <img
              src={photoOfTorsten}
              alt="Torsten Uhlmann"
              css={{maxWidth: "90%", marginBottom: 0, borderRadius: "50%"}}
            />
          </div>
        </div>
        <div css={{flexGrow: 1, maxWidth: 600}}>
          <div>
            <h1 css={{marginTop: 0}}>Hello, my name is Torsten.</h1>
            <p>
              I'm a Full Stack software developer working with Scala, Java, Clojure and Typescript,{" "}
              <TextLink to="/resume#skills">amongst others</TextLink>.
            </p>
            <p>
              I love developing <TextLink to="/products">new things</TextLink> and working with{" "}
              <TextLink to="/clients">great teams</TextLink>; I taught{" "}
              <TextLink to="/resume#training">courses</TextLink>, spoke at{" "}
              <TextLink to="/resume#training">conferences</TextLink> and wrote a{" "}
              <TextLink to="/resume#training">book</TextLink>.
            </p>
            <h2 style={{marginBottom: "10px"}}>More about me:</h2>
          </div>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              ${bpMaxSM} {
                flex-direction: column;
                align-items: center;
              }
            `}
          >
            <RoundLink
              background={`linear-gradient(45deg, rgba(219, 87, 86, 0.75), rgba(219, 87, 86, 1)), url(${resumeImg})`}
              link="/resume"
              text="My Resume"
            />
            <RoundLink
              background={`linear-gradient(45deg, rgba(6, 19, 36, 0.75), rgba(6, 19, 36, 1)), url(${skillsImg})`}
              link="/consulting"
              text="Consulting"
            />
            <RoundLink
              background={`linear-gradient(45deg, rgba(73, 115, 140, 0.75), rgba(73, 115, 140, 1)), url(${clientImg})`}
              link="/clients"
              text="My Clients"
            />
          </div>
          <div>
            <p style={{marginTop: 10}}>
              If you're looking for an accomplished software engineer you've come to the right place,{" "}
              <TextExtLink href={website.contactEmail}>let's get in touch!</TextExtLink>
            </p>
          </div>
        </div>
      </Container>
      {/* <Container
        css={css`
          margin-top: -20px;
          position: relative;
          padding-bottom: 0;
          background: white;
          border-radius: 5px;
          padding: 40px 80px 60px 80px;
          margin-bottom: ${rhythm(1)};
          ${bpMaxMD} {
            padding: auto;
          }
          ${bpMaxSM} {
            border-radius: 0;
          }
          h2 {
            margin-bottom: ${rhythm(1.5)};
          }
        `}
      >
        <h2>Blog</h2>
        {allMdx.edges.map((edge: any) => {
          const { node: post } = edge
          return (
          <div
            key={post.id}
            css={css`
              margin-bottom: 40px;
            `}
          >
            <Link to={post.fields.slug} aria-label={`View ${post.frontmatter.title}`}>
              <PostTitle>{post.frontmatter.title}</PostTitle>
            </Link>
            <Description>
              {post.excerpt}{" "}
              <Link to={post.fields.slug} aria-label={`View ${post.frontmatter.title}`}>
                Read →
              </Link>
            </Description>
            <span />
          </div>
        )})}
        <Link to="/blog" aria-label="Visit blog page">
          View all articles
        </Link>
      </Container> */}
      {/* <FullWidthContainer css={{backgroundColor: theme.colors.background_color}}>
        <Card
          big={true}
          backgroundColor={theme.colors.red}
          title="DevTips"
          description="My YouTube channel where I livestream every weekday about Web Development. Come join me and learn something new."
          image={devtipsImg}
          link="http://kcd.im/devtips"
        />
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(auto-fit, 226px);
            grid-gap: 20px;
            ${bpMaxSM} {
              grid-template-columns: 1fr;
            }
          `}
        >
          <Card backgroundColor={theme.colors.purple} title="Workshops" image={workshopsImg} link="/workshops" />
          <Card title="Talks" backgroundColor={theme.colors.blue} image={talksImg} link="/talks" />
          <Card
            title="3 Minutes with Kent"
            backgroundColor={theme.colors.yellow}
            image={minutesImg}
            link="https://www.briefs.fm/3-minutes-with-kent"
          />
        </div>
      </FullWidthContainer> */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(
      limit: 5
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {
        frontmatter: {published: {ne: false}, unlisted: {ne: true}}
        fileAbsolutePath: {regex: "//content/blog//"}
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            keywords
          }
        }
      }
    }
  }
`
