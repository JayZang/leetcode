/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let result = '1'

    if (n <= 1) return result

    for (let step = 1; step < n; step++) {
        let buf = ''
        let char = result[0]
        let count = 0
        result.split('').forEach(s => {
            if (s === char) {
                count++
            } else {
                buf += count + char
                char = s
                count = 1
            }
        })
        result = buf + count + char
    }

    return result
};