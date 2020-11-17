function simpleMath() {
    var times = 5 * 10;
    var info = "The answer is ";
    document.getElementById("math").innerHTML = info + times;
}

function subtraction_function() {
    var Subtraction = 7 - 5;
    var minus = "The answer is ";
    document.getElementById("math1").innerHTML =  minus + Subtraction;
}

function addition_function() {
    var Addition = 4 + 3;
    var adds = "The answer is "
    document.getElementById("math2").innerHTML = adds + Addition;
}

function division_function() {
    var divi = 360 / 12;
    var divs = "The answer is "
    document.getElementById("math3").innerHTML = divs + divi;
}

function more_math() {
    var many_math = (1 + 4) * 4 / 2 - 8;
    var many = "The answer is "
    document.getElementById("math4").innerHTML = many + many_math;
}

function modulus_math() {
    var mods = 25 % 6;
    var modd = "When you divide 25 by 6 you have a remainder of ";
    document.getElementById("math5").innerHTML = modd + mods;
}

function negation_Operator() {
    var x = 10;
    var link = "This is using unary operator"
    document.getElementById("math6").innerHTML = link + -x;
}

var y = 8;
y++;
document.write(y);

var z = 22.5;
z--;
document.write(z); 

window.alert(Math.random()*50);
window.alert(Math.round(5.4));