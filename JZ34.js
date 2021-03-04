/**
 * 时间复杂度：O(2n)
 * 空间复杂度：O(n)
 */
function FirstNotRepeatingChar (str) {
  if (!str.length) return - 1
  let obj = {}
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++
    } else {
      obj[str[i]] = 1
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === 1) return i
  }
  return -1
}

FirstNotRepeatingChar('google')