/**
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
function TreeDepth (pRoot) {
  if (!pRoot) return 0
  let left = 1 + TreeDepth(pRoot.left)
  let right = 1 + TreeDepth(pRoot.right)
  return Math.max(left, right)
}