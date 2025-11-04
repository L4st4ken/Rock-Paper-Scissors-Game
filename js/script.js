const $ = (s) => document.querySelector(s);

const btnGetStarted = $('.btn-getStarted');

btnGetStarted.addEventListener('click', () =>{
    window.location.href = "game.html";
});