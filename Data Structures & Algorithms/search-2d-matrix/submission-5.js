class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        let row;
        let lastCol = matrix[0].length-1;
        let rowLength = matrix[0].length
        for(let i=0; i<matrix.length; i++){
            console.log(matrix[i][0], matrix[i][lastCol]);
            if(matrix[i][0] <= target && target <= matrix[i][lastCol]){
                row = i;
                break;
            }
        }
        console.log(row)
        if(row==undefined){
            return false;
        }
        else{
            for(let i=0; i<rowLength; i++){
                if(matrix[row][i] == target){
                    return true
                }
            }
            return false
        }
    }
}