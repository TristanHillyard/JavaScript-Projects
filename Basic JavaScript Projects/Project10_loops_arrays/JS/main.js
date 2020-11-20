function Call_Loop() {
    var digit = ""
    var A = 5;
    while (A < 12) {
        digit += "<br>" + A;
        A++;
    }
    document.getElementById("Loop").innerHTML = digit;
}

var tee = "How are you doing?"
var t = tee.length;
document.write(t);

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Cars = [];
    Cars[0] ="Driving";
    Cars[1] = "Braking";
    Cars[2] = "Accelerating";
    Cars[3] = "Turning";
    document.getElementById("Array").innerHTML = "Here the car is " + Cars[2];
}

function constant_function() {
    const fastCar = {make:"Subaru", model:"STI", year: "2008", color:"red"};
    fastCar.make ="Subaru";
    fastCar.year = "2009";
    fastCar.color="red"
    document.getElementById("Constant").innerHTML = fastCar.color + fastCar.year;
}

var E = 43;
document.write(E);
{
    let E = 22;
    document.write("<br"> +  E);
}
document.write("<br>" + E);

let dirtbike = {
    make: "Yamaha",
    model: "450",
    year: "2020",
    color: "blue",
    description : function() {
        return "The dirtbike is " + this.make + this.model + this.year + this.color;
    }
};
document.getElementById("db_object").innerHTML = dirtbike.description();

var text = "";
var i;
for (i = 0; i < 10; i++){
    if (i == 3) { break;}
    text += "The number is " + i + "<br>";
}
document.getElementById("brk").innerHTML = text;

var txt = "";
var t;
for (t = 0; t < 10; t++){
    if (t == 6) { continue; }
    txt += "The number is " + t + "<br>";
}
document.getElementById("cont").innerHTML = txt;