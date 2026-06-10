class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l=0;
        let r=nums.length-1;
        while(l<=r){
            let midInd=l+Math.floor((r-l)/2);
            if(nums[midInd]>target) {
                r=midInd-1
            } 
            else if(nums[midInd]<target) {
                l=midInd+1
            }
            else return midInd
        }
        return -1
    }
}
