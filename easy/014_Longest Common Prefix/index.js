/**
 * 從陣列中各字串的低位字元逐一比對
 * 若有不匹配之字元則返回該字元前之字串
 * 
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0)
    return ''
  else if (strs.length === 1)
    return strs[0]

  for (let i = 0; i < strs[0].length; i++) {
    for (let index = 1; index < strs.length; index++) {
      if (strs[0].charAt(i) !== strs[index].charAt(i))
        return strs[0].slice(0, i)
    }
  }

  return strs[0]
};