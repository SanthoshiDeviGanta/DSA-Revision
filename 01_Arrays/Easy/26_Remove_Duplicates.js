function removeDuplicates(nums) {
  let x = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x++;
      nums[x] = nums[i];
    }
  }
  return nums;
}

console.log(removeDuplicates([0, 0, 1, 2, 2, 3, 4, 4, 5]));
