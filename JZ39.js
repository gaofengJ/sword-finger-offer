/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

function TreeDepth (pRoot) {
  if (!pRoot) return 0
  let left = TreeDepth(pRoot.left)
  if (left === -1) return -1
  let right = TreeDepth(pRoot.right)
  if (right === -1) return -1
  if (Math.abs(left - right) > 1) return -1
  return 1 + Math.max(left, right)
}

function IsBalanced_Solution (pRoot) {
  if (!pRoot) return true
  return TreeDepth(pRoot) !== -1
}
