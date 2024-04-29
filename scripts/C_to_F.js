"use strict";

const fahrenheitOutput = document.getElementById("fahrenheitOutput");
const calculateButton = document.getElementById("calculateButton");
const celsiusInput = document.getElementById("celsiusInput");

window.onload = init;

function init(){
    calculateButton.onclick = oncalculateButtonClicked;
}

function oncalculateButtonClicked(){
    //starting values
    let celsius = Number(celsiusInput.value);

    //compute unkown values
    let fahrenheit = (celsius * 9/5 + 32);

    //display results
    fahrenheitOutput.value = fahrenheit;
}