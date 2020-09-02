/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
  let nums = []
  let stack = []
  if (root) stack.push(root) 
  while (stack.length) {
    root = stack.pop()
    if(root) {
      root.right && stack.push(root.right)
      stack.push(root)
      stack.push(null)
      root.left && stack.push(root.left)
    } else {
      nums.push(stack.pop().val)
    }
  }
  return nums
};
// @lc code=end

