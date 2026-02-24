


document.addEventListener('DOMContentLoaded', function listen() {
    var glow = document.querySelector('.glow-img');
    // for desktop 
    glow.addEventListener("mouseover", event => { interval = setInterval(() => changeColor(event), 500) }); 
    glow.addEventListener("mouseout", event => resetColor(event));
    //for phone 
    glow.addEventListener("touchstart", event => { interval = setInterval(() => changeColor(event), 500) }); 
    glow.addEventListener("touchend", event => resetColor(event));
})
function changeColor(event) {
    var colors = ["#00ff04", "#00e1ff", "#ff00ff"]
    var color = colors[Math.floor(Math.random() * colors.length)];
    var glow = event.target;

    glow.style.color = color;
}
function resetColor(event) {
    var glow = event.target;
    glow.style.color = "#ffffff";
}
