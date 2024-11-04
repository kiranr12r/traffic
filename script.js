let p1 = document.createElement('p');

let btn1 = document.getElementById('b1');
btn1.style.backgroundColor = "red";
btn1.style.padding = "2vw"
btn1.style.borderRadius = "5px"
btn1.style.width = "20vw"
btn1.style.borderStyle = "none"
btn1.style.alignItems = "center"
// btn1.style.display = "block"
btn1.style.marginBottom = "2vw"
btn1.style.textAlign = "center"
btn1.style.textAlignLast = "center"
btn1.style.marginLeft = "16vw";
btn1.style.gap = "12vw"

let btn2 = document.getElementById('b2');
btn2.style.backgroundColor = "green";
btn2.style.padding = "2vw"
btn2.style.borderRadius = "5px"
btn2.style.width = "20vw"
btn2.style.borderStyle = "none"
// btn2.style.display = "block"
btn2.style.marginBottom = "2vw"
btn2.style.marginLeft = "5vw";

let btn3 = document.getElementById('b3');
btn3.style.backgroundColor = "orange";
btn3.style.padding = "2vw"
btn3.style.borderRadius = "5px"
btn3.style.width = "20vw"
btn3.style.borderStyle = "none"
btn3.style.marginLeft = "5vw";
// btn3.style.display = "block"

function stop(){
    p1.innerText = "Hey stop there is red signal ";
    document.querySelector('body').append(p1)
    p1.style.fontFamily = "cursive";
    p1.style.fontSize = "4vw"
    p1.style.textAlign = "center"
    p1.style.backgroundColor = "red"
    p1.style.color = "white";
}

function start(){
    p1.innerText = "Hey its Green Start Your vehicle";
    document.querySelector('body').append(p1)
    p1.style.fontFamily = "cursive";
    p1.style.fontSize = "4vw"
    p1.style.textAlign = "center"
    p1.style.backgroundColor = "green"
    p1.style.color = "white";
}

function ready(){
    p1.innerText = "Hey get ready your vehicle ! ";
    document.querySelector('body').append(p1)
    p1.style.fontFamily = "cursive";
    p1.style.fontSize = "4vw"
    p1.style.textAlign = "center"
    p1.style.backgroundColor = "orange"
    p1.style.color = "white";
}