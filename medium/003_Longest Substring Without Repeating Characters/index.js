/**
 * 依順序迴圈解析每個不重複字元之子字串
 * 並取得其中最長之長度
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s || s.length === 0)
        return 0

    let maxLength = 0
    let charBuf = []

    for (let index = 0; index < s.length; index++) {
        let char = s[index]
        const indexOfDuplicated = charBuf.indexOf(char)

        if (indexOfDuplicated !== -1)
            charBuf = charBuf.splice(indexOfDuplicated + 1)

        charBuf.push(char)
        maxLength = Math.max(maxLength, charBuf.length)
    }

    return maxLength
};