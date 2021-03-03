/**
 * 时间复杂度：O(logN)
 * 空间复杂度：O(1)
 */
function minNumberInRotateArray (arr) {
  if (!arr.length) return 0
  let min = 0
  let max = arr.length - 1
  let mid = 0
  while (min < max) {
    if (arr[min] < arr[max]) return arr[min]
    mid = Math.floor((min + max) / 2)
    if (arr[mid] > arr[min]) { // 代表min-mid还是递增的
      min = mid + 1
    } else if (arr[mid] < arr[max]) { // 代表mid-max是递增的
      max = mid
    } else {
      min++
    }
  }
  return arr[min]
}
