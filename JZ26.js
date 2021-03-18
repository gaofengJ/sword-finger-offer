/**
 * 采用中序遍历
 * 时间复杂度：
 * 空间复杂度：
 */
function Convert (pRootOfTree) {
  if (!pRootOfTree) return
  let pre = null
  let head = null
  function dfs (root) {
    if (!root) head = root
    if (!pre) {
      pRootOfTree.left=pre;
      pre.right=pRootOfTree;
    }
    pre = pRootOfTree
  }
  dfs(pRootOfTree)
  return head
}