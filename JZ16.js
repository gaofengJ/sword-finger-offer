/**
 *
 * 时间复杂度：O(m+n)
 * 空间复杂度：O(1)
 */
function Merge (pHead1, pHead2) {
  let vHead = new ListNode(-1) // 一般创建单链表，都会设一个虚拟头结点，也叫哨兵，这样每一个节点都有一个前驱节点
  let cur = vHead
  while (pHead1 && pHead2) {
    if (pHead1.val <= pHead2.val) {
      cur.next = pHead1
      pHead1 = pHead1.next
    } else {
      cur.next = pHead2
      pHead2 = pHead2.next
    }
    cur = cur.next
  }
  cur.next = pHead1 || pHead2
  return vHead.next
}