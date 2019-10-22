/**
 * 將字串拆分為字元陣列迴圈處理
 * 使用 stack 儲存開頭括號
 * 當遇到非開頭括號時從 stack pop 出最新存入之括號
 * 判斷當前字元是否為對應之關閉括號
 * 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s === '')
        return true

    const stack = []
    const chars = s.split('')

    for (let i = 0; i < chars.length; i++) {
        const char = chars[i]

        if (char === '{' || char === '[' || char === '(') {
            stack.push(char)
        } else {
            const c = stack.pop()
            if (!c ||
                c === '{' && char !== '}' ||
                c === '[' && char !== ']' ||
                c === '(' && char !== ')')
                return false
        }
    }

    return stack.length === 0
};