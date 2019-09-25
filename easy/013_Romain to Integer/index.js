/**
 * 使用遞迴方式取得數入字串所有的羅馬字元對應之數字做加總
 * 過程中會與下一個羅馬字元對應之數字比對大小，判斷出當前數字之正負值
 * 
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  if (typeof (s) !== "string" || !s.length)
    return 0

  let charIndex = 0

  return romainCharToInt()

  function romainCharToInt() {
    const char = s[charIndex]
    const nextChar = s[charIndex + 1]

    let integer = romainCharToIntDictionary[char] || 0

    if (nextChar === undefined)
      return integer

    const nextInteger = romainCharToIntDictionary[nextChar]

    if (integer < nextInteger)
      integer = -integer

    charIndex++

    return integer + romainCharToInt()
  }
};

const romainCharToIntDictionary = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000,
}