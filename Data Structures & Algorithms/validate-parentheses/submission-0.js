class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if([')','}',']'].includes(s[0])){
            return false;
        }

        let bracketMap = {
            ')':'(',
            '}':'{',
            ']':'['
        }

        let stack = [];
        for(let i=0; i<s.length; i++){
            if([')','}',']'].includes(s[i]) && stack[stack.length-1] == bracketMap[s[i]]){
                stack.pop();
            }
            else{
                stack.push(s[i]);
            }
        }

        return stack.length == 0;
    }
}