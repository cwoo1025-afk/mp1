//Global Variables

let button = document.getElementById("button");

function helper(result) {
    if (result < 0) {
        document.getElementById("output").style.color="red";
    }
    else {
        document.getElementById("output").style.color="black";
    }
}

function doAdd() {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let result = Number(first) + Number(second);
    helper(result);
    document.getElementById("output").innerHTML=String(result);
}

function doSub() {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let result = Number(first) - Number(second);
    helper(result);
    document.getElementById("output").innerHTML=String(result);
}

function doMult() {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let result = Number(first) * Number(second);
    helper(result);
    document.getElementById("output").innerHTML=String(result);
}

function doDiv() {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let result = Number(first) / Number(second);
    helper(result);
    document.getElementById("output").innerHTML=String(result);
}

function doPow() {
    //for loop
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let result = 1;
    for (let i =0; i < second; i++) {
        result *= first;
    }
    helper(result);
    document.getElementById("output").innerHTML=String(result);
}

function doClear() {
    //erase content
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
    document.getElementById("output").innerHTML = "";
}
