class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {

        let s=0,f=0;

        while(true){
            s=nums[s];
            f=nums[nums[f]];
            if(s==f){
                break;
            }
        }
        let counter=0;
        s=0;
        while(s!=f){
            s=nums[s];
            f=nums[f];
            counter++
        }
        return f;
    }
}
