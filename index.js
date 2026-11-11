
const textbox = document.getElementById("textbox");
const ToFahrenheit = document.getElementById("ToFahrenheit");
const ToCelsius = document.getElementById("ToCelsius");
const result = document.getElementById("result");

let temp;

function convert() {
    if (ToFahrenheit.checked) {
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F"
    }
    else if (ToCelsius.checked) {
        temp = Number(textbox.value);
        temp = (5 / 9) * (temp - 32);
        result.textContent = temp.toFixed(1) + "°C"
    } else {
       result.textContent = "Select a unit";
    }


}


