class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let countMap = {};
        for(let num of nums){
            if(countMap.hasOwnProperty(num)){
                return true;
            }
            else{
                countMap[num] = 1;
            }
        }
        return false;
    }
}
