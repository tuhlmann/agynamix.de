import React from "react"
import { css } from "@emotion/core"
import { isEmpty } from "lodash"
import styled from "@emotion/styled"
import Markdown from "react-markdown"
import { bpMaxSM } from "../lib/breakpoints"
import {
  StoryData,
  formatDate,
  AllowedCategories,
  Recommendation,
  ImageElement,
  Alignment
} from "../lib/prepare-story-data"
import theme from "../../config/theme"
import { TextLink } from "./Header"
import { subYears, compareAsc } from "date-fns"
import { Tags } from "./Tags"

interface IProps {
  story: StoryData[]
  withDescription?: boolean
  withImages?: boolean
  categories?: AllowedCategories[]
  yearsBack?: number
  more?: string
  less?: string
}

const RecommendationStrong = styled.span`
  align-self: flex-end;
  font-weight: 600;
  opacity: 0.8;

  .date {
    font-style: italic;
  }
`

function renderClientImage(url?: string, img?: any) {
  const divCss = {
    [bpMaxSM]: {alignSelf: "center"}
  }

  if (img) {
    const i = <img css={{maxWidth: 200}} src={img} />
    if (url) {
      return (
        <div css={divCss}>
          <a href={url}>{i}</a>
        </div>
      )
    }
    return <div css={divCss}>{i}</div>
  }
  return null
}

function renderRecommendation(recommendation: Recommendation) {
  const {title, link, by, date, description} = recommendation
  const titleElem = link ? (
    <TextLink href={link}>
      <RecommendationStrong>{title}</RecommendationStrong>
    </TextLink>
  ) : (
    <RecommendationStrong>{title}</RecommendationStrong>
  )

  const niceDate = date ? formatDate(date) : undefined

  return (
    <>
      {titleElem}
      {description && <Markdown source={description} />}
      {by && (
        <RecommendationStrong>
          <span>{by}</span>
          {niceDate && <span className="date">, {niceDate}</span>}
        </RecommendationStrong>
      )}
    </>
  )
}

