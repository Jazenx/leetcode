/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let l = 0
  let r = 0
  let map = new Map()
  for (let i of t) {
    map.set(i, map.has(i) ? map.get(i) + 1 : 1)
  }
  let size = map.size
  let res = ''
  while (r < s.length) {
    const word = s[r]
    if (map.has(word)) {
      map.set(word, map.get(word) - 1)
      if (map.get(word) === 0) size -= 1
    }
    while (size === 0) {
      const newRes = s.substring(l, r + 1)
      if (!res || res.length > newRes.length) res = newRes
      const word2 = s[l]
      if (map.has(word2)) {
        map.set(word2, map.get(word2) + 1)
        if (map.get(word2) === 1) size += 1
      }
      l += 1
    }
    r += 1
  }
  return res
}
// @lc code=end
