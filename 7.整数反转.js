/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 * 
 * 1.取余数
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (34.20%)
 * Likes:    1898
 * Dislikes: 0
 * Total Accepted:    359.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let res = 0
  while (x !== 0) {
    res = res * 10 + x % 10
    x = (x / 10) | 0
  }
  return (res | 0) === res ? res : 0
};
// @lc code=end

