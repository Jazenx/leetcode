/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 * 1. 斐波那契数列
 * 
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (46.14%)
 * Likes:    550
 * Dislikes: 0
 * Total Accepted:    62.8K
 * Total Submissions: 136.2K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const sqrt_5 = Math.sqrt(5)
    const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1)  - Math.pow((1 - sqrt_5) / 2, n + 1)
    return Math.round(fib_n / sqrt_5)
};
// @lc code=end

