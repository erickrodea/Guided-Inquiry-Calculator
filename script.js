// function display(val) {

//     document.getElementById('result').value += val

//     return val

// }
// function solve() {

//     let x = document.getElementById('result').value

//     let y = eval(x);

//     document.getElementById('result').value = y

//     return y

// }
// function clearScreen() {

//     document.getElementById('result').value = ''

// }



// we store the user input
let input = "";
let history = [];


//takes the users clicked values and appends it to the input variable we declared above we then call
function display(value) {
    input += value;
    updateDisplay(input);
}


function solve() {
    const result = eval(input);

    //if number is divided by 0 throw error message
    if (isNaN(result) || !isFinite(result)) {
        updateDisplay("Error");
        input = "";

    } else {
        updateDisplay(result);
        input = result;

    }
}

function clearScreen() {
    input = "";
    updateDisplay(input);
}


//checks to see if number is negative if not it makes it negative on double click it takes the negative off
function toggleSign() {
    if (input.startsWith("-")) {
        input = input.substring(1);

    }


    else {
        input = "-" + input;
    }
    updateDisplay(input);
}



function append(value) {
    input += value;
    updateDisplay(input);
}



function updateDisplay(value) {
    document.getElementById("result").value = value;
}

function percent() {
    //we get the result id from html and the value it holds and parse it into result then we divid by 100 to get percent
    let currentInput = document.getElementById('result').value;
    let result = parseFloat(currentInput) / 100;
    updateDisplay(result);
}



