class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(height.length ==0) return 0;
        let total = 0;
        let l=0, r=height.length-1;
        let maxLeft = height[l], maxRight = height[r];

        while(l<r){
            if(maxLeft < maxRight){
                l++;
                maxLeft = Math.max(height[l],maxLeft);
                total += maxLeft - height[l]
            }else{
                r--;
                maxRight = Math.max(height[r],maxRight); 
                total += maxRight - height[r];
            }
        }
        return total
    }
}
