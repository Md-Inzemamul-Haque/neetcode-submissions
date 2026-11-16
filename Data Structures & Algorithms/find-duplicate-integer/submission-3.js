class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {

        let s=0,f=0;

        // console.log(nums)

        while(true){
            s=nums[s];
            f=nums[nums[f]];
            if(s==f){
                break;
            }
        }

        s=0;
        while(s!=f){
            s=nums[s];
            f=nums[f]
        }
        return f;
    }
}
