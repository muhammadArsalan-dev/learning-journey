// Time: O(n), Space: O(n)
var isAnagram = function(s, t) {
    let sCount = {};
    let tCount = {};
    if (s.length !== t.length) {
        return false;
    } else {
        for (let i = 0; i < s.length; i++) {
            if (sCount[s[i]]) {
                sCount[s[i]] = sCount[s[i]] + 1;
            } else {
                sCount[s[i]] = 1;
            }
            if (tCount[t[i]]) {
                tCount[t[i]] = tCount[t[i]] + 1;
            } else {
                tCount[t[i]] = 1;
            }
        }
        let sKeys = Object.keys(sCount);
        if (sKeys.length !== Object.keys(tCount).length) {
            return false;
        }
        for (let key of sKeys) {
            if (sCount[key] !== tCount[key]) {
                return false;
            }
        }
        return true;
    }
};