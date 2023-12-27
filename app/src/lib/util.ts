export function wait<T>(
  start: () => Promise<T>,
  before: number = 100,
  after: number = 500
): () => Promise<T> {
  let out: T

  return () =>
    new Promise(async resolve => {
      let didBefore = false
      let didAfter = false
      let loaded = false

      setTimeout(() => {
        if (loaded) resolve(out)
        didBefore = true
      }, before)

      setTimeout(() => {
        if (loaded) resolve(out)
        didAfter = true
      }, after)

      out = await start()

      if (!didBefore || didAfter) resolve(out)
      loaded = true
    })
}

export function formatNumber(number: number, long?: boolean) {
  if (long) return Intl.NumberFormat('en').format(number)
  return Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(number)
}

export function formatPercent(number: number) {
  return Intl.NumberFormat('en', {
    notation: 'compact',
    style: 'percent',
  }).format(number)
}

export function relativeDateString(date: number) {
  const current = new Date()
  const target = new Date(date)
  let diff = 0

  if (current.getUTCFullYear() - target.getUTCFullYear() >= 1)
    return new Intl.DateTimeFormat('en', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date)
  else if (current.getUTCMonth() - target.getUTCMonth() >= 1)
    return new Intl.DateTimeFormat('en', {
      month: 'short',
      day: 'numeric',
    }).format(date)
  else if (current.getUTCDate() - target.getUTCDate() >= 1)
    return new Intl.DateTimeFormat('en', {
      month: 'short',
      day: 'numeric',
    }).format(date)
  else if ((diff = current.getUTCHours() - target.getUTCHours()) >= 1)
    return new Intl.RelativeTimeFormat('en', {
      numeric: 'always',
      style: 'narrow',
    }).format(-diff, 'hours')
  else if ((diff = current.getUTCMinutes() - target.getUTCMinutes()) >= 1)
    return new Intl.RelativeTimeFormat('en', {
      numeric: 'always',
      style: 'narrow',
    }).format(-diff, 'minutes')
  else if ((diff = current.getUTCSeconds() - target.getUTCSeconds()) >= 1)
    return new Intl.RelativeTimeFormat('en', {
      numeric: 'always',
      style: 'narrow',
    }).format(-diff, 'seconds')
  else
    return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
      0,
      'seconds'
    )
}

export function formatDate(date: number, time?: boolean) {
  return new Intl.DateTimeFormat('en', {
    dateStyle: 'medium',
    timeStyle: time ? 'short' : undefined,
  }).format(date)
}

export function getDayDiff(from: number, to: number): number {
  const _from = new Date(from)
  const _to = new Date(to)

  _from.setUTCHours(0, 0, 0, 0)
  _to.setUTCHours(0, 0, 0, 0)

  const diffMs = _to.getTime() - _from.getTime()
  const dayDiff = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  return dayDiff
}

export function isSameDay(
  date1: number | undefined,
  date2: number | undefined
): boolean {
  if (date1 === undefined || date2 === undefined) return false

  const _date1 = new Date(date1)
  const _date2 = new Date(date2)

  return (
    _date1.getDate() === _date2.getDate() &&
    _date1.getMonth() === _date2.getMonth() &&
    _date1.getFullYear() === _date2.getFullYear()
  )
}

export * as util from './util'
