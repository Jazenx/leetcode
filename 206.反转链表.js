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
var reverseList = function(head) {
  if (!head || !head.next) return head;
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


// practise 1

var reverseList = function (head) {
  // 对入参一定要进行判断
  if (!head || !head.next) return head 
  let cur = head
  let prev = null
  while(cur) {
    // 临时变量暂存 cur 指向的值
    const next = cur.next
    cur.next = prev
    prev = cur 
    cur = next
  }
  return prev
}
