/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 * 1. 双指针
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (24.68%)
 * Likes:    1660
 * Dislikes: 0
 * Total Accepted:    136.9K
 * Total Submissions: 549.6K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let ans = []
  const len = nums.length
  if (nums == null || len < 3 ) return ans
  nums.sort((a, b) => a - b)
  for(let i = 0; i < len; i++) {
    if (nums[i] > 0) break
    if(i > 0 && nums[i] == nums[i-1]) continue
    let right = len - 1
    let left = i + 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if(sum === 0) {
        ans.push([nums[i], nums[left], nums[right]])
        while (nums[left] == nums[left+1]) left++
        while (nums[right] == nums[right-1]) right--
        left ++;
        right --;        
      } else if (sum < 0) {
        left ++
      } else if (sum > 0) {
        right --
      }
    }
  }
  return ans
};
// @lc code=end

