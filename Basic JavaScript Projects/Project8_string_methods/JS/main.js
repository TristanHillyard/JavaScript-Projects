function about_Function() {
    var snow = "I love to snowmobile ";
    var place = "in the mountians ";
    var amount = "on the weekends";
    var snowmobiling = snow.concat(place, amount);
    document.getElementById("snowy").innerHTML = snowmobiling;
}//using string concat to being together the sentence.

function short_Function() {
    var clean = "I am going to clean the house today.";
    var decision = clean.slice(0,13).toUpperCase(0,13);//Add uppercase to I am going to
    var n = clean.search("clean");//searching for clean.
    document.getElementById("short").innerHTML = decision + n;
}//Going to show "I am going to" on the screen.

function mph() {
    var K = 120
    document.getElementById("distance").innerHTML = K.toString();
}

function pres() {
    var A = 12312.534543;
    document.getElementById("assume").innerHTML = A.toPrecision(7);
}//Using topresicion to display first 7 numbers

function show_Function() {
    var tell = "Do you want to know a secret?"
    var show = tell.valueOf();
    document.getElementById("tough").innerHTML = show;
}// value of the var tell is displayed

function num_Control() {
    var num = 5.342233;
    var nnum = num.toFixed(3);
    document.getElementById("fiz").innerHTML = nnum;
}// rounding num to the 3rd decimal