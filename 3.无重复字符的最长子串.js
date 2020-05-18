/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 * 解：
 * 1. 滑动窗口
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let index = 0
  let max = 0
  for (let i = 0, j = 0; j < s.length; j++) {
    index = s.substring(i, j).indexOf(s[j])
    if (index != -1) {
      i = i + index + 1
    }
    max = Math.max(max, j - i + 1)
  }
  return max
}
// @lc code=end
