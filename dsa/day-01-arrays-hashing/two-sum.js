// Time: O(?), Space: O(?)
var twoSum = function(nums, target) {
    let seen = {};
    for (let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];
        if (seen[compliment] != undefined) {
            return [seen[compliment], i];
        }
        seen[nums[i]] = i;
    }
};