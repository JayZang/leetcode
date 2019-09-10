/**
 * Version 1
 * 
 * 透過迴圈依序尋找匹配之答案
 * 
 * 時間複雜度：O[n^2]
 * 空間複雜度：O[1]
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum_v1 = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target)
        return [i, j]
    }
  }

  return []
};

/**
 * Version 2
 * 
 * 透過陣列儲存及定位欲尋找之目標，省去二次回圈匹配過程
 * 
 * 時間複雜度：O[n]
 * 空間複雜度：O[n]
 * 
 * @param  {number[]} nums
 * @param  {number}   target
 * @return {number[]}
 */
var twoSum_v2 = function (nums, target) {
  let seen = []

  for (let i = 0; i < nums.length; i++) {
    let remaining = target - nums[i]

    if (seen[remaining] !== undefined)
      return [seen[remaining], i]
    else
      seen[nums[i]] = i
  }

  return []
}