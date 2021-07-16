const checkDuplicate = (result, entry) => {
  for (let i = 0; i < result.length; i++) {
    if (result[i][0] === entry[0] && result[i][1] === entry[1]) {
      return true;
    }
  }
};

var threeSum = function (nums) {
  let result = [];
  let len = nums.length;

  if (len < 3) {
    return [];
  }
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let arr = [nums[i], nums[j], nums[k]];
          arr.sort((a, b) => a - b);
          if (!checkDuplicate(result, arr)) {
            result.push(arr);
          }
        }
      }
    }
  }
  return result;
};

let nums = [1, 1, -2, 4, 2, -4, 0];
console.log(threeSum(nums));
