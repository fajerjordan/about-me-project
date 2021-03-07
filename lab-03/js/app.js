"use strict";
// strict mode now applies for the rest of the script

let counter = 0;
alert("I will ask you 5 questions as a fun quizze, to test your basic information about who am I and where am I came from, and so on ... your answer must be either y/n or yes/no ??");

// q1
function fullname() {
    let q1 = prompt("Q1: Do you know my full name?").toLowerCase();
    if (q1 == "y" || q1 == "yes") {
        // console.log ("Your answer is Correct ^_^ ")
        alert("Oh really!! I didn't expect that");
        counter++;
    } else if (q1 == "n" || q1 == "no") {
        // console.log ("Your answer is Wrong ~_~")
        alert("Well, my name is Majida Hatamleh");

    } else {
        // console.log("your answer must be either y/n or yes/no")
        alert("your answer must be either y/n or yes/no");
    }
    return q1;
}
fullname();

// q2
function citizen() {
    let q2 = prompt("Q2: Am I from Palestine?").toLowerCase();
    if (q2 == "y" || q2 == "yes") {
        // console.log ("Your answer is Wrong ~_~")    
        alert("wrong,  I'm from Jordan ");

    } else if (q2 == "n" || q2 == "no") {
        // console.log ("Your answer is Correct ^_^ ")
        alert("correct, I'm from Jordan");
        counter++;
    } else {
        // console.log("your answer must be either y/n or yes/no")
        alert("your answer must be either y/n or yes/no");
    }
    return q2;
}
citizen();

// q3
function experience() {
    let q3 = prompt("Q3: have I any experience in digital marketing & branding?").toLowerCase();
    if (q3 == "y" || q3 == "yes") {
        // console.log ("Your answer is Correct ^_^ ")
        alert("correct, i have 1 year experience in digital marketing & branding :)");
        counter++;
    } else if (q3 == "n" || q3 == "no") {
        // console.log ("Your answer is Wrong ~_~")
        alert("wrong, I have experience in digital marketing & branding");

    } else {
        // console.log("your answer must be either y/n or yes/no")
        alert("your answer must be either y/n or yes/no");
    }
    return q3;
}
experience();

////

// q4

function major() {
    let q4 = prompt("Q4: Have I studied computer information systems?").toLowerCase();
    if (q4 == "y" || q4 == "yes") {
        // console.log ("Your answer is Wrong ~_~")
        alert("No, I studied management information systems");

    } else if (q4 == "n" || q4 == "no") {
        // console.log ("Your answer is Correct ^_^ ")
        alert("you are right, I studied management information systems");
        counter++;
    } else {
        // console.log("your answer must be either y/n or yes/no")
        alert("your answer must be either y/n or yes/no");
    }
    return q4;
}
major();

////



// q5
function camp() {

    let q5 = prompt("Q5: Do you think I participate in this camp for fun?").toLowerCase();
    if (q5 == "y" || q5 == "yes") {
        // console.log ("Your answer is Wrong ~_~")
        alert("That's funny!! This is not an entertainment camp");

    } else if (q5 == "n" || q5 == "no") {
        // console.log ("Your answer is Correct ^_^ ")
        alert("yes, of course, I didn't come here for fun");
        counter++;
    } else {
        // console.log("your answer must be either y/n or yes/no")
        alert("your answer must be either y/n or yes/no");
    }
    return q5;
}

camp();


// q6  

var i = 0;
let cA = false;
function number() {
    for (i = 0; i < 4; i++) {
        let q6 = prompt("Guess what is my fav number from 20 to 30 ?");
        if (q6 == 23) {
            alert("Yes, 23 My fav number");
            counter++;
            cA = true;
            break;
        }
        else if (q6 >= 20 && q6 <= 22) {
            alert("your guess is too low");
        }
        else if (q6 >= 24 && q6 <= 30) {
            alert("your guess is too high");
        }
    }

    if (!cA) {
        alert("You've exhausted all attempts, my fav number is 23");
    }
}
number();


// q7
function q7(){
    let city ;
    for (let i = 0; i < 6; i++) {
      let q7 = prompt ('Guess my fav city in Jordan, you have only 6 choices');
      let favCity = ['irbid', 'Karak', 'Jerash', 'alSalt', 'amman' , 'Madaba', 'Madaba', 'Mafraq', 'Aqaba', 'zarqa'];
      for (let i = 0; i < 10; i++) {
        if (q7 === favCity[i]) {
          city = favCity[i];
          break;
        }
      }
      if (q7 === city) {
        alert ('Correct');
        counter = counter + 1 ;
        break;
      } else {
        alert ('Wrong');
      }
      //    console.log (q7)  ;
    }
  }
  q7();

///////////////////////////// welcome message  /////////////////////////////////

let welcomeMsg = prompt("Excuse me I forgot to ask you, what is your name?");

alert("Thank you " + welcomeMsg + " for your time, Your score is: " + counter + " / 7 ");