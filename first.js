let userScore=0;
let computerScore=0;
const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const userScorePara=document.querySelector("#you");
const compScorePara=document.querySelector("#comp");
const drawGame=()=>{
    msg.innerText="Game was draw Play again";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
         computerScore++;
        compScorePara.innerText=userScore;
        msg.innerText=`You lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
     //generate computer choice
     const compChoice=genCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
           userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userWin=compChoice==="scissors"?false:true;
    }
    else{
        userWin=compChoice==="rock"?false:true;
    }

    showWinner(userWin,userChoice,compChoice);
}}
choices.forEach(choice=>{
choice.addEventListener('click',()=>{
    const userChoice=choice.getAttribute('id');
 
  playGame(userChoice);
})
});