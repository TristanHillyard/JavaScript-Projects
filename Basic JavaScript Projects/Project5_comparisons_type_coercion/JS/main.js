document.write(typeof 4);//Using typeof to display "number"

function my_function() {
    document.getElementById("Test").innerHTML = 0/0;//Showing NaN
}

function chocolate() {
    document.getElementById("Test1").innerHTML = isNaN("Chocolate");// Showing true for String
}

function james_Bond() {
document.getElementById("Test2").innerHTML = isNaN('007')// Showing false for non number
}

document.write(2E310);//Infinity
document.write(-3E310);//Negative Infinity

document.write(7<4);// False statement
document.write(4>2);//True statement

console.log(5-3);//Showing 2 in console log.

document.write("11" + 5);// Showing 115 added the 5 to the end of 11

console.log(4>7);//Console showing false

document.write(5+5 == 10);//True 10 equals 10
document.write(6 == 7);//False 6 doesn't equal 7

A = "Tim";
B = "Timmy";
document.write(A === B);//Tim and Timmy are different

C = 7;
D = 7;
document.write(C === D);//True statement 7 equals 7

E = 5;
F = "5";
document.write(E === F);//False statement "5 is a string"

G = 3;
H = 4;
document.write(G === H);//False 3 isn't equal to 4

document.write(8>7 && 10>5);//8 is greater than 7 and so is 10 over 5
{
    document.write(7>8 && 4>2);//True statement, 7 is less than 8 and 4 is greater than 2 
}

{
    document.write(8>9 || 10> 9);//True statement, 8 is less than 9 but 10 is greater than 9 
    document.write(4<3 || 2>3);//False statement, 4 is not less than 3 and 2 is not greater than 3
}

function not_Function() {
    document.getElementById("Not").innerHTML = ! (30 > 20);//False statement, 30 IS greater than 20 not ISNOT
    document.getElementById("Not2").innerHTML= ! (10 > 20);//True statement, 10 is not greater than 20
}