/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  if(!nums1 || !nums2) return
  const set2 = new Set(nums2)
  return [... new Set(num1.filter(item => set2.has(item)))]
};
// @lc code=end

