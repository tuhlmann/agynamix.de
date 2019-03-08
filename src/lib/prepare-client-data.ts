import stripIndent from "strip-indent"
import slugify from "@sindresorhus/slugify"
import {format} from "date-fns"

enum DateFormat {
  MonthAndYear = "MMM YYYY"
}

export interface ClientData {
  position: string
  client: string
  logo?: any
  start: string
  end: string
  description: string
  slug: string
  url?: string
  tags: string[]
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
    description: stripIndent(client.description || ""),
    tags: client.tags || []
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
