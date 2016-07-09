import * as p from "path"
import * as fs from "fs"
import * as asc from "async"
import g from "gulp"
import Sub from "./sub"
import a from "accessies"

const opts = {
  follow: true, // follow symlinks
}

async function getSubdirs(dir) {
  const subfiles = await new Promise((rsv, rjc)=>
    fs.readdir(dir, (err, files)=> !err ? rsv(files) : rjc(err))
  )
  const stats = await asc.map(subfiles, fs.stat)
  const subdirs = subfiles.filter((e, i)=> stats[i].isDirectory())
  return subdirs
}

export default async function pack(cwd) {
  const subsPath = p.join(cwd, "subs")
  const subsDirs = await getSubdirs(subsPath)

  const tasks = subsDirs.map(e=> new Sub(e).pack)
  await g.parallel(tasks)
}
