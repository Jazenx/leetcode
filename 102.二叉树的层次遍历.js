/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root, floor = 0, arr = []) {
  if (!root) return arr
  levelOrder(root.left, floor + 1, arr)
  if (arr[floor]) {
    arr[floor].push(root.val)
  } else {
    arr[floor] = [root.val]
  }
  levelOrder(root.right, floor + 1, arr)
  return arr
}
// @lc code=end
