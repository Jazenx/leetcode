/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function() {
  let cur = head
  let prev = null
  while (cur) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
};
// @lc code=end

