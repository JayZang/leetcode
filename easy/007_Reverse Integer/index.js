/**
 * 重點：數字轉字串 -> 字串切割為字元陣列 -> 陣列反轉 -> 陣列重組成字串 -> 取得數字
 * 
 * Hint:
 * javascript 不論數字是 integer 還是 float 都屬於 number 類型
 * 而 number 類型以 8 Bytes(64 bits) 儲存資料
 * 符號位 1 bit、實數位 52 bit、指數位 11 bit
 * 因此 number 最大值為 2^53 (9007199254740992)
 * 
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let sign = Math.sign(x)
  let result = sign * parseInt(x.toString()
    .split('')
    .reverse()
    .join(''))

  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31))
    result = 0

  return result
};