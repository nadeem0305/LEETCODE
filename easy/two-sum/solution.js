/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// brute force solution => O(n^2)
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; ++i)
        for (let j = i + 1; j < nums.length; ++j)
            if (nums[i] + nums[j] === target) return [i, j];
};

// optimized solution => O(n)
const two_sum = (nums, target) => {
    let map = new Map();

    for (let i = 0; i < nums.length; ++i) {
        let diff = target - nums[i];
        if (map.has(diff)) return [map.get(diff), i];

        map.set(nums[i], i);
    }
    return [];
};
