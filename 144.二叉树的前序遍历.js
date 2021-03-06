/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let nums = []
  let fun = root => {
    nums.push(root.val)
    root.left && fun(root.left)
    root.right && fun(root.right)
  }
  root && fun(root)
  return nums
};
// @lc code=end

