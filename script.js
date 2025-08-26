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
    return CPUchoice;
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
    return HumanChoice;
}
let humanScore=0;
let computerScore=0;
function playRound(HumanChoice,CPUchoice){
    if (HumanChoice==CPUchoice){
        console.log('Its a Draw! No one gets a point.');
    }
    else if (HumanChoice=='rock' && CPUchoice=='paper') {
        console.log('Paper beats rock, CPU gets point.');
        computerScore++
    }
    else if (HumanChoice=='rock' && CPUchoice=='scissor') {
        console.log('Rock beats scissor, Human gets point.');
        humanScore++
    }
    else if (HumanChoice=='paper' && CPUchoice=='rock') {
        console.log('Paper beats rock, Human gets point.');
        humanScore++
    }
    else if (HumanChoice=='paper' && CPUchoice=='scissor') {
        console.log('Scissor beats paper, CPU gets point.');
        computerScore++
    }
    else if (HumanChoice=='scissor' && CPUchoice=='rock') {
        console.log('Rock beats scissor, CPU gets point.');
        computerScore++
    }
    else if (HumanChoice=='scissor' && CPUchoice=='paper') {
        console.log('scissor beats paper, Human gets point.');
        humanScore++
    }
}
function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}
for (i=1; i<6; i++){
    playGame();
    console.log('Your Score: ' +humanScore);
    console.log('CPU Score: ' +computerScore);
}
if (humanScore>computerScore){
    console.log('You Win!');
}
else if (humanScore<computerScore){
    console.log('CPU Wins! Better Luck next time.');
}
else if (humanScore==computerScore){
    console.log('It was a draw!');
}