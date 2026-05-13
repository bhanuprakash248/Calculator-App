
console.log("Calculator working");
let display = document.getElementById("display");

function appendValue(value){

    display.value += value;

}

function clearDisplay(){

    display.value = "";

}

function calculate(){
    const expression = display.value.trim();
    if (!expression) {
        return;
    }

    try {
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}