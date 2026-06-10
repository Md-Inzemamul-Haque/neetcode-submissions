class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let map = new Map();

        for(let num=0; num < nums.length; num++){
            let remaining = target - nums[num];
            if(map.has(remaining)){
                return[map.get(remaining), num]
            }
            map.set(nums[num], num)
        }
    }
}
