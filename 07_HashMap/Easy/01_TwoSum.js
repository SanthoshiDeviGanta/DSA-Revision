function twoSum(nums, target) {
  let numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let rem = target - nums[i];
    if (numMap.has(rem)) {
      return [numMap.get(rem), i];
    } else {
      numMap.set(nums[i], i);
    }
  }
}
// Return Index of nums
console.log(twoSum([2, 7, 11, 15], 18));
