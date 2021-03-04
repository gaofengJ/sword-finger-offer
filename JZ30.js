/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
function FindGreatestSumOfSubArray (array) {
  if (!array.length) return 0
  let total = array[0]
  let maxSum = array[0]
  for (let i = 1; i < array.length; i++) {
    total = total > 0 ? total + array[i] : array[i]
    maxSum = maxSum > total ? maxSum : total
  }
  return maxSum
}