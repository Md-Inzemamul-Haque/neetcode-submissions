class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;
        
        let sMap={};
        let tMap={};

        for(let i=0; i<s.length; i++){
            if(sMap.hasOwnProperty(s[i])){
                sMap[s[i]]+=1;
            }
            else{
                sMap[s[i]] = 1;
            }

            if(tMap.hasOwnProperty(t[i])){
                tMap[t[i]]+=1;
            }
            else{
                tMap[t[i]] = 1;
            }
        }

        // console.log(sMap, tMap)

        let sKeys = Object.keys(sMap);
        
        for(let i=0; i<sKeys.length; i++){
            // console.log(sKeys[i], sMap[sKeys[i]],  tMap[sKeys[i]])
            if(sMap[sKeys[i]] != tMap[sKeys[i]]){
                    // console.log('enter')
                return false;
            }
        }
        
        return true;
    }
}
