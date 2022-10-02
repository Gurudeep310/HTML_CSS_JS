let stoplight = document.getElementById("stopButton");
let waitlight = document.getElementById("readyButton");
let greenlight = document.getElementById("goButton");
let red = document.getElementById("stopLight");
let yellow = document.getElementById("readyLight");
let green = document.getElementById("goLight");
let power = document.getElementById("powerButton")
function change1()
{
    red.style.backgroundColor = "#cf1124";
    yellow.style.backgroundColor = "#4b5069";
    green.style.backgroundColor = "#4b5069";
    stoplight.style.backgroundColor = "#cf1124";
    waitlight.style.backgroundColor = "#1f1d41";
    greenlight.style.backgroundColor = "#1f1d41";
    power.style.backgroundColor = "#1f1d41"
}
function change2()
{
    yellow.style.backgroundColor = "#f7c948";
    red.style.backgroundColor = "#4b5069";
    green.style.backgroundColor = "#4b5069";
    waitlight.style.backgroundColor = "#f7c948";
    stoplight.style.backgroundColor = "#1f1d41";
    greenlight.style.backgroundColor = "#1f1d41";
    power.style.backgroundColor = "#1f1d41"
}
function change3()
{
    green.style.backgroundColor = "#199473";
    red.style.backgroundColor = "#4b5069";
    yellow.style.backgroundColor = "#4b5069";
    greenlight.style.backgroundColor = "#199473";
    stoplight.style.backgroundColor = "#1f1d41";
    waitlight.style.backgroundColor = "#1f1d41";
    power.style.backgroundColor = "#1f1d41"
}
function change4()
{
    green.style.backgroundColor = "#4b5069";
    red.style.backgroundColor = "#4b5069";
    yellow.style.backgroundColor = "#4b5069";
    greenlight.style.backgroundColor = "#1f1d41";
    stoplight.style.backgroundColor = "#1f1d41";
    waitlight.style.backgroundColor = "#1f1d41";
    power.style.backgroundColor = "#cc7b10"
}