/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// brute force solution => O(n logn)
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    let sorted_s = s.split("").sort().join("");
    let sorted_t = t.split("").sort().join("");

    if (sorted_s === sorted_t) return true;

    return false;
};

// optimized solution => O(n)
const is_anagram = (s, t) => {
    if (s.length !== t.length) return false;

    let count = new Map();

    for (let i = 0; i < s.length; ++i) {
        count.set(s[i], (count.get(s[i]) || 0) + 1);
        count.set(t[i], (count.get(t[i]) || 0) - 1);
    }

    for (let val of count.values()) if (val !== 0) return false;

    return true;
};

console.log(is_anagram("car", "arc"));
