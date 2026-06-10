class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let result = [];
        let operators = ['+','-','*','/'];

        for(let i = 0;i<tokens.length; i++){
            if(operators.includes(tokens[i])){
                let second = result.pop();
                let first = result.pop();
                switch(tokens[i]){
                    case '+': result.push(parseInt(first)+parseInt(second));break;
                    case '-': result.push(parseInt(first)-parseInt(second));break;
                    case '*': result.push(parseInt(first)*parseInt(second));break;
                    case '/': result.push(Math.trunc(parseInt(first)/parseInt(second)));break;
                }
            }
            else {
                result.push(tokens[i])
            }
        }
        return result.pop()
    }
}
