export function isValidSudoku(board: string[][]): boolean {
    //判断线性
        for(let i=0;i<9;i++){
            if(!isValidArea(board,i,0,i,8)) return false;
            if(!isValidArea(board,0,i,8,i)) return false;
        }
        // 判断九宫格
        for(let i=0;i<9;i+=3){
            for(let j=0;j<9;j+=3){
                if(!isValidArea(board,i,j,i+2,j+2))
                    return false;
            }
        }
        return true;
    };
    
    function isValidArea(board:string[][],x1,y1,x2,y2):boolean{
        let times = new Array(9).fill(0);
        let i=x1,j=y1;
        while(i<=x2){
            while(j<=y2){
                //如果是数字的话
                let num = board[i][j];
                if(num!='.'){
                let  index = Number(num) -1;
                // 如果已经出现一次 
                    if(!times[index]){
                        times[index] = 1;
                    }else{
                        return false;
                    }
                }
                j++;
            }
            i++;
        }
        return true;
    }