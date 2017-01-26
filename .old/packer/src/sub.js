import g from "gulp"
import a from "accessies"

const opts = {
  follow: true, // follow symlinks
}

export default class Sub {
  constructor(path) {
    this.path = path
  }

  async pack() {
    const curOpts = {cwd}::a.g(opts)
    //TODO copy all files etc
    await g
      .src("package.yaml", curOpts)
      .pipe()
      .dest("package.json", curOpts)
  }
}
