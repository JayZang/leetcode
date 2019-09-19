/**
 * 將數字轉成字串，之後再反轉比對是否相等
 * 
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeV1 = function (x) {
  return x.toString() === x.toString().split('').reverse().join('')
};

/**
 * 使用數學計算來反轉數字，再比對是否與原數字相等
 * 
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeV2 = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0))
    return false;

  let originNum = x
  let reverseNum = 0

  while (x > 0) {
    reverseNum = reverseNum * 10 + x % 10
    x = parseInt(x / 10)
  }

  return originNum === reverseNum
};