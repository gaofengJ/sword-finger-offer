/**
 * 
 * 时间复杂度：O(2的n次方)
 * 空间复杂度：O(1)
 */
function jumpFloor (n) {
  if (n === 1 || n === 2) return n
  return jumpFloor(n - 1) + jumpFloor(n - 2)
}

/**
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
function jumpFloor (n) {
  if (n === 1 || n === 2) return n
  let a = 1
  let b = 2
  let res
  for (let i = 3; i <= n; i++) {
    res = a + b
    a = b
    b = res
  }
  return res
}
