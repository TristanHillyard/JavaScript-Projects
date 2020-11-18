var A = 5;
function add1() {
    document.write(10 + A + "<br>");
}
function add2() {
    document.write(A + 20);
}//Global varible = 15 and 25
add1();
add2();

function add3() {
    var B = 10;
    document.write(15 - B + "<br>");
}//Local variable = 5
add3();

function add4() {
    var C = 2;
    document.write(2 + C + "<br>");
}//Local variable
function add5() {
    document.write(4 + C);
}//Trying to use local variable, shows error in DevTools
add4();
add5();

function find_time() {
    if (new Date().getHours() > 10) {
        document.getElementById("wave").innerHTML = "Lunchtime"
    }
}//using if to display if it can still be lunchtime or not.

function myFunction() {
var letter = document.getElementById("myInput").value;
var text;
if (letter ==="c"){
    text = "Nice job.";
    }
    document.getElementById("guess").innerHTML = text;
}// Guessing between a,b,c,d, if you guess c Nice job is dipslayed. 

function voter() {
    Age = document.getElementById("Age").value
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("your_Age").innerHTML = Vote;
}//If else statement. Depending on your age is if you can vote or not

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is the morning time.";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
}