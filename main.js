TweenMax.staggerTo(".button", 1, {rotation:360, y:100}, 0.5);

let buttonA = document.querySelector('#a');
let buttonS = document.querySelector('#s');
let buttonD = document.querySelector('#d');
let buttonF = document.querySelector('#f');
let buttonG = document.querySelector('#g');
let buttonH = document.querySelector('#h');
let buttonJ = document.querySelector('#j');
let buttonK = document.querySelector('#k');

let musikA = document.querySelector('.musik-a');
let musikS = document.querySelector('.musik-s');
let musikD = document.querySelector('.musik-d');
let musikF = document.querySelector('.musik-f');
let musikG = document.querySelector('.musik-g');
let musikH = document.querySelector('.musik-h');
let musikJ = document.querySelector('.musik-j');
let musikK = document.querySelector('.musik-k');

function changeColor(){
    this.style.background = '#f3994fc9';
    this.style.transition = '.5s';
}
function changeColorReset(){
    this.style.background = 'white';
}
buttonA.addEventListener('mouseover', changeColor);
buttonA.addEventListener('mouseout',changeColorReset);
buttonS.addEventListener('mouseover', changeColor);
buttonS.addEventListener('mouseout',changeColorReset);
buttonD.addEventListener('mouseover', changeColor);
buttonD.addEventListener('mouseout',changeColorReset);
buttonF.addEventListener('mouseover', changeColor);
buttonF.addEventListener('mouseout',changeColorReset);
buttonG.addEventListener('mouseover', changeColor);
buttonG.addEventListener('mouseout',changeColorReset);
buttonH.addEventListener('mouseover', changeColor);
buttonH.addEventListener('mouseout',changeColorReset);
buttonJ.addEventListener('mouseover', changeColor);
buttonJ.addEventListener('mouseout',changeColorReset);
buttonK.addEventListener('mouseover', changeColor);
buttonK.addEventListener('mouseout',changeColorReset);

// let audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
// audio.play();


    buttonA.addEventListener("click", audioA );
    function audioA(){
        musikA.play(),
        this.style.background = '#e4fd00c9';
        this.style.transition = '1s';
    }
    buttonS.addEventListener("click", audioS );
    function audioS(){
        musikS.play(),
        this.style.background = '#e4fd00c9';
        this.style.transition = '1s';
    }
    buttonD.addEventListener("click", audioD );
    function audioD(){
        musikD.play(),
        this.style.background = '#e4fd00c9';
        this.style.transition = '1s';
    }
    buttonF.addEventListener("click", audioF );
    function audioF(){
        musikF.play(),
        this.style.background = '#e4fd00c9';
        this.style.transition = '1s';
    }
    buttonG.addEventListener("click", audioG );
    function audioG(){
        musikG.play(),
        this.style.background = '#e4fd00c9';
        this.style.transition = '1s';
    }
    buttonH.addEventListener("click", audioH );
    function audioH(){
        musikH.play(),
        this.style.background = '#e4fd00c9';
        this.style.transition = '1s';
    }
    buttonJ.addEventListener("click", audioJ );
    function audioJ(){
        musikJ.play(),
        this.style.background = '#e4fd00c9';
        this.style.transition = '1s';
    }
    buttonK.addEventListener("click", audioK );
    function audioK(){
        musikK.play(),
        this.style.background = '#e4fd00c9';
        this.style.transition = '1s';
    }

    window.addEventListener('keypress', function(event){
        switch(event.keyCode) {
            case 97: audioA()
                break;
            case 115: audioS()
                break;
            case 100: audioD()
                break;
            case 102: audioF()
                break;
            case 103: audioG()
                break;
            case 104: audioH()
                break;
            case 106: audioJ()
                break;
            case 107: audioK()
                break;
        }
    });