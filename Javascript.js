let getal = 0;
let counter = document.getElementById("Counter");
var x = document.getElementById("effect");
    
function Code(){
    if (getal >= 10) {
        getal = 0;
    } else {
        getal++;
        x.play();
    }
    counter.innerHTML = getal.toString();
}