"use strict";
// strict mode now applies for the rest of the script


function check(answer) {
    if (answer === "yes" | answer ==="y") {
        // console.log ("Your answer i Correct ^_^ ")
        alert ("Your answer is Correct ^_^ ")

    } else if (answer == "no" | answer === "n") {
        // console.log ("Your answer i Wrong ~_~")
        alert ("Your answer is Wrong ~_~ ")
        

    } else {
        // console.log ("Yes or no, there is no gray ")
        alert ("Yes or no, there is no gray O_o")

    }
    
}

 
alert ("I will ask you 5 questions as a fun quizze, to test your basic information about who am I and where am I came from, and so on ... ready? let's go  ;) ");

let q1 = prompt ("Q1: Am I Majida Hatamleh?").toLowerCase();
check (q1)
let q2 = prompt ("Q2: Am I from Jordan?").toLowerCase();
check (q2)
let q3 = prompt ("Q3: have I any experience in digital marketing & branding?").toLowerCase();
check (q3)
let q4 = prompt ("Q4: Have I completed postgraduate studies?").toLowerCase();
check (q4)
let q5 = prompt ("Q5: I Did Not participate in this camp for fun?").toLowerCase();
check (q5)




// part 2

let qNmae = prompt ("what about you, What's your name? ");
alert( userName  +  "  , nice name ^_* " );
  
alert ( "nice to meet you, " + qNmae +  "  thank you!! ")



