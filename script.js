function getRandomInt(max){
    return Math.floor(Math.random()*max);
}
function getComputerChoice(){
    let no=getRandomInt(3);
    let CPUchoice=0;
    if (no===0){
        CPUchoice='rock';
    }
    else if (no===1){
        CPUchoice='paper';
    }
    else if (no===2){
        CPUchoice='scissor';
    }
}
function getHumanChoice(){
    no=prompt('Choose a move from the choices below:\nType 0 for Rock\nType 1 for Paper\nType 2 for Scissor');
    let HumanChoice=0;
    if (no==0){
        HumanChoice='rock';
    }
    else if (no==1){
        HumanChoice='paper';
    }
    else if (no==2){
        HumanChoice='scissor';
    }
}
