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




    buttonA.addEventListener("click", audioA );
    function audioA(){
        musikA.play();
        const a = buttonA.style;
        function changeColor(){
            a.background = '#e4fd00c9';
            a.transition = '.5s';
        }
        changeColor();
        function changeColorReset(){
            a.background = 'white';
        }
        setTimeout(changeColorReset, 500);
    }
    buttonS.addEventListener("click", audioS );
    function audioS(){
        musikS.play();
       const s = buttonS.style;
        function changeColor(){
            s.background = '#e4fd00c9';
            s.transition = '.5s';
        }
        changeColor();
        function changeColorReset(){
            s.background = 'white';
        }
        setTimeout(changeColorReset, 500);
    }
    buttonD.addEventListener("click", audioD );
    function audioD(){
        musikD.play();
        const d = buttonD.style;
        function changeColor(){
            d.background = '#e4fd00c9';
            d.transition = '.5s';
        }
        changeColor();
        function changeColorReset(){
            d.background = 'white';
        }
        setTimeout(changeColorReset, 500);
    }
    buttonF.addEventListener("click", audioF );
    function audioF(){
        musikF.play();
        const f = buttonF.style;
        function changeColor(){
            f.background = '#e4fd00c9';
            f.transition = '.5s';
        }
        changeColor();
        function changeColorReset(){
            f.background = 'white';
        }
        setTimeout(changeColorReset, 500);
    }
    buttonG.addEventListener("click", audioG );
    function audioG(){
        musikG.play();
        const g = buttonG.style;
        function changeColor(){
            g.background = '#e4fd00c9';
            g.transition = '.5s';
        }
        changeColor();
        function changeColorReset(){
            g.background = 'white';
        }
        setTimeout(changeColorReset, 500);
    }
    buttonH.addEventListener("click", audioH );
    function audioH(){
        musikH.play();
        const h = buttonH.style;
        function changeColor(){
            h.background = '#e4fd00c9';
            h.transition = '.5s';
        }
        changeColor();
        function changeColorReset(){
            h.background = 'white';
        }
        setTimeout(changeColorReset, 500);
    }
    buttonJ.addEventListener("click", audioJ );
    function audioJ(){
        musikJ.play();
        const j = buttonJ.style;
        function changeColor(){
            j.background = '#e4fd00c9';
            j.transition = '.5s';
        }
        changeColor();
        function changeColorReset(){
            j.background = 'white';
        }
        setTimeout(changeColorReset, 500);
    }
    buttonK.addEventListener("click", audioK );
    function audioK(){
        musikK.play();
        const k = buttonK.style;
        function changeColor(){
            k.background = '#e4fd00c9';
            k.transition = '.5s';
        }
        changeColor();
        function changeColorReset(){
            k.background = 'white';
        }
        setTimeout(changeColorReset, 500);
    }

    window.addEventListener('keypress', function(event){
        switch(event.keyCode) {
            case 65: audioA()
            case 1060: audioA()
            case 97: audioA()
            case 1092: audioA()
                break;
            case 83: audioS()
            case 1067: audioS()
            case 1099: audioS() 
            case 1110: audioS() 
            case 1030: audioS()
            case 115: audioS()
                break;
            case 1042: audioD()
            case 1074: audioD()
            case 68: audioD()
            case 100: audioD()
                break;
            case 1072: audioF()
            case 1040: audioF()
            case 70: audioF()
            case 102: audioF()
                break;
            case 1087: audioG()
            case 1055: audioG()
            case 71: audioG()
            case 103: audioG()
                break;
            case 1088: audioH()
            case 1056: audioH()
            case 72: audioH()
            case 104: audioH()
                break;
            case 1086: audioJ()
            case 1054: audioJ()
            case 74: audioJ()
            case 106: audioJ()
                break;
            case 1083: audioK()
            case 1051: audioK()
            case 75: audioK()
            case 107: audioK()
                break;
        }
    });