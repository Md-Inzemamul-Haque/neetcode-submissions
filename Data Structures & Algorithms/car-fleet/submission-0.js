class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        let pair = position.map((p,i)=>[p, speed[i]]);
        pair.sort((a,b)=>b[0]-a[0]);
        let duration = [];

        for(let [p,s] of pair){
            let currTime = (target-p)/s
            duration.push(currTime);
            if(duration.length > 1 && currTime <= duration[duration.length-2]){
                duration.pop()
            }
        }
        return duration.length;
    }
}
