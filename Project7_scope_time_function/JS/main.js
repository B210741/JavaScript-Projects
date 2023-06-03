//Assigning local and global variables
var x = 10; //global variable

function Add_numbers_1() {
    var x = 99;//local variable
    document.write(10 + x + "<br>");//using local variable
}

function Add_numbers_2() {
    Document.write(x + 11);//using global variable
    console.log(x);//using console.log to debug which variable is being used
}
 
Add_numbers_1();
Add_numbers_2();

//A function that includes an if statement
function get_Date(){
    if (new Date().getHours()< 18){
        document.getElementById("Greeting").innerHTML = "It is currentlu before 6pm";
    }
}

//A function with if and else statements
function get_reply() {
    var user_input = document.getElementById("userInput").value;
    if (user_input % 2 === 0) {
        reply = "You entered an even number!";
        document.getElementById("feedback").innerHTML = reply;
    }
}

//Utilising the Time_function() from previous slides
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 && Time > 0) {
        Reply = "It is morning time!";
    } else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon!";
    } else {
        Reply = "It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}