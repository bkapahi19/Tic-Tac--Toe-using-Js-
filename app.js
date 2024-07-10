let boxes =  document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Reset");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;    //playerX,playerO;
let count = 0;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () =>{
    turnO=true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO){            //player O
            box.innerText = "O";
            turnO = false;
        }else{                 //playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
    });
});
const gameDraw = () =>{
    msg.InnerText = `Game was a Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    box.disabled();
};

const checkWinner = () => {
    for(pattern of winpatterns){
        let Pos1 = boxes[pattern[0]].innerText;
        let Pos2 = boxes[pattern[1]].innerText;
        let Pos3 = boxes[pattern[2]].innerText;

        if(Pos1 !="" &&Pos2 !="" &&Pos3 !=""){
            if(Pos1===Pos2 && Pos2===Pos3){
                console.log("winner",Pos1);
                showWinner(Pos1);
                return true;
            }
        }
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
