function my_Dictionary() {
    var Car = {
        Make: "Ford",
        Model:"Cmax",
        Year: "2015",
        Color: "Black"
    }; //Dictionary of the car that I drive. Use Year,Make,Model, and color to describe it/
    delete Car.Model;
    document.getElementById("Dictionary").innerHTML = Car.Model;
}//Delete that value and message undefined shows up on the web. 