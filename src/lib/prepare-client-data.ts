import stripIndent from "strip-indent"
import slugify from "@sindresorhus/slugify"
import {format} from "date-fns"

enum DateFormat {
  MonthAndYear = "MMM YYYY"
}

export enum Categories {
  Client = "client",
  Resume = "resume",
  Product = "product",
  Training = "training",
  Publication = "publication",
  Education = "education"
}

export interface Recommendation {
  title: string
  date: string
  by: string
  link?: string
  description?: string
}

export interface ClientData {
  position: string
  client: string
  logo?: any
  start: string
  end: string
  short?: string // short description
  description: string
  slug: string
  link?: string
  tags: string[]
  categories: string[] // area of website
  recommendations?: Recommendation[]
}

interface WithDate {
  start: string
}

export function prepareData(client: ClientData) {
  return {
    // defaults
    ...client,

    // overrides
    position: stripIndent(client.position || ""),
    client: stripIndent(client.client || ""),
    slug: slugify(`${client.start}${client.client || ""}`),
    short: client.short ? stripIndent(client.short) : undefined,
    description: stripIndent(client.description || ""),
    tags: client.tags || [],
    recommendations: (client.recommendations && client.recommendations.map(prepareRecommendations)) || undefined
  }
}

function prepareRecommendations(recommendation: Recommendation): Recommendation {
  return {
    ...recommendation,

    title: stripIndent(recommendation.title || ""),
    description: stripIndent(recommendation.description || "")
  }
}

export function sortByDate(a: WithDate, b: WithDate) {
  return moreRecent(a.start, b.start) ? -1 : 1
}

// returns true if a is more recent than b
function moreRecent(a: string, b: string) {
  return new Date(a).getTime() > new Date(b).getTime()
}

export function formatDate(date: string): string {
  const d = new Date(date)
  return format(d, DateFormat.MonthAndYear)
}
