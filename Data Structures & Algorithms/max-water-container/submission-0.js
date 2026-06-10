class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let area =0
        let l=0, r=heights.length-1;
        while(l<r){
            let cur = (r-l)*Math.min(heights[l],heights[r])
            area = Math.max(area,cur);
            if(heights[l]<=heights[r]){
                l++;
            } else {
                r--;
            }
        }
        return area;
    }
}
