/**
 * 使用中序遍历寻找弟k个
 * 返回的是节点，不是val
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
function KthNode (root, k) {
  let arr = []
  ldr(root, arr, k)
  return arr[k - 1]
}

function ldr (root, arr, k) {
  if (!root) return
  if (root.left) ldr(root.left, arr)
  if (arr.length === k) return
  arr.push(root)
  if (root.right) ldr(root.right, arr)
}

