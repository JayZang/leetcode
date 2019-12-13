/**
 * 使用迴圈遍歷整個陣列，將非要移除之值放置對應之位置
 * 最後可透過設置陣列長度來裁切輸出陣列之大小
 * 
 * 時間複雜度：O(n), where n = nums.length
 * 空間複雜度：O(1)
 * 
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    if (!nums.length)
        return 0

    let index = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[index] = nums[i]
            index++
        }
    }

    return nums.length = index
};