/**
 * 
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(n)
 */
function reConstructBinaryTree (pre, vin) {
  if (!pre.length || !vin.length) return
  let root = new TreeNode(pre[0])
  for (let i = 0; i < vin.length; i++) {
    if (vin[i] === pre[0]) {
      root.left = reConstructBinaryTree(pre.slice(1, 1 + i), vin.slice(0, i)) // 左子树
      root.right = reConstructBinaryTree(pre.slice(1 + i, pre.length), vin.slice(i + 1, vin.length)) // 右子树
      break
    }
  }
  return root
}