function changeform(colorval){
    let color = document.getElementById('colorlist');
    let head = document.getElementById('header');
    color.addEventListener("input", function(){});
    document.body.style.background = colorval.value;
    head.style.color = colorval.value;
}