/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 * 二分查找 √
 * 牛顿迭代法
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x=== 0 || x === 1) return x
  let left = 0
  let right = x
  let res = null
  while (left <= right) {
    const mid = parseInt((left+right)/2);
    console.log(mid)
    if (mid === x/mid) {
      return mid
    } else if (mid > x/mid) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return right
};
// @lc code=end

