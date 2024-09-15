let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newGameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");


// Dissable Button
const disableButtons = () =>{
    btnRef.forEach((element) => (element.disabled = true));
    //enable popup
    popupRef.classList.remove("hide");
};

// Enable new game for to play  new game

const enableButtons = () => {
    btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = false;

    });
    //Disabled popup
    popupRef.classList.add("hide");
};


//New Game
newGameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});
restartBtn.addEventListener("click", () =>{
    count = 0;
    enableButtons();
});
//This Function is executed when player wins
const winFunction = (letter) => {
    disableButtons();
    if (letter == "x"){
        msgRef.innerHTML = "&#x1F389; <br> 'x' Wins";
    }
    else{
        msgRef.innerHTML = "&#x1F389; <br> '0' Wins";
    }
};

// Function for Draw

const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1F60E; <br> It's Draw";
}

//Winning Pattern array
let winningPattern = [[0,1,2], [0,3,6], [2,5,8], [6,7,8], [3,4,5], [1,4,7], [0,4,8], [2,4,6] ];

//Player x plays first
let xTurn =  true;
let count = 0;

// Win Logic

const winchecker = () => {
    //Loop through all win pattern
    for(let i of winningPattern){
        let[element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
        //check if element are filled
        // If three eleemnt are same then declare win
        if (element1 !== "" && element1 === element2 && element2 === element3) {
            // If all three buttons have the same value, pass this value to winFunction
            winFunction(element1);
            return;

        }
    }

}
//Display x/0 on click..
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if(xTurn){
            xTurn = false;
            //Display x
            element.innerText = "x";
            element.disabled = true;
        }
        else{
            xTurn = true;
            //Display y
            element.innerText = "0";
            element.disabled = true;
        }
        //Increment count for each click
        count += 1;
        if(count === 9){
            //Game become draw becouse there are only 9 boxex 
            drawFunction();
        } 
        //check for win on every click
        winchecker();
    });
});

//Enable button and disable popup on  page load
window.onload = enableButtons;   