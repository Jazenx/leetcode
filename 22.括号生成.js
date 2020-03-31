/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let list = []
  gen(list, 0, 0, n, "")
  return list
};

var gen = function(list, left, right, n, result) {
  if (left === n && right === n) {
    list.push(result)
    return
  }
  if (left < n) {
    gen(list, left + 1, right, n, result + "(")
  }
  if (left > right && right < n) {
    gen(list, left, right + 1, n, result + ")")
  }
};
// @lc code=end

