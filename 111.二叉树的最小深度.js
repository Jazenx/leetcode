/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0
  if (!root.left && !root.right) return 1
  let a = Number.MAX_SAFE_INTEGER
  if (root.left !== null) {
    a = Math.min(minDepth(root.left), a)
  }
  if (root.right !== null) {
    a = Math.min(minDepth(root.right), a)
  }
  return a + 1
};
// @lc code=end

