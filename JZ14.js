/**
 * 先后指针
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
function FindKthToTail (pHead, k) {
  let first = pHead
  let last = pHead
  while (k && first) {
    first = first.next
    k--
  }
  if (k) return null
  while (first) {
    first = first.next
    last = last.next
  }
  return last
}
