/**
 * 时间复杂度：O(2^n)
 * 空间复杂度：递归栈的空间
 */
function Mirror (pRoot) {
  if (!pRoot) return pRoot
  let temp = null
  temp = pRoot.left
  pRoot.left = pRoot.right
  pRoot.right = temp
  Mirror(pRoot.left)
  Mirror(pRoot.right)
  return pRoot
}