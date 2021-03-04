/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
function MoreThanHalfNum_Solution (numbers) {
  let obj = {}
  numbers.forEach(item => {
    if (obj[item]) {
      obj[item]++
    } else {
      obj[item] = 1
    }
  })
  for (let i in obj) {
    if (obj[i] > numbers.length / 2) {
      return i
    }
  }
  return 0
}