/**
 *
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(n)
 */
function IsPopOrder (pushV, popV) {
  let arr = []
  for (let i = 0; i < pushV.length; i++) {
    arr.push(pushV[i])
    while (arr.length && arr[arr.length - 1] === popV[0]) {
      arr.pop()
      popV.shift()
    }
  }
  return !arr.length
}