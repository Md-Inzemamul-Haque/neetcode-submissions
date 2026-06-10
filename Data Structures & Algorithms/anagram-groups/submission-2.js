class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let charMap = [];
        let result = [];

        outer:
        for(let i=0; i<strs.length; i++){
            let str = strs[i];
            let strMap = {}
            for (let i in str) {
                let char = str[i];
                if (strMap[char]) {
                    strMap[char] += 1;
                } else {
                    strMap[char] = 1;
                }

                // strMap[char] = strMap[char] || 0 + 1;
            }

            for(let obj in charMap){
                let isEqual = this.jsonCompare(charMap[obj], strMap)
                console.log('inside:',isEqual,charMap[obj], strMap)
                if(isEqual){
                    result[obj].push(str)
                    continue outer;
                }
            }
            charMap.push(strMap)
            result.push([str])
        }

        return result;
    }

    jsonCompare(obj1, obj2){
        let keys1 = Object.keys(obj1);
        let keys2 = Object.keys(obj2);

        if(keys1.length != keys2.length) return false;
        return keys1.every(key=>{
            return obj1[key] == obj2[key]
            })
    }
}