function renderRecommendations(recommendations?: Recommendation[]) {
  {
    if (!recommendations || !recommendations.length) {
      return null
    }

    return (
      <div
        css={css`
          margin-top: 20px;
          font-size: 16px;
        `}
      >
        <h4>Recommendations</h4>
        <ul>
          {recommendations.map((r, idx) => (
            <li
              key={idx}
              css={{
                "& + &": {marginTop: 20}
              }}
            >
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  width: 100%;
                `}
              >
                {renderRecommendation(r)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function renderImage(imageElement: ImageElement) {
  const {image, align, description} = imageElement
  const imgEl = (
    <div css={{padding: "0 5px"}}>
      <img css={{maxWidth: 350}} src={image} />
    </div>
  )
  const txt = (
    <div css={{padding: "0 5px"}}>
      <Markdown source={description} />
    </div>
  )

  return align && align === Alignment.Right ? (
    <>
      {txt}
      {imgEl}
    </>
  ) : (
    <>
      {imgEl}
      {txt}
    </>
  )
}

function renderImages(images?: ImageElement[]) {
  {
    if (!images || !images.length) {
      return null
    }

    return (
      <div
        css={css`
          margin-top: 20px;
          font-size: 16px;
        `}
      >
        <ul>
          {images.map((i, idx) => (
            <li
              key={idx}
              css={{
                "& + &": {marginTop: 20}
              }}
            >
              <div
                css={css`
                  display: flex;
                  width: 100%;
                  justify-content: space-between;
                  ${bpMaxSM} {
                    flex-direction: column;
                  }
                `}
              >
                {renderImage(i)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export const StoryRenderer: React.FC<IProps> = ({
  story,
  withDescription = false,
  categories,
  withImages = true,
  yearsBack,
  more,
  less
}) => {
  const [renderAll, setRenderAll] = React.useState(false)

  // Let me know if Metusalem wants to use it
  const renderUntil = subYears(new Date(), yearsBack || 100)
  const allElements = story.filter(c => !categories || categories.some(v => c.categories.includes(v)))
  const limitedElements = allElements.filter(c => compareAsc(c.end, renderUntil) > -1)
  const renderElements = renderAll ? allElements : limitedElements
  return (
    <React.Fragment>
      {renderElements.map(
        ({position, client, logo: img, start, end, slug, short, description, link, tags, recommendations, images}) => {
          const niceStart = formatDate(start)
          const niceEnd = formatDate(end)
          return (
            <div
              key={slug}
              css={css`
                background: white;
                border-radius: 10px;
                padding: 40px;
                ${bpMaxSM} {
                  padding: 20px;
                }
                margin-bottom: 20px;
                ul {
                  list-style: none;
                  margin: 0;
                }
                h4 {
                  text-transform: uppercase;
                  opacity: 0.6;
                  font-size: 13px;
                  letter-spacing: 1px;
                  line-height: 34px;
                  margin: 0;
                }
                h2 {
                  margin: 0;
                  margin-right: 5px;
                  flex: 1 1;
                  ${bpMaxSM} {
                    margin-bottom: 10px;
                  }
                  ${bpMaxSM} {
                    max-width: 100%;
                  }
                }
                hr {
                  margin: 20px 0;
                  opacity: 0.5;
                }
                li > time {
                  float: right;
                  font-size: 14px;
                  opacity: 0.8;
                }
                li {
                  display: flex;
                  align-items: center;
                  margin: 0;
                  margin-bottom: 10px;
                  justify-content: space-between;
                }

                .tags {
                  display: flex;
                  flex-wrap: wrap;
                  margin: 0 -2.5px 0 -2.5px;
                  ${bpMaxSM} {
                    display: none;
                    visibility: invisible;
                  }
                }

                .tag {
                  padding: 1px 8px;
                  background: white;
                  border: 1px solid #f1f1f1;
                  border-radius: 15px;
                  font-size: 12px;
                  margin: 2.5px;
                  background-color: ${theme.colors.background_color};
                  ${bpMaxSM} {
                    padding: 6px 8px;
                    font-size: 14px;
                  }
                }

                img {
                  margin-bottom: 0;
                }
              `}
            >
              <div
                css={css`
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  ${bpMaxSM} {
                    flex-direction: column-reverse;
                    align-items: flex-start;
                  }
                  a {
                    color: inherit;
                  }
                `}
              >
                <div
                  css={{
                    alignSelf: "flex-start",
                    [bpMaxSM]: {alignSelf: "center"}
                  }}
                >
                  <h2
                    css={{
                      [bpMaxSM]: {textAlign: "center"}
                    }}
                  >
                    <a href={`#${slug}`} id={slug}>
                      {position}
                    </a>
                  </h2>
                  <h4
                    css={{
                      [bpMaxSM]: {textAlign: "center"}
                    }}
                  >
                    {client};
                    <small>
                      {" "}
                      {niceStart} -> {niceEnd}
                    </small>
                  </h4>
                </div>
                {renderClientImage(link, img)}
              </div>
              <div
                css={{
                  [bpMaxSM]: {
                    display: "none",
                    visibility: "hidden"
                  }
                }}
              >
                <Tags tags={tags} />
              </div>
              {withDescription ? (
                <>
                  <hr />
                  <div
                    css={css`
                      margin-top: 20px;
                      font-size: 16px;
                    `}
                  >
                    <Markdown source={description} />
                  </div>
                </>
              ) : (
                short && (
                  <>
                    <div
                      css={css`
                        margin-top: 20px;
                        font-size: 16px;
                      `}
                    >
                      <Markdown source={short} />
                    </div>
                  </>
                )
              )}
              {renderRecommendations(recommendations)}
              {withImages && renderImages(images)}

              {/* {!isEmpty(deliveries) && <h4>Presentations</h4>}
            <ul>
              {deliveries.map((delivery, index) => (
                <li key={index}>
                  <div
                    css={{
                      display: "flex",
                      alignItems: "center",
                      "& > p": {marginBottom: 0}
                    }}
                  >
                    <Markdown source={delivery.event} />
                    {delivery.recording ? (
                      <a css={{fontSize: "0.8rem", marginLeft: 10}} href={delivery.recording}>
                        <span role="img" aria-label="recording">
                          📺
                        </span>
                      </a>
                    ) : null}
                  </div>
                  <time>{delivery.date}</time>
                </li>
              ))}
            </ul>
            {!isEmpty(resources) && <h4>Resources</h4>}
            <ul>
              {resources.map((resource, i) => (
                <li key={i}>
                  <Markdown source={resource} />
                </li>
              ))}
            </ul> */}
            </div>
          )
        }
      )}
      {!renderAll && allElements.length > limitedElements.length && (
        <div css={{display: "flex"}}>
          <button css={{margin: "auto"}} type="button" onClick={() => setRenderAll(true)}>
            {more || "Show More"}
          </button>
        </div>
      )}
      {renderAll && allElements.length > limitedElements.length && (
        <div css={{display: "flex"}}>
          <button css={{margin: "auto"}} type="button" onClick={() => setRenderAll(false)}>
            {less || "Show Less"}
          </button>
        </div>
      )}
    </React.Fragment>
  )
}
