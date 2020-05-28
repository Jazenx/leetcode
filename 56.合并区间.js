/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 *
 * https://leetcode-cn.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (42.63%)
 * Likes:    429
 * Dislikes: 0
 * Total Accepted:    98.8K
 * Total Submissions: 231.7K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 给出一个区间的集合，请合并所有重叠的区间。
 * 
 * 示例 1:
 * 
 * 输入: [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 
 * 
 * 示例 2:
 * 
 * 输入: [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 * 
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length < 1) return []
  var res = []
  intervals.sort((a, b) => a[0] - b[0])
  res.push(intervals[0])
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > res[res.length - 1][1]) {
      res.push(intervals[i])
    } else if (intervals[i][1] > res[res.length -1][1]) {
      res[res.length - 1][1] = intervals[i][1]
    }
  }
  return res
};
// @lc code=end

