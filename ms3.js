var board;
const human='0';
const computer='X';
let next;

const cells=document.querySelectorAll('.cell');
startGame();

function startGame() {
    board= [0,1,2,3,4,5,6,7,8];
    for(var i=0;i<cells.length;i++){
        cells[i].innerText= '';
        cells[i].addEventListener('click',turnClick);
    }    
}

function turnClick(cell){
    for(i=0;i<9;i++){
        if(i%2 === 0){
            turn(cell.target.id,human);
        }else
        turn(cell.target.id,computer);
    }
}
function turn(cellId,Player){
    
    document.getElementById(cellId).innerText=Player;

}