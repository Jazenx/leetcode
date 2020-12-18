/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let node = new ListNode('head')
  let temp = node
  let add = 0
  let sum = 0
  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add
    temp.next = new ListNode(sum % 10)
    temp = temp.next
    add = sum >= 10 ? 1 : 0
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
  }
  add && (temp.next = new ListNode(add))
  return node.next
}
// @lc code=end

// practise 1

var addTwoNumbers = function (l1, l2) {
  let l3 = new ListNode(0)
  // 创建指针
  let pointer = l3
  let carry = 0
  while (l1 || l2) {
    const val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    carry = Math.floor(val / 10)
    pointer.next = new ListNode(val % 10)
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
    pointer = pointer.next
  }
  carry && (pointer.next = new ListNode(carry))
  return l3.next
}
