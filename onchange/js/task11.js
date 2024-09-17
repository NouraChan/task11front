let header =document.getElementById('header');

function colorChange(color) {
    let $choice = document.getElementById('colorlist');

    $choice.addEventListener("Input", function(){});
    document.body.style.backgroundColor = color.value;
    $choice.style.borderColor = color.value;
    header.style.color = color.value;
}


