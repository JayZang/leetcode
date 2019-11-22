/**
 * 依序字元放入對應所屬之列陣列
 * 最後在將所有陣列之字元組合起來
 * 
 * 時間複雜度: O(n), where n = s.length
 * 
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert_1 = function (s, numRows) {
    const arr = []
    let row = 0
    let step = 1

    if (numRows === 1)
        return s

    for (let i = 0; i < numRows; i++)
        arr[i] = []

    s.split('').forEach((char, index) => {
        arr[row].push(char)

        if (row === numRows - 1)
            step = -1
        else if (row === 0)
            step = 1

        row += step
    })

    return arr.reduce((accumulator, row) => {
        return accumulator + row.join('')
    }, '')
};

/**
 * 依照演算法，順序取得字元組合成結果
 * 
 * 時間複雜度: O(n), where n = s.length
 * 
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert_2 = function (s, numRows) {
    let offset = numRows * 2 - 2
    let str = ''

    if (numRows === 1)
        return s

    for (let i = 0; i < numRows; i++) {
        for (let index = i; index < s.length; index += offset) {
            str += s[index]
            if (i !== 0 && i !== numRows - 1 && index + offset - 2 * i < s.length) {
                str += s[index + offset - 2 * i]
            }
        }
    }

    return str
}