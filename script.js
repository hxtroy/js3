//Q1 Write a program that takes a number and returns if it's true or false that the number is an even number. **extension: returns odd or even 


const number = prompt("Enter a number to see if it is true or fale that it is even: ");
let number
if(number % 2 == 0) {
    alert("True, this number is even");
}

else {
    alert("False, this number is odd.");
}

//Q2 Edit your program so that the user provides two numbers. Return if it's true or false that number 1 can be divided by number 2, with nothing remaining.

let number=prompt("enter number","5")
let numberTwo=prompt("enter second value")
if (number%numberTwo == 0)
        alert("true")
 else
        alert("false");

//Q3 Write a program that determines how many school buses are needed to take 344 students to the theatre, if each bus can take 42 people.

let noOfStudent=prompt("Enter number of students attending the trip","344")
noOfBusesNeeded=(noOfStudent/42)
alert(Math.ceil(noOfBusesNeeded)+" amount of buses needed")

