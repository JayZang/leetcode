/**
 * 使用迴圈判斷目標值在陣列中之位置或應放置之位置
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target)
            return i
    }

    return nums.length
};