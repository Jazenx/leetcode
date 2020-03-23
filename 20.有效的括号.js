/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const bracketsMap = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  let stack = []
  for (let b of s) {
    if (b in bracketsMap) stack.push(b)
    else {
      if (b !== bracketsMap[stack.pop()]) return false
    }
  }
  return !stack.length
}
// @lc code=end
