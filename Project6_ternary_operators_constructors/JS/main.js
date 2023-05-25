//A function with HTML and JS using a ternary operation with input from the browser
function Ride_Function() {
    var Height = document.getElementById("Height").value;
    var Can_ride = Height < 52 ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride";
}

//A constructor function utilising "new" and "this" keywords
function_Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

//A function to display the result of the constructor in an HTML element
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " +
    Erik.Vehicle_Color +
    "-coloured " +
    Erik.Vehicle_Model +
    " manufactured in " +
    Erik.Vehicle_Year;
}

//A nested function
function add_Strings() {
    var start_string = "Hello";

    function Adding(str) {
        start_string = start_string + "" + str;
    }
    Adding("World");
    document.getElementById("Nested_Function").innerHTML = start_string;
}