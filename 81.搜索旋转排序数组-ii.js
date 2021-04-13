/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let l = 0
  let r = nums.length - 1
  while (l < r) {
    const mid = (l + r) >> 1
    // 当[0, mid]有序时
    if (
      (nums[0] <= nums[mid] && (target > nums[mid] || target < nums[0])) ||
      (target > nums[mid] && target < nums[0])
    ) {
      l = mid + 1
    } else {
      mid + 1
    }
  }
  return l === r && nums[l] === target ? l : -1
}
// @lc code=end
