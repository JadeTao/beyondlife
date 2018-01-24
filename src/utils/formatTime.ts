type st = string | number

function adjust(time: st) {
  return time < 10 ? '0' + time : time
}

export default function formatTime(time: number): string {
  let ret: string
  if (time < 60) {
    ret = `[0天 00:00:${adjust(time)}]`
  } else if (time < 3600) {
    const minute: st = Math.floor(time / 60)
    const second: st = time % 60
    ret = `[0天 00:${adjust(minute)}:${adjust(second)}]`
  } else if (time < 86400) {
    const hour: st = Math.floor(time / 3600)
    const minute: st = Math.floor((time - 3600 * hour) / 60)
    const second: st = time % 60
    ret = `[0天 ${adjust(hour)}:${adjust(minute)}:${adjust(second)}]`
  }
  return ret
}
