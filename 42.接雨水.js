/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * 1. 动态规划
 *
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const size = height.length;
  let total = 0;
  let leftArr = [height[0]];
  let rightArr = [height[size - 1]];
  for (var i = 1; i < size; i++) {
      leftArr.push(Math.max(height[i], leftArr[i-1]));
      rightArr.push(Math.max(height[size-1-i], rightArr[i-1]));
  }
  for (var i = 0; i < size; i++) {
      total += Math.min(leftArr[i], rightArr[size-1-i]) - height[i];
  }
  return total;
}
// @lc code=end
