const $ = (s) => document.querySelector(s);

const weaponButton = document.querySelectorAll('.weapon button');
let playerWeapon;
let computerWeapon;
let won = 0;
let draw = 0;
let lost = 0;


weaponButton.forEach((item, i) =>{
    item.addEventListener('click', ()=>{
        if(i === 0){
            playerWeapon = "Scissors";
            displayCompWeapon();
            console.log("Scissors");
        }else if(i === 1){
            playerWeapon = "Paper";
            displayCompWeapon();
            console.log("Paper");
        }else{
            playerWeapon = "Rock";
            displayCompWeapon();
            console.log("Rock");
        }
    })
});



function displayCompWeapon(){
    const txtCompBoard = $('.weaponBoardTxt');
    txtCompBoard.textContent = "Computer is picking weapon";
    const divplayerWeapon = document.querySelector('.weapon');
    divplayerWeapon.style.display = "none";
    const parentBoard = $('.weaponBoard');
    const newDiv = document.createElement('div');
    newDiv.classList.add('loader');
    parentBoard.append(newDiv);
    setTimeout(() =>{
        takeComputerWeapon();
        console.log("Computer Weapon = ",computerWeapon);
        newDiv.remove();
        txtCompBoard.textContent = "Computer is done picking weapon";
        setTimeout(() =>{
            result();
        }, 1000);
    },1500);
    
}

function takeComputerWeapon(){
    const weapon = ["Scissors", "Paper", "Rock"];
    const weaponRandom = Math.floor(Math.random() * ((weapon.length-1) +1));
    computerWeapon = weapon[weaponRandom];
}

function result(){
    const txtCompBoard = $('.weaponBoardTxt');
    txtCompBoard.textContent = "Result";
    
    const parentBoard = $('.weaponBoard');
    const resultDiv = document.createElement('div');
    const playerResultDiv = document.createElement('div');
    const compResultDiv = document.createElement('div');
    
    playerResultDiv.textContent = `${convertWeapontoEmoji(playerWeapon)}`;
    compResultDiv.textContent = `${convertWeapontoEmoji(computerWeapon)}`;

    resultDiv.classList.add('result');
    resultDiv.append(playerResultDiv, compResultDiv);
    parentBoard.append(resultDiv);
    scoring(playerWeapon, computerWeapon);

    const btnTryAgain = $('.btnTryAgain');
    parentBoard.append(btnTryAgain);
    btnTryAgain.hidden = false;

    btnTryAgain.addEventListener('click', () =>{
        const txtCompBoard = $('.weaponBoardTxt');
        txtCompBoard.textContent = "Select your weapon";
        const divplayerWeapon = document.querySelector('.weapon');
        divplayerWeapon.style.display = "flex";
        
        btnTryAgain.hidden = true;

        resultDiv.remove();
        playerResultDiv.remove();
        compResultDiv.remove();
    });
}

function convertWeapontoEmoji(s){
    if(s === "Scissors"){
        return "✂️";
    }else if(s === "Rock"){
        return "🪨";
    }else{
        return "🗞️";
    }
}


function scoring(player, comp){

    if(player === "Scissors"){
        if(player === "Scissors" && comp === "Scissors"){
            draw += 1;
            updateScore();
        }else if(player === "Scissors" && comp === "Rock"){
            lost += 1;
            updateScore();
        }else if(player === "Scissors" && comp === "Paper"){
            won += 1;
            updateScore();
        }
    }

    if(player === "Paper"){
        if(player === "Paper" && comp === "Paper"){
            draw += 1;
            updateScore();
        }else if(player === "Paper" && comp === "Scissors"){
            lost += 1;
            updateScore();
        }else if(player === "Paper" && comp === "Rock"){
            won += 1;
            updateScore();
        }
    }
    
    if(player === "Rock"){
        if(player === "Rock" && comp === "Rock"){
            draw += 1;
            updateScore();
        }else if(player === "Rock" && comp === "Paper"){
            lost += 1;
            updateScore();
        }else if(player === "Rock" && comp === "Scissors"){
            won += 1;
            updateScore();
        }
    }
}

function updateScore(){
    const spanWon= $(".won");
    const spanLost = $('.lost');
    const spanDraw = $('.draw');

    spanWon.textContent = won;
    spanLost.textContent = lost;
    spanDraw.textContent = draw;
}
