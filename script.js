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
    let no=prompt('Choose a move from the choices below:\nType 0 for Rock\nType 1 for Paper\nType 2 for Scissor');
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
    const info = document.getElementById('info');
    if (HumanChoice==CPUchoice){
        info.innerHTML = 'Its a Draw! No one gets a point.';
    }
    else if (HumanChoice=='rock' && CPUchoice=='paper') {
        info.innerHTML = 'Paper beats rock, CPU gets point.';
        computerScore++
    }
    else if (HumanChoice=='rock' && CPUchoice=='scissor') {
        info.innerHTML = 'Rock beats scissor, Human gets point.';
        humanScore++
    }
    else if (HumanChoice=='paper' && CPUchoice=='rock') {
        info.innerHTML = 'Paper beats rock, Human gets point.';
        humanScore++
    }
    else if (HumanChoice=='paper' && CPUchoice=='scissor') {
        info.innerHTML = 'Scissor beats paper, CPU gets point.';
        computerScore++
    }
    else if (HumanChoice=='scissor' && CPUchoice=='rock') {
        info.innerHTML = 'Rock beats scissor, CPU gets point.';
        computerScore++
    }
    else if (HumanChoice=='scissor' && CPUchoice=='paper') {
        info.innerHTML = 'Scissor beats paper, Human gets point.';
        humanScore++
    }
}
function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}



// for (i=1; i<6; i++){
//     playGame();
//     console.log('Your Score: ' +humanScore);
//     console.log('CPU Score: ' +computerScore);
// }
// if (humanScore>computerScore){
//     console.log('You Win!');
// }
// else if (humanScore<computerScore){
//     console.log('CPU Wins! Better Luck next time.');
// }
// else if (humanScore==computerScore){
//     console.log('It was a draw!');
// }


const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
let gameOver = false;
rock.addEventListener('click',()=>{
    if (gameOver) return;
    let HumanChoice='rock';
    const result = document.getElementById('results');
    const computerSelection = getComputerChoice();
    playRound(HumanChoice,computerSelection);
    const finalResult = document.getElementById('finalResult');
    if(humanScore==5 || computerScore==5){
        gameOver = true;
        if (humanScore>computerScore){
            finalResult.innerHTML= 'You Win!';
        }
        else if (humanScore<computerScore){
            finalResult.innerHTML = 'CPU Wins! Better Luck next time.';
        }
        else if (humanScore==computerScore){
            finalResult.innerHTML = 'It was a draw!';
        }
    }
    result.innerHTML = `<p>Human Score: ${humanScore}</p>`;
    result.innerHTML += `<p>CPU Score: ${computerScore}</p>`;

});
paper.addEventListener('click',()=>{
    if (gameOver) return;
    let HumanChoice='paper';
    const result = document.getElementById('results');
    const computerSelection = getComputerChoice();
    playRound(HumanChoice,computerSelection);
    const finalResult = document.getElementById('finalResult');
    if(humanScore==5 || computerScore==5){
        gameOver = true;
        if (humanScore>computerScore){
            finalResult.innerHTML= 'You Win!';
        }
        else if (humanScore<computerScore){
            finalResult.innerHTML = 'CPU Wins! Better Luck next time.';
        }
        else if (humanScore==computerScore){
            finalResult.innerHTML = 'It was a draw!';
        }
    }
    result.innerHTML = `<p>Human Score: ${humanScore}</p>`;
    result.innerHTML += `<p>CPU Score: ${computerScore}</p>`;
});
scissor.addEventListener('click',()=>{
    if (gameOver) return;
    let HumanChoice='scissor';
    const result = document.getElementById('results');
    const computerSelection = getComputerChoice();
    playRound(HumanChoice,computerSelection);
    const finalResult = document.getElementById('finalResult');
    if(humanScore==5 || computerScore==5){
        gameOver = true;
        if (humanScore>computerScore){
            finalResult.innerHTML= 'You Win!';
        }
        else if (humanScore<computerScore){
            finalResult.innerHTML = 'CPU Wins! Better Luck next time.';
        }
        else if (humanScore==computerScore){
            finalResult.innerHTML = 'It was a draw!';
        }
    }
    result.innerHTML = `<p>Human Score: ${humanScore}</p>`;
    result.innerHTML += `<p>CPU Score: ${computerScore}</p>`;
});
