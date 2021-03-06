"use strict";
// strict mode now applies for the rest of the script


alert ("I will ask you 5 questions as a fun quizze, to test your basic information about who am I and where am I came from, and so on ... your answer must be either y/n or yes/no ??");

// q1
let q1= prompt ("Q1: Do you know my full name?").toLowerCase();
if (q1 == "y" || q1 == "yes"){
    // console.log ("Your answer is Correct ^_^ ")
     alert ("Oh really!! I didn't expect that");

} else if (q1 == "n" || q1 == "no"){
    // console.log ("Your answer is Wrong ~_~")
     alert ("Well, my name is Majida Hatamleh"); 

} else {
   // console.log("your answer must be either y/n or yes/no")
    alert ("your answer must be either y/n or yes/no");    
    }

    ////
 
    // q2
let q2= prompt ("Q2: Am I from Palestine?").toLowerCase();
if (q2 == "y" || q1 == "yes"){
    // console.log ("Your answer is Wrong ~_~")    
    alert ("wrong,  I'm from Jordan "); 

} else if (q2 == "n" || q2 == "no"){
   // console.log ("Your answer is Correct ^_^ ")
    alert ("correct, I'm from Jordan");

} else {
   // console.log("your answer must be either y/n or yes/no")
    alert ("your answer must be either y/n or yes/no");    
    }

 
    // q3
let q3= prompt ("Q3: have I any experience in digital marketing & branding?").toLowerCase();
if (q3 == "y" || q3 == "yes"){
    // console.log ("Your answer is Correct ^_^ ")
     alert ("correct, i have 1 year experience in digital marketing & branding :)");

} else if (q3 == "n" || q3 == "no"){
    // console.log ("Your answer is Wrong ~_~")
     alert ("wrong, I have experience in digital marketing & branding"); 

} else {
   // console.log("your answer must be either y/n or yes/no")
    alert ("your answer must be either y/n or yes/no");    
    }

    ////

    // q4
let q4= prompt ("Q4: Have I studied computer information systems?").toLowerCase();
if (q4 == "y" || q4 == "yes"){
     // console.log ("Your answer is Wrong ~_~")
     alert ("No, I studied management information systems"); 

    } else if (q4 == "n" || q4 == "no"){
    // console.log ("Your answer is Correct ^_^ ")
     alert ("you are right, I studied management information systems");

} else {
   // console.log("your answer must be either y/n or yes/no")
    alert ("your answer must be either y/n or yes/no");    
    }

    ////



    // q5
let q5= prompt ("Q5: Do you think I participate in this camp for fun?").toLowerCase();
if (q5 == "y" || q5 == "yes"){
        // console.log ("Your answer is Wrong ~_~")
       alert ("That's funny!! This is not an entertainment camp");
    
} else if (q5 == "n" || q5 == "no"){
     // console.log ("Your answer is Correct ^_^ ")
     alert ("yes, of course, I didn't come here for fun");   

} else {
    // console.log("your answer must be either y/n or yes/no")
    alert ("your answer must be either y/n or yes/no");    
    }



// q6  
var i = 0; 
for (i = 0; i <= 3; i++) { 
let q6= prompt("Guess what is my fav number from 20 to 30 ?");  
     if (q6 == 23) 
        {
        alert("Yes, 23 My fav number");
        break; 
        }
    else if (q6 >= 22 && q6 <=24 ) 
        {
        alert ("your guess is too high");
        } 
    else if (q6 < 22 || q6 > 24) 
        {
        alert ("your guess is too low");
        }
}
alert("You've exhausted all attempts, my fav number is 23")



// q7  
var i= 0; 
for (i = 0; i < 5; i++) { 
    let q7= prompt("Guess what is my fav city in Jordan from: irbid , amman , aqaba , salt , ajlun , maa'n ?");  
    if (q7 === "amman")
    {
        alert("Yes, My fav city is amman");
        breack;  
    } 
    else 
    {
        alert ("your guess is Wrong");
    }
}



///////////////////////////// welcome message  /////////////////////////////////

let userName= prompt("Excuse me I forgot to ask you, what is your name?"); 
alert ( "nice to meet you " + userName +  " , thank you!!")



// counter

