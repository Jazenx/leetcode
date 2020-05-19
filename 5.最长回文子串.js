/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 * 1.中心扩散法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 判空
  if (s.length === 0 || s == null) return ''
  if (s.length === 1) return s
  // init data
  const strLen = s.length
  let right = 0
  let left = 0
  let len = 0
  let maxStart = 0
  let maxLen = 0
  // 查找
  for (let i = 0; i < strLen; i++) {
    left = i - 1
    right = i + 1
    while (left >= 0 && s.charAt(left) === s.charAt(i)) {
      len++
      left--
    }
    while (right < strLen && s.charAt(right) === s.charAt(i)) {
      len++
      right++
    }
    while (left >= 0 && right < strLen && s.charAt(right) === s.charAt(left)) {
      len = len + 2
      left--
      right++
    }
    if (len > maxLen) {
      maxLen = len
      maxStart = left
    }
    len = 1
  }
  return s.substring(maxStart + 1, maxStart + maxLen + 1)
}
// @lc code=end
