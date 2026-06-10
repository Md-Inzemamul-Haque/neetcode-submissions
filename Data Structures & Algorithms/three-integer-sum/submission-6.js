class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=>a-b)
        let result=[];
        for(let i=0;i<nums.length;i++){
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let j=i+1, k=nums.length-1;
            while(j<k){
                 let sum = nums[j]+nums[k]+nums[i]; 
                if(sum == 0){
                    result.push([nums[i],nums[j],nums[k]])
                    j++;
                    k--;
                     while (j < k && nums[j] === nums[j - 1]) {
                        j++;
                    }
                }
                else if(sum<0){
                    j++;
                }
                else{
                    k--;
                }

            }
        }
        return result
    }
}
