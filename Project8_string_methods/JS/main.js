//Utilising the .concat() method
function full_sentence() {
    var part_1 = "To be, ";
    var part_2 = "or ";
    var part_3 = "Not to be";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("StringMethod").innerHTML = whole_sentence;
}

//Utilising the .slice() method
function slice_Method() {
    var sentence = "Slice and Dice";
    var section = sentence.slice(10, 14);
    document.getElementById("Slice").innerHTML = section;
}

//Utilising the .toString() method
function string_Method() {
    var myNumber = 999;
    document.getElementById("toString").innerHTML = myNumber.toString();
}

//Utilising the .toPrecision() method
function precision_Method() {
    var myNumber = 123.45678910111213;
    document.getElementById("Specificlength").innerHTML = myNumber.toPrecision(5);
}
