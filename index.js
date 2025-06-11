const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
const mySubmit = document.getElementById("mySubmit");
let temp;



document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Stops the page from reloading
    mySubmit.onclick = function(){

        if (toFahrenheit.checked){
            temp = Number(textBox.value);
            temp = temp * 9/5 + 32;
            result.textContent = temp.toFixed(1) + "°F";
        }
        else if (toCelsius.checked){
            temp = Number(textBox.value);
            temp = (temp - 32) * 5/9;
            result.textContent = temp.toFixed(1) + "°C";
        }else{
            result.textContent = "Select a Unit";
        }
    }
});
