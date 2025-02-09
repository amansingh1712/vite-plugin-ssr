export { getCurrentUrl }

import { parseUrl } from './parseUrl'
import { assert } from './assert'

function getCurrentUrl(options?: { withoutHash: true }): string {
  const url = window.location.href
  const { searchOriginal, hashOriginal, pathname } = parseUrl(url, '/')
  let urlCurrent: string
  if (options?.withoutHash) {
    urlCurrent = `${pathname}${searchOriginal || ''}`
  } else {
    urlCurrent = `${pathname}${searchOriginal || ''}${hashOriginal || ''}`
  }
  assert(urlCurrent.startsWith('/'))
  return urlCurrent
}
