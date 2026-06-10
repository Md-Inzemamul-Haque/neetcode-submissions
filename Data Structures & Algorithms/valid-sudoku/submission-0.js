class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowMap={}
        let colMap={}
        let gridMap={}

        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                let rowNum=board[i][j];
                let colNum=board[j][i];
                let gridIndex=Math.floor(i/3)*3 + Math.floor(j/3)
                if(rowMap[i]){
                    if(rowMap[i].includes(rowNum) && rowNum != '.'){
                        return false
                    } 
                    else {
                        rowMap[i].push(rowNum)
                    }
                }
                else
                {
                    rowMap[i] = [rowNum]
                }

                if(colMap[i]){
                    if(colMap[i].includes(colNum) && colNum != '.'){
                        return false
                    }
                    else{
                        colMap[i].push(colNum)
                    }
                }
                else{
                    colMap[i] = [colNum]
                }

                if(gridMap[gridIndex]){
                    if(gridMap[gridIndex].includes(rowNum) && rowNum != '.'){
                        return false
                    }
                    else{
                        gridMap[gridIndex].push(rowNum)
                    }
                }
                else{
                    gridMap[gridIndex] = [rowNum]
                }
            }
        }
        return true;
    }
}
