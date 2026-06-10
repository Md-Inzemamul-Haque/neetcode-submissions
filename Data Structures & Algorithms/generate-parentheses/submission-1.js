class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    backtrack(openN, closedN, n, res, stack){
        // console.log('stack:',stack)
        // console.log('res:',res)
        if (openN === closedN && openN === n) {
            res.push(stack);
            return;
        }

        if(openN < n){
            this.backtrack(openN+1, closedN, n, res, stack + '(')
        }

        if(closedN < openN){
            this.backtrack(openN, closedN + 1, n, res, stack + ')')
        }
    }

    generateParenthesis(n) {
        const res = [];
        this.backtrack(0, 0, n, res, '')
        return res;
    }
}
