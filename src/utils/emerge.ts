const emerge = (sth: any, time: number, flag: boolean, ...args) => {
  let ret: any

  flag
    ? (async () => {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          ret = new sth(...args)
          resolve()
        }, time * Math.random())
      })
    })()
    : ret = new sth(...args)

  return ret
}
export default emerge
