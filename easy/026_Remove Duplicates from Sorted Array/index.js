/**
 * 使用迴圈遍歷整個陣列，將沒有重複之值放置對應之位置
 * 最後可透過設置陣列長度來裁切輸出陣列之大小
 * 
 * 時間複雜度：O(n), where n = nums.length
 * 空間複雜度：O(1)
 * 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let index = 0

    for (let i = 1; i < nums.length; i++) {
        if (nums[index] === nums[i])
            continue
        index++
        nums[index] = nums[i]
    }

    return nums.length = index + 1
};