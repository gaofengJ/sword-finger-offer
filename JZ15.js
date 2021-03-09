/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
function ReverseList (pHead) {
  let pre = null
  let next = null
  while (pHead) {
    next = pHead.next
    pHead.next = pre
    pre = pHead
    pHead = next
  }
  return pre
}