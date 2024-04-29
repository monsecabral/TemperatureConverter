"use strict";

const fahrenheitInput = document.getElementById("fahrenheitInput");
const calculateButton = document.getElementById("calculateButton");
const celsiusOutput = document.getElementById("celsiusOutput");

window.onload = init;

function init(){
    calculateButton.onclick = oncalculateButtonClicked;
}

function oncalculateButtonClicked(){
    //starting values
    let fahrenheit = Number(fahrenheitInput.value);

    //compute unkown values
    let celsius = (fahrenheit - 32) * (5 / 9);

    //display results
    celsiusOutput.value = celsius;
}