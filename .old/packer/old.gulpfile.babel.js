import * as child from "child_process"
import g from "gulp"

//import ismo from "./var/ismo/pkg/gulpfile.babel.js"
const sturm = "./var/sturm/pkg/gulpfile.babel.js"

//TODO abstract this to build any package having an `pkg` folder with gulpfile.
export async function update() {
  await new Promise((rsv, rjc)=> child.execFile(
    "git",
    ["submodule", "update", "--remote"],
    (err, out)=> !err ? rsv(out) : rjc(err),
  ))
}

export default async function build() {
  await g.series(update, async ()=> await require(sturm).default())()
}
