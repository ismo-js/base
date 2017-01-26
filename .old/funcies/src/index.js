export const curry = f=> {
  if (!(f instanceof Function)) return f else {
    const len = f.arguments.length

    return function (...args) {
      const curLen = args.length
      const bound = f.bind(this, ...args.slice(0, curLen))

      return (len > curLen)
        ? bound
        : curry(bound())(...args.slice(curLen))
    }
  }
}
