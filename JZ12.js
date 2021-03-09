/**
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
function Power (base, exponent) {
  if (!base) return 0
  let e = exponent > 0 ? exponent : -exponent // 获取绝对值
  let res = 1
  for (let i = 0; i < e; i++) {
    res *= base
  }
  return exponent > 0 ? res : 1 / res
}