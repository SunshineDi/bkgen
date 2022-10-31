var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var ul = document.querySelector("ul");
var button = document.getElementById("genNew");
var direction = "right";
var randcol1 = "";
var ramdcol2 = "";


function setGradient() {
    console.log(color1.value);
    console.log(color2.value);
    body.style.background = 
    "linear-gradient(to "+ direction 
    + ", " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background +";" 
}

function ulevent(myDirection) {
    if (myDirection.target.className === "zone dirup") {
        direction = "top";
        setGradient();
    } 
    else if (myDirection.target.className === "zone dirdown"){
        direction = "bottom";
        setGradient(); 
    }
    else if (myDirection.target.className === "zone dirleft"){
        direction = "left";
        setGradient();
    }
    else if (myDirection.target.className === "zone dirright"){
        direction = "right";
        setGradient();
    }
}

function chooseRand() {
    color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
    color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
    setGradient();
}
css.textContent = body.style.background = 
"linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0))";

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient)

ul.addEventListener("click", ulevent);

genNew.addEventListener("click", chooseRand);

