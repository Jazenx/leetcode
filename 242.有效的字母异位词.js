/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false
  if(s === t) return true
  const map = new Map()
  for (const item of s) {
    const count = map.get(item)
    if (!count) {
      map.set(item, 1)
    } else {
      map.set(item, count + 1)
    }
  }
  for (const item of t) {
    const count = map.get(item)
     if(count === 1) {
      map.delete(item)
    } else if(count) {
      map.set(item, count - 1)
    }
    else {
      map.set(item, 1)
    }
  }
  return map.size ? false : true
};
// @lc code=end

