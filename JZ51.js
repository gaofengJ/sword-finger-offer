/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
function multiply(array) {
  let res = []
  let len = array.length
  res[0] = 1
  for (let i = 1; i < len; i++) { // 计算i之前的乘积
    res[i] = res[i - 1] * array[i - 1]
  }
  let temp = 1
  for (let i = len - 2; i >= 0; i--) { // 计算i之后的乘积
    temp *= array[i + 1]
    res[i] *= temp
  }
  return res
}