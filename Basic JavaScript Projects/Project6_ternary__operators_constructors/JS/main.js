function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function voter() {
    var Age, no_Vote;
    Age = document.getElementById("Age").value;
    no_Vote = (Age < 18) ? "You are to young " : "You are old enough ";
    document.getElementById("Voter").innerHTML = no_Vote + "to vote";
}

function plane(Flight_num, Location) {
    this.plane_flight = Flight_num;
    this.plane_place = Location;
}
var Tim = new plane(367, "Panama");
var Lee = new plane(355, "Domincan Republic");
function passenger() {
    document.getElementById("New_and_This").innerHTML = "Tim is flying to " + Tim.plane_place + " on flight " + Tim.plane_flight;
}

function add_function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var starting_Point = 5;
        function plus_one() {starting_Point +=1;}
        plus_one();
        return starting_Point;
    }
}