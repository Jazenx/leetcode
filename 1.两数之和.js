/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let res = []
  nums.forEach((a, i) => {
    nums.slice(i + 1).forEach((b, k) => {
      if (a + b === target) {
        res = [i, i + k + 1]
      }
    }) 
  })
  return res
}
// @lc code=end
