/**
 * 时间复杂度：
 * 空间复杂度：
 */
function FindGreatestSumOfSubArray (array) {
  if (!array.length) return 0
  let total = array[0] // 累计值
  let maxSum = array[0] // 和最大
  for (let i = 1; i < array.length; i++) {
    total = total >= 0 ? total + array[i] : array[i]
    maxSum = total > maxSum ? total :maxSum
  }
  return maxSum
}