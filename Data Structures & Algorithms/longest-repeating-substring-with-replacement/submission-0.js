class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let count = {};
        let l=0, res=0;
        let maxF = 0;
        for (let r = 0; r < s.length; r++){
            count[s[r]] = 1 + (count[s[r]] || 0)
            maxF= Math.max(maxF, count[s[r]])
            while((r-l+1) - maxF > k){
                count[s[l]] -= 1
                l++
            }
            res = Math.max(res, r-l+1)
        }
        return res;
    }
}
