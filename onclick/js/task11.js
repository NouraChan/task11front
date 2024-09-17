let btn = document.getElementById('submitColor');
let $choice = document.getElementById('colorlist');
let texts = document.getElementById('texts');

//let formitems = document.getElementsByClassName('formitems');


function colorChange() {

    document.body.style.backgroundColor = $choice.value;
       texts.style.border= "solid 2px red";

    btn.style.color = $choice.value;
    btn.style.borderColor = $choice.value;
    // texts.style.color = $choice.value;
    
}