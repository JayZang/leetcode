/**
 * 依序將所有可能之子字串比對以取得答案
 * 
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let palindromicStrings = ''

    for (let i = 0; i < s.length; i++) {
        let str1 = s.slice(i, s.length)

        if (palindromicStrings.length > str1.length)
            break

        for (let j = str1.length; j > 0; j--) {
            let str2 = str1.slice(0, j)
            let isAllPass = true

            if (palindromicStrings.length > str2.length)
                break

            for (let k = 0; k <= parseInt(str2.length / 2) - 1; k++) {
                if (str2[k] === str2[str2.length - 1 - k])
                    continue
                else {
                    isAllPass = false
                    break
                }
            }

            if (isAllPass) {
                palindromicStrings = str2
                break
            }
        }
    }

    return palindromicStrings
};