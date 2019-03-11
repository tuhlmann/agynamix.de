import fs from "fs"
import path from "path"
import stripIndent from "strip-indent"

const importFrom = "/entw/www/tuhlmann.github.io/resources/templates/md/posts/"
const out = "/entw/www/agynamix.de/content/blog2/"

console.log("Cryogen Import")

interface FileStruct {
  name: string
  fullPath: string
}

function replaceAll(str: string, search: string, replace: string) {
  return str.replace(new RegExp(search, "g"), replace)
}

function convertCryogenToGatsby(from: string, to: string) {
  fs.readdirSync(from)
    .map(file => ({name: file, fullPath: path.resolve(from, file)}))
    .filter(s => fs.statSync(s.fullPath).isFile())
    .forEach(s => {
      console.log(`Converting ${s.name}`)
      convertMdFile(s.name, s.fullPath, to)
    })
}

function convertMdFile(name: string, fullPath: string, to: string) {
  const basename = path.parse(fullPath).name
  const outDir = path.resolve(to, basename)
  if (!fs.existsSync(outDir)) {
    console.log(`creating dir: ${outDir}`)
    fs.mkdirSync(outDir, {recursive: true})
  }

  const contents = fs.readFileSync(fullPath, "utf8")
  const header = createMdHeader(basename)
  const outContents = `${header}\n\n${contents}`

  const outFile = path.resolve(outDir, "index.md")
  fs.writeFileSync(outFile, outContents)
}

function createMdHeader(basename: string): string {
  const date = basename.substr(0, 10)
  const slug = basename.substr(11)
  const title = replaceAll(slug, "-", " ")
  const header = stripIndent(
    `---
  slug: ${slug}
  date: ${date}
  title: '${title}'
  author: 'Torsten Uhlmann'
  categories: []
  keywords: []
  unlisted: true  
  ---`
  )

  return header
}

convertCryogenToGatsby(importFrom, out)
