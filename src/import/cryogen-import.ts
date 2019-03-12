import fs from "fs"
import path from "path"
import stripIndent from "strip-indent"
import {string} from "prop-types"
import {math} from "polished"

const BANNER_PATH = "/entw/www/banner/"
const IMPORT_FROM = "/entw/www/tuhlmann.github.io/resources/templates/md/posts/"
const OUT = "/entw/www/agynamix.de/content/blog/"

console.log("Cryogen Import")

function replaceAll(str: string, search: string, replace: string) {
  return str.replace(new RegExp(search, "g"), replace)
}

function convertCryogenToGatsby(from: string, to: string, bannerPath: string) {
  const bannerFiles = fs
    .readdirSync(bannerPath)
    .map(f => path.resolve(bannerPath, f))
    .filter(f => fs.statSync(f).isFile())

  fs.readdirSync(from)
    .map(file => ({name: file, fullPath: path.resolve(from, file)}))
    .filter(s => fs.statSync(s.fullPath).isFile())
    .forEach(s => {
      console.log(`Converting ${s.name}`)
      convertMdFile(s.name, s.fullPath, to, bannerFiles)
    })
}

function convertMdFile(name: string, fullPath: string, to: string, bannerFiles: string[]) {
  const basename = path.parse(fullPath).name
  const outDir = path.resolve(to, basename)
  if (!fs.existsSync(outDir)) {
    console.log(`creating dir: ${outDir}`)
    fs.mkdirSync(outDir, {recursive: true})
  }

  const contents = fs.readFileSync(fullPath, "utf8")
  const header = createMdHeader(basename, contents)
  const outContents = `${header}\n${stripCryoTags(contents)}`

  const outFile = path.resolve(outDir, "index.md")

  copyBannerImg(bannerFiles, path.resolve(outDir, "banner.jpg"))
  fs.writeFileSync(outFile, outContents)
}

function copyBannerImg(bannerFiles: string[], outBannerFile: string) {
  const idx = Math.min(Math.floor(Math.random() * bannerFiles.length), bannerFiles.length - 1)
  const banner = bannerFiles[idx]
  console.log(`Using image #${idx} as banner: ${banner}`)
  fs.copyFileSync(bannerFiles[idx], outBannerFile)
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
banner: "./banner.jpg"
bannerCredit: "Photo by Torsten Uhlmann"
---`
  )

  return header
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

convertCryogenToGatsby(IMPORT_FROM, OUT, BANNER_PATH)
