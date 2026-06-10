class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        console.log(strs)

        if(strs.length == 0) return [];

        let encoded = '';

        for(let str of strs){
            encoded+=(str+',#')
        }
        console.log(encoded)

        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        let result = [];
        let word=''
        for(let i=0; i<str.length; i++){
            console.log(str[i],word)
            if(str[i]==','&&str[i+1]=='#'){
                result.push(word)
                word=''
                i++
            }else{
                word+=str[i]
            }
        }

        return result
    }
}
