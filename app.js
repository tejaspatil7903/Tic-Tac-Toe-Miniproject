let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset");
let container = document.querySelector(".msg-container");
let newbtn = document.querySelector("#new");
let msg = document.querySelector(".msg");

let turno = true;
let btncount = 0;

const draw=()=>{
    msg.innerText = "It's A Draw!"
    container.classList.remove("hide");
};

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turno){
            box.innerText="O";
            turno=false;
        }
        else {
            box.innerText="x";
            turno=true;
        }
        box.disabled = true;
        checkWinner();
        btncount++;

        let iswinner = checkWinner();

        if(btncount===9 && !iswinner){
            draw();
            btndisable();
        }

    })
});

const resetbutton=()=>{
    turno=true;
    btnenable();
    container.classList.add("hide");
};

reset.addEventListener("click",resetbutton);
newbtn.addEventListener("click",resetbutton);

const btndisable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const btnenable = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText="";
  }
};

const showwiner = (winner) => {
  msg.innerText = `Congratulations! WINNER is ${winner}`;
  container.classList.remove("hide");
  btndisable();
};

const checkWinner=()=>{
    for (let patterns of winpatterns){
        let pos1val= boxes[patterns[0]].innerText;
        let pos2val= boxes[patterns[1]].innerText;
        let pos3val= boxes[patterns[2]].innerText;

        if (pos1val != ""&&pos2val!=""&&pos3val!=""){
            if (pos1val===pos2val&&pos2val===pos3val){
                showwiner(pos1val);
                btncount ();
            }
        }
    }
};