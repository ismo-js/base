import g from "gulp"

export default class Sub {
  constructor(path) {
    this.path = path
  }

  async pack() {
    //TODO add cwd
    //TODO copy all files etc
    await g
      .src("package.yaml", curOpts)
      .pipe()
      .dest("package.json", curOpts)
  }
}
