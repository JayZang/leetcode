/**
 * 使用迴圈依序判斷字元相符，返回第一個完全匹配之 index
 * 
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (!needle || !needle.length)
        return 0
    else if (!haystack.length || haystack.length < needle.length)
        return -1

    for (let i = 0; i < haystack.length; i++) {
        for (let j = 0; j < needle.length; j++) {
            if (i + j === haystack.length)
                return -1
            if (haystack[i + j] !== needle[j])
                break
            if (j === needle.length - 1)
                return i
        }
    }

    return -1
};