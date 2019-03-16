import fs from "fs"
import path from "path"
import stripIndent from "strip-indent"
import { string } from "prop-types"
import { math } from "polished"

const BANNER_PATH = "/entw/www/banner2/out"
const IMPORT_FROM = "/entw/www/tuhlmann.github.io/resources/templates/md/posts/"
const IMPORT_IMG_FROM = "/entw/www/tuhlmann.github.io/resources/templates"
const OUT = "/entw/www/agynamix.de/content/blog/"

console.log("Cryogen Import")

function replaceAll(str: string, search: string, replace: string) {
  return str.replace(new RegExp(search, "g"), replace)
}

function stripCryoTags(contents: string) {
  const lines = contents.split("\n")
  const outLines = []
  let startCopy = false
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    if (startCopy) {
      outLines.push(line)
    }

    if (line.startsWith("}")) {
      startCopy = true
    }
  }
  return outLines.join("\n")
}

function readTagFromContent(tag: string, contents: string, dflt: string = "") {
  const lines = contents.split("\n")
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    if (line.startsWith("}")) {
      return dflt
    }
    if (line.startsWith(tag)) {
      return line.substr(tag.length).trim()
    }
  }
  return dflt
}

function createMdHeader(basename: string, contents: string): string {
  const date = basename.substr(0, 10)
  const slug = basename.substr(11)
  //const title = replaceAll(slug, "-", " ")
  const title = readTagFromContent(":title", contents)
  let tags = readTagFromContent(":tags", contents, "[]")
  if (tags.includes("uncategorized")) {
    tags = "[]"
  } else {
    tags = tags.substr(1, tags.length - 2).trim()
    const tagsArr = tags.split(" ").filter(it => it.trim().length > 0)
    tags = `[${tagsArr.join(", ")}]`
  }
  const header = stripIndent(
    `---
slug: ${slug}
date: ${date}
title: ${title}
author: "Torsten Uhlmann"
categories: ${tags}
keywords: []
description:
banner: banner.jpg
bannerCredit: "Photo by Torsten Uhlmann"
---`
  )

  return header
}

function copyBannerImg(bannerFiles: string[], outBannerFile: string) {
  const idx = Math.min(Math.floor(Math.random() * bannerFiles.length), bannerFiles.length - 1)
  const banner = bannerFiles[idx]
  console.log(`Using image #${idx} as banner: ${banner}`)
  fs.copyFileSync(bannerFiles[idx], outBannerFile)
}

function copyIncludedImages(contents: string, imgFrom: string, imgStartsWith: string, outDir: string): string {
  let outContents = contents
  let searchFrom = 0
  let pos = -1
  const thumb = "-thumb"

  do {
    pos = outContents.indexOf(imgStartsWith, searchFrom)
    searchFrom = pos + imgStartsWith.length
    if (pos > -1) {
      const pos2 = outContents.indexOf(" ", searchFrom)
      const pos3 = outContents.indexOf(")", searchFrom)
      const endPos = Math.min(
        ...([pos2 > -1 ? pos2 : null, pos3 > -1 ? pos3 : null].filter(v => v !== null) as number[])
      )
      const imgPath = `${imgFrom}${outContents.substr(pos, endPos - pos)}`
      console.log(`found: ${imgPath}`)

      const imgBasename = path.basename(imgPath)
      const imgDestPath = path.resolve(outDir, imgBasename)
      let imgDestLink = `./${imgBasename}`
      const thumbPos = imgDestLink.indexOf(thumb)
      if (thumbPos > -1) {
        imgDestLink = imgDestLink.substr(0, thumbPos) + imgDestLink.substr(thumbPos + thumb.length)
      }
      outContents = `${outContents.substr(0, pos)}${imgDestLink}${outContents.substr(endPos)}`
      if (fs.existsSync(imgPath) && !imgBasename.includes(thumb)) {
        fs.copyFileSync(imgPath, imgDestPath)
      }

      searchFrom = pos + imgDestLink.length + 1
    }
  } while (pos > -1)

  return outContents
}

function convertMdFile(name: string, fullPath: string, imgFrom: string, to: string, bannerFiles: string[]) {
  const basename = path.parse(fullPath).name
  const outDir = path.resolve(to, basename)
  if (!fs.existsSync(outDir)) {
    console.log(`creating dir: ${outDir}`)
    fs.mkdirSync(outDir, {recursive: true})
  }

  const contents = fs.readFileSync(fullPath, "utf8")
  const header = createMdHeader(basename, contents)
  // let outContents = `${header}\n${stripCryoTags(contents)}`

  const outFile = path.resolve(outDir, "index.md")

  // outContents = copyIncludedImages(outContents, imgFrom, "/img/uploads/", outDir)

  copyBannerImg(bannerFiles, path.resolve(outDir, "banner.jpg"))
  // Skip writing md as we already have it.
  // fs.writeFileSync(outFile, outContents)
}

function convertCryogenToGatsby(from: string, imgFrom: string, to: string, bannerPath: string) {
  const bannerFiles = fs
    .readdirSync(bannerPath)
    .map(f => path.resolve(bannerPath, f))
    .filter(f => fs.statSync(f).isFile())

  fs.readdirSync(from)
    .map(file => ({name: file, fullPath: path.resolve(from, file)}))
    .filter(s => fs.statSync(s.fullPath).isFile())
    .forEach(s => {
      console.log(`Converting ${s.name}`)
      convertMdFile(s.name, s.fullPath, imgFrom, to, bannerFiles)
    })
}

convertCryogenToGatsby(IMPORT_FROM, IMPORT_IMG_FROM, OUT, BANNER_PATH)
