function getRandomInt(max){
    return Math.floor(Math.random()*max);
}
function getComputerChoice(){
    let no=getRandomInt(3);
    let choice=0;
    if (no===0){
        choice='rock';
    }
    else if (no===1){
        choice='paper';
    }
    else if (no===2){
        choice='scissor';
    }
}
function getHumanChoice{
    
}