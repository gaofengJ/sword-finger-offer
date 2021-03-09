/**
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
function rectCover (n) {
  if (n === 1 || n === 2) {
    return n
  }
  let a = 1
  let b = 2
  let temp = 0
  for (let i = 3; i <= n; i++) {
    temp = a + b
    a = b
    b = temp
  }
  return temp
}